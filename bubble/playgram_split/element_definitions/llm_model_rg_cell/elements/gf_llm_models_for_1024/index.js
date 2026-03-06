import { elements } from './elements/index.js';

export const gf_llm_models_for_1024 = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 16,
    "border_color": "rgba(94,97,99,1)",
    "border_roundness": 10,
    "boxshadow_style": "outset",
    "boxshadow_vertical": 0,
    "vertical_centering": true,
    "bgcolor": "rgba(30,30,32,1)",
    "border_style": "none",
    "boxshadow_blur": 10,
    "boxshadow_color": "rgba(var(--color_bTGzp_default_rgb), 0.2)",
    "reference": "bTbDr0",
    "unique_id": {
      "entries": {
        "0": "gfModels2"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "offset_top": -48,
    "offset_left": 134,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "max_width_css": "240px",
    "min_width_css": "240px",
    "padding_right": 8,
    "single_height": false,
    "padding_bottom": 8,
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
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.llm_providers__os_",
              "option_value": "claude"
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
        "unique_id": {
          "entries": {
            "0": "gfModels2"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.llm_providers__os_",
              "option_value": "gemini"
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
        "unique_id": {
          "entries": {
            "0": "gfModels2"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "3": {
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
          "next": {
            "args": {
              "next": {
                "args": 850,
                "type": "Message",
                "name": "less_or_equal_than",
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": {
              "type": "Empty"
            },
            "1": "gfModels2"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "4": {
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
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "GroupFocus",
  "id": "bTiDP",
  "default_name": "GroupFocus A",
  "name": "GF LLM models for 1024",
  "style": "GroupFocus_shadow_",
};
