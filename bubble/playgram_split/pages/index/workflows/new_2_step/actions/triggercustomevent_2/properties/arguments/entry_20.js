export const entry_20 = {
  "param_id": "bTkhX",
  "arg_value": {
    "next": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "true",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='code_interpreter'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "find": {
                "entries": {
                  "0": "\""
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "'"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
          "type": "Message",
          "name": "_api_c2_message.content",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "type": "Message",
      "name": "_api_c2_body.choices",
      "is_slidable": false
    },
    "properties": {
      "action_id": "bTnYp0"
    },
    "type": "PreviousStep",
    "is_slidable": false
  }
};
