export const chat_privacy_role_to_privacy_role = {
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
  },
};
