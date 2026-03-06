export const text_z = {
  "properties": {
    "text": {
      "entries": {
        "0": "No files in this project"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 2,
    "is_visible": false,
    "order": 15,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 20,
    "single_width": false,
    "margin_bottom": 20,
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
          "element_id": "bTUjV0"
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
  "id": "bTUjU0",
  "current_parent": "bTUUt",
  "default_name": "Text Z",
  "style": "Text_inter___400___12px____afafaf_"
};
