export const time_spent_counter = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "in_url": false,
        "btype_id": "custom.workspace",
        "event_id": "bTsaI",
        "optional": false,
        "param_id": "workspace_user",
        "param_name": "workspace_user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "time_spent_counter",
    "parameters": {
      "0": {
        "key": "workspace_user",
        "value": "custom.workspace",
        "in_url": false,
        "is_list": {
          "type": "Empty"
        },
        "optional": false
      },
      "1": {
        "key": "seconds",
        "value": "number",
        "in_url": false,
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "2": {
        "key": "session_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "auth_unecessary": true
  },
  "type": "APIEvent",
  "id": "bTsaI",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTkFb1",
            "param_id": "session_id",
            "param_name": "session_id"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "body_params_date": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "component_to_extract": "date"
                },
                "type": "Message",
                "name": "rounded_down",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_email": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "email",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_project": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "qijafgmamjecqnhlryjy"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "yfwacubqdcixciehbjuj"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_seconds": {
          "entries": {
            "0": {
              "properties": {
                "in_url": false,
                "btype_id": "number",
                "event_id": "bTsaI",
                "optional": true,
                "param_id": "seconds",
                "param_name": "seconds"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_Authorization": {
          "entries": {
            "0": "Bearer ",
            "1": {
              "next": {
                "type": "Message",
                "name": "supabase_jwt_text",
                "is_slidable": false
              },
              "properties": {
                "in_url": false,
                "btype_id": "custom.workspace",
                "event_id": "bTsaI",
                "optional": false,
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "body_params_workspace_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "in_url": false,
                "btype_id": "custom.workspace",
                "event_id": "bTsaI",
                "optional": false,
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_organization_id": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "properties": {
                "in_url": false,
                "btype_id": "custom.workspace",
                "event_id": "bTsaI",
                "optional": false,
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTkBH.bTkgp1",
      "id": "bTsaN"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "log_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_error.status_message",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTsaN"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "append",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_error.body",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTsaN"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTslf0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTkFb1",
            "param_id": "session_id",
            "param_name": "session_id"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_project": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "qijafgmamjecqnhlryjy"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "yfwacubqdcixciehbjuj"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_secconds": {
          "entries": {
            "0": {
              "properties": {
                "in_url": false,
                "btype_id": "number",
                "event_id": "bTsaI",
                "optional": true,
                "param_id": "seconds",
                "param_name": "seconds"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_Authorization": {
          "entries": {
            "0": "Bearer ",
            "1": {
              "next": {
                "type": "Message",
                "name": "supabase_jwt_text",
                "is_slidable": false
              },
              "properties": {
                "in_url": false,
                "btype_id": "custom.workspace",
                "event_id": "bTsaI",
                "optional": false,
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "body_params_session_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTkFb1",
                "param_id": "session_id",
                "param_name": "session_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTkBH.bTkhd1",
      "id": "bTsaO"
    }
  },
};
