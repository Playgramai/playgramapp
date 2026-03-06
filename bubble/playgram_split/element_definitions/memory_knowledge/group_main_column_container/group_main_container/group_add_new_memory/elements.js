export const elements = {
  "bTaiN": {
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
    "style": "RepeatingGroup_transparent_"
  },
  "bTapx": {
    "properties": {
      "height": 0,
      "left": 30,
      "top": 69.1953125,
      "width": 0,
      "zindex": 4,
      "is_visible": false,
      "vertical_centering": true,
      "order": 5,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 16,
      "max_width_css": "500px",
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_animation": true,
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
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
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
                            "type": "Message",
                            "name": "not_equals",
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "owner_user",
                "is_slidable": false
              },
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
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
      },
      "1": {
        "condition": {
          "next": {
            "args": 890,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": {
            "type": "Empty"
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTchP",
    "current_parent": "bTalM",
    "default_name": "Group X",
    "elements": {
      "bTOQG0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Memory level"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": -39.1953125,
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
        "id": "bTchT",
        "current_parent": "bTOJd0",
        "default_name": "Text G",
        "style": "Text_inter___400___14px___white_"
      },
      "bTOQX0": {
        "properties": {
          "height": 48,
          "left": -50,
          "top": 12.8125,
          "width": 250,
          "zindex": 3,
          "mandatory": false,
          "default": {
            "properties": {
              "option_set": "option.memory_management_tabs__os_0",
              "option_value": "personal"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "data_source": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "all_types"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.memory_management_tabs__os_0"
            },
            "type": "AllOptionValue",
            "is_slidable": false
          },
          "placeholder": {
            "entries": {
              "0": "Choose memory level..."
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": false,
          "dynamic_type": "option.memory_management_tabs__os_0",
          "single_width": false,
          "choices_style": "dynamic",
          "single_height": true,
          "computed_value": "number",
          "min_height_css": "44px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true,
          "option_display_expression": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "InjectedValue"
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "states": {
          "0": {
            "condition": {
              "next": {
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
                  "name": "and_",
                  "is_slidable": false
                },
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
              "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
              "disabled": true
            },
            "type": "State"
          }
        },
        "type": "Dropdown",
        "id": "bTchU",
        "default_name": "Dropdown A",
        "name": "Dropdown Add New Memory Level",
        "style": "Dropdown_new_dropdown_"
      }
    },
    "name": "Group Choose Memory Level",
    "style": "Group_transparent_"
  },
  "bTOQB0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 39.1953125,
      "width": 0,
      "zindex": 4,
      "vertical_centering": true,
      "order": 17,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 16,
      "single_width": false,
      "margin_bottom": 16,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
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
                  "option_set": "option.memory_input_types__os_",
                  "option_value": "upload_files"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.memory_input_type_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTchB"
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
    "id": "bTchV",
    "default_name": "Group X",
    "elements": {
      "bTaqL": {
        "properties": {
          "height": 100,
          "left": -850,
          "top": 24.796875,
          "width": 1050,
          "zindex": 4,
          "border_color": "rgba(42,42,45,1)",
          "border_roundness": 12,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(38,38,41,1)",
          "border_style": "solid",
          "order": 2,
          "row_gap": 10,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "120px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
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
              "border_color": "rgba(234,236,240,1)",
              "bgcolor": "rgba(234,236,240,1)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTchZ",
        "default_name": "Group X",
        "elements": {
          "bTaqP": {
            "properties": {
              "height": 100,
              "left": 0,
              "top": -24.796875,
              "width": 226,
              "zindex": 1,
              "mandatory": false,
              "order": 1,
              "unique_id": {
                "entries": {
                  "0": "addMemoryInput"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "max_height_css": "260px",
              "min_height_css": "66px",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
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
                  "disabled": true
                },
                "type": "State"
              }
            },
            "type": "MultiLineInput",
            "id": "bTcha",
            "default_name": "MultilineInput A",
            "name": "MultilineInput Add Memory Content",
            "style": "MultiLineInput_simple_transparent_"
          },
          "bTarB": {
            "properties": {
              "height": 40,
              "left": -848,
              "top": 110,
              "width": 1048,
              "zindex": 4,
              "vertical_centering": true,
              "order": 2,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 10,
              "fit_height": true,
              "margin_left": 12,
              "margin_right": 12,
              "single_width": false,
              "margin_bottom": 12,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "nonant_alignment": "cc",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-end"
            },
            "type": "Group",
            "id": "bTchb",
            "default_name": "Group X",
            "elements": {
              "bTarF": {
                "properties": {
                  "height": 24,
                  "left": 0,
                  "top": -110,
                  "width": 24,
                  "zindex": 3,
                  "border_roundness": 50,
                  "vertical_centering": true,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "30px",
                  "single_height": false,
                  "min_height_css": "30px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "container_layout": "column",
                  "nonant_alignment": "cc",
                  "collapse_when_hidden": true,
                  "container_vert_alignment": "center"
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
                      "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bTchf",
                "current_parent": "bTaqJ",
                "default_name": "Group X",
                "elements": {
                  "bTKYb0": {
                    "properties": {
                      "height": 30,
                      "left": -8,
                      "top": -15.1953125,
                      "width": 30,
                      "zindex": 2,
                      "icon": "feather mic",
                      "icon_color": "var(--color_bTkRL4_default)",
                      "is_visible": false,
                      "vertical_centering": true,
                      "order": 1,
                      "fit_height": false,
                      "single_width": true,
                      "min_width_css": "20px",
                      "single_height": true,
                      "min_height_css": "20px",
                      "horiz_alignment": "center",
                      "nonant_alignment": "ac",
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
                            "name": "get_AAE",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTckm"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "properties": {
                          "icon": "feather x"
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
                          "icon_color": "var(--color_bTsrp2_default)"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Icon",
                    "id": "bTchg",
                    "default_name": "Icon F"
                  },
                  "bTwSS3": {
                    "properties": {
                      "height": 24,
                      "left": 0,
                      "top": 0,
                      "width": 24,
                      "zindex": 3,
                      "border_roundness": 50,
                      "vertical_centering": true,
                      "order": 2,
                      "fit_width": true,
                      "fit_height": true,
                      "padding_top": 5,
                      "padding_left": 5,
                      "single_width": false,
                      "min_width_css": "30px",
                      "padding_right": 5,
                      "single_height": false,
                      "min_height_css": "30px",
                      "padding_bottom": 4,
                      "vert_alignment": "center",
                      "horiz_alignment": "flex-start",
                      "container_layout": "column",
                      "nonant_alignment": "bc",
                      "collapse_when_hidden": true,
                      "container_vert_alignment": "center"
                    },
                    "type": "Group",
                    "id": "bTwSL3",
                    "current_parent": "bTchf",
                    "default_name": "Group TZ",
                    "elements": {
                      "bTkfn2": {
                        "properties": {
                          "height": 240,
                          "left": 18.5,
                          "top": 0,
                          "width": 240,
                          "zindex": 6,
                          "src": {
                            "entries": {
                              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950146821x244952508787714900/Microphone%20%281%29.svg"
                            },
                            "type": "TextExpression"
                          },
                          "order": 1,
                          "fit_height": true,
                          "single_width": true,
                          "min_width_css": "20px",
                          "single_height": false,
                          "min_height_css": "240px",
                          "horiz_alignment": "flex-start",
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
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAE",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTckm"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950574605x400075364480590140/Close_MD.svg"
                                },
                                "type": "TextExpression"
                              },
                              "opacity": 60
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
                                        "name": "is_false",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAE",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTckm"
                                    },
                                    "type": "GetElement",
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
                              "properties": {
                                "element_id": "bTwSL3"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766490398084x972828281526264000/Microphone.svg"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "State"
                          },
                          "2": {
                            "condition": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "is_hovered",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTwSL3"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "and_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAE",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTckm"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950574605x400075364480590140/Close_MD.svg"
                                },
                                "type": "TextExpression"
                              },
                              "opacity": 100
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
                        "id": "bTwSN3",
                        "default_name": "Image C",
                        "name": "Image mic",
                        "style": "Image_standard_image_",
                        "transitions": {
                          "opacity": {
                            "fn": "ease",
                            "duration": 200
                          }
                        }
                      },
                      "bTtTZ3": {
                        "properties": {
                          "height": 240,
                          "left": 28.5,
                          "top": 10,
                          "width": 240,
                          "zindex": 6,
                          "is_visible": false,
                          "src": {
                            "entries": {
                              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769077163636x524426294362925000/Microphone%20%282%29.svg"
                            },
                            "type": "TextExpression"
                          },
                          "order": 2,
                          "fit_height": true,
                          "single_width": true,
                          "min_width_css": "20px",
                          "single_height": false,
                          "min_height_css": "240px",
                          "horiz_alignment": "flex-start",
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
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAE",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTckm"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770642705804x691198049118189300/Close_MD%201.svg"
                                },
                                "type": "TextExpression"
                              },
                              "opacity": 60
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
                                        "name": "is_false",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAE",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTckm"
                                    },
                                    "type": "GetElement",
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
                              "properties": {
                                "element_id": "bTwSL3"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769077176214x138742019624571440/Microphone%20%283%29%201.svg"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "State"
                          },
                          "2": {
                            "condition": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "is_hovered",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTwSL3"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "and_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAE",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTckm"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "properties": {
                              "src": {
                                "entries": {
                                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770642713778x481082971498362000/Close_MD%201.svg"
                                },
                                "type": "TextExpression"
                              },
                              "opacity": 100
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
                        "id": "bTwSR3",
                        "current_parent": "bTUeo0",
                        "default_name": "Image C",
                        "name": "Image mic light",
                        "style": "Image_standard_image_",
                        "transitions": {
                          "opacity": {
                            "fn": "ease",
                            "duration": 200
                          }
                        }
                      }
                    },
                    "name": "Group micro (use button)",
                    "style": "Group_transparent_",
                    "transitions": {
                      "background_style": {
                        "fn": "ease",
                        "duration": 200
                      }
                    }
                  }
                },
                "name": "Group Dictate (use button)",
                "style": "Group_transparent_",
                "transitions": {
                  "background_style": {
                    "fn": "ease",
                    "duration": 200
                  }
                }
              },
              "bTarG": {
                "properties": {
                  "height": 19,
                  "left": 0,
                  "top": -110,
                  "width": 134,
                  "zindex": 2,
                  "html": {
                    "entries": {
                      "0": "<div class=\"waveform-container\">\n    <div id=\"waveform-memory\" class=\"waveform\"></div>\n  </div>"
                    },
                    "type": "TextExpression"
                  },
                  "is_visible": false,
                  "order": 1,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": true,
                  "min_height_css": "30px",
                  "vert_alignment": "center",
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
                        "name": "get_AAE",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTckm"
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
                "type": "HTML",
                "id": "bTchh",
                "current_parent": "bTaqJ",
                "default_name": "HTML A",
                "name": "HTML waveform (mic visualisation)"
              },
              "bTash": {
                "properties": {
                  "bold": false,
                  "font_face": "var(--font_default):::600",
                  "height": 15,
                  "left": 0,
                  "top": 0,
                  "width": 37,
                  "zindex": 7,
                  "icon": "feather check",
                  "border_roundness": 20,
                  "boxshadow_style": "none",
                  "font_color": "var(--color_surface_default)",
                  "font_size": 16,
                  "icon_color": "rgba(46,46,46,1)",
                  "is_visible": false,
                  "line_height": 1.5,
                  "vertical_centering": true,
                  "bgcolor": "var(--color_primary_contrast_default)",
                  "order": 3,
                  "fit_width": true,
                  "icon_size": 18,
                  "unique_id": {
                    "entries": {
                      "0": "enter"
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": true,
                  "button_type": "icon",
                  "font_weight": "600",
                  "padding_left": 0,
                  "single_width": true,
                  "min_width_css": "30px",
                  "padding_right": 0,
                  "single_height": true,
                  "min_height_css": "30px",
                  "padding_bottom": 0,
                  "button_disabled": false,
                  "horiz_alignment": "flex-end",
                  "nonant_alignment": "cc",
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
                        "name": "get_AAE",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTckm"
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
                      "icon_color": "var(--color_bToSr_default)",
                      "bgcolor": "var(--color_bTspn2_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Button",
                "id": "bTchl",
                "current_parent": "bTaqz",
                "default_name": "Button C",
                "name": "Button Save Recording",
                "transitions": {
                  "background_style": {
                    "fn": "ease",
                    "duration": 200
                  }
                }
              }
            },
            "name": "Group Container Voice Recorder",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Container Input/Voice",
        "style": "Group_transparent_"
      },
      "bTOQG0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Memory & knowledge content"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": -39.1953125,
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
        "id": "bTchm",
        "current_parent": "bTOJd0",
        "default_name": "Text G",
        "style": "Text_inter___400___16px___neutral_copy_copy_"
      }
    },
    "name": "Group Input Add Memory Content",
    "style": "Group_transparent_"
  },
  "bTOQf0": {
    "properties": {
      "height": 0,
      "left": 20,
      "top": 59.1953125,
      "width": 0,
      "zindex": 4,
      "is_visible": false,
      "vertical_centering": true,
      "order": 13,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 16,
      "max_width_css": "0px",
      "min_width_css": "100%",
      "single_height": false,
      "min_height_css": "38px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_animation": true,
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "project"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.memory_level_",
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
      },
      "1": {
        "condition": {
          "next": {
            "args": 890,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": {
            "type": "Empty"
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTchn",
    "current_parent": "bTOJd0",
    "default_name": "Group X",
    "elements": {
      "bTOQX0": {
        "properties": {
          "height": 48,
          "left": -50,
          "top": 12.8125,
          "width": 250,
          "zindex": 3,
          "mandatory": true,
          "data_source": {
            "next": {
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTOQj0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "placeholder": {
            "entries": {
              "0": "Choose a project..."
            },
            "type": "TextExpression"
          },
          "order": 3,
          "fit_height": false,
          "dynamic_type": "custom.project",
          "single_width": false,
          "choices_style": "dynamic",
          "max_width_css": "202px",
          "min_width_css": "202px",
          "single_height": true,
          "computed_value": "number",
          "min_height_css": "38px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true,
          "option_display_expression": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "InjectedValue"
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "states": {
          "1": {
            "condition": {
              "next": {
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
                  "name": "and_",
                  "is_slidable": false
                },
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
              "disabled": true
            },
            "type": "State"
          }
        },
        "type": "Dropdown",
        "id": "bTchs",
        "default_name": "Dropdown A",
        "name": "Dropdown choose a Project",
        "style": "Dropdown_new_dropdown_14px_"
      },
      "bTnVM1": {
        "properties": {
          "text": {
            "entries": {
              "0": "Project"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_color": "rgba(157,157,158,1)",
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
        "id": "bTnVH1",
        "current_parent": "bTchn",
        "default_name": "Text P",
        "style": "Text_inter___400___14px___white_"
      }
    },
    "name": "Group Choose Project",
    "style": "Group_transparent_"
  },
  "bTORD0": {
    "properties": {
      "height": 48,
      "left": -578,
      "top": 152,
      "width": 778,
      "zindex": 6,
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 12,
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(0,0,0,0)",
      "border_style": "dashed",
      "order": 22,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 16,
      "single_width": false,
      "margin_bottom": 20,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
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
          "border_color": "rgba(234,236,240,1)"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "isnt_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTcid"
                },
                "type": "GetElement",
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
          "border_color": "var(--color_bTkRL4_default)"
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "args": 768,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "margin_top": 0
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTcht",
    "default_name": "Group X",
    "elements": {
      "bTahn": {
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
          "fit_height": false,
          "single_width": false,
          "single_height": false,
          "max_height_css": "100%",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true,
          "file_upload_condition": true
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
                "element_id": "bTcid"
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
        "id": "bTchx",
        "current_parent": "bTORB0",
        "default_name": "BetterUploader B",
        "name": "BetterUploader Files"
      },
      "bTORn0": {
        "properties": {
          "height": 33.1953,
          "left": -45.41399999999999,
          "top": 7.3984375,
          "width": 245.414,
          "zindex": 2,
          "vertical_centering": true,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "padding_top": 12,
          "padding_left": 12,
          "single_width": false,
          "padding_right": 12,
          "single_height": false,
          "padding_bottom": 12,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "nonant_alignment": "ab",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 460,
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
              "row_gap": 12,
              "margin_top": 4,
              "container_horiz_alignment": "center"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTchy",
        "default_name": "Group X",
        "elements": {
          "bTORr0": {
            "properties": {
              "height": 16.7969,
              "left": 0,
              "top": 0,
              "width": 286.312,
              "zindex": 4,
              "vertical_centering": true,
              "order": 2,
              "row_gap": 4,
              "use_gap": true,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 460,
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
            "id": "bTchz",
            "default_name": "Group X",
            "elements": {
              "bTORa0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Drag and drop file here"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
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
                  "nonant_alignment": "ab",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 460,
                        "type": "Message",
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTMGw",
                        "name": "Current Page Width"
                      },
                      "type": "PageData",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Drag and drop file here or [b][u]browse[/u][/b]"
                        },
                        "type": "TextExpression"
                      },
                      "horiz_alignment": "center"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTciD",
                "default_name": "Text G",
                "style": "Text_inter___400___14px___white_"
              },
              "bTORb0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Supports documents and text files"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 3,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "ab",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 460,
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
                      "horiz_alignment": "center"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTciE",
                "current_parent": "bTORB0",
                "default_name": "Text G",
                "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
              }
            },
            "name": "Group Text",
            "style": "Group_transparent_"
          },
          "bTORs0": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 5,
              "icon": "feather upload",
              "icon_color": "var(--color_bTkRL4_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "margin_right": 10,
              "single_width": true,
              "min_width_css": "18px",
              "single_height": true,
              "min_height_css": "18px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "ab",
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
                    "name": "custom.file_is_loading_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon": "phosphor regular circle-notch",
                  "spin_icon": true
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
                  "icon_color": "var(--color_bTsrp2_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTciF",
            "default_name": "Icon F"
          },
          "bTORy0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Browse"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 50,
              "top": 17.6171875,
              "width": 150,
              "zindex": 6,
              "icon": "feather file-text",
              "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.3)",
              "border_roundness": 6,
              "font_size": 14,
              "is_visible": false,
              "vertical_centering": true,
              "background_style": "none",
              "bgcolor": "var(--color_text_default)",
              "border_style": "solid",
              "order": 5,
              "fit_width": true,
              "icon_size": 18,
              "button_gap": 8,
              "fit_height": true,
              "button_type": "label_icon",
              "padding_left": 15,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 15,
              "single_height": false,
              "min_height_css": "36px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 460,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTciJ",
            "default_name": "Button C",
            "style": "Button_filled_light_primary_"
          },
          "bTnUF1": {
            "properties": {
              "height": 280,
              "left": -80,
              "top": -80,
              "width": 280,
              "zindex": 7,
              "border_roundness": 12,
              "vertical_centering": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(27,27,29,1)",
              "order": 4,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 8,
              "padding_left": 10,
              "single_width": false,
              "max_width_css": "98px",
              "min_width_css": "40px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
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
                  "bgcolor": "var(--color_bTspn2_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTnUD1",
            "default_name": "Group AZ",
            "elements": {
              "bTnUL1": {
                "properties": {
                  "height": 240,
                  "left": -120,
                  "top": -40,
                  "width": 240,
                  "zindex": 2,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766058321534x287375292983111940/Icon%20R%20%282%29.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
                  "horiz_alignment": "flex-start",
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
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769865304056x337791451289519700/Icon%20R%20%2811%29.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTnUJ1",
                "default_name": "Image B",
                "style": "Image_standard_image_"
              },
              "bTnUR1": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Browse"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 2,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "ab",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTnUP1",
                "current_parent": "bTnUD1",
                "default_name": "Text K",
                "style": "Text_inter___400___16px___neutral_copy_copy_"
              }
            },
            "name": "Group Browse",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Upload Text/Icon",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Add memory File Upload",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTOSV0": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 16,
      "width": 0,
      "zindex": 9,
      "vertical_centering": true,
      "order": 4,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 32,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTciK",
    "default_name": "Group X",
    "elements": {
      "bTOSX0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -16,
          "width": 0,
          "zindex": 8,
          "vertical_centering": true,
          "order": 2,
          "row_gap": 4,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTciL",
        "default_name": "Group X",
        "elements": {
          "bTOSL0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Add new memory & knowledge"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
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
            "id": "bTciP",
            "default_name": "Text G",
            "style": "Text_inter___400___14px___white_"
          },
          "bTOSP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Create and save a new record to memory & knowledge base"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
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
            "id": "bTciQ",
            "current_parent": "bTOJd0",
            "default_name": "Text G",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group Title",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Heading",
    "style": "Group_transparent_"
  },
  "bTOij0": {
    "properties": {
      "height": 36,
      "left": 0,
      "top": 164,
      "width": 144.094,
      "zindex": 32,
      "vertical_centering": true,
      "order": 27,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 460,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTdDD1",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "min_width_css": "100%"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTcib",
    "default_name": "Group X",
    "elements": {
      "bTOik0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add to memory & knowledge"
            },
            "type": "TextExpression"
          },
          "height": 44,
          "left": -24,
          "top": -142,
          "width": 150,
          "zindex": 1,
          "icon": "feather plus",
          "order": 17,
          "fit_width": true,
          "fit_height": true,
          "button_type": "label_icon",
          "single_width": false,
          "min_width_css": "144px",
          "single_height": false,
          "min_height_css": "36px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
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
              "text": {
                "entries": {
                  "0": ""
                },
                "type": "TextExpression"
              },
              "icon_color": "rgba(var(--color_primary_contrast_default_rgb), 0)"
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
                        "name": "custom.file_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTMGw"
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
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTcha"
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
                "args": 460,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "min_width_css": "100%"
            },
            "type": "State"
          }
        },
        "type": "Button",
        "id": "bTcic",
        "current_parent": "bTOJd0",
        "default_name": "Button C",
        "name": "Button Add to memory & know",
        "style": "Button_secondary_new_"
      },
      "bTOiq0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 2,
          "floating_reference": "top",
          "custom_id": "bTLgB",
          "is_visible": false,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "param_bTOBL": true,
          "param_bTUaI": {
            "entries": {
              "0": "#303030"
            },
            "type": "TextExpression"
          },
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "20px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true,
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTcid",
        "default_name": "[Element] Loader B",
        "name": "[Element] Loader E",
        "custom_definition_name": "[Element] Loader"
      }
    },
    "name": "Group Add Memory Parent Container",
    "style": "Group_transparent_"
  },
  "bTmVX1": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 34,
      "vertical_centering": true,
      "order": 14,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "1px",
      "horiz_alignment": "flex-start",
      "border_color_top": "rgba(42, 42, 45, 1)",
      "border_style_top": "dashed",
      "container_layout": "column",
      "four_border_style": true,
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
          "border_color_top": "rgba(234,236,240,1)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTmVV1",
    "default_name": "Group U",
    "name": "Group divider",
    "style": "Group_transparent_"
  },
  "bTnUX1": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 35,
      "vertical_centering": true,
      "order": 6,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 16,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "38px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
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
                            "type": "Message",
                            "name": "not_equals",
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "owner_user",
                "is_slidable": false
              },
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
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
    "type": "Group",
    "id": "bTnUV1",
    "default_name": "Group BZ",
    "elements": {
      "bTnUd1": {
        "properties": {
          "text": {
            "entries": {
              "0": "Memory level"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
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
        "id": "bTnUb1",
        "current_parent": "bTnUV1",
        "default_name": "Text L",
        "style": "Text_inter___400___16px___neutral_copy_copy_"
      },
      "bTnUj1": {
        "properties": {
          "height": 350,
          "left": -80,
          "top": -150,
          "width": 280,
          "zindex": 3,
          "border_roundness": 10,
          "columns": 3,
          "data_source": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "all_types"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.memory_management_tabs__os_0"
            },
            "type": "AllOptionValue",
            "is_slidable": false
          },
          "group_type": "option.memory_management_tabs__os_0",
          "rows": 1,
          "background_style": "bgcolor",
          "bgcolor": "rgba(27,27,29,1)",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "38px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "56px",
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
              "bgcolor": "var(--color_bTspn2_default)"
            },
            "type": "State"
          }
        },
        "type": "RepeatingGroup",
        "id": "bTnUh1",
        "default_name": "RepeatingGroup B",
        "elements": {
          "bTnUp1": {
            "properties": {
              "height": 280,
              "left": -80,
              "top": -80,
              "width": 280,
              "zindex": 2,
              "border_roundness": 8,
              "data_source": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "group_type": "option.memory_management_tabs__os_0",
              "vertical_centering": true,
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 12,
              "single_width": false,
              "min_width_css": "40px",
              "padding_right": 12,
              "single_height": false,
              "min_height_css": "30px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "properties": {
                  "margin_left": 4
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": 3,
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "properties": {
                  "margin_right": 4
                },
                "type": "State"
              },
              "2": {
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
                    "name": "custom.memory_level_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTMGw"
                  },
                  "type": "GetElement",
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
                    "is_slidable": false
                  },
                  "background_style": "bgcolor",
                  "bgcolor": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "#80BDCB29"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "#80bdcb2a"
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
                  },
                  "border_style": "solid"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTnUn1",
            "default_name": "Group JZ",
            "elements": {
              "bTnUv1": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "display",
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
                  "zindex": 2,
                  "font_color": "rgba(112,112,114,1)",
                  "font_size": 12,
                  "line_height": 1,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "editor_preview_text": "Team",
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
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.memory_level_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTMGw"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "font_color": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "#245662"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "#80BDCB"
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
                    "type": "State",
                    "said": "a2Vsdm8tMzE4ODQ="
                  },
                  "2": {
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
                  }
                },
                "type": "Text",
                "id": "bTnUt1",
                "current_parent": "bTnUn1",
                "default_name": "Text O",
                "style": "Text_inter___400___14px___white_"
              }
            },
            "style": "Group_transparent_"
          }
        },
        "name": "RG Memory level",
        "style": "RepeatingGroup_transparent_"
      }
    },
    "style": "Group_transparent_"
  }
};
