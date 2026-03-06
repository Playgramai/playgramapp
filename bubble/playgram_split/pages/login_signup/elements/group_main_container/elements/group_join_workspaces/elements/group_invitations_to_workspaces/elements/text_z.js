export const text_z = {
  "properties": {
    "text": {
      "entries": {
        "0": "You don't have any workspace invitations at the moment."
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 10,
    "top": 10,
    "width": 100,
    "zindex": 23,
    "is_visible": false,
    "order": 6,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 32,
    "single_width": false,
    "margin_bottom": 32,
    "max_width_css": "400px",
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
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
          "element_id": "bTQGr0"
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
  "id": "bTQYC0",
  "current_parent": "bTQGm0",
  "default_name": "Text Z",
  "style": "Text_inter___400___14px____afafaf_"
};
