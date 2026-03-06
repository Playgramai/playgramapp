export const _1488796042609x768734193128308700_AAX_bTPBC0 = {
  "properties": {
    "element_id": "bTUhh0",
    "wf_folder": "1488796042609x768734193128308700-AAX"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTUtz0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "constraints": {
                "0": {
                  "key": "_advanced_search_constraint",
                  "value": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "display",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUhh0"
                    },
                    "type": "ThisElement",
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
          "properties": {
            "option_set": "option.llm_models__os_",
            "option_value": "all values"
          },
          "type": "OptionValue"
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.default_model_"
      },
      "type": "SetCustomState",
      "id": "bTUuA0"
    },
    "1": {
      "properties": {
        "element_id": "bTbfB0"
      },
      "type": "HideElement",
      "id": "bTcbl"
    }
  }
};
