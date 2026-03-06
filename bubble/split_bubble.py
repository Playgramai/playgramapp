#!/usr/bin/env python3
"""Split playgram.bubble.json into modular JS ES module files.

Strategy:
- Any dict value whose JSON size >= THRESHOLD gets its own file/folder.
- Splitting is fully recursive up to MAX_DEPTH.
- Strings >= THRESHOLD are replaced with a truncation placeholder (they're
  raw API sample responses — noise for structural analysis).
- All other values are inlined in the parent index.js.
"""

import json, os, re, shutil

SRC = os.path.join(os.path.dirname(__file__), 'playgram.bubble.json')
OUT = os.path.join(os.path.dirname(__file__), 'playgram_split')
THRESHOLD      = 50_000   # bytes; values larger than this get extracted
MAX_DEPTH      = None     # max folder nesting depth (None = unlimited)
MAX_PATH       = 300      # max relative path length (chars) before falling
                          # back to a flat file instead of a new subdirectory

# Dict keys that are pure structural wrappers: instead of creating a
# slug/ subdirectory, write slug.js in the *current* dir and place child
# folders as siblings (halves path depth for deeply-nested element trees).
TRANSPARENT_KEYS = {'elements'}

REDACTED = '***REDACTED***'
ACTION_LINES_THRESHOLD = 300  # lines; actions dicts larger get per-action files
ENTRIES_LINES_THRESHOLD = 300  # lines; numeric-keyed dict items larger get own files


# ---------------------------------------------------------------------------
# Secret redaction
# ---------------------------------------------------------------------------

def redact_secrets(obj, redact_all=False):
    """Recursively redact secret values.

    - Any key containing 'private_key' has its string value replaced.
    - Everything under a 'secure' key is redacted (all string values).
    """
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == 'secure':
                redact_secrets(v, redact_all=True)
            elif redact_all and isinstance(v, str):
                obj[k] = REDACTED
            elif 'private_key' in k and isinstance(v, str):
                obj[k] = REDACTED
            else:
                redact_secrets(v, redact_all=redact_all)
    elif isinstance(obj, list):
        for item in obj:
            redact_secrets(item, redact_all=redact_all)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def ident(s):
    s = re.sub(r'[^a-zA-Z0-9]', '_', str(s))
    s = re.sub(r'_+', '_', s).strip('_')
    if not s or s[0].isdigit():
        s = '_' + s
    return s


def file_slug(s):
    return ident(s).lower()


def jstr(obj):
    return json.dumps(obj, indent=2)


def writefile(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    comment = contd_origin_comment(path)
    with open(path, 'w') as f:
        if comment:
            f.write(comment)
        f.write(text)
    size = os.path.getsize(path)
    rel = os.path.relpath(path, OUT)
    print(f'  {rel}  ({size // 1000} KB)')


def unique_slug(name, seen):
    base = file_slug(name)
    slug = base
    n = 1
    while slug in seen:
        slug = f'{base}_{n}'
        n += 1
    seen.add(slug)
    return slug


def workflow_item_name(key, v):
    """Best human-readable name for a single workflow item."""
    if not isinstance(v, dict):
        return key
    event_name = (v.get('properties') or {}).get('event_name') or ''
    if event_name:
        return event_name
    name = v.get('name') or ''
    if name:
        return name
    wf_name = (v.get('properties') or {}).get('wf_name') or ''
    if wf_name:
        return wf_name
    wtype = v.get('type') or ''
    return f'{wtype}_{key}' if wtype else key


_contd_map = {}       # would-be relpath → contd_N name
_contd_counter = [0]  # mutable counter in list for closure access


def path_too_long(sub_dir):
    """True if the relative path from OUT would exceed MAX_PATH."""
    return len(os.path.relpath(sub_dir, OUT)) > MAX_PATH


def get_contd_dir(would_be_sub_dir):
    """Return a short contd/ path for a would-be path that's too long."""
    rel = os.path.relpath(would_be_sub_dir, OUT)
    if rel in _contd_map:
        return os.path.join(OUT, 'contd', _contd_map[rel])
    _contd_counter[0] += 1
    name = f'contd_{_contd_counter[0]}'
    _contd_map[rel] = name
    return os.path.join(OUT, 'contd', name)


def contd_origin_comment(file_path):
    """Return a JS comment with the original logical path, or empty string."""
    # Check if file_path is inside a contd_N directory
    rel = os.path.relpath(file_path, OUT)
    parts = rel.replace(os.sep, '/').split('/')
    if len(parts) < 2 or parts[0] != 'contd':
        return ''
    contd_name = parts[1]  # e.g. contd_1
    for orig, name in _contd_map.items():
        if name == contd_name:
            return f'// Original path: {orig}\n'
    return ''


def redirect_if_needed(sub_dir):
    """Redirect sub_dir to contd/ if path is too long. Returns (possibly new) sub_dir."""
    if path_too_long(sub_dir):
        return get_contd_dir(sub_dir)
    return sub_dir


def can_recurse(sub_dir, depth):
    """True if we're allowed to create sub_dir and recurse into it."""
    if MAX_DEPTH is not None and depth >= MAX_DEPTH:
        return False
    return True


def needs_subfolder(v):
    """True if dict v has sub-items large enough to warrant further splitting."""
    if not isinstance(v, dict):
        return False
    return any(
        len(jstr(sub)) >= THRESHOLD
        for sub in v.values()
        if sub is not None and not isinstance(sub, str)
    )


def is_workflows_dict(d):
    """True if the dict looks like a Bubble workflows collection."""
    if not isinstance(d, dict):
        return False
    vals = [v for v in d.values() if v is not None]
    if not vals:
        return False
    hits = sum(
        1 for v in vals
        if isinstance(v, dict) and 'type' in v and 'actions' in v
    )
    return hits / len(vals) >= 0.7


def is_numeric_keyed_dict(d):
    """True if d is a dict whose keys are all numeric strings."""
    if not isinstance(d, dict) or not d:
        return False
    return all(isinstance(k, str) and k.isdigit() for k in d.keys())


def is_actions_dict(d):
    """True if d looks like a Bubble numeric-keyed actions collection."""
    if not is_numeric_keyed_dict(d):
        return False
    vals = [v for v in d.values() if v is not None]
    if not vals:
        return False
    hits = sum(1 for v in vals if isinstance(v, dict) and 'type' in v)
    return hits / len(vals) >= 0.7


def is_elements_dict(d):
    """True if d looks like a Bubble elements collection (ID-keyed dicts with name/type)."""
    if not isinstance(d, dict) or not d:
        return False
    vals = [v for v in d.values() if isinstance(v, dict)]
    if not vals or len(vals) / len(d) < 0.7:
        return False
    hits = sum(
        1 for v in vals
        if 'type' in v and ('name' in v or 'default_name' in v)
    )
    return hits / len(vals) >= 0.7


def element_slug(key, value):
    """Derive a filename slug from an element dict item."""
    if isinstance(value, dict):
        name = value.get('name', '') or value.get('default_name', '')
        if name:
            return file_slug(name)
        t = value.get('type', '')
        if t:
            return file_slug(t)
    return file_slug(key)


# ---------------------------------------------------------------------------
# Range-based inline chunking
# ---------------------------------------------------------------------------

INLINE_CHUNK_LINES = 300  # max lines per chunk file


def chunk_inline_entries(inline, export_name, out_dir):
    """Split inline dict entries into ≤INLINE_CHUNK_LINES chunk files.

    Returns a list of (chunk_var, chunk_import_line) tuples, and empties
    `inline` dict (entries moved to chunk files). If total lines ≤ threshold,
    returns empty list and leaves inline unchanged.
    """
    if not inline:
        return []

    # Estimate total lines
    total_lines = sum(jstr(v).count('\n') + 1 for v in inline.values()) + 2
    if total_lines <= INLINE_CHUNK_LINES:
        return []

    # Sort keys (case-insensitive)
    sorted_keys = sorted(inline.keys(), key=lambda k: k.lower())

    # Build chunks respecting line limit
    chunks = []       # list of [(key, value), ...]
    current_chunk = []
    current_lines = 0
    for k in sorted_keys:
        v = inline[k]
        item_lines = jstr(v).count('\n') + 1  # +1 for the key: value, line
        if current_chunk and current_lines + item_lines > INLINE_CHUNK_LINES:
            chunks.append(current_chunk)
            current_chunk = []
            current_lines = 0
        current_chunk.append((k, v))
        current_lines += item_lines
    if current_chunk:
        chunks.append(current_chunk)

    if len(chunks) <= 1:
        return []

    # Write chunk files — use full first/last keys as boundary names
    result = []
    base_slug = file_slug(export_name)
    seen_chunk_names = set()
    for chunk in chunks:
        from_slug = file_slug(chunk[0][0])
        to_slug = file_slug(chunk[-1][0])
        if from_slug == to_slug:
            chunk_name = f'{base_slug}_{from_slug}'
        else:
            chunk_name = f'{base_slug}_{from_slug}_to_{to_slug}'
        # Ensure unique chunk names
        if chunk_name in seen_chunk_names:
            n = 1
            while f'{chunk_name}_{n}' in seen_chunk_names:
                n += 1
            chunk_name = f'{chunk_name}_{n}'
        seen_chunk_names.add(chunk_name)
        chunk_var = ident(chunk_name)

        lines = [f'export const {chunk_var} = {{']
        for k, v in chunk:
            v_js = jstr(v).replace('\n', '\n  ')
            lines.append(f'  {jstr(k)}: {v_js},')
        lines.append('};')

        writefile(os.path.join(out_dir, f'{chunk_name}.js'),
                  '\n'.join(lines) + '\n')
        result.append((chunk_var, f"import {{ {chunk_var} }} from './{chunk_name}.js';"))

    # Clear inline — all entries moved to chunks
    inline.clear()
    return result


def write_chunked_flat_dict(d, export_name, out_dir):
    """Write a large flat dict as a directory with chunk files + index.js.

    Used for standalone data files like id_to_path.js that are too large.
    """
    d = dict(d)  # copy since chunk_inline_entries clears the dict
    chunk_imports = chunk_inline_entries(d, export_name, out_dir)
    if not chunk_imports:
        # Too small to chunk — write as single file
        writefile(os.path.join(out_dir, 'index.js'),
                  f'export const {export_name} = {jstr(d)};\n')
        return

    lines = []
    for _, chunk_imp in chunk_imports:
        lines.append(chunk_imp)
    lines.append('')
    lines.append(f'export const {export_name} = {{')
    # Any remaining entries in d (not cleared by chunking)
    for k, v in d.items():
        v_js = jstr(v).replace('\n', '\n  ')
        lines.append(f'  {jstr(k)}: {v_js},')
    for chunk_var, _ in chunk_imports:
        lines.append(f'  ...{chunk_var},')
    lines.append('};')
    writefile(os.path.join(out_dir, 'index.js'), '\n'.join(lines) + '\n')


# ---------------------------------------------------------------------------
# Actions splitter
# ---------------------------------------------------------------------------

def action_type_slug(action):
    """Derive a filename slug from an action's name (preferred) or type field."""
    if not isinstance(action, dict):
        return 'action'
    name = action.get('name', '')
    if name:
        return file_slug(name)
    t = action.get('type', '')
    return file_slug(t) if t else 'action'


def split_actions_dict(d, actions_dir):
    """Split a numeric-keyed actions dict into per-action files under actions_dir.

    Each action gets its own file named by its type (with a counter suffix for
    duplicates). actions_dir/index.js imports all files and re-exports the
    assembled dict as `export const actions = { "0": ..., "1": ..., ... }`.
    Large actions that contain splittable nested dicts get their own subfolder.
    """
    import_lines = []
    key_to_var = {}
    seen_slugs = set()
    for k in sorted(d.keys(), key=lambda x: int(x)):
        v = d[k]
        slug = unique_slug(action_type_slug(v), seen_slugs)
        var  = ident(slug)
        v_json = jstr(v)
        if isinstance(v, dict) and v_json.count('\n') > ENTRIES_LINES_THRESHOLD \
                and _has_nested_splittable_dict(v):
            sub_dir = redirect_if_needed(os.path.join(actions_dir, slug))
            split_dict(v, sub_dir, var, depth=0)
            rel_import = os.path.relpath(sub_dir, actions_dir).replace(os.sep, '/')
            import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
        else:
            writefile(os.path.join(actions_dir, f'{slug}.js'),
                      f'export const {var} = {v_json};\n')
            import_lines.append(f"import {{ {var} }} from './{slug}.js';")
        key_to_var[k] = var

    lines = import_lines[:]
    if import_lines:
        lines.append('')
    lines.append('export const actions = {')
    for k, var in sorted(key_to_var.items(), key=lambda x: int(x[0])):
        lines.append(f'  {jstr(k)}: {var},')
    lines.append('};')
    writefile(os.path.join(actions_dir, 'index.js'), '\n'.join(lines) + '\n')


# ---------------------------------------------------------------------------
# Numeric-keyed dict splitter (entries, etc.)
# ---------------------------------------------------------------------------

def numeric_entry_slug(key, value):
    """Derive a filename slug from a numeric-keyed dict item."""
    if isinstance(value, dict):
        name = value.get('name', '')
        if name:
            return file_slug(name)
        t = value.get('type', '')
        if t:
            return file_slug(t)
    return f'entry_{key}'


def has_large_entries(d):
    """True if numeric-keyed dict d as a whole exceeds ENTRIES_LINES_THRESHOLD."""
    return jstr(d).count('\n') > ENTRIES_LINES_THRESHOLD


def _has_nested_splittable_dict(obj):
    """True if obj (recursively) contains a large numeric-keyed or elements dict."""
    if isinstance(obj, dict):
        for v in obj.values():
            if isinstance(v, dict):
                if is_numeric_keyed_dict(v) and has_large_entries(v):
                    return True
                if is_elements_dict(v) and has_large_entries(v):
                    return True
            if _has_nested_splittable_dict(v):
                return True
    elif isinstance(obj, list):
        for item in obj:
            if _has_nested_splittable_dict(item):
                return True
    return False


def split_numeric_keyed_dict(d, out_dir, export_name):
    """Split a numeric-keyed dict whose total size exceeds ENTRIES_LINES_THRESHOLD.

    Trivial items (strings, small values) stay inlined. Non-trivial items get
    their own file or subfolder.
    """
    INLINE_MAX = 20  # lines; items smaller than this stay inline
    import_lines = []
    key_to_var = {}
    inline = {}
    seen_slugs = set()

    for k in sorted(d.keys(), key=lambda x: int(x)):
        v = d[k]
        lines = jstr(v).count('\n')
        if isinstance(v, str) or lines <= INLINE_MAX:
            inline[k] = v
            continue
        slug = unique_slug(numeric_entry_slug(k, v), seen_slugs)
        var  = ident(slug)
        sub_dir = redirect_if_needed(os.path.join(out_dir, slug))
        if isinstance(v, dict) and _has_nested_splittable_dict(v):
            split_dict(v, sub_dir, var, depth=0)
            rel_import = os.path.relpath(sub_dir, out_dir).replace(os.sep, '/')
            import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
        else:
            writefile(os.path.join(out_dir, f'{slug}.js'),
                      f'export const {var} = {jstr(v)};\n')
            import_lines.append(f"import {{ {var} }} from './{slug}.js';")
        key_to_var[k] = var

    lines = import_lines[:]
    if import_lines:
        lines.append('')
    lines.append(f'export const {export_name} = {{')
    for k in sorted(list(key_to_var.keys()) + list(inline.keys()), key=lambda x: int(x)):
        if k in key_to_var:
            lines.append(f'  {jstr(k)}: {key_to_var[k]},')
        else:
            v_js = jstr(inline[k]).replace('\n', '\n  ')
            lines.append(f'  {jstr(k)}: {v_js},')
    lines.append('};')
    writefile(os.path.join(out_dir, 'index.js'), '\n'.join(lines) + '\n')


# ---------------------------------------------------------------------------
# Elements dict splitter
# ---------------------------------------------------------------------------

def split_elements_dict(d, out_dir, export_name):
    """Split a Bubble elements dict (ID-keyed, each value has name/type).

    Every non-trivial item gets its own file or subfolder. Trivial items
    stay inlined in the index.js.
    """
    INLINE_MAX = 20  # lines; items smaller than this stay inline
    import_lines = []
    key_to_var = {}
    inline = {}
    seen_slugs = set()

    for k, v in d.items():
        lines = jstr(v).count('\n')
        if not isinstance(v, dict) or lines <= INLINE_MAX:
            inline[k] = v
            continue
        slug = unique_slug(element_slug(k, v), seen_slugs)
        var  = ident(slug)
        sub_dir = redirect_if_needed(os.path.join(out_dir, slug))
        if _has_nested_splittable_dict(v):
            split_dict(v, sub_dir, var, depth=0)
            rel_import = os.path.relpath(sub_dir, out_dir).replace(os.sep, '/')
            import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
        else:
            writefile(os.path.join(out_dir, f'{slug}.js'),
                      f'export const {var} = {jstr(v)};\n')
            import_lines.append(f"import {{ {var} }} from './{slug}.js';")
        key_to_var[k] = var

    lines = import_lines[:]
    if import_lines:
        lines.append('')
    lines.append(f'export const {export_name} = {{')
    for k in key_to_var:
        lines.append(f'  {jstr(k)}: {key_to_var[k]},')
    for k in inline:
        v_js = jstr(inline[k]).replace('\n', '\n  ')
        lines.append(f'  {jstr(k)}: {v_js},')
    lines.append('};')
    writefile(os.path.join(out_dir, 'index.js'), '\n'.join(lines) + '\n')


# ---------------------------------------------------------------------------
# Recursive splitter
# ---------------------------------------------------------------------------

def split_dict(d, out_dir, export_name, depth=0, out_file='index.js',
               chunk_inline=False):
    """
    Write out_dir/out_file that exports `export_name` by assembling dict d.
    Large dict values get their own file or subfolder (recursively).
    Large string values are replaced with a truncation placeholder.
    Keys listed in TRANSPARENT_KEYS skip the intermediate subdirectory:
    their aggregator is written as slug.js in the current dir and their
    children are placed as siblings there.
    If chunk_inline is True, large inline dicts are split into range-based
    chunk files.
    """
    if not isinstance(d, dict):
        writefile(os.path.join(out_dir, 'index.js'),
                  f'export const {export_name} = {jstr(d)};\n')
        return

    import_lines = []   # "import { var } from './path';"
    key_to_var  = {}    # original key -> js var name (for imported items)
    inline      = {}    # original key -> value (for inlined items)

    seen_slugs = set()

    # Workflows dicts: always split every item into its own file regardless of size.
    if is_workflows_dict(d):
        for k, v in d.items():
            if v is None:
                inline[k] = v
                continue
            name = workflow_item_name(k, v)
            slug = unique_slug(name, seen_slugs)
            var  = ident(name)
            sub_dir = redirect_if_needed(os.path.join(out_dir, slug))
            if (needs_subfolder(v) or _has_nested_splittable_dict(v)) and can_recurse(sub_dir, depth):
                split_dict(v, sub_dir, var, depth + 1)
                rel_import = os.path.relpath(sub_dir, out_dir).replace(os.sep, '/')
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            else:
                writefile(os.path.join(out_dir, f'{slug}.js'),
                          f'export const {var} = {jstr(v)};\n')
                import_lines.append(f"import {{ {var} }} from './{slug}.js';")
            key_to_var[k] = var
        # skip the main loop below — fall through to index.js generation
        d = {}  # nothing left to iterate

    for k, v in d.items():
        size = len(jstr(v))

        if size < THRESHOLD and not (isinstance(v, dict) and _has_nested_splittable_dict(v)) \
                and not (isinstance(v, dict) and is_workflows_dict(v)):
            inline[k] = v
            continue

        if isinstance(v, str):
            # Large string — replace with a descriptive placeholder.
            # (These are raw API sample responses stored by Bubble.)
            inline[k] = f'[[TRUNCATED {size // 1000}KB string]]'
            continue

        if isinstance(v, dict):
            name = (v.get('name', '') if isinstance(v, dict) else '') or k
            slug = unique_slug(name, seen_slugs)
            var  = ident(name)
            sub_dir = redirect_if_needed(os.path.join(out_dir, slug))
            rel_import = os.path.relpath(sub_dir, out_dir).replace(os.sep, '/')
            if is_actions_dict(v) and jstr(v).count('\n') > ACTION_LINES_THRESHOLD:
                split_actions_dict(v, sub_dir)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
                key_to_var[k] = var
                continue
            if is_numeric_keyed_dict(v) and has_large_entries(v):
                split_numeric_keyed_dict(v, sub_dir, var)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
                key_to_var[k] = var
                continue
            if is_elements_dict(v) and has_large_entries(v):
                split_elements_dict(v, sub_dir, var)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
                key_to_var[k] = var
                continue
            if k in TRANSPARENT_KEYS and (needs_subfolder(v) or is_workflows_dict(v)):
                # Flatten: write slug.js in current dir, children go here too.
                split_dict(v, out_dir, var, depth + 1, out_file=f'{slug}.js')
                import_lines.append(f"import {{ {var} }} from './{slug}.js';")
            elif (needs_subfolder(v) or is_workflows_dict(v) or _has_nested_splittable_dict(v)) and can_recurse(sub_dir, depth):
                split_dict(v, sub_dir, var, depth + 1)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            elif chunk_inline and isinstance(v, dict) and jstr(v).count('\n') > INLINE_CHUNK_LINES:
                # Large flat dict — write as chunked directory
                write_chunked_flat_dict(v, var, sub_dir)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            else:
                writefile(os.path.join(out_dir, f'{slug}.js'),
                          f'export const {var} = {jstr(v)};\n')
                import_lines.append(f"import {{ {var} }} from './{slug}.js';")
            key_to_var[k] = var
            continue

        if isinstance(v, list):
            # Large list — write it flat (lists can't be imported piecemeal).
            name = k
            slug = unique_slug(name, seen_slugs)
            var  = ident(name)
            fpath = os.path.join(out_dir, f'{slug}.js')
            writefile(fpath, f'export const {var} = {jstr(v)};\n')
            import_lines.append(f"import {{ {var} }} from './{slug}.js';")
            key_to_var[k] = var
            continue

        # Fallback: inline anything else
        inline[k] = v

    # If total inline content exceeds THRESHOLD, extract items one by one
    # into their own named files (largest first) until the remainder fits.
    inline_items = list(inline.items())
    total_inline = sum(len(jstr(v)) for _, v in inline_items)

    if total_inline > THRESHOLD:
        # Sort by size descending so we extract the biggest items first.
        sized = [(k, v, len(jstr(v))) for k, v in inline_items]
        sized.sort(key=lambda t: t[2], reverse=True)

        remaining_size = total_inline
        new_inline = {}
        for k, v, item_size in sized:
            if remaining_size <= THRESHOLD:
                new_inline[k] = v
                continue
            name = (v.get('name', '') if isinstance(v, dict) else '') or k
            slug = unique_slug(name, seen_slugs)
            var  = ident(name)
            sub_dir = redirect_if_needed(os.path.join(out_dir, slug))
            rel_import = os.path.relpath(sub_dir, out_dir).replace(os.sep, '/')
            if isinstance(v, dict) and is_actions_dict(v) and jstr(v).count('\n') > ACTION_LINES_THRESHOLD:
                split_actions_dict(v, sub_dir)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            elif isinstance(v, dict) and is_numeric_keyed_dict(v) and has_large_entries(v):
                split_numeric_keyed_dict(v, sub_dir, var)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            elif isinstance(v, dict) and is_elements_dict(v) and has_large_entries(v):
                split_elements_dict(v, sub_dir, var)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            elif isinstance(v, dict) and (needs_subfolder(v) or is_workflows_dict(v) or _has_nested_splittable_dict(v)) and can_recurse(sub_dir, depth):
                split_dict(v, sub_dir, var, depth + 1)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            elif chunk_inline and isinstance(v, dict) and jstr(v).count('\n') > INLINE_CHUNK_LINES:
                write_chunked_flat_dict(v, var, sub_dir)
                import_lines.append(f"import {{ {var} }} from './{rel_import}/index.js';")
            else:
                writefile(os.path.join(out_dir, f'{slug}.js'),
                          f'export const {var} = {jstr(v)};\n')
                import_lines.append(f"import {{ {var} }} from './{slug}.js';")
            key_to_var[k] = var
            remaining_size -= item_size
        inline = new_inline

    # Optionally chunk large inline dicts into separate files
    chunk_imports = []
    if chunk_inline:
        chunk_imports = chunk_inline_entries(inline, export_name, out_dir)

    # Build index.js
    lines = import_lines[:]
    for _, chunk_imp in chunk_imports:
        lines.append(chunk_imp)
    if lines:
        lines.append('')
    lines.append(f'export const {export_name} = {{')
    for k, var in key_to_var.items():
        lines.append(f'  {jstr(k)}: {var},')
    for k, v in inline.items():
        v_js = jstr(v).replace('\n', '\n  ')
        lines.append(f'  {jstr(k)}: {v_js},')
    for chunk_var, _ in chunk_imports:
        lines.append(f'  ...{chunk_var},')
    lines.append('};')

    writefile(os.path.join(out_dir, out_file), '\n'.join(lines) + '\n')


# ---------------------------------------------------------------------------
# Top-level section helpers
# ---------------------------------------------------------------------------

def handle_section(key, export_name, value, root_out, chunk_inline=False):
    """
    Write a top-level section. If the section is a large dict, split it into
    a subfolder and create a shim .js at root_out level. Otherwise inline.
    """
    if value is None:
        return
    size = len(jstr(value))
    if isinstance(value, dict) and size >= THRESHOLD:
        sec_dir = os.path.join(root_out, key)
        split_dict(value, sec_dir, export_name, chunk_inline=chunk_inline)
        # Shim at root level so root index.js can import cleanly
        writefile(os.path.join(root_out, f'{key}.js'),
                  f"export {{ {export_name} }} from './{key}/index.js';\n")
    else:
        writefile(os.path.join(root_out, f'{key}.js'),
                  f'export const {export_name} = {jstr(value)};\n')


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print(f'Loading {os.path.basename(SRC)}...\n')
    with open(SRC) as f:
        data = json.load(f)

    print('Redacting secrets...')
    redact_secrets(data)

    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT, exist_ok=True)

    # ---- Pages ----
    print('=== pages/ ===')
    split_dict(data['pages'], os.path.join(OUT, 'pages'), 'pages')

    # ---- Element Definitions ----
    print('\n=== element_definitions/ ===')
    split_dict(data['element_definitions'],
               os.path.join(OUT, 'element_definitions'), 'element_definitions',
               chunk_inline=True)

    # ---- Other top-level sections ----
    # Sections whose top-level aggregator index.js should use range-based chunking
    CHUNKED_SECTIONS = {'styles', 'user_types', 'option_sets', '_index'}
    other = [
        ('api',          'api'),
        ('styles',       'styles'),
        ('user_types',   'user_types'),
        ('option_sets',  'option_sets'),
        ('_index',       '_index'),
        ('settings',     'settings'),
        ('mobile_views', 'mobile_views'),
    ]
    for key, export_name in other:
        print(f'\n=== {key} ===')
        handle_section(key, export_name, data.get(key), OUT,
                       chunk_inline=(key in CHUNKED_SECTIONS))

    # ---- Root index.js ----
    print('\n=== root index.js ===')
    managed = {'pages', 'element_definitions', 'api', 'styles', 'user_types',
               'option_sets', '_index', 'conflicts', 'merge_changes',
               'settings', 'mobile_views'}
    scalar_props = {k: v for k, v in data.items() if k not in managed}

    section_imports = [
        ('pages',               './pages/index.js'),
        ('element_definitions', './element_definitions/index.js'),
        ('api',                 './api.js'),
        ('styles',              './styles.js'),
        ('user_types',          './user_types.js'),
        ('option_sets',         './option_sets.js'),
        ('_index',              './_index.js'),
        ('settings',            './settings.js'),
        ('mobile_views',        './mobile_views.js'),
    ]

    lines = [f"import {{ {name} }} from '{path}';"
             for name, path in section_imports]
    lines += [
        '',
        'export const app = {',
        *[f'  {name},' for name, _ in section_imports],
        '  conflicts: null,',
        '  merge_changes: null,',
    ]
    for k, v in scalar_props.items():
        v_js = jstr(v).replace('\n', '\n  ')
        lines.append(f'  {jstr(k)}: {v_js},')
    lines.append('};')

    writefile(os.path.join(OUT, 'index.js'), '\n'.join(lines) + '\n')

    print(f'\nDone -> {OUT}')


main()
