export const user_types_file = {
  "file": {
    "display": "Chat File",
    "fields": {
      "bunny_url_text": {
        "display": "url",
        "value": "text"
      },
      "claude_id_text": {
        "display": "claude_id",
        "value": "text"
      },
      "gemini_id_text": {
        "display": "gemini_uri",
        "value": "text"
      },
      "mime_type_text": {
        "display": "mime_type",
        "value": "text"
      },
      "openai_id_text": {
        "display": "openAI_file_id",
        "value": "text"
      },
      "png_image_text": {
        "display": "png_image",
        "value": "text"
      },
      "message_id_text": {
        "display": "message_id",
        "value": "text"
      },
      "chat_custom_chat": {
        "display": "Chat",
        "value": "custom.chat"
      },
      "file_size_number": {
        "display": "file_size",
        "value": "number"
      },
      "gemini_file_name_text": {
        "display": "gemini_file_name",
        "value": "text"
      },
      "project_custom_project": {
        "display": "Project",
        "value": "custom.project"
      },
      "claude_container_id_text": {
        "display": "claude_container_id - deleted",
        "value": "text",
        "deleted": true
      },
      "weaviate_document_id_text": {
        "display": "weaviate_document_id",
        "value": "text"
      },
      "openai_vector_store_id_text": {
        "display": "openAI_vector_store_id",
        "value": "text"
      },
      "shared_access_chat__boolean": {
        "display": "shared_access_chat?",
        "value": "boolean"
      },
      "upload_job_custom_upload_job": {
        "display": "Upload_job",
        "value": "custom.upload_job"
      },
      "chat_type_option_chat_type__os_": {
        "display": "Chat_type",
        "value": "option.chat_type__os_"
      },
      "claude_delete_scheduled_api_text": {
        "display": "claude_delete_scheduled_api",
        "value": "text"
      },
      "gemini_delete_scheduled_api_text": {
        "display": "gemini_delete_scheduled_api",
        "value": "text"
      },
      "openai_delete_scheduled_api_text": {
        "display": "openAI_delete_scheduled_api",
        "value": "text"
      },
      "organization_custom_organization": {
        "display": "Organization",
        "value": "custom.organization"
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
      "shared_chat_": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "shared_access_chat__boolean",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "shared chat",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "bunny_url_text",
            "1": "chat_custom_chat",
            "2": "chat_type_option_chat_type__os_",
            "3": "shared_access_chat__boolean",
            "4": "organization_custom_organization",
            "5": "project_custom_project",
            "6": "mime_type_text"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "organization_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "next": {
                "args": {
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
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "chat_type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "team chat",
        "permissions": {
          "view_all": true,
          "search_for": true,
          "view_fields": {
            "0": "bunny_url_text",
            "1": "file_size_number",
            "2": "mime_type_text",
            "3": "organization_custom_organization",
            "4": "chat_custom_chat",
            "5": "project_custom_project",
            "6": "gemini_file_name_text",
            "7": "chat_type_option_chat_type__os_",
            "8": "openai_vector_store_id_text",
            "9": "claude_id_text",
            "10": "gemini_id_text",
            "11": "openai_id_text",
            "12": "weaviate_document_id_text"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "project_chat_": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "projects_list_custom_project",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "display": "project chat",
        "permissions": {
          "view_all": true,
          "search_for": true,
          "view_fields": {
            "0": "bunny_url_text"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "personal_chat_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "CurrentUser",
                "is_slidable": false
              },
              "next": {
                "args": {
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
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "chat_type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
        "display": "personal chat",
        "permissions": {
          "view_all": true,
          "search_for": true,
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
};
