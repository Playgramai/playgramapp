export const deleteuploadedfile = {
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
        "action_id": "bTrTt0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "url_to_delete": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTcKR",
        "optional": false,
        "param_id": "bTQRY0",
        "param_name": "file_link"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "DeleteUploadedFile",
  "id": "bTcKo"
};
