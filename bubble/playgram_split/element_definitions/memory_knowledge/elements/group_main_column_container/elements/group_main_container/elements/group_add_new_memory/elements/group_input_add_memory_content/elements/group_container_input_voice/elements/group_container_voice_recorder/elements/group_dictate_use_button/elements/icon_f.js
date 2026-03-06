export const icon_f = {
  "properties": {
    "height": 30,
    "left": -8,
    "top": -15.1953125,
    "width": 30,
    "zindex": 2,
    "icon": "feather mic",
    "icon_color": "var(--color_bTkRL4_default)",
    "is_visible": false,
    "vertical_centering": true,
    "order": 1,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "20px",
    "single_height": true,
    "min_height_css": "20px",
    "horiz_alignment": "center",
    "nonant_alignment": "ac",
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
        "icon": "feather x"
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
        "icon_color": "var(--color_bTsrp2_default)"
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTchg",
  "default_name": "Icon F"
};
