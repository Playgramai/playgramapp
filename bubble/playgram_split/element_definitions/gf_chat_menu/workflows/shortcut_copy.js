export const shortcut_copy = {
  "properties": {
    "event_name": "shortcut (copy)",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqyD",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuwI1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTuwI1",
            "optional": false,
            "param_id": "bTqyD",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTIml0",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTuwN1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "close_gf-chat popup-delete-chat",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuwI1",
            "optional": false,
            "param_id": "bTqyD",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"gf-chat btn-close-del-chat\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuwO1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "run gf-chat btn-cancel-del-chat",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuwI1",
            "optional": false,
            "param_id": "bTqyD",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"gf-chat btn-cancel-del-chat\");\n  if (btn) btn.click();\n})();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuwP1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "args": "run gf-chat btn-delete-del-chat",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTuwI1",
            "optional": false,
            "param_id": "bTqyD",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"gf-chat btn-delete-del-chat\");\n  if (btn) btn.click();\n})();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuwT1"
    }
  }
};
