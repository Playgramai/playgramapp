export const arbitrary_text = {
  "entries": {
    "0": "{ \"class\": \"Messages_v3\", \"properties\":{\"vectorized_content\": ",
    "1": {
      "next": {
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
        }
      },
      "type": "ArbitraryText",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "2": ", \"already_saved\": \"true\", ",
    "3": {
      "next": {
        "args": "true",
        "next": {
          "properties": {
            "formatting_for_true": {
              "entries": {
                "0": "\"saved_manually\": \"true\", "
              },
              "type": "TextExpression"
            },
            "formatting_for_false": {
              "entries": {
                "0": ""
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
      "properties": {
        "btype_id": "text",
        "event_id": "bTLtD",
        "optional": true,
        "param_id": "saved_manually",
        "param_name": "saved_manually"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "4": "  ",
    "5": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTLtD",
                    "optional": true,
                    "param_id": "memory_level",
                    "param_name": "memory_level"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.memory_level_with_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTOYL0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "\"memory_level_with_id\": [",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "properties": {
                                          "content": {
                                            "entries": {
                                              "0": "\"",
                                              "1": {
                                                "type": "InjectedValue",
                                                "is_slidable": false
                                              },
                                              "2": "\""
                                            },
                                            "type": "TextExpression"
                                          },
                                          "delimiter": {
                                            "entries": {
                                              "0": ","
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_as_text",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "_api_c2_body.properties.memory_level_with_id",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "action_id": "bTOYL0"
                                    },
                                    "type": "PreviousStep",
                                    "is_slidable": false
                                  },
                                  "2": ",",
                                  "3": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTLtD",
                                      "optional": true,
                                      "param_id": "memory_level",
                                      "param_name": "memory_level"
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
                                        "type": "Message",
                                        "name": "format_json_encode",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "_id",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "user",
                                      "event_id": "bTLtD",
                                      "param_id": "user",
                                      "param_name": "user"
                                    },
                                    "type": "APIEventParameter",
                                    "is_slidable": false
                                  },
                                  "2": ",",
                                  "3": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTLtD",
                                      "optional": true,
                                      "param_id": "memory_level",
                                      "param_name": "memory_level"
                                    },
                                    "type": "APIEventParameter",
                                    "is_slidable": false
                                  },
                                  "4": ""
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
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2_body.properties.memory_level_with_id",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTOYL0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "2": "],"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": ""
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTLtD",
        "optional": true,
        "param_id": "memory_level",
        "param_name": "memory_level"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "6": "  \"token_count\": ",
    "7": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": 2.7,
                  "type": "Message",
                  "name": "divide",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "length",
                "is_slidable": false
              },
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
        }
      },
      "type": "ArbitraryText"
    },
    "8": "},      \"id\": \"",
    "9": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTLtD",
        "param_id": "object_id",
        "param_name": "object_id"
      },
      "type": "APIEventParameter",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "10": "\",   \"tenant\": \"",
    "11": {
      "next": {
        "next": {
          "type": "Message",
          "name": "_id",
          "is_slidable": false
        },
        "type": "Message",
        "name": "organization_workspace_custom_organization",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTLtD",
        "param_id": "workspace_user",
        "param_name": "workspace_user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "12": "\" , \"vector\":",
    "13": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "[",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_embedding",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.data",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTQOq"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "2": "]"
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "14": "}"
  },
  "type": "TextExpression",
};
