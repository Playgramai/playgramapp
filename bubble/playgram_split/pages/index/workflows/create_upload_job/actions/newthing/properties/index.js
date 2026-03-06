export const properties = {
  "initial_values": {
    "0": {
      "key": "chat_custom_chat",
      "value": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGH",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "1": {
      "key": "context_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGI",
              "param_name": "context"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "2": {
      "key": "count_number",
      "value": {
        "next": {
          "type": "Message",
          "name": "count",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "list.text",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTFv",
          "param_name": "file_id"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "3": {
      "key": "custom_instructions_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGN",
              "param_name": "custom_instructions"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "4": {
      "key": "embedding_tokens_number",
      "value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGO",
          "param_name": "embedding_tokens"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "5": {
      "key": "enabled_tools_list_option_llm_tool__os_",
      "value": {
        "properties": {
          "btype_id": "list.option.llm_tool__os_",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGP",
          "param_name": "enabled_tools"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": "set_list"
    },
    "6": {
      "key": "last_messages_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGU",
              "param_name": "last_messages"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "7": {
      "key": "memories_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGV",
              "param_name": "memories"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "1": ""
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "8": {
      "key": "normalization_input_number",
      "value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGa",
          "param_name": "normalization_input"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "9": {
      "key": "normalization_output_number",
      "value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGb",
          "param_name": "normalization_output"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "10": {
      "key": "streaming_model_option_llm_models__os_",
      "value": {
        "properties": {
          "btype_id": "option.llm_models__os_",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGf",
          "param_name": "streaming_model"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "11": {
      "key": "summarization_input_number",
      "value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGg",
          "param_name": "summarization_input"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "12": {
      "key": "summarization_output_number",
      "value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGh",
          "param_name": "summarization_output"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "13": {
      "key": "user_message_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGm",
              "param_name": "user_message"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "14": {
      "key": "workspace_user_custom_workspace",
      "value": {
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGn",
          "param_name": "Workspace_user"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "15": {
      "key": "file_custom_file",
      "value": {
        "properties": {
          "btype_id": "custom.file",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGT",
          "param_name": "file"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "16": {
      "key": "user_message_date_date",
      "value": {
        "properties": {
          "btype_id": "date",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTYTg",
          "param_name": "user_message_date"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "17": {
      "key": "long_term_context_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTiTL2",
              "param_name": "long_term_context"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "18": {
      "key": "project_context_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTiTP2",
              "param_name": "project_context"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "19": {
      "key": "project_instructions_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTiTJ2",
              "param_name": "project_instructions"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "20": {
      "key": "team_instructions_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTiTK2",
              "param_name": "team_instructions"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "21": {
      "key": "user_image_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "image",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTiRx2",
              "param_name": "user_image"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "action": {
        "type": "Empty"
      }
    },
    "22": {
      "key": "web_search_needed_boolean",
      "value": {
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTtNr0",
          "optional": true,
          "param_id": "bTkgi0",
          "param_name": "web_search_needed"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "23": {
      "key": "code_interpreter_needed_boolean",
      "value": {
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTtNr0",
          "optional": true,
          "param_id": "bTkgj0",
          "param_name": "code_interpreter_needed"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "24": {
      "key": "image_gen_needed_boolean",
      "value": {
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTtNr0",
          "optional": true,
          "param_id": "bTpbj2",
          "param_name": "image_gen_needed"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "25": {
      "key": "sort_number",
      "value": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTtwB0",
          "param_name": "sort"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    }
  },
  "thing_type": "custom.upload_job",
};
