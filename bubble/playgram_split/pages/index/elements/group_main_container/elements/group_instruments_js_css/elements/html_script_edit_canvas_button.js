export const html_script_edit_canvas_button = {
  "properties": {
    "height": 150,
    "left": 20,
    "top": 20,
    "width": 280,
    "zindex": 16,
    "border_color": "var(--color_bTHBK_default)",
    "border_width": 2,
    "html": {
      "entries": {
        "0": "<script>\nwindow.addEventListener('load', function() {\n\n  function initEditButtons(btn) {\n    if (btn.classList.contains('edit-initialized')) return;\n\n    btn.addEventListener('click', function() {\n\n      console.log(\"\ud83d\udfe6 \u041d\u0430\u0436\u0430\u043b\u0438 Edit \u043a\u043d\u043e\u043f\u043a\u0443:\", btn);\n\n      const pre = btn.closest(\"pre.hljs-copy-wrapper\");\n\n      if (!pre) {\n        console.warn(\"\u274c \u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d <pre>\");\n        return;\n      }\n\n      console.log(\"\u2705 \u041d\u0430\u0439\u0434\u0435\u043d <pre>:\", pre);\n\n      const codeEl = pre.querySelector(\"code\");\n      const codeText = codeEl ? codeEl.innerText.trim() : \"\";\n      console.log(\"\ud83d\udcc4 \u041a\u043e\u0434:\", codeText);\n\n      // ========== \u041d\u041e\u0412\u042b\u0419 \u041f\u041e\u0418\u0421\u041a: \u0418\u0429\u0415\u041c \"\u0420\u042f\u0414\u041e\u041c\", \u0410 \u041d\u0415 \u0412\u0412\u0415\u0420\u0425 ==========\n\n      console.log(\"\ud83d\udd0e \u0418\u0449\u0435\u043c #message-id \u0440\u044f\u0434\u043e\u043c \u0441 \u044d\u0442\u0438\u043c \u0431\u043b\u043e\u043a\u043e\u043c...\");\n\n      // 1\ufe0f\u20e3 \u0411\u0435\u0440\u0451\u043c \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n      const messageScope =\n        pre.closest('[id^=\"llm-cell\"]') ||   // \u0447\u0430\u0441\u0442\u043e \u0443 \u0432\u0430\u0441 \u044d\u0442\u043e llm-cell-5\n        pre.closest('.bubble-element') ||   // \u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\n        pre.parentElement;                  // \u043a\u0440\u0430\u0439\u043d\u0438\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\n\n      console.log(\"\ud83d\udce6 \u041d\u0430\u0439\u0434\u0435\u043d \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:\", messageScope);\n\n      // 2\ufe0f\u20e3 \u0418\u0449\u0435\u043c message-id \u0412\u041d\u0423\u0422\u0420\u0418 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n      let messageContainer = null;\n\n      if (messageScope) {\n        messageContainer = messageScope.querySelector(\"#message-id\");\n      }\n\n      if (!messageContainer) {\n        console.error(\n          \"\u274c \u041d\u0415 \u043d\u0430\u0439\u0434\u0435\u043d #message-id \u0440\u044f\u0434\u043e\u043c \u0441 \u044d\u0442\u0438\u043c \u0431\u043b\u043e\u043a\u043e\u043c \u0432 \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\"\n        );\n        return;\n      }\n\n      console.log(\"\u2705 \u041d\u0430\u0439\u0434\u0435\u043d \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0439 message-id \u0440\u044f\u0434\u043e\u043c:\", messageContainer);\n\n      // ========== \u0420\u0410\u0411\u041e\u0422\u0410 \u0421 data-id ==========\n\n      const generatedId =\n        messageContainer.getAttribute(\"data-id\") ||\n        \"msg-\" + Date.now();\n\n      messageContainer.setAttribute(\"data-id\", generatedId);\n\n      console.log(\"\u2705 data-id \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043d\u0430 message-id:\", generatedId);\n\n      console.log(\"\ud83d\ude80 \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0432 Bubble:\", {\n        output1: codeText,\n        output2: generatedId\n      });\n\n      bubble_fn_display({\n        output1: codeText,\n        output2: generatedId\n      });\n    });\n\n    btn.classList.add('edit-initialized');\n  }\n\n  const observer = new MutationObserver((mutations) => {\n    mutations.forEach(mutation => {\n      mutation.addedNodes.forEach(node => {\n        if (node.nodeType !== 1) return;\n\n        if (node.matches && node.matches(\".hljs-edit-btn\")) {\n          console.log(\"\ud83d\udfe2 \u041d\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 Edit \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430:\", node);\n          initEditButtons(node);\n        }\n\n        node.querySelectorAll &&\n          node.querySelectorAll(\".hljs-edit-btn\")\n              .forEach(initEditButtons);\n      });\n    });\n  });\n\n  observer.observe(document.body, { childList: true, subtree: true });\n\n});\n</script>\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "border_style": "solid",
    "order": 39,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": true,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTbeZ",
  "current_parent": "bTUiS0",
  "default_name": "HTML Q",
  "name": "HTML Script Edit Canvas Button",
  "style": "HTML_default_"
};
