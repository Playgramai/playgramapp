import { elements } from './elements/index.js';

export const Group_Project_Chat_Cell = {
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
    "group_type": "custom.chat",
    "vertical_centering": true,
    "order": 3,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "margin_left": 36,
    "padding_top": 0,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "36px",
    "padding_bottom": 0,
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
    "0": {
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
                "name": "is_hovered",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
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
      "properties": {
        "border_color_left": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.open__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "36px"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.visible__",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJYk"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "border_color_left": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJYl"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTJYd",
  "current_parent": "bTIKR0",
  "default_name": "Group IZZ",
  "name": "Group Project Chat Cell",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
