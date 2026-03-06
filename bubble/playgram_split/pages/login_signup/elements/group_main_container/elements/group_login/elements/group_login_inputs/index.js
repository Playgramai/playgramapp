export const group_login_inputs = {
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
  "id": "bTnrg",
  "default_name": "Group IZ",
  "elements": {
    "bTnrm": {
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
      "id": "bTKQu",
      "default_name": "Group B",
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
          "id": "bTKQK",
          "current_parent": "bTKPl",
          "default_name": "Text D",
          "style": "Text_inter___400___14px___white_"
        },
        "bTnuP": {
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
          "id": "bTneR2",
          "current_parent": "bTKPl",
          "default_name": "Group GZ",
          "elements": {
            "bTccp": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "No account found with these credentials"
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
              "id": "bTneX2",
              "default_name": "Text AZ",
              "style": "Text_body_14__error__"
            }
          },
          "name": "Group wrong credentials alert"
        },
        "bTnuV": {
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
            "single_height": false,
            "horiz_alignment": "center",
            "container_layout": "relative",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTnuT",
          "default_name": "Group QZ",
          "elements": {
            "bTnuZ": {
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
                "1": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTneR2"
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
              "id": "bTKPT",
              "current_parent": "bTKPI",
              "default_name": "Input A",
              "name": "Input Email Login",
              "style": "Input_standart_new_input_"
            },
            "bTnuf": {
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
                      "element_id": "bTneR2"
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
              "id": "bTnua",
              "default_name": "Image F",
              "style": "Image_standard_image_"
            }
          },
          "name": "Group input email",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Email",
      "style": "Group_transparent_"
    },
    "bTnrn": {
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
        "margin_bottom": 20,
        "min_width_css": "40px",
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTKRF",
      "default_name": "Group C",
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
          "id": "bTKPy",
          "current_parent": "bTKPl",
          "default_name": "Text C",
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
            "margin_bottom": 8,
            "single_height": true,
            "min_height_css": "36px",
            "horiz_alignment": "center",
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
                  "element_id": "bTneR2"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "border_color": "var(--color_bTGzw_default)"
              },
              "type": "State"
            }
          },
          "type": "Input",
          "id": "bTKPZ",
          "current_parent": "bTKPI",
          "default_name": "Input B",
          "name": "Input Password Login",
          "style": "Input_standart_new_input_"
        },
        "bTKRN": {
          "properties": {
            "text": {
              "entries": {
                "0": "Forgot password?"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -193.9921875,
            "width": 100,
            "zindex": 15,
            "font_color": "rgba(112,112,114,1)",
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
          "id": "bTKPf",
          "default_name": "Text B",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "name": "Group Password",
      "style": "Group_transparent_"
    },
    "bTnrs": {
      "properties": {
        "text": {
          "entries": {
            "0": "Don't have an account? [color=#9D9D9E]Create your organization.[/color]"
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
      "id": "bTKRR",
      "current_parent": "bTKPl",
      "default_name": "Text F",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTnsi": {
      "properties": {
        "text": {
          "entries": {
            "0": "By continuing, you agree to our [url=https://playgram.ai/terms][b]terms of service[/b][/url]"
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
        "order": 11,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "center",
        "recognize_links": false,
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTnsd",
      "current_parent": "bTnrg",
      "default_name": "Text FZ",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTnso": {
      "properties": {
        "height": 280,
        "left": 152.5,
        "top": 225.3046875,
        "width": 280,
        "zindex": 28,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "vertical_centering": true,
        "border_style": "dashed",
        "order": 7,
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
      "id": "bTnsj",
      "default_name": "Group KZ",
      "name": "Group divider",
      "style": "Group_transparent_"
    },
    "bTntA": {
      "properties": {
        "text": {
          "entries": {
            "0": "OR"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 10,
        "top": 10,
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
      "id": "bTnsv",
      "current_parent": "bTnrg",
      "default_name": "Text GZ",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTntG": {
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
      "id": "bTntB",
      "default_name": "Group MZ",
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
          "id": "bTntH",
          "default_name": "Text HZ",
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
          "id": "bTntN",
          "default_name": "Image B",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Apple",
      "style": "Group_transparent_"
    },
    "bTntd": {
      "properties": {
        "height": 280,
        "left": 113.5,
        "top": 283.3046875,
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
      "id": "bTntT",
      "current_parent": "bTnrg",
      "default_name": "Group NZ",
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
          "id": "bTntY",
          "default_name": "Text IZ",
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
          "id": "bTntZ",
          "default_name": "Image C",
          "style": "Image_standard_image_"
        }
      },
      "style": "Group_transparent_"
    },
    "bToYr3": {
      "properties": {
        "height": 54,
        "left": 24,
        "top": 252.9921875,
        "width": 386,
        "zindex": 30,
        "vertical_centering": true,
        "order": 8,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 18,
        "single_height": false,
        "horiz_alignment": "center",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bToYm3",
      "default_name": "Group XZ",
      "elements": {
        "bToYs3": {
          "properties": {
            "text": {
              "entries": {
                "0": "Log in"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": -24,
            "top": -252.9921875,
            "width": 150,
            "zindex": 1,
            "order": 9,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "center",
            "nonant_alignment": "ba",
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
                  "element_id": "bToYt3"
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
                }
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTKQc",
          "default_name": "Button A",
          "style": "Button_primary_new_"
        },
        "bToYy3": {
          "properties": {
            "height": 200,
            "left": 290.5,
            "top": 119,
            "width": 200,
            "zindex": 34,
            "floating_reference": "top",
            "custom_id": "bTLgB",
            "is_visible": false,
            "order": 1,
            "fit_width": true,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "param_bTUaI": {
              "entries": {
                "0": "#c4e1e7"
              },
              "type": "TextExpression"
            },
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "vert_alignment": "center",
            "horiz_alignment": "center",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true,
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bToYt3",
          "current_parent": "bToYm3",
          "default_name": "[Element] Loader B",
          "name": "[Element] Loader Log in Button",
          "custom_definition_name": "[Element] Loader"
        }
      },
      "name": "Group Parent Log in",
      "style": "Group_transparent_"
    }
  },
  "name": "Group login inputs",
  "style": "Group_transparent_",
};
