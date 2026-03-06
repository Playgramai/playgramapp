export const elements = {
  "bTjjO1": {
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
    "style": "RepeatingGroup_transparent_"
  },
  "bTjjZ1": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 16,
      "width": 0,
      "zindex": 9,
      "is_visible": false,
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 25,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTjFy1",
    "default_name": "Group X",
    "elements": {
      "bTjja1": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -16,
          "width": 0,
          "zindex": 8,
          "vertical_centering": true,
          "order": 2,
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
        "id": "bTjFz1",
        "default_name": "Group X",
        "elements": {
          "bTjjb1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Create and save a new record to memory & knowledge base"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 2,
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
            "id": "bTjGE1",
            "current_parent": "bTOJd0",
            "default_name": "Text G",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          },
          "bTjjf1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Add new memory & knowledge"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 2,
              "order": 1,
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
            "id": "bTjGD1",
            "default_name": "Text G",
            "style": "Text_inter___400___16px___white_"
          }
        },
        "name": "Group Title",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Heading",
    "style": "Group_transparent_"
  },
  "bTkHg3": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 58,
      "width": 0,
      "zindex": 35,
      "is_visible": false,
      "vertical_centering": true,
      "order": 8,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "center"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.library__os_",
                  "option_value": "images"
                },
                "type": "OneOptionValue",
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTkHb3",
    "default_name": "Group H",
    "elements": {
      "bTkHh3": {
        "properties": {
          "height": 350,
          "left": -24,
          "top": -82,
          "width": 280,
          "zindex": 28,
          "columns": 4,
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
              "element_id": "bTjyN"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "group_type": "api.apiconnector2.bTHIF0.bTjyT.body.data.Get.Messages_v3",
          "rows": 3,
          "separator_color": "rgba(150,150,150,0)",
          "separator_style": "solid",
          "separator_width": 16,
          "order": 1,
          "masonry": true,
          "fit_width": false,
          "fit_height": true,
          "fixed_rows": true,
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
          "cell_min_height_css": "100px",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 1630,
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTjEp1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "columns": 5
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "args": 1420,
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTjEp1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "columns": 4
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "args": 1220,
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTjEp1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "columns": 3
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "args": 1015,
                "type": "Message",
                "name": "less_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTjEp1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "columns": 2
            },
            "type": "State"
          }
        },
        "type": "RepeatingGroup",
        "id": "bTjpB1",
        "default_name": "RepeatingGroup A",
        "elements": {
          "bTjpJ1": {
            "properties": {
              "height": 280,
              "left": -80,
              "top": -80,
              "width": 280,
              "zindex": 2,
              "data_source": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "https://playgram-version-test.b-cdn.net/"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "https://frala.b-cdn.net/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_boolean",
                          "is_slidable": true
                        },
                        "properties": {
                          "name": "AppIsTest"
                        },
                        "type": "PageData",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": "",
                      "3": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "signed_url_token_text",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "constraints": {
                                              "0": {
                                                "key": "_id",
                                                "value": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "_api_c2_project_id",
                                                    "is_slidable": false
                                                  },
                                                  "type": "ElementParent",
                                                  "is_slidable": false
                                                },
                                                "constraint_type": "equals"
                                              }
                                            }
                                          },
                                          "type": "Message",
                                          "name": "filtered",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "get_list_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTjyZ"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": "",
                                                  "1": {
                                                    "next": {
                                                      "next": {
                                                        "type": "Message",
                                                        "name": "signed_url_token_text",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "current_organization_custom_organization",
                                                      "is_slidable": false
                                                    },
                                                    "type": "CurrentUser",
                                                    "is_slidable": false
                                                  },
                                                  "2": ""
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": "",
                                                  "1": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "signed_url_token_text",
                                                      "is_slidable": false
                                                    },
                                                    "type": "CurrentUser",
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
                                          "name": "is_not_empty",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "_api_c2_organization_id",
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
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "_api_c2_project_id",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      },
                      "4": "/",
                      "5": {
                        "next": {
                          "next": {
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": {
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "https://playgram-version-test.b-cdn.net/"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "https://frala.b-cdn.net/"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "name": "AppIsTest"
                                    },
                                    "type": "PageData",
                                    "said": "a2Vsdm8tMzE4ODQ=",
                                    "is_slidable": false
                                  }
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "_api_c2_image",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      },
                      "6": ""
                    },
                    "type": "TextExpression",
                    "said": "a2Vsdm8tMzE4ODQ="
                  }
                },
                "type": "ArbitraryText"
              },
              "group_type": "text",
              "vertical_centering": true,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "100%",
              "single_height": false,
              "min_height_css": "140px",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTjpH1",
            "default_name": "Group A",
            "elements": {
              "bTjqc1": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 320,
                  "zindex": 3,
                  "stretch_or_rescale": "zoom",
                  "src": {
                    "entries": {
                      "0": {
                        "type": "ElementParent",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "100%",
                  "single_height": false,
                  "min_height_css": "140px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "use_aspect_ratio": true,
                  "collapse_when_hidden": true
                },
                "type": "Image",
                "id": "bTjpN1",
                "default_name": "Image A",
                "style": "Image_standard_image_"
              },
              "bTpaa2": {
                "properties": {
                  "height": 150,
                  "left": 0,
                  "top": 0,
                  "width": 280,
                  "zindex": 2,
                  "html": {
                    "entries": {
                      "0": "<style>\n  .skeleton {\n    position: relative;\n    overflow: hidden;\n    border-radius: 10px;\n    background-color: ",
                      "1": {
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
                                    "0": "#303030"
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
                      "2": " !important;\n    width: 100%;\n    height: 100%; \n  }\n\n  .skeleton::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.15) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n    transform: translateX(-120%);\n    animation: shimmer 1.6s linear infinite;\n    pointer-events: none;\n  }\n\n  @keyframes shimmer {\n    0%   { transform: translateX(-120%); }\n    100% { transform: translateX(120%); }\n  }\n</style>\n\n<!-- \u0421\u0430\u043c \u0431\u043b\u043e\u043a \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d\u0430 -->\n<div class=\"skeleton\"></div>\n"
                    },
                    "type": "TextExpression"
                  },
                  "is_visible": true,
                  "vertical_centering": true,
                  "order": 2,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": false,
                  "vert_alignment": "stretch",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "type": "HTML",
                "id": "bTpaV2",
                "current_parent": "bTjpH1",
                "default_name": "HTML A",
                "name": "HTML Image Generation Skeleton",
                "style": "HTML_default_"
              },
              "bTwRL0": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 4,
                  "icon": "feather download",
                  "border_roundness": 20,
                  "icon_color": "var(--color_primary_contrast_default)",
                  "is_visible": false,
                  "vertical_centering": true,
                  "order": 2,
                  "unique_id": {
                    "entries": {
                      "0": "download-icon"
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": false,
                  "padding_top": 5,
                  "padding_left": 5,
                  "single_width": true,
                  "min_width_css": "30px",
                  "padding_right": 5,
                  "single_height": true,
                  "min_height_css": "30px",
                  "padding_bottom": 5,
                  "horiz_alignment": "flex-end",
                  "nonant_alignment": "ca",
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
                        "element_id": "bTjpH1"
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
                "type": "Icon",
                "id": "bTwRJ0",
                "current_parent": "bTjpH1",
                "default_name": "Icon F",
                "name": "Icon feather download",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group temp_images",
            "style": "Group_transparent_"
          }
        },
        "name": "RG Images",
        "style": "RepeatingGroup_transparent_"
      },
      "bTkHl3": {
        "properties": {
          "height": 1,
          "left": 0,
          "top": 0,
          "width": 1,
          "zindex": 34,
          "AAE": 1,
          "AAF": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "divide",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "sum",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_meta.count",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.data.Aggregate.Documents",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTkLh1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "AAG": 1,
          "order": 2,
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAC",
        "id": "bTkGp3",
        "current_parent": "bTjGV1",
        "default_name": "ListofNumbers A",
        "name": "ListofNumbers Images Pages"
      },
      "bTkHm3": {
        "properties": {
          "height": 30,
          "left": -24,
          "top": -82,
          "width": 250,
          "zindex": 3,
          "is_visible": false,
          "background_style": "none",
          "order": 3,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 10,
          "fit_height": true,
          "margin_top": 15,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
        },
        "states": {
          "1": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 20,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "sum",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_meta.count",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_body.data.Aggregate.Documents",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTkLn1"
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
        "id": "bTkGv3",
        "current_parent": "bTjGV1",
        "default_name": "Group E",
        "elements": {
          "cmmYR6": {
            "properties": {
              "height": 29,
              "left": 0,
              "top": 0,
              "width": 20,
              "zindex": 2,
              "data_source": {
                "next": {
                  "type": "Message",
                  "name": "get_AAD",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTkGp3"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "group_type": "number",
              "rows": 1,
              "separator_style": "none",
              "order": 6,
              "fit_width": true,
              "fixed_columns": false,
              "min_width_css": "150px",
              "min_height_css": "30px",
              "container_layout": "row",
              "cell_min_width_css": "30px"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible"
                  },
                  "properties": {
                    "element_id": "bTkGx3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "min_width_css": "0px"
                },
                "type": "State"
              }
            },
            "type": "RepeatingGroup",
            "id": "bTkGx3",
            "default_name": "RepeatingGroup C",
            "elements": {
              "cmNQp": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 2,
                  "border_roundness": 5,
                  "data_source": {
                    "type": "ElementParent"
                  },
                  "group_type": "number",
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(255,255,255,0)",
                  "order": 1,
                  "single_width": true,
                  "min_width_css": "30px",
                  "single_height": true,
                  "min_height_css": "30px",
                  "container_layout": "row",
                  "collapse_when_hidden": true,
                  "container_horiz_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered"
                      },
                      "properties": {
                        "element_id": "bTkHB3"
                      },
                      "type": "ThisElement"
                    },
                    "properties": {
                      "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)"
                    },
                    "type": "State"
                  },
                  "1": {
                    "condition": {
                      "next": {
                        "next": {
                          "args": 20,
                          "next": {
                            "args": 1,
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
                            "name": "plus",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "divide",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "for_images_library_pagination_number",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "bgcolor": "var(--color_bTGzr_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bTkHB3",
                "default_name": "Group E",
                "elements": {
                  "cmNQs": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "0"
                        },
                        "type": "TextExpression"
                      },
                      "height": 45,
                      "left": 0,
                      "top": 0,
                      "width": 200,
                      "zindex": 17,
                      "order": 1,
                      "fit_width": true,
                      "vert_alignment": "center"
                    },
                    "states": {
                      "0": {
                        "condition": {
                          "next": {
                            "type": "Message",
                            "name": "is_not_empty"
                          },
                          "type": "ElementParent"
                        },
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "type": "ElementParent"
                              },
                              "2": ""
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
                              "args": 20,
                              "next": {
                                "args": 1,
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
                                "name": "plus",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "divide",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "for_images_library_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "font_color": "rgba(255, 255, 255, 1)"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Text",
                    "id": "bTkHC3",
                    "current_parent": "cmNQn.elements",
                    "default_name": "Text A",
                    "name": "Text 0 Users List",
                    "style": "Text_inter___400___12px____afafaf_",
                    "order": 1
                  }
                },
                "name": "Image Select Page (useButton) [th] Users List"
              }
            },
            "name": "RG Images Pagination (useState) [th] Users List",
            "custom_states": {
              "items_until_": {
                "display": "last_page",
                "value": "number",
                "default_val": 12,
                "make_static": true
              },
              "next_page__1__": {
                "display": "items_from",
                "value": "number",
                "default_val": 1,
                "make_static": true
              },
              "max_pagination_": {
                "display": "items_until",
                "value": "number",
                "default_val": 12,
                "make_static": true
              }
            }
          },
          "cmonl0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 4,
              "border_roundness": 5,
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(255,255,255,0)",
              "order": 2,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "container_layout": "row",
              "collapse_when_hidden": false,
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered"
                  },
                  "properties": {
                    "element_id": "bTkHD3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "bgcolor": "var(--color_bTGzr_default)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": 0,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTkHD3",
            "current_parent": "cmNQh.elements",
            "default_name": "Group E",
            "elements": {
              "bUIgi2": {
                "properties": {
                  "height": 30,
                  "left": 22,
                  "top": 13.8125,
                  "width": 30,
                  "zindex": 2,
                  "icon": "material regular chevron_left",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "vertical_centering": true,
                  "order": 2,
                  "single_width": true,
                  "min_width_css": "18px",
                  "single_height": true,
                  "min_height_css": "18px",
                  "vert_alignment": "center",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_first_page",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTjpB1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": "var(--color_bTGzv_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTkHH3",
                "default_name": "Icon B"
              }
            },
            "name": "Image Previous Page (useButton) Memory List",
            "order": 3,
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "cmonm0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 3,
              "border_roundness": 5,
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(255,255,255,0)",
              "order": 8,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "container_layout": "row",
              "collapse_when_hidden": false,
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered"
                  },
                  "properties": {
                    "element_id": "bTkHI3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "bgcolor": "var(--color_bTGzr_default)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": 20,
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "sum",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_meta.count",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_body.data.Aggregate.Documents",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTkLn1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTkHI3",
            "current_parent": "cmNQh.elements",
            "default_name": "Group E",
            "elements": {
              "bUIgo2": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 2,
                  "icon": "material outlined chevron_right",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "vertical_centering": true,
                  "order": 2,
                  "single_width": true,
                  "min_width_css": "18px",
                  "single_height": true,
                  "min_height_css": "18px",
                  "vert_alignment": "center",
                  "collapse_when_hidden": true
                },
                "states": {
                  "1": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_last_page",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTjpB1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": "var(--color_bTGzv_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTkHJ3",
                "current_parent": "bTcjp3",
                "default_name": "Icon B"
              }
            },
            "name": "Image Next Page (useButton) [th] Memory List",
            "order": 2,
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "G Images Pagination"
      }
    },
    "name": "G Images",
    "style": "Group_transparent_"
  },
  "bTkIz3": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 68,
      "width": 0,
      "zindex": 35,
      "is_visible": false,
      "vertical_centering": true,
      "order": 9,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "center"
    },
    "states": {
      "0": {
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTkIR3",
    "current_parent": "bTjGV1",
    "default_name": "Group I",
    "elements": {
      "bTkHh3": {
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
        "style": "RepeatingGroup_transparent_"
      },
      "bTkHl3": {
        "properties": {
          "height": 1,
          "left": 0,
          "top": 0,
          "width": 1,
          "zindex": 34,
          "AAE": 1,
          "AAF": {
            "next": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "divide",
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
              "element_id": "bTkIW3"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "AAG": 1,
          "order": 3,
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAC",
        "id": "bTkIh3",
        "current_parent": "bTjGV1",
        "default_name": "ListofNumbers B",
        "name": "ListofNumbers Files Pages"
      },
      "bTkMf3": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 250,
          "zindex": 3,
          "is_visible": false,
          "background_style": "none",
          "order": 4,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 10,
          "fit_height": true,
          "margin_top": 15,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
        },
        "states": {
          "1": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 20,
                        "type": "Message",
                        "name": "greater_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "sum",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_meta.count",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_body.data.Aggregate.Documents",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTkLh1"
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
        "id": "bTkMN3",
        "current_parent": "bTkIR3",
        "default_name": "Group L",
        "elements": {
          "cmmYR6": {
            "properties": {
              "height": 29,
              "left": 0,
              "top": 0,
              "width": 20,
              "zindex": 2,
              "data_source": {
                "next": {
                  "type": "Message",
                  "name": "get_AAD",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTkGp3"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "group_type": "number",
              "rows": 1,
              "separator_style": "none",
              "order": 6,
              "fit_width": true,
              "fixed_columns": false,
              "min_width_css": "150px",
              "min_height_css": "30px",
              "container_layout": "row",
              "cell_min_width_css": "30px"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible"
                  },
                  "properties": {
                    "element_id": "bTkMS3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "min_width_css": "0px"
                },
                "type": "State"
              }
            },
            "type": "RepeatingGroup",
            "id": "bTkMS3",
            "default_name": "RepeatingGroup E",
            "elements": {
              "cmNQp": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 2,
                  "border_roundness": 5,
                  "data_source": {
                    "type": "ElementParent"
                  },
                  "group_type": "number",
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(255,255,255,0)",
                  "order": 1,
                  "single_width": true,
                  "min_width_css": "30px",
                  "single_height": true,
                  "min_height_css": "30px",
                  "container_layout": "row",
                  "collapse_when_hidden": true,
                  "container_horiz_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered"
                      },
                      "properties": {
                        "element_id": "bTkMT3"
                      },
                      "type": "ThisElement"
                    },
                    "properties": {
                      "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)"
                    },
                    "type": "State"
                  },
                  "1": {
                    "condition": {
                      "next": {
                        "next": {
                          "args": 20,
                          "next": {
                            "args": 1,
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
                            "name": "plus",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "divide",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "for_files_library_pagination_number",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "bgcolor": "var(--color_bTGzr_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bTkMT3",
                "default_name": "Group L",
                "elements": {
                  "cmNQs": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "0"
                        },
                        "type": "TextExpression"
                      },
                      "height": 45,
                      "left": 0,
                      "top": 0,
                      "width": 200,
                      "zindex": 17,
                      "order": 1,
                      "fit_width": true,
                      "vert_alignment": "center"
                    },
                    "states": {
                      "0": {
                        "condition": {
                          "next": {
                            "type": "Message",
                            "name": "is_not_empty"
                          },
                          "type": "ElementParent"
                        },
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "type": "ElementParent"
                              },
                              "2": ""
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
                              "args": 20,
                              "next": {
                                "args": 1,
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
                                "name": "plus",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "divide",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "for_files_library_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "font_color": "rgba(255, 255, 255, 1)"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Text",
                    "id": "bTkMX3",
                    "current_parent": "cmNQn.elements",
                    "default_name": "Text B",
                    "name": "Text 0 Users List",
                    "style": "Text_inter___400___12px____afafaf_",
                    "order": 1
                  }
                },
                "name": "Image Select Page (useButton) [th] Users List"
              }
            },
            "name": "RG Images Pagination (useState) [th] Users List",
            "custom_states": {
              "items_until_": {
                "display": "last_page",
                "value": "number",
                "default_val": 12,
                "make_static": true
              },
              "next_page__1__": {
                "display": "items_from",
                "value": "number",
                "default_val": 1,
                "make_static": true
              },
              "max_pagination_": {
                "display": "items_until",
                "value": "number",
                "default_val": 12,
                "make_static": true
              }
            }
          },
          "cmonl0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 4,
              "border_roundness": 5,
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(255,255,255,0)",
              "order": 2,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "container_layout": "row",
              "collapse_when_hidden": false,
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered"
                  },
                  "properties": {
                    "element_id": "bTkMY3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "bgcolor": "var(--color_bTGzr_default)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": 0,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_files_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTkMY3",
            "current_parent": "cmNQh.elements",
            "default_name": "Group L",
            "elements": {
              "bUIgi2": {
                "properties": {
                  "height": 30,
                  "left": 22,
                  "top": 13.8125,
                  "width": 30,
                  "zindex": 2,
                  "icon": "material regular chevron_left",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "vertical_centering": true,
                  "order": 2,
                  "single_width": true,
                  "min_width_css": "18px",
                  "single_height": true,
                  "min_height_css": "18px",
                  "vert_alignment": "center",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_first_page",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTjpB1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": "var(--color_bTGzv_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTkMZ3",
                "default_name": "Icon C"
              }
            },
            "name": "Image Previous Page (useButton) Memory List",
            "order": 3,
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "cmonm0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 3,
              "border_roundness": 5,
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(255,255,255,0)",
              "order": 8,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "container_layout": "row",
              "collapse_when_hidden": false,
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered"
                  },
                  "properties": {
                    "element_id": "bTkMd3"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "bgcolor": "var(--color_bTGzr_default)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": 20,
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "sum",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_meta.count",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_body.data.Aggregate.Documents",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTkLh1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_files_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTkMd3",
            "current_parent": "cmNQh.elements",
            "default_name": "Group L",
            "elements": {
              "bUIgo2": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 2,
                  "icon": "material outlined chevron_right",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "vertical_centering": true,
                  "order": 2,
                  "single_width": true,
                  "min_width_css": "18px",
                  "single_height": true,
                  "min_height_css": "18px",
                  "vert_alignment": "center",
                  "collapse_when_hidden": true
                },
                "states": {
                  "1": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_last_page",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTjpB1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": "var(--color_bTGzv_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTkMe3",
                "current_parent": "bTcjp3",
                "default_name": "Icon C"
              }
            },
            "name": "Image Next Page (useButton) [th] Memory List",
            "order": 2,
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "G Files Pagination"
      },
      "bTpdl0": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 37,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "padding_left": 16,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 16,
          "single_height": false,
          "min_height_css": "26px",
          "horiz_alignment": "flex-start",
          "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_top": "solid",
          "container_layout": "row",
          "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_left": "solid",
          "four_border_style": true,
          "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_style_right": "solid",
          "border_roundness_top": 12,
          "collapse_when_hidden": true,
          "border_roundness_right": 12
        },
        "states": {
          "0": {
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
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTpdf0",
        "default_name": "Group O",
        "elements": {
          "bTpdr0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Name"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "200px",
              "single_height": false,
              "min_height_css": "100%",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTpdm0",
            "current_parent": "bTpdf0",
            "default_name": "Text F",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          },
          "bTpdx0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "File type"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 10,
              "top": 10,
              "width": 100,
              "zindex": 2,
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "100%",
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
            "id": "bTpds0",
            "current_parent": "bTpdf0",
            "default_name": "Text H",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          },
          "bTpeD0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Date created"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 10,
              "top": 10,
              "width": 100,
              "zindex": 2,
              "order": 3,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "100%",
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
            "id": "bTpdy0",
            "current_parent": "bTpdf0",
            "default_name": "Text I",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
          },
          "bTpeV0": {
            "properties": {
              "height": 280,
              "left": -80,
              "top": -80,
              "width": 280,
              "zindex": 3,
              "is_visible": false,
              "vertical_centering": true,
              "order": 4,
              "fit_width": false,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "26px",
              "single_height": true,
              "min_height_css": "26px",
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTpeQ0",
            "default_name": "Group P",
            "name": "Group Placeholder",
            "style": "Group_transparent_"
          }
        },
        "name": "Group header",
        "style": "Group_transparent_"
      }
    },
    "name": "G Files",
    "style": "Group_transparent_"
  },
  "bTnih0": {
    "properties": {
      "text": {
        "entries": {
          "0": "No generated images"
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": 100,
      "top": 63.8046875,
      "width": 100,
      "zindex": 36,
      "is_visible": false,
      "order": 10,
      "fit_width": true,
      "fit_height": true,
      "margin_top": 20,
      "single_width": false,
      "margin_bottom": 20,
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
              "args": {
                "properties": {
                  "option_set": "option.library__os_",
                  "option_value": "images"
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
                    "element_id": "bTjpB1"
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
          "is_slidable": false
        },
        "properties": {
          "text": {
            "entries": {
              "0": "No generated files"
            },
            "type": "TextExpression"
          },
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTnif0",
    "default_name": "Text E",
    "style": "Text_inter___400___16px___neutral_copy_copy_"
  }
};
