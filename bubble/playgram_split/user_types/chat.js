export const chat = {
  "display": "Chat",
  "fields": {
    "title_text": {
      "display": "title",
      "value": "text"
    },
    "new_message_text": {
      "display": "new_message - deleted",
      "value": "text",
      "deleted": true
    },
    "archived__boolean": {
      "display": "archived?",
      "value": "boolean"
    },
    "need_reset_boolean": {
      "display": "need_reset",
      "value": "boolean"
    },
    "trigger_reset_text": {
      "display": "trigger_reset - deleted",
      "value": "text",
      "deleted": true
    },
    "file_name_temp_text": {
      "display": "file_name_for_reset - deleted",
      "value": "text",
      "deleted": true
    },
    "share_access_boolean": {
      "display": "share_access",
      "value": "boolean"
    },
    "delete_file_wf_id_text": {
      "display": "delete_file_wf_id",
      "value": "text"
    },
    "files_list_custom_file": {
      "display": "Files",
      "value": "list.custom.file"
    },
    "project_custom_project": {
      "display": "Project",
      "value": "custom.project"
    },
    "uploaded_temp_file_text": {
      "display": "uploaded_input_file - deleted",
      "value": "text",
      "deleted": true
    },
    "string_for_update_number": {
      "display": "string_for_update",
      "value": "number"
    },
    "uploaded_input_file_file": {
      "display": "uploaded_input_file",
      "value": "file"
    },
    "scheduled_delete_api_text": {
      "display": "scheduled_delete_api",
      "value": "text"
    },
    "type_option_chat_type__os_": {
      "display": "Type",
      "value": "option.chat_type__os_"
    },
    "additional_context_list_text": {
      "display": "additional_context",
      "value": "list.text"
    },
    "claude_last_container_id_text": {
      "display": "claude_last_container_id",
      "value": "text"
    },
    "context_message_ids_list_text": {
      "display": "context_message_ids",
      "value": "list.text"
    },
    "custom_instructions_list_text": {
      "display": "custom_instructions",
      "value": "list.text"
    },
    "for_message_pagination_number": {
      "display": "for_message_pagination - deleted",
      "value": "number",
      "deleted": true
    },
    "openai_last_container_id_text": {
      "display": "openAI_last_container_id",
      "value": "text"
    },
    "claude_last_container_date_date": {
      "display": "claude_last_container_date",
      "value": "date"
    },
    "openai_last_container_date_date": {
      "display": "openAI_last_container_date",
      "value": "date"
    },
    "llm_model_option_llm_models__os_": {
      "display": "Llm_model",
      "value": "option.llm_models__os_",
      "default_val": "chatgpt_4_1"
    },
    "organization_custom_organization": {
      "display": "Organization",
      "value": "custom.organization"
    },
    "enabled_tools_list_option_llm_tool__os_": {
      "display": "enabled_tools",
      "value": "list.option.llm_tool__os_"
    }
  },
  "privacy_role": {
    "everyone": {
      "display": "everyone",
      "permissions": {
        "view_all": false,
        "search_for": false,
        "auto_binding": false,
        "binding_fields": {
          "0": "title_text",
          "1": "share_access_boolean"
        },
        "view_attachments": false
      }
    },
    "team_chat_": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "InjectedValue",
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
                    "name": "type_option_chat_type__os_",
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
      "display": "team chat",
      "permissions": {
        "view_all": true,
        "search_for": true,
        "auto_binding": true,
        "binding_fields": {
          "0": "share_access_boolean",
          "1": "title_text"
        },
        "view_attachments": true
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
          "name": "share_access_boolean",
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
          "0": "share_access_boolean",
          "1": "type_option_chat_type__os_",
          "2": "files_list_custom_file",
          "3": "project_custom_project",
          "4": "string_for_update_number",
          "5": "llm_model_option_llm_models__os_",
          "6": "title_text",
          "7": "Created Date",
          "8": "organization_custom_organization"
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
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.chat_type__os_",
                            "option_value": "project"
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
                    "type": "InjectedValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
      "display": "user: project chats",
      "permissions": {
        "view_all": true,
        "search_for": true,
        "auto_binding": true,
        "binding_fields": {
          "0": "title_text"
        },
        "view_attachments": true
      }
    },
    "personal_chat_": {
      "condition": {
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
                "type": "InjectedValue",
                "is_slidable": false
              },
              "next": {
                "args": {
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
                "next": {
                  "args": {
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
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
        "type": "InjectedValue",
        "is_slidable": false
      },
      "display": "personal & temporary chat",
      "permissions": {
        "view_all": true,
        "search_for": true,
        "auto_binding": true,
        "binding_fields": {
          "0": "title_text",
          "1": "share_access_boolean"
        },
        "view_attachments": true
      }
    },
    "admin_and_owner__project_chats_": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_type__os_",
                  "option_value": "owner"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.user_type__os_",
                            "option_value": "admin"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
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
                            "option_value": "project"
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
                    "type": "InjectedValue",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
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
            "name": "user_type_option_user_type__os_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "display": "admin and owner: project chats",
      "permissions": {
        "view_all": true,
        "search_for": true,
        "auto_binding": true,
        "binding_fields": {
          "0": "share_access_boolean",
          "1": "title_text"
        },
        "view_attachments": true
      }
    }
  }
};
