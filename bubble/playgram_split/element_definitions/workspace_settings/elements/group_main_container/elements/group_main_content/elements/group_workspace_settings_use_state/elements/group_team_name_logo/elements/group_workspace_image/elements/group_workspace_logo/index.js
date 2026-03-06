export const group_workspace_logo = {
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
  },
};
