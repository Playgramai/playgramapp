export const user_types_user_to_variables = {
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
};
