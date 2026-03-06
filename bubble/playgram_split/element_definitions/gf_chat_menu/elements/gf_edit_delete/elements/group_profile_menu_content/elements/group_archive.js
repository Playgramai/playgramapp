export const group_archive = {
  "properties": {
    "height": 0,
    "left": 30,
    "top": 30,
    "width": 0,
    "zindex": 4,
    "border_roundness": 6,
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
    "is_visible": true,
    "vertical_centering": true,
    "order": 1,
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
    "column_gap": 12,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 6,
    "single_width": false,
    "padding_right": 6,
    "single_height": false,
    "min_height_css": "32px",
    "padding_bottom": 6,
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
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTJsF",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIml0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTKzg",
  "current_parent": "bTImt0",
  "default_name": "Group J",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": "Archive"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "order": 5,
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
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": 768,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIml0",
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
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTJsF",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIml0"
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
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
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
            "properties": {
              "element_id": "bTKzg"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTKzl",
      "default_name": "Text G",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTmPX3": {
      "properties": {
        "height": 240,
        "left": -120,
        "top": -40,
        "width": 240,
        "zindex": 5,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980706544x344389349090099140/Folder%20Archive.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769876819793x499577850854322700/Folder%20Archive%20%284%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmPV3",
      "default_name": "Image B",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Archive",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
