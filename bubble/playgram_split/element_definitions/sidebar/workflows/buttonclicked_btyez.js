export const ButtonClicked_bTYEz = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_visible",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTNLp0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTIJR0"
  },
  "type": "ButtonClicked",
  "id": "bTYEs",
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
      "id": "bTcJI"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": {
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
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTNLp0"
      },
      "type": "HideElement",
      "id": "bTYFD"
    },
    "2": {
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
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTYEy"
    }
  }
};
