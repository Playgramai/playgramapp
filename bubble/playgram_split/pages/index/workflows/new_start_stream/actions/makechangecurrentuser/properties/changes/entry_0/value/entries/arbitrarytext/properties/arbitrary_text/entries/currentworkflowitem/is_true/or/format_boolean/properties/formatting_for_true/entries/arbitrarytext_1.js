export const arbitrarytext_1 = {
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
                  "name": "is_not_empty",
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
                      "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"image/",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "png"
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
                                              "properties": {
                                                "find": {
                                                  "entries": {
                                                    "0": "jpg"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "replace": {
                                                  "entries": {
                                                    "0": "jpeg"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "find_replace",
                                              "is_slidable": true
                                            },
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
                                        "type": "Message",
                                        "name": "bunny_url_text",
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
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "png_image_text",
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
