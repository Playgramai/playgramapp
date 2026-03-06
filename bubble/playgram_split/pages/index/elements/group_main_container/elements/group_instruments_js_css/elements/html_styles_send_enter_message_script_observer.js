export const html_styles_send_enter_message_script_observer = {
  "properties": {
    "height": 9,
    "left": 0,
    "top": 0,
    "width": 24,
    "zindex": 9,
    "border_color": "var(--color_bTHBJ_default)",
    "border_width": 2,
    "html": {
      "entries": {
        "0": "<style>\n#text {\nmin-height: ",
        "1": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiY0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "2": "px !important;\ndisplay: block;             \n  vertical-align: top;\n  align-items: flex-start;   \n  justify-content: flex-start;\n padding-bottom: ",
        "3": {
          "next": {
            "next": {
              "args": 80,
              "type": "Message",
              "name": "minus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_height",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUec0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "4": "px !important; \n\n}\n\n\n[id^=\"rg-temp-wrapper\"] {\nheight: 0 !important; \nopacity: 0 !important;\noverflow: hidden !important; \npointer-events: none !important;\n\n}\n\n\n[id^=\"user-message-group\"] {\nheight: 0 !important; \nopacity: 0 !important;\noverflow: hidden !important; \npointer-events: none !important;\nmargin-bottom: 0 !important;\n\n}\n\n#messageContainerNew{\nheight: auto !important; \n}\n\n\n</style>\n\n<script>\n(function() {\n    let enterPressed = false;\n\n    $('#main-input').off('keydown').on('keydown', function(e) {\n        // \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c, \u0447\u0442\u043e \u043d\u0430\u0436\u0430\u0442\u0430 \u0438\u043c\u0435\u043d\u043d\u043e \u043a\u043b\u0430\u0432\u0438\u0448\u0430 Enter \u0438 **\u043d\u0435\u0442 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432**\n        if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {\n            e.preventDefault();\n            if (e.repeat) return;\n            if (enterPressed) return;\n            enterPressed = true;\n\n            if ($('#enter').length) {\n                $('#enter').click();\n            }\n\n            $(this).blur();\n\n            setTimeout(() => { enterPressed = false; }, 400);\n        }\n    });\n})();\n\n\n\nfunction copyToClipboard(text) {\n    navigator.clipboard.writeText(text)\n        .then(() => console.log(\"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!\"))\n        .catch(err => console.error(\"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438:\", err));\n}\n\n</script>\n\n\n\n\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "border_style": "solid",
    "order": 8,
    "fit_height": true,
    "padding_top": 4,
    "padding_left": 4,
    "single_width": true,
    "min_width_css": "30px",
    "padding_right": 4,
    "single_height": true,
    "min_height_css": "30px",
    "padding_bottom": 4,
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "type": "HTML",
  "id": "bTUiX0",
  "default_name": "HTML A",
  "name": "HTML Styles + Send \"Enter\" Message Script + Observer"
};
