export const group_parent_input_search_member = {
  "properties": {
    "height": 36,
    "left": 0,
    "top": -46,
    "width": 446,
    "zindex": 20,
    "vertical_centering": true,
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "200px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 1440,
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.memory_management_tabs__os_0",
                      "option_value": "project"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.tab_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
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
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": {
          "type": "Empty"
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 940,
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
        "max_width_css": {
          "type": "Empty"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNnZ",
  "current_parent": "bTNkb",
  "default_name": "Group J",
  "elements": {
    "bTJNl": {
      "properties": {
        "height": 48,
        "left": -10,
        "top": -10,
        "width": 250,
        "zindex": 2,
        "mandatory": false,
        "content": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "placeholder": {
          "entries": {
            "0": "Search memory..."
          },
          "type": "TextExpression"
        },
        "order": 3,
        "unique_id": {
          "entries": {
            "0": "searchMemory"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "padding_left": 44,
        "single_width": false,
        "single_height": true,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTNnb",
      "default_name": "Input A",
      "name": "Input Search Memories",
      "style": "Input_standart_new_input_"
    },
    "bTnmL": {
      "properties": {
        "height": 240,
        "left": 14,
        "top": -40,
        "width": 240,
        "zindex": 5,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766472465646x543659952419592000/Search.svg"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "margin_left": 14,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "type": "Image",
      "id": "bTnmJ",
      "default_name": "Image A",
      "style": "Image_standard_image_"
    },
    "bTOUB0": {
      "properties": {
        "bold": false,
        "font_face": "var(--font_default):::600",
        "height": 44,
        "left": 50,
        "top": 26.9140625,
        "width": 150,
        "zindex": 4,
        "icon": "feather plus",
        "border_roundness": 6,
        "font_color": "var(--color_primary_contrast_default)",
        "font_size": 16,
        "icon_color": "var(--color_primary_contrast_default)",
        "is_visible": false,
        "line_height": 1.4,
        "letter_spacing": 0,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
        "fit_width": true,
        "icon_size": 16,
        "button_gap": 12,
        "fit_height": true,
        "button_type": "icon",
        "font_family": "var(--font_default)",
        "font_weight": "600",
        "padding_top": 0,
        "margin_right": 8,
        "single_width": false,
        "min_width_css": "25px",
        "single_height": false,
        "min_height_css": "25px",
        "padding_bottom": 0,
        "horiz_alignment": "flex-start",
        "nonant_alignment": "cb",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "isnt_clickable",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "var(--color_bTGzr_default)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_clickable",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "opacity": 25
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTOTw0",
      "default_name": "Button B",
      "name": "Button Add Memory (from Search)",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Parent Input Search Member",
  "style": "Group_transparent_"
};
