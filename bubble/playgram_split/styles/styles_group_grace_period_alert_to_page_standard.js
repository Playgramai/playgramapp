export const styles_group_grace_period_alert_to_page_standard = {
  "Group_grace_period_alert_": {
    "display": "Grace period alert",
    "properties": {
      "border_color": "var(--color_bTyPt0_default)",
      "border_roundness": 16,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHBc_default)",
      "border_style": "solid",
      "padding_top": 16,
      "padding_left": 16,
      "padding_right": 16,
      "padding_bottom": 16
    },
    "states": {
      "bTyRT0": {
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
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Group",
    "id": "Group_grace_period_alert_"
  },
  "Group_new_image_": {
    "display": "New Image",
    "properties": {
      "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
      "border_roundness": 12,
      "vertical_centering": true,
      "background_style": "none",
      "background_image": {
        "type": "TextExpression"
      },
      "border_style": "solid"
    },
    "type": "Group",
    "id": "Group_new_image_"
  },
  "Group_outline_": {
    "display": "Outline",
    "properties": {
      "border_color": "var(--color_bTHBR_default)",
      "border_roundness": 8,
      "border_width": 2,
      "bgcolor": "var(--color_surface_default)",
      "border_style": "solid"
    },
    "type": "Group",
    "id": "Group_outline_"
  },
  "Group_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 8,
      "boxshadow_style": "outset",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "Group",
    "id": "Group_shadow_"
  },
  "Group_transparent_": {
    "display": "Transparent",
    "properties": {
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 0,
      "background_style": "none",
      "border_style": "none"
    },
    "type": "Group",
    "id": "Group_transparent_"
  },
  "GroupFocus_filled_": {
    "display": "Filled",
    "properties": {
      "border_roundness": 8,
      "bgcolor": "var(--color_bTHBQ_default)"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_filled_"
  },
  "GroupFocus_outline_": {
    "display": "Outline",
    "properties": {
      "border_color": "var(--color_bTHBR_default)",
      "border_roundness": 8,
      "border_width": 2,
      "bgcolor": "var(--color_surface_default)",
      "border_style": "solid"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_outline_"
  },
  "GroupFocus_shadow_": {
    "display": "Shadow",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 8,
      "boxshadow_style": "outset",
      "bgcolor": "var(--color_surface_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)"
    },
    "type": "GroupFocus",
    "id": "GroupFocus_shadow_"
  },
  "HTML_default_": {
    "display": "Standard",
    "properties": {
      "padding_top": 0,
      "padding_left": 0,
      "padding_right": 0,
      "padding_bottom": 0
    },
    "type": "HTML",
    "id": "HTML_default_"
  },
  "Icon_standard_icon_": {
    "display": "Standard",
    "properties": {
      "icon_color": "var(--color_primary_default)",
      "padding_top": 5,
      "padding_left": 5,
      "padding_right": 5,
      "padding_bottom": 5
    },
    "type": "Icon",
    "id": "Icon_standard_icon_"
  },
  "Image_standard_image_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 4,
      "border_style": "none"
    },
    "type": "Image",
    "id": "Image_standard_image_"
  },
  "Link_link_light_primary_": {
    "display": "Link Light Primary",
    "properties": {
      "border_roundness": 0,
      "font_alignment": "center",
      "font_color": "var(--color_primary_default)",
      "font_size": 16,
      "line_height": 1.4,
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_primary_default)",
      "font_weight": "600",
      "padding_left": 0,
      "padding_right": 0
    },
    "states": {
      "bTHCL": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_clickable",
                  "is_slidable": false
                },
                "type": "ThisElement",
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
          "underline": true
        },
        "type": "State"
      },
      "bTHCM": {
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
          "opacity": 25
        },
        "type": "State"
      }
    },
    "type": "Link",
    "id": "Link_link_light_primary_"
  },
  "MultiLineInput_simple_transparent_": {
    "display": "Simple Transparent",
    "properties": {
      "font_face": "var(--font_default):::regular",
      "border_color": "var(--color_bTGzr_default)",
      "border_roundness": 12,
      "border_width": 1,
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 14,
      "line_height": 1.4,
      "vertical_centering": true,
      "background_style": "none",
      "border_style": "none",
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "padding_top": 12,
      "padding_left": 12,
      "padding_right": 12,
      "padding_bottom": 12,
      "placeholder_color": "var(--color_bTkRL4_default)"
    },
    "states": {
      "bTvlX1": {
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
          "font_color": "var(--color_bTsrq2_default)",
          "placeholder_color": "var(--color_bTsrp2_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "MultiLineInput",
    "id": "MultiLineInput_simple_transparent_",
    "transitions": {
      "border_color": {
        "fn": "ease",
        "duration": 200
      },
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "Page_standard_": {
    "display": "Standard",
    "properties": {
      "backdrop_bgcolor": "var(--color_background_default)",
      "backdrop_background_style": "bgcolor"
    },
    "type": "Page",
    "id": "Page_standard_"
  },
};
