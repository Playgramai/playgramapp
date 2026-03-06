export const apiconnector2_bthff0_btghp = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_returned_an_error",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bThdu1"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "url_params_store_name": {
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
  "type": "apiconnector2-bTHFF0.bTghP",
  "id": "bTheR1"
};
