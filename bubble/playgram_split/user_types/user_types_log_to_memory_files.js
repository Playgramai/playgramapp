export const user_types_log_to_memory_files = {
  "log": {
    "display": "Usage_log",
    "fields": {
      "body_text": {
        "display": "raw_main_stream - deleted",
        "value": "text",
        "deleted": true
      },
      "user_user": {
        "display": "User - deleted",
        "value": "user",
        "deleted": true
      },
      "total_usd_number": {
        "display": "total_usd",
        "value": "number"
      },
      "tools_usage_usd_number": {
        "display": "tools_usage_usd",
        "value": "number"
      },
      "speech_to_text_usd_number": {
        "display": "speech_to_text_usd",
        "value": "number"
      },
      "streaming_input_usd_number": {
        "display": "stream_input_usd",
        "value": "number"
      },
      "streaming_output_usd_number": {
        "display": "stream_output_usd",
        "value": "number"
      },
      "speech_to_text_tokens_number": {
        "display": "speech_to_text_seconds",
        "value": "number"
      },
      "embedding_for_pair_usd_number": {
        "display": "embedding_for_pair_usd",
        "value": "number"
      },
      "streaming_input_tokens_number": {
        "display": "stream_input_tokens",
        "value": "number"
      },
      "normalization_input_usd_number": {
        "display": "first_normalization_input_usd",
        "value": "number"
      },
      "stream_chat_title_input_number": {
        "display": "stream_chat_title_input",
        "value": "number"
      },
      "streaming_output_tokens_number": {
        "display": "stream_output_tokens",
        "value": "number"
      },
      "embedding_for_search_usd_number": {
        "display": "embedding_for_first_search_usd",
        "value": "number"
      },
      "normalization_output_usd_number": {
        "display": "first_normalization_output_usd",
        "value": "number"
      },
      "embedding_for_pair_tokens_number": {
        "display": "embedding_for_pair_tokens",
        "value": "number"
      },
      "normalization_input_tokens_number": {
        "display": "first_normalization_input_tokens",
        "value": "number"
      },
      "embedding_for_search_tokens_number": {
        "display": "embedding_for_first_search_tokens",
        "value": "number"
      },
      "normalization_output_tokens_number": {
        "display": "first_normalization_output_tokens",
        "value": "number"
      },
      "remove_duplicates_input_usd_number": {
        "display": "remove_duplicates_input_usd",
        "value": "number"
      },
      "stream_chat_title_input_usd_number": {
        "display": "stream_chat_title_input_usd",
        "value": "number"
      },
      "streaming_chat_title_output_number": {
        "display": "stream_chat_title_output",
        "value": "number"
      },
      "pair_normalization_input_usd_number": {
        "display": "pair_normalization_input_usd",
        "value": "number"
      },
      "remove_duplicates_output_usd_number": {
        "display": "remove_duplicates_output_usd",
        "value": "number"
      },
      "stream_chat_title_output_usd_number": {
        "display": "stream_chat_title_output_usd",
        "value": "number"
      },
      "pair_normalization_output_usd_number": {
        "display": "pair_normalization_output_usd",
        "value": "number"
      },
      "used_tools_list_option_llm_tool__os_": {
        "display": "Used_tools",
        "value": "list.option.llm_tool__os_"
      },
      "remove_duplicates_input_tokens_number": {
        "display": "remove_duplicates_input_tokens",
        "value": "number"
      },
      "pair_normalization_input_tokens_number": {
        "display": "pair_normalization_input_tokens",
        "value": "number"
      },
      "remove_duplicates_output_tokens_number": {
        "display": "remove_duplicates_output_tokens",
        "value": "number"
      },
      "streaming_model_option_llm_models__os_": {
        "display": "Stream_model",
        "value": "option.llm_models__os_"
      },
      "pair_normalization_output_tokens_number": {
        "display": "pair_normalization_output_tokens",
        "value": "number"
      }
    },
    "privacy_role": {
      "everyone": {
        "display": "everyone",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      },
      "no_access_": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "logged_in",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "display": "no access",
        "permissions": {
          "view_all": false,
          "search_for": false,
          "auto_binding": false,
          "view_attachments": false
        }
      }
    }
  },
  "memory_files": {
    "display": "Team/Personal Memory Files",
    "fields": {
      "user_user": {
        "display": "User",
        "value": "user"
      },
      "document_id_text": {
        "display": "document_id",
        "value": "text"
      },
      "file_bunny_url_text": {
        "display": "file_bunny_url",
        "value": "text"
      },
      "project_custom_project": {
        "display": "Project - deleted",
        "value": "custom.project",
        "deleted": true
      },
      "organization_custom_organization": {
        "display": "Organization",
        "value": "custom.organization"
      }
    },
    "deleted": true
  },
};
