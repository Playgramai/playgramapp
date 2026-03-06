import { Group_Assistant_Reply } from './group_assistant_reply/index.js';

export const elements = {
  "bTOmZ0": Group_Assistant_Reply,
  "bTOlp0": {
    "properties": {
      "height": 0,
      "left": -16,
      "top": -80.796875,
      "width": 0,
      "zindex": 24,
      "vertical_centering": true,
      "order": 1,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 4,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTOvV0",
    "default_name": "Group G",
    "elements": {
      "bTOlY0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Assistant reply"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -16,
          "top": -80.796875,
          "width": 100,
          "zindex": 22,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTOvZ0",
        "default_name": "Text D",
        "style": "Text_inter___400___14px___white_"
      },
      "bTOlZ0": {
        "properties": {
          "height": 30,
          "left": -16,
          "top": -80.796875,
          "width": 30,
          "zindex": 23,
          "icon": "feather settings",
          "icon_color": "var(--color_primary_contrast_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "15px",
          "single_height": true,
          "min_height_css": "15px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
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
                "name": "dark_mode_boolean",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "properties": {
              "icon_color": "var(--color_bTsrq2_default)"
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTOva0",
        "default_name": "Icon D"
      }
    },
    "name": "Group Label",
    "style": "Group_transparent_"
  },
};
