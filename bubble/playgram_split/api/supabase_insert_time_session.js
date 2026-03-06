export const supabase_insert_time_session = {
  "properties": {
    "expose": false,
    "wf_name": "insert_time_session_log",
    "wf_folder": "APIEvent",
    "parameters": {
      "0": {
        "key": "workspace_id",
        "value": "custom.workspace",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "organization_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "date",
        "value": "date",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "number",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "session_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "ignore_privacy_rules": false
  },
  "type": "APIEvent",
  "id": "bTkFb1",
  "name": "[supabase] insert_time_session",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_seconds": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "number",
                "event_id": "bTkFb1",
                "param_id": "number",
                "param_name": "number"
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
                "btype_id": "custom.workspace",
                "event_id": "bTkFb1",
                "param_id": "workspace_id",
                "param_name": "workspace_id"
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
                "btype_id": "custom.workspace",
                "event_id": "bTkFb1",
                "param_id": "workspace_id",
                "param_name": "workspace_id"
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
              "properties": {
                "btype_id": "text",
                "event_id": "bTkFb1",
                "param_id": "organization_id",
                "param_name": "organization_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTkBH.bTkgp1",
      "id": "bTkhG1"
    },
    "1": {
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
                "btype_id": "number",
                "event_id": "bTkFb1",
                "param_id": "number",
                "param_name": "number"
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
                "btype_id": "custom.workspace",
                "event_id": "bTkFb1",
                "param_id": "workspace_id",
                "param_name": "workspace_id"
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
      "id": "bTkhx1"
    }
  }
};
