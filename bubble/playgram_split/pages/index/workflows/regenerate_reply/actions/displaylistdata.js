export const displaylistdata = {
  "properties": {
    "data_source": {
      "next": {
        "next": {
          "args": 1,
          "next": {
            "args": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "number",
                "event_id": "bTacv0",
                "optional": false,
                "param_id": "bTtxt0",
                "param_name": "current_cell_index"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "next": {
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "<#NANI?>chat_id: \"",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.chat",
                          "event_id": "bTacv0",
                          "optional": false,
                          "param_id": "bTadD0",
                          "param_name": "chat"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "2": "\"<#NANI?>user_message: \"",
                      "3": {
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTacv0",
                          "optional": false,
                          "param_id": "bTadT0",
                          "param_name": "message_text"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "4": "\"<#NANI?>model: \"",
                      "5": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "llm_model_option_llm_models__os_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_group_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUiZ0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "6": "\"<#NANI?>user_message_image: \"",
                      "7": {
                        "next": {
                          "next": {
                            "args": "image",
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": {
                                      "next": {
                                        "type": "Message",
                                        "name": "bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTacv0",
                                        "optional": true,
                                        "param_id": "bTaeu0",
                                        "param_name": "chat_file"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "said": "a2Vsdm8tMzE4ODQ=",
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
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "mime_type_text",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.file",
                          "event_id": "bTacv0",
                          "optional": true,
                          "param_id": "bTaeu0",
                          "param_name": "chat_file"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "8": "\"<#NANI?>user_message_file_url: \"",
                      "9": {
                        "next": {
                          "next": {
                            "args": "image",
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": {
                                      "next": {
                                        "type": "Message",
                                        "name": "bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTacv0",
                                        "optional": true,
                                        "param_id": "bTaeu0",
                                        "param_name": "chat_file"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "said": "a2Vsdm8tMzE4ODQ=",
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
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "mime_type_text",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.file",
                          "event_id": "bTacv0",
                          "optional": true,
                          "param_id": "bTaeu0",
                          "param_name": "chat_file"
                        },
                        "type": "CurrentWorkflowItem",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "10": "\"<#NANI?>"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "limit_to",
            "is_slidable": false
          },
          "type": "Message",
          "name": "list_from",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTtcm0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTtcm0"
  },
  "type": "DisplayListData",
  "id": "bTtxx0"
};
