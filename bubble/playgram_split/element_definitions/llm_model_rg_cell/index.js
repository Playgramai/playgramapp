import { elements } from './elements/index.js';

export const LLM_Model_RG_Cell = {
  "elements": elements,
  "workflows": {
    "bTiEE": {
      "properties": {
        "element_id": "bTiDa",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTiDx",
      "actions": {
        "0": {
          "properties": {
            "arguments": {
              "0": {
                "param_id": "bToZn0",
                "arg_value": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              }
            },
            "custom_event": "bToZc0"
          },
          "type": "TriggerCustomEvent",
          "id": "bToZv0"
        }
      }
    },
    "bTiEW": {
      "properties": {
        "condition": {
          "next": {
            "args": 1024,
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "not_equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.llm_provider_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTbDp0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "element_id": "bTbDr0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTiEP",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTiDP"
          },
          "type": "ToggleElement",
          "id": "bTiEX"
        },
        "1": {
          "properties": {
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTbDp0",
            "custom_state": "custom.llm_provider_"
          },
          "type": "SetCustomState",
          "id": "bTiEc"
        }
      }
    },
    "bTiKQ": {
      "properties": {
        "condition": {
          "next": {
            "args": 1024,
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.llm_provider_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTbDp0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "element_id": "bTbDr0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTiGD",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTiDP"
          },
          "type": "ToggleElement",
          "id": "bTiKK"
        }
      }
    },
    "bTiLj": {
      "properties": {
        "condition": {
          "next": {
            "args": 1024,
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "type": "ElementParent",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.llm_provider_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTbDp0"
                        },
                        "type": "GetElement",
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
                  "name": "custom.llm_provider_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTbDp0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTbDp0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "element_id": "bTbDr0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTiKR",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTiDP"
          },
          "type": "ToggleElement",
          "id": "bTiLp"
        },
        "1": {
          "properties": {
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTbDp0",
            "custom_state": "custom.llm_provider_"
          },
          "type": "SetCustomState",
          "id": "bTiLf"
        }
      }
    },
    "bTicj": {
      "properties": {
        "element_id": "bTicE",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTicc",
      "actions": {
        "0": {
          "properties": {
            "arguments": {
              "0": {
                "param_id": "bToZn0",
                "arg_value": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              }
            },
            "custom_event": "bToZc0"
          },
          "type": "TriggerCustomEvent",
          "id": "bToaM0"
        }
      }
    },
    "bTict": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "default_model_option_llm_models__os_",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTicJ"
      },
      "type": "ButtonClicked",
      "id": "bTicn",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "default_model_option_llm_models__os_",
                "value": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTicp"
        },
        "1": {
          "properties": {
            "arguments": {
              "0": {
                "param_id": "bToZn0",
                "arg_value": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              }
            },
            "custom_event": "bToZc0"
          },
          "type": "TriggerCustomEvent",
          "id": "bToaF0"
        }
      }
    },
    "bTbeS0": {
      "properties": {
        "element_id": "bTbdu0",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTbeH0",
      "actions": {
        "0": {
          "properties": {
            "arguments": {
              "0": {
                "param_id": "bToZn0",
                "arg_value": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              }
            },
            "custom_event": "bToZc0"
          },
          "type": "TriggerCustomEvent",
          "id": "bToaR0"
        }
      }
    },
    "bTbep0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "default_model_option_llm_models__os_",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTkjt2"
      },
      "type": "ButtonClicked",
      "id": "bTbej0",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "default_model_option_llm_models__os_",
                "value": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTbel0"
        },
        "1": {
          "properties": {
            "arguments": {
              "0": {
                "param_id": "bToZn0",
                "arg_value": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              }
            },
            "custom_event": "bToZc0"
          },
          "type": "TriggerCustomEvent",
          "id": "bToaH0"
        }
      }
    },
    "bToZh0": {
      "properties": {
        "event_name": "set_new_model",
        "parameters": {
          "0": {
            "is_list": false,
            "btype_id": "option.llm_models__os_",
            "optional": false,
            "param_id": "bToZn0",
            "param_name": "model"
          }
        }
      },
      "type": "CustomEvent",
      "id": "bToZc0",
      "actions": {
        "0": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTIIn0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "changes": {
              "0": {
                "key": "llm_model_option_llm_models__os_",
                "value": {
                  "properties": {
                    "btype_id": "option.llm_models__os_",
                    "event_id": "bToZc0",
                    "optional": false,
                    "param_id": "bToZn0",
                    "param_name": "model"
                  },
                  "type": "CurrentWorkflowItem",
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
                                    "type": "Message",
                                    "name": "tools",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "option.llm_models__os_",
                                    "event_id": "bToZc0",
                                    "optional": false,
                                    "param_id": "bToZn0",
                                    "param_name": "model"
                                  },
                                  "type": "CurrentWorkflowItem",
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
                  "is_slidable": false
                },
                "action": "set_list"
              }
            },
            "to_change": {
              "next": {
                "type": "Message",
                "name": "param_bTIIn0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "ChangeThing",
          "id": "bToZi0"
        },
        "1": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "bubble_fn_setModel('",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.llm_models__os_",
                    "event_id": "bToZc0",
                    "optional": false,
                    "param_id": "bToZn0",
                    "param_name": "model"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "');\nbubble_fn_resetTools();"
              },
              "type": "TextExpression"
            },
            "AAi": false
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bToZo0"
        },
        "2": {
          "properties": {
            "element_id": "bTiDP"
          },
          "type": "HideElement",
          "id": "bToZt0"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "option.llm_providers__os_",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzr_default)",
    "use_gap": true,
    "column_gap": 4,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": true,
        "param_id": "bTIIn0",
        "param_name": "chat",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": true,
        "param_id": "bTPAS0",
        "param_name": "current_model",
        "editor_type": "DynamicValue"
      },
      "2": {
        "is_list": false,
        "btype_id": "file",
        "optional": true,
        "param_id": "bTYPA0",
        "param_name": "file_in_uploader",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 292,
    "min_height_px": 54,
    "element_version": 5,
    "container_layout": "relative",
    "custom_element_platform": "web"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbEr0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": "index-color-test",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "name": "Current Page Name"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTbDp0",
  "name": "LLM Model RG Cell",
  "custom_states": {
    "llm_provider_": {
      "display": "selected_provider",
      "value": "option.llm_providers__os_",
      "rank": 0,
      "make_static": true
    }
  },
};
