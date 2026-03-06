import { chat } from './chat.js';
import { workspace } from './workspace.js';

export const user_types = {
  "chat": chat,
  "workspace": workspace,
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
  "project": {
    "display": "Project",
    "fields": {
      "name_text": {
        "display": "name",
        "value": "text"
      },
      "members_user": {
        "display": "members - deleted",
        "value": "user",
        "deleted": true
      },
      "admins_list_user": {
        "display": "XAdmins",
        "value": "list.user"
      },
      "bunny_folder_text": {
        "display": "bunny_folder",
        "value": "text"
      },
      "members_list_user": {
        "display": "XMembers",
        "value": "list.user"
      },
      "relevant_context_text": {
        "display": "relevant_context",
        "value": "text"
      },
      "signed_url_token_text": {
        "display": "signed_url_token",
        "value": "text"
      },
      "chats_list_custom_chat": {
        "display": "Chats",
        "value": "list.custom.chat"
      },
      "members_custom_workspace": {
        "display": "Members - deleted",
        "value": "custom.workspace",
        "deleted": true
      },
      "unsaved_admins_list_user": {
        "display": "Xunsaved_admins",
        "value": "list.user"
      },
      "uploading_files__boolean": {
        "display": "uploading_files?",
        "value": "boolean"
      },
      "signed_url_token_date_date": {
        "display": "signed_url_token_date",
        "value": "date"
      },
      "admins_list_custom_workspace": {
        "display": "Admins",
        "value": "list.custom.workspace"
      },
      "new_custom_instructions_text": {
        "display": "new_custom_instructions",
        "value": "text"
      },
      "custom_instructions_list_text": {
        "display": "custom_instructions - deleted",
        "value": "list.text",
        "deleted": true
      },
      "members_list_custom_workspace": {
        "display": "Members",
        "value": "list.custom.workspace"
      },
      "organization_custom_organization": {
        "display": "Organization",
        "value": "custom.organization"
      },
      "instruction_document_id_list_text": {
        "display": "Xinstruction_document_id - deleted",
        "value": "list.text",
        "deleted": true
      },
      "unsaved_admins_list_custom_workspace": {
        "display": "unsaved_admins",
        "value": "list.custom.workspace"
      },
      "project_instruction_files_list_custom_project_instruction_file": {
        "display": "Project_files",
        "value": "list.custom.project_instruction_file"
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
            "0": "name_text"
          },
          "view_attachments": false
        }
      },
      "user__project_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "members_list_custom_workspace",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "project member",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "admins_list_custom_workspace",
            "1": "chats_list_custom_chat",
            "2": "admins_list_user",
            "3": "members_list_custom_workspace",
            "4": "members_list_user",
            "5": "bunny_folder_text",
            "6": "organization_custom_organization",
            "7": "signed_url_token_date_date",
            "8": "relevant_context_text",
            "9": "new_custom_instructions_text",
            "10": "name_text",
            "11": "project_instruction_files_list_custom_project_instruction_file",
            "12": "signed_url_token_text",
            "13": "uploading_files__boolean",
            "14": "Created By",
            "15": "unsaved_admins_list_custom_workspace"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "workspace_owner_": {
        "condition": {
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "display": "Workspace owner & admin",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "admins_list_custom_workspace",
            "1": "admins_list_user",
            "2": "bunny_folder_text",
            "3": "members_list_user",
            "4": "members_list_custom_workspace",
            "5": "chats_list_custom_chat",
            "6": "name_text",
            "7": "new_custom_instructions_text",
            "8": "organization_custom_organization",
            "9": "signed_url_token_date_date",
            "10": "unsaved_admins_list_user",
            "11": "unsaved_admins_list_custom_workspace",
            "12": "relevant_context_text",
            "13": "project_instruction_files_list_custom_project_instruction_file",
            "14": "signed_url_token_text",
            "15": "uploading_files__boolean",
            "16": "Created By"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
  "user": {
    "display": "User",
    "fields": {
      "log_text": {
        "display": "LOG",
        "value": "text"
      },
      "name_text": {
        "display": "Xname - deleted",
        "value": "text",
        "deleted": true
      },
      "log_test_text": {
        "display": "LOG_TEST",
        "value": "text"
      },
      "log_regex_text": {
        "display": "LOG REGEX",
        "value": "text"
      },
      "bunny_folder_text": {
        "display": "bunny_folder",
        "value": "text"
      },
      "dark_mode_boolean": {
        "display": "light_mode",
        "value": "boolean",
        "default_val": false
      },
      "log_step_2_list_text": {
        "display": "LOG step 2",
        "value": "list.text"
      },
      "for_pagination_number": {
        "display": "for_message_pagination",
        "value": "number",
        "default_val": 20
      },
      "shortcuts_on__boolean": {
        "display": "shortcuts_on?",
        "value": "boolean",
        "default_val": true
      },
      "signed_url_token_text": {
        "display": "signed_url_token",
        "value": "text"
      },
      "files_uploaded__boolean": {
        "display": "files_uploaded?",
        "value": "boolean"
      },
      "stream_payload_log_text": {
        "display": "stream_payload_log",
        "value": "text"
      },
      "for_memory_update_number": {
        "display": "for_memory_update",
        "value": "number"
      },
      "custom_memory_added__text": {
        "display": "custom_memory_added?",
        "value": "text"
      },
      "time_spent_seconds_number": {
        "display": "TEST_time_spent_seconds - deleted",
        "value": "number",
        "deleted": true
      },
      "show_all_projects__boolean": {
        "display": "show_all_projects? - deleted",
        "value": "boolean",
        "deleted": true,
        "default_val": false
      },
      "signed_url_token_date_date": {
        "display": "signed_url_token_date",
        "value": "date"
      },
      "seen_notifications__boolean": {
        "display": "seen_notifications?",
        "value": "boolean",
        "default_val": true
      },
      "custom_memory_added__boolean": {
        "display": "custom_memory_added? - deleted",
        "value": "boolean",
        "deleted": true
      },
      "invitation_accepted__boolean": {
        "display": "Xinvitation_accepted? - deleted",
        "value": "boolean",
        "deleted": true
      },
      "levon_birthday_field_boolean": {
        "display": "levon_birthday_field - deleted",
        "value": "boolean",
        "deleted": true
      },
      "onboarding_finished__boolean": {
        "display": "onboarding_finished?",
        "value": "boolean"
      },
      "personal_preferences_list_text": {
        "display": "personal_preferences - deleted",
        "value": "list.text",
        "deleted": true
      },
      "personal_instructions_list_text": {
        "display": "Xpersonal_instructions - deleted",
        "value": "list.text",
        "deleted": true
      },
      "user_type_option_user_type__os_": {
        "display": "User_type - deleted",
        "value": "option.user_type__os_",
        "deleted": true,
        "default_val": "user"
      },
      "organization_custom_organization": {
        "display": "XOrganization - deleted",
        "value": "custom.organization",
        "deleted": true
      },
      "workspaces_list_custom_workspace": {
        "display": "workspaces",
        "value": "list.custom.workspace"
      },
      "for_team_memory_pagination_number": {
        "display": "for_memory_pagination",
        "value": "number",
        "default_val": 0
      },
      "current_workspace_custom_workspace": {
        "display": "current_workspace",
        "value": "custom.workspace"
      },
      "for_files_library_pagination_number": {
        "display": "for_files_library_pagination",
        "value": "number",
        "default_val": 0
      },
      "screen_mode_option_screen_mode__os_": {
        "display": "screen_mode - deleted",
        "value": "option.screen_mode__os_",
        "deleted": true,
        "default_val": "dark"
      },
      "default_model_option_llm_models__os_": {
        "display": "Default_model",
        "value": "option.llm_models__os_",
        "default_val": "gpt_5"
      },
      "for_images_library_pagination_number": {
        "display": "for_images_library_pagination",
        "value": "number",
        "default_val": 0
      },
      "current_organization_custom_organization": {
        "display": "current_organization",
        "value": "custom.organization"
      },
      "all_organizations_list_custom_organization": {
        "display": "All_Organizations - deleted",
        "value": "list.custom.organization",
        "deleted": true
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
      "users_own_data": {
        "condition": {
          "next": {
            "args": {
              "type": "CurrentUser"
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "InjectedValue"
        },
        "display": "User's own data",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "bunny_folder_text",
            "1": "current_organization_custom_organization",
            "2": "current_workspace_custom_workspace",
            "3": "files_uploaded__boolean",
            "4": "default_model_option_llm_models__os_",
            "5": "custom_memory_added__text",
            "6": "for_files_library_pagination_number",
            "7": "for_images_library_pagination_number",
            "8": "for_memory_update_number",
            "9": "log_regex_text",
            "10": "log_text",
            "11": "log_test_text",
            "12": "log_step_2_list_text",
            "13": "for_pagination_number",
            "14": "for_team_memory_pagination_number",
            "15": "onboarding_finished__boolean",
            "16": "seen_notifications__boolean",
            "17": "signed_url_token_date_date",
            "18": "workspaces_list_custom_workspace",
            "19": "signed_url_token_text",
            "20": "_social_networks",
            "21": "stream_payload_log_text",
            "22": "email",
            "23": "screen_mode_option_screen_mode__os_",
            "24": "dark_mode_boolean",
            "25": "shortcuts_on__boolean",
            "26": "levon_birthday_field_boolean"
          },
          "auto_binding": false,
          "binding_fields": {
            "0": "show_all_projects__boolean"
          },
          "view_attachments": true
        }
      }
    }
  },
  "organization": {
    "display": "Organization Workspace",
    "fields": {
      "jwt_text": {
        "display": "jwt",
        "value": "text"
      },
      "name_text": {
        "display": "name",
        "value": "text"
      },
      "owner_user": {
        "display": "Owner",
        "value": "user"
      },
      "image_image": {
        "display": "image",
        "value": "image"
      },
      "active_boolean": {
        "display": "active",
        "value": "boolean",
        "default_val": false
      },
      "owner_name_text": {
        "display": "owner_name",
        "value": "text"
      },
      "bunny_folder_text": {
        "display": "bunny_folder",
        "value": "text"
      },
      "completed_boolean": {
        "display": "completed",
        "value": "boolean",
        "default_val": false
      },
      "members_list_user": {
        "display": "Members",
        "value": "list.user"
      },
      "credits_count_number": {
        "display": "credits_count",
        "value": "number"
      },
      "grace_period_boolean": {
        "display": "grace_period",
        "value": "boolean"
      },
      "signed_url_token_text": {
        "display": "signed_url_token",
        "value": "text",
        "deleted": false
      },
      "stripe_payment_id_text": {
        "display": "stripe_payment_id - deleted",
        "value": "text",
        "deleted": true
      },
      "stripe_session_id_text": {
        "display": "stripe_session_id",
        "value": "text"
      },
      "grace_period_start_date": {
        "display": "grace_period_start",
        "value": "date"
      },
      "emails_to_invite_list_text": {
        "display": "emails_to_invite - deleted",
        "value": "list.text",
        "deleted": true
      },
      "signed_url_token_date_date": {
        "display": "signed_url_token_date",
        "value": "date",
        "deleted": false
      },
      "custom_instructions_list_text": {
        "display": "custom_instructions",
        "value": "list.text"
      },
      "string_for_library_update_number": {
        "display": "string_for_library_update",
        "value": "number"
      },
      "subscription_custom_subscription": {
        "display": "Subscription",
        "value": "custom.subscription"
      },
      "invited_emails_incompleted_ws_list_text": {
        "display": "invited_emails_incompleted_ws",
        "value": "list.text"
      },
      "subscription_plan_option_subscription_plan": {
        "display": "Subscription_plan",
        "value": "option.subscription_plan"
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
            "name": "owner_user",
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
            "0": "active_boolean",
            "1": "custom_instructions_list_text",
            "2": "bunny_folder_text",
            "3": "jwt_text",
            "4": "image_image",
            "5": "members_list_user",
            "6": "owner_user",
            "7": "signed_url_token_text",
            "8": "owner_name_text",
            "9": "string_for_library_update_number",
            "10": "name_text",
            "11": "signed_url_token_date_date",
            "12": "grace_period_boolean",
            "13": "stripe_session_id_text",
            "14": "subscription_custom_subscription",
            "15": "subscription_plan_option_subscription_plan",
            "16": "credits_count_number",
            "17": "completed_boolean",
            "18": "invited_emails_incompleted_ws_list_text",
            "19": "grace_period_start_date"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      },
      "member_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "members_list_user",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "display": "member",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "bunny_folder_text",
            "1": "custom_instructions_list_text",
            "2": "image_image",
            "3": "name_text",
            "4": "signed_url_token_text",
            "5": "signed_url_token_date_date",
            "6": "members_list_user",
            "7": "jwt_text",
            "8": "owner_user",
            "9": "string_for_library_update_number",
            "10": "active_boolean",
            "11": "subscription_plan_option_subscription_plan",
            "12": "completed_boolean"
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
  "project_instruction_file": {
    "display": "Project File",
    "fields": {
      "user_user": {
        "display": "User - deleted",
        "value": "user",
        "deleted": true
      },
      "summary_text": {
        "display": "summary - deleted",
        "value": "text",
        "deleted": true
      },
      "mime_type_text": {
        "display": "mime_type",
        "value": "text"
      },
      "deleted__boolean": {
        "display": "deleted?",
        "value": "boolean"
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
        "display": "Project",
        "value": "custom.project"
      },
      "organization_custom_organization": {
        "display": "Organization",
        "value": "custom.organization"
      },
      "memory_level_option_chat_type__os_": {
        "display": "memory_level - deleted",
        "value": "option.chat_type__os_",
        "deleted": true
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
      "project_member_": {
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
        "display": "project member",
        "permissions": {
          "view_all": false,
          "search_for": true,
          "view_fields": {
            "0": "deleted__boolean",
            "1": "mime_type_text",
            "2": "user_user",
            "3": "document_id_text",
            "4": "organization_custom_organization",
            "5": "project_custom_project",
            "6": "file_bunny_url_text",
            "7": "Created By"
          },
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
  "subscription": {
    "display": "Subscription",
    "fields": {
      "annualy_boolean": {
        "display": "annually",
        "value": "boolean"
      },
      "customer_id_text": {
        "display": "customer_id",
        "value": "text"
      },
      "credits_count_number": {
        "display": "credits_count",
        "value": "number"
      },
      "subscription_id_text": {
        "display": "subscription_id",
        "value": "text"
      },
      "stripe_payment_id_text": {
        "display": "stripe_payment_id",
        "value": "text"
      },
      "current_period_end_date": {
        "display": "current_period_end",
        "value": "date",
        "deleted": false
      },
      "current_period_end_text": {
        "display": "current_period_end - deleted",
        "value": "text",
        "deleted": true
      },
      "subscription_item_id_text": {
        "display": "subscription_item_id",
        "value": "text"
      },
      "plan_option_subscription_plan": {
        "display": "Plan",
        "value": "option.subscription_plan"
      },
      "workspace_owner_custom_workspace": {
        "display": "Workspace Owner",
        "value": "custom.workspace"
      },
      "organization_workspace_custom_organization": {
        "display": "Organization Workspace - deleted",
        "value": "custom.organization",
        "deleted": true
      },
      "organization_workspace1_custom_organization": {
        "display": "Organization Workspace",
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
      "workspace_owner_": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
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
            "name": "workspace_owner_custom_workspace",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "display": "workspace_owner",
        "permissions": {
          "view_all": true,
          "search_for": true,
          "auto_binding": false,
          "view_attachments": true
        }
      }
    }
  },
  "variables": {
    "display": "Variables",
    "fields": {
      "master_key_text": {
        "display": "master-key - deleted",
        "value": "text",
        "deleted": true
      },
      "gemimini_pro_web_search_counter_number": {
        "display": "gemimini_pro_web_search_counter",
        "value": "number"
      },
      "gemimini_flash_web_search_counter_number": {
        "display": "gemimini_flash_web_search_counter",
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
  "session_time_spet": {
    "display": "Session Time Spent",
    "fields": {
      "date_date": {
        "display": "date",
        "value": "date"
      },
      "status_text": {
        "display": "status - deleted",
        "value": "text",
        "deleted": true
      },
      "time_spent_seconds_number": {
        "display": "time_spent_seconds",
        "value": "number"
      },
      "workspace_custom_workspace": {
        "display": "workspace - deleted",
        "value": "custom.workspace",
        "deleted": true
      },
      "workspace_user_custom_workspace": {
        "display": "Workspace_user",
        "value": "custom.workspace"
      },
      "organization_workspace_custom_organization": {
        "display": "Organization_workspace - deleted",
        "value": "custom.organization",
        "deleted": true
      }
    },
    "deleted": true
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
  "temp_images": {
    "display": "temp_images",
    "fields": {
      "image_image": {
        "display": "image",
        "value": "image"
      }
    },
    "deleted": true
  },
};
