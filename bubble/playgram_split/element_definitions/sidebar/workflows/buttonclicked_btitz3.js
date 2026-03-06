export const ButtonClicked_bTitZ3 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "search_chats"
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
  "id": "bTitT3",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.bubble_fn_shortcut && window.bubble_fn_shortcut(\"",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.shortcuts",
                "option_value": "popup_chatsearch"
              },
              "type": "OptionValue"
            },
            "2": "\");"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvJu1"
    },
    "1": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTita3"
    }
  }
};
