export const _1488796042609x768734193128308700_AAX_bTnYB0 = {
  "properties": {
    "element_id": "bTiWh0",
    "event_color": "green"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTnXv0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
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
                      "type": "TextExpression"
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
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiWh0"
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiWh0"
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "element_id": "bTiXM0"
      },
      "type": "DisplayGroupData",
      "id": "bTnYA0"
    }
  }
};
