export const rg_shortcuts = {
  "properties": {
    "event_name": "rg_shortcuts",
    "wf_folder": "bTupd1",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTpnu",
        "param_name": "sc_name"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvBZ1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Prev",
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
                "args": {
                  "next": {
                    "args": "popup_models rg_Next",
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
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvBZ1",
                    "optional": false,
                    "param_id": "bTpnu",
                    "param_name": "sc_name"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": "popup_NewProjectChat rg_Next",
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
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTvBZ1",
                      "optional": false,
                      "param_id": "bTpnu",
                      "param_name": "sc_name"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "args": "popup_AddProjectChat",
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
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTvBZ1",
                        "optional": false,
                        "param_id": "bTpnu",
                        "param_name": "sc_name"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "args": "popup_palette rg_Next",
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
                                "element_id": "bTulV1"
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
                          "event_id": "bTvBZ1",
                          "optional": false,
                          "param_id": "bTpnu",
                          "param_name": "sc_name"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "args": "popup_ChatSearch rg_Next",
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
                                  "element_id": "bTulc1"
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
                            "event_id": "bTvBZ1",
                            "optional": false,
                            "param_id": "bTpnu",
                            "param_name": "sc_name"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
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
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "value": {
          "next": {
            "type": "Message",
            "name": "convert_to_number",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "args": "rg_Next",
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
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
                            "2": ""
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "args": "rg_Prev",
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "args": 1,
                                              "type": "Message",
                                              "name": "minus",
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
                                "name": "contains",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTvBZ1",
                                "optional": false,
                                "param_id": "bTpnu",
                                "param_name": "sc_name"
                              },
                              "type": "CurrentWorkflowItem",
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
                    "name": "contains",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvBZ1",
                    "optional": false,
                    "param_id": "bTpnu",
                    "param_name": "sc_name"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvBk1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_models rg_Next",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 8,
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
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTukh1",
        "entry": {
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
        "animate": true
      },
      "type": "ScrollToListEntry",
      "id": "bTvBl1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Prev",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTukh1",
        "entry": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "minus",
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
        "offset": -100,
        "animate": true
      },
      "type": "ScrollToListEntry",
      "id": "bTvBp1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_palette rg_Next",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 6,
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
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTulV1",
        "entry": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "minus",
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
              "name": "specific_item",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulV1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "animate": true
      },
      "type": "ScrollToListEntry",
      "id": "bTvBq1"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Prev",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTulV1",
        "entry": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "minus",
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
              "name": "specific_item",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulV1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "offset": -100,
        "animate": true
      },
      "type": "ScrollToListEntry",
      "id": "bTvBr1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": "popup_models rg_Enter",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTvBZ1",
                    "optional": false,
                    "param_id": "bTpnu",
                    "param_name": "sc_name"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
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
                          "said": "a2Vsdm8tMzE4ODQ=",
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
      "id": "bTvBv1"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_models rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
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
      "id": "bTvBw1"
    },
    "7": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_NewProjectChat rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvBx1"
    },
    "8": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_palette rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "window.bubble_fn_shortcut && window.bubble_fn_shortcut(\"",
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
                "element_id": "bTulV1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\");"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvCB1"
    },
    "9": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_NewProjectChat rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
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
                        "name": "_id",
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
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTvCC1"
    },
    "10": {
      "properties": {
        "condition": {
          "next": {
            "args": "popup_ChatSearch rg_Enter",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
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
      "id": "bTvCD1"
    },
    "11": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvCH1"
    },
    "12": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvCI1"
    },
    "13": {
      "properties": {
        "condition": {
          "next": {
            "args": "rg_Enter",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvBZ1",
            "optional": false,
            "param_id": "bTpnu",
            "param_name": "sc_name"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "value": 0,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvCJ1"
    }
  }
};
