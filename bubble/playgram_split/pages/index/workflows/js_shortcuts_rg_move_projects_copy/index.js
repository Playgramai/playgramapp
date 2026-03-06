export const JS_Shortcuts_rg_move_projects_copy = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "rg_Next rg-sc-projects",
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "rg_Prev rg-sc-projects",
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
            "type": "Message",
            "name": "or_",
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
  "id": "bTvHX1",
  "name": "JS Shortcuts rg_move projects (copy)",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "Bottom="
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "Top="
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
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
        "element_id": "bTUdV0",
        "custom_state": "custom.safezoneup_sc_index_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "convert_to_number",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "rg"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "last_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "Bottom="
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpet"
              },
              "type": "ThisElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.safezonedown_sc_index_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTvHZ1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "rg_Next",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": 1,
                              "type": "Message",
                              "name": "plus",
                              "is_slidable": false
                            },
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
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
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
        "value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 1,
                        "type": "Message",
                        "name": "plus",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": " hoverIndex="
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "arrowIndex="
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
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
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvHf1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": 1,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "rg_Prev",
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
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
        "value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 1,
                        "type": "Message",
                        "name": "minus",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": " hoverIndex="
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "arrowIndex="
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
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
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvHj1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "rg_Next",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "rg_Prev",
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
                "type": "Message",
                "name": "or_",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const newIndex = ",
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
            "2": ";\n  window.setArrowIndexFromBubble && window.setArrowIndexFromBubble(newIndex);\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvHp1"
    }
  },
};
