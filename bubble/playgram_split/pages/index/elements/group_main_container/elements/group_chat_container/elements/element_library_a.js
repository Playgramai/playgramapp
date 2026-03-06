export const element_library_a = {
  "properties": {
    "height": 200,
    "left": 0,
    "top": 0,
    "width": 200,
    "zindex": 7,
    "floating_reference": "top",
    "custom_id": "bTjEp1",
    "is_visible": false,
    "max_width": 100,
    "min_width": 0,
    "fit_height": false,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "nonant_alignment": "ba",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
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
              "option_value": "library0"
            },
            "type": "OptionValue"
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
  "id": "bTjWY1",
  "default_name": "[Element] Library A"
};
