export const _1488796042609x768734193128308700_AAX_bTSyv0 = {
  "properties": {
    "element_id": "bTUhj0",
    "wf_folder": "1488796042609x768734193128308700-AAX"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTUwz0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_advanced_search_constraint",
                    "value": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "tools",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTcdF"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_contained_by_list",
                        "is_slidable": false
                      },
                      "type": "InjectedValue",
                      "is_slidable": false
                    },
                    "constraint_type": {
                      "type": "Empty"
                    }
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "custom.tool_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.tool_"
      },
      "type": "SetCustomState",
      "id": "bTUxA0"
    }
  }
};
