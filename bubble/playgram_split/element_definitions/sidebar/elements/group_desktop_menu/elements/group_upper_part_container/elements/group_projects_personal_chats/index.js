import { elements } from './elements/index.js';

export const group_projects_personal_chats = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 220,
    "width": 0,
    "zindex": 10,
    "vertical_centering": true,
    "order": 11,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "overflowID"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "margin_top": 8,
    "margin_right": -4,
    "single_width": false,
    "margin_bottom": 16,
    "padding_right": 4,
    "single_height": false,
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "container_layout": "column",
    "four_border_style": true,
    "border_color_bottom": "rgba(42,42,45,1)",
    "border_style_bottom": "solid",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
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
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
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
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "active_boolean",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTIKk0",
  "default_name": "Group K",
  "name": "Group Projects/Personal Chats",
  "style": "Group_transparent_",
};
