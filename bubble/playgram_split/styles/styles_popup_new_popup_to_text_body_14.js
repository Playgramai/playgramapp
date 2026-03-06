export const styles_popup_new_popup_to_text_body_14 = {
  "Popup_new_popup_": {
    "display": "New Popup",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 16,
      "padding_left": 16,
      "greyout_color": "rgba(var(--color_bTkRJ4_default_rgb), 0.7)",
      "padding_right": 16,
      "padding_bottom": 16
    },
    "type": "Popup",
    "id": "Popup_new_popup_"
  },
  "Popup_new_popup_no_paddings_": {
    "display": "New Popup No Paddings",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 16,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "vertical_centering": true,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 0,
      "greyout_blur": 2,
      "padding_left": 0,
      "greyout_color": "rgba(0,0,0,0.7)",
      "padding_right": 0,
      "padding_bottom": 0
    },
    "states": {
      "bTtnj0": {
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
          "bgcolor": "var(--color_background_default)"
        },
        "type": "State"
      }
    },
    "type": "Popup",
    "id": "Popup_new_popup_no_paddings_"
  },
  "Popup_standard_popup_": {
    "display": "Standard",
    "properties": {
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "padding_top": 16,
      "greyout_blur": 2,
      "padding_left": 16,
      "greyout_color": "rgba(0,0,0,0.7)",
      "padding_right": 16,
      "padding_bottom": 16
    },
    "states": {
      "bTupX2": {
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
          "bgcolor": "var(--color_background_default)"
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      }
    },
    "type": "Popup",
    "id": "Popup_standard_popup_"
  },
  "RadioButtons_standard_radio_": {
    "display": "Standard",
    "properties": {
      "font_face": "var(--font_default):::400",
      "font_color": "var(--color_text_default)",
      "font_size": 16,
      "color": "primary",
      "font_family": "var(--font_default)",
      "font_weight": "400",
      "computed_value": "text"
    },
    "states": {
      "bTGyR": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_valid",
            "is_slidable": false
          },
          "type": "ThisElement"
        },
        "properties": {
          "font_color": "var(--color_destructive_default)"
        },
        "type": "State"
      }
    },
    "type": "RadioButtons",
    "id": "RadioButtons_standard_radio_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "RepeatingGroup_dividers_": {
    "display": "Dividers",
    "properties": {
      "separator_color": "var(--color_bTHBQ_default)",
      "separator_style": "solid"
    },
    "type": "RepeatingGroup",
    "id": "RepeatingGroup_dividers_"
  },
  "RepeatingGroup_transparent_": {
    "display": "Transparent",
    "properties": {
      "separator_style": "none"
    },
    "type": "RepeatingGroup",
    "id": "RepeatingGroup_transparent_"
  },
  "Shape_standard_shape_": {
    "display": "Standard",
    "properties": {
      "border_roundness": 0,
      "bgcolor": "var(--color_bTHBR_default)"
    },
    "type": "Shape",
    "id": "Shape_standard_shape_"
  },
  "SliderInput_slider_range_": {
    "display": "Range",
    "properties": {
      "border_color": "var(--color_bTGzq_default)",
      "range_type": "range",
      "handle_color": "var(--color_primary_default)",
      "background_color": "var(--color_bTGzp_default)",
      "range_area_color": "var(--color_bTGzq_default)"
    },
    "states": {
      "bTHCe": {
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
          "handle_color": "var(--color_bTHAC_default)"
        },
        "type": "State"
      }
    },
    "type": "SliderInput",
    "id": "SliderInput_slider_range_"
  },
  "SliderInput_standard_slider_": {
    "display": "Single",
    "properties": {
      "border_color": "var(--color_bTGzq_default)",
      "range_type": "simple",
      "handle_color": "var(--color_primary_default)",
      "background_color": "var(--color_bTGzq_default)",
      "range_area_color": "rgba(var(--color_primary_default_rgb), 0.2)"
    },
    "states": {
      "bTHCf": {
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
          "handle_color": "var(--color_bTHAC_default)"
        },
        "type": "State"
      }
    },
    "type": "SliderInput",
    "id": "SliderInput_standard_slider_"
  },
  "Text_body_12_": {
    "display": "Body 12",
    "properties": {
      "font_color": "var(--color_text_default)",
      "font_size": 12,
      "line_height": 1.4,
      "vertical_centering": true
    },
    "type": "Text",
    "id": "Text_body_12_"
  },
  "Text_body_14_": {
    "display": "Body 14",
    "properties": {
      "font_color": "var(--color_text_default)",
      "line_height": 1.4,
      "vertical_centering": true
    },
    "states": {
      "bTHCj": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "breakpoint_id": "built-in-mobile"
              },
              "type": "Breakpoint",
              "is_slidable": false
            },
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "font_size": 12
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "Text_body_14_"
  },
};
