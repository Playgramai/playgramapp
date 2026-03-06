import { elements } from './elements.js';

export const Group_workspace = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 76,
    "width": 0,
    "zindex": 14,
    "vertical_centering": true,
    "order": 4,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 12,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 40,
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 768,
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
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
      "properties": {
        "max_width_css": "44px",
        "max_height_css": "44px",
        "min_height_css": "44px",
        "container_horiz_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTmSv1",
  "default_name": "Group ZZ",
  "name": "Group workspace",
  "style": "Group_transparent_",
};
