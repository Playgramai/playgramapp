export const ConditionTrue_bTtjE0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
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
                "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTtiV0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "regex": {
                                "entries": {
                                  "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.new_image_in_chat_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.new_image_in_chat_"
      },
      "type": "SetCustomState",
      "id": "bTtjF0"
    }
  }
};
