export const Group_Archive = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 64,
    "width": 0,
    "zindex": 32,
    "is_visible": false,
    "vertical_centering": true,
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "0px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "0px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_settings__os_",
                "option_value": "archive"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
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
  "type": "Group",
  "id": "bTLCx",
  "default_name": "Group P",
  "elements": {
    "bTLDD": {
      "properties": {
        "text": {
          "entries": {
            "0": "You have no archived chats."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -64,
        "width": 100,
        "zindex": 31,
        "is_visible": false,
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
            "properties": {
              "element_id": "bTLDE"
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
      "type": "Text",
      "id": "bTLCr",
      "default_name": "Text C",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTLDJ": {
      "properties": {
        "height": 350,
        "left": -80,
        "top": -150,
        "width": 280,
        "zindex": 32,
        "group_type": "custom.chat",
        "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "separator_style": "solid",
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "fixed_rows": false,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_left": "solid",
        "four_border_style": true,
        "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_right": "solid",
        "border_color_bottom": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_bottom": "solid",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true,
        "border_roundness_left": 10,
        "border_roundness_bottom": 10
      },
      "states": {
        "0": {
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
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_settings__os_",
                    "option_value": "archive"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.tab_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKdM0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "data_source": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "get_list_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTLDj"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "get_list_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTLDp"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "merged_with",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "merged_with",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTLDd"
              },
              "type": "GetElement",
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
            "border_color_left": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
            "border_color_right": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
            "border_color_bottom": "rgba(var(--color_bTtSL3_default_rgb), 0.1)"
          },
          "type": "State"
        }
      },
      "type": "RepeatingGroup",
      "id": "bTLDE",
      "default_name": "RepeatingGroup B",
      "elements": {
        "bTLDV": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 32,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.chat",
            "vertical_centering": true,
            "order": 1,
            "use_gap": false,
            "fit_width": false,
            "column_gap": 16,
            "fit_height": true,
            "padding_left": 16,
            "single_width": false,
            "padding_right": 16,
            "single_height": false,
            "min_height_css": "42px",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "flex-start"
          },
          "type": "Group",
          "id": "bTLDQ",
          "default_name": "Group Q",
          "elements": {
            "bTLDW": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "title_text",
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
                "left": 0,
                "top": 0,
                "width": 100,
                "zindex": 31,
                "order": 1,
                "fit_width": false,
                "fit_height": true,
                "margin_right": 16,
                "single_width": false,
                "single_height": false,
                "max_height_css": "17px",
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTLDK",
              "current_parent": "bTLDE",
              "default_name": "Text K",
              "style": "Text_inter___400___14px___white_copy_"
            },
            "bTLEG": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_type": "mmm d, yyyy"
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
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 10,
                "top": 10,
                "width": 100,
                "zindex": 31,
                "order": 3,
                "fit_width": false,
                "fit_height": true,
                "margin_right": 16,
                "single_width": false,
                "max_width_css": "150px",
                "min_width_css": "150px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTLEB",
              "current_parent": "bTLDQ",
              "default_name": "Text L",
              "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
            },
            "bTLEx": {
              "properties": {
                "height": 0,
                "left": 0,
                "top": 16.796875,
                "width": 0,
                "zindex": 33,
                "data_source": {
                  "type": "ElementParent"
                },
                "group_type": "custom.chat",
                "vertical_centering": true,
                "order": 4,
                "use_gap": false,
                "fit_width": true,
                "column_gap": 8,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "45px",
                "single_height": false,
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true,
                "container_horiz_alignment": "space-between"
              },
              "type": "Group",
              "id": "bTLEv",
              "default_name": "Group S",
              "elements": {
                "bTLFB": {
                  "properties": {
                    "height": 30,
                    "left": -181.5546875,
                    "top": 0,
                    "width": 30,
                    "zindex": 32,
                    "icon": "feather trash-2",
                    "icon_color": "var(--color_bTkRL4_default)",
                    "vertical_centering": true,
                    "order": 4,
                    "unique_id": {
                      "entries": {
                        "0": "deleteChat"
                      },
                      "type": "TextExpression"
                    },
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "16px",
                    "single_height": true,
                    "min_height_css": "16px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
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
                        "icon_color": "var(--color_bTkRP4_default)"
                      },
                      "type": "State"
                    },
                    "1": {
                      "condition": {
                        "next": {
                          "next": {
                            "args": {
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
                            "type": "Message",
                            "name": "and_",
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
                        "icon_color": "var(--color_bTsrq2_default)"
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
                  "id": "bTLEN",
                  "current_parent": "bTLDQ",
                  "default_name": "Icon F"
                },
                "bTLFC": {
                  "properties": {
                    "height": 30,
                    "left": -181.5546875,
                    "top": 0,
                    "width": 30,
                    "zindex": 32,
                    "icon": "feather minus-circle",
                    "icon_color": "var(--color_bTkRL4_default)",
                    "vertical_centering": true,
                    "order": 1,
                    "unique_id": {
                      "entries": {
                        "0": "unarchive"
                      },
                      "type": "TextExpression"
                    },
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "16px",
                    "single_height": true,
                    "min_height_css": "16px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
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
                                  "name": "is_false",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "dark_mode_boolean",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "and_",
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
                        "icon_color": "var(--color_bTkRP4_default)"
                      },
                      "type": "State"
                    },
                    "1": {
                      "condition": {
                        "next": {
                          "next": {
                            "args": {
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
                            "type": "Message",
                            "name": "and_",
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
                        "icon_color": "var(--color_bTsrq2_default)"
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
                  "id": "bTLEH",
                  "default_name": "Icon E"
                },
                "bTLFP": {
                  "properties": {
                    "height": 1,
                    "left": 0,
                    "top": 0,
                    "width": 1,
                    "zindex": 3,
                    "AAD": {
                      "entries": {
                        "0": "unarchive"
                      },
                      "type": "TextExpression"
                    },
                    "AAE": {
                      "entries": {
                        "0": "Unarchive chat"
                      },
                      "type": "TextExpression"
                    },
                    "AAG": "right bottom",
                    "AAH": "top left",
                    "AAI": "dark",
                    "AAK": true,
                    "AAN": {
                      "entries": {
                        "0": "unarchive"
                      },
                      "type": "TextExpression"
                    },
                    "AAe": false,
                    "ABS": true,
                    "ABT": "var(--color_bTGzr_default)",
                    "ABU": "var(--color_bTGzr_default)",
                    "ABV": "var(--color_primary_contrast_default)",
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
                    "ABn": {
                      "entries": {
                        "0": ""
                      },
                      "type": "TextExpression"
                    },
                    "ABo": {
                      "entries": {
                        "0": "8"
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
                    "min_width_css": "20px",
                    "single_height": true,
                    "min_height_css": "20px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "bc",
                    "collapse_when_hidden": true
                  },
                  "type": "1498171554228x105618760361836540-AAC",
                  "id": "bTLFN",
                  "current_parent": "bTLEv",
                  "default_name": "Airtooltip A",
                  "name": "Airtooltip Unarchive"
                },
                "bTLFV": {
                  "properties": {
                    "height": 1,
                    "left": 10,
                    "top": 10,
                    "width": 1,
                    "zindex": 3,
                    "AAD": {
                      "entries": {
                        "0": "deleteChat"
                      },
                      "type": "TextExpression"
                    },
                    "AAE": {
                      "entries": {
                        "0": "Delete chat"
                      },
                      "type": "TextExpression"
                    },
                    "AAG": "right bottom",
                    "AAH": "top left",
                    "AAI": "dark",
                    "AAK": true,
                    "AAN": {
                      "entries": {
                        "0": "deleteChat"
                      },
                      "type": "TextExpression"
                    },
                    "AAe": false,
                    "ABS": true,
                    "ABT": "var(--color_bTGzr_default)",
                    "ABU": "var(--color_bTGzr_default)",
                    "ABV": "var(--color_primary_contrast_default)",
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
                    "ABn": {
                      "entries": {
                        "0": ""
                      },
                      "type": "TextExpression"
                    },
                    "ABo": {
                      "entries": {
                        "0": "8"
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
                    "min_width_css": "20px",
                    "single_height": true,
                    "min_height_css": "20px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "bc",
                    "collapse_when_hidden": true
                  },
                  "type": "1498171554228x105618760361836540-AAC",
                  "id": "bTLFT",
                  "current_parent": "bTLEv",
                  "default_name": "Airtooltip B",
                  "name": "Airtooltip Delete Chat"
                }
              },
              "name": "Group Buttons",
              "style": "Group_transparent_"
            }
          },
          "name": "Group Archived Chat Cell",
          "style": "Group_transparent_"
        }
      },
      "name": "RG Archived Chats",
      "style": "RepeatingGroup_transparent_"
    },
    "bTLFD": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 32,
        "is_visible": false,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
        "order": 1,
        "row_gap": 16,
        "use_gap": false,
        "fit_width": false,
        "fit_height": true,
        "padding_left": 16,
        "single_width": false,
        "padding_right": 16,
        "single_height": false,
        "min_height_css": "26px",
        "horiz_alignment": "flex-start",
        "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_top": "solid",
        "container_layout": "row",
        "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_left": "solid",
        "four_border_style": true,
        "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style_right": "solid",
        "border_roundness_top": 10,
        "collapse_when_hidden": true,
        "border_roundness_left": 0,
        "border_roundness_right": 10,
        "container_horiz_alignment": "flex-start"
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
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTLDE"
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
            "bgcolor": "var(--color_bTsrr2_default)",
            "border_color_top": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
            "border_color_left": "rgba(var(--color_bTtSL3_default_rgb), 0.1)",
            "border_color_right": "rgba(var(--color_bTtSL3_default_rgb), 0.1)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTLET",
      "current_parent": "bTLAJ",
      "default_name": "Group R",
      "elements": {
        "bTLDW": {
          "properties": {
            "text": {
              "entries": {
                "0": "[b]Name[/b]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 31,
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 12,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "font_weight": "500",
            "margin_right": 16,
            "single_width": false,
            "single_height": false,
            "min_height_css": "26px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "border_color_left": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
            "border_style_left": "none",
            "four_border_style": true,
            "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
            "border_style_right": "solid",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTLEY",
          "current_parent": "bTLDE",
          "default_name": "Text M",
          "style": "Text_inter___400___14px___white_"
        },
        "bTLEG": {
          "properties": {
            "text": {
              "entries": {
                "0": "[b]Created Date[/b]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 10,
            "top": 10,
            "width": 100,
            "zindex": 31,
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 12,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "font_weight": "500",
            "margin_right": 16,
            "single_width": false,
            "max_width_css": "150px",
            "min_width_css": "150px",
            "single_height": false,
            "min_height_css": "26px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTLEZ",
          "current_parent": "bTLDQ",
          "default_name": "Text M",
          "style": "Text_inter___400___14px___white_"
        },
        "bTLFJ": {
          "properties": {
            "text": {
              "entries": {
                "0": "Created Date"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 20,
            "top": 20,
            "width": 100,
            "zindex": 31,
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "45px",
            "single_height": false,
            "max_height_css": "16px",
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTLFH",
          "current_parent": "bTLET",
          "default_name": "Text N",
          "name": "Text Placeholder",
          "style": "Text_inter___400___14px___white_"
        }
      },
      "name": "Group Archived Chat Header",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Archive",
  "style": "Group_transparent_"
};
