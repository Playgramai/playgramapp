export const actions = {
  "0": {
    "properties": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.shortcuts",
              "option_value": "team_chat"
            },
            "type": "OptionValue"
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "custom_event": "bTutV1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTuxF1"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "args": "uploader",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTVaE",
      "ACR": 1,
      "ACS": true
    },
    "type": "1648049058728x629621556620034000-ABK",
    "id": "bTuxJ1"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "args": "inputFocus",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUec0"
    },
    "type": "SetFocusToElement",
    "id": "bTuxK1"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "args": "sidebarClose",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "custom_state": "custom.shortcut_",
      "custom_states_values": {
        "0": {
          "value": false,
          "custom_state": "custom.open__"
        }
      }
    },
    "type": "SetCustomState",
    "id": "bTuxL1"
  },
  "4": {
    "properties": {
      "condition": {
        "next": {
          "args": "sidebarOpen",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "custom_state": "custom.shortcut_",
      "custom_states_values": {
        "0": {
          "value": true,
          "custom_state": "custom.open__"
        }
      }
    },
    "type": "SetCustomState",
    "id": "bTuxP1"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTuxD1",
                                "optional": false,
                                "param_id": "bTpiw",
                                "param_name": "name"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "display",
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
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "display",
                            "is_slidable": false
                          },
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
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTuxD1",
                                        "optional": false,
                                        "param_id": "bTpiw",
                                        "param_name": "name"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "display",
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
                      "properties": {
                        "option_set": "option.llm_tool__os_",
                        "option_value": "all values"
                      },
                      "type": "OptionValue"
                    },
                    "type": "Message",
                    "name": "not_contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.shortcut_",
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
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
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTuxD1",
                                          "optional": false,
                                          "param_id": "bTpiw",
                                          "param_name": "name"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "display",
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
                        "properties": {
                          "option_set": "option.llm_tool__os_",
                          "option_value": "all values"
                        },
                        "type": "OptionValue"
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "args": {
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
                                                  "properties": {
                                                    "btype_id": "text",
                                                    "event_id": "bTuxD1",
                                                    "optional": false,
                                                    "param_id": "bTpiw",
                                                    "param_name": "name"
                                                  },
                                                  "type": "CurrentWorkflowItem",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "equals",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "display",
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
                                  "properties": {
                                    "option_set": "option.llm_tool__os_",
                                    "option_value": "all values"
                                  },
                                  "type": "OptionValue"
                                },
                                "type": "Message",
                                "name": "contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "enabled_tools_list_option_llm_tool__os_",
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
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.shortcut_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0"
                  },
                  "type": "GetElement",
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
      "arguments": {
        "0": {
          "param_id": "bTphc",
          "arg_value": {
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
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTpiX",
                              "optional": false,
                              "param_id": "bTpiw",
                              "param_name": "name"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "display",
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
            "properties": {
              "option_set": "option.llm_tool__os_",
              "option_value": "all values"
            },
            "type": "OptionValue",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        }
      },
      "custom_event": "bTuvM1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTuxQ1"
  },
  "6": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTuxD1",
                                "optional": false,
                                "param_id": "bTpiw",
                                "param_name": "name"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "display",
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
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
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
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTuxD1",
                                          "optional": false,
                                          "param_id": "bTpiw",
                                          "param_name": "name"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "display",
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
                        "properties": {
                          "option_set": "option.llm_tool__os_",
                          "option_value": "all values"
                        },
                        "type": "OptionValue"
                      },
                      "type": "Message",
                      "name": "not_contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "enabled_tools_list_option_llm_tool__os_",
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
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
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
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTuxD1",
                                          "optional": false,
                                          "param_id": "bTpiw",
                                          "param_name": "name"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "display",
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
                        "properties": {
                          "option_set": "option.llm_tool__os_",
                          "option_value": "all values"
                        },
                        "type": "OptionValue"
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTuxD1",
                                  "optional": false,
                                  "param_id": "bTpiw",
                                  "param_name": "name"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "is_not_empty",
                                            "is_slidable": false
                                          },
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
                                                      "properties": {
                                                        "btype_id": "text",
                                                        "event_id": "bTuxD1",
                                                        "optional": false,
                                                        "param_id": "bTpiw",
                                                        "param_name": "name"
                                                      },
                                                      "type": "CurrentWorkflowItem",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "contains",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "display",
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
                                "name": "and_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "display",
                            "is_slidable": false
                          },
                          "properties": {
                            "option_set": "option.llm_tool__os_",
                            "option_value": "all values"
                          },
                          "type": "OptionValue"
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
                    "name": "custom.shortcut_",
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
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_contains",
            "is_slidable": false
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
      "arguments": {
        "0": {
          "param_id": "bTphD",
          "arg_value": {
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
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTpiX",
                              "optional": false,
                              "param_id": "bTpiw",
                              "param_name": "name"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "display",
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
            "properties": {
              "option_set": "option.llm_tool__os_",
              "option_value": "all values"
            },
            "type": "OptionValue",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        }
      },
      "custom_event": "bTuvX1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTuxR1"
  },
  "7": {
    "properties": {
      "condition": {
        "next": {
          "args": "sidebarNewChat",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "custom_event": "bTutt1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTuxV1"
  },
  "8": {
    "properties": {
      "condition": {
        "next": {
          "args": "newProject",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "arguments": {
        "0": {
          "param_id": "bTrEd2",
          "arg_value": {
            "type": "Empty"
          }
        }
      },
      "custom_event": "bTuvA1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTuxW1"
  },
  "9": {
    "properties": {
      "condition": {
        "next": {
          "args": "newProject",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "value": true,
      "element_id": "bTYHy1",
      "custom_state": "custom.empty_"
    },
    "type": "SetCustomState",
    "id": "bTuxX1"
  },
  "10": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTulE1"
    },
    "type": "ScrollToElement",
    "id": "bTuxb1"
  },
  "11": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTukZ1"
    },
    "type": "ResetGroup",
    "id": "bTuxc1"
  },
  "12": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "value": 1,
      "element_id": "bTUdV0",
      "custom_state": "custom.shortcut_rg_index_"
    },
    "type": "SetCustomState",
    "id": "bTuxd1"
  },
  "13": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
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
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "admins_list_user",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_id",
                          "value": {
                            "properties": {
                              "parameter_name": {
                                "entries": {
                                  "0": "project"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "GetParamFromUrl"
                          },
                          "constraint_type": {
                            "type": "Empty"
                          }
                        }
                      },
                      "type_to_find": "custom.project"
                    },
                    "type": "Search"
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTuxD1",
                "optional": false,
                "param_id": "bTpiw",
                "param_name": "name"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "args": "popup_AddProjectChat",
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTuxD1",
                  "optional": false,
                  "param_id": "bTpiw",
                  "param_name": "name"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
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
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTukZ1"
    },
    "type": "ShowElement",
    "id": "bTuxh1"
  },
  "14": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTulJ1"
    },
    "type": "SetFocusToElement",
    "id": "bTuxi1"
  },
  "15": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "AAh": {
        "entries": {
          "0": "window.__scActiveGroup = \"",
          "1": {
            "next": {
              "args": "popup_palette",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "rg-shortcuts"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "args": "popup_ChatSearch",
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "rg-sc-chats"
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "args": "popup_models",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "rg-sc-models"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "formatting_for_false": {
                                            "entries": {
                                              "0": "rg-sc-projects"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_boolean",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTuxD1",
                                      "optional": false,
                                      "param_id": "bTpiw",
                                      "param_name": "name"
                                    },
                                    "type": "CurrentWorkflowItem",
                                    "said": "a2Vsdm8tMzE4ODQ=",
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
                          "name": "equals",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTuxD1",
                          "optional": false,
                          "param_id": "bTpiw",
                          "param_name": "name"
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
              "name": "equals",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTuxD1",
              "optional": false,
              "param_id": "bTpiw",
              "param_name": "name"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "2": "\";"
        },
        "type": "TextExpression"
      }
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTuxj1"
  },
  "16": {
    "properties": {
      "condition": {
        "next": {
          "args": "popup",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "AAh": {
        "entries": {
          "0": "window.__arrowIndex = null;\nwindow.__hoverIndex = null;\nwindow.__hoverFresh = false;\n"
        },
        "type": "TextExpression"
      }
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTuxn1"
  },
  "17": {
    "properties": {
      "condition": {
        "next": {
          "args": "sidebar_",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "add_parameters": true,
      "url_parameters": {
        "0": {
          "key": "tab",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "args": "sidebar_memory",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "url_formatted",
                              "is_slidable": false
                            },
                            "properties": {
                              "option_set": "option.sidebar_menu__os_",
                              "option_value": "memory_management"
                            },
                            "type": "OptionValue"
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
                              "name": "url_formatted",
                              "is_slidable": false
                            },
                            "properties": {
                              "option_set": "option.sidebar_menu__os_",
                              "option_value": "library0"
                            },
                            "type": "OptionValue",
                            "said": "a2Vsdm8tMzE4ODQ="
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
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTuxD1",
                  "optional": false,
                  "param_id": "bTpiw",
                  "param_name": "name"
                },
                "type": "CurrentWorkflowItem",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        }
      }
    },
    "type": "ChangePage",
    "id": "bTuxo1"
  },
  "18": {
    "properties": {
      "condition": {
        "next": {
          "args": "shareChat",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "share_access_boolean",
          "value": false,
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "next": {
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiHD1"
        },
        "type": "GetElement",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTuxp1"
  },
  "19": {
    "properties": {
      "condition": {
        "next": {
          "args": "archive",
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "Created By",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUhv0",
      "arguments": {
        "0": {
          "param_id": "bTpsf",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhv0"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuyA1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTuxt1"
  },
  "20": {
    "properties": {
      "condition": {
        "next": {
          "args": "delete",
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "Created By",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTuxD1",
          "optional": false,
          "param_id": "bTpiw",
          "param_name": "name"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUhv0",
      "arguments": {
        "0": {
          "param_id": "bTptE",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhv0"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuwV1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTuxu1"
  },
  "21": {
    "type": "TerminateWorkflow",
    "id": "bTuxv1"
  }
};
