export const group_toggle_projects_label = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 25,
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "show-all-projects"
      },
      "type": "TextExpression"
    },
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTdSo1",
  "default_name": "Group B",
  "elements": {
    "bTcfp0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 3.1015625,
        "width": 0,
        "zindex": 26,
        "vertical_centering": true,
        "order": 5,
        "row_gap": 4,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTdSu1",
      "default_name": "Group B",
      "elements": {
        "bTcft0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Admin project view"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 23,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "20px",
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
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "margin_left": 38
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTdSv1",
          "current_parent": "bTKPl",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTcfu0": {
          "properties": {
            "text": {
              "entries": {
                "0": "See every project in the workspace. When off, you will only see projects that you are part of."
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 23,
            "font_color": "rgba(112,112,114,1)",
            "is_visible": true,
            "line_height": 1.3,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTdSz1",
          "current_parent": "bTcdR0",
          "default_name": "Text B",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTnwd2": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 7,
        "border_roundness": 20,
        "is_visible": true,
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
                      "0": "#555557"
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
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 0,
        "padding_left": 2,
        "single_width": true,
        "min_width_css": "28px",
        "padding_right": 2,
        "single_height": true,
        "min_height_css": "16px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
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
              "name": "custom.show_all_projects_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdRs1"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "rgba(59,143,162,1)",
            "container_horiz_alignment": "flex-end"
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
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "margin_right": -38
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTnwX2",
      "current_parent": "bTdSo1",
      "default_name": "Group NZ",
      "elements": {
        "bTiTu1": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 2,
            "border_roundness": 100,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#419db2"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#9d9d9e"
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
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "12px",
            "single_height": true,
            "min_height_css": "12px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": false,
            "container_vert_alignment": "center"
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
                  "name": "custom.show_all_projects_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdRs1"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "rgba(255,255,255,1)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTnwZ2",
          "default_name": "Group NZ",
          "name": "Group Share toggle",
          "style": "Group_transparent_",
          "transitions": {
            "margin_left": {
              "fn": "ease",
              "duration": 300
            }
          }
        }
      },
      "name": "G Share Button",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 300
        }
      }
    }
  },
  "name": "Group Toggle Projects/Label",
  "style": "Group_transparent_",
};
