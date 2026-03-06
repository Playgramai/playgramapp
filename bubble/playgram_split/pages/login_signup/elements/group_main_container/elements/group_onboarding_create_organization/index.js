import { elements } from './elements/index.js';

export const group_onboarding_create_organization = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 16,
    "border_color": "rgba(128,189,203,0.06)",
    "border_roundness": 12,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "custom.onboarding_step_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTKPI"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "option.onboarding_steps__os_",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(18,18,19,1)",
    "border_style": "solid",
    "order": 7,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 32,
    "padding_left": 32,
    "single_width": false,
    "max_width_css": "670px",
    "min_width_css": "670px",
    "padding_right": 32,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 32,
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": "onboarding",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "mode"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUcw0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPVZ",
  "current_parent": "bTKPI",
  "default_name": "Group O",
  "name": "Group Onboarding - Create Organization",
  "style": "Group_transparent_",
};
