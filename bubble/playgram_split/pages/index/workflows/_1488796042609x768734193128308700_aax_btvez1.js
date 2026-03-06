export const _1488796042609x768734193128308700_AAX_bTvEZ1 = {
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
        "next": {
          "args": {
            "next": {
              "next": {
                "args": "temporary",
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpet"
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
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
    "element_id": "bTuQJ1",
    "wf_folder": "bTupd1"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTvET1",
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
      "id": "bTvEY1"
    }
  }
};
