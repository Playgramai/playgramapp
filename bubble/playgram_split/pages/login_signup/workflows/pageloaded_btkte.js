export const PageLoaded_bTKTE = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "args": "login",
              "type": "Message",
              "name": "equals",
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
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "onboarding_finished__boolean",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "properties": {
                  "value": "custom.workspace",
                  "parameter_name": {
                    "entries": {
                      "0": "join_workspace"
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
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "logged_in",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "breakpoint": false
  },
  "type": "PageLoaded",
  "id": "bTKSz",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTKTF"
    }
  }
};
