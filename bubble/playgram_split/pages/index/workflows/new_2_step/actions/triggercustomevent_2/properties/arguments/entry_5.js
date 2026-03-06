export const entry_5 = {
  "param_id": "bTKsv",
  "arg_value": {
    "next": {
      "next": {
        "properties": {
          "find": {
            "entries": {
              "0": "\\\\"
            },
            "type": "TextExpression"
          },
          "replace": {
            "entries": {
              "0": "\\"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "find_replace",
        "is_slidable": true
      },
      "type": "Message",
      "name": "format_json_encode",
      "is_slidable": false
    },
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "type": "Message",
              "name": "name_text",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.project",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPGR",
              "param_name": "project"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "2": "\\"
        },
        "type": "TextExpression"
      }
    },
    "type": "ArbitraryText"
  }
};
