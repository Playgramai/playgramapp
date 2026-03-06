export const elements = {
  "bTZEd": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 29,
      "vertical_centering": true,
      "order": 2,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 24,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "type": "Group",
    "id": "bTYZf",
    "current_parent": "bTKjM0",
    "default_name": "Group X",
    "elements": {
      "bTnpR": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 31,
          "vertical_centering": true,
          "order": 7,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTKjj0",
        "default_name": "Group K",
        "elements": {
          "bTnpu": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 31,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766492092371x868173398159043600/Icon%20R%20%283%29.svg"
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
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769267377264x303512211347723800/Icon%20R%20%2810%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTnpp",
            "default_name": "Image C",
            "style": "Image_standard_image_"
          },
          "bTKjq0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Change password"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -84.796875,
              "width": 100,
              "zindex": 29,
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
                  "properties": {
                    "element_id": "bTKjj0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "underline": true,
                  "font_color": "var(--color_bTkRP4_default)"
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
                  "properties": {
                    "element_id": "bTKjj0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "underline": true,
                  "font_color": "var(--color_bTsrq2_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTKjG0",
            "default_name": "Text I",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group Change Password Button",
        "style": "Group_transparent_"
      },
      "bTnqT": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 33,
          "vertical_centering": true,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTnqR",
        "default_name": "Group CZ",
        "elements": {
          "bTnqX": {
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
                    "element_id": "bTYZs"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "image",
                  "background_image": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766493392279x599862482601611500/Group%202.svg"
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
                    "element_id": "bTYZs"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "image",
                  "background_image": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769268136552x428517503184417900/Avatar%20%284%29%201.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTYZl",
            "default_name": "Group X",
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
                        "element_id": "bTYZs"
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
                "id": "bTYZm",
                "current_parent": "bTPXK",
                "default_name": "Group X",
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
                    "type": "Text",
                    "id": "bTYZn",
                    "default_name": "Text P",
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
                    "type": "Icon",
                    "id": "bTYZr",
                    "default_name": "Icon H"
                  }
                },
                "name": "Group uplader text",
                "style": "Group_transparent_"
              },
              "bTPXh": {
                "properties": {
                  "height": 150,
                  "left": 22.5234375,
                  "top": 7.65625,
                  "width": 150,
                  "zindex": 4,
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
                          "type": "Message",
                          "name": "custom.user_image_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKdM0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
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
                    "properties": {
                      "is_visible": false
                    },
                    "type": "State"
                  }
                },
                "type": "PictureInput",
                "id": "bTYZs",
                "default_name": "PictureUploader A",
                "name": "PictureUploader ",
                "style": "PictureInput_standard_image_uploader_"
              },
              "bTPtG": {
                "properties": {
                  "height": 30,
                  "left": 426.5,
                  "top": 30.2421875,
                  "width": 30,
                  "zindex": 5,
                  "icon": "phosphor fill x-circle",
                  "border_roundness": 100,
                  "boxshadow_style": "none",
                  "icon_color": "var(--color_primary_contrast_default)",
                  "is_visible": false,
                  "vertical_centering": true,
                  "background_style": "bgcolor",
                  "bgcolor": "var(--color_bTGzr_default)",
                  "boxshadow_color": "rgba(var(--color_bTGzp_default_rgb), 0.12)",
                  "fit_height": false,
                  "margin_top": 0,
                  "margin_right": 0,
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
                        "element_id": "bTYZs"
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
                "type": "Icon",
                "id": "bTYZt",
                "default_name": "Icon H"
              },
              "bTYbR0": {
                "properties": {
                  "height": 53,
                  "left": 13.5,
                  "top": 11,
                  "width": 49,
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
                          "element_id": "bTYZs"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "80px",
                  "single_height": false,
                  "min_height_css": "53px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "aa",
                  "use_aspect_ratio": true,
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
                        "element_id": "bTYZs"
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
                "type": "Image",
                "id": "bTYbM0",
                "default_name": "Image B",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Upload Photo",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTnqY": {
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
            "id": "bTnqL",
            "default_name": "Image D",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group upload image",
        "style": "Group_transparent_"
      }
    },
    "name": "Group User Image + name",
    "style": "Group_transparent_"
  },
  "bTnpb": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 20,
      "width": 0,
      "zindex": 26,
      "vertical_centering": true,
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "vert_alignment": "stretch",
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
    },
    "type": "Group",
    "id": "bTKhJ0",
    "current_parent": "bTKdM0",
    "default_name": "Group D",
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
        "id": "bTKhO0",
        "current_parent": "bTKPl",
        "default_name": "Text D",
        "style": "Text_inter___400___14px___white_"
      },
      "bTKRB": {
        "properties": {
          "height": 48,
          "left": 0,
          "top": 0,
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
                  "name": "current_workspace_custom_workspace",
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
              "0": "userSettingsName1"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "single_width": false,
          "single_height": true,
          "min_height_css": "38px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Input",
        "id": "bTKhP0",
        "current_parent": "bTKPI",
        "default_name": "Input A",
        "name": "Input Name",
        "style": "Input_standart_new_input_"
      }
    },
    "name": "Group Name",
    "style": "Group_transparent_"
  },
  "bTnpj": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 30,
      "width": 0,
      "zindex": 26,
      "vertical_centering": true,
      "order": 4,
      "opacity": 50,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "vert_alignment": "stretch",
      "button_disabled": true,
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
    },
    "type": "Group",
    "id": "bTnpc",
    "current_parent": "bTUBN",
    "default_name": "Group AZ",
    "elements": {
      "bTKRA": {
        "properties": {
          "text": {
            "entries": {
              "0": "Email"
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
        "id": "bTnph",
        "current_parent": "bTKPl",
        "default_name": "Text Q",
        "style": "Text_inter___400___14px___white_"
      },
      "bTKRB": {
        "properties": {
          "height": 48,
          "left": 0,
          "top": 0,
          "width": 250,
          "zindex": 14,
          "mandatory": true,
          "content": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "email",
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
          "disabled": true,
          "unique_id": {
            "entries": {
              "0": "userSettingsEmail1"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "single_width": false,
          "single_height": true,
          "min_height_css": "38px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Input",
        "id": "bTnpi",
        "current_parent": "bTKPI",
        "default_name": "Input E",
        "name": "Input Name",
        "style": "Input_standart_new_input_"
      }
    },
    "name": "Group Name copy",
    "style": "Group_transparent_"
  },
  "bTsqR2": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 30,
      "is_visible": true,
      "vertical_centering": true,
      "order": 5,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
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
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "name": "AppIsTest"
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
    "type": "Group",
    "id": "bTsqP2",
    "default_name": "Group GZ",
    "elements": {
      "bTsqX2": {
        "properties": {
          "text": {
            "entries": {
              "0": "Appearance"
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
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTsqV2",
        "current_parent": "bTsqP2",
        "default_name": "Text R",
        "style": "Text_inter___400___14px___white_"
      },
      "bTsrR2": {
        "properties": {
          "height": 0,
          "left": 80.53125,
          "top": 11.6015625,
          "width": 0,
          "zindex": 26,
          "border_roundness": 12,
          "vertical_centering": true,
          "order": 5,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 16,
          "fit_height": true,
          "padding_left": 10,
          "single_width": false,
          "min_width_css": "114px",
          "padding_right": 10,
          "single_height": false,
          "min_height_css": "40px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "four_border_style": true,
          "border_roundness_top": 12,
          "collapse_when_hidden": true,
          "border_roundness_left": 12,
          "border_roundness_right": 12,
          "border_roundness_bottom": 12,
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
                            "0": "#323436"
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
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwKB2"
              },
              "type": "GetElement",
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
                            "0": "#323436"
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
              "border_roundness_left": 0,
              "border_roundness_bottom": 0
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTsrM2",
        "default_name": "Group JZ",
        "elements": {
          "bTsrT2": {
            "properties": {
              "height": 0,
              "left": -80.53125,
              "top": 0,
              "width": 0,
              "zindex": 25,
              "vertical_centering": true,
              "order": 1,
              "use_gap": true,
              "fit_width": true,
              "column_gap": 8,
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
            "id": "bTsrB2",
            "default_name": "Group IZ",
            "elements": {
              "bTsrH2": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 24,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768821485439x599004980616576000/Moon.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "16px",
                  "single_height": false,
                  "min_height_css": "240px",
                  "vert_alignment": "center",
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
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768821495823x442083820721337340/Sun.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTsqp2",
                "default_name": "Image F",
                "style": "Image_standard_image_"
              },
              "bTsrL2": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Dark"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -80.53125,
                  "top": 0,
                  "width": 100,
                  "zindex": 23,
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
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Light"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTsqj2",
                "current_parent": "bTsqP2",
                "default_name": "Text V",
                "style": "Text_inter___400___16px___neutral_copy_"
              }
            },
            "name": "Group mode",
            "style": "Group_transparent_"
          },
          "bTwLL2": {
            "properties": {
              "height": 30,
              "left": 71.640625,
              "top": 21.40625,
              "width": 30,
              "zindex": 26,
              "icon": "feather chevron-down",
              "icon_color": "var(--color_bTkRL4_default)",
              "vertical_centering": true,
              "order": 2,
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
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTwKB2"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon": "feather chevron-up"
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
            "id": "bTwLJ2",
            "default_name": "Icon I"
          }
        },
        "name": "Group choose mode",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Appearance",
    "style": "Group_transparent_"
  },
  "bTvIC1": {
    "properties": {
      "height": 0,
      "left": 30,
      "top": 50,
      "width": 0,
      "zindex": 26,
      "border_roundness": 12,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(42,42,45,1)",
      "order": 6,
      "opacity": 100,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 12,
      "fit_height": true,
      "padding_top": 12,
      "padding_left": 12,
      "single_width": false,
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "vert_alignment": "stretch",
      "button_disabled": true,
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
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
    "id": "bTvHr1",
    "current_parent": "bTUBN",
    "default_name": "Group KZ",
    "elements": {
      "bTKRA": {
        "properties": {
          "text": {
            "entries": {
              "0": "Enable keyboard shortcuts"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": -107.1953125,
          "width": 100,
          "zindex": 23,
          "order": 3,
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
              "font_color": "var(--color_bTkRL4_default)"
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
              "font_color": "var(--color_bTsrp2_default)"
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTvHw1",
        "current_parent": "bTKPl",
        "default_name": "Text W",
        "style": "Text_inter___400___16px___neutral_copy_copy_"
      },
      "bTtZD1": {
        "properties": {
          "height": 0,
          "left": 12,
          "top": 12,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTvHx1",
        "default_name": "Group KZ",
        "elements": {
          "bTwPX0": {
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
                            "0": "#ffffff"
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
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "margin_right": 10,
              "padding_left": 2,
              "single_width": true,
              "min_width_css": "28px",
              "padding_right": 2,
              "single_height": true,
              "min_height_css": "16px",
              "vert_alignment": "center",
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
                    "name": "shortcuts_on__boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "rgba(59,143,162,1)",
                  "container_horiz_alignment": "flex-end"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTwPR0",
            "current_parent": "bTvHx1",
            "default_name": "Group HZ",
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
                        "name": "shortcuts_on__boolean",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
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
                "id": "bTwPT0",
                "default_name": "Group HZ",
                "name": "G shortcuts toggle circle",
                "style": "Group_transparent_",
                "transitions": {
                  "margin_left": {
                    "fn": "ease",
                    "duration": 300
                  }
                }
              }
            },
            "name": "G shortcuts toggle",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 300
              }
            }
          }
        },
        "name": "G - shortcut (button use)",
        "style": "Group_transparent_"
      }
    },
    "name": "Group shortcut",
    "style": "Group_transparent_"
  }
};
