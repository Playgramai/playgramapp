import { elements } from './elements/index.js';

export const group_desktop_menu = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": -12,
    "width": 0,
    "zindex": 18,
    "is_visible": true,
    "vertical_centering": true,
    "order": 1,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "100%",
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "space-between"
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
        "max_width_css": "60px",
        "min_width_css": "60px",
        "max_height_css": "63px",
        "min_height_css": "63px"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.open__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "60px",
        "min_width_css": "60px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bThZl",
  "default_name": "Group EZZ",
  "name": "Group Desktop Menu",
  "style": "Group_transparent_",
};
