export const terminateworkflow = {
  "properties": {
    "return_values": {
      "0": {
        "return_id": "bTjCr",
        "return_value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.file.uri",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTjCm"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "1": {
        "return_id": "bTjCs",
        "return_value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "convert_to_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=Current size is )\\d+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_error.body",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTjCb"
          },
          "type": "PreviousStep",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "2": {
        "return_id": "bTjCt",
        "return_value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.file.name",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTjCm"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      }
    }
  },
  "type": "TerminateWorkflow",
  "id": "bTjCx"
};
