import { elements } from './elements/index.js';

export const group_llm_model_bg_1024 = {
  "elements": elements,
  "properties": {
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 69,
    "zindex": 14,
    "group_type": "option.llm_models__os_",
    "is_visible": false,
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 0,
    "margin_right": 0,
    "single_width": false,
    "min_width_css": "220px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.llm_providers__os_",
              "option_value": "alibaba_cloud"
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
        "min_width_css": "300px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiby",
  "current_parent": "bTbDr0",
  "default_name": "Group J",
  "name": "Group llm model bg 1024",
  "style": "Group_dark_gf___shadow_",
};
