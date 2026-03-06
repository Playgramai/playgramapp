export const _1488796042609x768734193128308700_AAX_bTnYk0 = {
  "properties": {
    "element_id": "bTnWB0",
    "breakpoint": false,
    "event_color": "green"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTnYe0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "log_test_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTnWB0"
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTpat2"
    },
    "1": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTkdL0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTnWB0"
              },
              "type": "ThisElement",
              "is_slidable": false
            }
          }
        },
        "breakpoint": false,
        "custom_event": "bTthY0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTnYj0"
    }
  }
};
