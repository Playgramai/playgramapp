export const popup_delete_memory = {
  "properties": {
    "event_name": "popup_delete_memory",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTvvb2",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvvV2",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTvvV2",
            "optional": false,
            "param_id": "bTvvb2",
            "param_name": "shortcut"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTUhQ0",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTvvf2"
    },
    "1": {
      "properties": {
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
                "event_id": "bTvvV2",
                "optional": false,
                "param_id": "bTvvb2",
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
      "id": "bTvvh2"
    }
  }
};
