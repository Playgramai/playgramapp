export const group_project_chat_cell = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 4,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0)",
    "border_style": "solid",
    "order": 3,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 12,
    "margin_right": 3,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 12,
    "single_height": false,
    "min_height_css": "70px",
    "padding_bottom": 14,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 0,
    "collapse_when_hidden": true,
    "border_roundness_left": 0,
    "border_roundness_right": 0,
    "border_roundness_bottom": 0,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "custom.chat",
                "type": "parameter",
                "parameter_name": {
                  "entries": {
                    "0": "chat"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
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
        "said": "a2Vsdm8tMzE4ODQ=",
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
                      "0": "#419DB2"
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
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUdr0",
  "current_parent": "bTIFr",
  "default_name": "Group S",
  "elements": {
    "bTJtM": {
      "properties": {
        "height": 34,
        "left": 0,
        "top": 0,
        "width": 205.9453125,
        "zindex": 16,
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.chat",
        "is_visible": true,
        "vertical_centering": true,
        "order": 7,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": "tempchat"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
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
                          "0": "#AEAEC81A"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#ACACAD1A"
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
        }
      },
      "type": "Group",
      "id": "bTUdt0",
      "current_parent": "bTIRy",
      "default_name": "Group V",
      "elements": {
        "bTJgn": {
          "properties": {
            "height": 30,
            "left": 0,
            "top": 0,
            "width": 30,
            "zindex": 3,
            "icon": "phosphor bold dots-three",
            "icon_color": "var(--color_bTkRL4_default)",
            "is_visible": false,
            "vertical_centering": true,
            "order": 9,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": true,
            "min_height_css": "18px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": false
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "args": 1024,
                        "type": "Message",
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0",
                        "name": "Current Page Width"
                      },
                      "type": "PageData",
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
                "properties": {
                  "element_id": "bTUdr0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdt0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "icon_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#121213"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
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
                "icon_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTUdx0",
          "default_name": "Icon E",
          "name": "Icon phosphor regular dot"
        },
        "bTJrz": {
          "properties": {
            "height": 200,
            "left": 0,
            "top": 0,
            "width": 200,
            "zindex": 2,
            "floating_reference": "top",
            "custom_id": "bTIml0",
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "max_width": 100,
            "min_width": 0,
            "unique_id": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": true,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "cc",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 1330,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "unique_id": {
                  "entries": {
                    "0": "gfMenuChat"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "CustomElement",
          "id": "bTUdy0",
          "default_name": "[Element] GF Chat Menu B",
          "name": "[Element] GF  RG Chat Menu",
          "custom_definition_name": "[Element] GF Chat Menu"
        }
      },
      "name": "Group Chat Settings",
      "style": "Group_transparent_"
    },
    "bTmVF1": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 10,
        "width": 0,
        "zindex": 20,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.chat",
        "vertical_centering": true,
        "order": 3,
        "row_gap": 6,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTmVD1",
      "default_name": "Group MZZZZ",
      "elements": {
        "bTmVJ1": {
          "properties": {
            "height": 0,
            "left": -16,
            "top": -10,
            "width": 0,
            "zindex": 19,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "custom.chat",
            "vertical_centering": true,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "40px",
            "single_height": false,
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTmUm1",
          "default_name": "Group LZZZZ",
          "elements": {
            "bTmUs1": {
              "properties": {
                "text": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "title_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -16,
                "top": -10,
                "width": 100,
                "zindex": 2,
                "order": 2,
                "fit_width": false,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_focused",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUdz0"
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
              "type": "Text",
              "id": "bTUds0",
              "default_name": "Text G",
              "style": "Text_inter___400___14px___white_"
            },
            "bTmUt1": {
              "properties": {
                "font_face": "var(--font_default):::400",
                "height": 48,
                "left": -16,
                "top": -10,
                "width": 250,
                "zindex": 18,
                "mandatory": true,
                "border_color": "var(--color_bTHBV_default)",
                "border_roundness": 0,
                "border_width": 2,
                "content": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "text_so_far",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTIWL"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "font_color": "var(--color_primary_contrast_default)",
                "font_size": 14,
                "is_visible": true,
                "letter_spacing": 0,
                "vertical_centering": true,
                "background_style": "none",
                "border_style": "none",
                "order": 1,
                "disabled": false,
                "unique_id": {
                  "entries": {
                    "0": "input",
                    "1": {
                      "next": {
                        "next": {
                          "args": 5,
                          "type": "Message",
                          "name": "truncated_right",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "bind_field": "title_text",
                "fit_height": false,
                "font_family": "var(--font_default)",
                "font_weight": "400",
                "padding_top": 0,
                "auto_binding": true,
                "single_width": false,
                "single_height": true,
                "min_height_css": "22px",
                "padding_bottom": 0,
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
                "placeholder_color": "rgba(var(--color_bTHBW_default_rgb), 0)",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_focused",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "is_visible": true
                  },
                  "type": "State"
                },
                "1": {
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
                    "font_color": "var(--color_bTsrq2_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Input",
              "id": "bTUdz0",
              "current_parent": "bTIRy",
              "default_name": "Input B",
              "name": "Input Chat Name",
              "transitions": {
                "border_color": {
                  "fn": "ease",
                  "duration": 200
                },
                "font_color": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "style": "Group_transparent_"
        },
        "bTmVQ1": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_type": "custom",
                        "custom_format": "mmm d"
                      },
                      "type": "Message",
                      "name": "format_date",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "Created Date",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -6,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTmVL1",
          "current_parent": "bTmVD1",
          "default_name": "Text MZ",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group project Chat Cell",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
