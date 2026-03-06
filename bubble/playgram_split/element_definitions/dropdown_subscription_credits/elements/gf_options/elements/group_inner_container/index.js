export const group_inner_container = {
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
  "style": "Group_dark_gf___shadow_",
};
