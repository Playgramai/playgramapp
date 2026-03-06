export const deleteuploadedfile = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTghb0",
        "optional": true,
        "param_id": "file_from_memory_knowledge",
        "param_name": "file_from_memory_knowledge"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "url_to_delete": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTghb0",
        "optional": true,
        "param_id": "file_from_memory_knowledge",
        "param_name": "file_from_memory_knowledge"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "DeleteUploadedFile",
  "id": "bTjvB0"
};
