export const elements = {
  "bTLCZ": {
    "properties": {
      "height": 44,
      "left": 72.17200000000003,
      "top": 117.59375,
      "width": 127.82799999999997,
      "zindex": 32,
      "vertical_centering": true,
      "order": 10,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 14,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-end",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-end"
    },
    "type": "Group",
    "id": "bTdRx1",
    "default_name": "Group B",
    "elements": {
      "bTLCa": {
        "properties": {
          "text": {
            "entries": {
              "0": "Save changes"
            },
            "type": "TextExpression"
          },
          "height": 44,
          "left": 0,
          "top": -117.59375,
          "width": 150,
          "zindex": 2,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "128px",
          "single_height": false,
          "min_height_css": "36px",
          "horiz_alignment": "flex-end",
          "nonant_alignment": "cb",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdSL1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": true
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
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": {
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                }
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": " "
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_as_text",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "personal_instructions_list_text",
                        "is_slidable": false
                      },
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
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "get_data",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTdSL1"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "name_text",
                          "is_slidable": false
                        },
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
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_true",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "show_all_projects__boolean",
                            "is_slidable": false
                          },
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
                            "next": {
                              "type": "Message",
                              "name": "is_true",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.show_all_projects_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTdRs1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
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
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdSh1"
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
                "args": 420,
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
        "type": "Button",
        "id": "bTdRy1",
        "default_name": "Button A",
        "name": "Button Save User Name",
        "style": "Button_primary_new_"
      },
      "bTcgG0": {
        "properties": {
          "height": 8,
          "left": 0,
          "top": 0,
          "width": 46,
          "zindex": 1,
          "border_color": "rgba(114,188,131,1)",
          "border_roundness": 10,
          "is_visible": false,
          "background_style": "bgcolor",
          "bgcolor": "rgba(var(--color_success_default_rgb), 0.18)",
          "border_style": "none",
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "margin_left": 0,
          "padding_left": 12,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 12,
          "single_height": false,
          "min_height_css": "32px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "nonant_alignment": "ab",
          "collapse_when_hidden": true,
          "container_vert_alignment": "center"
        },
        "type": "Group",
        "id": "bTdRz1",
        "current_parent": "bTQCl",
        "default_name": "Group B",
        "elements": {
          "bTbCj": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Saved"
                },
                "type": "TextExpression"
              },
              "height": 11,
              "left": 46,
              "top": 16,
              "width": 30,
              "zindex": 2,
              "font_color": "var(--color_success_default)",
              "font_size": 12,
              "order": 2,
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
            "id": "bTdSD1",
            "default_name": "Text B",
            "style": "Text_body_14_"
          },
          "bTbCp": {
            "properties": {
              "height": 8,
              "left": 5,
              "top": 10,
              "width": 11,
              "zindex": 3,
              "icon": "feather check-circle",
              "icon_color": "var(--color_success_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "padding_top": 0,
              "padding_left": 0,
              "single_width": true,
              "min_width_css": "14px",
              "padding_right": 0,
              "single_height": true,
              "min_height_css": "14px",
              "padding_bottom": 0,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Icon",
            "id": "bTdSE1",
            "default_name": "Icon A",
            "style": "Icon_standard_icon_"
          }
        },
        "name": "Group saved alert account",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Save User Name/Icon",
    "style": "Group_transparent_"
  },
  "bTQEc": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 33,
      "vertical_centering": true,
      "order": 1,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 24,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 36,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
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
            "element_id": "bTdDD1",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "column_gap": 16
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTdSF1",
    "default_name": "Group B",
    "elements": {
      "bTpWj4": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 26,
          "data_source": {
            "next": {
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 4,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 10,
          "fit_height": true,
          "single_width": false,
          "max_width_css": "332px",
          "single_height": false,
          "vert_alignment": "flex-start",
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_vert_alignment": "center"
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
              "vert_alignment": "center"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTdSn1",
        "current_parent": "bTQCl",
        "default_name": "Group B",
        "elements": {
          "bTceZ0": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 25,
              "vertical_centering": true,
              "order": 2,
              "use_gap": true,
              "fit_width": false,
              "unique_id": {
                "entries": {
                  "0": "show-all-projects"
                },
                "type": "TextExpression"
              },
              "column_gap": 10,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTdSo1",
            "default_name": "Group B",
            "elements": {
              "bTcfp0": {
                "properties": {
                  "height": 0,
                  "left": 0,
                  "top": 3.1015625,
                  "width": 0,
                  "zindex": 26,
                  "vertical_centering": true,
                  "order": 5,
                  "row_gap": 4,
                  "use_gap": true,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "container_layout": "column",
                  "collapse_when_hidden": true
                },
                "type": "Group",
                "id": "bTdSu1",
                "default_name": "Group B",
                "elements": {
                  "bTcft0": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Admin project view"
                        },
                        "type": "TextExpression"
                      },
                      "height": 36,
                      "left": 0,
                      "top": 0,
                      "width": 100,
                      "zindex": 23,
                      "order": 1,
                      "fit_width": true,
                      "fit_height": true,
                      "single_width": false,
                      "min_width_css": "0px",
                      "single_height": false,
                      "min_height_css": "20px",
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
                            "element_id": "bTdDD1",
                            "name": "Current Page Width"
                          },
                          "type": "PageData",
                          "is_slidable": false
                        },
                        "properties": {
                          "margin_left": 38
                        },
                        "type": "State"
                      }
                    },
                    "type": "Text",
                    "id": "bTdSv1",
                    "current_parent": "bTKPl",
                    "default_name": "Text B",
                    "style": "Text_inter___400___16px___neutral_copy_"
                  },
                  "bTcfu0": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "See every project in the workspace. When off, you will only see projects that you are part of."
                        },
                        "type": "TextExpression"
                      },
                      "height": 36,
                      "left": 0,
                      "top": 0,
                      "width": 100,
                      "zindex": 23,
                      "font_color": "rgba(112,112,114,1)",
                      "is_visible": true,
                      "line_height": 1.3,
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
                    "id": "bTdSz1",
                    "current_parent": "bTcdR0",
                    "default_name": "Text B",
                    "style": "Text_inter___400___14px____afafaf_"
                  }
                },
                "style": "Group_transparent_"
              },
              "bTnwd2": {
                "properties": {
                  "height": 280,
                  "left": 0,
                  "top": 0,
                  "width": 280,
                  "zindex": 7,
                  "border_roundness": 20,
                  "is_visible": true,
                  "vertical_centering": true,
                  "background_style": "bgcolor",
                  "bgcolor": {
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
                                "0": "#555557"
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
                  "order": 1,
                  "fit_width": false,
                  "fit_height": true,
                  "margin_top": 0,
                  "padding_left": 2,
                  "single_width": true,
                  "min_width_css": "28px",
                  "padding_right": 2,
                  "single_height": true,
                  "min_height_css": "16px",
                  "vert_alignment": "flex-start",
                  "horiz_alignment": "flex-start",
                  "container_layout": "row",
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
                        "name": "custom.show_all_projects_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdRs1"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "bgcolor": "rgba(59,143,162,1)",
                      "container_horiz_alignment": "flex-end"
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
                      "margin_right": -38
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bTnwX2",
                "current_parent": "bTdSo1",
                "default_name": "Group NZ",
                "elements": {
                  "bTiTu1": {
                    "properties": {
                      "height": 280,
                      "left": 0,
                      "top": 0,
                      "width": 280,
                      "zindex": 2,
                      "border_roundness": 100,
                      "vertical_centering": true,
                      "background_style": "bgcolor",
                      "bgcolor": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "#419db2"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "#9d9d9e"
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
                      "order": 1,
                      "fit_width": true,
                      "fit_height": true,
                      "single_width": true,
                      "min_width_css": "12px",
                      "single_height": true,
                      "min_height_css": "12px",
                      "vert_alignment": "center",
                      "horiz_alignment": "flex-start",
                      "container_layout": "column",
                      "collapse_when_hidden": false,
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
                            "name": "custom.show_all_projects_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTdRs1"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "bgcolor": "rgba(255,255,255,1)"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Group",
                    "id": "bTnwZ2",
                    "default_name": "Group NZ",
                    "name": "Group Share toggle",
                    "style": "Group_transparent_",
                    "transitions": {
                      "margin_left": {
                        "fn": "ease",
                        "duration": 300
                      }
                    }
                  }
                },
                "name": "G Share Button",
                "style": "Group_transparent_",
                "transitions": {
                  "background_style": {
                    "fn": "ease",
                    "duration": 300
                  }
                }
              }
            },
            "name": "Group Toggle Projects/Label",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Toggle Projects",
        "style": "Group_transparent_"
      },
      "bTpWx4": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 33,
          "vertical_centering": true,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "vert_alignment": "flex-end",
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
              "vert_alignment": "center"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTpWv4",
        "default_name": "Group QZ",
        "elements": {
          "bTpXB4": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 32,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766493536619x937873437585606700/Buttons%20%281%29.svg"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": true,
              "margin_left": -28,
              "single_width": true,
              "min_width_css": "44px",
              "single_height": false,
              "min_height_css": "240px",
              "vert_alignment": "flex-end",
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
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769268189226x516437932788496900/Buttons%20%283%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTpWp4",
            "current_parent": "bTdSF1",
            "default_name": "Image C",
            "style": "Image_standard_image_"
          },
          "bTpXC4": {
            "properties": {
              "height": 280,
              "left": 0,
              "top": 0,
              "width": 280,
              "zindex": 28,
              "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
              "border_roundness": 100,
              "vertical_centering": true,
              "border_style": "none",
              "order": 1,
              "fit_width": false,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "100px",
              "single_height": true,
              "min_height_css": "100px",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
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
                            "name": "is_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdSW1"
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
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(255,255,255,0.05)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": 420,
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
                  "min_width_css": "64px",
                  "min_height_css": "64px"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTdSP1",
            "current_parent": "bTQEX",
            "default_name": "Group B",
            "elements": {
              "bTPXX": {
                "properties": {
                  "height": 0,
                  "left": 0,
                  "top": 0,
                  "width": 0,
                  "zindex": 3,
                  "is_visible": false,
                  "vertical_centering": true,
                  "order": 6,
                  "row_gap": 8,
                  "use_gap": true,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "horiz_alignment": "center",
                  "container_layout": "column",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true,
                  "container_vert_alignment": "center"
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
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdSW1"
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
                "id": "bTdSQ1",
                "current_parent": "bTPXK",
                "default_name": "Group B",
                "elements": {
                  "bTKsF0": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Drop or\n[u][color=#ffffff]browse[/color][/u]"
                        },
                        "type": "TextExpression"
                      },
                      "height": 36,
                      "left": -16,
                      "top": -64,
                      "width": 100,
                      "zindex": 32,
                      "font_alignment": "center",
                      "font_size": 12,
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
                            "args": 516,
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
                          "font_size": 11,
                          "line_height": 1
                        },
                        "type": "State"
                      }
                    },
                    "type": "Text",
                    "id": "bTdSR1",
                    "default_name": "Text B",
                    "style": "Text_inter___400___14px____afafaf_"
                  },
                  "bTKsG0": {
                    "properties": {
                      "height": 30,
                      "left": -16,
                      "top": -64,
                      "width": 30,
                      "zindex": 33,
                      "icon": "feather upload",
                      "icon_color": "var(--color_bTGzv_default)",
                      "vertical_centering": true,
                      "order": 2,
                      "fit_height": false,
                      "single_width": true,
                      "min_width_css": "18px",
                      "single_height": true,
                      "min_height_css": "18px",
                      "horiz_alignment": "center",
                      "collapse_when_hidden": true
                    },
                    "states": {
                      "0": {
                        "condition": {
                          "next": {
                            "args": 516,
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
                          "margin_top": -2,
                          "margin_bottom": -4,
                          "min_width_css": "16px",
                          "min_height_css": "16px"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Icon",
                    "id": "bTdSV1",
                    "default_name": "Icon A"
                  }
                },
                "name": "Group Uploader Text",
                "style": "Group_transparent_"
              },
              "bTPXh": {
                "properties": {
                  "height": 150,
                  "left": 22.5234375,
                  "top": 7.65625,
                  "width": 150,
                  "zindex": 5,
                  "border_roundness": 100,
                  "placeholder": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "vertical_centering": true,
                  "src": {
                    "entries": {
                      "0": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "image_image",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "current_organization_custom_organization",
                                        "is_slidable": false
                                      },
                                      "type": "CurrentUser",
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
                                        "name": "custom.logo_",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTdRs1"
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
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "is_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.logo_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdRs1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "1": ""
                    },
                    "type": "TextExpression"
                  },
                  "border_style": "none",
                  "order": 1,
                  "fit_height": false,
                  "single_width": false,
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "is_not_empty",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "get_data",
                                    "is_slidable": false
                                  },
                                  "type": "ThisElement",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "or_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "is_not_empty",
                              "is_slidable": false
                            },
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "image_image",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "current_organization_custom_organization",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
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
                                      "name": "custom.logo_",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTdRs1"
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
                            "type": "Message",
                            "name": "format_boolean",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.logo_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdRs1"
                      },
                      "type": "GetElement",
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
                        "next": {
                          "type": "Message",
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.logo_changed_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdRs1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "custom.logo_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTdRs1"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "PictureInput",
                "id": "bTdSW1",
                "default_name": "PictureUploader A",
                "name": "PictureUploader Team Logo",
                "style": "PictureInput_standard_image_uploader_"
              },
              "bTPtG": {
                "properties": {
                  "height": 30,
                  "left": 426.5,
                  "top": 30.2421875,
                  "width": 30,
                  "zindex": 4,
                  "icon": "phosphor fill x-circle",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "is_visible": false,
                  "vertical_centering": true,
                  "fit_height": false,
                  "margin_top": 5,
                  "margin_right": 5,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": true,
                  "min_height_css": "20px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "ca",
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
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdSW1"
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
                        "args": 420,
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
                      "margin_top": 0,
                      "margin_right": 0
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTdSX1",
                "default_name": "Icon A",
                "name": "Icon Remove Team Logo"
              },
              "bTYbR0": {
                "properties": {
                  "height": 53,
                  "left": 13.5,
                  "top": 11,
                  "width": 53,
                  "zindex": 2,
                  "stretch_or_rescale": "zoom",
                  "border_roundness": 100,
                  "src": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdSW1"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "100px",
                  "single_height": false,
                  "min_height_css": "53px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "aa",
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
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdSW1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769496993587x547476714564888200/Group%203.svg"
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
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTdSW1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770128636865x690006058676635400/Group%2026.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  },
                  "2": {
                    "condition": {
                      "next": {
                        "args": 420,
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
                      "min_width_css": "64px"
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTdSb1",
                "default_name": "Image B",
                "name": "Image B",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Workspace Logo",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group workspace image",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Team Name/Logo",
    "style": "Group_transparent_"
  },
  "bTZDn": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 26,
      "is_visible": true,
      "vertical_centering": true,
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "space-between"
    },
    "type": "Group",
    "id": "bTdSc1",
    "current_parent": "bTJtr",
    "default_name": "Group B",
    "elements": {
      "bTMBB": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 30,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 36,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTdSd1",
        "default_name": "Group B",
        "elements": {
          "bTMBD": {
            "properties": {
              "height": 100,
              "left": 0,
              "top": 0,
              "width": 226,
              "zindex": 24,
              "content": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": {
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                }
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": " "
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_as_text",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "custom_instructions_list_text",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 4,
              "unique_id": {
                "entries": {
                  "0": "MIworkspaceInstructions"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "max_height_css": "250px",
              "min_height_css": "120px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "MultiLineInput",
            "id": "bTdSh1",
            "default_name": "MultilineInput A",
            "name": "MultilineInput Team Instructions",
            "style": "MultiLineInput_standard_multiline_input_"
          },
          "bTZDt": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Instructions"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 23,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "margin_bottom": 6,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTdSi1",
            "current_parent": "bTMAG",
            "default_name": "Text B",
            "style": "Text_inter___400___16px___neutral_copy_"
          },
          "bTZEE": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Add instructions to customize LLM responses for your team."
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -138,
              "width": 100,
              "zindex": 23,
              "font_color": "rgba(112,112,114,1)",
              "is_visible": true,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "margin_bottom": 8,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTdSj1",
            "current_parent": "bTLoq",
            "default_name": "Text B",
            "style": "Text_inter___400___14px____afafaf_"
          }
        },
        "name": "Group Input/Label",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Team Instructions",
    "style": "Group_transparent_"
  },
  "bTpWk4": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 26,
      "vertical_centering": true,
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 24,
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "type": "Group",
    "id": "bTdSJ1",
    "current_parent": "bTKdM0",
    "default_name": "Group B",
    "elements": {
      "bTKRA": {
        "properties": {
          "text": {
            "entries": {
              "0": "Name"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": -107.1953125,
          "width": 100,
          "zindex": 23,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 8,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTdSK1",
        "current_parent": "bTKPl",
        "default_name": "Text B",
        "style": "Text_inter___400___16px___neutral_copy_"
      },
      "bTKRB": {
        "properties": {
          "height": 48,
          "left": 0,
          "top": -107.1953125,
          "width": 250,
          "zindex": 14,
          "mandatory": true,
          "content": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "content_format": "text",
          "placeholder": {
            "entries": {
              "0": "Emma"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "unique_id": {
            "entries": {
              "0": "InputWorkspaceName"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "single_width": false,
          "single_height": true,
          "min_height_css": "36px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Input",
        "id": "bTdSL1",
        "current_parent": "bTKPI",
        "default_name": "Input A",
        "name": "Input Workspace Name",
        "style": "Input_standart_new_input_"
      }
    },
    "name": "Group Name",
    "style": "Group_transparent_"
  }
};
