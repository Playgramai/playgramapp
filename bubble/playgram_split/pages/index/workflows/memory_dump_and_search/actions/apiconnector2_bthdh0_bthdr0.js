export const apiconnector2_bthdh0_bthdr0 = {
  "properties": {
    "body_params_text": {
      "entries": {
        "0": {
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
                    "next": {
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<='normalized'\\s*:\\s*')[^']+"
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
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTVAf0",
                    "optional": false,
                    "param_id": "bTVAq0",
                    "param_name": "normalization"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHDh0.bTHDr0",
  "id": "bTVBU0"
};
