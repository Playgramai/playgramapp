export const ButtonClicked_bTJWB = {
  "properties": {
    "element_id": "bToON",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTJVv",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTitH3"
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
      "id": "bTcJb"
    },
    "2": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "new_chat",
            "value": {
              "entries": {
                "0": "true"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTYRQ0"
    }
  }
};
