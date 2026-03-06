export const _1488796042609x768734193128308700_AAX_bTvGD1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "rg_Enter",
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.text_for_rte_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
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
        "element_id": "bTpet"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "element_id": "bTuQJ1",
    "wf_folder": "bTupd1"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTvFr1",
  "actions": {
    "0": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTqHP2",
            "arg_value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "custom.shortcut_rg_index_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUdV0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_chat_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "specific_item",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTulc1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTupe1"
      },
      "type": "TriggerCustomEvent",
      "id": "bTvFt1"
    },
    "1": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvFx1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvFy1"
    },
    "3": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvFz1"
    }
  }
};
