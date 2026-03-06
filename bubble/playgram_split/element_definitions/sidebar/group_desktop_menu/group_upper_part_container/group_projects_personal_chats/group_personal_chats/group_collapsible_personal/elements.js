import { RG_Personal_Chats } from './rg_personal_chats/index.js';

export const elements = {
  "bTIbp": RG_Personal_Chats,
  "bTKBu": {
    "properties": {
      "text": {
        "entries": {
          "0": "No chats"
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 100,
      "zindex": 14,
      "font_color": "rgba(175,175,175,1)",
      "font_size": 12,
      "is_visible": false,
      "line_height": 1.2,
      "vertical_centering": true,
      "order": 1,
      "fit_width": true,
      "fit_height": true,
      "margin_left": 36,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIbj"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIFr"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
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
          "is_slidable": false
        },
        "properties": {
          "font_color": "var(--color_bTsrp2_default)"
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTKBi",
    "current_parent": "bTIIs0",
    "default_name": "Text V",
    "name": "Text No chats"
  },
};
