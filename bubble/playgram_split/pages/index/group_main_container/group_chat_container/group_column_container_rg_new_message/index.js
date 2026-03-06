import { elements } from './elements.js';

export const Group_Column_Container_RG_New_Message = {
  "elements": elements,
  "properties": {
    "height": 467.297,
    "left": 0,
    "top": 0,
    "width": 830,
    "zindex": 3,
    "vertical_centering": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "parentContainer"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "margin_left": 10,
    "margin_right": 10,
    "single_width": false,
    "margin_bottom": 100,
    "single_height": false,
    "padding_bottom": 0,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "container_layout": "column",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "not_logged_in",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 150
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 130
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTWFR0",
  "default_name": "Group TZ",
  "name": "Group Column Container RG/New Message",
  "style": "Group_transparent_",
};
