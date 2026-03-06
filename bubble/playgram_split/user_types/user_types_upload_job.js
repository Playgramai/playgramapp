export const user_types_upload_job = {
  "upload_job": {
    "display": "Upload Job",
    "fields": {
      "sort_number": {
        "display": "sort",
        "value": "number"
      },
      "context_text": {
        "display": "context",
        "value": "text"
      },
      "count_number": {
        "display": "count",
        "value": "number"
      },
      "memories_text": {
        "display": "memories",
        "value": "text"
      },
      "user_image_text": {
        "display": "user_image",
        "value": "text"
      },
      "chat_custom_chat": {
        "display": "Chat",
        "value": "custom.chat"
      },
      "file_custom_file": {
        "display": "File",
        "value": "custom.file",
        "deleted": false
      },
      "new_message_text": {
        "display": "Xnew_message",
        "value": "text"
      },
      "message_uuid_text": {
        "display": "message_uuid",
        "value": "text"
      },
      "user_message_text": {
        "display": "user_message",
        "value": "text"
      },
      "last_messages_text": {
        "display": "last_messages",
        "value": "text"
      },
      "total_count_number": {
        "display": "total_count - deleted",
        "value": "number",
        "deleted": true
      },
      "attached_files_text": {
        "display": "Xattached_files",
        "value": "text"
      },
      "project_context_text": {
        "display": "project_context",
        "value": "text"
      },
      "long_term_context_text": {
        "display": "long_term_context",
        "value": "text"
      },
      "team_instructions_text": {
        "display": "team_instructions",
        "value": "text"
      },
      "user_message_date_date": {
        "display": "user_message_date",
        "value": "date"
      },
      "embedding_tokens_number": {
        "display": "embedding_tokens",
        "value": "number"
      },
      "user_message_date1_date": {
        "display": "user_message_date_copy - deleted",
        "value": "date",
        "deleted": true
      },
      "custom_instructions_text": {
        "display": "custom_instructions",
        "value": "text"
      },
      "image_gen_needed_boolean": {
        "display": "image_gen_needed",
        "value": "boolean"
      },
      "project_instructions_text": {
        "display": "project_instructions",
        "value": "text"
      },
      "web_search_needed_boolean": {
        "display": "web_search_needed",
        "value": "boolean"
      },
      "normalization_input_number": {
        "display": "normalization_input",
        "value": "number"
      },
      "summarization_input_number": {
        "display": "summarization_input",
        "value": "number"
      },
      "normalization_output_number": {
        "display": "normalization_output",
        "value": "number"
      },
      "summarization_output_number": {
        "display": "summarization_output",
        "value": "number"
      },
      "code_interpreter_needed_boolean": {
        "display": "code_interpreter_needed",
        "value": "boolean"
      },
      "workspace_user_custom_workspace": {
        "display": "Workspace_user",
        "value": "custom.workspace"
      },
      "streaming_model_option_llm_models__os_": {
        "display": "Streaming_model",
        "value": "option.llm_models__os_"
      },
      "enabled_tools_list_option_llm_tool__os_": {
        "display": "Enabled_tools",
        "value": "list.option.llm_tool__os_"
      }
    },
    "privacy_role": {
      "owner_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "Created By",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "owner",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "web_search_needed_boolean",
            "1": "user_image_text",
            "2": "summarization_input_number",
            "3": "project_context_text",
            "4": "new_message_text",
            "5": "long_term_context_text",
            "6": "file_custom_file",
            "7": "custom_instructions_text",
            "8": "code_interpreter_needed_boolean",
            "9": "chat_custom_chat",
            "10": "count_number",
            "11": "enabled_tools_list_option_llm_tool__os_",
            "12": "last_messages_text",
            "13": "message_uuid_text",
            "14": "normalization_output_number",
            "15": "streaming_model_option_llm_models__os_",
            "16": "team_instructions_text",
            "17": "user_message_text",
            "18": "workspace_user_custom_workspace",
            "19": "user_message_date_date",
            "20": "summarization_output_number",
            "21": "project_instructions_text",
            "22": "normalization_input_number",
            "23": "memories_text",
            "24": "image_gen_needed_boolean",
            "25": "embedding_tokens_number",
            "26": "context_text",
            "27": "attached_files_text",
            "28": "Created By"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "everyone": {
        "display": "everyone",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      }
    }
  },
};
