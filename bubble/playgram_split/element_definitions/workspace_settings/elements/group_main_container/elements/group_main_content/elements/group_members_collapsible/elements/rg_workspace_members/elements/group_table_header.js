export const group_table_header = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 6,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "26px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 640,
          "next": {
            "args": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 1,
          "next": {
            "args": {
              "next": {
                "args": 640,
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "2": {
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTgiw0",
  "current_parent": "bTdVj1",
  "default_name": "Group N",
  "elements": {
    "bTOUh0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Name"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 53.5,
        "top": 18.8046875,
        "width": 100,
        "zindex": 2,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "30%",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTgjB0",
      "default_name": "Text I",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTOUt0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Status"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 63.5,
        "top": 28.8046875,
        "width": 100,
        "zindex": 2,
        "order": 5,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "42px",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTgjC0",
      "current_parent": "bTOUV0",
      "default_name": "Text I",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTOUz0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Role"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 73.5,
        "top": 38.8046875,
        "width": 100,
        "zindex": 2,
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTgjD0",
      "current_parent": "bTOUV0",
      "default_name": "Text I",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTOVF0": {
      "properties": {
        "text": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 83.5,
        "top": 48.8046875,
        "width": 100,
        "zindex": 2,
        "order": 6,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "max_width_css": "100px",
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": false
      },
      "type": "Text",
      "id": "bTgjH0",
      "current_parent": "bTOUV0",
      "default_name": "Text I",
      "name": "Text Placeholder",
      "style": "Text_inter___400___14px____afafaf_"
    }
  },
  "name": "Group Table Header",
  "style": "Group_transparent_"
};
