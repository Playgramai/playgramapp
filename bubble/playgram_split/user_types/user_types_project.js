export const user_types_project = {
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
};
