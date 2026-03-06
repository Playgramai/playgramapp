export const rg_files = {
  "properties": {
    "height": 350,
    "left": -80,
    "top": -150,
    "width": 280,
    "zindex": 33,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "custom.file_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTMGw"
      },
      "type": "GetElement",
      "is_slidable": false,
      "moved_to_top": true
    },
    "group_type": "file",
    "is_visible": false,
    "separator_color": "rgba(150,150,150,0)",
    "separator_width": 8,
    "order": 23,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "margin_bottom": 24,
    "single_height": false,
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.file_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw"
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
  "type": "RepeatingGroup",
  "id": "bTchC",
  "default_name": "RepeatingGroup I",
  "elements": {
    "bTaiR": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 2,
        "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
        "border_roundness": 12,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "file",
        "is_visible": true,
        "vertical_centering": true,
        "border_style": "solid",
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 10,
        "fit_height": true,
        "padding_top": 10,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "nonant_alignment": "aa",
        "collapse_animation": true,
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTchD",
      "current_parent": "bTOJd0",
      "default_name": "Group X",
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
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTchH",
          "default_name": "Group X",
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
              "id": "bTchI",
              "default_name": "Text G",
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
              "id": "bTchJ",
              "current_parent": "bTPMB",
              "default_name": "Text G",
              "style": "Text_inter___400___12px____afafaf_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTPMx": {
          "properties": {
            "height": 30,
            "left": 14.5,
            "top": 40.5859375,
            "width": 30,
            "zindex": 5,
            "icon": "phosphor fill x-circle",
            "icon_color": "var(--color_primary_contrast_default)",
            "vertical_centering": true,
            "order": 4,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTcid"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "button_disabled": true
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTchN",
          "default_name": "Icon F"
        },
        "bTUJh0": {
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
          "id": "bTchO",
          "current_parent": "bTPMB",
          "default_name": "Image E",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Cell Attached File",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Files",
  "style": "RepeatingGroup_transparent_",
};
