export const ButtonClicked_bTKzt = {
  "properties": {
    "element_id": "bTKzg"
  },
  "type": "ButtonClicked",
  "id": "bTKzr",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTImr0"
      },
      "type": "ToggleElement",
      "id": "bTKzz"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "archived__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTKzx"
    },
    "2": {
      "properties": {
        "value": {
          "properties": {
            "action_id": "bTKzx"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTIml0",
        "custom_state": "custom.chat_"
      },
      "type": "SetCustomState",
      "id": "bTuId1"
    },
    "3": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTLAE"
    }
  }
};
