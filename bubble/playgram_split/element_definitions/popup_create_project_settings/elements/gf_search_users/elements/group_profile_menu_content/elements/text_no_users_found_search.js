export const text_no_users_found_search = {
  "properties": {
    "text": {
      "entries": {
        "0": "No users found"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 16,
    "is_visible": false,
    "order": 3,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 10,
    "single_width": false,
    "margin_bottom": 10,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "center",
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
          "element_id": "bTJpu"
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
  "type": "Text",
  "id": "bTJqG",
  "current_parent": "bTJbf",
  "default_name": "Text C",
  "name": "Text No users found search",
  "style": "Text_inter___400___16px___neutral_copy_copy_"
};
