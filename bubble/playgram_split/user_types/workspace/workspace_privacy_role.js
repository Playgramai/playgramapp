export const workspace_privacy_role = {
  "privacy_role": {
    "admin_": {
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
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
                              "is_slidable": false
                            },
                            "type": "InjectedValue",
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
      "display": "admin",
      "permissions": {
        "view_all": false,
        "search_for": true,
        "view_fields": {
          "0": "image_image",
          "1": "name_text",
          "2": "projects_list_custom_project",
          "3": "user_email_for_search_text",
          "4": "invitation_accepted__boolean",
          "5": "organization_workspace_custom_organization",
          "6": "user_type_option_user_type__os_",
          "7": "user_user",
          "8": "Created By"
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
    },
    "workspace_user_": {
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
          "name": "user_user",
          "is_slidable": false
        },
        "type": "InjectedValue",
        "is_slidable": false
      },
      "display": "user own workspace",
      "permissions": {
        "view_all": false,
        "search_for": true,
        "view_fields": {
          "0": "image_image",
          "1": "name_text",
          "2": "projects_list_custom_project",
          "3": "supabase_jwt_text",
          "4": "user_user",
          "5": "user_email_for_search_text",
          "6": "show_all_projects__boolean",
          "7": "organization_workspace_custom_organization",
          "8": "invitation_accepted__boolean",
          "9": "litellm_key_text",
          "10": "personal_instructions_list_text",
          "11": "sup_jwt_exp_date",
          "12": "user_type_option_user_type__os_",
          "13": "Created By",
          "14": "uploaded_input_file_text",
          "15": "stripe_setup_intent_id_text"
        },
        "auto_binding": false,
        "view_attachments": true
      }
    },
    "workspaces_in_an_organization_": {
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
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "organization_workspace_custom_organization",
          "is_slidable": false
        },
        "type": "InjectedValue",
        "is_slidable": false
      },
      "display": "workspaces in an organization",
      "permissions": {
        "view_all": false,
        "search_for": true,
        "view_fields": {
          "0": "image_image",
          "1": "name_text",
          "2": "user_email_for_search_text",
          "3": "organization_workspace_custom_organization",
          "4": "user_user",
          "5": "Created By"
        },
        "auto_binding": false,
        "view_attachments": true
      }
    }
  },
};
