export const Group_Signup = {
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 16,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": "signup",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "mode"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTKRq",
  "current_parent": "bTKPI",
  "default_name": "Group D",
  "elements": {
    "bTKPr": {
      "properties": {
        "text": {
          "entries": {
            "0": "Create an Account"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_color": "var(--color_bTkRP4_default)",
        "font_size": 28,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 12,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTKRv",
      "default_name": "Text G",
      "name": "Text Get started",
      "style": "Text_inter___400___32px___white_"
    },
    "bTnrz": {
      "properties": {
        "text": {
          "entries": {
            "0": "Bring your team together in one space to\u2028collaborate and grow with lasting memory."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 25,
        "font_alignment": "center",
        "font_color": "rgba(112,112,114,1)",
        "font_size": 16,
        "order": 3,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 32,
        "max_width_css": "410px",
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTnrx",
      "current_parent": "bTKRq",
      "default_name": "Text DZ",
      "style": "Text_inter___400___16px___white_"
    },
    "bTnsF": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 28,
        "border_color": "rgba(128,189,203,0.06)",
        "border_roundness": 12,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(18,18,19,1)",
        "border_style": "solid",
        "order": 5,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 24,
        "padding_left": 24,
        "single_width": false,
        "max_width_css": "436px",
        "min_width_css": "436px",
        "padding_right": 24,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 24,
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTnsD",
      "default_name": "Group JZ",
      "elements": {
        "bTnsJ": {
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
            "margin_bottom": 32,
            "single_height": false,
            "horiz_alignment": "center",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTKSB",
          "default_name": "Group D",
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
              "id": "bTKSC",
              "current_parent": "bTKPl",
              "default_name": "Text G",
              "style": "Text_inter___400___14px___white_"
            },
            "bTnug": {
              "properties": {
                "height": 20,
                "width": 95,
                "zindex": 6,
                "border_color": "rgba(var(--color_bTGzw_default_rgb), 0.3)",
                "border_roundness": 20,
                "is_visible": false,
                "vertical_centering": true,
                "background_style": "none",
                "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.14)",
                "border_style": "none",
                "order": 4,
                "use_gap": true,
                "fit_width": false,
                "column_gap": 8,
                "fit_height": true,
                "padding_top": 6,
                "single_width": false,
                "min_width_css": "40px",
                "single_height": false,
                "horiz_alignment": "center",
                "container_layout": "row",
                "collapse_when_hidden": true,
                "container_horiz_alignment": "flex-start"
              },
              "type": "Group",
              "id": "bTngV2",
              "current_parent": "bTKRq",
              "default_name": "Group HZ",
              "elements": {
                "bTccp": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "This email is already in use."
                      },
                      "type": "TextExpression"
                    },
                    "height": 12,
                    "left": 70,
                    "top": 22.1875,
                    "width": 78,
                    "zindex": 3,
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
                  "id": "bTngb2",
                  "default_name": "Text BZ",
                  "name": "Text This email is alread",
                  "style": "Text_body_14__error__"
                }
              },
              "name": "Group used email alert"
            },
            "bTnum": {
              "properties": {
                "height": 36,
                "left": 0,
                "top": 24.796875,
                "width": 386,
                "zindex": 24,
                "vertical_centering": true,
                "order": 2,
                "fit_width": false,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "40px",
                "single_height": false,
                "horiz_alignment": "center",
                "container_layout": "relative",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTnuh",
              "default_name": "Group RZ",
              "elements": {
                "bTnun": {
                  "properties": {
                    "height": 48,
                    "left": 0,
                    "top": -24.796875,
                    "width": 250,
                    "zindex": 2,
                    "mandatory": true,
                    "content": {
                      "entries": {
                        "0": "",
                        "1": {
                          "type": "Empty"
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    },
                    "content_format": "email",
                    "placeholder": {
                      "entries": {
                        "0": "emma.wilson@gmail.com"
                      },
                      "type": "TextExpression"
                    },
                    "order": 3,
                    "fit_height": false,
                    "single_width": false,
                    "single_height": true,
                    "min_height_css": "36px",
                    "horiz_alignment": "center",
                    "nonant_alignment": "ab",
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
                          "element_id": "bTngV2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "properties": {
                        "border_color": "var(--color_bTGzw_default)"
                      },
                      "type": "State"
                    }
                  },
                  "type": "Input",
                  "id": "bTKSD",
                  "current_parent": "bTKPI",
                  "default_name": "Input C",
                  "name": "Input Email Signup",
                  "style": "Input_standart_new_input_"
                },
                "bTnut": {
                  "properties": {
                    "height": 240,
                    "left": 0,
                    "top": 0,
                    "width": 240,
                    "zindex": 3,
                    "is_visible": false,
                    "src": {
                      "entries": {
                        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766504923002x138494452977720340/Warning--filled.svg"
                      },
                      "type": "TextExpression"
                    },
                    "fit_height": true,
                    "margin_right": 14,
                    "single_width": true,
                    "min_width_css": "16px",
                    "single_height": false,
                    "min_height_css": "240px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "cb",
                    "use_aspect_ratio": true,
                    "aspect_ratio_width": 1,
                    "aspect_ratio_height": 1,
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
                          "element_id": "bTngV2"
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
                  "type": "Image",
                  "id": "bTnur",
                  "current_parent": "bTnuh",
                  "default_name": "Image G",
                  "style": "Image_standard_image_"
                }
              },
              "name": "Group email input",
              "style": "Group_transparent_"
            }
          },
          "name": "Group Email",
          "style": "Group_transparent_"
        },
        "bTnsK": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 27,
            "vertical_centering": true,
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 32,
            "min_width_css": "40px",
            "single_height": false,
            "horiz_alignment": "center",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTKSH",
          "default_name": "Group D",
          "elements": {
            "bTKRL": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Password"
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
              "id": "bTKSI",
              "current_parent": "bTKPl",
              "default_name": "Text G",
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
                      "type": "Empty"
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "content_format": "password",
                "placeholder": {
                  "entries": {
                    "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
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
              "id": "bTKSJ",
              "current_parent": "bTKPI",
              "default_name": "Input C",
              "name": "Input Password Signup",
              "style": "Input_standart_new_input_"
            }
          },
          "name": "Group Password",
          "style": "Group_transparent_"
        },
        "bTnsL": {
          "properties": {
            "text": {
              "entries": {
                "0": "Continue"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": 0,
            "width": 150,
            "zindex": 24,
            "order": 9,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 18,
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
                        "element_id": "bTKSJ"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTtDf1"
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
                  "name": "isnt_valid",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKSD"
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
          "type": "Button",
          "id": "bTKRw",
          "default_name": "Button B",
          "style": "Button_primary_new_"
        },
        "bTnsP": {
          "properties": {
            "text": {
              "entries": {
                "0": "Already have an account? [color=#9D9D9E]Sign in to your organization.[/color]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 15,
            "font_color": "rgba(112,112,114,1)",
            "order": 10,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 32,
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
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "properties": {
                "underline": true
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTKSO",
          "current_parent": "bTKPl",
          "default_name": "Text G",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTnsc": {
          "properties": {
            "text": {
              "entries": {
                "0": "By continuing, you agree to our [url=https://playgram.ai/terms][b]terms of service[/b][/url]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 10,
            "top": 10,
            "width": 100,
            "zindex": 15,
            "font_alignment": "center",
            "font_color": "rgba(112,112,114,1)",
            "font_size": 12,
            "order": 11,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTnsX",
          "current_parent": "bTnsD",
          "default_name": "Text EZ",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTnsu": {
          "properties": {
            "height": 280,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 28,
            "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
            "vertical_centering": true,
            "border_style": "dashed",
            "order": 8,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 32,
            "min_width_css": "40px",
            "single_height": true,
            "min_height_css": "1px",
            "horiz_alignment": "flex-start",
            "border_color_top": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
            "border_style_top": "dashed",
            "container_layout": "column",
            "four_border_style": true,
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTnsp",
          "current_parent": "bTnsD",
          "default_name": "Group LZ",
          "name": "Group divider",
          "style": "Group_transparent_"
        },
        "bTntl": {
          "properties": {
            "text": {
              "entries": {
                "0": "OR"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 15,
            "font_color": "rgba(112,112,114,1)",
            "is_visible": false,
            "order": 4,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 20,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "center",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTntj",
          "current_parent": "bTnsD",
          "default_name": "Text JZ",
          "style": "Text_inter___400___14px____afafaf_"
        },
        "bTntw": {
          "properties": {
            "height": 280,
            "left": 93.5,
            "top": 263.3046875,
            "width": 280,
            "zindex": 29,
            "border_roundness": 12,
            "is_visible": false,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.06)",
            "order": 5,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 8,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 12,
            "min_width_css": "40px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "center"
          },
          "type": "Group",
          "id": "bTntp",
          "current_parent": "bTnsD",
          "default_name": "Group OZ",
          "elements": {
            "bTntM": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Continue with Apple"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 76.5,
                "top": 20.1171875,
                "width": 100,
                "zindex": 2,
                "font_color": "rgba(128,189,203,1)",
                "font_size": 14,
                "order": 2,
                "fit_width": true,
                "fit_height": true,
                "font_weight": "500",
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTntr",
              "default_name": "Text KZ",
              "style": "Text_body_16_"
            },
            "bTntS": {
              "properties": {
                "height": 240,
                "left": 135.5,
                "top": 21.1171875,
                "width": 240,
                "zindex": 3,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766503675014x475272896857334100/Icon%20R%20%284%29.svg"
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
                "aspect_ratio_width": 1,
                "aspect_ratio_height": 1,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTntv",
              "default_name": "Image D",
              "style": "Image_standard_image_"
            }
          },
          "name": "Group Apple",
          "style": "Group_transparent_"
        },
        "bTnuJ": {
          "properties": {
            "height": 280,
            "left": 103.5,
            "top": 273.3046875,
            "width": 280,
            "zindex": 29,
            "border_roundness": 12,
            "is_visible": false,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.06)",
            "order": 6,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 8,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 32,
            "min_width_css": "40px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "center"
          },
          "type": "Group",
          "id": "bTnuC",
          "current_parent": "bTnsD",
          "default_name": "Group PZ",
          "elements": {
            "bTntM": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Continue with Google"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 76.5,
                "top": 20.1171875,
                "width": 100,
                "zindex": 2,
                "font_color": "rgba(128,189,203,1)",
                "font_size": 14,
                "order": 2,
                "fit_width": true,
                "fit_height": true,
                "font_weight": "500",
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTnuH",
              "default_name": "Text LZ",
              "style": "Text_body_16_"
            },
            "bTntS": {
              "properties": {
                "height": 240,
                "left": 135.5,
                "top": 21.1171875,
                "width": 240,
                "zindex": 3,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766503790160x599972977508857900/Icon%20R%20%285%29.svg"
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
                "aspect_ratio_width": 1,
                "aspect_ratio_height": 1,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTnuI",
              "default_name": "Image E",
              "style": "Image_standard_image_"
            }
          },
          "style": "Group_transparent_"
        },
        "bTtDj1": {
          "properties": {
            "height": 0,
            "left": 10,
            "top": 10,
            "width": 0,
            "zindex": 27,
            "vertical_centering": true,
            "order": 7,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 20,
            "min_width_css": "40px",
            "single_height": false,
            "horiz_alignment": "center",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTtDZ1",
          "current_parent": "bTnsD",
          "default_name": "Group YZ",
          "elements": {
            "bTKRL": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Access code"
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
              "id": "bTtDe1",
              "current_parent": "bTKPl",
              "default_name": "Text CZ",
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
                      "type": "Empty"
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "content_format": "text",
                "placeholder": {
                  "entries": {
                    "0": "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
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
                      "name": "custom.invalid_access_code_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKPI"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "border_color": "var(--color_bTGzw_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Input",
              "id": "bTtDf1",
              "current_parent": "bTKPI",
              "default_name": "Input F",
              "name": "Input Access code Signup",
              "style": "Input_standart_new_input_"
            },
            "bTtDr1": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "We\u2019re in early access - sign up requires an access code"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 0,
                "top": 0,
                "width": 100,
                "zindex": 15,
                "font_alignment": "center",
                "font_color": "rgba(112,112,114,1)",
                "font_size": 12,
                "order": 3,
                "fit_width": true,
                "fit_height": true,
                "margin_top": 8,
                "single_width": false,
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTtDp1",
              "current_parent": "bTtDZ1",
              "default_name": "Text PZ",
              "style": "Text_inter___400___14px____afafaf_"
            },
            "bTtEf1": {
              "properties": {
                "height": 20,
                "width": 95,
                "zindex": 6,
                "border_color": "rgba(var(--color_bTGzw_default_rgb), 0.3)",
                "border_roundness": 20,
                "data_source": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_error.body",
                    "is_slidable": false
                  },
                  "properties": {
                    "provider": "apiconnector2.bTMBs0.bTtFt1",
                    "params_code": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTtDf1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "url_params_version": {
                      "entries": {
                        "0": {
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "/version-",
                                  "1": {
                                    "properties": {
                                      "name": "AppVersion"
                                    },
                                    "type": "PageData",
                                    "is_slidable": false
                                  },
                                  "2": ""
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": ""
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "format_boolean",
                            "is_slidable": true
                          },
                          "properties": {
                            "name": "AppIsTest"
                          },
                          "type": "PageData",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetDataFromAPI"
                },
                "group_type": "text",
                "is_visible": false,
                "vertical_centering": true,
                "background_style": "none",
                "bgcolor": "rgba(var(--color_bTGzw_default_rgb), 0.14)",
                "border_style": "none",
                "order": 4,
                "use_gap": true,
                "fit_width": false,
                "column_gap": 8,
                "fit_height": true,
                "padding_top": 6,
                "single_width": false,
                "min_width_css": "40px",
                "single_height": false,
                "horiz_alignment": "center",
                "container_layout": "row",
                "collapse_when_hidden": true,
                "container_horiz_alignment": "flex-start"
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
                      "name": "custom.invalid_access_code_",
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
                    "is_visible": true
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bTtEZ1",
              "current_parent": "bTtDZ1",
              "default_name": "Group ZZ",
              "elements": {
                "bTccp": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Access code is not valid. "
                      },
                      "type": "TextExpression"
                    },
                    "height": 12,
                    "left": 70,
                    "top": 22.1875,
                    "width": 78,
                    "zindex": 3,
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
                  "id": "bTtEb1",
                  "default_name": "Text QZ",
                  "name": "Text This email is alread",
                  "style": "Text_body_14__error__"
                }
              },
              "name": "Group access code alert (use data)"
            }
          },
          "name": "Group access code container",
          "style": "Group_transparent_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group Signup",
  "style": "Group_transparent_"
};
