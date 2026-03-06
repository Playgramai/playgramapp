import { elements } from './elements/index.js';

export const group_show_hide = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": -76,
    "width": 0,
    "zindex": 3,
    "border_roundness": 10,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(255,255,255,0)",
    "order": 2,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "collapseExpand"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTHpr",
  "default_name": "Group C",
  "name": "Group Show/Hide",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
