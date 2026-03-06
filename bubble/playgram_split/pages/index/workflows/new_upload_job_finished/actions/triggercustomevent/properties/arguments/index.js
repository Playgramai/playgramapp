import { entry_17 } from './entry_17/index.js';

export const arguments = {
  "0": {
    "param_id": "bTHfh",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "user_message_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "1": {
    "param_id": "bTHfi",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "memories_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "2": {
    "param_id": "bTHfj",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "last_messages_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "3": {
    "param_id": "bTIcB0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "custom_instructions_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "4": {
    "param_id": "bTKsr",
    "arg_value": {
      "next": {
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
        "type": "Message",
        "name": "chat_custom_chat",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "5": {
    "param_id": "bTKsv",
    "arg_value": {
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
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "project_custom_project",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "chat_custom_chat",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.upload_job",
                "event_id": "bTnXL0",
                "optional": false,
                "param_id": "bTTHn",
                "param_name": "upload_job"
              },
              "type": "CurrentWorkflowItem",
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
  "6": {
    "param_id": "bTPGd",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "chat_custom_chat",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "7": {
    "param_id": "bTPGl0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "enabled_tools_list_option_llm_tool__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "8": {
    "param_id": "bTPyv",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "streaming_model_option_llm_models__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "9": {
    "param_id": "bTQSV0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "file_custom_file",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "10": {
    "param_id": "bTQSg0",
    "arg_value": {
      "next": {
        "next": {
          "type": "Message",
          "name": "organization_workspace_custom_organization",
          "is_slidable": false
        },
        "type": "Message",
        "name": "workspace_user_custom_workspace",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "11": {
    "param_id": "bTVPl",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "context_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "12": {
    "param_id": "bTcNt",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "user_image_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "13": {
    "param_id": "bTdyy",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "project_instructions_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "14": {
    "param_id": "bTdyz",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "team_instructions_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "15": {
    "param_id": "bTdzb",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "long_term_context_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "16": {
    "param_id": "bTfHd0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "project_context_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "17": entry_17,
  "18": {
    "param_id": "bTkSH0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "user_message_date_date",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "19": {
    "param_id": "bTkhT",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "web_search_needed_boolean",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "20": {
    "param_id": "bTkhX",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "code_interpreter_needed_boolean",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "21": {
    "param_id": "bTlhH",
    "arg_value": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "jwt_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "organization_workspace_custom_organization",
          "is_slidable": false
        },
        "type": "Message",
        "name": "workspace_user_custom_workspace",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "22": {
    "param_id": "bTpbc1",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "image_gen_needed_boolean",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "23": {
    "param_id": "bTtkM0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "sort_number",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.upload_job",
        "event_id": "bTnXL0",
        "optional": false,
        "param_id": "bTTHn",
        "param_name": "upload_job"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
};
