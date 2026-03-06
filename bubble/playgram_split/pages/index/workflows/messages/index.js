export const messages = {
  "properties": {
    "event_name": "messages",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTpzW",
        "param_name": "sc_name"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuyN1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.shortcut_msgs_count_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtcm0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_msgs_count_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "convert_to_number",
                        "is_slidable": false
                      },
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "convert_to_number",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "last_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": "_message "
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTuyN1",
                                "optional": false,
                                "param_id": "bTpzW",
                                "param_name": "sc_name"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "2": ""
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "",
                            "1": {
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
                            "2": ""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_boolean",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "_message "
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTuyN1",
                "optional": false,
                "param_id": "bTpzW",
                "param_name": "sc_name"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.llm_cell_index_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTuyS1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "prev_",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "custom.shortcut_msgs_count_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.llm_cell_index_",
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
          "properties": {
            "btype_id": "text",
            "event_id": "bTuyN1",
            "optional": false,
            "param_id": "bTpzW",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtcm0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_msgs_count_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.llm_cell_index_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.llm_cell_index_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTuyT1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "next",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "greater_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.llm_cell_index_",
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
          "properties": {
            "btype_id": "text",
            "event_id": "bTuyN1",
            "optional": false,
            "param_id": "bTpzW",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtcm0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_msgs_count_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.llm_cell_index_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.llm_cell_index_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTuyX1"
    },
    "3": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(() => {\n  const index = ",
            "1": {
              "next": {
                "type": "Message",
                "name": "custom.llm_cell_index_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ";              \n  const id = \"llm-cell-\" + index;\n  const el = document.getElementById(id);\n  if (!el) return;\n  \n  el.style.scrollMarginTop = \"150px\";\n  el.scrollIntoView({ behavior: \"smooth\", block: \"start\", inline: \"nearest\" });\n})();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuyY1"
    }
  },
};
