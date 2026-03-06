import { elements } from './elements/index.js';

export const group_profile_menu_content = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 101,
    "top": 39,
    "width": 280,
    "zindex": 2,
    "boxshadow_horizontal": 0,
    "border_roundness": 10,
    "boxshadow_style": "outset",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "boxshadow_blur": 10,
    "boxshadow_color": "rgba(0,0,0,0.2)",
    "boxshadow_spread": 0,
    "order": 5,
    "row_gap": 8,
    "use_gap": false,
    "fit_width": false,
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
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTJpt",
  "default_name": "Group C",
  "name": "Group Profile Menu Content",
};
