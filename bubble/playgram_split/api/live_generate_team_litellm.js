export const LIVE_generate_team_litellm = {
  "properties": {
    "expose": false,
    "wf_name": "generate_team_litellm",
    "parameters": {
      "0": {
        "key": "organization_workspace",
        "value": "custom.organization",
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
  "id": "bTnhv0",
  "name": "[LIVE] generate_team_litellm",
  "actions": {
    "0": {
      "properties": {
        "body_params_team_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnhv0",
                "param_id": "organization_workspace",
                "param_name": "organization_workspace"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_team_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTnbL0",
                "param_id": "organization_workspace",
                "param_name": "organization_workspace"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bToSt",
      "id": "bToTQ"
    },
    "1": {
      "properties": {
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_workspace_custom_organization",
                "value": {
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTnhv0",
                    "param_id": "organization_workspace",
                    "param_name": "organization_workspace"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.workspace"
          },
          "type": "Search"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTniD0",
        "type_of_list": "custom.workspace",
        "_wf_param_team_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.team_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bToTQ"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bToTV"
    }
  }
};
