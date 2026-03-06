// Original path: element_definitions/sidebar/elements/group_desktop_menu/elements/group_upper_part_container/elements/group_projects_personal_chats/elements/group_personal_chats/elements/group_collapsible_personal/elements/rg_personal_chats/elements/group_personal_chat_cell/elements/group_personal_chat_name_icon/elements
export const icon_edit_personal_chat = {
  "properties": {
    "height": 30,
    "left": -16,
    "top": 0,
    "width": 30,
    "zindex": 2,
    "icon": "feather more-horizontal",
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
    "order": 7,
    "fit_height": false,
    "padding_top": 1,
    "padding_left": 0,
    "single_width": true,
    "min_width_css": "20px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "20px",
    "padding_bottom": 1,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "cb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 1024,
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
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIGD"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTImD0",
  "default_name": "Icon K",
  "name": "Icon Edit Personal Chat"
};
