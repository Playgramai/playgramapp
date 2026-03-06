export const group_container = {
  "elements": {
    "bTwRj": {
      "properties": {
        "content": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "You are a Memory Gate for a cross-LLM platform. Decide which dialogue pairs (the current exchange and unsaved context items) must be stored, where they belong (\u2018memory_level\u2019), whether they should auto-attach to every future LLM call in this chat, and whether they should also be stored in long-term memory. Then output ONLY the result array.\n\n\u2500\u2500\u2500 INPUT \u2500\u2500\u2500\nYou receive an object with:\n\n* user: the current user message\n* llm: your reply to that message\n* channel: one of 'team' | 'project' | 'personal'\n* context: an array of prior pairs, each with:\n  \u2022 id (string), created_at (unix ms), user (text), llm (text),\n  \u2022 already_saved_long_term (boolean), already_saved_current_chat (boolean)\n\nNotes:\n\n* The current pair is NOT in context; evaluate it separately.\n* Context items with `already_saved_long_term == true` \u2192 only evaluate whether they still need `save_to_current_chat`.\n* Context items with `already_saved_current_chat == true` \u2192 only evaluate whether they still need `save_to_long_term`.\n* If both flags are true for a context item \u2192 DO NOT evaluate or re-save it.\n* For any pair (current or context), do not re-save what is already marked saved per the above flags.\n\n\u2500\u2500\u2500 OUTPUT (STRICT) \u2500\u2500\u2500\nRespond ONLY with a JSON-like array (possibly empty), with **apostrophes** (') for all keys and string values inside objects.\n\n* No prose, no markdown, no code fences, no prefixes/suffixes.\n* Each array element MUST be an object containing EXACTLY these keys (order not enforced):\n  'type' | 'memory_level' | 'normalized' | 'source_pair_id' | 'save_to_current_chat' | 'save_to_long_term' | 'reason' | 'data_to_save'\n* Use apostrophes around keys/values. If the content itself needs an apostrophe, replace it with a typographic apostrophe (\u2019).\n* If nothing qualifies, return [] exactly.\n\nField meanings:\n\n1. 'type' : 'fact' | 'question' | 'command' | 'instruction' | 'goal'\n2. 'memory_level' : 'team' | 'project' | 'personal'\n3. 'normalized' : English, declarative, 3rd person, 1\u20133 sentences; soft \u226480 words; hard \u2264120\u2013150 if needed\n4. 'source_pair_id' : 'current' or exact context 'id'\n5. 'save_to_current_chat' : 'true' | 'false'  (auto-attach for this chat only)\n6. 'save_to_long_term'   : 'true' | 'false'  (store in long-term memory)\n7. 'reason' : concise human-readable justification\n8. 'data_to_save' : see DATA-TO-SAVE rules\n\n\u2500\u2500\u2500 STORE vs SKIP \u2500\u2500\u2500\nConsider the current pair and eligible context items (per flags above). ALWAYS SAVE IF THE USER REQUESTS TO SAVE. Otherwise, save only unique, user-related or project-specific information that cannot be regenerated from general knowledge. Add an object ONLY if all are materially true:\n\n1. Future value (useful weeks/months later).\n2. Stability (unlikely to change soon; not a one-off).\n3. Originality (adds new value beyond what is already saved).\n4. Not general background without user/project/rules linkage.\n5. Not just context for a one-time response.\n\nHard-negatives (always skip): greetings/thanks/emotion; ephemeral statuses; one-off \u201cdo it now / tell me a story / how to\u201d requests; generic public knowledge; meta about the assistant. If uncertain about storing at all \u2192 SKIP.\n\n**Noise reduction:** Be conservative. Prefer skipping marginal items. Do not save redundant restatements. Never save trivia or broad facts the LLM can regenerate without memory.\n\n\u2500\u2500\u2500 MEMORY LEVEL (SCOPE) \u2500\u2500\u2500\n\n* 'project': ONLY when channel == 'project'.\n* 'personal': if channel == 'personal', OR the user explicitly asks to save to personal memory.\n* 'team': if channel == 'team', OR the user explicitly asks to save to team memory.\n* No cross-level writes without explicit user request. NEVER write into project memory from outside a project chat.\n\nHeuristics (examples; reconcile with intent):\n\n* project: repo/branches/tickets/sprints/releases/tech-stack/conventions used in this project.\n* personal: user\u2019s preferences/tools/timezone.\n* team: org-wide rules, brand/style guides, global policies, rituals.\n\n\u2500\u2500\u2500 ATTACHMENT & STORAGE DECISIONS \u2500\u2500\u2500\n\nA) 'save_to_current_chat' ('true'|'false')\nPlatform policy: auto-attachment NEVER uses global scopes. This flag controls attaching the item to every future call **in this chat only**.\n\nSet 'save_to_current_chat' = 'true' **only when the item is thread-critical and repeatedly needed across replies in this chat**:\n\n* 'instruction' \u2014 per-thread behavior/format/tooling defaults.\n* 'fact' \u2014 stable, frequently referenced artifacts (code signatures, schemas, IDs, dataset handles, file paths, formulas, regexes, prompts-as-tools), disambiguations, long artifacts distilled to essential parts.\n* 'goal' \u2014 **any clear, concrete goal** that passes STORE; when stored, it SHOULD auto-attach in this chat.\n\nIf uncertain about current chat attachment \u2192 prefer 'save_to_current_chat': 'true'. Otherwise 'false'.\n\nB) 'save_to_long_term' ('true'|'false')\nSet 'save_to_long_term' = 'true' only when, per STORE rules above, the item is expected to remain valuable **beyond this chat** (e.g., durable preferences, stable project standards/configs, team-wide rules, dated goals to track, canonical definitions). If uncertain about long-term \u2192 set 'save_to_long_term': 'false'.\n\n**No-split mixed messages (dominant-type rule).**\nIf a single message mixes a command/question with eligible content (goal/instruction/fact), **do not split**. Classify the entire message as the most thread-critical eligible type by priority:\n\n1. 'goal' \u2192 2) 'instruction' \u2192 3) 'fact'.\n   If none apply, classify normally (e.g., 'command' or 'question').\n\n\u2500\u2500\u2500 DATA-TO-SAVE \u2500\u2500\u2500\nYou MUST populate 'data_to_save' as follows:\n\n* If both 'save_to_current_chat' == 'false' \u2192 set 'data_to_save' to '' (empty string).\n* If 'save_to_current_chat' is 'true' \u2192 'data_to_save' MUST be **non-empty** and capture what should persist.\n\nChoose one of three forms:\n\n1. 'original' \u2014 preserve exact original 'user' + exact original 'llm'. Use for symbol-sensitive content (code/CLI/SQL/JSON/YAML/RegExp, logs/traces, API payloads/schemas, exact IDs/paths/hashes, quotations).\n2. 'normalized' \u2014 when the 'normalized' field accurately captures everything needed (often good for instructions, goals, concise conventions/definitions without symbol sensitivity).\n3. A shortened per-part string (multi-line allowed; languages must match originals):\n   'data_to_save': 'user_message: {#NANI?#}llm_reply: '\n\n   * Either part may be empty if unnecessary (labels still required).\n   * Never mask or redact secrets.\n   * Prefer shortened form only if it truly preserves 100% of context-critical details; otherwise use 'original'.\n\n**Reduce overuse of 'original':** If exact symbols are not critical for future use, prefer 'normalized' or the shortened per-part form.\n\n\u2500\u2500\u2500 NORMALIZATION \u2500\u2500\u2500\n\n* 'normalized': English, declarative, third person; 1\u20133 sentences (soft \u226480 words; hard \u2264120\u2013150 if essential).\n* Self-contained; no greetings/emotion; keep key entities/terms.\n* Replace ASCII apostrophes with typographic (\u2019). No line breaks in string values.\n* Normalize only explicit meaning; do not infer hidden preferences.\n\n\u2500\u2500\u2500 VALIDATION CHECKS (BEFORE EMITTING) \u2500\u2500\u2500\n\n* Object contains exactly: 'type','memory_level','normalized','source_pair_id','save_to_current_chat','save_to_long_term','reason','data_to_save'.\n* 'memory_level' obeys channel rules.\n* If both save flags are 'false' \u2192 'data_to_save' == ''.\n* If either save flag is 'true' \u2192 'data_to_save' \u2208 {'original','normalized', 'user_message: \u2026{#NANI?#}llm_reply: \u2026'}.\n* 'source_pair_id' is 'current' or an id from context; unique within output.\n* 'normalized' meets style/length constraints and is understandable standalone.\n* 'reason' clearly explains why this is stored and where it will be useful.\n* No splitting of mixed-intent messages; dominant-type rule applied.\n* Respect context flags: if already_saved_long_term==true, only decide current_chat; if already_saved_current_chat==true, only decide long_term; if both true, skip.\n\n\u2500\u2500\u2500 EXAMPLES \u2500\u2500\u2500\n\nExample A \u2014 Team channel, instruction + clear team goal (auto-attach in chat; LTS only for goal)\nINPUT { \"user\": \"From now on, in all team chats, start with a short summary, then steps.\", \"llm\": \"Got it. I will summarize first, then steps in team chats.\", \"channel\": \"team\", \"context\": [ { \"id\": \"ctx_123\", \"created_at\": 1731200000000, \"user\": \"We must ship the new onboarding by Sep 30, 2025.\", \"llm\": \"Noted.\", \"already_saved_long_term\": false, \"already_saved_current_chat\": false } ] } EXPECTED OUTPUT [ { 'type': 'instruction', 'memory_level': 'team', 'normalized': 'The team requires future replies to begin with a brief summary followed by steps.', 'source_pair_id': 'current', 'save_to_current_chat': 'true', 'save_to_long_term': 'false', 'reason': 'Defines a per-reply default for this chat but is not needed beyond this thread', 'data_to_save': 'normalized' }, { 'type': 'goal', 'memory_level': 'team', 'normalized': 'The team aims to ship the new onboarding by 2025-09-30.', 'source_pair_id': 'ctx_123', 'save_to_current_chat': 'true', 'save_to_long_term': 'true', 'reason': 'Clear dated goal useful in this chat and for long-term tracking', 'data_to_save':\u00a0'normalized' } ]\n\n---\n\nExample B \u2014 Project channel, thread instruction (chat-only) + project convention (long-term only)\nINPUT\n{\n\"user\": \"For this thread, keep updates to two sentences max and put metrics first.\",\n\"llm\": \"Understood. I will keep updates short with metrics first for this thread.\",\n\"channel\": \"project\",\n\"context\": [\n{ \"id\": \"ctx_77\", \"created_at\": 1732000000000, \"user\": \"Branch naming: feature/'ticket'-'slug' for all new work.\", \"llm\": \"Acknowledged.\", \"already_saved_long_term\": false, \"already_saved_current_chat\": false }\n]\n}\nEXPECTED OUTPUT\n[\n{ 'type': 'instruction',\n'memory_level': 'project',\n'normalized': 'Within this project thread, future replies should be two sentences with metrics first.',\n'source_pair_id': 'current',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'false',\n'reason': 'Thread-specific default needed only in this chat',\n'data_to_save': 'normalized' },\n{ 'type': 'fact',\n'memory_level': 'project',\n'normalized': 'This project standardizes branch names as feature/\u2019ticket\u2019-\u2019slug\u2019.',\n'source_pair_id': 'ctx_77',\n'save_to_current_chat': 'false',\n'save_to_long_term': 'true',\n'reason': 'Stable project convention valuable beyond this chat',\n'data_to_save': '' }\n]\n\n---\n\nExample C \u2014 Mixed message (question + code) \u2192 no-split, classified as 'fact', choose ORIGINAL for chat; not long-term\nINPUT { \"user\": \"How can I improve this?\n`ts\nexport async function processOrder(orderId: string): Promise'Result' { ... }\n`\", \"llm\": \"Here are performance and reliability improvements...\", \"channel\": \"project\", \"context\": [] } EXPECTED OUTPUT [ { 'type': 'fact', 'memory_level': 'project', 'normalized': 'This chat iterates on function processOrder(orderId: string): Promise in the project\u2019s order module.', 'source_pair_id': 'current', 'save_to_current_chat': 'true', 'save_to_long_term': 'false', 'reason': 'Thread-critical code anchor for this discussion; not a durable project standard', 'data_to_save': 'original' } ]\n\n---\n\nExample D \u2014 Project channel, clear goal (attach in chat; also long-term), shortened with empty llm block\nINPUT\n{\n\"user\": \"Until Nov 30, always prioritize the latency experiment and begin each reply with today\u2019s p95 and error rate.\",\n\"llm\": \"Acknowledged. I will start each reply with p95 and error rate until Nov 30 and focus on latency.\",\n\"channel\": \"project\",\n\"context\": []\n}\nEXPECTED OUTPUT\n[\n{ 'type': 'goal',\n'memory_level': 'project',\n'normalized': 'Until 2025-11-30, the chat prioritizes the latency experiment and requires replies to begin with p95 latency and error rate.',\n'source_pair_id': 'current',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'true',\n'reason': 'Dated goal that enforces per-reply defaults in this chat and is useful to track over time',\n'data_to_save': 'normalized' }\n]\n\n---\n\nExample E \u2014 Personal channel, per-thread default (chat-only), choose SHORTENED\nINPUT\n{\n\"user\": \"In this chat, answer in English and keep replies under 4 bullets.\",\n\"llm\": \"Got it.\",\n\"channel\": \"personal\",\n\"context\": []\n}\nEXPECTED OUTPUT\n[\n{ 'type': 'instruction',\n'memory_level': 'personal',\n'normalized': 'Within this chat, replies should be in English and limited to four bullet points.',\n'source_pair_id': 'current',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'false',\n'reason': 'Per-thread behavior default; not needed beyond this chat',\n'data_to_save': 'normalized' }\n]\n\n---\n\nExample F \u2014 Split across pairs (context flags matter): current instruction (chat-only), context goal (both), context fact (chat-only)\nINPUT\n{\n\"user\": \"From now on in this project chat, show only diffs in your replies.\",\n\"llm\": \"Understood. I will show only diffs in this project chat.\",\n\"channel\": \"project\",\n\"context\": [\n{\n\"id\": \"ctx_g1\",\n\"created_at\": 1733000000000,\n\"user\": \"Until Dec 15, prioritize checkout stability and begin each reply with failed rate and p95.\",\n\"llm\": \"Acknowledged.\",\n\"already_saved_long_term\": false,\n\"already_saved_current_chat\": false\n},\n{\n\"id\": \"ctx_f1\",\n\"created_at\": 1732990000000,\n\"user\": \"Work against dataset slice exp_checkout_v7 located in data/exp/checkout_v7.parquet\",\n\"llm\": \"Noted.\",\n\"already_saved_long_term\": false,\n\"already_saved_current_chat\": false\n}\n]\n}\nEXPECTED OUTPUT\n[\n{ 'type': 'instruction',\n'memory_level': 'project',\n'normalized': 'Within this project chat, replies should show only diffs.',\n'source_pair_id': 'current',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'false',\n'reason': 'Thread-specific default required across replies in this chat',\n'data_to_save': 'normalized' },\n\n{ 'type': 'goal',\n'memory_level': 'project',\n'normalized': 'Until 2025-12-15, the chat prioritizes checkout stability and requires replies to begin with failure rate and p95.',\n'source_pair_id': 'ctx_g1',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'true',\n'reason': 'Clear dated goal valuable in-chat and over time',\n'data_to_save': 'normalized' },\n\n{ 'type': 'fact',\n'memory_level': 'project',\n'normalized': 'This chat relies on dataset slice exp_checkout_v7 located at data/exp/checkout_v7.parquet.',\n'source_pair_id': 'ctx_f1',\n'save_to_current_chat': 'true',\n'save_to_long_term': 'false',\n'reason': 'Thread-critical artifact repeatedly referenced in this chat; not a stable project-wide standard',\n'data_to_save': 'normalized' }\n]\n\n---\n\nExample G \u2014 Context flags short-circuit: item already saved to long-term; only evaluate chat-attachment\nINPUT { \"user\": \"Ok.\", \"llm\": \"Noted.\", \"channel\": \"project\", \"context\": [ { \"id\": \"ctx_l1\", \"created_at\": 1733100000000, \"user\": \"Use Node 20 in CI for this project.\", \"llm\": \"Configured.\", \"already_saved_long_term\": true, \"already_saved_current_chat\": false } ] } EXPECTED OUTPUT []\n\n---\n\nExample H \u2014 Context flags short-circuit: item already attached in chat; only evaluate long-term\nINPUT\n{\n\"user\": \"Ok.\",\n\"llm\": \"Noted.\",\n\"channel\": \"team\",\n\"context\": [\n{\n\"id\": \"ctx_t1\",\n\"created_at\": 1733200000000,\n\"user\": \"In team chats, begin replies with a TL;DR.\",\n\"llm\": \"Understood.\",\n\"already_saved_long_term\": false,\n\"already_saved_current_chat\": true\n}\n]\n}\nEXPECTED OUTPUT\n[\n{ 'type': 'instruction',\n'memory_level': 'team',\n'normalized': 'In team chats, replies should begin with a TL;DR.',\n'source_pair_id': 'ctx_t1',\n'save_to_current_chat': 'false',\n'save_to_long_term': 'true',\n'reason': 'Team rule valuable beyond this chat and not yet saved long-term',\n'data_to_save': '' }\n]\n\n---\n\nExample I \u2014 Nothing to store (empty result)\nINPUT\n{\n\"user\": \"Thanks! Also, could you quickly remind me what a REST API is?\",\n\"llm\": \"A REST API is a set of rules for building and interacting with web services using standard HTTP methods.\",\n\"channel\": \"team\",\n\"context\": [\n{ \"id\": \"ctx_n1\", \"created_at\": 1733200000000, \"user\": \"Great job yesterday!\", \"llm\": \"Thank you!\", \"already_saved_long_term\": false, \"already_saved_current_chat\": false }\n]\n}\nEXPECTED OUTPUT\n[]\n\n---\n\nExample J \u2014 Project channel, exact SQL and stack trace (chat-only, ORIGINAL required)\nINPUT\n{\n\"user\": \"We\u2019re debugging this failure. Use this exact SQL and stack trace in follow-ups:\nSELECT user_id, created_at\nFROM orders\nWHERE status = 'PENDING' AND created_at >= '2025-11-01'\nORDER BY created_at DESC\nLIMIT 500;\n\nERROR: column \"created_at\" does not exist at character 32\n  at Parser.parseError (/srv/app/node_modules/pg-protocol/src/index.ts:123:11)\n  at ...\n```\",\n  \"llm\": \"I will analyze the query and error and propose fixes while keeping the exact SQL and trace available.\",\n  \"channel\": \"project\",\n  \"context\": []\n}\nEXPECTED OUTPUT\n[\n  { 'type': 'fact',\n    'memory_level': 'project',\n    'normalized': 'This chat relies on a specific SQL query over the orders table and the accompanying stack trace that reports a missing created_at column.',\n    'source_pair_id': 'current',\n    'save_to_current_chat': 'true',\n    'save_to_long_term': 'false',\n    'reason': 'Symbol-accurate SQL and error text are needed for subsequent troubleshooting steps in this thread only',\n    'data_to_save': 'original' }\n]\n\nNOTE: These examples are only needed to help you make decisions and return answers in the right format. Do not directly use the content from these examples when generating a response."
                  },
                  "type": "TextExpression"
                }
              },
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "height": 320,
        "left": 330,
        "top": 439,
        "width": 616,
        "zindex": 8,
        "vertical_centering": true,
        "order": 14,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "616px",
        "single_height": false,
        "min_height_css": "320px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "MultiLineInput",
      "id": "bTwRh",
      "default_name": "MultilineInput A",
      "name": "MultilineInput A",
      "style": "MultiLineInput_standard_multiline_input_"
    },
    "bTvYV": {
      "properties": {
        "text": {
          "entries": {
            "0": "front"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 173,
        "top": 58,
        "width": 150,
        "zindex": 4,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 9,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvYQ",
      "current_parent": "bTqOc",
      "default_name": "Button A",
      "style": "Button_primary_new_"
    },
    "bTvbD": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "https:\\/\\/playgram-version-test\\.b-cdn\\.net\\/1765877588968x507820378909646960\\/image_1768398352547[^;]*"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "https://playgram-version-test.b-cdn.net/1765877588968x507820378909646960/image_1768398352547.png;https://playgram-version-test.b-cdn.net/1765877588968x507820378909646960/image_1768398552547.png;https://playgram-version-test.b-cdn.net/1765877588968x507820378909646960/image_1768998352547.png"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 65,
        "top": 0,
        "width": 100,
        "zindex": 6,
        "order": 8,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTvax",
      "default_name": "Text B",
      "style": "Text_body_16_"
    },
    "bTvVb0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Vasya"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 163,
        "top": 48,
        "width": 150,
        "zindex": 4,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 7,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvRB0",
      "default_name": "Button C",
      "style": "Button_primary_new_"
    },
    "bTvVc0": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "custom.test_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTqKZ0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 139,
        "top": 163,
        "width": 100,
        "zindex": 5,
        "order": 6,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTvRU0",
      "default_name": "Text A",
      "style": "Text_body_16_"
    },
    "bTvVd0": {
      "properties": {
        "text": {
          "entries": {
            "0": "back"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 173,
        "top": 58,
        "width": 150,
        "zindex": 4,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 10,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvRa0",
      "current_parent": "bTqKZ0",
      "default_name": "Button D",
      "style": "Button_primary_new_"
    },
    "bTvVh0": {
      "properties": {
        "text": {
          "entries": {
            "0": "sign front"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 183,
        "top": 68,
        "width": 150,
        "zindex": 4,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 11,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvSz0",
      "current_parent": "bTqKZ0",
      "default_name": "Button E",
      "style": "Button_primary_new_"
    },
    "bTvVi0": {
      "properties": {
        "text": {
          "entries": {
            "0": "sign back"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 193,
        "top": 78,
        "width": 150,
        "zindex": 4,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 12,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvTF0",
      "current_parent": "bTqKZ0",
      "default_name": "Button F",
      "style": "Button_primary_new_"
    },
    "bTvVj0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Run (Sam)"
          },
          "type": "TextExpression"
        },
        "height": 107,
        "left": 91,
        "top": 276,
        "width": 112,
        "zindex": 6,
        "icon": "feather star",
        "vertical_centering": true,
        "order": 13,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "107px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTvSv",
      "default_name": "Button G",
      "style": "Button_primary_new_"
    }
  },
  "properties": {
    "height": 99,
    "left": 89,
    "top": 29,
    "width": 97,
    "zindex": 3,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "iulia.suhovici@zeroqode.com",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "email",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTqOc",
  "default_name": "Group A",
  "name": "Group container",
  "style": "Group_transparent_",
};
