import { elements } from './elements/index.js';

export const group_step_2 = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 197.9921875,
    "width": 0,
    "zindex": 29,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "is_visible": false,
    "vertical_centering": true,
    "order": 23,
    "row_gap": 32,
    "use_gap": true,
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
          "args": {
            "properties": {
              "option_set": "option.onboarding_steps__os_",
              "option_value": "step_1"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPXi",
  "default_name": "Group R",
  "name": "Group Step 2",
  "style": "Group_transparent_",
};
