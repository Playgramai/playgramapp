export const group_buttons = {
  "properties": {
    "height": 0,
    "left": -20,
    "top": -20,
    "width": 0,
    "zindex": 5,
    "vertical_centering": true,
    "order": 5,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 15,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-end",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-end"
  },
  "type": "Group",
  "id": "bTUmH0",
  "default_name": "Group QZ",
  "elements": {
    "bTLiZ0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Close"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": -20,
        "top": -520,
        "width": 150,
        "zindex": 4,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "100px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "flex-end",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUmO0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTUmI0",
      "current_parent": "bTLeL",
      "default_name": "Button E",
      "style": "Button_subtle_new_"
    },
    "bTNNK0": {
      "properties": {
        "height": 44,
        "left": 616,
        "top": 0,
        "width": 100,
        "zindex": 5,
        "vertical_centering": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "100px",
        "single_height": false,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUmJ0",
      "default_name": "Group RZ",
      "elements": {
        "bTNNL0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Save"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -115,
            "top": 0,
            "width": 150,
            "zindex": 1,
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "100px",
            "single_height": false,
            "min_height_css": "44px",
            "horiz_alignment": "flex-end",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUmO0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTUmN0",
          "default_name": "Button E",
          "style": "Button_primary_new_"
        },
        "bTNNX0": {
          "properties": {
            "height": 30,
            "left": 51.5,
            "top": 23,
            "width": 30,
            "zindex": 2,
            "icon": "phosphor regular circle-notch",
            "icon_color": "var(--color_bTGzq_default)",
            "is_visible": false,
            "vertical_centering": true,
            "spin_icon": true,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "30px",
            "single_height": true,
            "min_height_css": "30px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTUmO0",
          "default_name": "Icon L",
          "name": "Icon Save Loader",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group Parent Loader/Save",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_"
};
