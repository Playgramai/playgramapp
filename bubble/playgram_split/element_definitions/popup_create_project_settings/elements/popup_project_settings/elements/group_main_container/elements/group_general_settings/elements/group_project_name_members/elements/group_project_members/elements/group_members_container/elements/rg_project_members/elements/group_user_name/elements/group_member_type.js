export const group_member_type = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 8,
    "width": 0,
    "zindex": 11,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 14,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "80px",
    "min_width_css": "80px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
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
              "next": {
                "next": {
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
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "user_user",
          "is_slidable": false
        },
        "type": "ElementParent",
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
          "args": {
            "next": {
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiYx",
  "default_name": "Group N",
  "elements": {
    "bTiZD": {
      "properties": {
        "height": 200,
        "left": -349,
        "top": -8,
        "width": 200,
        "zindex": 9,
        "floating_reference": "top",
        "custom_id": "bTauk",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "order": 1,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "margin_left": -8,
        "param_bTavN": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjX"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "param_bTavU": {
          "next": {
            "next": {
              "type": "Message",
              "name": "unsaved_admins_list_user",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjX"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "single_width": false,
        "max_width_css": "80px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "32px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTawt",
      "default_name": "[Element] Dropdown project member type A",
      "name": "[Element] Dropdown project member type"
    }
  },
  "name": "Group Member type",
  "style": "Group_transparent_"
};
