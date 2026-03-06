import { elements } from './elements/index.js';

export const group_bz = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 35,
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 16,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "38px",
    "horiz_alignment": "flex-start",
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
                "name": "not_equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "owner_user",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
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
  "id": "bTnUV1",
  "default_name": "Group BZ",
  "style": "Group_transparent_",
};
