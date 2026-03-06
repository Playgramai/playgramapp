export const text_no_projects = {
  "properties": {
    "text": {
      "entries": {
        "0": "No projects"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": 0,
    "top": 0,
    "width": 100,
    "zindex": 14,
    "font_color": "var(--color_bTkRL4_default)",
    "font_size": 12,
    "is_visible": false,
    "line_height": 1.2,
    "vertical_centering": true,
    "order": 3,
    "fit_width": true,
    "fit_height": true,
    "margin_top": 8,
    "margin_left": 36,
    "single_width": false,
    "margin_bottom": 8,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
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
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIJL0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
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
        "font_color": "var(--color_bTsrp2_default)"
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTKBQ",
  "current_parent": "bTIaV",
  "default_name": "Text F",
  "name": "Text No projects"
};
