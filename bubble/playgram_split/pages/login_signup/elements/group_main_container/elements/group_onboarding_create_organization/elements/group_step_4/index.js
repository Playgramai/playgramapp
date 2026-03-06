import { elements } from './elements/index.js';

export const group_step_4 = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 10,
    "top": 121.1953125,
    "width": 0,
    "zindex": 31,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "is_visible": false,
    "vertical_centering": true,
    "order": 26,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_3"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
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
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPbB",
  "current_parent": "bTPVZ",
  "default_name": "Group X",
  "name": "Group Step 4",
  "style": "Group_transparent_",
};
