export const group_grace_period_alert = {
  "properties": {
    "height": 53,
    "left": -125,
    "top": -43,
    "width": 135,
    "zindex": 32,
    "is_visible": false,
    "order": 10,
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "grace_period_start_date",
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
                  "type": "Message",
                  "name": "isnt_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTxLd"
                },
                "type": "GetElement",
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
  "id": "bTyEF",
  "current_parent": "bTxAn1",
  "default_name": "Group L",
  "elements": {
    "bTxLl": {
      "properties": {
        "text": {
          "entries": {
            "0": "Your last payment was not successful - we\u2019ll retry over the next 2 weeks. Please check your available balance to avoid expiration after the grace period."
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
      "id": "bTyEH",
      "default_name": "Text I",
      "name": "Text We couldn\u2019t process ",
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
      "id": "bTyEL",
      "current_parent": "bTxLd",
      "default_name": "Icon F",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group grace period alert",
  "style": "Group_error_"
};
