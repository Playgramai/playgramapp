export const html_copy_canvas_message_script = {
  "properties": {
    "height": 150,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 16,
    "border_color": "var(--color_bTHBK_default)",
    "border_width": 2,
    "html": {
      "entries": {
        "0": "<script>\nfunction initEditor(textarea) {\n  if (!textarea || textarea.classList.contains(\"cm-initialized\")) return;\n\n  const editor = CodeMirror.fromTextArea(textarea, {\n    lineNumbers: true,\n    mode: \"javascript\",\n    theme: \"material-darker\",\n    readOnly: \"nocursor\",\n    viewportMargin: Infinity\n  });\n\n  textarea._cmInstance = editor;\n  textarea.classList.add(\"cm-initialized\");\n}\n\nfunction htmlToFormattedText(html) {\n  const temp = document.createElement(\"div\");\n  temp.innerHTML = html;\n\n  const blockTags = [\"p\", \"div\", \"h1\", \"h2\", \"h3\", \"h4\", \"h5\", \"h6\"];\n  blockTags.forEach(tag => {\n    temp.querySelectorAll(tag).forEach(el => {\n      el.insertAdjacentText(\"afterend\", \"\\n\");\n    });\n  });\n\n  temp.querySelectorAll(\"li\").forEach(el => {\n    el.insertAdjacentText(\"beforebegin\", \"\u2022 \");\n    el.insertAdjacentText(\"afterend\", \"\\n\");\n  });\n\n  temp.querySelectorAll(\"br\").forEach(el => el.replaceWith(\"\\n\"));\n\n  return temp.textContent.replace(/\\n{3,}/g, \"\\n\\n\").trim();\n}\n\nfunction copyCanvasText(canvasId) {\n  const canvas = document.getElementById(canvasId);\n  if (!canvas) return;\n\n  let codeText = \"\";\n  const textarea = canvas.querySelector(\"textarea[id^='editor']\");\n\n  if (textarea) {\n    if (textarea._cmInstance && typeof textarea._cmInstance.getValue === \"function\") {\n      codeText = textarea._cmInstance.getValue();\n    } else {\n      codeText = textarea.value || \"\";\n    }\n  } else {\n    codeText = htmlToFormattedText(canvas.innerHTML);\n  }\n\n  navigator.clipboard.writeText(codeText)\n    .then(() => {\n      const buttons = document.querySelectorAll('button');\n      let btn = null;\n      buttons.forEach(b => {\n        const onclickAttr = b.getAttribute('onclick');\n        if (onclickAttr && onclickAttr.includes(canvasId)) {\n          btn = b;\n        }\n      });\n      if (!btn) return;\n\n      // \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432\n      clearTimeout(btn._copyTimeout);\n\n      const originalText = btn.dataset.originalText || btn.textContent;\n      btn.dataset.originalText = originalText;\n\n      btn.textContent = \"Copied!\";\n      btn.disabled = true;\n\n      btn._copyTimeout = setTimeout(() => {\n        btn.textContent = originalText;\n        btn.disabled = false;\n      }, 1500);\n    })\n    .catch(err => console.error(\"Clipboard error:\", err));\n}\n</script>\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "border_style": "solid",
    "order": 37,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTZAH",
  "current_parent": "bTUiS0",
  "default_name": "HTML N",
  "name": "HTML Copy Canvas Message Script",
  "style": "HTML_default_"
};
