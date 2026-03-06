export const chat_open = {
  "properties": {
    "event_name": "chat_open ",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqHP2",
        "param_name": "chat_id"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTupe1",
  "name": "chat_open",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTupj1"
    },
    "1": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTupk1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTupl1"
    },
    "3": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTupe1",
                    "optional": false,
                    "param_id": "bTqHP2",
                    "param_name": "chat_id"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": false
      },
      "type": "ChangePage",
      "id": "bTupp1",
      "name": "Go to current page"
    }
  }
};
