import { Group_Onboarding_Create_Organization } from './group_onboarding_create_organization/index.js';
import { Group_Join_Workspaces } from './group_join_workspaces/index.js';
import { Group_Signup } from './group_signup.js';

export const elements = {
  "bTPtk": Group_Onboarding_Create_Organization,
  "bTQBn0": Group_Join_Workspaces,
  "bTPtj": Group_Signup,
  "bTPtf": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 16,
      "is_visible": false,
      "vertical_centering": true,
      "order": 4,
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
            "args": "login",
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
    "id": "bTKPl",
    "default_name": "Group A",
    "elements": {
      "bTKPr": {
        "properties": {
          "text": {
            "entries": {
              "0": "Ready when you are"
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
        "id": "bTKPN",
        "default_name": "Text A",
        "style": "Text_inter___400___32px___white_"
      },
      "bTKQt": {
        "properties": {
          "text": {
            "entries": {
              "0": "Step back into your team space."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 84.5,
          "top": 53,
          "width": 100,
          "zindex": 25,
          "font_alignment": "center",
          "font_color": "rgba(112,112,114,1)",
          "font_size": 16,
          "order": 4,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 32,
          "max_width_css": "350px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTKQi",
        "default_name": "Text E",
        "style": "Text_inter___400___16px___white_"
      },
      "bTnrl": {
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
        "style": "Group_transparent_"
      }
    },
    "name": "Group Login",
    "style": "Group_transparent_"
  },
  "bTUdC0": {
    "properties": {
      "height": 280,
      "left": 50.5,
      "top": 34,
      "width": 280,
      "zindex": 33,
      "is_visible": false,
      "vertical_centering": true,
      "order": 13,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 6,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "min_height_css": "100%",
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center",
      "container_horiz_alignment": "center"
    },
    "type": "Group",
    "id": "bTUcw0",
    "default_name": "Group EZ",
    "elements": {
      "bTUdU0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Creating your workspace..."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 561.5,
          "top": 93,
          "width": 100,
          "zindex": 35,
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
                        "next": {
                          "next": {
                            "args": {
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
                                  "type": "Message",
                                  "name": "not_equals",
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
                            "type": "Message",
                            "name": "and_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "subscription_custom_subscription",
                        "is_slidable": false
                      },
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "parameter_name": {
                  "entries": {
                    "0": "checkout"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Redirecting to payment\u2026"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTUdP0",
        "default_name": "Text W",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTqYk0": {
        "properties": {
          "height": 200,
          "left": 440,
          "top": 81,
          "width": 200,
          "zindex": 36,
          "floating_reference": "top",
          "custom_id": "bTqYR0",
          "order": 2,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "30px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTqYf0",
        "default_name": "[Element] Dot Loader HTML A"
      }
    },
    "name": "Group Loader",
    "style": "Group_transparent_"
  },
  "bTxxh": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 118.078125,
      "width": 1,
      "zindex": 40,
      "vertical_centering": true,
      "order": 14,
      "fit_width": true,
      "fit_height": true,
      "single_width": true,
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTxxc",
    "default_name": "Group BZZ",
    "elements": {
      "bTxxi": {
        "properties": {
          "height": 20,
          "left": 0,
          "top": -158.078125,
          "width": 20,
          "zindex": 3,
          "order": 15,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "aa",
          "collapse_when_hidden": true
        },
        "type": "1568986136566x208317327136522240-ALe",
        "id": "bTxSh0",
        "default_name": "SCA A",
        "name": "SCA A"
      },
      "bTxxj": {
        "properties": {
          "height": 1,
          "left": 0,
          "top": -158.078125,
          "width": 1,
          "zindex": 2,
          "AAQ": {
            "entries": {
              "0": "stripe_error"
            },
            "type": "TextExpression"
          },
          "AAR": true,
          "order": 16,
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "1488796042609x768734193128308700-AAP",
        "id": "bTxxV",
        "default_name": "JavascripttoBubble A",
        "name": "JS Stripe Error"
      },
      "bTxxn": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": -158.078125,
          "width": 280,
          "zindex": 1,
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "invitation_accepted__boolean",
                      "value": true,
                      "constraint_type": "equals"
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "type": "Message",
              "name": "workspaces_list_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 17,
          "fit_width": false,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "nonant_alignment": "ac",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bToYf3",
        "default_name": "Group WZ",
        "name": "Group Workspace&User Invitation (use data)",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Settings",
    "style": "Group_transparent_"
  },
  "bTnvv": {
    "properties": {
      "height": 280,
      "left": 387.5,
      "top": 28,
      "width": 280,
      "zindex": 35,
      "is_visible": false,
      "vertical_centering": true,
      "order": 1,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 5,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "32px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": false,
      "container_horiz_alignment": "flex-start"
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
            "element_id": "bTPVZ"
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
    "id": "bTnvt",
    "default_name": "Group SZ",
    "elements": {
      "bTnwB": {
        "properties": {
          "height": 240,
          "left": 30.5,
          "top": 13,
          "width": 240,
          "zindex": 2,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766508743192x190867138570348400/Folder%20Add%20in-lc.svg"
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bTnvz",
        "default_name": "Image I",
        "style": "Image_standard_image_"
      },
      "bTnwH": {
        "properties": {
          "text": {
            "entries": {
              "0": "Add Workspace"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 50.5,
          "top": 17,
          "width": 100,
          "zindex": 3,
          "font_color": "var(--color_bTkRP4_default)",
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
        "id": "bTnwF",
        "default_name": "Text OZ",
        "style": "Text_body_16_"
      }
    },
    "name": "Group workspace",
    "style": "Group_transparent_"
  },
  "bToHd": {
    "properties": {
      "height": 0,
      "left": 429.671875,
      "top": 0,
      "width": 0,
      "zindex": 37,
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 10,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 32,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "center",
      "container_layout": "row",
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
            "element_id": "bTPVZ"
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
    "id": "bToHb",
    "default_name": "Group TZ",
    "elements": {
      "bToHh": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": -40,
          "width": 200,
          "zindex": 36,
          "floating_reference": "top",
          "custom_id": "bToHK",
          "order": 1,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": true,
          "max_width_css": "188px",
          "min_width_css": "200px",
          "single_height": false,
          "horiz_alignment": "center",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bToHV",
        "default_name": "[Element] Logo A"
      }
    },
    "name": "Group Logo",
    "style": "Group_transparent_"
  },
  "bTwju": {
    "properties": {
      "height": 24,
      "left": 50,
      "top": 99,
      "width": 25,
      "zindex": 38,
      "data_source": {
        "properties": {
          "value": "custom.organization",
          "parameter_name": {
            "entries": {
              "0": "workspace"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "group_type": "custom.organization",
      "is_visible": false,
      "vertical_centering": true,
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTwjp",
    "default_name": "Group FZZ",
    "name": "Group Workspace (use data)",
    "style": "Group_transparent_"
  },
};
