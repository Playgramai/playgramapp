export const _1488796042609x768734193128308700_AAX_bTvFn1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "rg_Enter",
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTukb1"
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
  "id": "bTvFa1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "popup_NewProjectChat",
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
        "element_id": "bTUjC0",
        "arguments": {
          "0": {
            "param_id": "bTqzX",
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
                  "type": "Message",
                  "name": "specific_item",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTukb1"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTuth1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTvFf1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "popup_AddProjectChat",
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
        "arguments": {
          "0": {
            "param_id": "bTqFF2",
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
                  "type": "Message",
                  "name": "specific_item",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTukb1"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTqFJ2",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTvAJ1"
      },
      "type": "TriggerCustomEvent",
      "id": "bTvFg1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvFh1"
    },
    "3": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvFl1"
    },
    "4": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvFm1"
    }
  }
};
