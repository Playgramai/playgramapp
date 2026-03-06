export const changepage_2 = {
  "properties": {
    "condition": {
      "next": {
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtgv0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "add_parameters": true,
    "url_parameters": {
      "0": {
        "key": "chat",
        "value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtgv0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "1": {
        "key": "temp",
        "value": {
          "entries": {
            "0": "yes"
          },
          "type": "TextExpression"
        }
      }
    }
  },
  "type": "ChangePage",
  "id": "bTthM0"
};
