export const group_tool_not_clickable = {
  "properties": {
    "height": 0,
    "left": -270.21875,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 16,
    "data_source": {
      "properties": {
        "option_set": "option.llm_tool__os_",
        "option_value": "image_generation"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "group_type": "option.llm_tool__os_",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(73,73,73,1)",
    "border_style": "solid",
    "order": 2,
    "use_gap": true,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 6,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 8,
    "single_width": false,
    "margin_bottom": 2,
    "min_width_css": "0px",
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "30px",
    "padding_bottom": 6,
    "vert_alignment": "center",
    "button_disabled": true,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "image_generation"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUfA0"
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
        "button_disabled": false,
        "container_horiz_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTqaE1",
  "current_parent": "bTqZx1",
  "default_name": "Group UZZZZ",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_color": "var(--color_bTkRX4_default)",
        "font_size": 12,
        "line_height": 1.2,
        "vertical_centering": true,
        "order": 11,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "button_disabled": true,
        "horiz_alignment": "flex-start",
        "title_attribute": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": {
                "properties": {
                  "breakpoint_id": "built-in-mobile"
                },
                "type": "Breakpoint",
                "is_slidable": false
              },
              "type": "Message",
              "name": "less_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "font_size": 14
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTqaJ1",
      "default_name": "Text GZ"
    },
    "bTPJx": {
      "properties": {
        "height": 18,
        "left": 8,
        "top": 9,
        "width": 18,
        "zindex": 6,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.llm_tool__os_",
        "vertical_centering": true,
        "order": 4,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTqaK1",
      "default_name": "Group UZZZZ",
      "elements": {
        "bTPKB": {
          "properties": {
            "height": 240,
            "left": -8,
            "top": -8,
            "width": 320,
            "zindex": 2,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": false,
            "min_height_css": "240px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "title_attribute": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "nonant_alignment": "bb",
            "use_aspect_ratio": true,
            "collapse_when_hidden": true
          },
          "type": "Image",
          "id": "bTqaL1",
          "default_name": "Image X",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Image Container/Remove Tool",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Tool Not Clickable",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
