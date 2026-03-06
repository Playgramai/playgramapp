export const ButtonClicked_bTIJo0 = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "isnt_visible",
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
  "id": "bTIJj0",
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
      "id": "bTcJN"
    },
    "1": {
      "properties": {
        "element_id": "bTNLp0"
      },
      "type": "ShowElement",
      "id": "bTYEn"
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
      "id": "bTIMp"
    }
  }
};
