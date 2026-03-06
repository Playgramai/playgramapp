export const ButtonClicked_bTqoz = {
  "properties": {
    "element_id": "bTqof"
  },
  "type": "ButtonClicked",
  "id": "bTqox",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTIgg"
      },
      "type": "HideElement",
      "id": "bTqpF"
    },
    "1": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "analytics"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "general"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTqpD"
    }
  }
};
