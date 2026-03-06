import { elements } from './elements/index.js';

export const rg_archived_chats = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -80,
    "top": -150,
    "width": 280,
    "zindex": 32,
    "group_type": "custom.chat",
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "separator_style": "solid",
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_left": "solid",
    "four_border_style": true,
    "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_right": "solid",
    "border_color_bottom": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_bottom": "solid",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true,
    "border_roundness_left": 10,
    "border_roundness_bottom": 10
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_settings__os_",
                "option_value": "archive"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTLDj"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTLDp"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "merged_with",
                "is_slidable": false
              },
              "type": "Message",
              "name": "merged_with",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTLDd"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "2": {
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
        "border_color_left": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
        "border_color_right": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
        "border_color_bottom": "rgba(var(--color_bTtSL3_default_rgb), 0.1)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTLDE",
  "default_name": "RepeatingGroup B",
  "name": "RG Archived Chats",
  "style": "RepeatingGroup_transparent_",
};
