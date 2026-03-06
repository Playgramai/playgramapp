export const html_render_code_block = {
  "properties": {
    "height": 150,
    "left": 10,
    "top": 10,
    "width": 280,
    "zindex": 16,
    "border_color": "var(--color_bTHBK_default)",
    "border_width": 2,
    "html": {
      "entries": {
        "0": "<script>\nwindow.addEventListener('load', function() {\n  function initEditor(textarea) {\n    if (!textarea.classList.contains('cm-initialized')) {\n      const mode = textarea.dataset.mode || \"javascript\";\n\n      CodeMirror.fromTextArea(textarea, {\n        lineNumbers: true,\n        mode: mode,\n        readOnly: true,\n        viewportMargin: Infinity,\n        theme: \"material-darker\"\n      });\n\n      textarea.classList.add('cm-initialized');\n    }\n  }\n\n  function initAllEditors() {\n    document.querySelectorAll(\"textarea[id^='editor']\").forEach(initEditor);\n  }\n\n  // 1\ufe0f\u20e3 \u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438\n  initAllEditors();\n\n  // 2\ufe0f\u20e3 \u0421\u043b\u0435\u0434\u0438\u043c \u0437\u0430 \u043d\u043e\u0432\u044b\u043c\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 (MutationObserver)\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach(mutation => {\n      mutation.addedNodes.forEach(node => {\n        if (node.nodeType === 1) {\n          if (node.matches(\"textarea[id^='editor']\")) {\n            initEditor(node);\n          }\n          node.querySelectorAll && node.querySelectorAll(\"textarea[id^='editor']\").forEach(initEditor);\n        }\n      });\n    });\n  });\n\n  observer.observe(document.body, { childList: true, subtree: true });\n\n  // 3\ufe0f\u20e3 \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0430 RG)\n  setTimeout(initAllEditors, 1000);\n});\n</script>\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "border_style": "solid",
    "order": 38,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTbDl",
  "current_parent": "bTUiS0",
  "default_name": "HTML P",
  "name": "HTML Render code block",
  "style": "HTML_default_"
};
