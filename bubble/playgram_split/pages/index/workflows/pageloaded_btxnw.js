export const PageLoaded_bTxNW = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "workspace_settings",
          "next": {
            "args": {
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "to_lowercase",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    }
  },
  "type": "PageLoaded",
  "id": "bTxNQ",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTxNV"
    }
  }
};
