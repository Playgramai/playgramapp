import { elements } from './elements/index.js';

export const group_llm_models_container_use_as_gf = {
  "elements": elements,
  "properties": {
    "height": 48,
    "left": 200,
    "top": 0,
    "width": -16,
    "zindex": 15,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.llm_providers__os_",
    "is_visible": false,
    "vertical_centering": true,
    "fit_width": true,
    "fit_height": true,
    "margin_top": -8,
    "margin_right": -200,
    "padding_left": 16,
    "single_width": false,
    "max_width_css": "200px",
    "min_width_css": "200px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "ca",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTbdn0",
  "default_name": "Group B",
  "name": "Group LLM models container (use as GF)",
  "style": "Group_transparent_",
};
