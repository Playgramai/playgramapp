export const icon_outline_chevron = {
  "properties": {
    "height": 30,
    "left": 0,
    "top": 0,
    "width": 30,
    "zindex": 5,
    "icon": "ionic outline chevron-down",
    "icon_color": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#555557"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#f7f8f9"
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
    "is_visible": false,
    "vertical_centering": true,
    "order": 16,
    "fit_height": false,
    "padding_top": 0,
    "padding_left": 0,
    "single_width": true,
    "min_width_css": "16px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "16px",
    "padding_bottom": 0,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": false
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.selected_user_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTfQP0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "ionic outline chevron-up"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": 1,
            "type": "Message",
            "name": "greater_or_equal_than",
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
        "is_visible": true
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
        "margin_top": -136
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTfQc0",
  "default_name": "Icon G",
  "name": "Icon outline chevron"
};
