export const group_remove_from_project = {
  "properties": {
    "height": 0,
    "left": 30,
    "top": 30,
    "width": 0,
    "zindex": 4,
    "border_roundness": 10,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "btn_edit_",
        "1": {
          "next": {
            "next": {
              "next": {
                "args": 5,
                "type": "Message",
                "name": "truncated_right",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIml0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 8,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "36px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTKxb",
  "current_parent": "bTImt0",
  "default_name": "Group I",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": "Remove from project"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_color": "var(--color_bTkRL4_default)",
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 0,
        "fixed_width": false,
        "margin_left": 0,
        "padding_top": 0,
        "margin_right": 0,
        "padding_left": 0,
        "single_width": false,
        "margin_bottom": 0,
        "min_width_css": "0px",
        "padding_right": 0,
        "single_height": false,
        "min_height_css": "0px",
        "padding_bottom": 0,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTKxd",
      "default_name": "Text F",
      "style": "Text_inter___400___14px___white_"
    },
    "bTIhL": {
      "properties": {
        "height": 30,
        "left": 170,
        "top": 22,
        "width": 30,
        "zindex": 4,
        "icon": "feather corner-down-right",
        "icon_color": "rgba(119,123,126,1)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "18px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "18px",
        "padding_bottom": 0,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Icon",
      "id": "bTKxh",
      "default_name": "Icon F"
    }
  },
  "name": "Group Remove from project",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
