import { elements } from './elements/index.js';

export const group_admin_buttons = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -16,
    "top": -64,
    "width": 0,
    "zindex": 16,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "order": 11,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 16,
    "fit_height": true,
    "margin_top": 8,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
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
                    "args": {
                      "next": {
                        "next": {
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
                    "type": "Message",
                    "name": "not_equals",
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
                          "args": {
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "Created By",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjV"
                    },
                    "type": "GetElement",
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
                                "option_value": "admin"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
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
              "name": "not_contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "admins_list_custom_workspace",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJjV"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTJji",
  "default_name": "Group A",
  "name": "Group admin Buttons",
  "style": "Group_transparent_",
};
