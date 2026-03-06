export const Dropdown_admin_analytics = {
  "elements": {
    "bTavJ": {
      "properties": {
        "height": 14,
        "left": 40,
        "top": 28,
        "width": 70,
        "zindex": 2,
        "border_roundness": 12,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTrBV1"
          },
          "type": "GetElement",
          "is_slidable": false,
          "moved_to_top": true
        },
        "group_type": "option.date_period__os_",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(42,42,45,1)",
        "order": 1,
        "fit_width": false,
        "fit_height": false,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "150px",
        "padding_right": 10,
        "single_height": false,
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
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTrBd1"
                  },
                  "type": "GetElement",
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
            "bgcolor": "rgba(var(--color_bTkRK4_default_rgb), 0.1)"
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
            "bgcolor": "var(--color_bTsrr2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTrBX1",
      "default_name": "Group A",
      "elements": {
        "bTavT": {
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
                    "element_id": "bTrBV1"
                  },
                  "type": "GetElement",
                  "is_slidable": false,
                  "moved_to_top": true
                }
              },
              "type": "TextExpression"
            },
            "height": 9,
            "left": 8,
            "top": 7,
            "width": 19,
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
            "editor_preview_text": "This month",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTrBb1",
          "default_name": "Text A",
          "style": "Text_inter___400___14px___white_"
        },
        "bTavb": {
          "properties": {
            "height": 7,
            "left": 65,
            "top": 16,
            "width": 7,
            "zindex": 3,
            "icon": "feather chevron-down",
            "icon_color": "rgba(112,112,114,1)",
            "vertical_centering": true,
            "order": 2,
            "fit_height": false,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "12px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "12px",
            "padding_bottom": 0,
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
                        "type": "Message",
                        "name": "is_visible",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTrBd1"
                      },
                      "type": "GetElement",
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
                  "element_id": "bTrBX1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTrBc1",
          "default_name": "Icon A",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group dropdown container (use button)",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTavh": {
      "properties": {
        "height": 68,
        "left": 2,
        "top": 63,
        "width": 87,
        "zindex": 3,
        "boxshadow_horizontal": 0,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_surface_default)",
        "boxshadow_blur": 2,
        "boxshadow_color": "var(--color_bTHBQ_default)",
        "reference": "bTrBX1",
        "fit_height": true,
        "offset_top": -4,
        "offset_left": -8,
        "padding_top": 8,
        "padding_left": 8,
        "single_width": true,
        "max_width_css": "280px",
        "min_width_css": "166px",
        "padding_right": 8,
        "single_height": false,
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "GroupFocus",
      "id": "bTrBd1",
      "default_name": "GroupFocus A",
      "elements": {
        "bTavx": {
          "properties": {
            "height": 22,
            "left": 38,
            "top": 9,
            "width": 23,
            "zindex": 2,
            "border_roundness": 12,
            "boxshadow_style": "none",
            "bgcolor": "var(--color_bTHBc_default)",
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "padding_top": 4,
            "padding_left": 4,
            "single_width": true,
            "min_width_css": "150px",
            "padding_right": 4,
            "single_height": false,
            "min_height_css": "40px",
            "padding_bottom": 4,
            "horiz_alignment": "center",
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
                "bgcolor": "var(--color_bTsrr2_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTrBh1",
          "default_name": "Group B",
          "elements": {
            "bTavy": {
              "properties": {
                "height": 13,
                "left": 17,
                "top": 58,
                "width": 23,
                "zindex": 2,
                "data_source": {
                  "properties": {
                    "option_set": "option.date_period__os_",
                    "option_value": "all values"
                  },
                  "type": "OptionValue"
                },
                "group_type": "option.date_period__os_",
                "order": 1,
                "fit_width": false,
                "fit_height": true,
                "fixed_rows": false,
                "single_width": false,
                "single_height": false,
                "horiz_alignment": "flex-start",
                "container_layout": "column",
                "cell_min_height_css": "30px",
                "collapse_when_hidden": true
              },
              "type": "RepeatingGroup",
              "id": "bTrBi1",
              "default_name": "RepeatingGroup A",
              "elements": {
                "bTawK": {
                  "properties": {
                    "height": 11,
                    "left": 15.5,
                    "top": 6,
                    "width": 29,
                    "zindex": 2,
                    "border_roundness": 10,
                    "data_source": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "group_type": "option.date_period__os_",
                    "vertical_centering": true,
                    "background_style": "bgcolor",
                    "bgcolor": "rgba(74,74,74,0)",
                    "order": 1,
                    "fit_width": false,
                    "fit_height": true,
                    "margin_top": 2,
                    "padding_top": 4,
                    "padding_left": 6,
                    "single_width": false,
                    "margin_bottom": 2,
                    "min_width_css": "40px",
                    "padding_right": 6,
                    "single_height": false,
                    "min_height_css": "36px",
                    "padding_bottom": 4,
                    "horiz_alignment": "flex-start",
                    "container_layout": "row",
                    "collapse_when_hidden": true
                  },
                  "states": {
                    "0": {
                      "condition": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "get_group_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTrBV1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
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
                          "name": "is_hovered",
                          "is_slidable": false
                        },
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "properties": {
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
                        }
                      },
                      "type": "State"
                    }
                  },
                  "type": "Group",
                  "id": "bTrBj1",
                  "default_name": "Group C",
                  "elements": {
                    "bTawQ": {
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
                        "height": 7,
                        "left": 12.5,
                        "top": 8,
                        "width": 31,
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
                        "editor_preview_text": "Last 7 days",
                        "collapse_when_hidden": true
                      },
                      "states": {
                        "0": {
                          "condition": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "get_group_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTrBV1"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
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
                              "name": "is_hovered",
                              "is_slidable": false
                            },
                            "type": "ThisElement",
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
                                          "0": "#121213"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "#ffffff"
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
                      "type": "Text",
                      "id": "bTrBn1",
                      "default_name": "Text B",
                      "style": "Text_inter___400___14px___white_"
                    }
                  },
                  "name": "Group change User Type (use button)",
                  "style": "Group_transparent_"
                }
              },
              "style": "RepeatingGroup_transparent_"
            }
          },
          "name": "Group Inner Container",
          "style": "Group_dark_gf___shadow_"
        }
      },
      "name": "GF Options"
    }
  },
  "workflows": {
    "bTaxG": {
      "properties": {
        "element_id": "bTrBX1"
      },
      "type": "ButtonClicked",
      "id": "bTrBo1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTrBd1"
          },
          "type": "ShowElement",
          "id": "bTrBp1"
        }
      }
    },
    "bTrCr1": {
      "properties": {
        "element_id": "bTrBj1"
      },
      "type": "ButtonClicked",
      "id": "bTrCp1",
      "actions": {
        "0": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTrBV1"
          },
          "type": "DisplayGroupData",
          "id": "bTrCv1"
        },
        "1": {
          "properties": {
            "element_id": "bTrBd1"
          },
          "type": "HideElement",
          "id": "bTrCx1"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "option.date_period__os_",
    "background_style": "none",
    "bgcolor": "rgba(47, 47, 47, 1)",
    "max_width_px": 80,
    "min_width_px": 0,
    "default_width": 200,
    "max_height_px": 36,
    "min_height_px": 36,
    "wf_folder_list": {
      "bTqIt0": "Project",
      "bTqIu0": "User Settings"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTrBV1",
  "name": "Dropdown admin analytics"
};
