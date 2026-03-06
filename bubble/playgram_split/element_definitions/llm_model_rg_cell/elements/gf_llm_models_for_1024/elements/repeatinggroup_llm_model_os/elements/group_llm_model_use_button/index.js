export const group_llm_model_use_button = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 10.203125,
    "width": 0,
    "zindex": 3,
    "border_roundness": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.llm_models__os_",
    "background_style": "bgcolor",
    "bgcolor": "rgba(74,74,74,0)",
    "order": 1,
    "row_gap": 0,
    "use_gap": false,
    "fit_width": false,
    "column_gap": 0,
    "fit_height": true,
    "margin_top": 2,
    "fixed_width": false,
    "margin_left": 0,
    "padding_top": 6,
    "margin_right": 0,
    "padding_left": 8,
    "single_width": false,
    "margin_bottom": 2,
    "min_width_css": "0px",
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "32px",
    "padding_bottom": 6,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "overflow_scroll": false,
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_vert_alignment": "flex-start",
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "param_bTPAS0",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTbDp0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "llm_model_option_llm_models__os_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "param_bTIIn0",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTbDp0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
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
        "bgcolor": "var(--color_bTkRK4_default)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 410,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_left": 7,
        "padding_right": 7
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiDa",
  "default_name": "Group H",
  "elements": {
    "bTbeA0": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 10,
        "left": 0,
        "top": 0,
        "width": 37,
        "zindex": 2,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "80%",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "DeepSeek",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTiDb",
      "default_name": "Text B",
      "style": "Text_inter___400___14px___white_"
    },
    "bTbfN0": {
      "properties": {
        "height": 2,
        "left": 0,
        "top": 0,
        "width": 2,
        "zindex": 13,
        "AAD": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": " "
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTbDp0"
                      },
                      "type": "GetElement",
                      "is_slidable": false,
                      "moved_to_top": true
                    },
                    "2": "",
                    "3": {
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "default_model_option_llm_models__os_",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "Default Model"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "Make Default"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AAG": "bottom left",
        "AAH": "right top",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": " "
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTbDp0"
                      },
                      "type": "GetElement",
                      "is_slidable": false,
                      "moved_to_top": true
                    },
                    "2": "",
                    "3": {
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "rgba(48,48,48,1)",
        "ABU": "var(--color_bTGzv_default)",
        "ABV": "var(--color_primary_contrast_default)",
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
        "order": 2,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "5px",
        "single_height": true,
        "min_height_css": "3px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "1498171554228x105618760361836540-AAC",
      "id": "bTiDf",
      "current_parent": "bTbdu0",
      "default_name": "Airtooltip C",
      "name": "Airtooltip make default"
    },
    "bTpvT0": {
      "properties": {
        "height": 14,
        "left": 0,
        "top": 0,
        "width": 14,
        "zindex": 14,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.llm_models__os_",
        "vertical_centering": true,
        "order": 4,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": " "
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTbDp0"
                      },
                      "type": "GetElement",
                      "is_slidable": false,
                      "moved_to_top": true
                    },
                    "2": "",
                    "3": {
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": true,
        "min_width_css": "14px",
        "single_height": true,
        "min_height_css": "14px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTpvN0",
      "current_parent": "bTiDa",
      "default_name": "Group K",
      "elements": {
        "bTkjz2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 240,
            "zindex": 1,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765275714325x459593957805353400/Flag.svg"
              },
              "type": "TextExpression"
            },
            "order": 4,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": false,
            "min_height_css": "240px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
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
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_hovered",
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "default_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765275739653x312474998537629200/Flag--filled.svg"
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
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "default_model_option_llm_models__os_",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_equals",
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
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiDa"
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
            "2": {
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
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTpvP0",
          "default_name": "Image C",
          "name": "Image flag",
          "style": "Image_standard_image_"
        },
        "bTtRp3": {
          "properties": {
            "height": 240,
            "left": -110,
            "top": -30,
            "width": 240,
            "zindex": 2,
            "is_visible": false,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769072438432x518084781262077440/Flag%20%281%29.svg"
              },
              "type": "TextExpression"
            },
            "order": 4,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": false,
            "min_height_css": "240px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
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
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_hovered",
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "default_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769072431952x733073461923984600/Flag--filled%20%281%29.svg"
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
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "default_model_option_llm_models__os_",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_equals",
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
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiDa"
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
            "2": {
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
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTtRn3",
          "current_parent": "bTpvN0",
          "default_name": "Image E",
          "name": "Image flag light mode",
          "style": "Image_standard_image_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group LLM Model (use button)",
  "style": "Group_transparent_",
};
