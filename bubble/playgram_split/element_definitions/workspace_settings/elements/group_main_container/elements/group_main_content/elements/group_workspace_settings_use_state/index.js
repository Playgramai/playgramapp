import { elements } from './elements/index.js';

export const group_workspace_settings_use_state = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 30,
    "is_visible": false,
    "vertical_centering": true,
    "order": 7,
    "row_gap": 24,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "general",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "to_lowercase",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "sub_tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl",
        "said": "a2Vsdm8tMzE4ODQ="
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
    }
  },
  "type": "Group",
  "id": "bTdRs1",
  "current_parent": "bTdHZ1",
  "default_name": "Group B",
  "name": "Group Workspace Settings (use state)",
  "style": "Group_transparent_",
  "custom_states": {
    "logo_": {
      "display": "logo",
      "value": "image",
      "rank": 0,
      "make_static": true
    },
    "logo_changed_": {
      "display": "logo_changed",
      "value": "boolean",
      "rank": 2,
      "default_val": false,
      "make_static": true
    },
    "show_all_projects_": {
      "display": "show_all_projects",
      "value": "boolean",
      "rank": 1,
      "make_static": true
    }
  },
};
