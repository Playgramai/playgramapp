export const properties = {
  "arguments": {
    "0": {
      "param_id": "bTHVN0",
      "arg_value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTPHm0",
          "param_name": "new_message"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "1": {
      "param_id": "bTMEJ0",
      "arg_value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPHl0",
          "param_name": "last_messages"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "2": {
      "param_id": "bTMET0",
      "arg_value": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "personal_instructions_list_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "3": {
      "param_id": "bTPGG",
      "arg_value": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPGF",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "4": {
      "param_id": "bTPGR",
      "arg_value": {
        "properties": {
          "btype_id": "custom.project",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPGH",
          "param_name": "project"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "5": {
      "param_id": "bTPGk0",
      "arg_value": {
        "properties": {
          "btype_id": "list.option.llm_tool__os_",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTQFq0",
          "param_name": "enabled_tools"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "6": {
      "param_id": "bTPHg0",
      "arg_value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPHh0",
          "param_name": "context"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "7": {
      "param_id": "bTPxP0",
      "arg_value": {
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPxH0",
          "param_name": "workspace_user"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "8": {
      "param_id": "bTQFB0",
      "arg_value": {
        "properties": {
          "btype_id": "option.llm_models__os_",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTQFp0",
          "param_name": "streaming_model"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "9": {
      "param_id": "bTQSa0",
      "arg_value": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "btype_id": "custom.file",
                  "event_id": "bTnZH0",
                  "optional": true,
                  "param_id": "bTaet0",
                  "param_name": "chat_file_regenerate"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "convert_to_list",
            "is_slidable": false
          },
          "type": "Message",
          "name": "bTQSO0",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnZP0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "10": {
      "param_id": "bTYTf",
      "arg_value": {
        "properties": {
          "btype_id": "date",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTYTb",
          "param_name": "user_message_date"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "11": {
      "param_id": "bTaeX0",
      "arg_value": {
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTaeV0",
          "param_name": "regenerate"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "12": {
      "param_id": "bTafX0",
      "arg_value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTagJ0",
          "param_name": "message_id_regenerate"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "13": {
      "param_id": "bTagV0",
      "arg_value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTagT0",
          "param_name": "message_date_text_regenerate"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "14": {
      "param_id": "bTcNo",
      "arg_value": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "bTcNn",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTnZP0"
                },
                "type": "PreviousStep",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "2": "",
              "3": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTnZH0",
                  "optional": true,
                  "param_id": "bTcZD",
                  "param_name": "regenerate_user_image_url"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "4": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      }
    },
    "15": {
      "param_id": "bTeBI",
      "arg_value": {
        "next": {
          "next": {
            "type": "Message",
            "name": "new_custom_instructions_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "project_custom_project",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTPGF",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      }
    },
    "16": {
      "param_id": "bTeBJ",
      "arg_value": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "custom_instructions_list_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "17": {
      "param_id": "bTeBN",
      "arg_value": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "properties": {
                      "content": {
                        "entries": {
                          "0": "{",
                          "1": {
                            "type": "InjectedValue",
                            "is_slidable": false
                          },
                          "2": "}"
                        },
                        "type": "TextExpression"
                      },
                      "delimiter": {
                        "entries": {
                          "0": ",\n"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_as_text",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "additional_context_list_text",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.chat",
                  "event_id": "bTnZH0",
                  "optional": false,
                  "param_id": "bTPGF",
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
        "type": "ArbitraryText",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "18": {
      "param_id": "bTfHc0",
      "arg_value": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "relevant_context_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "project_custom_project",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.chat",
                  "event_id": "bTnZH0",
                  "optional": false,
                  "param_id": "bTPGF",
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
        "type": "ArbitraryText",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "19": {
      "param_id": "bTtkL0",
      "arg_value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTnZH0",
          "optional": false,
          "param_id": "bTtkB0",
          "param_name": "sort"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "20": {
      "param_id": "bTwEB0",
      "arg_value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTnZH0",
          "optional": true,
          "param_id": "bTwEC0",
          "param_name": "file_path"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    }
  },
  "breakpoint": false,
  "custom_event": "bTnYl0",
};
