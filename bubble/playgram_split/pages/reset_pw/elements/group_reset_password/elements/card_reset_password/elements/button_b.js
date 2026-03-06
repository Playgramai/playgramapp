export const button_b = {
  "properties": {
    "text": {
      "entries": {
        "0": "Confirm"
      },
      "type": "TextExpression"
    },
    "height": 45,
    "left": 16,
    "top": 227,
    "width": 150,
    "zindex": 6,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "48px",
    "horiz_alignment": "flex-end"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTGyj0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTGyp0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": true
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "bTGyw0",
  "current_parent": "bTJXL0.elements",
  "default_name": "Button B",
  "style": "Button_primary_new_",
  "order": 4
};
