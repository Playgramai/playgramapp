export const subscription_plans = {
  "properties": {
    "height": 0,
    "left": 173.5,
    "top": 200,
    "width": 0,
    "zindex": 30,
    "floating_reference": "top",
    "custom_id": "bTxAn1",
    "data_source": "settings",
    "is_visible": false,
    "order": 8,
    "max_width": 100,
    "min_width": 0,
    "fit_height": true,
    "param_bTxcd": {
      "next": {
        "next": {
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
    "single_width": false,
    "max_width_css": "600px",
    "min_width_css": "40px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true,
    "floating_reference_horizontal": "none",
    "floating_reference_horizontal_resp": "left"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "subscription",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "to_lowercase",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "sub_tab"
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
  "id": "bTxED1",
  "default_name": "Subscription plans A",
  "name": "Subscription plans"
};
