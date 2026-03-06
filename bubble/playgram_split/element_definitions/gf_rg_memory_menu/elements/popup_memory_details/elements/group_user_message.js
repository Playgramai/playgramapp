export const group_user_message = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 80.796875,
    "width": 0,
    "zindex": 25,
    "vertical_centering": true,
    "order": 12,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTOvI0",
  "default_name": "Group G",
  "elements": {
    "bTOlp0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -80.796875,
        "width": 0,
        "zindex": 24,
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 4,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTOvJ0",
      "default_name": "Group G",
      "elements": {
        "bTOlY0": {
          "properties": {
            "text": {
              "entries": {
                "0": "User message"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -80.796875,
            "width": 100,
            "zindex": 22,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTOvN0",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_"
        },
        "bTOlZ0": {
          "properties": {
            "height": 30,
            "left": -16,
            "top": -80.796875,
            "width": 30,
            "zindex": 23,
            "icon": "feather user",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "15px",
            "single_height": true,
            "min_height_css": "15px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "icon_color": "var(--color_bTsrq2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTOvO0",
          "default_name": "Icon D"
        }
      },
      "name": "Group Label",
      "style": "Group_transparent_"
    },
    "bTOmJ0": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 25,
        "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_roundness": 8,
        "vertical_centering": true,
        "border_style": "solid",
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "padding_top": 16,
        "padding_left": 16,
        "single_width": false,
        "padding_right": 16,
        "single_height": false,
        "max_height_css": "150px",
        "padding_bottom": 16,
        "horiz_alignment": "flex-start",
        "overflow_scroll": true,
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "border_color": "var(--color_bTspn2_default)",
            "background_style": "bgcolor",
            "bgcolor": "var(--color_bTspn2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTOvP0",
      "default_name": "Group G",
      "elements": {
        "bTOmP0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTOxX0",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 52.5,
            "top": 21.203125,
            "width": 100,
            "zindex": 2,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTOvT0",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_"
        }
      },
      "name": "Group User Message",
      "style": "Group_transparent_"
    }
  },
  "name": "Group User Message",
  "style": "Group_transparent_"
};
