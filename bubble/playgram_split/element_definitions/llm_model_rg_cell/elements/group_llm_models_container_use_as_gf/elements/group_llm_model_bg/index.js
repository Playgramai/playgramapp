import { elements } from './elements/index.js';

export const group_llm_model_bg = {
  "elements": elements,
  "properties": {
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 69,
    "zindex": 14,
    "group_type": "option.llm_models__os_",
    "is_visible": true,
    "bgcolor": "rgba(42,42,45,1)",
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 0,
    "padding_top": 8,
    "margin_right": 0,
    "padding_left": 8,
    "single_width": false,
    "min_width_css": "220px",
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "ca",
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
    },
    "1": {
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "boxshadow_style": "none",
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTbEr0",
  "default_name": "Group F",
  "name": "Group llm model bg",
  "style": "Group_dark_gf___shadow_",
};
