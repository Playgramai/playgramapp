export const group_workspace_and_user_modal_usage = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 19,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "is_visible": false,
    "vertical_centering": true,
    "order": 17,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 15,
    "padding_left": 50,
    "single_width": false,
    "padding_right": 50,
    "single_height": false,
    "padding_bottom": 15,
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_top": "solid",
    "container_layout": "column",
    "four_border_style": true,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.selected_user_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTfQP0"
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
          "args": 980,
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
        "padding_left": 12,
        "padding_right": 12
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTggU1",
  "default_name": "Group J",
  "elements": {
    "bTgga1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Model Usage"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "width": 100,
        "zindex": 3,
        "is_visible": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 0,
        "margin_left": 0,
        "single_width": false,
        "margin_bottom": 10,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "Gpt 5",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTfZn"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "No usage data available"
              },
              "type": "TextExpression"
            },
            "margin_bottom": 0
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTfar",
      "current_parent": "bTfaR",
      "default_name": "Text O",
      "style": "Text_inter___400___14px___white_copy_"
    },
    "bTggb1": {
      "properties": {
        "height": 350,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 17,
        "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "columns": 3,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "descending": true,
                    "sort_field": "agg0"
                  },
                  "type": "Message",
                  "name": "sorted",
                  "is_slidable": true
                },
                "properties": {
                  "groupings": {
                    "0": {
                      "fn": "exact",
                      "end": {
                        "type": "Empty"
                      },
                      "start": {
                        "type": "Empty"
                      },
                      "message": "_api_c2_model",
                      "interval": {
                        "type": "Empty"
                      },
                      "information": {
                        "type": "Empty"
                      },
                      "filling_gaps": {
                        "type": "Empty"
                      }
                    }
                  },
                  "aggregations": {
                    "0": {
                      "fn": "sum",
                      "message": "_api_c2_total_messages"
                    }
                  }
                },
                "type": "Message",
                "name": "group_by",
                "is_slidable": true
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2_workspace_id",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "equals"
                  }
                },
                "descending": true
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_AAx",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTleZ1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "struct.eyJjYXB0aW9uIjoiR3JvdXBpbmciLCJkZWZpbml0aW9uIjp7Imdyb3VwaW5nMCI6WyJtb2RlbCIsInRleHQiXSwiYWdnMCI6WyJzdW0gb2YgdG90YWxfbWVzc2FnZXMiLCJudW1iZXIiXX19",
        "is_visible": true,
        "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "separator_style": "none",
        "border_style": "none",
        "order": 2,
        "masonry": true,
        "fit_width": true,
        "fit_height": true,
        "fixed_rows": false,
        "row_cell_gap": 10,
        "single_width": false,
        "fixed_columns": false,
        "single_height": false,
        "column_cell_gap": 30,
        "horiz_alignment": "flex-start",
        "border_color_top": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style_top": "solid",
        "container_layout": "column",
        "four_border_style": false,
        "cell_min_width_css": "300px",
        "cell_min_height_css": "0px",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 415,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "cell_min_width_css": "248px"
          },
          "type": "State"
        }
      },
      "type": "RepeatingGroup",
      "id": "bTfZn",
      "current_parent": "bTfQP0",
      "default_name": "RepeatingGroup G",
      "elements": {
        "bTfaT": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 9,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "struct.eyJjYXB0aW9uIjoiR3JvdXBpbmciLCJkZWZpbml0aW9uIjp7Imdyb3VwaW5nMCI6WyJtb2RlbCIsInRleHQiXSwiYWdnMCI6WyJzdW0gb2YgdG90YWxfbWVzc2FnZXMiLCJudW1iZXIiXX19",
            "vertical_centering": true,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": false,
            "max_width_css": "350px",
            "min_width_css": "40px",
            "padding_right": 0,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTfaR",
          "default_name": "Group U",
          "elements": {
            "bTfaX": {
              "properties": {
                "height": 280,
                "left": 0,
                "top": 0,
                "width": 280,
                "zindex": 3,
                "border_roundness": 0,
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "group_type": "struct.eyJjYXB0aW9uIjoiR3JvdXBpbmciLCJkZWZpbml0aW9uIjp7Imdyb3VwaW5nMCI6WyJtb2RlbCIsInRleHQiXSwiYWdnMCI6WyJzdW0gb2YgdG90YWxfbWVzc2FnZXMiLCJudW1iZXIiXX19",
                "is_visible": true,
                "vertical_centering": true,
                "order": 2,
                "use_gap": true,
                "fit_width": false,
                "column_gap": 10,
                "fit_height": true,
                "padding_top": 6,
                "single_width": false,
                "single_height": false,
                "padding_bottom": 6,
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "four_border_style": false,
                "border_roundness_top": 10,
                "collapse_when_hidden": true,
                "border_roundness_right": 10
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
                    "bgcolor": "rgba(var(--color_bTGzq_default_rgb), 0.2)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bTfZp",
              "current_parent": "bTJFz",
              "default_name": "Group T",
              "elements": {
                "bTJHh": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "grouping0",
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
                    "left": -48,
                    "top": -8,
                    "width": 100,
                    "zindex": 3,
                    "order": 2,
                    "fit_width": false,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "0px",
                    "single_height": false,
                    "min_height_css": "0px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "editor_preview_text": "Gpt 5",
                    "collapse_when_hidden": true
                  },
                  "type": "Text",
                  "id": "bTfZt",
                  "default_name": "Text N",
                  "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
                },
                "bTdjb1": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "agg0",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "2": " (",
                        "3": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTleC1"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "next": {
                                "properties": {
                                  "formatting_type": "percentage",
                                  "decimal_place": 2
                                },
                                "type": "Message",
                                "name": "format_number",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "divide",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "agg0",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "4": ")"
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": 100,
                    "top": 37,
                    "width": 100,
                    "zindex": 7,
                    "font_alignment": "right",
                    "is_visible": true,
                    "order": 9,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "80px",
                    "single_height": false,
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "editor_preview_text": "2 (10%)",
                    "collapse_when_hidden": true
                  },
                  "type": "Text",
                  "id": "bTfZu",
                  "default_name": "Text N",
                  "name": "Text Owner",
                  "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
                }
              },
              "name": "Group Model Usage Cell",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            },
            "bTfaY": {
              "properties": {
                "height": 25,
                "left": 0,
                "top": 0,
                "width": 300,
                "zindex": 8,
                "border_roundness": 10,
                "font_color": "rgba(255,255,255,0)",
                "font_size": 0,
                "bgcolor": "var(--color_bTkRW4_default)",
                "border_style": "none",
                "order": 3,
                "bar_color": "var(--color_bTkRR4_default)",
                "fit_height": false,
                "percentage": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "get_group_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTleC1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": 100,
                        "type": "Message",
                        "name": "times",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "divide",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "agg0",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "font_weight": "100",
                "single_width": false,
                "min_width_css": "200px",
                "single_height": true,
                "min_height_css": "7px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
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
                    "bgcolor": "rgba(var(--color_bToSr_default_rgb), 0.5)",
                    "bar_color": "var(--color_bToSr_default)"
                  },
                  "type": "State"
                }
              },
              "type": "progressbar-ProgressBar",
              "id": "bTfaF",
              "default_name": "ProgressBar A"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "[NEW] RG User's Model Usage",
      "style": "RepeatingGroup_transparent_"
    }
  },
  "name": "Group Workspace and User modal usage",
  "style": "Group_transparent_",
};
