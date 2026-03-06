export const PageLoaded_bTydn = {
  "properties": {
    "condition": {
      "next": {
        "args": "subscription",
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
                  "type": "Message",
                  "name": "not_equals",
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
      "properties": {
        "value": "text",
        "parameter_name": {
          "entries": {
            "0": "sub_tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    }
  },
  "type": "PageLoaded",
  "id": "bTydl",
  "actions": {
    "0": {
      "properties": {
        "condition": {
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
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": "workspace_settings"
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "",
                "1": {
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
                  "properties": {
                    "option_set": "option.team_settings_menu__os_",
                    "option_value": "saved_memory"
                  },
                  "type": "OptionValue"
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTydt"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "user"
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
        "element_id": "bTUdV0",
        "add_parameters": false,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": "workspace_settings"
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "",
                "1": {
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
                  "properties": {
                    "option_set": "option.team_settings_menu__os_",
                    "option_value": "saved_memory"
                  },
                  "type": "OptionValue"
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTydy"
    }
  }
};
