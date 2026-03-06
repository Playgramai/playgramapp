export const group_header = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 37,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 16,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "26px",
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_top": "solid",
    "container_layout": "row",
    "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_left": "solid",
    "four_border_style": true,
    "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_style_right": "solid",
    "border_roundness_top": 12,
    "collapse_when_hidden": true,
    "border_roundness_right": 12
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.library__os_",
                "option_value": "files"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2__additional.id",
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
                  "element_id": "bTkIW3"
                },
                "type": "GetElement",
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
          "type": "Message",
          "name": "custom.memory_input_type_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjGV1"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
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
  "id": "bTpdf0",
  "default_name": "Group O",
  "elements": {
    "bTpdr0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Name"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "200px",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTpdm0",
      "current_parent": "bTpdf0",
      "default_name": "Text F",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTpdx0": {
      "properties": {
        "text": {
          "entries": {
            "0": "File type"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 10,
        "top": 10,
        "width": 100,
        "zindex": 2,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 768,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTpds0",
      "current_parent": "bTpdf0",
      "default_name": "Text H",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTpeD0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Date created"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 10,
        "top": 10,
        "width": 100,
        "zindex": 2,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "100%",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 768,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTpdy0",
      "current_parent": "bTpdf0",
      "default_name": "Text I",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    },
    "bTpeV0": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 3,
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTpeQ0",
      "default_name": "Group P",
      "name": "Group Placeholder",
      "style": "Group_transparent_"
    }
  },
  "name": "Group header",
  "style": "Group_transparent_"
};
