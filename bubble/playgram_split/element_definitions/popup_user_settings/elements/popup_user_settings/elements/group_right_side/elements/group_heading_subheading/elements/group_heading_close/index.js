export const group_heading_close = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 24,
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "30px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTYGL",
  "default_name": "Group V",
  "elements": {
    "bTYGR": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.user_settings__os_",
                      "option_value": "account"
                    },
                    "type": "OneOptionValue",
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
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "custom.tab_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKdM0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": " settings"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "custom.tab_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKdM0"
                            },
                            "type": "GetElement",
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
                "type": "Message",
                "name": "custom.tab_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKdM0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 11,
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
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.change_password__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKdM0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Change password"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTKdR0",
      "current_parent": "bTIMu",
      "default_name": "Text A",
      "style": "Text_inter___400___18px___white_"
    },
    "bTnqA": {
      "properties": {
        "height": 28,
        "left": 172,
        "top": 0,
        "width": 28,
        "zindex": 13,
        "border_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#eaecf0"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#2a2a2d"
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
        "border_roundness": 12,
        "vertical_centering": true,
        "border_style": "solid",
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "32px",
        "single_height": true,
        "min_height_css": "32px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "border_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#707072"
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
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "args": 560,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKdH0",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTnpv",
      "default_name": "Group BZ",
      "elements": {
        "bTnqB": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 1,
            "icon": "feather x",
            "icon_color": "var(--color_bTkRL4_default)",
            "vertical_centering": true,
            "order": 3,
            "unique_id": {
              "entries": {
                "0": "btn-close-user-settings"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": true,
            "min_width_css": "26px",
            "single_height": true,
            "min_height_css": "26px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
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
                "icon_color": "var(--color_bTkRX4_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTKdS0",
          "default_name": "Icon A",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group close",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Heading/Close",
  "style": "Group_transparent_",
};
