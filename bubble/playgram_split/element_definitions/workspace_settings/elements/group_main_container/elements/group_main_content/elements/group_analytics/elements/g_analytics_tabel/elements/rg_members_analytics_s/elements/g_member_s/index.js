import { elements } from './elements/index.js';

export const g_member_s = {
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
    "order": 14,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "42px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "border_color_top": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#e5e7eb"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#2a2a2d"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "dark_mode_boolean",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "border_style_top": "solid",
    "container_layout": "row",
    "four_border_style": true,
    "border_roundness_top": 0,
    "collapse_when_hidden": true,
    "border_roundness_right": 0
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#f2f3f5"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#2a2a2d\u0441\u0441"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
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
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": 1,
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTleC1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": true
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 980,
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
  "id": "bTfQR0",
  "current_parent": "bTJFz",
  "default_name": "Group X",
  "name": "G Member[S]",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
