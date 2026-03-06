export const group_dot = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": -10,
    "width": 280,
    "zindex": 6,
    "boxshadow_horizontal": 0,
    "border_roundness": 100,
    "boxshadow_style": "outset",
    "boxshadow_vertical": 0,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(103,177,193,1)",
    "boxshadow_blur": 12,
    "boxshadow_color": "rgba(103,177,193,1)",
    "boxshadow_spread": 0,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 12,
    "margin_left": 34,
    "single_width": true,
    "min_width_css": "8px",
    "single_height": true,
    "min_height_css": "8px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "ab",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": 40,
            "type": "Message",
            "name": "greater_or_equal_than",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_height",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUec0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "vert_alignment": "flex-start"
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
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUik0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "2": {
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
        "is_slidable": false
      },
      "properties": {
        "margin_left": 24
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTkRh4",
  "default_name": "Group DZZZZ",
  "name": "Group dot",
  "style": "Group_transparent_"
};
