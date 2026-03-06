export const group_shortcut = {
  "properties": {
    "height": 0,
    "left": 30,
    "top": 50,
    "width": 0,
    "zindex": 26,
    "border_roundness": 12,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "order": 6,
    "opacity": 100,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 12,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 12,
    "single_width": false,
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "vert_alignment": "stretch",
    "button_disabled": true,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTvHr1",
  "current_parent": "bTUBN",
  "default_name": "Group KZ",
  "elements": {
    "bTKRA": {
      "properties": {
        "text": {
          "entries": {
            "0": "Enable keyboard shortcuts"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": -107.1953125,
        "width": 100,
        "zindex": 23,
        "order": 3,
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
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
            "font_color": "var(--color_bTkRL4_default)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
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
                "type": "Message",
                "name": "and_",
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
            "font_color": "var(--color_bTsrp2_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTvHw1",
      "current_parent": "bTKPl",
      "default_name": "Text W",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    },
    "bTtZD1": {
      "properties": {
        "height": 0,
        "left": 12,
        "top": 12,
        "width": 0,
        "zindex": 24,
        "vertical_centering": true,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTvHx1",
      "default_name": "Group KZ",
      "elements": {
        "bTwPX0": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 7,
            "border_roundness": 20,
            "is_visible": true,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#ffffff"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#555557"
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
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "margin_right": 10,
            "padding_left": 2,
            "single_width": true,
            "min_width_css": "28px",
            "padding_right": 2,
            "single_height": true,
            "min_height_css": "16px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_vert_alignment": "center"
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
                  "name": "shortcuts_on__boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "rgba(59,143,162,1)",
                "container_horiz_alignment": "flex-end"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTwPR0",
          "current_parent": "bTvHx1",
          "default_name": "Group HZ",
          "elements": {
            "bTiTu1": {
              "properties": {
                "height": 280,
                "left": 0,
                "top": 0,
                "width": 280,
                "zindex": 2,
                "border_roundness": 100,
                "vertical_centering": true,
                "background_style": "bgcolor",
                "bgcolor": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#419db2"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#9d9d9e"
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
                "order": 1,
                "fit_width": true,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "12px",
                "single_height": true,
                "min_height_css": "12px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "container_layout": "column",
                "collapse_when_hidden": false,
                "container_vert_alignment": "center"
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
                      "name": "shortcuts_on__boolean",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "properties": {
                    "bgcolor": "rgba(255,255,255,1)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bTwPT0",
              "default_name": "Group HZ",
              "name": "G shortcuts toggle circle",
              "style": "Group_transparent_",
              "transitions": {
                "margin_left": {
                  "fn": "ease",
                  "duration": 300
                }
              }
            }
          },
          "name": "G shortcuts toggle",
          "style": "Group_transparent_",
          "transitions": {
            "background_style": {
              "fn": "ease",
              "duration": 300
            }
          }
        }
      },
      "name": "G - shortcut (button use)",
      "style": "Group_transparent_"
    }
  },
  "name": "Group shortcut",
  "style": "Group_transparent_",
};
