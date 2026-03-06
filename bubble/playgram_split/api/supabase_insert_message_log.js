export const supabase_insert_message_log = {
  "properties": {
    "expose": false,
    "wf_name": "insert_message_log",
    "parameters": {
      "0": {
        "key": "workspace_user",
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
        "key": "model",
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
    }
  },
  "type": "APIEvent",
  "id": "bTndV0",
  "name": "[supabase] insert_message_log",
  "actions": {
    "0": {
      "properties": {
        "body_params_model": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTndV0",
                "param_id": "model",
                "param_name": "model"
              },
              "type": "APIEventParameter",
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
        "headers_Authorization": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
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
                        "event_id": "bTndV0",
                        "param_id": "workspace_user",
                        "param_name": "workspace_user"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
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
                "event_id": "bTndV0",
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
                "btype_id": "custom.workspace",
                "event_id": "bTndV0",
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
      "type": "apiconnector2-bTkBH.bTklC1",
      "id": "bTndb0"
    }
  }
};
