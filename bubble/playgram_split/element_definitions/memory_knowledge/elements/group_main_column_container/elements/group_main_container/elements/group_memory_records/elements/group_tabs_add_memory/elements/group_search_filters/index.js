import { elements } from './elements/index.js';

export const group_search_filters = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -24,
    "top": -24,
    "width": 0,
    "zindex": 32,
    "vertical_centering": true,
    "order": 1,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "36px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 1440,
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.memory_management_tabs__os_0",
                      "option_value": "project"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.tab_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
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
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "100%",
        "container_horiz_alignment": "flex-start"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 1270,
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
        "min_width_css": "100%",
        "container_horiz_alignment": "flex-start"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNqB",
  "default_name": "Group R",
  "name": "Group Search/Filters",
  "style": "Group_transparent_",
};
