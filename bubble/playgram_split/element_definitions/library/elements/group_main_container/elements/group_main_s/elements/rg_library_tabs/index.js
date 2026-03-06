export const rg_library_tabs = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 27,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 12,
    "data_source": {
      "properties": {
        "option_set": "option.library__os_",
        "option_value": "all values"
      },
      "type": "OptionValue"
    },
    "group_type": "option.library__os_",
    "separator_width": 10,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "border_style": "none",
    "order": 7,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "fixed_columns": false,
    "margin_bottom": 20,
    "single_height": false,
    "show_all_items": true,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "cell_min_width_css": "100px",
    "cell_min_height_css": "100%",
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTjGF1",
  "current_parent": "bTOJd0",
  "default_name": "RepeatingGroup I",
  "elements": {
    "bTjjP1": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -60,
        "width": 0,
        "zindex": 4,
        "border_roundness": 8,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "option.library__os_",
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 8,
        "fit_height": true,
        "margin_top": 4,
        "margin_left": 4,
        "padding_top": 6,
        "padding_left": 16,
        "single_width": false,
        "margin_bottom": 4,
        "padding_right": 16,
        "single_height": false,
        "min_height_css": "30px",
        "padding_bottom": 6,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "four_border_style": false,
        "border_roundness_top": 10,
        "collapse_when_hidden": true,
        "border_roundness_left": 10,
        "border_roundness_right": 10,
        "border_roundness_bottom": 10,
        "container_horiz_alignment": "center"
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
              "name": "custom.memory_input_type_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTjGV1"
            },
            "type": "GetElement",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#80BDCB29"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#80bdcb2a"
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "border_style": "solid"
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
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#80BDCB29"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#80bdcb2a"
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTjGJ1",
      "current_parent": "bTJFz",
      "default_name": "Group X",
      "elements": {
        "bToHJ": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 320,
            "zindex": 5,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": false,
            "min_height_css": "240px",
            "horiz_alignment": "flex-start",
            "use_aspect_ratio": true,
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
                "src": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "image_active",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    }
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
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "image_light",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bToHE",
          "default_name": "Image B",
          "style": "Image_standard_image_"
        },
        "bTjjV1": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "display",
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
            "order": 7,
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
            "1": {
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
                "font_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#245662"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#80BDCB"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTjGK1",
          "default_name": "Text G",
          "style": "Text_inter___400___16px___neutral_copy_"
        }
      },
      "name": "Group Tab",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "RG Library Tabs",
  "style": "RepeatingGroup_transparent_",
};
