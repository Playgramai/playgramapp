export const group_upload_file_to_project = {
  "properties": {
    "height": 291.59375,
    "left": -16,
    "top": -64,
    "width": 518,
    "zindex": 35,
    "border_color": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#7070721a"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#acacad1a"
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
    "border_roundness": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "border_style": "dashed",
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "57px",
    "single_height": true,
    "min_height_css": "57px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "center",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#707072"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#acacad"
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
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 1,
              "type": "Message",
              "name": "greater_or_equal_than",
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
          "element_id": "bTUlF0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "57px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUlZ0",
  "default_name": "Group MZ",
  "elements": {
    "bTYMT": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 400,
        "zindex": 3,
        "font_color": "rgba(37,37,37,0)",
        "AAJ": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "AAZ": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": ".",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "2": ""
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": ","
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_as_text",
                          "is_slidable": true
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "_advanced_search_constraint",
                              "value": {
                                "next": {
                                  "next": {
                                    "args": "image",
                                    "type": "Message",
                                    "name": "not_contains",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "mime_type",
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
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "AAj": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": ".",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "2": ""
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": ","
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_as_text",
                          "is_slidable": true
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "_advanced_search_constraint",
                              "value": {
                                "next": {
                                  "next": {
                                    "args": "image",
                                    "type": "Message",
                                    "name": "not_contains",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "mime_type",
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
                    "2": ""
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
        "AAl": 5,
        "ABz": false,
        "fit_height": false,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true,
        "file_upload_condition": true
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
              "element_id": "bTYNZ"
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
      "type": "1648049058728x629621556620034000-AAC",
      "id": "bTYMR",
      "current_parent": "bTUlZ0",
      "default_name": "BetterUploader B",
      "name": "BetterUploader Project Files"
    },
    "bTYNb": {
      "properties": {
        "height": 200,
        "left": 9.5,
        "top": 11.796875,
        "width": 200,
        "zindex": 4,
        "floating_reference": "top",
        "custom_id": "bTLgB",
        "is_visible": false,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTUaI": {
          "entries": {
            "0": "#ffffff"
          },
          "type": "TextExpression"
        },
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": false,
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
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
              "name": "custom.file_is_loading_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUkv0"
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
      "type": "CustomElement",
      "id": "bTYNZ",
      "current_parent": "bTUlZ0",
      "default_name": "[Element] Loader F",
      "name": "[Element] Loader project file",
      "custom_definition_name": "[Element] Loader"
    },
    "bTKsN0": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -64,
        "width": 0,
        "zindex": 2,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.project",
        "vertical_centering": true,
        "order": 6,
        "row_gap": 0,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_left": 20,
        "single_width": false,
        "padding_right": 20,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "row",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center",
        "container_horiz_alignment": "center"
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
              "element_id": "bTYNZ"
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
      "id": "bTUld0",
      "default_name": "Group LZ",
      "elements": {
        "bTKsG0": {
          "properties": {
            "height": 30,
            "left": -16,
            "top": -64,
            "width": 30,
            "zindex": 33,
            "icon": "feather upload",
            "icon_color": "var(--color_bTkRL4_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "20px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "20px",
            "padding_bottom": 0,
            "horiz_alignment": "center",
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
                "icon_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTUlf0",
          "default_name": "Icon K",
          "style": "Icon_standard_icon_"
        },
        "bTezk0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Click to upload file as project context"
              },
              "type": "TextExpression"
            },
            "height": 12,
            "left": 9,
            "top": 35.40625,
            "width": 22,
            "zindex": 5,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "nonant_alignment": "ab",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": 1,
                      "type": "Message",
                      "name": "greater_or_equal_than",
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
                  "element_id": "bTUlF0"
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
          "id": "bTeGf0",
          "default_name": "Text FZ",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "name": "Group text",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Upload File to Project",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
