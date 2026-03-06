export const apiconnector2_bthff0_btghf = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTgiX0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "url_params_document_name": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.name",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTgiN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTghF",
  "id": "bThdu1"
};
