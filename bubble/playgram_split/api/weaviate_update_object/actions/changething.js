export const changething = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": "true",
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "trimmed",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<='save_to_current_chat'\\s*:\\s*')[^']+"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTLtD",
        "param_id": "full_text",
        "param_name": "full_text"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "additional_context_list_text",
        "value": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "created_date_unix_ms: ",
                    "1": {
                      "next": {
                        "properties": {
                          "component_to_extract": "UNIX"
                        },
                        "type": "Message",
                        "name": "extract_from_date",
                        "is_slidable": true
                      },
                      "properties": {
                        "name": "Current Date/Time"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": ";\n",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "original",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "user_message: ",
                                      "1": {
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTLtD",
                                          "param_id": "user_message",
                                          "param_name": "user_message"
                                        },
                                        "type": "APIEventParameter",
                                        "is_slidable": false
                                      },
                                      "2": "{#NANI}llm_reply: ",
                                      "3": {
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTLtD",
                                          "param_id": "llm_reply",
                                          "param_name": "llm_reply"
                                        },
                                        "type": "APIEventParameter",
                                        "is_slidable": false
                                      },
                                      "4": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "args": "normalized",
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "",
                                                        "1": {
                                                          "properties": {
                                                            "btype_id": "text",
                                                            "event_id": "bTLtD",
                                                            "param_id": "normalized",
                                                            "param_name": "normalized"
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
                                                          "next": {
                                                            "next": {
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "trimmed",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "first_element",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "regex": {
                                                                "entries": {
                                                                  "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "extract_regex",
                                                            "is_slidable": true
                                                          },
                                                          "properties": {
                                                            "btype_id": "text",
                                                            "event_id": "bTLtD",
                                                            "param_id": "full_text",
                                                            "param_name": "full_text"
                                                          },
                                                          "type": "APIEventParameter",
                                                          "said": "a2Vsdm8tMzE4ODQ=",
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
                                                "name": "equals",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "trimmed",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "regex": {
                                              "entries": {
                                                "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "extract_regex",
                                          "is_slidable": true
                                        },
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTLtD",
                                          "param_id": "full_text",
                                          "param_name": "full_text"
                                        },
                                        "type": "APIEventParameter",
                                        "said": "a2Vsdm8tMzE4ODQ=",
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
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "trimmed",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTLtD",
                        "param_id": "full_text",
                        "param_name": "full_text"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "4": ""
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
        "action": "add"
      },
      "1": {
        "key": "context_message_ids_list_text",
        "value": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "optional": true,
                "param_id": "object_id",
                "param_name": "object_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "action": "add"
      }
    },
    "to_change": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTLtD",
        "param_id": "chat",
        "param_name": "chat"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTLtP"
};
