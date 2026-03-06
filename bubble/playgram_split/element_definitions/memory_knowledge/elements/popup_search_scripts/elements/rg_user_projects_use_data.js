export const rg_user_projects_use_data = {
  "properties": {
    "height": 350,
    "left": 10,
    "top": 10,
    "width": 280,
    "zindex": 15,
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "projects_list_custom_project",
          "is_slidable": false
        },
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "background_style": "bgcolor",
    "bgcolor": "var(--color_alert_default)",
    "order": 7,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": true,
    "fixed_columns": true,
    "min_width_css": "40px",
    "single_height": true,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "0px",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_type__os_",
                  "option_value": "admin"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.user_type__os_",
                            "option_value": "owner"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "show_all_projects__boolean",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "user_type_option_user_type__os_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_custom_organization",
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
            "type_to_find": "custom.project"
          },
          "type": "Search",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTOQj0",
  "current_parent": "bTNqg",
  "default_name": "RepeatingGroup F",
  "name": "RG User Projects (use data)",
  "style": "RepeatingGroup_transparent_"
};
