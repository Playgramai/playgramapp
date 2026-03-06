export const ButtonClicked_bTuJb1 = {
  "properties": {
    "element_id": "bTuIG1"
  },
  "type": "ButtonClicked",
  "id": "bTuJN1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "archived__boolean",
            "value": false,
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
      "id": "bTuJP1"
    },
    "1": {
      "properties": {
        "element_id": "bTuHz1"
      },
      "type": "HideElement",
      "id": "bTuJT1"
    },
    "2": {
      "properties": {
        "element_id": "bTuHz1"
      },
      "type": "ResetGroup",
      "id": "bTuJU1"
    },
    "3": {
      "properties": {
        "element_id": "bTUhv0",
        "custom_state": "custom.chat_"
      },
      "type": "SetCustomState",
      "id": "bTuJV1"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTuJP1"
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
                    "action_id": "bTuJP1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTuJZ1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTuJP1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
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
                  "properties": {
                    "action_id": "bTuJP1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
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
                    "action_id": "bTuJP1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTuJa1"
    }
  }
};
