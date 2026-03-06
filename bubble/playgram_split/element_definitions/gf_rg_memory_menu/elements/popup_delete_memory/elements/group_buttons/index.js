export const group_buttons = {
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
  "id": "bTOtd0",
  "default_name": "Group K",
  "elements": {
    "bTIOB": {
      "properties": {
        "text": {
          "entries": {
            "0": "Cancel"
          },
          "type": "TextExpression"
        },
        "bold": false,
        "font_face": "var(--font_default):::600",
        "height": 44,
        "left": -16,
        "top": -112,
        "width": 150,
        "zindex": 15,
        "border_roundness": 12,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "icon_color": "var(--color_bTkRL4_default)",
        "line_height": 1.2,
        "letter_spacing": 0,
        "background_style": "bgcolor",
        "bgcolor": "rgba(27,27,29,1)",
        "order": 3,
        "fit_width": true,
        "icon_size": 20,
        "unique_id": {
          "entries": {
            "0": "btn-cancel-delete-memory"
          },
          "type": "TextExpression"
        },
        "button_gap": 12,
        "fit_height": true,
        "font_family": "var(--font_default)",
        "font_weight": "500",
        "padding_top": 8,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "60px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
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
              "element_id": "bTOtn0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        },
        "bTnVY1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "hover btn-cancel-delete-memory",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTvuv2",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
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
            "font_color": "rgba(209,209,209,1)",
            "bgcolor": "rgba(38,38,41,1)"
          },
          "type": "State"
        },
        "bTnVZ1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_clickable",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "rgba(112,112,114,1)",
            "bgcolor": "rgba(42,42,45,1)"
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTOth0",
      "default_name": "Button B",
      "transitions": {
        "font_color": {
          "fn": "ease",
          "duration": 200
        },
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
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
      "id": "bTOti0",
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
            "bold": false,
            "font_face": "var(--font_default):::600",
            "height": 44,
            "left": 0,
            "top": 0,
            "width": 150,
            "zindex": 1,
            "border_roundness": 12,
            "font_color": "var(--color_bTGzw_default)",
            "font_size": 14,
            "icon_color": "var(--color_bTGzw_default)",
            "line_height": 1.2,
            "letter_spacing": 0,
            "background_style": "bgcolor",
            "bgcolor": "rgba(180,35,24,0.12)",
            "order": 4,
            "fit_width": true,
            "icon_size": 20,
            "unique_id": {
              "entries": {
                "0": "btn-delete-delete-memory"
              },
              "type": "TextExpression"
            },
            "button_gap": 12,
            "fit_height": true,
            "font_family": "var(--font_default)",
            "font_weight": "500",
            "padding_top": 8,
            "padding_left": 10,
            "single_width": false,
            "min_width_css": "135px",
            "padding_right": 10,
            "single_height": false,
            "min_height_css": "36px",
            "padding_bottom": 8,
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
                  "element_id": "bTOtn0"
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
                "button_disabled": true
              },
              "type": "State"
            },
            "bTnVY1": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": "hover btn-delete-delete-memory",
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "param_bTvuv2",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTOpg0"
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
                "font_color": "rgba(253,162,155,1)",
                "bgcolor": "rgba(180,35,24,0.24)"
              },
              "type": "State"
            },
            "bTnVZ1": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "isnt_clickable",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "properties": {
                "font_color": "rgba(112,112,114,1)",
                "bgcolor": "rgba(42,42,45,1)"
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTOtj0",
          "current_parent": "bTIMu",
          "default_name": "Button B",
          "name": "Button Delete Memory",
          "transitions": {
            "font_color": {
              "fn": "ease",
              "duration": 200
            },
            "background_style": {
              "fn": "ease",
              "duration": 200
            }
          }
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
          "id": "bTOtn0",
          "default_name": "[Element] Loader A",
          "name": "[Element] Loader Delete memory",
          "custom_definition_name": "[Element] Loader"
        }
      },
      "name": "Group Parent Button/Loader",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_",
};
