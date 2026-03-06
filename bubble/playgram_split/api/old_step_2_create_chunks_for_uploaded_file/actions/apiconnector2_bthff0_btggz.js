export const apiconnector2_bthff0_btggz = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.name",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTgiN0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "body_params_store_name": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.name",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTghh0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTggz",
  "id": "bTgiS0"
};
