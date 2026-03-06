export const InputChanged_bTiKp2 = {
  "properties": {
    "element_id": "bTOWT0"
  },
  "type": "InputChanged",
  "id": "bTiKj2",
  "actions": {
    "0": {
      "properties": {
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
      "id": "bTiLx2",
      "name": "Run javascript - merge lists"
    }
  }
};
