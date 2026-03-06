export const _1488796042609x768734193128308700_AAX_bTvGR1 = {
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
                "element_id": "bTukh1"
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
  "id": "bTvGE1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "llm_model_option_llm_models__os_",
            "value": {
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
                "element_id": "bTukh1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "enabled_tools_list_option_llm_tool__os_",
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
                                    "name": "tools",
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
                                "element_id": "bTukh1"
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
                "name": "enabled_tools_list_option_llm_tool__os_",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": "set_list"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTvGJ1"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_setModel('",
            "1": {
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
                    "name": "display",
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
                "element_id": "bTukh1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "');\nbubble_fn_resetTools();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvGK1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvGL1"
    },
    "3": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvGP1"
    },
    "4": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvGQ1"
    }
  }
};
