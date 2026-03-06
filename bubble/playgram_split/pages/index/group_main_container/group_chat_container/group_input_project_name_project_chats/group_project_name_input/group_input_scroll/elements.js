import { Group_Input_Container } from './group_input_container/index.js';

export const elements = {
  "bTKdA0": Group_Input_Container,
  "bTccd": {
    "properties": {
      "height": 20,
      "left": 28,
      "top": 25.1875,
      "width": 95,
      "zindex": 6,
      "is_visible": false,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 8,
      "max_width_css": "780px",
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTccb",
    "default_name": "Group QZZZ",
    "elements": {
      "bTccj": {
        "properties": {
          "height": 12,
          "left": 22,
          "top": 14.1875,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled alert-circle",
          "icon_color": "var(--color_bTGzw_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTcch",
        "default_name": "Icon Y",
        "style": "Icon_standard_icon_"
      },
      "bTccp": {
        "properties": {
          "text": {
            "entries": {
              "0": "This file type is not supported"
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
        "id": "bTccn",
        "default_name": "Text BZ",
        "style": "Text_body_14__error__"
      }
    },
    "name": "Group unsupported file alert",
    "style": "Group_error_"
  },
  "bTgtz2": {
    "properties": {
      "height": 0,
      "left": 35,
      "top": 60,
      "width": 0,
      "zindex": 5,
      "border_color": "rgba(128,189,203,0.06)",
      "border_roundness": 12,
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(18,18,19,1)",
      "border_style": "solid",
      "order": 6,
      "row_gap": 10,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 20,
      "fit_height": true,
      "padding_top": 16,
      "padding_left": 16,
      "single_width": false,
      "margin_bottom": 30,
      "max_width_css": "785px",
      "padding_right": 16,
      "single_height": false,
      "padding_bottom": 16,
      "horiz_alignment": "center",
      "container_layout": "row",
      "four_border_style": false,
      "border_roundness_top": 20,
      "collapse_when_hidden": true,
      "border_roundness_right": 20,
      "container_horiz_alignment": "center"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "not_logged_in",
            "is_slidable": false
          },
          "type": "CurrentUser",
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
            "args": 768,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "margin_left": 8,
          "margin_right": 8
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTgsr2",
    "current_parent": "bTUeF0",
    "default_name": "Group ZZZZ",
    "elements": {
      "bTgvI2": {
        "properties": {
          "text": {
            "entries": {
              "0": "Want to start using Playgram? [color=#ACACAD]Click to Sign up button to get started[/color]"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_color": "var(--color_bTkRP4_default)",
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "states": {
          "bTHqa": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "breakpoint_id": "built-in-mobile-landing"
                  },
                  "type": "Breakpoint",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "less_or_equal_than",
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
        "id": "bTgvD2",
        "default_name": "Text LZ",
        "style": "Text_inter___400___16px___white_"
      },
      "bToMV1": {
        "properties": {
          "height": 280,
          "left": 523.59375,
          "top": 34,
          "width": 280,
          "zindex": 5,
          "border_roundness": 12,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(36,86,98,1)",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "padding_top": 8,
          "padding_left": 24,
          "single_width": false,
          "min_width_css": "127px",
          "padding_right": 24,
          "single_height": false,
          "min_height_css": "36px",
          "padding_bottom": 8,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
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
                "element_id": "bTUdV0",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "max_width_css": "100px"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bToMT1",
        "default_name": "Group QZZZZ",
        "elements": {
          "bToMb1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Sign up"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 21.8828125,
              "top": 14,
              "width": 100,
              "zindex": 2,
              "font_color": "rgba(196,225,231,1)",
              "font_size": 14,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "50px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bToMZ1",
            "default_name": "Text QZ",
            "style": "Text_body_16_"
          },
          "bToMh1": {
            "properties": {
              "height": 240,
              "left": 100.1484375,
              "top": 17,
              "width": 240,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766564852163x949474834984274000/Icon%20R%20%286%29.svg"
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
            "type": "Image",
            "id": "bToMf1",
            "default_name": "Image T",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group Button Signup",
        "style": "Group_transparent_"
      }
    },
    "name": "Group User Logged out",
    "style": "Group_transparent_"
  },
  "bTrTW2": {
    "properties": {
      "text": {
        "entries": {
          "0": "To generate images please switch to Gemini or OpenAI models"
        },
        "type": "TextExpression"
      },
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 100,
      "zindex": 1,
      "font_alignment": "center",
      "font_color": "var(--color_bTkRL4_default)",
      "font_size": 12,
      "is_visible": false,
      "line_height": 1.4,
      "order": 5,
      "opacity": 100,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 0,
      "single_width": false,
      "margin_bottom": 10,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "center",
      "horiz_alignment": "center",
      "nonant_alignment": "bb",
      "collapse_when_hidden": true
    },
    "type": "Text",
    "id": "bTrTQ2",
    "current_parent": "bTrTJ2",
    "default_name": "Text SZ",
    "name": "Text To generate images",
    "style": "Text_inter___400___14px____afafaf_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      },
      "opacity": {
        "fn": "ease",
        "duration": 300
      }
    }
  },
  "bTskb1": {
    "properties": {
      "bold": false,
      "font_face": "var(--font_default):::600",
      "height": 15,
      "left": 0,
      "top": -525.609375,
      "width": 37,
      "zindex": 4,
      "icon": "feather arrow-down",
      "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
      "border_roundness": 20,
      "boxshadow_style": "none",
      "font_color": "var(--color_surface_default)",
      "font_size": 16,
      "icon_color": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#555557"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#f7f8f9"
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
      "is_visible": true,
      "line_height": 1.5,
      "vertical_centering": true,
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
                    "0": "#121213"
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
      "border_style": "solid",
      "order": 2,
      "opacity": 0,
      "fit_width": true,
      "icon_size": 18,
      "unique_id": {
        "entries": {
          "0": "scrollButton"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "margin_top": -55,
      "button_type": "icon",
      "font_weight": "600",
      "padding_left": 0,
      "single_width": true,
      "margin_bottom": 20,
      "min_width_css": "35px",
      "padding_right": 0,
      "single_height": true,
      "min_height_css": "35px",
      "padding_bottom": 0,
      "button_disabled": false,
      "horiz_alignment": "center",
      "nonant_alignment": "cc",
      "collapse_when_hidden": false
    },
    "type": "Button",
    "id": "bTUeJ0",
    "current_parent": "bTHTt0",
    "default_name": "Button A",
    "name": "Button scroll chat",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      },
      "opacity": {
        "fn": "ease",
        "duration": 100
      }
    }
  },
};
