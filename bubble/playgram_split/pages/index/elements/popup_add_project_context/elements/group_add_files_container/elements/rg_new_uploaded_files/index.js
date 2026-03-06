export const rg_new_uploaded_files = {
  "properties": {
    "height": 350,
    "left": -16,
    "top": -64,
    "width": 280,
    "zindex": 4,
    "border_color": "rgba(var(--color_background_default_rgb), 0.15)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "custom.new_files_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUkv0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "file",
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "separator_style": "none",
    "border_style": "none",
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_surface_default_rgb), 0.15)",
    "border_style_top": "none",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_left": "solid",
    "four_border_style": false,
    "border_color_right": "rgba(var(--color_background_default_rgb), 0.15)",
    "border_style_right": "none",
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
  "id": "bTUlF0",
  "default_name": "RepeatingGroup F",
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
        "group_type": "file",
        "is_visible": true,
        "vertical_centering": true,
        "border_style": "none",
        "order": 1,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 12,
        "fit_height": true,
        "padding_top": 10,
        "padding_left": 10,
        "single_width": false,
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "52px",
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "aa",
        "collapse_animation": true,
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUlG0",
      "current_parent": "bTMZN0",
      "default_name": "Group EZZ",
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
            "group_type": "file",
            "vertical_centering": true,
            "order": 3,
            "row_gap": 4,
            "use_gap": true,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTUlL0",
          "default_name": "Group EZZ",
          "elements": {
            "bTPMq": {
              "properties": {
                "text": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "file_name",
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
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTUlM0",
              "default_name": "Text Y",
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
                        "name": "file_name",
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
              "id": "bTUlN0",
              "current_parent": "bTPMB",
              "default_name": "Text Y",
              "style": "Text_inter___400___12px____afafaf_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTcYs0": {
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
                                    "name": "url",
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
          "id": "bTcYb0",
          "current_parent": "bTUlG0",
          "default_name": "Image L",
          "name": "Image K",
          "style": "Image_standard_image_"
        },
        "bTpWR4": {
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
            "order": 6,
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
          "id": "bTpWM4",
          "current_parent": "bTUlG0",
          "default_name": "Image V",
          "name": "Image Remove Project file",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group New Uploaded Project Files",
      "style": "Group_transparent_"
    }
  },
  "name": "RG New Uploaded Files",
  "style": "RepeatingGroup_transparent_",
};
