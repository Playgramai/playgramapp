import { elements } from './elements/index.js';

export const group_analytics = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 10,
    "top": 10,
    "width": 0,
    "zindex": 22,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 0,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.05)",
    "border_style": "none",
    "order": 11,
    "row_gap": 20,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "analytics",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "to_lowercase",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "sub_tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl",
        "said": "a2Vsdm8tMzE4ODQ="
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTdgx1",
  "current_parent": "bTdHZ1",
  "default_name": "Group I",
  "name": "Group Analytics",
  "style": "Group_transparent_",
};
