export const ButtonClicked_bTitz3 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "new_chat"
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
  "id": "bTits3",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTiuD3"
    },
    "1": {
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
      "id": "bTitx3"
    },
    "2": {
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
      "id": "bTity3"
    }
  }
};
