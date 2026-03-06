export const shortcut_buttons = {
  "properties": {
    "event_name": "shortcut_buttons",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTvuk2",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvue2",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTvue2",
            "optional": false,
            "param_id": "bTvuk2",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTMGw",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTvul2"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "run",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvue2",
            "optional": false,
            "param_id": "bTvuk2",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"",
            "1": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "run "
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTvue2",
                "optional": false,
                "param_id": "bTvuk2",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": "\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvuq2"
    }
  }
};
