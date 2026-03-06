export const go_to_page_index_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtgv0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "add_parameters": true,
    "url_parameters": {
      "0": {
        "key": "chat",
        "value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtgv0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "1": {
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
                "action_id": "bTtgv0"
              },
              "type": "PreviousStep",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      }
    },
    "keep_current_page_params": false
  },
  "type": "ChangePage",
  "id": "bTthL0",
  "name": "Go to page index"
};
