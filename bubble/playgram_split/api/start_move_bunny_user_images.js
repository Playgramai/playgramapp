export const start_move_bunny_user_images = {
  "properties": {
    "expose": false,
    "wf_name": "start_move_bunny_user_images",
    "parameters": {
      "0": {
        "key": "chat",
        "value": "custom.chat",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "uuid",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "user_image",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": false
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTrXH0",
  "actions": {
    "0": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTrYI0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrXH0",
                "param_id": "user_image",
                "param_name": "user_image"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTrYC0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTrYg0"
    },
    "1": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrXH0",
                "param_id": "uuid",
                "param_name": "uuid"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_query": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{ \"class\": \"Messages_v3\", \"properties\":{",
                    "1": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "\"user_image\": \"",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "bTrYJ0",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTrYg0"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "2": "\""
                          },
                          "type": "TextExpression",
                          "said": "a2Vsdm8tMzE4ODQ="
                        }
                      },
                      "type": "ArbitraryText"
                    },
                    "2": "}, \"id\": \"",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTrXH0",
                        "param_id": "uuid",
                        "param_name": "uuid"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "4": "\", \"tenant\": \"",
                    "5": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "organization_custom_organization",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTrXH0",
                        "param_id": "chat",
                        "param_name": "chat"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "6": "\"}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "url_params_endpoint": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTrXZ0"
    }
  }
};
