import { elements } from './elements.js';

export const RG_User_s_Organizations = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 73,
    "top": 45,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "invitation_accepted__boolean",
                "value": false,
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
    "group_type": "custom.organization",
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTPuT",
  "default_name": "RepeatingGroup H",
  "name": "RG User's Organizations",
  "style": "RepeatingGroup_transparent_",
};
