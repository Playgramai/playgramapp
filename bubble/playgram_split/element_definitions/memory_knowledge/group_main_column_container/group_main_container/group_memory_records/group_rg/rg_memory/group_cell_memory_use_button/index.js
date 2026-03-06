import { elements } from './elements.js';

export const Group_Cell_Memory_use_button = {
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
    "group_type": "text",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_bTGzr_default)",
    "order": 2,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "sentinel_team",
        "1": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 16,
    "single_width": false,
    "single_height": false,
    "min_height_css": "60px",
    "padding_bottom": 16,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_right": 10
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 962,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "column_gap": 12
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 540,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "row_gap": 16,
        "column_gap": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNky",
  "current_parent": "bTJFz",
  "default_name": "Group I",
  "name": "Group Cell Memory (use button)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
