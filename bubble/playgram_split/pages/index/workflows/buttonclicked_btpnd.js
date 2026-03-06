export const ButtonClicked_bTPND = {
  "properties": {
    "element_id": "bTUeX0"
  },
  "type": "ButtonClicked",
  "id": "bTUuN0",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "element_id": "bTtqp0"
      },
      "type": "DisplayGroupData",
      "id": "bTwDd1"
    },
    "1": {
      "properties": {
        "url_to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTwBf1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_file",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwBh1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_text",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwBm1"
    },
    "4": {
      "properties": {
        "element_id": "bTUeQ0"
      },
      "type": "ResetGroup",
      "id": "bTUuT0"
    },
    "5": {
      "properties": {
        "scheduled_id": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "delete_file_wf_id_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTwBh1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "next": {
                    "type": "Message",
                    "name": "delete_file_wf_id_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTwBm1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "4": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        }
      },
      "type": "CancelScheduledAPIEvent",
      "id": "bTwDL1"
    }
  }
};
