export const element_workspace_settings = {
  "properties": {
    "height": 200,
    "left": 0,
    "top": 0,
    "width": 200,
    "zindex": 5,
    "floating_reference": "top",
    "custom_id": "bTdDD1",
    "is_visible": false,
    "max_width": 100,
    "min_width": 0,
    "fit_height": false,
    "param_bTtAw0": {
      "next": {
        "type": "Message",
        "name": "custom.hide_members_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUjC0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "nonant_alignment": "aa",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "analytics"
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
                        "option_value": "user"
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
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "option.sidebar_menu__os_",
          "parameter_name": {
            "entries": {
              "0": "tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "CustomElement",
  "id": "bTdQv1",
  "default_name": "[Element] Analytics A",
  "name": "[Element] Workspace Settings"
};
