export const buttons_shortcuts = {
  "properties": {
    "event_name": "buttons-shortcuts ",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqwx",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvDt1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTvDt1",
            "optional": false,
            "param_id": "bTqwx",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTKdH0",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTvDv1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-us-delete-delete-archiveChat",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvDt1",
            "optional": false,
            "param_id": "bTqwx",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-us-delete-delete-archiveChat\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvDz1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "run btn-us-cancel-delete-archiveChat",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvDt1",
            "optional": false,
            "param_id": "bTqwx",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-us-cancel-delete-archiveChat\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEA1"
    }
  }
};
