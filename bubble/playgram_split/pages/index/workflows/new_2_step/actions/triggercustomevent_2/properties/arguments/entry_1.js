export const entry_1 = {
  "param_id": "bTHfi",
  "arg_value": {
    "next": {
      "next": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\"$"
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
              "find": {
                "entries": {
                  "0": "^\""
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
            "formatting_for_true": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
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
                            "name": "bTVBa0",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTnYq0"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "2": ";",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "bTVBb0",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTnYq0"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
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
                    "next": {
                      "type": "Message",
                      "name": "format_json_encode",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "bTVBZ0",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnYq0"
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
        "name": "is_empty",
        "is_slidable": false
      },
      "type": "Message",
      "name": "bTVBZ0",
      "is_slidable": false
    },
    "properties": {
      "action_id": "bTnYq0"
    },
    "type": "PreviousStep",
    "is_slidable": false
  }
};
