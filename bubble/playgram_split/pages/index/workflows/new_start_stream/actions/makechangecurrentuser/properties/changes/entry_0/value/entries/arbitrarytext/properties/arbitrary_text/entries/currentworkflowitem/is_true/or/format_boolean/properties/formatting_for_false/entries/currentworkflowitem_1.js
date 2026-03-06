export const currentworkflowitem_1 = {
  "next": {
    "next": {
      "properties": {
        "formatting_for_true": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "null"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": "generated image"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "properties": {
                    "find": {
                      "entries": {
                        "0": "parts: [,{ text:"
                      },
                      "type": "TextExpression"
                    },
                    "replace": {
                      "entries": {
                        "0": "parts: [{ text:"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\\{\\s*inline_data\\s*:\\s*\\{\\s*mime_type\\s*:\\s*\"image\\/[^\"]*\"\\s*,\\s*data\\s*:\\s*\"[^\"]*\"\\s*\\}\\s*\\}"
                    },
                    "type": "TextExpression"
                  },
                  "use_regex": true
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTnWy0",
                "optional": true,
                "param_id": "bTHfj",
                "param_name": "last_messages"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": ","
          },
          "type": "TextExpression"
        },
        "formatting_for_false": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "format_boolean",
      "is_slidable": true
    },
    "type": "Message",
    "name": "is_not_empty",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "text",
    "event_id": "bTnWy0",
    "optional": true,
    "param_id": "bTHfj",
    "param_name": "last_messages"
  },
  "type": "CurrentWorkflowItem",
  "is_slidable": false
};
