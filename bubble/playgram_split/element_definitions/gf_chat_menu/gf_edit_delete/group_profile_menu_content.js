export const Group_Profile_Menu_Content = {
  "properties": {
    "height": 280,
    "left": 101,
    "top": 39,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "bgcolor": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#f2f3f5"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#2a2a2d"
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
    "row_gap": 8,
    "use_gap": false,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "margin_top": 6,
    "margin_left": 6,
    "padding_top": 8,
    "margin_right": 6,
    "padding_left": 8,
    "single_width": false,
    "margin_bottom": 6,
    "padding_right": 8,
    "single_height": false,
    "padding_bottom": 8,
    "button_disabled": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
        "max_width_css": "48px",
        "horiz_alignment": "flex-start"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTImt0",
  "default_name": "Group A",
  "elements": {
    "bTIhc": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 10,
        "width": 0,
        "zindex": 4,
        "border_roundness": 6,
        "vertical_centering": true,
        "order": 2,
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
                "name": "is_true",
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
      "id": "bTInD0",
      "current_parent": "bTIgr",
      "default_name": "Group A",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Rename"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 5,
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
                  "element_id": "bTInD0"
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
          "id": "bTInE0",
          "default_name": "Text A",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTmPd3": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 240,
            "zindex": 5,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766682600897x711813842721779300/Edit.svg"
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769877027563x952377730736702000/Folder%20List%203%20%281%29.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTmPb3",
          "current_parent": "bTInD0",
          "default_name": "Image C",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Rename",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTIhn": {
      "properties": {
        "height": 0,
        "left": 20,
        "top": 20,
        "width": 0,
        "zindex": 4,
        "border_roundness": 6,
        "is_visible": true,
        "vertical_centering": true,
        "order": 10,
        "use_gap": true,
        "fit_width": false,
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
            "bgcolor": "rgba(180,35,24,0.12)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTInJ0",
      "current_parent": "bTIgr",
      "default_name": "Group A",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Delete"
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
                    "type": "Message",
                    "name": "is_true",
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
                "text": {
                  "entries": {
                    "0": "Delete chat"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            },
            "1": {
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
            }
          },
          "type": "Text",
          "id": "bTInK0",
          "default_name": "Text A",
          "style": "Text_inter___400___14px____ee6b6b_"
        },
        "bTmPv3": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 240,
            "zindex": 5,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
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
          "type": "Image",
          "id": "bTmPt3",
          "current_parent": "bTInJ0",
          "default_name": "Image E",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Delete Chat",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTKxi": {
      "properties": {
        "height": 0,
        "left": 30,
        "top": 30,
        "width": 0,
        "zindex": 4,
        "border_roundness": 10,
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
        "is_visible": false,
        "vertical_centering": true,
        "order": 6,
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
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
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
            "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTKxb",
      "current_parent": "bTImt0",
      "default_name": "Group I",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Remove from project"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_color": "var(--color_bTkRL4_default)",
            "order": 4,
            "fit_width": false,
            "fit_height": true,
            "margin_top": 0,
            "fixed_width": false,
            "margin_left": 0,
            "padding_top": 0,
            "margin_right": 0,
            "padding_left": 0,
            "single_width": false,
            "margin_bottom": 0,
            "min_width_css": "0px",
            "padding_right": 0,
            "single_height": false,
            "min_height_css": "0px",
            "padding_bottom": 0,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTKxd",
          "default_name": "Text F",
          "style": "Text_inter___400___14px___white_"
        },
        "bTIhL": {
          "properties": {
            "height": 30,
            "left": 170,
            "top": 22,
            "width": 30,
            "zindex": 4,
            "icon": "feather corner-down-right",
            "icon_color": "rgba(119,123,126,1)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "18px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "18px",
            "padding_bottom": 0,
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTKxh",
          "default_name": "Icon F"
        }
      },
      "name": "Group Remove from project",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTKzn": {
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
    },
    "bThyn": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 2,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.chat",
        "is_visible": false,
        "order": 7,
        "row_gap": 8,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 0,
        "margin_left": 6,
        "padding_top": 0,
        "margin_right": 6,
        "single_width": false,
        "margin_bottom": 0,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bThyX",
      "current_parent": "bTImt0",
      "default_name": "Group K",
      "elements": {
        "bTYRp": {
          "properties": {
            "text": {
              "entries": {
                "0": "No projects available"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 3,
            "is_visible": false,
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "margin_top": 10,
            "single_width": false,
            "margin_bottom": 10,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
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
                  "element_id": "bThyd"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bThyc",
          "default_name": "Text J",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTKtn0": {
          "properties": {
            "height": 350,
            "left": -80,
            "top": -150,
            "width": 280,
            "zindex": 3,
            "data_source": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "projects_list_custom_project",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "group_type": "custom.project",
            "order": 4,
            "fit_width": false,
            "fit_height": true,
            "fixed_rows": false,
            "single_width": false,
            "single_height": false,
            "max_height_css": "180px",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "cell_min_height_css": "100%",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
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
                "type": "ThisElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "RepeatingGroup",
          "id": "bThyd",
          "default_name": "RepeatingGroup B",
          "elements": {
            "bTKtr0": {
              "properties": {
                "height": 0,
                "left": 10,
                "top": 10,
                "width": 0,
                "zindex": 4,
                "border_roundness": 10,
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "group_type": "custom.project",
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
                "column_gap": 8,
                "fit_height": true,
                "padding_top": 8,
                "padding_left": 8,
                "single_width": false,
                "padding_right": 8,
                "single_height": false,
                "min_height_css": "36px",
                "padding_bottom": 8,
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
                    "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.15)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bThyh",
              "current_parent": "bTIgr",
              "default_name": "Group K",
              "elements": {
                "bTHpX": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "name_text",
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
                    "order": 5,
                    "fit_width": false,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "0px",
                    "single_height": false,
                    "max_height_css": "17px",
                    "min_height_css": "0px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "collapse_when_hidden": true
                  },
                  "type": "Text",
                  "id": "bThyi",
                  "default_name": "Text J",
                  "style": "Text_inter___400___14px___white_"
                },
                "bTrUB2": {
                  "properties": {
                    "height": 240,
                    "left": 0,
                    "top": 0,
                    "width": 240,
                    "zindex": 5,
                    "src": {
                      "entries": {
                        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766515721059x955160597717667200/Property%201%3DChat--launch%2C%20State%3DDefault%2C%20Version%3D2%2C%20Mode%3DDark%201.svg"
                      },
                      "type": "TextExpression"
                    },
                    "order": 1,
                    "fit_height": true,
                    "single_width": true,
                    "min_width_css": "18px",
                    "single_height": false,
                    "min_height_css": "240px",
                    "horiz_alignment": "flex-start",
                    "use_aspect_ratio": true,
                    "aspect_ratio_width": 1,
                    "aspect_ratio_height": 1,
                    "collapse_when_hidden": true
                  },
                  "type": "Image",
                  "id": "bTrTz2",
                  "current_parent": "bThyh",
                  "default_name": "Image A",
                  "name": "Image Icon Folder",
                  "style": "Image_standard_image_"
                }
              },
              "name": "Group Project Cell",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "RG Projects",
          "style": "RepeatingGroup_transparent_"
        }
      },
      "name": "Group Profile Menu Content 480",
      "style": "Group_dark_gf___shadow_"
    },
    "bTKtH0": {
      "properties": {
        "height": 0,
        "left": 20,
        "top": 20,
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
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
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
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": {
                                  "properties": {
                                    "option_set": "option.chat_type__os_",
                                    "option_value": "personal"
                                  },
                                  "type": "OneOptionValue",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "type_option_chat_type__os_",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
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
                      "name": "Created By",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_true",
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
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTKsf0",
      "current_parent": "bTImt0",
      "default_name": "Group G",
      "elements": {
        "bTHpX": {
          "properties": {
            "text": {
              "entries": {
                "0": "Add to project"
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
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "Move to project"
                  },
                  "type": "TextExpression"
                }
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
                  "element_id": "bTKsf0"
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
          "id": "bTKtC0",
          "default_name": "Text D",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTmPj3": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 240,
            "zindex": 5,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980841914x611144106296093200/Folder%20Add%20ou-lc.svg"
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769877001736x153781242392149630/Folder%20Add%20ou-lc%20%281%29.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTmPh3",
          "current_parent": "bTKsf0",
          "default_name": "Image D",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Add to Project",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTmPp3": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 5,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "order": 8,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 6,
        "single_width": false,
        "margin_bottom": 6,
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
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
            "max_width_css": "32px"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTmPn3",
      "default_name": "Group N",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Profile Menu Content",
  "style": "Group_dark_gf___shadow_"
};
