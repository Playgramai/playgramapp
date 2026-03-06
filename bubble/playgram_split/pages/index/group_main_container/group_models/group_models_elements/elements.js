import { Group_Buttons } from './group_buttons/index.js';

export const elements = {
  "bTnQH1": Group_Buttons,
  "bTnQC1": {
    "properties": {
      "height": 0,
      "left": -24,
      "top": -24,
      "width": 0,
      "zindex": 19,
      "border_roundness": 0,
      "vertical_centering": true,
      "order": 1,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "20px",
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTUiG0",
    "default_name": "Group VZZ",
    "elements": {
      "bTUPR0": {
        "properties": {
          "height": 0,
          "left": -631.9921875,
          "top": -12,
          "width": 0,
          "zindex": 13,
          "border_roundness": 12,
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 6,
          "fit_height": true,
          "padding_left": 10,
          "single_width": false,
          "padding_right": 8,
          "single_height": true,
          "min_height_css": "38px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": false
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "option.sidebar_menu__os_",
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
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
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbfB0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "rgba(42,42,45,1)"
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
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
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbfB0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "min_height_css": "30px"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTUiH0",
        "default_name": "Group I",
        "elements": {
          "bTHrR": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "display",
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
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -441.5546875,
              "top": -12,
              "width": 100,
              "zindex": 11,
              "font_color": "var(--color_bTkRP4_default)",
              "font_size": 16,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0%",
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
                    "args": 480,
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTiHD1"
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
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "max_width_css": "80%",
                  "min_width_css": "50%"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": 768,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_size": 14,
                  "max_width_css": "100px",
                  "max_height_css": "20px"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTUiM0",
            "default_name": "Text A",
            "name": "Text LLM Model",
            "style": "Text_inter___400___14px___white_"
          },
          "bTkZJ2": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 2,
              "icon": "phosphor bold caret-down",
              "icon_color": "var(--color_bTkRL4_default)",
              "is_visible": true,
              "vertical_centering": true,
              "order": 3,
              "fit_height": false,
              "padding_top": 3,
              "padding_left": 3,
              "single_width": true,
              "min_width_css": "20px",
              "padding_right": 3,
              "single_height": true,
              "min_height_css": "20px",
              "padding_bottom": 3,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Icon",
            "id": "bTkZH2",
            "current_parent": "bTUiH0",
            "default_name": "Icon Z"
          }
        },
        "name": "Group LLM Model",
        "style": "Group_transparent_",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Model Settings",
    "style": "Group_transparent_"
  },
};
