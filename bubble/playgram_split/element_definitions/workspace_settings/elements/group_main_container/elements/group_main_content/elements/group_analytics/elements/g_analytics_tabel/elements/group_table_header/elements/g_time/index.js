export const g_time = {
  "properties": {
    "height": 0,
    "left": 36,
    "top": 20,
    "width": 0,
    "zindex": 4,
    "vertical_centering": true,
    "order": 9,
    "use_gap": false,
    "fit_width": false,
    "column_gap": 5,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "100%",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bThRP1",
  "current_parent": "bTfYB",
  "default_name": "Group FZ",
  "elements": {
    "bTgnp": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 4,
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 5,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bThRR1",
      "current_parent": "bTfYB",
      "default_name": "Group FZ",
      "elements": {
        "bTgmN": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 3,
            "icon": "ionic outline chevron-down",
            "icon_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#555557"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#acacad"
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
            },
            "vertical_centering": true,
            "order": 3,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "13px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "13px",
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
                    "args": "time",
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.descending_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTfQP0"
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
                  "type": "Message",
                  "name": "custom.sort_by_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTfQP0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "icon": "ionic outline chevron-up"
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": "time",
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_hovered",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bThRR1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.sort_by_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTfQP0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "icon_color": {
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
          "type": "Icon",
          "id": "bThRV1",
          "default_name": "Icon K",
          "style": "Icon_standard_icon_"
        },
        "bThRh1": {
          "properties": {
            "text": {
              "entries": {
                "0": "Time Spent"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 63.5,
            "top": 28.8046875,
            "width": 100,
            "zindex": 2,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": "time",
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_hovered",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bThRR1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.sort_by_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTfQP0"
                },
                "type": "GetElement",
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
          "id": "bTfYH",
          "current_parent": "bTOUV0",
          "default_name": "Text M",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "name": "G Time Sort (use button)",
      "style": "Group_transparent_"
    }
  },
  "name": "G Time",
  "style": "Group_transparent_",
};
