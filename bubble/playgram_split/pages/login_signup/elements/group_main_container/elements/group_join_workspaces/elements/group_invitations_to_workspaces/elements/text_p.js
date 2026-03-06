export const text_p = {
  "properties": {
    "text": {
      "entries": {
        "0": "You have pending invitations to these workspaces:"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 23,
    "font_color": "var(--color_bTkRL4_default)",
    "font_size": 16,
    "order": 3,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 40,
    "max_width_css": "400px",
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
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
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTQHt0",
  "current_parent": "bTQGm0",
  "default_name": "Text P",
  "style": "Text_inter___400___14px____afafaf_"
};
