export const group_attached_file = {
  "properties": {
    "height": 0,
    "left": 26,
    "top": 90.796875,
    "width": 0,
    "zindex": 25,
    "is_visible": false,
    "vertical_centering": true,
    "order": 15,
    "row_gap": 8,
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
          "name": "param_bTjsb0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTOpg0"
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
  "id": "bTjvP0",
  "current_parent": "bTOuv0",
  "default_name": "Group E",
  "elements": {
    "bTOlp0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -80.796875,
        "width": 0,
        "zindex": 24,
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 4,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTjvU0",
      "default_name": "Group E",
      "elements": {
        "bTOlY0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Attached file"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -80.796875,
            "width": 100,
            "zindex": 22,
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
          "id": "bTjvV0",
          "default_name": "Text E",
          "style": "Text_inter___400___14px___white_"
        },
        "bTOlZ0": {
          "properties": {
            "height": 30,
            "left": -16,
            "top": -80.796875,
            "width": 30,
            "zindex": 23,
            "icon": "feather paperclip",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "15px",
            "single_height": true,
            "min_height_css": "15px",
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
                "icon_color": "var(--color_bTsrq2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTjvZ0",
          "default_name": "Icon C"
        }
      },
      "name": "Group Label",
      "style": "Group_transparent_"
    },
    "bTjvr0": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 2,
        "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
        "border_roundness": 14,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "param_bTjsb0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpg0"
          },
          "type": "GetElement",
          "is_slidable": false,
          "moved_to_top": true
        },
        "group_type": "text",
        "is_visible": true,
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_style": "solid",
        "order": 3,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 10,
        "fit_height": true,
        "padding_top": 10,
        "padding_left": 15,
        "single_width": false,
        "padding_right": 15,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "aa",
        "collapse_animation": true,
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
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
            "border_color": "var(--color_bTspn2_default)",
            "background_style": "bgcolor",
            "bgcolor": "var(--color_bTspn2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTjrx0",
      "current_parent": "bTOuv0",
      "default_name": "Group D",
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
            "group_type": "text",
            "vertical_centering": true,
            "order": 3,
            "row_gap": 4,
            "use_gap": true,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTjsC0",
          "default_name": "Group D",
          "elements": {
            "bTPMq": {
              "properties": {
                "text": {
                  "entries": {
                    "0": {
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
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "1": ""
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
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTjsD0",
              "default_name": "Text C",
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
              "id": "bTjsH0",
              "current_parent": "bTPMB",
              "default_name": "Text C",
              "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTUJR0": {
          "properties": {
            "height": 240,
            "left": 41.09375,
            "top": 32.203125,
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
                }
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "28px",
            "single_height": true,
            "min_height_css": "32px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "use_aspect_ratio": false,
            "collapse_when_hidden": true
          },
          "type": "Image",
          "id": "bTjsI0",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Attached File User Message"
    }
  },
  "name": "Group Attached File",
  "style": "Group_transparent_",
};
