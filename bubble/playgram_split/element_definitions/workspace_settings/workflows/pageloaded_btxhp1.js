export const PageLoaded_bTxHP1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "workspace_settings",
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "parameter_name": {
                  "entries": {
                    "0": "sub_tab"
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
    },
    "workflow_disabled": false
  },
  "type": "PageLoaded",
  "id": "bTxEn1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": "workspace_settings"
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "general"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTxHQ1",
      "name": "Go to page index"
    }
  }
};
