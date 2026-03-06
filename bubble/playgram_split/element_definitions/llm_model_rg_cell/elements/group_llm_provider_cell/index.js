import { elements } from './elements/index.js';

export const group_llm_provider_cell = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 13,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.llm_providers__os_",
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "model",
        "1": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": " "
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "Message",
              "name": "to_lowercase",
              "is_slidable": false
            },
            "type": "Message",
            "name": "display",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 2,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "54px",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbEC0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "unique_id": {
          "entries": {
            "0": {
              "type": "Empty"
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTbDr0",
  "current_parent": "bTHsj",
  "default_name": "Group A",
  "name": "Group LLM Provider Cell",
  "style": "Group_transparent_",
};
