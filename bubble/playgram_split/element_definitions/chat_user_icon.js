export const Chat_User_Icon = {
  "elements": {
    "bTKXH0": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 44,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "none",
        "order": 1,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "param_bTYSv",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTYWm"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
      },
      "type": "Group",
      "id": "bTYWn",
      "current_parent": "bTKWz0",
      "default_name": "Group A",
      "elements": {
        "bTYXJ": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 3,
            "border_roundness": 20,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "text",
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "var(--color_bTGzr_default)",
            "order": 1,
            "fit_width": true,
            "unique_id": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTYSv",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTYWm"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false,
                  "moved_to_top": true
                }
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true,
            "container_vert_alignment": "center"
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "isnt_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTYXF"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "param_bTYZO",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTYWm"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "background_style": "image",
                "background_image": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "param_bTYZO",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTYWm"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTYXD",
          "current_parent": "bTYWn",
          "default_name": "Group B",
          "elements": {
            "bTIeb": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "[center]",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 1,
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "args": 1,
                                        "next": {
                                          "type": "Message",
                                          "name": "to_uppercase",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "truncated",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "is_slidable": false
                                    },
                                    "2": "",
                                    "3": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "args": 1,
                                            "next": {
                                              "type": "Message",
                                              "name": "to_uppercase",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "truncated",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "last_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "separator": {
                                            "entries": {
                                              "0": " "
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
                                    "4": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "args": 1,
                                        "next": {
                                          "type": "Message",
                                          "name": "to_uppercase",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "truncated",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "said": "a2Vsdm8tMzE4ODQ=",
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
                          "name": "count",
                          "is_slidable": false
                        },
                        "properties": {
                          "separator": {
                            "entries": {
                              "0": " "
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
                    "2": "[/center]"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 0,
                "top": 0,
                "width": 100,
                "zindex": 2,
                "font_color": "var(--color_bTGzv_default)",
                "font_size": 14,
                "is_visible": false,
                "line_height": 1.2,
                "vertical_centering": true,
                "order": 1,
                "fit_width": true,
                "fit_height": true,
                "padding_top": 2,
                "single_width": false,
                "max_width_css": "23px",
                "min_width_css": "0px",
                "single_height": true,
                "min_height_css": "23px",
                "horiz_alignment": "center",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "param_bTYZO",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTYWm"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "properties": {
                    "is_visible": true
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTYXF",
              "default_name": "Text A",
              "name": "Text [center]Parent group"
            },
            "bTYXK": {
              "properties": {
                "height": 2,
                "left": 0,
                "top": 0,
                "width": 2,
                "zindex": 5,
                "AAD": {
                  "type": "TextExpression"
                },
                "AAE": {
                  "entries": {
                    "0": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "1": ""
                  },
                  "type": "TextExpression"
                },
                "AAG": "right top",
                "AAH": "left bottom",
                "AAI": "dark",
                "AAK": true,
                "AAN": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "param_bTYSv",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTYWm"
                      },
                      "type": "GetElement",
                      "is_slidable": false,
                      "moved_to_top": true
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "AAe": false,
                "ABS": true,
                "ABT": "rgba(38,38,38,1)",
                "ABU": "var(--color_bTGzv_default)",
                "ABV": "var(--color_bTGzv_default)",
                "ABZ": {
                  "entries": {
                    "0": "12"
                  },
                  "type": "TextExpression"
                },
                "ABa": {
                  "entries": {
                    "0": "Inter"
                  },
                  "type": "TextExpression"
                },
                "ABc": 400,
                "ABd": 0,
                "ABo": {
                  "entries": {
                    "0": "6"
                  },
                  "type": "TextExpression"
                },
                "ABp": {
                  "entries": {
                    "0": "0"
                  },
                  "type": "TextExpression"
                },
                "order": 3,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "5px",
                "single_height": true,
                "min_height_css": "3px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "1498171554228x105618760361836540-AAC",
              "id": "bTYWr",
              "current_parent": "bTYRv",
              "default_name": "Airtooltip A",
              "name": "Airtooltip User Name"
            },
            "bTYZV": {
              "properties": {
                "height": 30,
                "left": 0,
                "top": 0,
                "width": 30,
                "zindex": 6,
                "icon": "feather user",
                "icon_color": "rgba(var(--color_primary_contrast_default_rgb), 0.5)",
                "vertical_centering": true,
                "order": 2,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "18px",
                "single_height": true,
                "min_height_css": "18px",
                "horiz_alignment": "center",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
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
                            "name": "param_bTYZO",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTYWm"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "properties": {
                    "is_visible": false
                  },
                  "type": "State"
                }
              },
              "type": "Icon",
              "id": "bTYZT",
              "default_name": "Icon A",
              "name": "Icon feather user"
            }
          },
          "name": "Group Avatar"
        }
      },
      "name": "Group User"
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "text",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTYSv",
        "param_name": "id",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTYZO",
        "param_name": "image",
        "editor_type": "DynamicValue"
      }
    },
    "max_width_px": 16,
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 16,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTYWm",
  "name": "Chat User Icon"
};
