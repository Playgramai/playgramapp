export const group_close_acc_sett = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 33,
    "is_visible": false,
    "vertical_centering": true,
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 8,
    "margin_right": 8,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiFw",
  "default_name": "Group Z",
  "elements": {
    "bTqLJ2": {
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
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "32px",
        "single_height": true,
        "min_height_css": "32px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-end",
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
      "id": "bTqLD2",
      "current_parent": "bTiFw",
      "default_name": "Group FZ",
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
          "id": "bTqLF2",
          "default_name": "Icon J",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group close mob",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Close Acc Sett",
  "style": "Group_transparent_"
};
