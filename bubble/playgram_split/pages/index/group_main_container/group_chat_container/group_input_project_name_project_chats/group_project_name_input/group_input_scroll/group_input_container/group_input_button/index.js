import { elements } from './elements.js';

export const Group_input_button = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": -50,
    "width": 0,
    "zindex": 3,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "border_roundness": 38,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTpVj3_default)",
    "border_style": "solid",
    "order": 1,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "chat-input"
      },
      "type": "TextExpression"
    },
    "column_gap": 0,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "785px",
    "single_height": false,
    "min_height_css": "55px",
    "horiz_alignment": "center",
    "border_color_top": "rgba(235,235,235,1)",
    "border_style_top": "solid",
    "container_layout": "relative",
    "four_border_style": false,
    "border_roundness_left": 12,
    "border_roundness_right": 0,
    "border_roundness_bottom": 12,
    "container_horiz_alignment": "flex-end"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": 30,
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUeQ0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUed0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "greater_or_equal_than",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_height",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUec0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_roundness": 28
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_color": "rgba(var(--color_bTtSL3_default_rgb), 0.08)",
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUeL0",
  "default_name": "Group B",
  "name": "Group input + button",
};
