import { elements } from './elements/index.js';

export const rg_workspaces_pending_invitations = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": -44,
    "width": 280,
    "zindex": 17,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "next": {
          "properties": {
            "constraints": {
              "0": {
                "key": "invitation_accepted__boolean",
                "value": true,
                "constraint_type": "equals"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "workspaces_list_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "separator_style": "none",
    "border_style": "none",
    "order": 5,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "margin_top": 5,
    "single_width": false,
    "single_height": false,
    "max_height_css": "400px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
    }
  },
  "type": "RepeatingGroup",
  "id": "bTQGr0",
  "current_parent": "bTJOL",
  "default_name": "RepeatingGroup A",
  "name": "RG Workspaces Pending Invitations",
  "style": "RepeatingGroup_transparent_",
};
