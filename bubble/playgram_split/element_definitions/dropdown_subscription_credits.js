export const Dropdown_subscription_credits = {
  "elements": {
    "bTavJ": {
      "properties": {
        "height": 14,
        "left": 40,
        "top": 28,
        "width": 70,
        "zindex": 2,
        "border_roundness": 12,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwln"
          },
          "type": "GetElement",
          "is_slidable": false,
          "moved_to_top": true
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzr_default)",
        "order": 1,
        "fit_width": false,
        "fit_height": false,
        "padding_left": 16,
        "single_width": false,
        "min_width_css": "240px",
        "padding_right": 16,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
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
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "rgba(var(--color_bTkRK4_default_rgb), 0.1)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "var(--color_bTsrr2_default)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
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
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTwlr",
      "default_name": "Group A",
      "elements": {
        "bTavT": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.selected_credits_option_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTwln"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "1": " credits/month"
              },
              "type": "TextExpression"
            },
            "height": 9,
            "left": 8,
            "top": 7,
            "width": 19,
            "zindex": 2,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "10 000 credits/month",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
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
              "properties": {
                "text": {
                  "entries": {
                    "0": "2000 credits/month"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTwls",
          "default_name": "Text A",
          "style": "Text_inter___400___14px___white_"
        },
        "bTavb": {
          "properties": {
            "height": 7,
            "left": 65,
            "top": 16,
            "width": 7,
            "zindex": 3,
            "icon": "feather chevron-down",
            "icon_color": "rgba(112,112,114,1)",
            "vertical_centering": true,
            "order": 2,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "12px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "12px",
            "padding_bottom": 0,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTwlt",
          "default_name": "Icon A",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group dropdown container (use button)",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTavh": {
      "properties": {
        "height": 68,
        "left": 2,
        "top": 63,
        "width": 87,
        "zindex": 3,
        "boxshadow_horizontal": 0,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_surface_default)",
        "boxshadow_blur": 2,
        "boxshadow_color": "var(--color_bTHBQ_default)",
        "reference": "bTwlr",
        "fit_height": true,
        "offset_top": -4,
        "offset_left": -8,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": true,
        "max_width_css": "280px",
        "min_width_css": "256px",
        "padding_right": 8,
        "single_height": false,
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "GroupFocus",
      "id": "bTwlx",
      "default_name": "GroupFocus A",
      "elements": {
        "bTavx": {
          "properties": {
            "height": 22,
            "left": 38,
            "top": 9,
            "width": 23,
            "zindex": 2,
            "border_roundness": 12,
            "boxshadow_style": "none",
            "bgcolor": "var(--color_bTGzr_default)",
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "padding_top": 4,
            "padding_left": 8,
            "single_width": false,
            "min_width_css": "150px",
            "padding_right": 8,
            "single_height": false,
            "max_height_css": "174px",
            "min_height_css": "40px",
            "padding_bottom": 4,
            "horiz_alignment": "center",
            "overflow_scroll": true,
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "var(--color_bTsrr2_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTwly",
          "default_name": "Group B",
          "elements": {
            "bTavy": {
              "properties": {
                "height": 13,
                "left": 17,
                "top": 58,
                "width": 23,
                "zindex": 2,
                "data_source": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "_advanced_search_constraint",
                              "value": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "credits_count_number",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "subscription_custom_subscription",
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
                                        "is_slidable": false,
                                        "moved_to_top": true
                                      },
                                      "type": "Message",
                                      "name": "greater_or_equal_than",
                                      "is_slidable": false
                                    },
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
                      "name": "credits_options",
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
                  "is_slidable": false,
                  "moved_to_top": true
                },
                "group_type": "text",
                "order": 1,
                "fit_width": false,
                "fit_height": true,
                "fixed_rows": false,
                "single_width": false,
                "single_height": false,
                "horiz_alignment": "flex-start",
                "container_layout": "column",
                "cell_min_height_css": "30px",
                "collapse_when_hidden": true
              },
              "type": "RepeatingGroup",
              "id": "bTwlz",
              "default_name": "RepeatingGroup A",
              "elements": {
                "bTawK": {
                  "properties": {
                    "height": 11,
                    "left": 15.5,
                    "top": 6,
                    "width": 29,
                    "zindex": 2,
                    "border_roundness": 10,
                    "data_source": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "group_type": "text",
                    "vertical_centering": true,
                    "background_style": "bgcolor",
                    "bgcolor": "rgba(74,74,74,0)",
                    "order": 1,
                    "fit_width": false,
                    "fit_height": true,
                    "margin_top": 2,
                    "padding_top": 4,
                    "padding_left": 8,
                    "single_width": false,
                    "margin_bottom": 2,
                    "min_width_css": "40px",
                    "padding_right": 8,
                    "single_height": false,
                    "min_height_css": "36px",
                    "padding_bottom": 4,
                    "horiz_alignment": "flex-start",
                    "container_layout": "row",
                    "collapse_when_hidden": true
                  },
                  "states": {
                    "0": {
                      "condition": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "get_group_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTwln"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "is_hovered",
                          "is_slidable": false
                        },
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "properties": {
                        "bgcolor": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "#f2f3f5"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "#acacad1a"
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
                            "name": "dark_mode_boolean",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        }
                      },
                      "type": "State"
                    }
                  },
                  "type": "Group",
                  "id": "bTwmD",
                  "default_name": "Group C",
                  "elements": {
                    "bTawQ": {
                      "properties": {
                        "text": {
                          "entries": {
                            "0": {
                              "type": "ElementParent",
                              "is_slidable": false
                            },
                            "1": " credits/month"
                          },
                          "type": "TextExpression"
                        },
                        "height": 7,
                        "left": 12.5,
                        "top": 8,
                        "width": 31,
                        "zindex": 2,
                        "order": 1,
                        "fit_width": true,
                        "fit_height": true,
                        "single_width": false,
                        "min_width_css": "0px",
                        "single_height": false,
                        "min_height_css": "0px",
                        "vert_alignment": "center",
                        "horiz_alignment": "flex-start",
                        "editor_preview_text": "100 000 credits/month",
                        "collapse_when_hidden": true
                      },
                      "states": {
                        "0": {
                          "condition": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "get_group_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTwln"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "or_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "is_hovered",
                              "is_slidable": false
                            },
                            "type": "ThisElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "properties": {
                            "font_color": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "#121213"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "#ffffff"
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
                                "name": "dark_mode_boolean",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            }
                          },
                          "type": "State"
                        }
                      },
                      "type": "Text",
                      "id": "bTwmE",
                      "default_name": "Text B",
                      "style": "Text_inter___400___14px___white_"
                    }
                  },
                  "name": "Group change credits (use button)",
                  "style": "Group_transparent_"
                }
              },
              "name": "RepeatingGroup text",
              "style": "RepeatingGroup_transparent_"
            }
          },
          "name": "Group Inner Container",
          "style": "Group_dark_gf___shadow_"
        }
      },
      "name": "GF Options"
    }
  },
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
  }
};
