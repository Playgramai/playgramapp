export const rg_files = {
  "properties": {
    "height": 350,
    "left": -24,
    "top": -82,
    "width": 280,
    "zindex": 28,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "columns": 1,
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.data.Get.Messages_v3",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTjyf"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "api.apiconnector2.bTHIF0.bTjyl.body.data.Get.Messages_v3",
    "rows": 4,
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "separator_style": "solid",
    "separator_width": 1,
    "border_style": "solid",
    "order": 2,
    "masonry": false,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": false,
    "row_cell_gap": 5,
    "single_width": true,
    "fixed_columns": true,
    "min_width_css": "100%",
    "single_height": false,
    "auto_fit_column": false,
    "column_cell_gap": 5,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "cell_min_width_css": "100px",
    "cell_min_height_css": "10px",
    "collapse_when_hidden": true
  },
  "states": {
    "4": {
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
    }
  },
  "type": "RepeatingGroup",
  "id": "bTkIW3",
  "default_name": "RepeatingGroup D",
  "elements": {
    "bTjpJ1": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 2,
        "border_roundness": 0,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "api.apiconnector2.bTHIF0.bTjyl.body.data.Get.Messages_v3",
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 16,
        "fit_height": true,
        "padding_top": 10,
        "padding_left": 16,
        "single_width": false,
        "min_width_css": "200px",
        "padding_right": 16,
        "single_height": false,
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
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
            "bgcolor": "rgba(255,255,255,0.1)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTkIX3",
      "default_name": "Group I",
      "elements": {
        "bTkKf3": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "_(\\d+)(?=\\.[^.]+$)"
                              },
                              "type": "TextExpression"
                            },
                            "use_regex": true
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "last_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "/"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_file_url",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 5,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "200px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "editor_preview_text": "file name",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTkKa3",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_copy_"
        },
        "bTpeJ0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "_(\\d+)(?=\\.[^.]+$)"
                              },
                              "type": "TextExpression"
                            },
                            "use_regex": true
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "last_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "/"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_file_url",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 10,
            "top": 10,
            "width": 100,
            "zindex": 5,
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "editor_preview_text": "file name",
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
          "id": "bTpeE0",
          "current_parent": "bTkIX3",
          "default_name": "Text J",
          "style": "Text_inter___400___14px___white_copy_"
        },
        "bTpeP0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2__additional.creationTimeUnix",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 20,
            "top": 20,
            "width": 100,
            "zindex": 5,
            "order": 4,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "editor_preview_text": "file name",
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
          "id": "bTpeK0",
          "current_parent": "bTkIX3",
          "default_name": "Text K",
          "style": "Text_inter___400___14px___white_copy_"
        },
        "bTpeb0": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 3,
            "is_visible": false,
            "vertical_centering": true,
            "order": 5,
            "fit_width": false,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "26px",
            "single_height": true,
            "min_height_css": "26px",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTpeW0",
          "current_parent": "bTkIX3",
          "default_name": "Group Q",
          "elements": {
            "bTpeh0": {
              "properties": {
                "height": 30,
                "left": 12.4921875,
                "top": 12.90625,
                "width": 30,
                "zindex": 2,
                "icon": "feather trash-2",
                "icon_color": "var(--color_bTkRL4_default)",
                "vertical_centering": true,
                "order": 1,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "14px",
                "single_height": true,
                "min_height_css": "14px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "type": "Icon",
              "id": "bTpec0",
              "default_name": "Icon D"
            }
          },
          "name": "Group delete",
          "style": "Group_transparent_"
        }
      },
      "name": "Group temp_images",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Files",
  "style": "RepeatingGroup_transparent_",
};
