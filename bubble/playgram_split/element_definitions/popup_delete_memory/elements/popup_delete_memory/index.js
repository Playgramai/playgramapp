export const popup_delete_memory = {
  "properties": {
    "height": 320,
    "left": 20,
    "top": 20,
    "width": 320,
    "zindex": 14,
    "group_type": "text",
    "order": 11,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "450px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTOEj0",
  "current_parent": "bTMGw",
  "default_name": "Popup E",
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
      "id": "bTOEk0",
      "default_name": "Group X",
      "elements": {
        "bTINS": {
          "properties": {
            "text": {
              "entries": {
                "0": "Delete memory?"
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
          "id": "bTOEl0",
          "current_parent": "bTIMu",
          "default_name": "Text P",
          "style": "Text_inter___400___18px___white_"
        },
        "bToOX1": {
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
          "id": "bToOR1",
          "current_parent": "bTOEk0",
          "default_name": "Group A",
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
              "id": "bToOT1",
              "default_name": "Icon A",
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
        "group_type": "text",
        "vertical_centering": true,
        "order": 9,
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
      "id": "bTOEq0",
      "default_name": "Group X",
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
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTOEx0"
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
          "id": "bTOEr0",
          "default_name": "Button F",
          "style": "Button_subtle_new_"
        },
        "bTNzf": {
          "properties": {
            "height": 36,
            "left": 64.10900000000004,
            "top": 0,
            "width": 135.89099999999996,
            "zindex": 16,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "text",
            "vertical_centering": true,
            "order": 4,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTOEv0",
          "default_name": "Group K",
          "elements": {
            "bTNzg": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Delete memory"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": 0,
                "top": 0,
                "width": 150,
                "zindex": 1,
                "order": 4,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "135px",
                "single_height": false,
                "min_height_css": "36px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "cb",
                "collapse_when_hidden": true
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
                      "element_id": "bTOEx0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "text": {
                      "entries": {
                        "0": ""
                      },
                      "type": "TextExpression"
                    },
                    "button_disabled": false
                  },
                  "type": "State"
                }
              },
              "type": "Button",
              "id": "bTOEw0",
              "current_parent": "bTIMu",
              "default_name": "Button F",
              "name": "Button Delete Memory",
              "style": "Button_subtle_new_copy_copy_"
            },
            "bTNzm": {
              "properties": {
                "height": 200,
                "left": 0,
                "top": 0,
                "width": 200,
                "zindex": 2,
                "floating_reference": "top",
                "custom_id": "bTLgB",
                "is_visible": false,
                "max_width": 100,
                "min_width": 0,
                "fit_height": true,
                "param_bTUaI": {
                  "entries": {
                    "0": "#ffffff"
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
              "id": "bTOEx0",
              "default_name": "[Element] Loader B",
              "name": "[Element] Loader Delete memory"
            }
          },
          "name": "Group Parent Button/Loader",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    },
    "bTIue0": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 60,
        "width": 0,
        "zindex": 18,
        "vertical_centering": true,
        "order": 4,
        "row_gap": 10,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTOFB0",
      "default_name": "Group X",
      "elements": {
        "bTIuj0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Are you sure you want to delete this memory from the team?"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -60,
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
          "id": "bTOFC0",
          "current_parent": "bTIOD",
          "default_name": "Text P",
          "style": "Text_inter___400___16px___white_"
        }
      },
      "name": "Group Column Container",
      "style": "Group_transparent_"
    }
  },
  "name": "Popup Delete Memory",
  "style": "Popup_new_popup_",
  "custom_states": {
    "delete_memories__": {
      "display": "custom_memory?",
      "value": "boolean"
    }
  },
};
