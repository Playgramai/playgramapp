import { elements } from './elements/index.js';

export const group_add_files_instructions_to_project = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUif0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "border_style": "none",
    "order": 4,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "margin_top": 44,
    "padding_top": 0,
    "single_width": false,
    "margin_bottom": 56,
    "max_width_css": "780px",
    "single_height": false,
    "min_height_css": "88px",
    "horiz_alignment": "center",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_left": 10,
    "border_roundness_right": 10,
    "border_roundness_bottom": 10,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUif0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "not_equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "parameter_name": {
                      "entries": {
                        "0": "new_chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl"
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
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
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "margin_top": 24,
        "padding_left": 8,
        "margin_bottom": 24,
        "padding_right": 8
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUfM0",
  "current_parent": "bTKbU0",
  "default_name": "Group GZ",
  "name": "Group Add Files/Instructions to Project",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
