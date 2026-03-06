export const group_loader_chat = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 8,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#ffffff"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#121213"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
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
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "coverGroup"
      },
      "type": "TextExpression"
    },
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "type": "Group",
  "id": "bTsRZ0",
  "default_name": "Group XZZZZ",
  "elements": {
    "bTsSt0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 2,
        "floating_reference": "top",
        "custom_id": "bTqYR0",
        "order": 1,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "single_width": true,
        "margin_bottom": 160,
        "min_width_css": "30px",
        "single_height": false,
        "min_height_css": "30px",
        "horiz_alignment": "center",
        "nonant_alignment": "aa",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTsSn0",
      "default_name": "Dot Loader HTML A"
    }
  },
  "name": "Group loader chat",
  "style": "Group_transparent_"
};
