import { elements } from './elements/index.js';

export const group_container_hover = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 13,
    "border_roundness": 6,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.organization",
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 12,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 8,
    "single_width": false,
    "margin_bottom": 4,
    "padding_right": 8,
    "single_height": false,
    "padding_bottom": 12,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
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
        "properties": {
          "element_id": "bTPuZ"
        },
        "type": "GetElement",
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
                      "0": "#F2F3F5"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#acacad1a"
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
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPub",
  "default_name": "Group RZ",
  "name": "Group Container (Hover)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
