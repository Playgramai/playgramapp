export const group_project_file = {
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
  "style": "Group_transparent_",
};
