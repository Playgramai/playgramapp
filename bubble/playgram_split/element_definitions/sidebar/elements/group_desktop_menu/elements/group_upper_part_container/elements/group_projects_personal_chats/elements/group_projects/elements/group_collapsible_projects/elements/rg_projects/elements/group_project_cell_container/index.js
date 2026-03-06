import { elements } from './elements/index.js';

export const group_project_cell_container = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_roundness": 0,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 4,
    "fit_height": true,
    "margin_left": 16,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 6,
    "single_height": false,
    "max_height_css": "36px",
    "min_height_css": "36px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "border_color_left": {
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
    "border_style_left": "solid",
    "four_border_style": true,
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "1": {
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
        "border_color_left": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "value": "custom.chat",
                "parameter_name": {
                  "entries": {
                    "0": "chat"
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
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "custom.project",
          "type": "parameter",
          "parameter_name": {
            "entries": {
              "0": "project"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "border_color_left": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTIJR0",
  "current_parent": "bTIJL0",
  "default_name": "Group H",
  "name": "Group Project Cell Container",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
