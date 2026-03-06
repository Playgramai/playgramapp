export const LIVE_generate_user_litellm = {
  "properties": {
    "expose": false,
    "wf_name": "generate_user_litellm_live",
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
        "key": "team_id",
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
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTniD0",
  "name": "[LIVE] generate_user_litellm",
  "actions": {
    "0": {
      "properties": {
        "body_params_team_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTniD0",
                "param_id": "team_id",
                "param_name": "team_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTnbL0",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_key_alias": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTnbL0",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bToSg",
      "id": "bToTX"
    },
    "1": {
      "properties": {
        "body_params_team_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTniD0",
                "param_id": "team_id",
                "param_name": "team_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.user_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bToTX"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_key_alias": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.user_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bToTX"
              },
              "type": "PreviousStep",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bToSa",
      "id": "bToTc"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "litellm_key_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.key",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bToTc"
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
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTniD0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTniJ0"
    }
  }
};
