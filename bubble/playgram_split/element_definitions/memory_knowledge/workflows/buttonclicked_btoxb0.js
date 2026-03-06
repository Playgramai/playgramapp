export const ButtonClicked_bTOXb0 = {
  "properties": {
    "element_id": "bTOTw0"
  },
  "type": "ButtonClicked",
  "id": "bTOXZ0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTchB"
      },
      "type": "ResetGroup",
      "id": "bTOXf0"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "function scrollToId(id) {\n  var el = document.getElementById(id);\n  if (el) {\n    el.scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\n// \u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u0437\u043e\u0432\u0430:\nscrollToId(\"scrollTo\");\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTPAM0"
    },
    "2": {
      "properties": {
        "AAD": {
          "entries": {
            "0": "addMemoryInput"
          },
          "type": "TextExpression"
        },
        "AAG": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTNnb"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1622299806680x572142632265580540-AAC",
      "id": "bTOXm0"
    },
    "3": {
      "properties": {
        "element_id": "bTNnZ"
      },
      "type": "ResetGroup",
      "id": "bTOXr0"
    }
  }
};
