export const openAI_delete_file = {
  "properties": {
    "expose": false,
    "wf_name": "openAI_delete_file",
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
    }
  },
  "type": "APIEvent",
  "id": "bTTJN",
  "actions": {
    "0": {
      "properties": {
        "url_params_vector_store_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "openai_vector_store_id_text",
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
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPQx",
      "id": "bTTJT"
    },
    "1": {
      "properties": {
        "url_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "openai_id_text",
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
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPRD",
      "id": "bTTJV"
    },
    "2": {
      "properties": {
        "scheduled_id": {
          "next": {
            "type": "Message",
            "name": "openai_delete_scheduled_api_text",
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
      "id": "bTtwX0"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "openai_delete_scheduled_api_text",
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
            "key": "openai_id_text",
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
          "2": {
            "key": "openai_vector_store_id_text",
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
            "event_id": "bTTJN",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTTJa"
    }
  }
};
