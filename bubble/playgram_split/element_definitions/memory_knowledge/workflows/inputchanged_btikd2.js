export const InputChanged_bTiKd2 = {
  "properties": {
    "element_id": "bTOUC0"
  },
  "type": "InputChanged",
  "id": "bTiKb2",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 3,
                "type": "Message",
                "name": "less_than",
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
          "type": "GetElement",
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
                "element_id": "bTiIq2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
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
                "element_id": "bTiIw2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "4": ";\n\nif (typeof window.mergeJsonAndSendToBubble === \"function\") {\n  window.mergeJsonAndSendToBubble(text1, text2);\n} else {\n  console.error(\"mergeJsonAndSendToBubble is not defined\");\n}\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTiMC2",
      "name": "Run javascript - merge lists"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 3,
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
          "type": "GetElement",
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
                "element_id": "bTiZX2"
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
                "element_id": "bTiZP2"
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
      "id": "bTjrG0",
      "name": "Run javascript - merge lists"
    }
  }
};
