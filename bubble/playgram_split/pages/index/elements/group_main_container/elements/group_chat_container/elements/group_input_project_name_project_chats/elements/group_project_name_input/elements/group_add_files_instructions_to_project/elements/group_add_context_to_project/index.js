export const group_add_context_to_project = {
  "properties": {
    "height": 0,
    "left": 20,
    "top": 23.796875,
    "width": 0,
    "zindex": 17,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "border_style": "solid",
    "order": 3,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 10,
    "padding_left": 10,
    "single_width": false,
    "padding_right": 10,
    "single_height": false,
    "min_height_css": "88px",
    "padding_bottom": 10,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_color_right": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_right": "solid",
    "border_roundness_top": 19,
    "collapse_when_hidden": true,
    "border_roundness_left": 19
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_pressed",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
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
        "border_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#419DB2"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#245662"
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
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 490,
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
        "padding_top": 16,
        "padding_left": 16,
        "min_width_css": "100%",
        "padding_right": 16,
        "padding_bottom": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUfN0",
  "default_name": "Group HZ",
  "elements": {
    "bTmUJ1": {
      "properties": {
        "height": 240,
        "left": 34,
        "top": 4.6015625,
        "width": 240,
        "zindex": 7,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508902008x713935803548723700/Wrap%20Icon%20%284%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "32px",
        "single_height": false,
        "min_height_css": "240px",
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508838527x454656722241098600/Wrap%20Icon%20%282%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTmUH1",
      "default_name": "Image R",
      "style": "Image_standard_image_"
    },
    "bTmUP1": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 50,
        "width": 0,
        "zindex": 8,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 2,
        "row_gap": 4,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTmUN1",
      "default_name": "Group VZZZ",
      "elements": {
        "bTmUT1": {
          "properties": {
            "height": 0,
            "left": -10,
            "top": -50,
            "width": 0,
            "zindex": 6,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "custom.project",
            "vertical_centering": true,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTXGj",
          "default_name": "Group JZZ",
          "elements": {
            "bTXGp": {
              "properties": {
                "height": 30,
                "left": -20,
                "top": -20,
                "width": 30,
                "zindex": 5,
                "icon": "feather arrow-up-right",
                "icon_color": "var(--color_bTGzv_default)",
                "is_visible": true,
                "vertical_centering": true,
                "order": 2,
                "opacity": 0,
                "fit_height": false,
                "padding_top": 0,
                "padding_left": 0,
                "single_width": true,
                "min_width_css": "16px",
                "padding_right": 0,
                "single_height": true,
                "min_height_css": "16px",
                "padding_bottom": 0,
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
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
                    "properties": {
                      "element_id": "bTUfN0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "State"
                }
              },
              "type": "Icon",
              "id": "bTXGd",
              "default_name": "Icon M",
              "transitions": {
                "opacity": {
                  "fn": "ease",
                  "duration": 150
                }
              }
            },
            "bTXGt": {
              "properties": {
                "height": 0,
                "left": -20,
                "top": -20,
                "width": 0,
                "zindex": 4,
                "data_source": {
                  "type": "ElementParent"
                },
                "group_type": "custom.project",
                "vertical_centering": true,
                "order": 1,
                "use_gap": true,
                "fit_width": true,
                "column_gap": 8,
                "fit_height": true,
                "single_width": false,
                "single_height": false,
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTXGV",
              "default_name": "Group HZZ",
              "elements": {
                "bTXGc": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Add context"
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": -20,
                    "top": -20,
                    "width": 100,
                    "zindex": 2,
                    "order": 2,
                    "fit_width": true,
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
                  "id": "bTUfR0",
                  "default_name": "Text K",
                  "style": "Text_inter___400___14px___white_"
                }
              },
              "style": "Group_transparent_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTmUU1": {
          "properties": {
            "text": {
              "entries": {
                "0": "Upload any files and text relevant for this project"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -10,
            "top": -50,
            "width": 100,
            "zindex": 2,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "280px",
            "min_width_css": "0px",
            "single_height": false,
            "max_height_css": "40px",
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
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "relevant_context_text",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 80,
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "args": 76,
                                          "type": "Message",
                                          "name": "truncated",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "relevant_context_text",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "is_slidable": false
                                    },
                                    "2": "..."
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "type": "Message",
                                        "name": "relevant_context_text",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "greater_than",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "length",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "relevant_context_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTUfS0",
          "current_parent": "bTKme0",
          "default_name": "Text L",
          "style": "Text_inter___400___16px___neutral_copy_copy_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group Add context to Project",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
