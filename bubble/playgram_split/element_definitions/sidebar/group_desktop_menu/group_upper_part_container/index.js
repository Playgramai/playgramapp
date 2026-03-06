import { elements } from './elements.js';

export const Group_Upper_Part_Container = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": -12,
    "width": 0,
    "zindex": 15,
    "vertical_centering": true,
    "order": 1,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "overflow_scroll": false,
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.expand_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
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
      "properties": {
        "padding_top": 0,
        "margin_bottom": 0,
        "container_vert_alignment": "flex-start"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTIej",
  "default_name": "Group X",
  "name": "Group Upper Part Container",
  "style": "Group_transparent_",
};
