export const newthing = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.response.file_url",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTrSy0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "initial_values": {
      "0": {
        "key": "bunny_url_text",
        "value": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.response.file_url",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTrSy0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "mime_type_text",
        "value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "mime_type",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.file_types__os_",
                "option_value": "webp"
              },
              "type": "OptionValue"
            }
          },
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "chat_custom_chat",
        "value": {
          "properties": {
            "action_id": "bTrVg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "chat_type_option_chat_type__os_",
        "value": {
          "next": {
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrVg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "organization_custom_organization",
        "value": {
          "next": {
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrVg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "project_custom_project",
        "value": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrVg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "6": {
        "key": "shared_access_chat__boolean",
        "value": {
          "next": {
            "type": "Message",
            "name": "share_access_boolean",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrVg0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "thing_type": "custom.file"
  },
  "type": "NewThing",
  "id": "bTnYM0"
};
