export const ButtonClicked_bTIkK0 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.chat_type__os_",
            "option_value": "temporary"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "not_equals",
        "is_slidable": false
      },
      "properties": {
        "value": "option.chat_type__os_",
        "parameter_name": {
          "entries": {
            "0": "type"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "element_id": "bTkfr2"
  },
  "type": "ButtonClicked",
  "id": "bTUqd0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0",
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
                    "option_value": "temporary"
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
      "id": "bTUqh0"
    }
  }
};
