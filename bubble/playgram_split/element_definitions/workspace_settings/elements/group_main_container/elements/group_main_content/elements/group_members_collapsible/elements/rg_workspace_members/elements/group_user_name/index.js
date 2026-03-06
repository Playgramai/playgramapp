import { elements } from './elements/index.js';

export const group_user_name = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 0,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 2,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "padding_bottom": 6,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_right": 10
  },
  "states": {
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
        "is_slidable": false
      },
      "properties": {
        "padding_top": 12,
        "padding_left": 12,
        "padding_right": 12,
        "padding_bottom": 12
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTdVn1",
  "current_parent": "bTJFz",
  "default_name": "Group C",
  "name": "Group User Name",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
