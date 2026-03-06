export const group_invite_limit_alert = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 21,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "is_visible": false,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "order": 1,
    "row_gap": 0,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 0,
    "padding_left": 16,
    "single_width": false,
    "margin_bottom": 32,
    "padding_right": 8,
    "single_height": true,
    "min_height_css": "36px",
    "padding_bottom": 0,
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
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.subscription_plan",
                    "option_value": "free"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "args": 3,
                              "type": "Message",
                              "name": "greater_or_equal_than",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "count",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "members_list_user",
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "subscription_plan_option_subscription_plan",
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
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxvR2",
  "current_parent": "bTdVc1",
  "default_name": "Group D",
  "elements": {
    "bTJQD": {
      "properties": {
        "height": 87,
        "left": -318,
        "top": 0,
        "width": 518,
        "zindex": 22,
        "vertical_centering": true,
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTxvT2",
      "default_name": "Group D",
      "name": "Group Parent Input/Dropdown",
      "style": "Group_transparent_"
    },
    "bTwjX": {
      "properties": {
        "text": {
          "entries": {
            "0": "You\u2019ve reached your free plan invite limit. [u]Upgrade[/u] to invite more."
          },
          "type": "TextExpression"
        },
        "height": 8,
        "left": 48,
        "top": 14.4453125,
        "width": 35,
        "zindex": 23,
        "order": 3,
        "nofollow": true,
        "fit_width": true,
        "fit_height": true,
        "link_color": "var(--color_bToSr_default)",
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "recognize_links": false,
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxvX2",
      "default_name": "Text E",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTwjj": {
      "properties": {
        "height": 12,
        "left": 0,
        "top": 0,
        "width": 9,
        "zindex": 2,
        "icon": "ionic filled information-circle",
        "icon_color": "var(--color_bTGzv_default)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "margin_bottom": 0,
        "min_width_css": "18px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "18px",
        "padding_bottom": 0,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTxvY2",
      "current_parent": "bTwjD",
      "default_name": "Icon B",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group invite limit alert",
  "style": "Group_border_"
};
