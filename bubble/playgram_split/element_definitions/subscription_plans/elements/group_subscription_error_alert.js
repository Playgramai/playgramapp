export const group_subscription_error_alert = {
  "properties": {
    "height": 53,
    "left": -135,
    "top": -53,
    "width": 135,
    "zindex": 32,
    "is_visible": false,
    "order": 9,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 12,
    "single_width": false,
    "max_width_css": "920px",
    "min_width_css": "40px",
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": "onboarding",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxLd",
  "default_name": "Group C",
  "elements": {
    "bTxLl": {
      "properties": {
        "text": {
          "entries": {
            "0": "Your subscription wasn\u2019t renewed and is now on hold. Please resubscribe to your subscription or switch to Free plan to continue using Playgram. "
          },
          "type": "TextExpression"
        },
        "height": 15,
        "left": -99,
        "top": -15,
        "width": 99,
        "zindex": 2,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 1,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxLj",
      "default_name": "Text C",
      "style": "Text_body_14__error__"
    },
    "bTxLr": {
      "properties": {
        "height": 12,
        "left": 0,
        "top": 0,
        "width": 12,
        "zindex": 2,
        "icon": "ionic filled alert-circle",
        "icon_color": "var(--color_bTGzw_default)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "20px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "20px",
        "padding_bottom": 0,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTxLp",
      "current_parent": "bTxLd",
      "default_name": "Icon B",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group subscription error alert",
  "style": "Group_error_"
};
