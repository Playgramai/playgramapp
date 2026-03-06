export const ConditionTrue_bTIkh0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "value": "custom.project",
                "parameter_name": {
                  "entries": {
                    "0": "project"
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
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "value": "custom.chat",
        "parameter_name": {
          "entries": {
            "0": "chat"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "run_when": "every_time",
    "workflow_disabled": false
  },
  "type": "ConditionTrue",
  "id": "bTIkc0",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTcIT"
    },
    "1": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "properties": {
                    "value": "custom.chat",
                    "parameter_name": {
                      "entries": {
                        "0": "chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": true
      },
      "type": "ChangePage",
      "id": "bTJBs"
    }
  }
};
