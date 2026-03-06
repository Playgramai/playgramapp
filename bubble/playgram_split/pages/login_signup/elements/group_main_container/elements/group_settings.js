export const group_settings = {
  "properties": {
    "height": 1,
    "left": 0,
    "top": 118.078125,
    "width": 1,
    "zindex": 40,
    "vertical_centering": true,
    "order": 14,
    "fit_width": true,
    "fit_height": true,
    "single_width": true,
    "single_height": true,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTxxc",
  "default_name": "Group BZZ",
  "elements": {
    "bTxxi": {
      "properties": {
        "height": 20,
        "left": 0,
        "top": -158.078125,
        "width": 20,
        "zindex": 3,
        "order": 15,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "aa",
        "collapse_when_hidden": true
      },
      "type": "1568986136566x208317327136522240-ALe",
      "id": "bTxSh0",
      "default_name": "SCA A",
      "name": "SCA A"
    },
    "bTxxj": {
      "properties": {
        "height": 1,
        "left": 0,
        "top": -158.078125,
        "width": 1,
        "zindex": 2,
        "AAQ": {
          "entries": {
            "0": "stripe_error"
          },
          "type": "TextExpression"
        },
        "AAR": true,
        "order": 16,
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "1488796042609x768734193128308700-AAP",
      "id": "bTxxV",
      "default_name": "JavascripttoBubble A",
      "name": "JS Stripe Error"
    },
    "bTxxn": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": -158.078125,
        "width": 280,
        "zindex": 1,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "invitation_accepted__boolean",
                    "value": true,
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "workspaces_list_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 17,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "nonant_alignment": "ac",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bToYf3",
      "default_name": "Group WZ",
      "name": "Group Workspace&User Invitation (use data)",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Settings",
  "style": "Group_transparent_"
};
