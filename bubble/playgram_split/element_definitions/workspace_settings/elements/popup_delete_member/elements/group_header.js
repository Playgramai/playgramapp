export const group_header = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 16,
    "width": 0,
    "zindex": 13,
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTdYJ1",
  "default_name": "Group E",
  "elements": {
    "bTINS": {
      "properties": {
        "text": {
          "entries": {
            "0": "Delete member?"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -16,
        "width": 100,
        "zindex": 11,
        "order": 1,
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
      "type": "Text",
      "id": "bTdYK1",
      "current_parent": "bTIMu",
      "default_name": "Text F",
      "style": "Text_inter___400___18px___white_"
    },
    "bToQh1": {
      "properties": {
        "height": 28,
        "left": 0,
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
        "unique_id": {
          "entries": {
            "0": "btn-close-delete-member"
          },
          "type": "TextExpression"
        },
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bToQb1",
      "current_parent": "bTdYJ1",
      "default_name": "Group OZ",
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
                "icon_color": "var(--color_bTkRX4_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bToQd1",
          "default_name": "Icon M",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group Close Delete Project",
      "style": "Group_transparent_",
      "transitions": {
        "border_color": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Header",
  "style": "Group_transparent_"
};
