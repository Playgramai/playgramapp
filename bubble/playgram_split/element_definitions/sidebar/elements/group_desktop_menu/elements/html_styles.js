export const html_styles = {
  "properties": {
    "height": 150,
    "left": 0,
    "top": -12,
    "width": 280,
    "zindex": 16,
    "html": {
      "entries": {
        "0": "<style>\n#gfMenuProfile {\n  transform: translateX(0px) !important;\n transform: translateY(40px) !important;\n bottom: 110px !important;\n top: unset !important;\n}\n\n\n\n/* Firefox */\n#overflowID,\n#overflowID * {\n  scrollbar-width: none !important;\n  -ms-overflow-style: none !important;\n}\n\n/* Chrome, Edge, Safari */\n#overflowID::-webkit-scrollbar,\n#overflowID *::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n\n\n</style>\n\n<script>\n(function () {\n  // 1. \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 HTML \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n  const ORIGINAL_HTML = document.documentElement.innerHTML;\n\n  // 2. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \"\u043c\u044f\u0433\u043a\u043e\u0433\u043e\" refresh\n  window.softRefresh = function () {\n    // \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c DOM\n    document.open();\n    document.write(ORIGINAL_HTML);\n    document.close();\n\n    // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e soft reload\n    window.dispatchEvent(new Event(\"soft:reload\"));\n  };\n\n  // 3. \u041f\u0440\u0438\u043c\u0435\u0440 \u0445\u0443\u043a\u0430 \u043f\u043e\u0441\u043b\u0435 \"\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438\"\n  window.addEventListener(\"soft:reload\", () => {\n    console.log(\"Soft refresh done\");\n  });\n})();\n</script>\n"
      },
      "type": "TextExpression"
    },
    "vertical_centering": true,
    "order": 4,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": true,
    "min_width_css": "0px",
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.expand_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "HTML",
  "id": "bTQCT0",
  "current_parent": "bTHoP",
  "default_name": "HTML B",
  "name": "HTML Styles",
  "style": "HTML_default_"
};
