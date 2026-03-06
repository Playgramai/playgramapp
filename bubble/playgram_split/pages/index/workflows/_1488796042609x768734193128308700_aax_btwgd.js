export const _1488796042609x768734193128308700_AAX_bTwGd = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "escape",
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_ACI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUhc0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_AAV",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTuQJ1"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "element_id": "bTuQJ1",
    "wf_folder": "bTupd1"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTwGS",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "\n  const fg = document.getElementById('fgCanvas');\n    fg.style.visibility = 'hidden';\n \n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwGX"
    },
    "1": {
      "properties": {
        "element_id": "bTUdV0",
        "custom_state": "custom.message_for_rte_",
        "custom_states_values": {
          "0": {
            "value": {
              "type": "Empty"
            },
            "custom_state": "custom.text_for_rte_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTwGY"
    },
    "2": {
      "properties": {
        "element_id": "bTUmD0"
      },
      "type": "1580238841425x582072028873097200-ABA",
      "id": "bTwGZ"
    }
  }
};
