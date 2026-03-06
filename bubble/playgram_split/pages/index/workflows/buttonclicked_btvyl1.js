export const ButtonClicked_bTvyl1 = {
  "properties": {
    "element_id": "bTUeh0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTvya1",
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
      "id": "bTwDY1"
    },
    "1": {
      "properties": {
        "url_to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTvym1"
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
      "id": "bTvyr1"
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
      "id": "bTvyg1"
    },
    "4": {
      "properties": {
        "element_id": "bTUed0"
      },
      "type": "ResetGroup",
      "id": "bTvyh1"
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
                    "action_id": "bTvyr1"
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
                    "action_id": "bTvyg1"
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
      "id": "bTwCv1"
    }
  }
};
