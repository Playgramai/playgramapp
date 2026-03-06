export const apiconnector2_bthff0_btggf = {
  "properties": {
    "url_params_store_name": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.name",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTghh0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Type": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "mime_type_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTghb0",
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "next": {
                    "type": "Message",
                    "name": "mime_type_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.project_instruction_file",
                    "event_id": "bTghb0",
                    "optional": true,
                    "param_id": "project_file",
                    "param_name": "project_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "4": "",
                "5": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.project_instruction_file",
                          "event_id": "bTghb0",
                          "optional": true,
                          "param_id": "project_file",
                          "param_name": "project_file"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
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
                                      "name": "mime_type",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "constraints": {
                                      "0": {
                                        "key": "_advanced_search_constraint",
                                        "value": {
                                          "next": {
                                            "next": {
                                              "args": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "last_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "separator": {
                                                      "entries": {
                                                        "0": "."
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "split_by",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "btype_id": "text",
                                                  "event_id": "bTghb0",
                                                  "optional": true,
                                                  "param_id": "file_from_memory_knowledge",
                                                  "param_name": "file_from_memory_knowledge"
                                                },
                                                "type": "APIEventParameter",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "equals",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "display",
                                            "is_slidable": false
                                          },
                                          "type": "InjectedValue",
                                          "is_slidable": false
                                        },
                                        "constraint_type": {
                                          "type": "Empty"
                                        }
                                      }
                                    }
                                  },
                                  "type": "Message",
                                  "name": "filtered",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "option_set": "option.file_types__os_",
                                  "option_value": "all values"
                                },
                                "type": "OptionValue",
                                "said": "a2Vsdm8tMzE4ODQ="
                              },
                              "2": ""
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTghb0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "6": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        }
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Length": {
      "entries": {
        "0": "1"
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTggf",
  "id": "bTghj0"
};
