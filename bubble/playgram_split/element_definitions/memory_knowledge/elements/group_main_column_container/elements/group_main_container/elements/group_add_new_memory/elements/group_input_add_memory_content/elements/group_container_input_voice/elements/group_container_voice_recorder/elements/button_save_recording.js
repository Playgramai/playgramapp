export const button_save_recording = {
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "height": 15,
    "left": 0,
    "top": 0,
    "width": 37,
    "zindex": 7,
    "icon": "feather check",
    "border_roundness": 20,
    "boxshadow_style": "none",
    "font_color": "var(--color_surface_default)",
    "font_size": 16,
    "icon_color": "rgba(46,46,46,1)",
    "is_visible": false,
    "line_height": 1.5,
    "vertical_centering": true,
    "bgcolor": "var(--color_primary_contrast_default)",
    "order": 3,
    "fit_width": true,
    "icon_size": 18,
    "unique_id": {
      "entries": {
        "0": "enter"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "button_type": "icon",
    "font_weight": "600",
    "padding_left": 0,
    "single_width": true,
    "min_width_css": "30px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "30px",
    "padding_bottom": 0,
    "button_disabled": false,
    "horiz_alignment": "flex-end",
    "nonant_alignment": "cc",
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
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTckm"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
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
        "icon_color": "var(--color_bToSr_default)",
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "bTchl",
  "current_parent": "bTaqz",
  "default_name": "Button C",
  "name": "Button Save Recording",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
