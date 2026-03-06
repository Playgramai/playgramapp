export const arbitrarytext = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "image_generation"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTnWy0",
                        "optional": true,
                        "param_id": "bTQSV0",
                        "param_name": "file"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
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
                  "btype_id": "image",
                  "event_id": "bTnWy0",
                  "optional": true,
                  "param_id": "bTcNt",
                  "param_name": "user_image"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": {
                        "next": {
                          "next": {
                            "args": "image",
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "properties": {
                                                "separator": {
                                                  "entries": {
                                                    "0": ","
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "split_by",
                                              "is_slidable": true
                                            },
                                            "properties": {
                                              "arbitrary_text": {
                                                "entries": {
                                                  "0": "text/csv,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/json,application/typescript,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "ArbitraryText"
                                          },
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": "text/plain"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
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
                                                      "event_id": "bTnWy0",
                                                      "optional": true,
                                                      "param_id": "bTQSV0",
                                                      "param_name": "file"
                                                    },
                                                    "type": "CurrentWorkflowItem",
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
                                          "name": "is_contained_by_list",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "mime_type_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTnWy0",
                                        "optional": true,
                                        "param_id": "bTQSV0",
                                        "param_name": "file"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": "\",\n          \"fileUri\": \"",
                                    "3": {
                                      "next": {
                                        "type": "Message",
                                        "name": "gemini_id_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTnWy0",
                                        "optional": true,
                                        "param_id": "bTQSV0",
                                        "param_name": "file"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "4": "\"\n        }\n      }"
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
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "mime_type_text",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.file",
                          "event_id": "bTnWy0",
                          "optional": true,
                          "param_id": "bTQSV0",
                          "param_name": "file"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      }
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
            "name": "not_contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "list.option.llm_tool__os_",
            "event_id": "bTnWy0",
            "optional": true,
            "param_id": "bTPGl0",
            "param_name": "enabled_tools"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "ArbitraryText"
};
