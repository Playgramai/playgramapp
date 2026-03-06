export const Group_User_Name = {
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
    "order": 2,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "padding_bottom": 6,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 10,
    "collapse_when_hidden": true,
    "border_roundness_right": 10
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "args": 768,
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
  "id": "bTdVn1",
  "current_parent": "bTJFz",
  "default_name": "Group C",
  "elements": {
    "bTgjV0": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 11,
        "width": 0,
        "zindex": 8,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 2,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 10,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "30%",
        "single_height": false,
        "min_height_css": "40px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "states": {
        "1": {
          "condition": {
            "next": {
              "args": 640,
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
      "id": "bTgjT0",
      "default_name": "Group O",
      "elements": {
        "bTiNi": {
          "properties": {
            "text": {
              "entries": {
                "0": "Name"
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
                  "args": 640,
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
          "id": "bTiNR",
          "current_parent": "bTgjT0",
          "default_name": "Text K",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTgjZ0": {
          "properties": {
            "height": 0,
            "left": -521.5,
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
            "min_width_css": "22px",
            "single_height": true,
            "min_height_css": "22px",
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
          "id": "bTdVp1",
          "default_name": "Group C",
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
                        "name": "user_email_for_search_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
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
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
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
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "[/center]"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                },
                "3": {
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
              "id": "bTdVt1",
              "default_name": "Text D"
            },
            "bTqXp0": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 320,
                "zindex": 3,
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
              "id": "bTqXn0",
              "current_parent": "bTdVp1",
              "default_name": "Image H",
              "name": "Image User Workspace",
              "style": "Image_standard_image_"
            },
            "bTqYB0": {
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
              "id": "bTqXz0",
              "current_parent": "bTdVp1",
              "default_name": "Airtooltip A",
              "name": "Airtooltip UserName Members"
            }
          },
          "name": "Group Avatar"
        },
        "bTgja0": {
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
            "left": -521.5,
            "top": -6,
            "width": 100,
            "zindex": 3,
            "order": 3,
            "fit_width": false,
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
          "id": "bTdVo1",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_"
        }
      },
      "name": "Group Username/Avatar",
      "style": "Group_transparent_"
    },
    "bTglF0": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 10,
        "width": 0,
        "zindex": 9,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 8,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
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
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdVz1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "args": 768,
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
            "min_width_css": "28%",
            "vert_alignment": "center"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTglA0",
      "default_name": "Group R",
      "elements": {
        "bTiTj": {
          "properties": {
            "text": {
              "entries": {
                "0": "Role"
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
                  "args": 640,
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
          "id": "bTiTh",
          "current_parent": "bTglA0",
          "default_name": "Text V",
          "name": "Text Role",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTqJT0": {
          "properties": {
            "height": 200,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 7,
            "floating_reference": "top",
            "custom_id": "bTauk",
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "order": 2,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "margin_left": -8,
            "param_bTqIX0": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "single_width": false,
            "max_width_css": "80px",
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "32px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTqJR0",
          "default_name": "[Element] Dropdown project member type A"
        }
      },
      "name": "Group Dropdown Cell Container",
      "style": "Group_transparent_"
    },
    "bTglM0": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 21,
        "width": 0,
        "zindex": 10,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 13,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "42px",
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
              "args": 768,
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
            "min_width_css": "28%",
            "vert_alignment": "center"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTglH0",
      "default_name": "Group V",
      "elements": {
        "bTiNu": {
          "properties": {
            "text": {
              "entries": {
                "0": "Status"
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
                  "args": 640,
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
          "id": "bTiNp",
          "current_parent": "bTglH0",
          "default_name": "Text R",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTqrl": {
          "properties": {
            "height": 20,
            "left": 49.90625,
            "top": 6.609375,
            "width": 20,
            "zindex": 7,
            "floating_reference": "top",
            "custom_id": "bTqqe",
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "is_visible": false,
            "order": 3,
            "fit_width": true,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "20px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
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
                  "name": "invitation_accepted__boolean",
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
          "type": "CustomElement",
          "id": "bTqrg",
          "default_name": "resend invite A"
        },
        "bTglN0": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "Invited"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "Active"
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
                    "name": "invitation_accepted__boolean",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -700.1328125,
            "top": -6,
            "width": 100,
            "zindex": 5,
            "border_roundness": 16,
            "font_alignment": "center",
            "font_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#F7F8F9"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#C4E1E7"
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
                "name": "invitation_accepted__boolean",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "font_size": 12,
            "line_height": 1.4,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#384D6B"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#245662"
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
                "name": "invitation_accepted__boolean",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "padding_top": 2,
            "margin_right": 12,
            "padding_left": 8,
            "single_width": true,
            "max_width_css": "100px",
            "min_width_css": "55px",
            "padding_right": 8,
            "single_height": false,
            "max_height_css": "22px",
            "min_height_css": "0px",
            "padding_bottom": 2,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTdWA1",
          "current_parent": "bTJuU",
          "default_name": "Text D"
        }
      },
      "name": "Group Status Container",
      "style": "Group_transparent_"
    },
    "bTglT0": {
      "properties": {
        "height": 0,
        "left": 200,
        "top": 8,
        "width": 0,
        "zindex": 11,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.workspace",
        "is_visible": false,
        "vertical_centering": true,
        "order": 9,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "60px",
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
              "args": 640,
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
            "padding_left": 0,
            "min_width_css": "28%",
            "vert_alignment": "flex-start"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "owner"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_user",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
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
              "name": "user_type_option_user_type__os_",
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
      "type": "Group",
      "id": "bTglR0",
      "default_name": "Group AZ",
      "elements": {
        "bTiNo": {
          "properties": {
            "text": {
              "entries": {
                "0": "Role"
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
                  "args": 640,
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
          "id": "bTiNj",
          "current_parent": "bTglR0",
          "default_name": "Text P",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTglX0": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "user_type_option_user_type__os_",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -10,
            "top": -6,
            "width": 100,
            "zindex": 7,
            "is_visible": true,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "padding_left": 0,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Owner",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 640,
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
          "id": "bTdVz1",
          "default_name": "Text D",
          "name": "Text Owner",
          "style": "Text_inter___400___14px___white_"
        }
      },
      "name": "Group Text Owner Container",
      "style": "Group_transparent_"
    },
    "bTpen0": {
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
        "order": 18,
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
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTdVz1"
                    },
                    "type": "GetElement",
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
              "name": "user_user",
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
        "1": {
          "condition": {
            "next": {
              "args": 640,
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
            "vert_alignment": "flex-end"
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTpei0",
      "current_parent": "bTdVn1",
      "default_name": "Image G",
      "name": "Image Remove",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group User Name",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
