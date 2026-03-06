export const new_chat_shortcut = {
  "properties": {
    "event_name": "new chat - shortcut",
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTutt1",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();\n\n(function () {\n  window.focusInputById = function (id, timeout = 500) {\n    if (!id) return;\n\n    const start = Date.now();\n\n    (function tryFocus() {\n      const el = document.getElementById(id);\n      if (el) {\n        try {\n          el.focus({ preventScroll: true });\n        } catch (e) {\n          el.focus();\n        }\n        return;\n      }\n      if (Date.now() - start < timeout) {\n        requestAnimationFrame(tryFocus);\n      }\n    })();\n  };\n})();\nfocusInputById(\"main-input\");\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuty1"
    },
    "1": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "type",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "personal"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTutz1"
    }
  }
};
