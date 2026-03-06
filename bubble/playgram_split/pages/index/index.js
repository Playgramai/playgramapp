import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const index = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 767,
    "width": 1080,
    "meta_description": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "title": {
      "entries": {
        "0": "Playgram.ai"
      },
      "type": "TextExpression"
    },
    "use_gap": true,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "meta_title": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fixed_width": true,
    "html_header": {
      "entries": {
        "0": "<head>\n   <!-- \u0421\u0442\u0438\u043b\u0438 -->\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/codemirror.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/theme/material-darker.min.css\">\n\n  <!-- Core -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/codemirror.min.js\"></script>\n\n  <!-- \u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/xml/xml.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/javascript/javascript.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/css/css.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/htmlmixed/htmlmixed.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/clike/clike.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/php/php.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/python/python.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.7/mode/ruby/ruby.min.js\"></script>\n\n    <style>\n      .CodeMirror { \n         height: auto;\n         min-height: 1em; \n         background-color: #212121 !important;\n        }\n.cm-s-material-darker.CodeMirror {\n  background-color: #212121 !important;\n}\n.CodeMirror-linenumber{\n  background-color: #212121 !important;\n}\n.CodeMirror-gutter{\n  background-color: #212121 !important;\n}\n    </style>\n  </head>\n\n<style>\n\nhtml, body {\n  height: 100%;\n  overflow: hidden !important;\n}\n\np {\n  overflow-wrap: break-word; /* \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 */\n  word-wrap: break-word;     /* \u0434\u043b\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 */\n}\n\n\n/* \u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\n::-webkit-scrollbar {\n    width: 4px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430 */\nheight: 4px;  /* \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u043e\u043b\u043b */\n    border-radius: 5px; /* \u0421\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0443\u0433\u043b\u043e\u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 */\n}\n\n/* \u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0442\u0440\u0435\u043a\u0430 (\u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0441\u043a\u0440\u043e\u043b\u043b\u0431\u0430\u0440\u0430) */\n::-webkit-scrollbar-track {\n    background-color: transparent; \n    border-radius: 5px; \n}\n\n/* \u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u0430\u043c\u043e\u0433\u043e \u0431\u0435\u0433\u0443\u043d\u043a\u0430 */\n::-webkit-scrollbar-thumb {\n    background-color: ",
        "1": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#acacad"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#424242"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "2": "; /* \u0426\u0432\u0435\u0442 \u0431\u0435\u0433\u0443\u043d\u043a\u0430 */\n    border-radius: 5px; /* \u0417\u0430\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044b\u0435 \u0443\u0433\u043b\u044b \u0431\u0435\u0433\u0443\u043d\u043a\u0430 */\n}\n\n/* \u0421\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0431\u0435\u0433\u0443\u043d\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 */\n::-webkit-scrollbar-thumb:hover {\n    background-color: #676767;\n}\n\n\n\n\n\n/* \u0421\u0442\u0438\u043b\u0438 floating group \u0438 RTE*/\n#fgCanvas{\nvisibility:hidden;\n}\n\n#richtext-editor-0 {\n  color: ",
        "3": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#555557"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#fff"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "4": " !important;\n}\n\n.ql-toolbar.ql-snow {\n\n  border-radius: 20px !important; /* \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0435\u0440\u0445\u043d\u0438\u0435 \u0443\u0433\u043b\u044b \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044b\u0435 */\nbackground-color:#ffffff !important;\n}\n\n.ql-editor {\n  font-size: 16px;\n}\n\n.ql-editor a{\n  color: #a8c7fa;\n}\n\n.ql-header svg{\ncolor: #cccccc !important\n}\n\n.ql-header svg {\n  color: #cccccc !important;\n}\n\n.ql-header svg:hover {\n  color: #ffffff !important;\n}\n\n.ql-align.ql-picker.ql-icon-picker {\n  display: none !important;\n  visibility: hidden !important;\n  width: 0 !important;\n  height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.ql-editor.ql-blank::before {\n  color: #afafaf !important;\n}\n\n.allow-overflow {\n  overflow: visible !important;\n}\n\n#download-icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 9999;\n  cursor: pointer;\n  background: rgba(0,0,0,0.35);\n  border-radius: 50%;\n  padding: 6px;\n}\n\npre.hljs-copy-wrapper {\n  position: relative;\n}\n\n/* \u0411\u0430\u0437\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 */\n.hljs-edit-btn {\n  position: absolute;\n  top: 8px;\n  right: 40px; /* \u043d\u0430 20px \u043b\u0435\u0432\u0435\u0435 Copy */\n\n  background: #1c1b1b;\n  color: #ccc;\n  border: 1px solid #444;\n  border-radius: 6px;\n  padding: 5px 5px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  /* ==== \u041a\u041b\u042e\u0427\u0415\u0412\u0410\u042f \u041b\u041e\u0413\u0418\u041a\u0410 \u0410\u041d\u0418\u041c\u0410\u0426\u0418\u0418 ==== */\n\n  opacity: 0;\n  transform: translateX(120%); /* \u0443\u0435\u0437\u0436\u0430\u0435\u0442 \u0417\u0410 \u043a\u0440\u0430\u0439 \u0431\u043b\u043e\u043a\u0430 \u0432\u043f\u0440\u0430\u0432\u043e */\n\n  transition:\n    opacity 0.10s ease,\n    transform 0.13s ease;\n}\n\n/* \u041f\u0440\u0438 hover \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0438\u043c\u0443\u044e \u0437\u043e\u043d\u0443 */\npre.hljs-copy-wrapper:hover .hljs-edit-btn {\n  opacity: 1;\n  transform: translateX(0);\n\n  transition:\n    opacity 0.18s ease,\n    transform 0.24s ease;\n}\n\n\n.hljs-edit-btn svg {\n  fill: white;\n}\n\n.hljs-edit-btn:hover {\n  background: #2d2d2d !important;\n  transition: background 0.15s ease;\n}\n\n\n.hljs-copy-button {\n  background: #1c1b1b !important;\n  color: white !important;\n  border: 1px solid #444 !important;\n  border-radius: 6px;\n  transition: background 0.2s ease;\n}\n\n\n.hljs-copy-button:hover {\n  background: #2d2d2d !important;\n  transition: background 0.2s ease;\n}\n\n#fg-loader{\nz-index: 9999999 !important;\n}\n\n</style>\n\n<!-- \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 marked.js -->\n<script src=\"https://cdn.jsdelivr.net/npm/marked/marked.min.js\"></script>\n\n<!-- \u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0444\u0430\u0439\u043b\u0430 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 -->\n<script>\ndocument.addEventListener('DOMContentLoaded', function () {\n  const INPUT_ID = 'main-input';\n  const UPLOADER_ID = 'better-main-uploader';\n\n  function attachPasteListener() {\n    const pasteInput = document.getElementById(INPUT_ID);\n    if (!pasteInput) return;\n\n    // \u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u0432\u0435\u0448\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\n    if (pasteInput.dataset.pasteListenerAttached === '1') return;\n    pasteInput.dataset.pasteListenerAttached = '1';\n\n    pasteInput.addEventListener('paste', function (event) {\n      const clipboardData = event.clipboardData || window.clipboardData;\n      if (!clipboardData) return;\n\n      const files = clipboardData.files;\n      if (!files || files.length === 0) {\n        // \u0412 \u0431\u0443\u0444\u0435\u0440\u0435 \u041d\u0415\u0422 \u0444\u0430\u0439\u043b\u043e\u0432 \u2014 \u0434\u0430\u0451\u043c \u0442\u0435\u043a\u0441\u0442\u0443 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\n        return;\n      }\n\n      // \u0415\u0441\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u2192 \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u043c \u0432\u0441\u0442\u0430\u0432\u043a\u0443 \u0442\u0435\u043a\u0441\u0442\u0430 (\u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u0438 \u0442.\u043f.),\n      // \u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u0438\u043d\u043f\u0443\u0442\u0435 \u043d\u0435 \u0442\u0440\u043e\u0433\u0430\u0435\u043c.\n      event.preventDefault();\n\n      const dt = new DataTransfer();\n      for (let i = 0; i < files.length; i++) {\n        dt.items.add(files[i]);\n      }\n\n      const uploaderWrapper = document.getElementById(UPLOADER_ID);\n      if (!uploaderWrapper) {\n        console.warn('\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d uploader \u0441 ID:', UPLOADER_ID);\n        return;\n      }\n\n      const fileInput = uploaderWrapper.querySelector('input[type=\"file\"]') || uploaderWrapper;\n      if (!fileInput || fileInput.type !== 'file') {\n        console.warn('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043d\u0430\u0439\u0442\u0438 input[type=\"file\"] \u0432\u043d\u0443\u0442\u0440\u0438 uploader');\n        return;\n      }\n\n      try {\n        fileInput.files = dt.files;\n\n        const changeEvent = new Event('change', { bubbles: true });\n        fileInput.dispatchEvent(changeEvent);\n\n        console.log('\u0424\u0430\u0439\u043b\u044b \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 uploader:', dt.files);\n      } catch (e) {\n        console.error('\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0444\u0430\u0439\u043b\u0430 \u0432 uploader:', e);\n      }\n    });\n  }\n\n  // 1) \u041f\u0440\u043e\u0431\u0443\u0435\u043c \u0441\u0440\u0430\u0437\u0443\n  attachPasteListener();\n\n  // 2) \u041d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 Bubble \u0434\u043e\u0440\u0438\u0441\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u0437\u0436\u0435\n  const observer = new MutationObserver(function () {\n    attachPasteListener();\n  });\n  observer.observe(document.body, { childList: true, subtree: true });\n});\n</script>\n\n<script>\n\n// --- liteMux stop() \u0431\u0435\u0437 \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f buildPayloadString ---\n(function setupLiteMuxStopper() {\n  window.liteMux = window.liteMux || { sessions: {} };\n\n  function stop(sessionId, { silentIfMissing = false, keepState = false } = {}) {\n    const s = window.liteMux.sessions?.[sessionId];\n    if (!s) {\n      if (!silentIfMissing && typeof bubble_fn_on_finish === \"function\") {\n        bubble_fn_on_finish(JSON.stringify({\n          session_id: sessionId,\n          status: \"not_found\"\n        }));\n      }\n      return false;\n    }\n\n    // 1) abort\n    try { s.controller?.abort(); } catch {}\n    s.finished = true;\n\n    // 2) \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c payload \u0438\u0437 \u0415\u0414\u0418\u041d\u0421\u0422\u0412\u0415\u041d\u041d\u041e\u0413\u041e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\n    const payload =\n      (typeof s.payload === \"function\" && s.payload({ includeStreamEnded: true })) ||\n      (typeof window.liteMux.buildPayloadString === \"function\" &&\n        window.liteMux.buildPayloadString(s, { includeStreamEnded: true })) ||\n      // \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u043b\u0431\u044d\u043a (\u043d\u0430 \u0432\u0441\u044f\u043a\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439)\n      JSON.stringify({ session_id: s.id, text: s.text, thinking: s.thinking, stream_ended: true });\n\n    // 3) \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u0435 \u0436\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\n    if (typeof bubble_fn_on_token === \"function\")  bubble_fn_on_token(payload);\n    if (typeof bubble_fn_on_finish === \"function\") bubble_fn_on_finish(payload);\n\n    if (!keepState) { try { delete window.liteMux.sessions[sessionId]; } catch {} }\n    return true;\n  }\n\n  function stopAll({ keepState = false } = {}) {\n    const ids = Object.keys(window.liteMux.sessions || {});\n    for (const id of ids) stop(id, { silentIfMissing: true, keepState });\n    return ids.length;\n  }\n\n  window.liteMux.stop = stop;\n  window.liteMux.stopAll = stopAll;\n})();\n\n\n\n \ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const observer = new MutationObserver(() => {\n    addEditButtonsToCode();\n  });\n\n  observer.observe(document.body, {\n    childList: true,\n    subtree: true\n  });\n\n  addEditButtonsToCode();\n});\n\nfunction addEditButtonsToCode() {\n  document.querySelectorAll('pre.hljs-copy-wrapper').forEach(pre => {\n\n    if (pre.querySelector('.hljs-edit-btn')) return; // \u043d\u0435 \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u0435\u043c \u043a\u043d\u043e\u043f\u043a\u0443\n\n    const codeEl = pre.querySelector('code');\n    if (!codeEl) return;\n\n    // \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u043a\u043d\u043e\u043f\u043a\u0443 \u0422\u041e\u041b\u042c\u041a\u041e \u0434\u043b\u044f markdown\n    if (!codeEl.classList.contains('language-markdown')) {\n      return;\n    }\n\n    const btn = document.createElement('button');\n    btn.className = 'hljs-edit-btn';\n\n    btn.innerHTML = `\n<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\">\n  <path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"/>\n</svg>\n`;\n\n    pre.style.position = 'relative';\n    pre.appendChild(btn);\n\n    // \ud83d\udc49 \u041d\u0418\u041a\u0410\u041a\u041e\u0419 \u041b\u041e\u0413\u0418\u041a\u0418 \u041a\u041b\u0418\u041a\u0410 \u0411\u041e\u041b\u042c\u0428\u0415 \u041d\u0415\u0422\n  });\n}\n\n\nfunction bbcodeToMarkdown(text) {\n  if (!text) return text;\n\n  let result = text;\n\n  // ----- \u0411\u0410\u0417\u041e\u0412\u042b\u0415 \u0422\u0415\u0413\u0418 -----\n  result = result.replace(/\\[b\\](.*?)\\[\\/b\\]/gis, \"**$1**\");\n  result = result.replace(/\\[i\\](.*?)\\[\\/i\\]/gis, \"*$1*\");\n\n  // \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438\n  result = result.replace(/\\[h1\\](.*?)\\[\\/h1\\]/gis, \"# $1\");\n  result = result.replace(/\\[h2\\](.*?)\\[\\/h2\\]/gis, \"## $1\");\n\n  // ----- \u0421\u0421\u042b\u041b\u041a\u0418 -----\n  // [url=https://test]\u043d\u0435\u0431\u043e[/url] \u2192 [\u043d\u0435\u0431\u043e](https://test)\n  result = result.replace(\n    /\\[url=([^\\]]+)\\](.*?)\\[\\/url\\]/gis,\n    \"[$2]($1)\"\n  );\n\n  // \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a BBCode \u2192 markdown\n  result = result.replace(/\\[br\\]/gi, \"\\n\");\n\n  // \u043a\u043e\u0434-\u0431\u043b\u043e\u043a\n  result = result.replace(\n    /\\[code\\]([\\s\\S]*?)\\[\\/code\\]/gi,\n    \"```\\n$1\\n```\"\n  );\n\n  // inline code\n  result = result.replace(\n    /\\[inline\\]([\\s\\S]*?)\\[\\/inline\\]/gi,\n    \"`$1`\"\n  );\n\n  // ======= \u041e\u0422\u041f\u0420\u0410\u0412\u041a\u0410 \u0412 BUBBLE \u041f\u041e \u0413\u041e\u0422\u041e\u0412\u041d\u041e\u0421\u0422\u0418 =======\n  console.log(\"\ud83d\udce6 \u0413\u043e\u0442\u043e\u0432\u044b\u0439 Markdown:\", result);\n\n  return result;\n}\n\n\n\n\n</script>\n"
      },
      "type": "TextExpression"
    },
    "preset_width": "full_width",
    "default_width": 1080,
    "min_height_px": 700,
    "new_responsive": true,
    "wf_folder_list": {
      "bTupd1": "shortcuts"
    },
    "element_version": 5,
    "backdrop_bgcolor": "var(--color_bTkRQ4_default)",
    "container_layout": "row",
    "responsive_version": 1,
    "backdrop_background_style": "bgcolor"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "backdrop_bgcolor": "rgba(246,248,250,1)"
      },
      "type": "State"
    }
  },
  "type": "Page",
  "id": "bTUdV0",
  "name": "index",
  "custom_states": {
    "tool_": {
      "display": "tool",
      "value": "list.option.llm_tool__os_",
      "rank": 15,
      "make_static": true
    },
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 21,
      "make_static": true
    },
    "error_test_": {
      "display": "error_test",
      "value": "text",
      "rank": 4,
      "make_static": true
    },
    "text_for_rte_": {
      "display": "text_for_rte",
      "value": "text",
      "rank": 14,
      "make_static": true
    },
    "default_model_": {
      "display": "default_model",
      "value": "option.llm_models__os_",
      "rank": 2,
      "make_static": true
    },
    "error_chat_id_": {
      "display": "error_message_id",
      "value": "text",
      "rank": 3,
      "make_static": true
    },
    "last_shortcut_": {
      "display": "last_shortcut",
      "value": "text",
      "rank": 18,
      "make_static": true
    },
    "llm_cell_index_": {
      "display": "llm-cell-index",
      "value": "number",
      "rank": 24,
      "make_static": true
    },
    "sidebar_expand_": {
      "display": "sidebar_expand",
      "value": "boolean",
      "rank": 17,
      "default_val": false,
      "make_static": true
    },
    "file_is_loading_": {
      "display": "file_is_loading",
      "value": "boolean",
      "rank": 5,
      "make_static": true
    },
    "message_for_rte_": {
      "display": "message_for_rte",
      "value": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
      "rank": 7,
      "make_static": true
    },
    "page_is_loaded__": {
      "display": "page_is_loaded?",
      "value": "boolean",
      "rank": 9,
      "default_val": false,
      "make_static": true
    },
    "streaming_chats_": {
      "display": "streaming_chats",
      "value": "list.custom.chat",
      "rank": 18,
      "make_static": true
    },
    "new_image_in_chat_": {
      "display": "new_image_in_chat",
      "value": "list.text",
      "rank": 19,
      "make_static": true
    },
    "shortcut_rg_index_": {
      "display": "shortcut_rg_index",
      "value": "number",
      "rank": 22,
      "default_val": 1,
      "make_static": true
    },
    "unsended_messages_": {
      "display": "unsended_messages",
      "value": "list.text",
      "rank": 16
    },
    "regenerate_chat_id_": {
      "display": "regenerate_message_id",
      "value": "text",
      "rank": 10,
      "make_static": true
    },
    "streaming__yes_no__": {
      "display": "streaming (yes/no)",
      "value": "boolean",
      "rank": 25,
      "make_static": true
    },
    "first_message_sent__": {
      "display": "[OLD]first_message_sent?",
      "value": "boolean",
      "rank": 6
    },
    "safezoneup_sc_index_": {
      "display": "safeZoneUp_sc_index",
      "value": "number",
      "rank": 20,
      "make_static": true
    },
    "shortcut_msgs_count_": {
      "display": "shortcut_msgs_count",
      "value": "number",
      "rank": 23,
      "make_static": true
    },
    "current_saved_message_": {
      "display": "current_memory",
      "value": "list.text",
      "rank": 1,
      "make_static": true
    },
    "first_message_content_": {
      "display": "first_message_content",
      "value": "text",
      "rank": 19,
      "make_static": true
    },
    "safezonedown_sc_index_": {
      "display": "safeZoneDown_sc_index",
      "value": "number",
      "rank": 19,
      "default_val": 9,
      "make_static": true
    },
    "speech_to_text_loading_": {
      "display": "speech_to_text_loading",
      "value": "boolean",
      "rank": 12,
      "make_static": true
    },
    "saving_removing_processing_": {
      "display": "saving_removing_processing",
      "value": "boolean",
      "rank": 11
    }
  },
};
