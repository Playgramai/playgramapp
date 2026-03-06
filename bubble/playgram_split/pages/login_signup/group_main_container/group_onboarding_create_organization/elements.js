export const elements = {
  "bTKPr": {
    "properties": {
      "text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "type": "Message",
              "name": "heading",
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
      "font_size": 28,
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 12,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "center",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_3"
              },
              "type": "OneOptionValue",
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
          "text": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "New Workspace"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "get_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTPWC"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      }
    },
    "type": "Text",
    "id": "bTPVe",
    "default_name": "Text Q",
    "name": "Text Get started",
    "style": "Text_inter___400___32px___white_"
  },
  "bTPXJ": {
    "properties": {
      "text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "type": "Message",
              "name": "description",
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
      "zindex": 23,
      "font_color": "var(--color_bTkRL4_default)",
      "order": 4,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 32,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "center",
      "collapse_when_hidden": true
    },
    "type": "Text",
    "id": "bTPXE",
    "current_parent": "bTPVZ",
    "default_name": "Text R",
    "style": "Text_inter___400___16px___white_"
  },
  "bTPXn": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 197.9921875,
      "width": 0,
      "zindex": 29,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "option.onboarding_steps__os_",
      "is_visible": false,
      "vertical_centering": true,
      "order": 23,
      "row_gap": 32,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_1"
              },
              "type": "OneOptionValue",
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
      }
    },
    "type": "Group",
    "id": "bTPXi",
    "default_name": "Group R",
    "elements": {
      "bTPXp": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": -197.9921875,
          "width": 0,
          "zindex": 27,
          "is_visible": true,
          "vertical_centering": true,
          "order": 1,
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
        "id": "bTPVx",
        "current_parent": "bTKRq",
        "default_name": "Group O",
        "elements": {
          "bTKRL": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Organization Name"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -193.9921875,
              "width": 100,
              "zindex": 23,
              "font_color": "var(--color_bTkRP4_default)",
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
            "id": "bTPWB",
            "current_parent": "bTKPl",
            "default_name": "Text Q",
            "style": "Text_inter___400___14px___white_"
          },
          "bTKRM": {
            "properties": {
              "height": 48,
              "left": 0,
              "top": -193.9921875,
              "width": 250,
              "zindex": 14,
              "mandatory": true,
              "content": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "custom.organization_name_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKPI"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "content_format": "text",
              "placeholder": {
                "entries": {
                  "0": "Brightpath Solutions"
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": false,
              "single_width": false,
              "single_height": true,
              "min_height_css": "36px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTPWC",
            "current_parent": "bTKPI",
            "default_name": "Input G",
            "name": "Input Organization Name",
            "style": "Input_standart_new_input_"
          }
        },
        "name": "Group Organization Name",
        "style": "Group_transparent_"
      },
      "bTPYB": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 68.796875,
          "width": 0,
          "zindex": 29,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 3,
          "row_gap": 8,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPXz",
        "default_name": "Group S",
        "elements": {
          "bTPYF": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Logo [color=#707072](optional)[/color]"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -68.796875,
              "width": 100,
              "zindex": 23,
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
            "id": "bTPXt",
            "current_parent": "bTPXi",
            "default_name": "Text T",
            "style": "Text_inter___400___14px___white_"
          },
          "bTPYG": {
            "properties": {
              "height": 280,
              "left": 0,
              "top": -68.796875,
              "width": 280,
              "zindex": 28,
              "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
              "border_roundness": 12,
              "vertical_centering": true,
              "border_style": "dashed",
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "min_height_css": "98px",
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
                  "border_color": "var(--color_bTkRL4_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTPXK",
            "default_name": "Group P",
            "elements": {
              "bTPXX": {
                "properties": {
                  "height": 0,
                  "left": 0,
                  "top": 0,
                  "width": 0,
                  "zindex": 2,
                  "vertical_centering": true,
                  "order": 6,
                  "row_gap": 8,
                  "use_gap": true,
                  "fit_width": true,
                  "fit_height": true,
                  "padding_top": 20,
                  "padding_left": 20,
                  "single_width": false,
                  "min_width_css": "120px",
                  "padding_right": 20,
                  "single_height": false,
                  "min_height_css": "120px",
                  "padding_bottom": 20,
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
                        "element_id": "bTPXb"
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
                "id": "bTPXQ",
                "current_parent": "bTPXK",
                "default_name": "Group Q",
                "elements": {
                  "bTnvD": {
                    "properties": {
                      "height": 240,
                      "left": 0,
                      "top": 0,
                      "width": 240,
                      "zindex": 3,
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766506153444x342907984343334700/File%20Upload%20in-lc.svg"
                        },
                        "type": "TextExpression"
                      },
                      "order": 2,
                      "fit_height": true,
                      "single_width": true,
                      "min_width_css": "24px",
                      "single_height": false,
                      "min_height_css": "240px",
                      "horiz_alignment": "center",
                      "nonant_alignment": "aa",
                      "use_aspect_ratio": true,
                      "aspect_ratio_width": 1,
                      "aspect_ratio_height": 1,
                      "collapse_when_hidden": true
                    },
                    "type": "Image",
                    "id": "bTnux",
                    "default_name": "Image H",
                    "style": "Image_standard_image_"
                  },
                  "bTKsF0": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Drop your logo here, or [u][color=#ffffff]browse[/color][/u]"
                        },
                        "type": "TextExpression"
                      },
                      "height": 36,
                      "left": -16,
                      "top": -64,
                      "width": 100,
                      "zindex": 32,
                      "font_alignment": "left",
                      "font_color": "var(--color_bTkRL4_default)",
                      "order": 4,
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
                    "id": "bTPXV",
                    "default_name": "Text S",
                    "style": "Text_inter___400___14px____afafaf_"
                  }
                },
                "name": "Group text",
                "style": "Group_transparent_"
              },
              "bTPXh": {
                "properties": {
                  "height": 150,
                  "left": 22.5234375,
                  "top": 7.65625,
                  "width": 150,
                  "zindex": 4,
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
                          "name": "custom.logo_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKPI"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
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
                "type": "PictureInput",
                "id": "bTPXb",
                "default_name": "PictureUploader A",
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
                  "icon_color": "var(--color_primary_contrast_default)",
                  "is_visible": false,
                  "vertical_centering": true,
                  "fit_height": false,
                  "margin_top": 12,
                  "margin_right": 12,
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
                        "element_id": "bTPXb"
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
                "id": "bTPtB",
                "default_name": "Icon C"
              }
            },
            "name": "Group Upload Logo",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "style": "Group_transparent_"
      },
      "bTPYr": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 259.59375,
          "width": 0,
          "zindex": 30,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 4,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
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
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTQFR"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "container_horiz_alignment": "flex-end"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTPYp",
        "default_name": "Group U",
        "elements": {
          "bTPYv": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Continue"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -259.59375,
              "width": 150,
              "zindex": 24,
              "order": 3,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "button_disabled": false,
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTPYT",
            "current_parent": "bTPYH",
            "default_name": "Button F",
            "name": "Button Go to Step 3",
            "style": "Button_primary_new_"
          },
          "bTQFT": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Back"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": 0,
              "width": 150,
              "zindex": 24,
              "icon": "feather arrow-left",
              "is_visible": true,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "button_type": "label_icon",
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTQFR",
            "current_parent": "bTPYp",
            "default_name": "Button G",
            "name": "Button Go to step 1",
            "style": "Button_subtle_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Step 2",
    "style": "Group_transparent_"
  },
  "bTPZl": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 111.1953125,
      "width": 0,
      "zindex": 31,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "option.onboarding_steps__os_",
      "is_visible": false,
      "vertical_centering": true,
      "order": 24,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
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
                  "option_set": "option.onboarding_steps__os_",
                  "option_value": "step_2"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.onboarding_step_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
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
    "id": "bTPZg",
    "default_name": "Group V",
    "elements": {
      "bTPZm": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": -111.1953125,
          "width": 0,
          "zindex": 26,
          "is_visible": true,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 32,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPWD",
        "current_parent": "bTKRq",
        "default_name": "Group O",
        "elements": {
          "bTKRA": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Your Name"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": -107.1953125,
              "width": 100,
              "zindex": 23,
              "font_color": "var(--color_bTkRP4_default)",
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
            "id": "bTPWH",
            "current_parent": "bTKPl",
            "default_name": "Text Q",
            "style": "Text_inter___400___14px___white_"
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
                      "type": "Message",
                      "name": "custom.user_name_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKPI"
                    },
                    "type": "GetElement",
                    "said": "a2Vsdm8tMzE4ODQ=",
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
              "fit_height": false,
              "single_width": false,
              "single_height": true,
              "min_height_css": "36px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Input",
            "id": "bTPWI",
            "current_parent": "bTKPI",
            "default_name": "Input G",
            "name": "Input User Name Signup",
            "style": "Input_standart_new_input_"
          }
        },
        "name": "Group User Name",
        "style": "Group_transparent_"
      },
      "bTPZn": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": -111.1953125,
          "width": 0,
          "zindex": 30,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 7,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTPZV",
        "current_parent": "bTPVZ",
        "default_name": "Group T",
        "elements": {
          "bTPYv": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Continue"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -259.59375,
              "width": 150,
              "zindex": 24,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTPZa",
            "current_parent": "bTPYH",
            "default_name": "Button H",
            "name": "Button Go to Step 4",
            "style": "Button_primary_new_"
          },
          "bTPYw": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Back"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -259.59375,
              "width": 150,
              "zindex": 24,
              "icon": "feather arrow-left",
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "button_type": "label_icon",
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTPZb",
            "current_parent": "bTPXi",
            "default_name": "Button H",
            "name": "Button Go to Step 2",
            "style": "Button_subtle_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Step 3",
    "style": "Group_transparent_"
  },
  "bTPau": {
    "properties": {
      "height": 350,
      "left": 196.5,
      "top": 31.1484375,
      "width": 280,
      "zindex": 32,
      "columns": 4,
      "data_source": {
        "properties": {
          "option_set": "option.onboarding_steps__os_"
        },
        "type": "AllOptionValue",
        "is_slidable": false
      },
      "group_type": "option.onboarding_steps__os_",
      "separator_color": "rgba(150,150,150,0)",
      "separator_style": "solid",
      "separator_width": 12,
      "order": 1,
      "fit_width": false,
      "fit_height": true,
      "fixed_rows": false,
      "single_width": false,
      "margin_bottom": 38,
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "cell_min_height_css": "100%",
      "collapse_when_hidden": true
    },
    "type": "RepeatingGroup",
    "id": "bTPap",
    "default_name": "RepeatingGroup C",
    "elements": {
      "bTPso": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 34,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 1,
          "row_gap": 4,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 12,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.onboarding_steps__os_",
                    "option_value": "step_2"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
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
                              "name": "custom.organization_name_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKPI"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "or_",
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
                      "element_id": "bTPWC"
                    },
                    "type": "GetElement",
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
              "type": "ElementParent",
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
                "args": {
                  "properties": {
                    "option_set": "option.onboarding_steps__os_",
                    "option_value": "step_3"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
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
                              "element_id": "bTPWI"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "is_empty",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.organization_name_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTKPI"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "is_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "custom.user_name_",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTKPI"
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
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTPWC"
                    },
                    "type": "GetElement",
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
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTPsj",
        "default_name": "Group L",
        "elements": {
          "bTPsp": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 4,
              "border_roundness": 20,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "option.onboarding_steps__os_",
              "vertical_centering": true,
              "background_style": "bgcolor",
              "bgcolor": "rgba(128,189,203,0.12)",
              "order": 1,
              "opacity": 60,
              "fit_width": true,
              "fit_height": true,
              "padding_top": 2,
              "padding_left": 2,
              "single_width": false,
              "min_width_css": "100%",
              "padding_right": 2,
              "single_height": false,
              "min_height_css": "4px",
              "padding_bottom": 2,
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "collapse_when_hidden": true,
              "container_vert_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "type": "CurrentCellsIndex",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.onboarding_step_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "rgba(128,189,203,1)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTPsR",
            "default_name": "Group K",
            "name": "Group Cell Number",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTnvE": {
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
              "zindex": 3,
              "font_alignment": "left",
              "font_color": "var(--color_bTkRX4_default)",
              "line_height": 1,
              "order": 2,
              "opacity": 100,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "25px",
              "single_height": false,
              "max_height_css": "25px",
              "min_height_css": "25px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "type": "CurrentCellsIndex",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "greater_or_equal_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.onboarding_step_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTkRL4_default)",
                  "opacity": 100
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
                          "name": "isnt_clickable",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTPsj"
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
                    "element_id": "bTPsj"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bToSr_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTPsF",
            "default_name": "Text M",
            "style": "Text_inter___400___14px___white_",
            "transitions": {
              "font_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Cell Container (use button)",
        "style": "Group_transparent_"
      }
    },
    "name": "RG Onboarding Steps Indicator",
    "style": "RepeatingGroup_transparent_"
  },
  "bTPbS": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 121.1953125,
      "width": 0,
      "zindex": 31,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "option.onboarding_steps__os_",
      "is_visible": false,
      "vertical_centering": true,
      "order": 26,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
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
                  "option_set": "option.onboarding_steps__os_",
                  "option_value": "step_3"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.onboarding_step_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
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
    "id": "bTPbB",
    "current_parent": "bTPVZ",
    "default_name": "Group X",
    "elements": {
      "bTPZn": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": -111.1953125,
          "width": 0,
          "zindex": 30,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 4,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 32,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTPbM",
        "current_parent": "bTPVZ",
        "default_name": "Group X",
        "elements": {
          "bTPYw": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Back"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": -259.59375,
              "width": 150,
              "zindex": 24,
              "icon": "feather arrow-left",
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "button_type": "label_icon",
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTPbR",
            "current_parent": "bTPXi",
            "default_name": "Button J",
            "name": "Button Go to Step 2",
            "style": "Button_subtle_new_"
          },
          "bTPbY": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Add & Finish"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 151.5,
              "top": 214.796875,
              "width": 150,
              "zindex": 24,
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
              "horiz_alignment": "center",
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
                    "name": "custom.invited_users_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Skip & Finish"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTPVf",
            "default_name": "Button E",
            "name": "Button Finish Onboarding",
            "style": "Button_primary_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      },
      "bTPbT": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 22,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_roundness": 10,
          "is_visible": true,
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.05)",
          "border_style": "none",
          "order": 2,
          "row_gap": 20,
          "use_gap": false,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPaK",
        "current_parent": "bTPVZ",
        "default_name": "Group W",
        "elements": {
          "bTJPH": {
            "properties": {
              "height": 0,
              "left": 10,
              "top": 10,
              "width": 0,
              "zindex": 21,
              "vertical_centering": true,
              "order": 3,
              "row_gap": 15,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 15,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
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
                        "properties": {
                          "option_set": "option.subscription_plan",
                          "option_value": "free"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 2,
                                "type": "Message",
                                "name": "greater_or_equal_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "count",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_list_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPaW"
                          },
                          "type": "GetElement",
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
                    "name": "custom.selected_subscription_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxTP"
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
            "id": "bTPaP",
            "default_name": "Group W",
            "elements": {
              "bTJPM": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Invite"
                    },
                    "type": "TextExpression"
                  },
                  "height": 44,
                  "left": -10,
                  "top": -10,
                  "width": 150,
                  "zindex": 20,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "60px",
                  "single_height": false,
                  "min_height_css": "36px",
                  "horiz_alignment": "flex-end",
                  "collapse_when_hidden": true
                },
                "type": "Button",
                "id": "bTPaQ",
                "default_name": "Button I",
                "style": "Button_secondary_new_"
              },
              "bTJQD": {
                "properties": {
                  "height": 87,
                  "left": -318,
                  "top": 0,
                  "width": 518,
                  "zindex": 22,
                  "vertical_centering": true,
                  "order": 1,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "container_layout": "relative",
                  "collapse_when_hidden": true
                },
                "type": "Group",
                "id": "bTPaR",
                "default_name": "Group W",
                "elements": {
                  "bTJQH": {
                    "properties": {
                      "height": 48,
                      "left": 0,
                      "top": 0,
                      "width": 250,
                      "zindex": 2,
                      "mandatory": true,
                      "content": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      },
                      "content_format": "email",
                      "placeholder": {
                        "entries": {
                          "0": "michaelsmith@gmail.com"
                        },
                        "type": "TextExpression"
                      },
                      "order": 2,
                      "fit_height": false,
                      "single_width": false,
                      "single_height": true,
                      "min_height_css": "36px",
                      "horiz_alignment": "flex-start",
                      "nonant_alignment": "cb",
                      "collapse_when_hidden": true
                    },
                    "states": {
                      "bTGme0": {
                        "condition": {
                          "next": {
                            "type": "Message",
                            "name": "is_hovered"
                          },
                          "type": "ThisElement"
                        },
                        "type": "State"
                      },
                      "bTGmf0": {
                        "condition": {
                          "next": {
                            "type": "Message",
                            "name": "is_focused"
                          },
                          "type": "ThisElement"
                        },
                        "type": "State"
                      },
                      "bTGmo0": {
                        "condition": {
                          "next": {
                            "type": "Message",
                            "name": "isnt_valid"
                          },
                          "type": "ThisElement"
                        },
                        "type": "State"
                      }
                    },
                    "type": "Input",
                    "id": "bTPaV",
                    "default_name": "Input H",
                    "name": "Input Invite Member Email",
                    "style": "Input_standart_new_input_"
                  }
                },
                "name": "Group Parent Input/Dropdown",
                "style": "Group_transparent_"
              }
            },
            "name": "Group Input Invitation Email",
            "style": "Group_transparent_"
          },
          "bTPcZ": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 44,
              "width": 0,
              "zindex": 23,
              "is_visible": false,
              "vertical_centering": true,
              "order": 6,
              "row_gap": 8,
              "use_gap": true,
              "fit_width": false,
              "fit_height": true,
              "margin_top": 24,
              "single_width": false,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "column",
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
                    "name": "custom.invited_users_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
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
            "id": "bTPcU",
            "default_name": "Group Y",
            "elements": {
              "bTPca": {
                "properties": {
                  "height": 350,
                  "left": 0,
                  "top": -44,
                  "width": 280,
                  "zindex": 17,
                  "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
                  "border_roundness": 10,
                  "data_source": {
                    "next": {
                      "type": "Message",
                      "name": "custom.invited_users_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKPI"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "group_type": "text",
                  "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
                  "separator_style": "none",
                  "border_style": "none",
                  "order": 2,
                  "fit_width": false,
                  "fit_height": true,
                  "fixed_rows": false,
                  "margin_top": 5,
                  "single_width": false,
                  "single_height": false,
                  "max_height_css": "400px",
                  "horiz_alignment": "flex-start",
                  "container_layout": "column",
                  "cell_min_height_css": "100%",
                  "collapse_when_hidden": true
                },
                "type": "RepeatingGroup",
                "id": "bTPaW",
                "current_parent": "bTJOL",
                "default_name": "RepeatingGroup B",
                "elements": {
                  "bTJHg": {
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
                      "group_type": "text",
                      "vertical_centering": true,
                      "background_style": "none",
                      "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.5)",
                      "order": 1,
                      "use_gap": true,
                      "fit_width": false,
                      "column_gap": 10,
                      "fit_height": true,
                      "padding_top": 8,
                      "single_width": false,
                      "single_height": false,
                      "min_height_css": "52px",
                      "padding_bottom": 8,
                      "horiz_alignment": "flex-start",
                      "container_layout": "row",
                      "collapse_when_hidden": true
                    },
                    "type": "Group",
                    "id": "bTPaX",
                    "current_parent": "bTJFz",
                    "default_name": "Group W",
                    "elements": {
                      "bTJHh": {
                        "properties": {
                          "text": {
                            "entries": {
                              "0": {
                                "type": "ElementParent",
                                "is_slidable": false
                              },
                              "1": ""
                            },
                            "type": "TextExpression"
                          },
                          "height": 36,
                          "left": -48,
                          "top": -8,
                          "width": 100,
                          "zindex": 3,
                          "font_color": "var(--color_bTkRL4_default)",
                          "order": 4,
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
                        "id": "bTPab",
                        "default_name": "Text U",
                        "style": "Text_inter___400___14px___white_"
                      },
                      "bTJIn": {
                        "properties": {
                          "height": 0,
                          "left": -8,
                          "top": -8,
                          "width": 0,
                          "zindex": 3,
                          "border_color": "rgba(247,248,249,0.3)",
                          "border_roundness": 20,
                          "data_source": {
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "group_type": "text",
                          "vertical_centering": true,
                          "background_style": "bgcolor",
                          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.3)",
                          "border_style": "solid",
                          "order": 1,
                          "fit_width": true,
                          "fit_height": true,
                          "single_width": false,
                          "min_width_css": "36px",
                          "single_height": true,
                          "min_height_css": "36px",
                          "vert_alignment": "center",
                          "horiz_alignment": "flex-start",
                          "container_layout": "column",
                          "collapse_when_hidden": true,
                          "container_vert_alignment": "center"
                        },
                        "type": "Group",
                        "id": "bTPac",
                        "default_name": "Group W",
                        "elements": {
                          "bTnvp": {
                            "properties": {
                              "text": {
                                "entries": {
                                  "0": {
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
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "1": ""
                                },
                                "type": "TextExpression"
                              },
                              "height": 36,
                              "left": 10,
                              "top": 15,
                              "width": 100,
                              "zindex": 3,
                              "font_alignment": "center",
                              "font_color": "var(--color_bTkRL4_default)",
                              "line_height": 1,
                              "order": 2,
                              "fit_width": false,
                              "fit_height": true,
                              "single_width": true,
                              "min_width_css": "16px",
                              "single_height": true,
                              "min_height_css": "16px",
                              "vert_alignment": "center",
                              "horiz_alignment": "center",
                              "editor_preview_text": "A",
                              "collapse_when_hidden": true
                            },
                            "type": "Text",
                            "id": "bTnvj",
                            "current_parent": "bTPaX",
                            "default_name": "Text NZ",
                            "style": "Text_inter___400___14px___white_"
                          }
                        },
                        "name": "Group Avatar"
                      },
                      "bTnvi": {
                        "properties": {
                          "text": {
                            "entries": {
                              "0": "Remove"
                            },
                            "type": "TextExpression"
                          },
                          "height": 44,
                          "left": 0,
                          "top": 0,
                          "width": 150,
                          "zindex": 4,
                          "icon": "feather star",
                          "order": 9,
                          "fit_width": true,
                          "fit_height": true,
                          "single_width": false,
                          "min_width_css": "60px",
                          "single_height": false,
                          "min_height_css": "36px",
                          "horiz_alignment": "flex-start",
                          "collapse_when_hidden": true
                        },
                        "type": "Button",
                        "id": "bTnvd",
                        "default_name": "Button Q",
                        "style": "Button_subtle_new_copy_copy_"
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
                  }
                },
                "name": "RG Pending Invitations",
                "style": "RepeatingGroup_transparent_"
              },
              "bTPcb": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Members list"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -44,
                  "width": 100,
                  "zindex": 22,
                  "font_color": "var(--color_bTkRL4_default)",
                  "font_size": 14,
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
                "id": "bTPaj",
                "default_name": "Text U",
                "style": "Text_inter___400___16px___white_"
              }
            },
            "name": "Group Invitations",
            "style": "Group_transparent_"
          },
          "bTwjL": {
            "properties": {
              "height": 0,
              "left": 20,
              "top": 20,
              "width": 0,
              "zindex": 21,
              "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
              "border_roundness": 12,
              "is_visible": false,
              "background_style": "bgcolor",
              "bgcolor": "rgba(42,42,45,1)",
              "order": 4,
              "row_gap": 0,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 0,
              "padding_left": 16,
              "single_width": false,
              "padding_right": 8,
              "single_height": true,
              "min_height_css": "36px",
              "padding_bottom": 0,
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
                        "properties": {
                          "option_set": "option.subscription_plan",
                          "option_value": "free"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 2,
                                "type": "Message",
                                "name": "greater_or_equal_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "count",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_list_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPaW"
                          },
                          "type": "GetElement",
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
                    "name": "custom.selected_subscription_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxTP"
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
            "id": "bTwjD",
            "current_parent": "bTPaK",
            "default_name": "Group EZZ",
            "elements": {
              "bTJQD": {
                "properties": {
                  "height": 87,
                  "left": -318,
                  "top": 0,
                  "width": 518,
                  "zindex": 22,
                  "vertical_centering": true,
                  "order": 4,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "container_layout": "relative",
                  "collapse_when_hidden": true
                },
                "type": "Group",
                "id": "bTwjJ",
                "default_name": "Group EZZ",
                "name": "Group Parent Input/Dropdown",
                "style": "Group_transparent_"
              },
              "bTwjX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "You\u2019ve reached your free plan invite limit. Upgrade to invite more."
                    },
                    "type": "TextExpression"
                  },
                  "height": 8,
                  "left": 48,
                  "top": 14.4453125,
                  "width": 35,
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
                "type": "Text",
                "id": "bTwjV",
                "default_name": "Text MZ",
                "style": "Text_inter___400___14px____afafaf_"
              },
              "bTwjj": {
                "properties": {
                  "height": 12,
                  "left": 0,
                  "top": 0,
                  "width": 9,
                  "zindex": 2,
                  "icon": "ionic filled information-circle",
                  "icon_color": "var(--color_bTGzv_default)",
                  "vertical_centering": true,
                  "order": 1,
                  "fit_height": false,
                  "padding_top": 0,
                  "padding_left": 0,
                  "single_width": true,
                  "margin_bottom": 0,
                  "min_width_css": "18px",
                  "padding_right": 0,
                  "single_height": true,
                  "min_height_css": "18px",
                  "padding_bottom": 0,
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Icon",
                "id": "bTwjh",
                "current_parent": "bTwjD",
                "default_name": "Icon G",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group invite limit alert",
            "style": "Group_border_"
          }
        },
        "name": "Group Invite Members ",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Step 4",
    "style": "Group_transparent_"
  },
  "bTwfn": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 207.9921875,
      "width": 0,
      "zindex": 29,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "option.onboarding_steps__os_",
      "is_visible": false,
      "vertical_centering": true,
      "order": 8,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.onboarding_steps__os_",
                "option_value": "step_4"
              },
              "type": "OneOptionValue",
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
      }
    },
    "type": "Group",
    "id": "bTwfI",
    "current_parent": "bTPVZ",
    "default_name": "Group AZZ",
    "elements": {
      "bTPYr": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 259.59375,
          "width": 0,
          "zindex": 30,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 9,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 16,
          "single_width": false,
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
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwfm"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "container_horiz_alignment": "flex-end"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTwfh",
        "default_name": "Group AZZ",
        "elements": {
          "bTQFT": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Back"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 0,
              "top": 0,
              "width": 150,
              "zindex": 24,
              "icon": "ionic outline arrow-back",
              "is_visible": false,
              "order": 2,
              "fit_width": true,
              "icon_size": 16,
              "fit_height": true,
              "button_type": "label_icon",
              "single_width": false,
              "max_width_css": "350px",
              "min_width_css": "120px",
              "single_height": false,
              "min_height_css": "36px",
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
                    "name": "onboarding_finished__boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTwfm",
            "current_parent": "bTPYp",
            "default_name": "Button R",
            "name": "Button Go Index Page",
            "style": "Button_subtle_new_"
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      },
      "bTxAh1": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 32,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.onboarding_steps__os_",
          "vertical_centering": true,
          "order": 6,
          "row_gap": 16,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTxAf1",
        "default_name": "Group HZZ",
        "elements": {
          "bTxTR": {
            "properties": {
              "height": 0,
              "left": 276,
              "top": 22.8359375,
              "width": 0,
              "zindex": 32,
              "floating_reference": "top",
              "custom_id": "bTxAn1",
              "data_source": "onboarding",
              "order": 1,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "param_bTxcd": {
                "next": {
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTwjp"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "min_height_css": "40px",
              "horiz_alignment": "flex-start",
              "floating_reference_horizontal": "none",
              "floating_reference_horizontal_resp": "left"
            },
            "type": "CustomElement",
            "id": "bTxTP",
            "default_name": "Subscription plans A"
          }
        },
        "name": "Group subscription plans",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Step 1 ",
    "style": "Group_transparent_"
  }
};
