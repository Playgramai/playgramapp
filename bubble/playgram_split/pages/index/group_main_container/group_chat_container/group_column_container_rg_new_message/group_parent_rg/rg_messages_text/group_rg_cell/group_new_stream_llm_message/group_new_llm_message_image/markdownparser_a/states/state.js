export const state = {
  "condition": {
    "next": {
      "args": {
        "next": {
          "next": {
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtcm0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "next": {
        "args": {
          "next": {
            "next": {
              "args": 47,
              "next": {
                "args": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{session_id: \"",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUiZ0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "2": "\""
                      },
                      "type": "TextExpression",
                      "said": "a2Vsdm8tMzE4ODQ="
                    }
                  },
                  "type": "ArbitraryText"
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "truncated",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "type": "Message",
        "name": "and_",
        "is_slidable": false
      },
      "type": "Message",
      "name": "equals",
      "is_slidable": false
    },
    "type": "CurrentCellsIndex",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "properties": {
    "AAE": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "\\[\\s*(?<text>[^\\]]+)\\s*\\]\\(sandbox:/mnt/data/(?<link>[^)]+)\\)"
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
                        "0": "code_interpreter_required"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "State"
};
