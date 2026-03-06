import { elements } from './elements/index.js';

export const group_profile_menu_content = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 101,
    "top": 39,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
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
    "order": 1,
    "row_gap": 8,
    "use_gap": false,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "margin_top": 6,
    "margin_left": 6,
    "padding_top": 8,
    "margin_right": 6,
    "padding_left": 8,
    "single_width": false,
    "margin_bottom": 6,
    "padding_right": 8,
    "single_height": false,
    "padding_bottom": 8,
    "button_disabled": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
                  "args": 768,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIml0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTJsF",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIml0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "48px",
        "horiz_alignment": "flex-start"
      },
      "type": "State"
    }
  },
  "name": "Group Profile Menu Content",
  "style": "Group_dark_gf___shadow_",
  "default_name": "Group A",
  "id": "bTImt0",
  "type": "Group",
};
