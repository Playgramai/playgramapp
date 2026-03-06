import { Group_Cell_Memory_use_button } from './group_cell_memory_use_button/index.js';

export const elements = {
  "bTJHg": Group_Cell_Memory_use_button,
  "bTOUb0": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 6,
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
      "order": 1,
      "use_gap": false,
      "fit_width": false,
      "column_gap": 20,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
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
            "args": 1,
            "next": {
              "args": {
                "next": {
                  "args": 540,
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTMGw",
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
      "1": {
        "condition": {
          "next": {
            "args": 962,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
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
    "id": "bTOUV0",
    "default_name": "Group IZ",
    "elements": {
      "bTnnB": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 5.796875,
          "width": 0,
          "zindex": 3,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "300px",
          "single_height": false,
          "min_height_css": "26px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_left": "none",
          "four_border_style": true,
          "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_right": "solid",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTnmz",
        "default_name": "Group NZ",
        "elements": {
          "bTnnF": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Content"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOUf0",
            "default_name": "Text U",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          }
        },
        "name": "Group content",
        "style": "Group_transparent_"
      },
      "bTnnL": {
        "properties": {
          "height": 0,
          "left": 200,
          "top": 12.796875,
          "width": 0,
          "zindex": 4,
          "vertical_centering": true,
          "order": 5,
          "fit_width": false,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "26px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_left": "none",
          "four_border_style": true,
          "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_right": "solid",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTnnG",
        "default_name": "Group OZ",
        "elements": {
          "bTnnM": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Type"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -160,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "150px",
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
                    "args": 962,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "max_width_css": "108px"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTOUr0",
            "current_parent": "bTOUV0",
            "default_name": "Text V",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          }
        },
        "name": "Group type",
        "style": "Group_transparent_"
      },
      "bTnnS": {
        "properties": {
          "height": 0,
          "left": 200,
          "top": 12.796875,
          "width": 0,
          "zindex": 5,
          "vertical_centering": true,
          "order": 6,
          "fit_width": false,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "26px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTnnN",
        "default_name": "Group PZ",
        "elements": {
          "bTnnT": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Date"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -150,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "200px",
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOUx0",
            "current_parent": "bTOUV0",
            "default_name": "Text W",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          }
        },
        "name": "Group date",
        "style": "Group_transparent_"
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
          "order": 8,
          "fit_width": false,
          "fit_height": true,
          "single_width": true,
          "max_width_css": "100px",
          "min_width_css": "34px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTOVD0",
        "current_parent": "bTOUV0",
        "default_name": "Text X",
        "name": "Text Placeholder",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "name": "Group Table Header",
    "style": "Group_transparent_"
  },
};
