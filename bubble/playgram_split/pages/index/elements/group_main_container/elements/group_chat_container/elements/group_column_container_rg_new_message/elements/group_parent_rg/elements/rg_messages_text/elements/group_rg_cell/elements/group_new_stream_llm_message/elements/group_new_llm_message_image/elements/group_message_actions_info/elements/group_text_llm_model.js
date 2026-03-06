export const group_text_llm_model = {
  "properties": {
    "height": 0,
    "left": 201.5546875,
    "top": 10,
    "width": 0,
    "zindex": 14,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 6,
    "boxshadow_style": "none",
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
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
                  "0": "#e5e7eb"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#1b1b1d"
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
    "border_style": "solid",
    "boxshadow_blur": 12,
    "boxshadow_color": "rgba(0,0,0,0.2)",
    "boxshadow_spread": 0,
    "order": 1,
    "opacity": 100,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 6,
    "single_width": false,
    "padding_right": 6,
    "single_height": false,
    "padding_bottom": 6,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
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
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbX0",
  "current_parent": "bTVCz0",
  "default_name": "Group A",
  "elements": {
    "bTXFV0": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -191.5546875,
        "top": 0,
        "width": 100,
        "zindex": 11,
        "is_visible": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "400px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "LLM Model",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTtbY0",
      "current_parent": "bTVDB0",
      "default_name": "Text OZ",
      "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
    }
  },
  "name": "Group Text LLM Model",
  "style": "Group_transparent_",
  "transitions": {
    "opacity": {
      "fn": "ease-in-out",
      "duration": 500
    }
  }
};
