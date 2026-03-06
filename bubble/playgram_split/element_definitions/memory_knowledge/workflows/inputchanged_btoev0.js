export const InputChanged_bTOeV0 = {
  "properties": {
    "element_id": "bTNnb"
  },
  "type": "InputChanged",
  "id": "bTOeQ0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_team_memory_pagination_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTOeW0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 3,
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "{\"data\":{\"Get\":{\"Messages_v3\":[]}}}",
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "{\"data\":{\"Get\":{\"Documents\":[]}}}",
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTiZX2"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTiZP2"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "greater_or_equal_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "length",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNnb"
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "\nconst text1 = ",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiZP2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ";\nconst text2 = ",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiZX2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": ";\n\nif (typeof window.mergeJsonAndSendToBubble === \"function\") {\n  window.mergeJsonAndSendToBubble(text1, text2);\n} else {\n  console.error(\"mergeJsonAndSendToBubble is not defined\");\n}\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTiZv2",
      "name": "Run javascript - merge lists"
    }
  }
};
