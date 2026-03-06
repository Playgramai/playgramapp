export const icon_edit_project = {
  "properties": {
    "height": 30,
    "left": 212,
    "top": 9,
    "width": 30,
    "zindex": 3,
    "icon": "feather edit",
    "border_roundness": 20,
    "icon_color": "var(--color_bTGzv_default)",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(255,255,255,0)",
    "order": 6,
    "fit_height": false,
    "padding_top": 6,
    "padding_left": 6,
    "single_width": true,
    "min_width_css": "26px",
    "padding_right": 6,
    "single_height": true,
    "min_height_css": "26px",
    "padding_bottom": 6,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
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
        "icon_color": "var(--color_primary_contrast_default)",
        "bgcolor": "var(--color_bTGzr_default)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 1024,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP",
                "name": "Current Page Width"
              },
              "type": "PageData",
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
        "properties": {
          "element_id": "bTIJR0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTJVe",
  "default_name": "Icon Z",
  "name": "Icon Edit Project"
};
