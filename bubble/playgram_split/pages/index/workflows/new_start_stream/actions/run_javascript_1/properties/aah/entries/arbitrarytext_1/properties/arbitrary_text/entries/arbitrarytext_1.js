export const arbitrarytext_1 = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "",
        "1": {
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
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": ", {type: \"container_upload\", file_id: \"",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "claude_id_text",
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
                      },
                      "2": "\"}"
                    },
                    "type": "TextExpression",
                    "said": "a2Vsdm8tMzE4ODQ="
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
              "name": "and_",
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
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "ArbitraryText"
};
