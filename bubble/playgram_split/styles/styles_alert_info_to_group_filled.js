export const styles_alert_info_to_group_filled = {
  "Alert_info_": {
    "display": "Info",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_bTyPt0_default)",
      "border_roundness": 16,
      "border_width": 1,
      "font_color": "var(--color_primary_default)",
      "font_size": 14,
      "line_height": 1.2,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTGzq_default)",
      "border_style": "solid",
      "font_family": "var(--font_default)",
      "font_weight": "500",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "states": {
      "bTyRJ0": {
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
          "border_color": "var(--color_bTyRN0_default)",
          "bgcolor": "var(--color_surface_default)"
        },
        "type": "State"
      }
    },
    "type": "Alert",
    "id": "Alert_info_"
  },
  "Alert_success_": {
    "display": "Success",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_primary_default)",
      "border_roundness": 4,
      "border_width": 1,
      "font_color": "var(--color_success_default)",
      "font_size": 14,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTHAm_default)",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "600",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "type": "Alert",
    "id": "Alert_success_"
  },
  "Alert_warning_": {
    "display": "Warning",
    "properties": {
      "font_face": "var(--font_default):::600",
      "border_color": "var(--color_primary_default)",
      "border_roundness": 4,
      "border_width": 1,
      "font_color": "var(--color_destructive_default)",
      "font_size": 14,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTHAV_default)",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "600",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12
    },
    "type": "Alert",
    "id": "Alert_warning_"
  },
  "Button_subtle_new_copy_": {
    "display": "Link new",
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::600",
      "border_roundness": 12,
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 14,
      "icon_color": "var(--color_bTkRL4_default)",
      "line_height": 1.2,
      "letter_spacing": 0,
      "background_style": "bgcolor",
      "bgcolor": "rgba(27,27,29,0)",
      "icon_size": 20,
      "button_gap": 12,
      "font_family": "var(--font_default)",
      "font_weight": "500",
      "padding_top": 8,
      "padding_left": 10,
      "padding_right": 10,
      "padding_bottom": 8
    },
    "states": {
      "bTnVY1": {
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
          "font_color": "rgba(209,209,209,1)",
          "icon_color": "rgba(209,209,209,1)",
          "bgcolor": "rgba(27,27,29,1)"
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
          "icon_color": "rgba(112,112,114,1)"
        },
        "type": "State"
      }
    },
    "type": "Button",
    "id": "Button_subtle_new_copy_"
  },
  "Checkbox_standard_checkbox_": {
    "display": "Standard",
    "properties": {
      "font_face": "var(--font_default):::400",
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "line_height": 1.4,
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTGtb": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "type": "ThisElement"
        },
        "properties": {
          "font_color": "var(--color_bTHBd_default)"
        },
        "type": "State"
      },
      "bTHBp": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_valid",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "font_color": "var(--color_destructive_default)"
        },
        "type": "State"
      }
    },
    "type": "Checkbox",
    "id": "Checkbox_standard_checkbox_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "FloatingGroup_filled_": {
    "display": "Filled",
    "properties": {
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "FloatingGroup",
    "id": "FloatingGroup_filled_"
  },
  "FloatingGroup_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "boxshadow_style": "outset",
      "background_style": "bgcolor",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "FloatingGroup",
    "id": "FloatingGroup_shadow_"
  },
  "GoogleMap_standard_map_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4
    },
    "type": "GoogleMap",
    "id": "GoogleMap_standard_map_"
  },
  "Group_border_": {
    "display": "border",
    "properties": {
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 20,
      "vertical_centering": true,
      "background_style": "none",
      "border_style": "solid",
      "padding_top": 24,
      "padding_left": 24,
      "padding_right": 24,
      "padding_bottom": 24
    },
    "type": "Group",
    "id": "Group_border_"
  },
  "Group_dark_gf___shadow_": {
    "display": "Dark bg + shadow",
    "properties": {
      "boxshadow_horizontal": 2,
      "border_roundness": 10,
      "boxshadow_style": "outset",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(42,42,45,1)",
      "boxshadow_blur": 10,
      "boxshadow_color": "rgba(0,0,0,0.25)",
      "boxshadow_spread": 0,
      "padding_top": 8,
      "padding_left": 8,
      "padding_right": 8,
      "padding_bottom": 8
    },
    "type": "Group",
    "id": "Group_dark_gf___shadow_"
  },
  "Group_error_": {
    "display": "Error alert",
    "properties": {
      "border_color": "rgba(var(--color_bTGzw_default_rgb), 0.3)",
      "border_roundness": 12,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.1)",
      "border_style": "solid",
      "padding_top": 16,
      "padding_left": 16,
      "padding_bottom": 16
    },
    "type": "Group",
    "id": "Group_error_"
  },
  "Group_filled_": {
    "display": "Filled",
    "properties": {
      "border_roundness": 8,
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "Group",
    "id": "Group_filled_"
  },
};
