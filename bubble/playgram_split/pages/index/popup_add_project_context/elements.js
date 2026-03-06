export const elements = {
  "bTINR": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 16,
      "width": 0,
      "zindex": 13,
      "vertical_centering": true,
      "order": 1,
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
    "id": "bTUkz0",
    "default_name": "Group KZ",
    "elements": {
      "bTINS": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add project context"
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
        "id": "bTUlA0",
        "current_parent": "bTIMu",
        "default_name": "Text P",
        "name": "Text Instructions",
        "style": "Text_inter___400___18px___white_"
      },
      "bTpVt4": {
        "properties": {
          "height": 28,
          "left": 0,
          "top": 0,
          "width": 28,
          "zindex": 13,
          "border_color": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#eaecf0"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#2a2a2d"
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
          "1": {
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
                "is_slidable": false
              }
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTpVn4",
        "current_parent": "bTUkz0",
        "default_name": "Group RZZZZ",
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
                  "icon_color": "var(--color_bTkRX4_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTpVp4",
            "default_name": "Icon A",
            "style": "Icon_standard_icon_"
          }
        },
        "name": "Group close",
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
      "order": 26,
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
    "id": "bTUlS0",
    "default_name": "Group KZ",
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
        "id": "bTUlT0",
        "current_parent": "bTKjM0",
        "default_name": "Group KZ",
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
            "id": "bTUlX0",
            "current_parent": "bTKhy0",
            "default_name": "Button D",
            "name": "Button Cancel",
            "style": "Button_subtle_new_"
          },
          "bTKij0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Save"
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
              "min_width_css": "100px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-end",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "relevant_context_text",
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
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTeGN0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
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
                    "element_id": "bTUlF0"
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
            "type": "Button",
            "id": "bTUlY0",
            "default_name": "Button D",
            "name": "Button Save Project context",
            "style": "Button_primary_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Name/Instructions/Change password",
    "style": "Group_transparent_"
  },
  "bTeFv0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 48,
      "width": 0,
      "zindex": 36,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "custom.project",
      "vertical_centering": true,
      "order": 7,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "margin_top": 8,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTeFt0",
    "default_name": "Group TZZZ",
    "elements": {
      "bTeFz0": {
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
        }
      },
      "bTeGA0": {
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
        "style": "RepeatingGroup_transparent_"
      }
    },
    "name": "Group add files container",
    "style": "Group_transparent_"
  },
  "bTeGM0": {
    "properties": {
      "text": {
        "entries": {
          "0": "LLMs will be able to access this context in project chats"
        },
        "type": "TextExpression"
      },
      "height": 8,
      "left": 54,
      "top": 51,
      "width": 22,
      "zindex": 37,
      "order": 6,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "editor_preview_text": " Example will be able to access this context when you chat inside this project",
      "collapse_when_hidden": true
    },
    "type": "Text",
    "id": "bTeGB0",
    "default_name": "Text Q",
    "style": "Text_inter___400___16px___neutral_copy_copy_"
  },
  "bTeGe0": {
    "properties": {
      "height": 34,
      "left": 45,
      "top": 140,
      "width": 145,
      "zindex": 38,
      "content": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "relevant_context_text"
            },
            "type": "ElementParent",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "placeholder": {
        "entries": {
          "0": "Here you can write any text relevant to the context of the project"
        },
        "type": "TextExpression"
      },
      "order": 17,
      "fit_height": false,
      "margin_top": 8,
      "single_width": false,
      "margin_bottom": 8,
      "single_height": false,
      "max_height_css": "360px",
      "min_height_css": "240px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "MultiLineInput",
    "id": "bTeGN0",
    "default_name": "MultilineInput C",
    "style": "MultiLineInput_standard_multiline_input_"
  }
};
