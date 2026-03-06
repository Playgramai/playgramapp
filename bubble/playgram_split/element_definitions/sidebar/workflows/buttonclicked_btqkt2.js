export const ButtonClicked_bTqKT2 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "library0"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "next": {
          "args": {
            "next": {
              "args": 768,
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
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTHpR"
  },
  "type": "ButtonClicked",
  "id": "bTqKN2",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTqKU2"
    },
    "1": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
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
      "id": "bTqKP2"
    }
  }
};
