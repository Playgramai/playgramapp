import { elements } from './elements/index.js';

export const rg_projects = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": -42,
    "width": 280,
    "zindex": 8,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "descending": true,
              "sort_field": "Created Date"
            },
            "type": "Message",
            "name": "sorted",
            "is_slidable": true
          },
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
    "separator_color": "rgba(150,150,150,0)",
    "separator_width": 0,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "show_all_items": true,
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
              "args": {
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
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "owner_user",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_organization_custom_organization",
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
            "descending": true,
            "sort_field": "Created Date",
            "type_to_find": "custom.project"
          },
          "type": "Search",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "State"
    },
    "1": {
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
            "descending": true,
            "sort_field": "Created Date",
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
  "id": "bTIJL0",
  "default_name": "RepeatingGroup C",
  "name": "RG Projects",
  "style": "RepeatingGroup_transparent_",
};
