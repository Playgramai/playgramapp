export const currentworkflowitem = {
  "next": {
    "next": {
      "args": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "image",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTcNt",
                    "param_name": "user_image"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=file_id:)[^\\s}]+"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTUoZ0",
          "optional": true,
          "param_id": "bTHfj",
          "param_name": "last_messages"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "next": {
        "args": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 30,
                  "type": "Message",
                  "name": "plus_days",
                  "is_slidable": false
                },
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "claude_last_container_date_date",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPGd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "next": {
          "properties": {
            "formatting_for_true": {
              "entries": {
                "0": "container: \"",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "claude_last_container_id_text",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTnWy0",
                    "optional": false,
                    "param_id": "bTPGd",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "\","
              },
              "type": "TextExpression"
            },
            "formatting_for_false": {
              "entries": {
                "0": " "
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "format_boolean",
          "is_slidable": true
        },
        "type": "Message",
        "name": "and_",
        "is_slidable": false
      },
      "type": "Message",
      "name": "or_",
      "is_slidable": false
    },
    "type": "Message",
    "name": "is_not_empty",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "custom.file",
    "event_id": "bTnWy0",
    "optional": true,
    "param_id": "bTQSV0",
    "param_name": "file"
  },
  "type": "CurrentWorkflowItem",
  "is_slidable": false
};
