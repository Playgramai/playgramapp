export const PageLoaded_bTPrl = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.onboarding_step_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKPI"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "not_logged_in",
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
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_empty",
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
    "breakpoint": false
  },
  "type": "PageLoaded",
  "id": "bTPrg",
  "actions": {
    "0": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "login"
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": true
      },
      "type": "ChangePage",
      "id": "bTPrm"
    }
  }
};
