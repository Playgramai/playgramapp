export const group_j = {
  "properties": {
    "height": 70,
    "left": -256,
    "top": -70,
    "width": 256,
    "zindex": 13,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.subscription_plan",
    "vertical_centering": true,
    "order": 11,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTxqx",
  "default_name": "Group J",
  "elements": {
    "bTxrD": {
      "properties": {
        "height": 200,
        "left": -16,
        "top": -16,
        "width": 200,
        "zindex": 2,
        "floating_reference": "top",
        "custom_id": "bTLgB",
        "is_visible": false,
        "order": 12,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTUaI": {
          "entries": {
            "0": "#c4e1e7"
          },
          "type": "TextExpression"
        },
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTxqO",
      "default_name": "Circle Loader B",
      "name": "Circle Loader Change plan"
    },
    "bTxrE": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": "onboarding",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "Choose Pro"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.subscription_plan",
                                      "option_value": "free"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "Choose Pro"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "next": {
                                                        "next": {
                                                          "type": "Message",
                                                          "name": "convert_to_number",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "find": {
                                                            "entries": {
                                                              "0": " "
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "Message",
                                                        "name": "find_replace",
                                                        "is_slidable": true
                                                      },
                                                      "type": "Message",
                                                      "name": "custom.selected_credits_option_",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "element_id": "bTxBh1"
                                                    },
                                                    "type": "GetElement",
                                                    "is_slidable": false
                                                  },
                                                  "next": {
                                                    "properties": {
                                                      "formatting_for_true": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "next": {
                                                                "next": {
                                                                  "next": {
                                                                    "next": {
                                                                      "args": {
                                                                        "next": {
                                                                          "next": {
                                                                            "args": "Annually",
                                                                            "type": "Message",
                                                                            "name": "equals",
                                                                            "is_slidable": false
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "custom.plan_type_",
                                                                          "is_slidable": false
                                                                        },
                                                                        "properties": {
                                                                          "element_id": "bTxAn1"
                                                                        },
                                                                        "type": "GetElement",
                                                                        "is_slidable": false,
                                                                        "moved_to_top": true
                                                                      },
                                                                      "next": {
                                                                        "properties": {
                                                                          "formatting_for_true": {
                                                                            "entries": {
                                                                              "0": "Upgrade"
                                                                            },
                                                                            "type": "TextExpression"
                                                                          },
                                                                          "formatting_for_false": {
                                                                            "entries": {
                                                                              "0": "Current plan"
                                                                            },
                                                                            "type": "TextExpression"
                                                                          }
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "format_boolean",
                                                                        "is_slidable": true
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "and_",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "is_false",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "annualy_boolean",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "Message",
                                                                "name": "subscription_custom_subscription",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "param_bTxcd",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "element_id": "bTxAn1"
                                                            },
                                                            "type": "GetElement",
                                                            "is_slidable": false,
                                                            "moved_to_top": true
                                                          },
                                                          "2": ""
                                                        },
                                                        "type": "TextExpression"
                                                      },
                                                      "formatting_for_false": {
                                                        "entries": {
                                                          "0": "Upgrade"
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
                                                "type": "Message",
                                                "name": "credits_count_number",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "param_bTxcd",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "element_id": "bTxAn1"
                                            },
                                            "type": "GetElement",
                                            "said": "a2Vsdm8tMzE4ODQ=",
                                            "is_slidable": false,
                                            "moved_to_top": true
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
                                "type": "Message",
                                "name": "subscription_plan_option_subscription_plan",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "param_bTxcd",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTxAn1"
                            },
                            "type": "GetElement",
                            "is_slidable": false,
                            "moved_to_top": true
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
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 4,
        "left": -16,
        "top": -16,
        "width": 96,
        "zindex": 1,
        "icon": "feather star",
        "is_visible": true,
        "order": 13,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": true,
        "min_height_css": "42px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bc",
        "collapse_when_hidden": true,
        "editor_preview_button": "Upgrade"
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
              "element_id": "bTxLd"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Resubscribe"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTxqO"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "convert_to_number",
                            "is_slidable": false
                          },
                          "properties": {
                            "find": {
                              "entries": {
                                "0": " "
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "custom.selected_credits_option_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTxBh1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
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
                            "name": "subscription_plan_option_subscription_plan",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "param_bTxcd",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTxAn1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "next": {
                                          "type": "Message",
                                          "name": "custom.plan_type_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTxAn1"
                                        },
                                        "type": "GetElement",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "Annually"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "Monthly"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "format_boolean",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "annualy_boolean",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "subscription_custom_subscription",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "param_bTxcd",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTxAn1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "active_boolean",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "param_bTxcd",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTxAn1"
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
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "credits_count_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "subscription_custom_subscription",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTxcd",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTxAn1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTxBd1",
      "current_parent": "bTwgj",
      "default_name": "Button A",
      "name": "Button Pro plan",
      "style": "Button_primary_new_"
    }
  },
  "style": "Group_transparent_",
};
