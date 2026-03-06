export const ButtonClicked_bTOdN0 = {
  "properties": {
    "element_id": "bTOcj0"
  },
  "type": "ButtonClicked",
  "id": "bTOdI0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "page_number",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNkt"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "greater_than"
            },
            "type": "Message",
            "name": "custom.next_page__1__"
          },
          "properties": {
            "element_id": "bTOcS0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "custom.max_pagination_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTOcS0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus"
            },
            "type": "Message",
            "name": "custom.next_page__1__"
          },
          "properties": {
            "element_id": "bTOcS0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTOcS0",
        "custom_state": "custom.next_page__1__",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "custom.max_pagination_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOcS0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus"
                },
                "type": "Message",
                "name": "custom.items_until_"
              },
              "properties": {
                "element_id": "bTOcS0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.items_until_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTOdO0"
    },
    "1": {
      "properties": {
        "element_id": "bTNkt",
        "page": {
          "next": {
            "next": {
              "args": 1,
              "type": "Message",
              "name": "minus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "page_number",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTNkt"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ListGoToPage",
      "id": "bTigM2"
    },
    "2": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "function scrollToId(id) {\n  var el = document.getElementById(id);\n  if (el) {\n    el.scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\n// \u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u0437\u043e\u0432\u0430:\nscrollToId(\"target\");\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTPAF0"
    }
  }
};
