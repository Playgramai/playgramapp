export const group_project_cell = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "order": 5,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "20px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "type": "Group",
  "id": "bTJVY",
  "current_parent": "bTIJR0",
  "default_name": "Group HZZ",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "is_visible": true,
        "order": 5,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": true,
        "max_height_css": "17px",
        "min_height_css": "18px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_focused",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTJVj"
            },
            "type": "GetElement",
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
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "value": "custom.chat",
                    "parameter_name": {
                      "entries": {
                        "0": "chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl"
                },
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "properties": {
              "value": "custom.project",
              "parameter_name": {
                "entries": {
                  "0": "project"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "properties": {
            "font_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
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
          "properties": {
            "font_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTJVd",
      "default_name": "Text GZ",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    },
    "bTIqp0": {
      "properties": {
        "font_face": "var(--font_default):::400",
        "height": 48,
        "left": -50,
        "top": 12.8125,
        "width": 250,
        "zindex": 18,
        "mandatory": true,
        "border_color": "var(--color_bTHBV_default)",
        "border_roundness": 0,
        "border_width": 2,
        "content": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "text_so_far",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIWL"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "font_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#121213"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#f7f8f9"
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
        "font_size": 14,
        "is_visible": true,
        "letter_spacing": 0,
        "vertical_centering": true,
        "background_style": "none",
        "border_style": "none",
        "order": 4,
        "disabled": false,
        "unique_id": {
          "entries": {
            "0": "input",
            "1": {
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
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "bind_field": "name_text",
        "fit_height": false,
        "font_family": "var(--font_default)",
        "font_weight": "400",
        "padding_top": 0,
        "auto_binding": true,
        "single_width": false,
        "single_height": true,
        "min_height_css": "18px",
        "padding_bottom": 0,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "placeholder_color": "rgba(var(--color_bTHBW_default_rgb), 0)",
        "not_submit_on_enter": true,
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_focused",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Input",
      "id": "bTJVj",
      "default_name": "Input G",
      "name": "Input Project Name",
      "transitions": {
        "border_color": {
          "fn": "ease",
          "duration": 200
        },
        "font_color": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Project Cell",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
