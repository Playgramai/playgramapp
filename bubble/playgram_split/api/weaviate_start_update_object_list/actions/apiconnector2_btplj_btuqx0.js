export const apiconnector2_btplj_btuqx0 = {
  "properties": {
    "body_params_context": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "properties": {
                    "btype_id": "list.text",
                    "event_id": "bTJTB0",
                    "optional": true,
                    "param_id": "context",
                    "param_name": "context"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "2": "\\"
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
    "body_params_chat_type": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "to_lowercase",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "type_option_chat_type__os_",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTJTB0",
                        "optional": true,
                        "param_id": "chat",
                        "param_name": "chat"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTJTB0",
                        "optional": true,
                        "param_id": "chat_type",
                        "param_name": "chat_type"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "format_boolean",
              "is_slidable": true
            },
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTJTB0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "body_params_llm_reply": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTJTB0",
                    "param_id": "llm_reply",
                    "param_name": "llm_reply"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "2": "\\"
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
    "body_params_user_message": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTJTB0",
                    "param_id": "user_message",
                    "param_name": "user_message"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "2": "\\"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTPLJ.bTUQX0",
  "id": "bTUQY0"
};
