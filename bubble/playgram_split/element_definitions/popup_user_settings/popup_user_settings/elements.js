import { Group_Right_Side } from './group_right_side/index.js';

export const elements = {
  "bTLAL": Group_Right_Side,
  "bTLAX": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 32,
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(27,27,29,1)",
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "padding_top": 16,
      "padding_left": 16,
      "single_width": false,
      "max_width_css": "200px",
      "padding_right": 16,
      "single_height": false,
      "padding_bottom": 16,
      "vert_alignment": "stretch",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "four_border_style": true,
      "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
      "border_style_right": "solid",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 560,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKdH0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "min_width_css": "100%"
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
          "background_style": "bgcolor",
          "bgcolor": "rgba(247,248,249,1)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTLAV",
    "default_name": "Group C",
    "elements": {
      "bTLAu": {
        "properties": {
          "height": 350,
          "left": -80,
          "top": -150,
          "width": 280,
          "zindex": 5,
          "data_source": {
            "properties": {
              "option_set": "option.user_settings__os_"
            },
            "type": "AllOptionValue",
            "is_slidable": false
          },
          "group_type": "option.user_settings__os_",
          "separator_width": 2,
          "order": 1,
          "masonry": true,
          "fit_width": false,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": false,
          "single_height": false,
          "show_all_items": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": 560,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKdH0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "columns": 3
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "active_boolean",
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
              "is_slidable": false
            },
            "properties": {
              "data_source": {
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
                  "name": "minus_element",
                  "is_slidable": false
                },
                "properties": {
                  "option_set": "option.user_settings__os_"
                },
                "type": "AllOptionValue",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "State"
          }
        },
        "type": "RepeatingGroup",
        "id": "bTLAp",
        "default_name": "RepeatingGroup A",
        "elements": {
          "bTLAv": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 4,
              "border_roundness": 8,
              "data_source": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "group_type": "option.user_settings__os_",
              "vertical_centering": true,
              "order": 1,
              "use_gap": true,
              "fit_width": false,
              "unique_id": {
                "entries": {
                  "0": ""
                },
                "type": "TextExpression"
              },
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 8,
              "padding_left": 12,
              "single_width": false,
              "margin_bottom": 4,
              "min_width_css": "80px",
              "padding_right": 12,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "four_border_style": false,
              "border_roundness_top": 8,
              "collapse_when_hidden": true,
              "border_roundness_left": 8,
              "border_roundness_right": 8,
              "border_roundness_bottom": 8,
              "container_horiz_alignment": "flex-start"
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
                              "type": "ElementParent",
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
                                "0": "#80BDCB29"
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
                  "border_style": "none"
                },
                "type": "State"
              },
              "1": {
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
                                "0": "#3b8fa2"
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
                                "0": "#80BDCB29"
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
              },
              "2": {
                "condition": {
                  "next": {
                    "args": 560,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKdH0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "properties": {
                  "container_horiz_alignment": "center"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTLAb",
            "current_parent": "bTLAV",
            "default_name": "Group N",
            "elements": {
              "bTHpX": {
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
                  "order": 5,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "editor_preview_text": "Instructions",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 420,
                        "type": "Message",
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKdH0",
                        "name": "Current Page Width"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "properties": {
                      "margin_top": 4,
                      "min_width_css": "100%"
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
                                "args": {
                                  "type": "ElementParent",
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
                          "type": "Message",
                          "name": "or_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_hovered",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTLAb"
                      },
                      "type": "GetElement",
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
                                    "0": "#80bdcb"
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
                "type": "Text",
                "id": "bTLAd",
                "default_name": "Text B",
                "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
              },
              "bTLBB": {
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
                          "type": "Message",
                          "name": "image",
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
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "use_aspect_ratio": true,
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
                                "args": {
                                  "type": "ElementParent",
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
                          "type": "Message",
                          "name": "or_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_hovered",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTLAb"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "image_active",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "1": ""
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
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "image_light_mode",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTLAz",
                "default_name": "Image A",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Account Settings",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "RG Menu",
        "style": "RepeatingGroup_transparent_"
      }
    },
    "name": "Group Left Side",
    "style": "Group_transparent_"
  },
  "bTiGB": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 33,
      "is_visible": false,
      "vertical_centering": true,
      "order": 1,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 8,
      "margin_right": 8,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "flex-start",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 560,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKdH0",
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
    "type": "Group",
    "id": "bTiFw",
    "default_name": "Group Z",
    "elements": {
      "bTqLJ2": {
        "properties": {
          "height": 28,
          "left": 0,
          "top": 0,
          "width": 28,
          "zindex": 13,
          "border_color": "rgba(42,42,45,1)",
          "border_roundness": 12,
          "vertical_centering": true,
          "border_style": "solid",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": true,
          "min_height_css": "32px",
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-end",
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
              "border_color": "var(--color_bTkRL4_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTqLD2",
        "current_parent": "bTiFw",
        "default_name": "Group FZ",
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
            "type": "Icon",
            "id": "bTqLF2",
            "default_name": "Icon J",
            "style": "Icon_standard_icon_"
          }
        },
        "name": "Group close mob",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Close Acc Sett",
    "style": "Group_transparent_"
  },
};
