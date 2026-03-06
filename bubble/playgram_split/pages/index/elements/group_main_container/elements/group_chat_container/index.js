import { elements } from './elements/index.js';

export const group_chat_container = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 3,
    "border_color": "rgba(235,235,235,1)",
    "boxshadow_horizontal": 4,
    "border_roundness": 0,
    "boxshadow_style": "none",
    "boxshadow_vertical": 4,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(255,255,255,1)",
    "background_gradient_from": "rgba(128,189,203,0.02)",
    "background_gradient_to": "rgba(0,0,0,1)",
    "border_style": "none",
    "boxshadow_blur": 16,
    "boxshadow_color": "rgba(1,1,0,0.07)",
    "order": 14,
    "use_gap": true,
    "fit_width": false,
    "fit_height": false,
    "padding_left": 0,
    "single_width": false,
    "max_width_css": "100%",
    "padding_right": 0,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "relative",
    "collapse_when_hidden": false,
    "container_vert_alignment": "space-between",
    "background_gradient_style": "radial",
    "background_radial_gradient_size": "closest-side",
    "background_radial_gradient_xpos": 10,
    "background_radial_gradient_shape": "ellipse"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhQ0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 0
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "not_logged_in",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "center_background": true,
        "background_style": "image",
        "background_image": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766566154526x979849265959289000/Unavailable.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUhn0",
  "current_parent": "bTzAc4",
  "default_name": "Group B",
  "name": "Group Chat container",
};
