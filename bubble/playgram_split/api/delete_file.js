export const delete_file = {
  "properties": {
    "expose": false,
    "wf_name": "delete_file",
    "parameters": {
      "0": {
        "key": "file",
        "value": "file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIEvent",
  "id": "bTSsV0",
  "actions": {
    "0": {
      "properties": {
        "url_to_delete": {
          "properties": {
            "btype_id": "file",
            "event_id": "bTSsV0",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTSsb0"
    }
  }
};
