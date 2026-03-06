export const group_current_user_workspace = {
  "properties": {
    "height": 280,
    "left": -70,
    "top": -70,
    "width": 280,
    "zindex": 16,
    "border_color": "var(--color_alert_default)",
    "border_width": 2,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "constraints": {
          "0": {
            "key": "user_user",
            "value": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "constraint_type": "equals"
          },
          "1": {
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
          }
        },
        "type_to_find": "custom.workspace"
      },
      "type": "Search"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "border_style": "solid",
    "order": 4,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTPwp0",
  "current_parent": "bTNqg",
  "default_name": "Group M",
  "name": "Group Current User Workspace",
  "style": "Group_transparent_"
};
