import { elements } from './elements/index.js';

export const Dropdown_subscription_credits = {
  "elements": elements,
  "workflows": {
    "bTaxG": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwlx"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTwlr"
      },
      "type": "ButtonClicked",
      "id": "bTwmF",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTwlx"
          },
          "type": "ShowElement",
          "id": "bTwmJ"
        }
      }
    },
    "bTwqq": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwlx"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTwlr"
      },
      "type": "ButtonClicked",
      "id": "bTwmo",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTwlx"
          },
          "type": "HideElement",
          "id": "bTwqr"
        }
      }
    },
    "bTxdA": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.subscription_plan",
                          "option_value": "pro"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTwmn",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTwln"
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
            "name": "param_bTxdB",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwln"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "PageLoaded",
      "id": "bTxcv",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "decimal_place": 0,
                      "thousand_separator": "space"
                    },
                    "type": "Message",
                    "name": "format_number",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "credits_count_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTxdB",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwln"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTwln",
            "custom_state": "custom.selected_credits_option_"
          },
          "type": "SetCustomState",
          "id": "bTxdF"
        }
      }
    },
    "bTynP": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.subscription_plan",
                          "option_value": "pro"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTwmn",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTwln"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "properties": {
                      "parameter_name": {
                        "entries": {
                          "0": "credits"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "GetParamFromUrl"
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
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "param_bTxdB",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwln"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "PageLoaded",
      "id": "bTynJ",
      "actions": {
        "0": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "parameter_name": {
                        "entries": {
                          "0": "credits"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "GetParamFromUrl"
                  },
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": ","
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "10000,20000,30000,40000,50000,6000070000,80000,90000,100000"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "value": {
              "next": {
                "next": {
                  "properties": {
                    "thousand_separator": "space"
                  },
                  "type": "Message",
                  "name": "format_number",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "convert_to_number",
                "is_slidable": false
              },
              "properties": {
                "parameter_name": {
                  "entries": {
                    "0": "credits"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "element_id": "bTwln",
            "custom_state": "custom.selected_credits_option_"
          },
          "type": "SetCustomState",
          "id": "bTynL"
        }
      }
    },
    "bTrCr1": {
      "properties": {
        "element_id": "bTwmD"
      },
      "type": "ButtonClicked",
      "id": "bTwmK",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTwln",
            "custom_state": "custom.selected_credits_option_"
          },
          "type": "SetCustomState",
          "id": "bTxcL"
        },
        "1": {
          "properties": {
            "element_id": "bTwlx"
          },
          "type": "HideElement",
          "id": "bTwmP"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "text",
    "background_style": "none",
    "bgcolor": "rgba(47, 47, 47, 1)",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.subscription_plan",
        "optional": true,
        "param_id": "bTwmn",
        "param_name": "Subscription_plan",
        "editor_type": "DynamicValue",
        "default_value": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "pro"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        }
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": true,
        "param_id": "bTxdB",
        "param_name": "organization",
        "editor_type": "DynamicValue"
      }
    },
    "max_width_px": 80,
    "min_width_px": 0,
    "default_width": 260,
    "max_height_px": 42,
    "min_height_px": 42,
    "wf_folder_list": {
      "bTqIt0": "Project",
      "bTqIu0": "User Settings"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTwln",
  "name": "Dropdown subscription credits",
  "custom_states": {
    "selected_credits_option_": {
      "display": "selected_credits_option",
      "value": "text",
      "rank": 0,
      "default_val": "10 000",
      "make_static": true
    }
  },
};
