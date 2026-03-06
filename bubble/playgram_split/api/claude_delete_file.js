export const claude_delete_file = {
  "properties": {
    "expose": false,
    "wf_name": "claude_delete_file",
    "wf_folder": "bTnlH0",
    "parameters": {
      "0": {
        "key": "file",
        "value": "custom.file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTTJf",
  "actions": {
    "0": {
      "properties": {
        "url_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "claude_id_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTTJf",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTPRP",
      "id": "bTTJl"
    },
    "1": {
      "properties": {
        "scheduled_id": {
          "next": {
            "type": "Message",
            "name": "claude_delete_scheduled_api_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTJN",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "CancelScheduledAPIEvent",
      "id": "bTtwZ0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "claude_id_text",
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
          },
          "1": {
            "key": "claude_delete_scheduled_api_text",
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
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTJf",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTTJn"
    }
  }
};
