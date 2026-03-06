export const supabase_generate_jwt = {
  "properties": {
    "expose": false,
    "wf_name": "generate_jwt",
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
      }
    }
  },
  "type": "APIEvent",
  "id": "bTkDq",
  "name": "[supabase] generate_jwt",
  "actions": {
    "0": {
      "properties": {
        "AWJ": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "HpQBTO0MuiuLwHbvShMoVObfaZSssdQtCf36z1X6+CU4eWArqiY8n2NsA0SqF5Jingo8TjjM0GcKybYrR5jaNw=="
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "brucwsK/fj6B9n25Q+gJRpuw0ff/8TyB7aeLdEfhO+ZP0Raob7yDqGzMjeeMAxuwV0rgjxHnogNjwZh7I8NFbQ=="
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AXY": {
          "entries": {
            "0": "authenticated"
          },
          "type": "TextExpression"
        },
        "AXZ": {
          "entries": {
            "0": "authenticated"
          },
          "type": "TextExpression"
        },
        "AXb": {
          "entries": {
            "1": ""
          },
          "type": "TextExpression"
        },
        "AXc": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "user_email_for_search_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTkDq",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AXd": {
          "entries": {
            "0": "{\n    \"role\":\"authenticated\",\n    \"organization_id\": \"",
            "1": {
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
                "event_id": "bTkDq",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": "\",\n    \"workspace_id\": \"",
            "3": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTkDq",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "4": "\",\n    \"app_role\": \"",
            "5": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "user_type_option_user_type__os_",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTkDq",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "6": "\"\n}"
          },
          "type": "TextExpression"
        },
        "AYV": {
          "entries": {
            "0": "bubble"
          },
          "type": "TextExpression"
        },
        "AYa": false
      },
      "type": "1687446439843x865924681433350100-AWI",
      "id": "bTkDw"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "supabase_jwt_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "jwt",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTkDw"
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
          },
          "1": {
            "key": "sup_jwt_exp_date",
            "value": {
              "next": {
                "args": 58,
                "type": "Message",
                "name": "plus_minutes",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTkDq",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTkET"
    }
  }
};
