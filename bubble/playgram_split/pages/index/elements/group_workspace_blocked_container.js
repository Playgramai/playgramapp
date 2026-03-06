export const group_workspace_blocked_container = {
  "properties": {
    "height": 12,
    "left": 4,
    "top": 0,
    "width": 33,
    "zindex": 10,
    "is_visible": false,
    "vertical_centering": true,
    "order": 13,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "active_boolean",
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
          "name": "logged_in",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxOM",
  "default_name": "Group NZ",
  "elements": {
    "bTxOZ": {
      "properties": {
        "text": {
          "entries": {
            "0": "Workspace temporarily unavailable"
          },
          "type": "TextExpression"
        },
        "height": 58,
        "left": 315,
        "top": 308,
        "width": 131,
        "zindex": 2,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxOX",
      "default_name": "Text R",
      "style": "Text_inter___400___24px___white_copy_"
    },
    "bTxOl": {
      "properties": {
        "text": {
          "entries": {
            "0": "[center]Access to this workspace is temporarily restricted.\nPlease contact your organization owner to restore access.[/center]"
          },
          "type": "TextExpression"
        },
        "height": 50,
        "left": 251,
        "top": 418,
        "width": 112,
        "zindex": 3,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxOj",
      "default_name": "Text X",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "name": "Group workspace blocked container",
  "style": "Group_transparent_"
};
