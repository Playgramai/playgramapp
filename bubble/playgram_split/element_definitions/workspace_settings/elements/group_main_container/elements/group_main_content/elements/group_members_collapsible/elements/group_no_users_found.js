export const group_no_users_found = {
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 19,
    "is_visible": false,
    "vertical_centering": true,
    "order": 9,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 4,
    "fit_height": true,
    "padding_left": 7,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdVj1"
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
  "type": "Group",
  "id": "bTdVh1",
  "default_name": "Group C",
  "elements": {
    "bTJIX": {
      "properties": {
        "text": {
          "entries": {
            "0": "No users found"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -112,
        "width": 100,
        "zindex": 16,
        "order": 2,
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
      "id": "bTdVi1",
      "default_name": "Text D",
      "name": "Text No users found",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "name": "Group No users found",
  "style": "Group_transparent_"
};
