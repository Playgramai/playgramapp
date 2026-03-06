export const element_memory_knowledge_a = {
  "properties": {
    "height": 200,
    "left": 64.5,
    "top": 78,
    "width": 200,
    "zindex": 6,
    "floating_reference": "top",
    "custom_id": "bTMGw",
    "is_visible": false,
    "max_width": 100,
    "min_width": 0,
    "unique_id": {
      "entries": {
        "0": "memory-knowledge"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "nonant_alignment": "bb",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "url_formatted",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "memory_management"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "text",
          "parameter_name": {
            "entries": {
              "0": "tab"
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
    }
  },
  "type": "CustomElement",
  "id": "bTUhQ0",
  "default_name": "[Element] Memory Management A",
  "name": "[Element] Memory & Knowledge A"
};
