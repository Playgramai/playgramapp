export const icon_delete_search_memory_file = {
  "properties": {
    "height": 30,
    "width": 30,
    "zindex": 4,
    "icon": "feather trash-2",
    "icon_color": "var(--color_bTGzw_default)",
    "is_visible": false,
    "vertical_centering": true,
    "order": 2,
    "fit_height": false,
    "padding_top": 0,
    "padding_left": 0,
    "single_width": true,
    "min_width_css": "18px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "18px",
    "padding_bottom": 0,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAI",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiKz2"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTiaY2",
  "current_parent": "bTNky",
  "default_name": "Icon D",
  "name": "Icon Delete Search Memory File"
};
