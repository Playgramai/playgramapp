export const group_header = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 16,
    "width": 0,
    "zindex": 13,
    "vertical_centering": true,
    "order": 2,
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
  "id": "bTUjO0",
  "default_name": "Group AZZZ",
  "elements": {
    "bTINS": {
      "properties": {
        "text": {
          "entries": {
            "0": "Project files"
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
      "id": "bTUjP0",
      "current_parent": "bTIMu",
      "default_name": "Text KZ",
      "name": "Text Instructions",
      "style": "Text_inter___400___18px___white_"
    },
    "bTpWe4": {
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
      "id": "bTpWY4",
      "current_parent": "bTUjO0",
      "default_name": "Group TZZZZ",
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
          "type": "Icon",
          "id": "bTpWd4",
          "default_name": "Icon G",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group close files",
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
