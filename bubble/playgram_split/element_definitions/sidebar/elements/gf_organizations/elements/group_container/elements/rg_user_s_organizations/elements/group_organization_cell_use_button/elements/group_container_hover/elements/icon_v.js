export const icon_v = {
  "properties": {
    "height": 30,
    "width": 30,
    "zindex": 12,
    "icon": "feather check",
    "icon_color": "var(--color_bTkRR4_default)",
    "is_visible": false,
    "vertical_centering": true,
    "order": 3,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "16px",
    "single_height": true,
    "min_height_css": "16px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "current_organization_custom_organization",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTPuf",
  "current_parent": "bTHrb",
  "default_name": "Icon V"
};
