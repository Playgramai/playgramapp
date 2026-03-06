export const arbitrarytext = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "     `<#NANI?>open_ai_container_id: \"${s.containerId || \"\"}\"`,  \n `<#NANI?>openAi_file_id: \"${s.fileId || \"\"}\"`,\n      `<#NANI?>model: \"",
        "1": {
          "next": {
            "type": "Message",
            "name": "display",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPyv",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "2": "\"`,\n      `<#NANI?>sort: \"",
        "3": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTtkM0",
            "param_name": "sort"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "4": "\"`,\n      `<#NANI?>workspace_id: \"",
        "5": {
          "next": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "6": "\"`,\n      `<#NANI?>tenant_id: \"",
        "7": {
          "next": {
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
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "8": "\"`,\n      `<#NANI?>project_id: \"",
        "9": {
          "next": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPGd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "10": "\"`,\n      `<#NANI?>chat_type: \"",
        "11": {
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
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPGd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "12": "\"`,\n      `<#NANI?>user_name: \"",
        "13": {
          "next": {
            "next": {
              "type": "Message",
              "name": "name_text",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "14": "\"`,\n      `<#NANI?>profile_photo: \"",
        "15": {
          "next": {
            "next": {
              "type": "Message",
              "name": "image_image",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "16": "\"`,\n      `<#NANI?>user_image_url: \"",
        "17": {
          "next": {
            "type": "Message",
            "name": "url",
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
        "18": "\"`,\n      `<#NANI?>file_url: \"",
        "19": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": ""
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
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
        "20": "\"`,\n      `<#NANI?>file_id: \"",
        "21": {
          "next": {
            "type": "Message",
            "name": "_id",
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
        "22": "\"`,\n      `<#NANI?>user_message_date: \"",
        "23": {
          "next": {
            "next": {
              "properties": {
                "decimal_place": 0
              },
              "type": "Message",
              "name": "format_number",
              "is_slidable": true
            },
            "properties": {
              "component_to_extract": "UNIX"
            },
            "type": "Message",
            "name": "extract_from_date",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "date",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTkSH0",
            "param_name": "user_message_date"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "24": "\"`,\n      `<#NANI?>image_path: \"",
        "25": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "team"
                },
                "type": "OneOptionValue",
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
                            "type": "Message",
                            "name": "bunny_folder_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "organization_custom_organization",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.chat",
                          "event_id": "bTnWy0",
                          "optional": false,
                          "param_id": "bTPGd",
                          "param_name": "chat"
                        },
                        "type": "CurrentWorkflowItem",
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
                            "args": {
                              "properties": {
                                "option_set": "option.chat_type__os_",
                                "option_value": "personal"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "properties": {
                                        "option_set": "option.chat_type__os_",
                                        "option_value": "temporary"
                                      },
                                      "type": "OneOptionValue",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "type_option_chat_type__os_",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTnWy0",
                                  "optional": false,
                                  "param_id": "bTPGd",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
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
                                            "type": "Message",
                                            "name": "bunny_folder_text",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "Created By",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.chat",
                                          "event_id": "bTnWy0",
                                          "optional": false,
                                          "param_id": "bTPGd",
                                          "param_name": "chat"
                                        },
                                        "type": "CurrentWorkflowItem",
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
                                            "type": "Message",
                                            "name": "bunny_folder_text",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "project_custom_project",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.chat",
                                          "event_id": "bTnWy0",
                                          "optional": false,
                                          "param_id": "bTPGd",
                                          "param_name": "chat"
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
                              "name": "or_",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "type_option_chat_type__os_",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.chat",
                          "event_id": "bTnWy0",
                          "optional": false,
                          "param_id": "bTPGd",
                          "param_name": "chat"
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
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPGd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "26": "\"`,\n      `<#NANI?>user_message: ",
        "27": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "${"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\${"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "properties": {
              "find": {
                "entries": {
                  "0": "`"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "\\`"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTHfh",
            "param_name": "input"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "28": "`,\n      `<#NANI?>context: \"",
        "29": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "${"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\${"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "properties": {
              "find": {
                "entries": {
                  "0": "`"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "\\`"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTnWy0",
            "optional": true,
            "param_id": "bTVPl",
            "param_name": "context"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "30": "\"`"
      },
      "type": "TextExpression"
    }
  },
  "type": "ArbitraryText"
};
