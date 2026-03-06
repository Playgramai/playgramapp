import { elements } from './elements.js';

export const RG_Workspace_Members = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -16,
    "top": -16,
    "width": 280,
    "zindex": 17,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 10,
    "data_source": {
      "properties": {
        "constraints": {
          "0": {
            "key": "organization_workspace_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "1": {
            "key": "user_email_for_search_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdWF1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "constraint_type": "text contains string"
          }
        },
        "type_to_find": "custom.workspace",
        "ignore_empty_constraints": true
      },
      "type": "Search"
    },
    "group_type": "custom.workspace",
    "rows": 10,
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "separator_style": "solid",
    "border_style": "solid",
    "order": 10,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "stable_pagination": true,
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
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
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTtAw0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
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
        "border_color": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTdVj1",
  "default_name": "RepeatingGroup B",
  "name": "RG Workspace Members",
  "style": "RepeatingGroup_transparent_",
};
