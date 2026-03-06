export const triggercustomevent_1 = {
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
};
