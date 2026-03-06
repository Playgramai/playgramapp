export const ButtonClicked_bTdRV1 = {
  "properties": {
    "element_id": "bTdGV1"
  },
  "type": "ButtonClicked",
  "id": "bTdRT1",
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
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "to_lowercase",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTxHK1"
    }
  }
};
