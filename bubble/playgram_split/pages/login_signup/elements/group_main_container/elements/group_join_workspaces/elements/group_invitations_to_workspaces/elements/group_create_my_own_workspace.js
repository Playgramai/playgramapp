export const group_create_my_own_workspace = {
  "properties": {
    "height": 0,
    "left": 130.6953125,
    "top": 173.796875,
    "width": 0,
    "zindex": 26,
    "is_visible": false,
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "constraints": {
                "0": {
                  "key": "invitation_accepted__boolean",
                  "value": false,
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
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTQJt0",
  "current_parent": "bTQGm0",
  "default_name": "Group AZ",
  "elements": {
    "bTQIj0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Create new workspace"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 0,
        "top": -163.796875,
        "width": 150,
        "zindex": 24,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "120px",
        "single_height": false,
        "min_height_css": "44px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTQJz0",
      "current_parent": "bTQGm0",
      "default_name": "Button M",
      "name": "Button Continue to workspace",
      "style": "Button_primary_new_"
    },
    "bTQKz0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 27,
        "vertical_centering": true,
        "order": 2,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 30,
        "fit_height": true,
        "margin_top": 32,
        "single_width": false,
        "margin_bottom": 32,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTQKo0",
      "current_parent": "bTQJt0",
      "default_name": "Group CZ",
      "elements": {
        "bTQKd0": {
          "properties": {
            "height": 150,
            "left": 0,
            "top": 0,
            "width": 150,
            "zindex": 26,
            "bgcolor": "rgba(42,42,45,1)",
            "order": 3,
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "1px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Shape",
          "id": "bTQKt0",
          "default_name": "Shape D",
          "style": "Shape_standard_shape_"
        },
        "bTQKh0": {
          "properties": {
            "text": {
              "entries": {
                "0": "OR"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 25,
            "font_color": "rgba(42,42,45,1)",
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTQKu0",
          "default_name": "Text X",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTQKn0": {
          "properties": {
            "height": 150,
            "left": 10,
            "top": 10,
            "width": 150,
            "zindex": 26,
            "bgcolor": "rgba(42,42,45,1)",
            "order": 1,
            "fit_height": false,
            "single_width": false,
            "single_height": true,
            "min_height_css": "1px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Shape",
          "id": "bTQKv0",
          "current_parent": "bTQKX0",
          "default_name": "Shape D",
          "style": "Shape_standard_shape_"
        }
      },
      "name": "Group Divider",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Create my own workspace",
  "style": "Group_transparent_"
};
