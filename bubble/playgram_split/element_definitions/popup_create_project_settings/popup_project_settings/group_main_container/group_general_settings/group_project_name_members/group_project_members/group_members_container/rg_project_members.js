export const RG_Project_Members = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 17,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "custom.members_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjX"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "user_email_for_search_text",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bToYD0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
                  }
                },
                "ignore_empty_constraints": true
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "merged_with",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "user_user",
                "value": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "Created By",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjV"
                  },
                  "type": "GetElement",
                  "is_slidable": false,
                  "moved_to_top": true
                },
                "constraint_type": "equals"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "custom.members_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "order": 4,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "margin_right": -8,
    "single_width": false,
    "single_height": false,
    "max_height_css": "170px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKAP"
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
  "type": "RepeatingGroup",
  "id": "bTJkA",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bToIZ2": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 3,
        "border_roundness": 10,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "order": 1,
        "row_gap": 12,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 10,
        "fit_height": true,
        "padding_top": 8,
        "margin_right": 8,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
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
            "bgcolor": "rgba(var(--color_bTGzq_default_rgb), 0.2)"
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
              "element_id": "bTJjV",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "row_gap": 6
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTJkB",
      "current_parent": "bTJFz",
      "default_name": "Group A",
      "elements": {
        "bTKCG": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKCH"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 100,
            "top": 32.40625,
            "width": 100,
            "zindex": 7,
            "is_visible": false,
            "order": 12,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "80px",
            "single_height": false,
            "max_height_css": "17px",
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "ElementParent",
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
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "current_workspace_custom_workspace",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "owner_user",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "current_organization_custom_organization",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
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
                      "name": "not_contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "admins_list_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTJjV"
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "Created By",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTJjV"
                      },
                      "type": "GetElement",
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
                "text": {
                  "entries": {
                    "0": "Owner"
                  },
                  "type": "TextExpression"
                },
                "is_visible": true
              },
              "type": "State"
            },
            "3": {
              "condition": {
                "next": {
                  "args": 470,
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
                "margin_left": -16
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTKCB",
          "default_name": "Text D",
          "name": "Text Group Default Role V",
          "style": "Text_input_label_"
        },
        "bTKCM": {
          "properties": {
            "height": 280,
            "left": -80,
            "top": -80,
            "width": 280,
            "zindex": 8,
            "data_source": {
              "next": {
                "next": {
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
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "type": "ElementParent",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": "Admin"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": "User"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "format_boolean",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "contains",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "custom.admins_",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTJjX"
                                      },
                                      "type": "GetElement",
                                      "said": "a2Vsdm8tMzE4ODQ=",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "ArbitraryText"
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
                "option_set": "option.user_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "group_type": "option.user_type__os_",
            "vertical_centering": true,
            "order": 6,
            "fit_width": false,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTKCH",
          "default_name": "Group B",
          "name": "Group Default Role Value",
          "style": "Group_transparent_"
        },
        "bTiYl": {
          "properties": {
            "height": 0,
            "left": 8,
            "top": 13,
            "width": 0,
            "zindex": 10,
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
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true
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
                  "element_id": "bTJjV",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "max_width_css": "170px",
                "max_height_css": "34px"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTiYg",
          "default_name": "Group M",
          "elements": {
            "bTiYm": {
              "properties": {
                "height": 0,
                "left": -345,
                "top": -8,
                "width": 0,
                "zindex": 3,
                "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
                "border_roundness": 20,
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "group_type": "custom.workspace",
                "vertical_centering": true,
                "background_style": "bgcolor",
                "bgcolor": "rgba(32,33,35,1)",
                "border_style": "solid",
                "order": 1,
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
                                "type": "Message",
                                "name": "name_text",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                    }
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
              "id": "bTJkG",
              "default_name": "Group A",
              "elements": {
                "bTYVr": {
                  "properties": {
                    "height": 2,
                    "left": 0,
                    "top": 0,
                    "width": 2,
                    "zindex": 13,
                    "AAD": {
                      "type": "TextExpression"
                    },
                    "AAE": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "name_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "AAG": "top left",
                    "AAH": "right bottom",
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
                                    "type": "Message",
                                    "name": "name_text",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
                                  "said": "a2Vsdm8tMzE4ODQ=",
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
                        }
                      },
                      "type": "TextExpression"
                    },
                    "AAe": false,
                    "ABS": true,
                    "ABT": "rgba(60,60,60,1)",
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
                    "order": 2,
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "5px",
                    "single_height": true,
                    "min_height_css": "3px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "ac",
                    "collapse_when_hidden": true
                  },
                  "type": "1498171554228x105618760361836540-AAC",
                  "id": "bTYVp",
                  "current_parent": "bTJkG",
                  "default_name": "Airtooltip A",
                  "name": "Airtooltip User Name"
                },
                "bTiYf": {
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
                    "font_color": "rgba(65,157,178,1)",
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
                          "type": "Message",
                          "name": "is_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bToJP2"
                        },
                        "type": "GetElement",
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
                  "id": "bTJkH",
                  "default_name": "Text A"
                },
                "bToJU2": {
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
                  "id": "bToJP2",
                  "current_parent": "bTJkG",
                  "default_name": "Image D",
                  "name": "Image User Workspace",
                  "style": "Image_standard_image_"
                }
              },
              "name": "Group Avatar"
            },
            "bTiYn": {
              "properties": {
                "text": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "user_email_for_search_text",
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
                "left": -345,
                "top": -8,
                "width": 100,
                "zindex": 3,
                "order": 2,
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
                      "element_id": "bTJjV",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "properties": {
                    "max_width_css": "150px",
                    "max_height_css": "34px"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTJkF",
              "default_name": "Text A",
              "style": "Text_inter___400___16px___neutral_copy_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTiYz": {
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
            "vertical_centering": true,
            "order": 14,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "80px",
            "min_width_css": "80px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "flex-start",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true
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
                          "name": "current_workspace_custom_workspace",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "owner_user",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "current_organization_custom_organization",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
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
                      "name": "not_contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "admins_list_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTJjV"
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "Created By",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTJjV"
                      },
                      "type": "GetElement",
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
            "2": {
              "condition": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
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
          "type": "Group",
          "id": "bTiYx",
          "default_name": "Group N",
          "elements": {
            "bTiZD": {
              "properties": {
                "height": 200,
                "left": -349,
                "top": -8,
                "width": 200,
                "zindex": 9,
                "floating_reference": "top",
                "custom_id": "bTauk",
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "order": 1,
                "max_width": 100,
                "min_width": 0,
                "fit_height": true,
                "margin_left": -8,
                "param_bTavN": {
                  "next": {
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjX"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "param_bTavU": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "unsaved_admins_list_user",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJjX"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "single_width": false,
                "max_width_css": "80px",
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "32px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true,
                "floating_reference_horizontal": "none",
                "floating_reference_horizontal_resp": "left"
              },
              "type": "CustomElement",
              "id": "bTawt",
              "default_name": "[Element] Dropdown project member type A",
              "name": "[Element] Dropdown project member type"
            }
          },
          "name": "Group Member type",
          "style": "Group_transparent_"
        },
        "bToJO2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 320,
            "zindex": 12,
            "is_visible": false,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
              },
              "type": "TextExpression"
            },
            "order": 15,
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
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.user_type__os_",
                          "option_value": "admin"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "owner_user",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "current_organization_custom_organization",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "type": "Message",
                                      "name": "current_workspace_custom_workspace",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "admins_list_custom_workspace",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTJjX"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
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
                                  "name": "Created By",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_group_data",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTJjX"
                              },
                              "type": "GetElement",
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
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
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
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "Created By",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTJjV"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
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
            }
          },
          "type": "Image",
          "id": "bToJD2",
          "default_name": "Image C",
          "name": "Image Remove Project Member",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group User Name",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Project Members",
  "style": "RepeatingGroup_transparent_"
};
