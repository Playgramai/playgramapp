export const ButtonClicked_bTIph0 = {
  "properties": {
    "element_id": "bTIpU0",
    "workflow_disabled": true
  },
  "type": "ButtonClicked",
  "id": "bTIpb0",
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
      "id": "bTcIp"
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
                    "option_value": "team"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": false
      },
      "type": "ChangePage",
      "id": "bTIpg0"
    }
  }
};
