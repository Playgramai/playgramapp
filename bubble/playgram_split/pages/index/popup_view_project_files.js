export const Popup_View_Project_Files = {
  "properties": {
    "height": 320,
    "left": 10,
    "top": 10,
    "width": 320,
    "zindex": 7,
    "group_type": "custom.project",
    "order": 22,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "550px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "prevent_user_from_closing_through_esc": false
  },
  "type": "Popup",
  "id": "bTUjN0",
  "current_parent": "bTMVB0",
  "default_name": "Popup D",
  "elements": {
    "bTINR": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 16,
        "width": 0,
        "zindex": 13,
        "vertical_centering": true,
        "order": 2,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 20,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTUjO0",
      "default_name": "Group AZZZ",
      "elements": {
        "bTINS": {
          "properties": {
            "text": {
              "entries": {
                "0": "Project files"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -16,
            "width": 100,
            "zindex": 11,
            "order": 1,
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
          "id": "bTUjP0",
          "current_parent": "bTIMu",
          "default_name": "Text KZ",
          "name": "Text Instructions",
          "style": "Text_inter___400___18px___white_"
        },
        "bTpWe4": {
          "properties": {
            "height": 28,
            "left": 0,
            "top": 0,
            "width": 28,
            "zindex": 13,
            "border_color": "rgba(42,42,45,1)",
            "border_roundness": 12,
            "vertical_centering": true,
            "border_style": "solid",
            "order": 3,
            "fit_width": true,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
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
                "border_color": "var(--color_bTkRL4_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTpWY4",
          "current_parent": "bTUjO0",
          "default_name": "Group TZZZZ",
          "elements": {
            "bTnqB": {
              "properties": {
                "height": 30,
                "left": 0,
                "top": 0,
                "width": 30,
                "zindex": 1,
                "icon": "feather x",
                "icon_color": "var(--color_bTkRL4_default)",
                "vertical_centering": true,
                "order": 3,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "26px",
                "single_height": true,
                "min_height_css": "26px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "type": "Icon",
              "id": "bTpWd4",
              "default_name": "Icon G",
              "style": "Icon_standard_icon_"
            }
          },
          "name": "Group close files",
          "style": "Group_transparent_",
          "transitions": {
            "border_color": {
              "fn": "ease",
              "duration": 200
            }
          }
        }
      },
      "name": "Group Header",
      "style": "Group_transparent_"
    },
    "bTUXm": {
      "properties": {
        "text": {
          "entries": {
            "0": "No files in this project"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "is_visible": false,
        "order": 15,
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
              "element_id": "bTUjV0"
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
      "id": "bTUjU0",
      "current_parent": "bTUUt",
      "default_name": "Text Z",
      "style": "Text_inter___400___12px____afafaf_"
    },
    "bTUXy": {
      "properties": {
        "height": 350,
        "left": -16,
        "top": -286,
        "width": 280,
        "zindex": 36,
        "border_color": "rgba(var(--color_background_default_rgb), 0.15)",
        "border_roundness": 0,
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "deleted__boolean",
                    "value": false,
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "custom.file_ids_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUjN0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "group_type": "custom.project_instruction_file",
        "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "separator_style": "none",
        "border_style": "none",
        "order": 9,
        "fit_width": false,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "border_color_top": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style_top": "solid",
        "container_layout": "column",
        "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style_left": "solid",
        "four_border_style": false,
        "border_color_right": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style_right": "solid",
        "border_color_bottom": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style_bottom": "solid",
        "cell_min_height_css": "100%",
        "border_roundness_top": 12,
        "collapse_when_hidden": true,
        "border_roundness_left": 12,
        "border_roundness_right": 12,
        "border_roundness_bottom": 12
      },
      "states": {
        "1": {
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
      "id": "bTUjV0",
      "current_parent": "bTMZN0",
      "default_name": "RepeatingGroup H",
      "elements": {
        "bTSqk0": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 2,
            "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
            "border_roundness": 0,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.project_instruction_file",
            "is_visible": true,
            "vertical_centering": true,
            "border_style": "none",
            "order": 1,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 12,
            "fit_height": true,
            "single_width": false,
            "padding_right": 10,
            "single_height": false,
            "min_height_css": "52px",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "nonant_alignment": "aa",
            "collapse_animation": true,
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTUjZ0",
          "current_parent": "bTMZN0",
          "default_name": "Group AZZZ",
          "elements": {
            "bTPMp": {
              "properties": {
                "height": 0,
                "left": 8,
                "top": 38,
                "width": 0,
                "zindex": 4,
                "data_source": {
                  "type": "ElementParent"
                },
                "group_type": "custom.project_instruction_file",
                "vertical_centering": true,
                "order": 3,
                "row_gap": 4,
                "use_gap": true,
                "fit_width": false,
                "fit_height": true,
                "single_width": false,
                "single_height": false,
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "container_layout": "column",
                "collapse_when_hidden": true,
                "container_vert_alignment": "center"
              },
              "type": "Group",
              "id": "bTUjb0",
              "default_name": "Group AZZZ",
              "elements": {
                "bTPMq": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
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
                            "name": "file_bunny_url_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": -8,
                    "top": -38,
                    "width": 100,
                    "zindex": 2,
                    "order": 1,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "max_width_css": "400px",
                    "min_width_css": "0px",
                    "single_height": false,
                    "max_height_css": "28px",
                    "min_height_css": "0px",
                    "horiz_alignment": "flex-start",
                    "collapse_when_hidden": true
                  },
                  "type": "Text",
                  "id": "bTUjf0",
                  "default_name": "Text KZ",
                  "style": "Text_inter___400___14px___white_"
                },
                "bTPMr": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "to_uppercase",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "."
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "file_bunny_url_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": -8,
                    "top": -38,
                    "width": 100,
                    "zindex": 2,
                    "font_color": "var(--color_bTkRL4_default)",
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
                  "id": "bTUjg0",
                  "current_parent": "bTPMB",
                  "default_name": "Text KZ",
                  "style": "Text_inter___400___12px____afafaf_"
                }
              },
              "style": "Group_transparent_"
            },
            "bTcXX": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 320,
                "zindex": 5,
                "src": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "icon",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "_advanced_search_constraint",
                              "value": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "last_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "separator": {
                                              "entries": {
                                                "0": "."
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "split_by",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "file_bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "display",
                                  "is_slidable": false
                                },
                                "type": "InjectedValue",
                                "is_slidable": false
                              },
                              "constraint_type": {
                                "type": "Empty"
                              }
                            }
                          }
                        },
                        "type": "Message",
                        "name": "filtered",
                        "is_slidable": true
                      },
                      "properties": {
                        "option_set": "option.file_types__os_",
                        "option_value": "all values"
                      },
                      "type": "OptionValue"
                    },
                    "1": ""
                  },
                  "type": "TextExpression"
                },
                "order": 1,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "24px",
                "single_height": true,
                "min_height_css": "28px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "use_aspect_ratio": false,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTcXS",
              "current_parent": "bTUjZ0",
              "default_name": "Image C",
              "name": "Image K",
              "style": "Image_standard_image_"
            },
            "bTpWX4": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 320,
                "zindex": 12,
                "is_visible": true,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
                  },
                  "type": "TextExpression"
                },
                "order": 5,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "20px",
                "single_height": false,
                "min_height_css": "240px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "use_aspect_ratio": true,
                "collapse_when_hidden": false
              },
              "type": "Image",
              "id": "bTpWS4",
              "current_parent": "bTUjZ0",
              "default_name": "Image W",
              "name": "Image Remove files",
              "style": "Image_standard_image_"
            }
          },
          "name": "Group Project File",
          "style": "Group_transparent_"
        }
      },
      "name": "RG Project Files",
      "style": "RepeatingGroup_transparent_"
    },
    "bTKjR0": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 64,
        "width": 0,
        "zindex": 30,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 16,
        "row_gap": 16,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUjl0",
      "default_name": "Group AZZZ",
      "elements": {
        "bTKks0": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 29,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.project",
            "vertical_centering": true,
            "order": 6,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 16,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-end",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTUjm0",
          "current_parent": "bTKjM0",
          "default_name": "Group AZZZ",
          "elements": {
            "bTKii0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Cancel"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": 0,
                "top": -173.59375,
                "width": 150,
                "zindex": 28,
                "order": 1,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "60px",
                "single_height": false,
                "min_height_css": "36px",
                "horiz_alignment": "flex-end",
                "collapse_when_hidden": true
              },
              "type": "Button",
              "id": "bTUjn0",
              "current_parent": "bTKhy0",
              "default_name": "Button G",
              "name": "Button Cancel",
              "style": "Button_subtle_new_"
            },
            "bTKij0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Save changes"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": 0,
                "top": -173.59375,
                "width": 150,
                "zindex": 28,
                "order": 2,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "60px",
                "single_height": false,
                "min_height_css": "36px",
                "horiz_alignment": "flex-end",
                "collapse_when_hidden": true
              },
              "type": "Button",
              "id": "bTUjr0",
              "default_name": "Button G",
              "name": "Button Save Changes in Project Files",
              "style": "Button_primary_new_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Name/Instructions/Change password",
      "style": "Group_transparent_"
    }
  },
  "name": "Popup View Project Files",
  "style": "Popup_standard_popup_",
  "custom_states": {
    "file_ids_": {
      "display": "project_files",
      "value": "list.custom.project_instruction_file",
      "make_static": true
    }
  }
};
