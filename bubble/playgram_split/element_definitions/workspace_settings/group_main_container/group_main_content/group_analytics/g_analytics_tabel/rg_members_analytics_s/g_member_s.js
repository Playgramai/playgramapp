export const G_Member_S = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 3,
    "border_roundness": 0,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 14,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_top": 8,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "42px",
    "padding_bottom": 8,
    "horiz_alignment": "flex-start",
    "border_color_top": {
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
    "border_style_top": "solid",
    "container_layout": "row",
    "four_border_style": true,
    "border_roundness_top": 0,
    "collapse_when_hidden": true,
    "border_roundness_right": 0
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
        "bgcolor": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#f2f3f5"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#2a2a2d\u0441\u0441"
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
            "args": 1,
            "type": "Message",
            "name": "less_than",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTleC1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "button_disabled": true
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 980,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_top": 12,
        "padding_left": 12,
        "padding_right": 12,
        "padding_bottom": 12
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTfQR0",
  "current_parent": "bTJFz",
  "default_name": "Group X",
  "elements": {
    "bTfYl": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 13,
        "width": 0,
        "zindex": 2,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 3,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 10,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "30%",
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "100%"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTfYV",
      "default_name": "Group Z",
      "elements": {
        "bTfYm": {
          "properties": {
            "height": 0,
            "left": -10,
            "top": -6,
            "width": 0,
            "zindex": 3,
            "border_color": "rgba(247,248,249,0.3)",
            "border_roundness": 20,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.workspace",
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.3)",
            "border_style": "solid",
            "order": 2,
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
                                "type": "Message",
                                "name": "to_lowercase",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "trimmed",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "name_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
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
                },
                "1": ""
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "min_width_css": "28px",
            "single_height": true,
            "min_height_css": "28px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "collapse_when_hidden": true,
            "container_vert_alignment": "center"
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
                "border_color": "rgba(18,18,19,0.3)",
                "bgcolor": "rgba(var(--color_bTsrp2_default_rgb), 0.3)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTfQW0",
          "default_name": "Group X",
          "elements": {
            "bTIeb": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "[center]",
                    "1": {
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
                        "name": "name_text",
                        "is_slidable": false
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
                "font_color": "rgba(247,248,249,0.5)",
                "font_size": 12,
                "line_height": 1.4,
                "vertical_centering": true,
                "order": 1,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "max_width_css": "23px",
                "min_width_css": "0px",
                "single_height": true,
                "min_height_css": "23px",
                "horiz_alignment": "center",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "args": {
                        "properties": {
                          "breakpoint_id": "built-in-mobile"
                        },
                        "type": "Breakpoint",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "less_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_size": 14
                  },
                  "type": "State"
                },
                "1": {
                  "condition": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
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
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "var(--color_bTsrp2_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTfQX0",
              "default_name": "Text L"
            },
            "bTqXv0": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 320,
                "zindex": 2,
                "stretch_or_rescale": "zoom",
                "border_roundness": 20,
                "is_visible": false,
                "src": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "image_image",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "order": 1,
                "fit_height": true,
                "single_width": false,
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
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "image_image",
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
              "type": "Image",
              "id": "bTqXt0",
              "current_parent": "bTfQW0",
              "default_name": "Image I",
              "name": "Image User Workspace",
              "style": "Image_standard_image_"
            },
            "bTqYH0": {
              "properties": {
                "height": 1,
                "left": 0,
                "top": 0,
                "width": 1,
                "zindex": 3,
                "AAD": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "to_lowercase",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "trimmed",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "name_text",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
                              "is_slidable": false
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
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "AAE": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
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
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "to_lowercase",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "trimmed",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "name_text",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
                              "is_slidable": false
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
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "AAe": false,
                "ABS": true,
                "ABT": "rgba(37,38,39,1)",
                "ABU": "rgba(37,38,39,1)",
                "ABV": "var(--color_bTkRL4_default)",
                "ABW": "var(--color_bTGzr_default)",
                "ABX": "var(--color_primary_contrast_default)",
                "ABY": true,
                "ABZ": {
                  "entries": {
                    "0": "12"
                  },
                  "type": "TextExpression"
                },
                "ABa": {
                  "entries": {
                    "0": "\"Inter\""
                  },
                  "type": "TextExpression"
                },
                "ABc": 350,
                "ABd": 0,
                "ABk": {
                  "entries": {
                    "0": "4"
                  },
                  "type": "TextExpression"
                },
                "ABl": {
                  "entries": {
                    "0": "4"
                  },
                  "type": "TextExpression"
                },
                "ABm": {
                  "entries": {
                    "0": "4"
                  },
                  "type": "TextExpression"
                },
                "ABn": {
                  "entries": {
                    "0": "4"
                  },
                  "type": "TextExpression"
                },
                "ABo": {
                  "entries": {
                    "0": "10"
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
                "min_width": 25,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "20px",
                "single_height": true,
                "min_height_css": "20px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bc",
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
                      "name": "invitation_accepted__boolean",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "properties": {
                    "AAD": {
                      "entries": {
                        "0": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "AAN": {
                      "entries": {
                        "0": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "1498171554228x105618760361836540-AAC",
              "id": "bTqYF0",
              "current_parent": "bTfQW0",
              "default_name": "Airtooltip B",
              "name": "Airtooltip UserName"
            }
          },
          "name": "Group Avatar"
        },
        "bTfYn": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 38,
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "args": 25,
                                      "type": "Message",
                                      "name": "truncated",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "user_email_for_search_text",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
                                  "said": "a2Vsdm8tMzE4ODQ=",
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
                                    "name": "user_email_for_search_text",
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
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "user_email_for_search_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -10,
            "top": -6,
            "width": 100,
            "zindex": 3,
            "order": 3,
            "fit_width": true,
            "unique_id": {
              "entries": {
                "0": "member_email"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "fullname@gmail.com",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTfQV0",
          "default_name": "Text L",
          "style": "Text_inter___400___14px___white_"
        },
        "bTiOq": {
          "properties": {
            "text": {
              "entries": {
                "0": "Email"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_size": 12,
            "is_visible": false,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 6,
            "min_width_css": "100%",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 980,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTiOZ",
          "current_parent": "bTfYV",
          "default_name": "Text S",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTiOw": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 9.199999999999989,
        "width": 0,
        "zindex": 3,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 12,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "28%"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTiOr",
      "default_name": "Group FZ",
      "elements": {
        "bTiOx": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "args": 0,
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTleC1"
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
                              "0": "0"
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
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTleC1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": " "
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -6.8000030517578125,
            "width": 100,
            "zindex": 7,
            "is_visible": true,
            "order": 3,
            "fit_width": false,
            "unique_id": {
              "entries": {
                "0": "member_messages"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "36px",
            "vert_alignment": "center",
            "button_disabled": false,
            "horiz_alignment": "flex-start",
            "editor_preview_text": "52",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 980,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "min_height_css": "0px"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTfQb0",
          "default_name": "Text L",
          "name": "Text Messages",
          "style": "Text_inter___400___14px___white_"
        },
        "bTiPJ": {
          "properties": {
            "text": {
              "entries": {
                "0": "Messages"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_size": 12,
            "is_visible": false,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 6,
            "min_width_css": "100%",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 980,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTiPH",
          "current_parent": "bTiOr",
          "default_name": "Text T",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTiPP": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 16.19999999999999,
        "width": 0,
        "zindex": 4,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 13,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "28%"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTiPN",
      "default_name": "Group HZ",
      "elements": {
        "bTiPT": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "args": 0,
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTfQt0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "2": "h "
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQt0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "next": {
                    "next": {
                      "args": 0,
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTfQu0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "2": "m "
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQu0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "4": "",
                "5": {
                  "next": {
                    "next": {
                      "args": 0,
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTfQv0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "2": "s"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQv0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "6": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -6.8000030517578125,
            "width": 100,
            "zindex": 7,
            "is_visible": true,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "36px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "10:32:02",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "args": 0,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTfQp0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "-"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "args": 980,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "min_height_css": "0px"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTfQd0",
          "current_parent": "bTdhF1",
          "default_name": "Text L",
          "name": "Text Time",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTiPZ": {
          "properties": {
            "text": {
              "entries": {
                "0": "Time Spent"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_size": 12,
            "is_visible": false,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 6,
            "min_width_css": "100%",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 980,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTiPU",
          "current_parent": "bTiPN",
          "default_name": "Text U",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTdkR1": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 5,
        "icon": "ionic outline chevron-down",
        "icon_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#555557"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#f7f8f9"
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
        "is_visible": false,
        "vertical_centering": true,
        "order": 16,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "16px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "16px",
        "padding_bottom": 0,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": false
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
              "name": "custom.selected_user_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTfQP0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "icon": "ionic outline chevron-up"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "greater_or_equal_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTleC1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "args": 980,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "margin_top": -136
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTfQc0",
      "default_name": "Icon G",
      "name": "Icon outline chevron"
    }
  },
  "name": "G Member[S]",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
