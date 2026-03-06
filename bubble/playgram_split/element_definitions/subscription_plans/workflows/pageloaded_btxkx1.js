export const PageLoaded_bTxkx1 = {
  "properties": {
    "condition": {
      "next": {
        "args": "success",
        "next": {
          "args": {
            "next": {
              "args": "onboarding",
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "properties": {
              "parameter_name": {
                "entries": {
                  "0": "mode"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
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
        "parameter_name": {
          "entries": {
            "0": "checkout"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "wf_folder": "PageLoaded"
  },
  "type": "PageLoaded",
  "id": "bTxkr1",
  "actions": {
    "0": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTxnJ1",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "_p_subscription",
                "is_slidable": false
              },
              "properties": {
                "provider": "1568986136566x208317327136522240.ANf",
                "url_params_Session ID": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "stripe_session_id_text",
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
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetDataFromAPI",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          }
        },
        "custom_event": "bTxlF1"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxnD"
    }
  }
};
