export const Group_Add_Files_Instructions_to_Project = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUif0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.project",
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "none",
    "border_style": "none",
    "order": 4,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "margin_top": 44,
    "padding_top": 0,
    "single_width": false,
    "margin_bottom": 56,
    "max_width_css": "780px",
    "single_height": false,
    "min_height_css": "88px",
    "horiz_alignment": "center",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_left": 10,
    "border_roundness_right": 10,
    "border_roundness_bottom": 10,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUif0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "not_equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "parameter_name": {
                      "entries": {
                        "0": "new_chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl"
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
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
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
        "margin_top": 24,
        "padding_left": 8,
        "margin_bottom": 24,
        "padding_right": 8
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUfM0",
  "current_parent": "bTKbU0",
  "default_name": "Group GZ",
  "elements": {
    "bTKnD0": {
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
      }
    },
    "bTKnT0": {
      "properties": {
        "height": 0,
        "left": 30,
        "top": 33.796875,
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
        "order": 4,
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
        "collapse_when_hidden": true,
        "border_roundness_right": 19,
        "border_roundness_bottom": 19
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
            "border_color": "rgba(36,86,98,1)"
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
            "is_slidable": false
          },
          "type": "State"
        },
        "2": {
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
            "padding_right": 16,
            "padding_bottom": 16
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTUfT0",
      "current_parent": "bTKme0",
      "default_name": "Group IZ",
      "elements": {
        "bTmUa1": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 240,
            "zindex": 7,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508895621x403179918408170800/Wrap%20Icon%20%285%29.svg"
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
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508845651x647224653210808300/Wrap%20Icon%20%283%29.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTmUV1",
          "current_parent": "bTUfT0",
          "default_name": "Image S",
          "style": "Image_standard_image_"
        },
        "bTmUg1": {
          "properties": {
            "height": 0,
            "left": 20,
            "top": 60,
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
          "id": "bTmUb1",
          "default_name": "Group KZZZZ",
          "elements": {
            "bTmUh1": {
              "properties": {
                "height": 0,
                "left": -20,
                "top": -60,
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
              "id": "bTXGu",
              "current_parent": "bTUfT0",
              "default_name": "Group DZZZ",
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
                          "element_id": "bTUfT0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bTXGz",
                  "default_name": "Icon N",
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
                  "id": "bTXHA",
                  "default_name": "Group DZZZ",
                  "elements": {
                    "bTXGc": {
                      "properties": {
                        "text": {
                          "entries": {
                            "0": "Add instructions"
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
                      "states": {
                        "0": {
                          "condition": {
                            "next": {
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
                                "type": "Message",
                                "name": "custom_instructions_list_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUif0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "properties": {
                            "text": {
                              "entries": {
                                "0": "Edit instructions"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "State"
                        }
                      },
                      "type": "Text",
                      "id": "bTXHF",
                      "default_name": "Text T",
                      "style": "Text_inter___400___14px___white_"
                    }
                  },
                  "style": "Group_transparent_"
                }
              },
              "name": "Group Instructions Header",
              "style": "Group_transparent_"
            },
            "bTmUl1": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Tailor the way LLM responds in this project"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -20,
                "top": -60,
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
                      "name": "new_custom_instructions_text",
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
                                            "name": "new_custom_instructions_text",
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
                                            "name": "new_custom_instructions_text",
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
                            "name": "new_custom_instructions_text",
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
              "id": "bTUfY0",
              "current_parent": "bTKme0",
              "default_name": "Text M",
              "style": "Text_inter___400___16px___neutral_copy_copy_"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "Group Add instructions to Project",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Add Files/Instructions to Project",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
