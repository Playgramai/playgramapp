export const deleteuploadedfile = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.response.txt_file",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTtNV0"
                      },
                      "type": "PreviousStep",
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
                "type": "Message",
                "name": "_api_c2_body.response.txt_file",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtNZ0"
              },
              "type": "PreviousStep",
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
        "name": "_api_c2_body.file.name",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtNg0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "url_to_delete": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "_api_c2_body.response.txt_file",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTtNZ0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "_api_c2_body.response.txt_file",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTtNV0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "2": ""
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
        "type": "Message",
        "name": "_api_c2_body.response.txt_file",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtNZ0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "DeleteUploadedFile",
  "id": "bTtNh0"
};
