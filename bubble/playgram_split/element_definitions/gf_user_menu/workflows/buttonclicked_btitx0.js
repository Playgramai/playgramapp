export const ButtonClicked_bTItX0 = {
  "properties": {
    "element_id": "bTJJX"
  },
  "type": "ButtonClicked",
  "id": "bTJKO",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTJJL"
      },
      "type": "HideElement",
      "id": "bTJKT"
    },
    "1": {
      "properties": {
        "element_id": "bTJJL"
      },
      "type": "ResetGroup",
      "id": "bTJKU"
    },
    "2": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": false,
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
                  "properties": {
                    "action_id": "bTItQ0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTJKV"
    }
  }
};
