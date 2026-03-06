export const popup_change_role = {
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "group_type": "custom.workspace",
    "order": 3,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "450px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Popup",
  "id": "bTJJL",
  "current_parent": "bTIml0",
  "default_name": "Popup A",
  "elements": {
    "bTINR": {
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
      "id": "bTJJM",
      "default_name": "Group C",
      "elements": {
        "bTINS": {
          "properties": {
            "text": {
              "entries": {
                "0": "Upgrade to Admin"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -16,
            "width": 100,
            "zindex": 11,
            "font_color": "var(--color_bTkRP4_default)",
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
          "id": "bTJJN",
          "current_parent": "bTIMu",
          "default_name": "Text B",
          "style": "Text_inter___400___18px___white_"
        },
        "bToPV1": {
          "properties": {
            "height": 28,
            "left": 0,
            "top": 0,
            "width": 28,
            "zindex": 13,
            "border_color": "rgba(42,42,45,1)",
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
                "border_color": "var(--color_bTkRL4_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bToPP1",
          "current_parent": "bTJJM",
          "default_name": "Group D",
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
                }
              },
              "type": "Icon",
              "id": "bToPU1",
              "default_name": "Icon C",
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
    },
    "bTINx": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 112,
        "width": 0,
        "zindex": 16,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 10,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 16,
        "fit_height": true,
        "margin_top": 8,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTJJS",
      "default_name": "Group C",
      "elements": {
        "bTIOB": {
          "properties": {
            "text": {
              "entries": {
                "0": "Cancel"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -16,
            "top": -112,
            "width": 150,
            "zindex": 15,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTJJT",
          "default_name": "Button A",
          "style": "Button_subtle_new_"
        },
        "bTIOC": {
          "properties": {
            "text": {
              "entries": {
                "0": "Upgrade to ",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.delete_memories__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJJL"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -16,
            "top": -112,
            "width": 150,
            "zindex": 15,
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTJJX",
          "current_parent": "bTIMu",
          "default_name": "Button A",
          "name": "Button Change Role",
          "style": "Button_primary_new_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    },
    "bTJLo": {
      "properties": {
        "text": {
          "entries": {
            "0": "Are you sure you want to upgrade ",
            "1": {
              "next": {
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": " to ",
            "3": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.delete_memories__",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJJL"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": " role?"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -60,
        "width": 100,
        "zindex": 11,
        "font_color": "var(--color_bTkRP4_default)",
        "font_size": 14,
        "order": 4,
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
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "user"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.delete_memories__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTJJL"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Are you sure you want to downgrade ",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": " to User role?"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTJJj",
      "current_parent": "bTIOD",
      "default_name": "Text B",
      "style": "Text_inter___400___16px___white_"
    }
  },
  "name": "Popup Change Role",
  "style": "Popup_new_popup_",
  "custom_states": {
    "delete_memories__": {
      "display": "mode",
      "value": "option.user_type__os_",
      "make_static": true
    }
  },
};
