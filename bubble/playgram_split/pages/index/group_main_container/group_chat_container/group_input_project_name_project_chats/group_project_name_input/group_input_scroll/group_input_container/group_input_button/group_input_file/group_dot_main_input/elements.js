import { Group_Add_File_Tool } from './group_add_file_tool/index.js';
import { Group_Send_Message_Dictate } from './group_send_message_dictate/index.js';

export const elements = {
  "bTqLP": Group_Add_File_Tool,
  "bTqLQ": Group_Send_Message_Dictate,
  "bTkRu4": {
    "properties": {
      "height": 41,
      "left": 0,
      "top": -10,
      "width": 216,
      "zindex": 3,
      "font_color": "var(--color_bTkRP4_default)",
      "font_size": 14,
      "line_height": 1.4,
      "placeholder": {
        "entries": {
          "0": "Ask anything..."
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "background_style": "none",
      "border_style": "none",
      "order": 3,
      "unique_id": {
        "entries": {
          "0": "main-input"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "padding_left": 14,
      "single_width": false,
      "single_height": false,
      "max_height_css": "240px",
      "vert_alignment": "center",
      "horiz_alignment": "center",
      "nonant_alignment": "bc",
      "placeholder_color": "var(--color_bTkRL4_default)",
      "collapse_when_hidden": false
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAE",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUik0"
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
            "next": {
              "args": 30,
              "type": "Message",
              "name": "greater_or_equal_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_height",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "margin_top": 6
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUif0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "max_height_css": "190px"
        },
        "type": "State"
      },
      "3": {
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
        "properties": {
          "font_color": "var(--color_bTsrq2_default)",
          "placeholder_color": "var(--color_bTsrp2_default)"
        },
        "type": "State"
      },
      "4": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_focused",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "shortcuts_on__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
          "placeholder": {
            "entries": {
              "0": "Press F to start typing..."
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      }
    },
    "type": "MultiLineInput",
    "id": "bTUec0",
    "default_name": "MultilineInput A",
    "name": "MultilineInput Ask anything",
    "transitions": {
      "padding_bottom": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTkRv4": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": -10,
      "width": 280,
      "zindex": 6,
      "boxshadow_horizontal": 0,
      "border_roundness": 100,
      "boxshadow_style": "outset",
      "boxshadow_vertical": 0,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(103,177,193,1)",
      "boxshadow_blur": 12,
      "boxshadow_color": "rgba(103,177,193,1)",
      "boxshadow_spread": 0,
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 12,
      "margin_left": 34,
      "single_width": true,
      "min_width_css": "8px",
      "single_height": true,
      "min_height_css": "8px",
      "vert_alignment": "flex-start",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "nonant_alignment": "ab",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": 40,
              "type": "Message",
              "name": "greater_or_equal_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_height",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUec0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "vert_alignment": "flex-start"
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
            "name": "get_AAE",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUik0"
          },
          "type": "GetElement",
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
            "args": 768,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "margin_left": 24
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTkRh4",
    "default_name": "Group DZZZZ",
    "name": "Group dot",
    "style": "Group_transparent_"
  },
};
