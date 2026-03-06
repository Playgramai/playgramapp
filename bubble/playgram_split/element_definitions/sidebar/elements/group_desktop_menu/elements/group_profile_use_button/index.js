import { elements } from './elements/index.js';

export const group_profile_use_button = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": -12,
    "width": 0,
    "zindex": 16,
    "border_roundness": 12,
    "vertical_centering": true,
    "order": 9,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 4,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "padding_bottom": 4,
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(42,42,45,1)",
    "border_style_top": "solid",
    "container_layout": "column",
    "four_border_style": false,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.expand_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP"
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
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
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
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIgg"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTIfA",
  "default_name": "Group Y",
  "name": "Group Profile (use button)",
  "style": "Group_transparent_",
};
