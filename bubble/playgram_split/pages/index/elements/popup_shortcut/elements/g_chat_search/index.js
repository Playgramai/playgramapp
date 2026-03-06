import { elements } from './elements/index.js';

export const g_chat_search = {
  "elements": elements,
  "properties": {
    "height": 320,
    "left": 10,
    "top": 10,
    "width": 320,
    "border_roundness": 10,
    "boxshadow_style": "none",
    "is_visible": false,
    "bgcolor": "rgba(42,42,45,1)",
    "boxshadow_color": "rgba(0,0,0,0.14)",
    "order": 22,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 12,
    "single_width": false,
    "max_width_css": "560px",
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
    "overflow_scroll": false,
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_ChatSearch",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "isnt_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTulc1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulJ1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
  "type": "Group",
  "id": "bTukm1",
  "current_parent": "bTUdV0",
  "default_name": "Group P",
  "name": "G - chat Search",
};
