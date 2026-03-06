import { elements } from './elements.js';

export const Group_Right_Side = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 31,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(27,27,29,1)",
    "order": 4,
    "row_gap": 32,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 16,
    "single_width": false,
    "single_height": false,
    "padding_bottom": 16,
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_left": "solid",
    "four_border_style": false,
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdH0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "100%",
        "min_height_css": "400px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTLAJ",
  "default_name": "Group B",
  "name": "Group Right Side",
  "style": "Group_transparent_",
};
