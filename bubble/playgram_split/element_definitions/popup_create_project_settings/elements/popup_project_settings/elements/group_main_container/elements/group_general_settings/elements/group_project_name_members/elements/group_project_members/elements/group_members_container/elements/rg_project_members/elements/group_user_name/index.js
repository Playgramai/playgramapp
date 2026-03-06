import { elements } from './../../../../../../../../../../../../../../../../../../contd/contd_52/index.js';

export const group_user_name = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 1,
    "row_gap": 12,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 8,
    "margin_right": 8,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTGzq_default_rgb), 0.2)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJjV",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "row_gap": 6
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTJkB",
  "current_parent": "bTJFz",
  "default_name": "Group A",
  "name": "Group User Name",
  "style": "Group_transparent_",
};
