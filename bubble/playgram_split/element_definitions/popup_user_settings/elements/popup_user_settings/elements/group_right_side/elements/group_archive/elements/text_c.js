export const text_c = {
  "properties": {
    "text": {
      "entries": {
        "0": "You have no archived chats."
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": -16,
    "top": -64,
    "width": 100,
    "zindex": 31,
    "is_visible": false,
    "order": 3,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
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
          "element_id": "bTLDE"
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
  "id": "bTLCr",
  "default_name": "Text C",
  "style": "Text_inter___400___14px____afafaf_"
};
