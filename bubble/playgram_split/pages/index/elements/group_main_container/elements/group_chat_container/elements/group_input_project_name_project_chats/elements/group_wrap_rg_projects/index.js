import { elements } from './elements/index.js';

export const group_wrap_rg_projects = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 7,
    "top": 55,
    "width": 0,
    "zindex": 17,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 0,
    "is_visible": false,
    "vertical_centering": true,
    "border_style": "none",
    "order": 9,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "chats-wrap"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 0,
    "margin_right": 0,
    "single_width": false,
    "margin_bottom": -200,
    "max_width_css": "780px",
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "padding_bottom": 0,
    "horiz_alignment": "center",
    "container_layout": "column",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUif0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdn0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": "true",
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "properties": {
                      "parameter_name": {
                        "entries": {
                          "0": "new_chat"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "GetParamFromUrl"
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
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
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "margin_top": 0,
        "padding_left": 8,
        "padding_right": 8
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTkLK",
  "default_name": "Group CZZZZ",
  "name": "Group Wrap RG Projects",
  "style": "Group_transparent_",
};
