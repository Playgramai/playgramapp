export const deleteuploadedfile = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.id",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTcLX"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "url_to_delete": {
      "next": {
        "type": "Message",
        "name": "bTtLu",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtKN"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "DeleteUploadedFile",
  "id": "bTtHn"
};
