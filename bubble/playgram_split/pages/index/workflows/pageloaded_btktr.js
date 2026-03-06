export const PageLoaded_bTKTR = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "properties": {
              "value": "custom.chat",
              "parameter_name": {
                "entries": {
                  "0": "chat"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "not_logged_in",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "workflow_disabled": false
  },
  "type": "PageLoaded",
  "id": "bTUqb0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTKPI"
      },
      "type": "ChangePage",
      "id": "bTUqc0"
    }
  }
};
