export const mobile_views = {
  "bTHDb": {
    "properties": {
      "height": 852,
      "width": 393,
      "title": {
        "entries": {
          "0": "Home"
        },
        "type": "TextExpression"
      },
      "fixed_width": true,
      "min_width_px": 0,
      "default_width": 393,
      "min_height_px": 852,
      "new_responsive": true,
      "element_version": 5,
      "container_layout": "column",
      "responsive_version": 1
    },
    "type": "Page",
    "id": "bTHDZ",
    "default_name": "",
    "name": "Home",
    "is_mobile_view": true
  },
  "bTPBn": {
    "elements": {
      "cmNdv": {
        "properties": {
          "title": {
            "entries": {
              "0": {
                "properties": {
                  "name": "Current View Title"
                },
                "type": "PageData"
              }
            },
            "type": "TextExpression"
          },
          "show_back_button": false,
          "show_bottom_border": true
        },
        "type": "AppBar",
        "id": "bTPBb",
        "default_name": "AppBar A",
        "soft_deleted": true
      },
      "cmNel": {
        "properties": {
          "height": 327.15625,
          "left": 14.5,
          "top": 266.421875,
          "width": 361,
          "zindex": 7,
          "vertical_centering": true,
          "background_style": "none",
          "order": 1,
          "use_gap": false,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "361px",
          "single_height": false,
          "min_height_css": "724px",
          "horiz_alignment": "center",
          "container_layout": "column",
          "container_vert_alignment": "center"
        },
        "type": "Group",
        "id": "bTPBf",
        "default_name": "Group C",
        "elements": {
          "cmNep": {
            "properties": {
              "height": 283,
              "left": 0,
              "top": -236.421875,
              "width": 361,
              "zindex": 2,
              "vertical_centering": true,
              "background_style": "none",
              "order": 2,
              "row_gap": 24,
              "use_gap": true,
              "fit_height": true,
              "padding_left": 32,
              "single_width": true,
              "max_width_css": "361px",
              "min_width_css": "361px",
              "padding_right": 32,
              "single_height": false,
              "min_height_css": "283px",
              "horiz_alignment": "center",
              "container_layout": "column",
              "nonant_alignment": "ba",
              "container_vert_alignment": "center",
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "args": 325,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_width",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPBZ"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "padding_top": 16,
                  "padding_left": 48,
                  "padding_right": 48,
                  "padding_bottom": 16
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTPBg",
            "default_name": "Group A",
            "elements": {
              "cmNdL": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": -50,
                  "width": 30,
                  "zindex": 3,
                  "icon": "phosphor outlined arrow-circle-down",
                  "icon_color": "rgba(12, 41, 171, 1)",
                  "vertical_centering": true,
                  "order": 1,
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "112px",
                  "single_height": true,
                  "min_height_css": "112px",
                  "horiz_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "properties": {
                        "name": "Can Update Via Refresh"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon": "phosphor regular arrows-clockwise"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTPBh",
                "default_name": "Icon A"
              },
              "cmNdP": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "It's time to update your app."
                    },
                    "type": "TextExpression"
                  },
                  "bold": false,
                  "font_face": "Barlow:::regular",
                  "height": 36,
                  "left": 0,
                  "top": -50,
                  "width": 100,
                  "zindex": 2,
                  "font_alignment": "center",
                  "font_color": "rgba(59, 59, 59, 1)",
                  "font_size": 28,
                  "line_height": 1.4,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "font_family": "Open Sans",
                  "font_weight": "600",
                  "padding_top": 0,
                  "padding_left": 0,
                  "single_width": false,
                  "min_width_css": "0px",
                  "padding_right": 0,
                  "single_height": false,
                  "min_height_css": "0px",
                  "padding_bottom": 0,
                  "horiz_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "properties": {
                        "name": "Can Update Via Refresh"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "It's time to update your app\n"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTPBl",
                "default_name": "Text A"
              },
              "cmNdQ": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "To continue using this app, update it in the App Store."
                    },
                    "type": "TextExpression"
                  },
                  "bold": false,
                  "font_face": "Barlow:::regular",
                  "height": 36,
                  "left": 0,
                  "top": -50,
                  "width": 100,
                  "zindex": 2,
                  "font_alignment": "center",
                  "font_color": "rgba(82,82,82,1)",
                  "font_size": 16,
                  "line_height": 1.4,
                  "order": 3,
                  "fit_width": true,
                  "fit_height": true,
                  "font_family": "Open Sans",
                  "font_weight": "400",
                  "padding_top": 0,
                  "padding_left": 0,
                  "single_width": false,
                  "min_width_css": "0px",
                  "padding_right": 0,
                  "single_height": false,
                  "min_height_css": "0px",
                  "padding_bottom": 0,
                  "horiz_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "properties": {
                        "name": "Can Update Via Refresh"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Close and reopen this app to continue using it."
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTPBm",
                "current_parent": "cmNcl",
                "default_name": "Text B"
              }
            },
            "name": "Message Group"
          }
        },
        "name": "Content Group"
      }
    },
    "properties": {
      "height": 844,
      "width": 390,
      "use_gap": false,
      "view_type": "not_scrollable",
      "fixed_width": true,
      "min_width_px": 0,
      "show_tab_bar": false,
      "default_width": 393,
      "min_height_px": 852,
      "new_responsive": true,
      "show_safe_area": true,
      "element_version": 5,
      "backdrop_bgcolor": "rgba(245, 250, 255, 1)",
      "container_layout": "column",
      "default_view_size": "iphone_14_15_pro",
      "responsive_version": 1,
      "container_vert_alignment": "center"
    },
    "type": "Page",
    "id": "bTPBZ",
    "default_name": "Update App",
    "name": "update_app",
    "is_mobile_view": true
  },
  "bTPSR": {
    "elements": {
      "bTHCA": {
        "properties": {
          "height": 200,
          "left": 150.001708984375,
          "top": 209,
          "width": 200,
          "zindex": 2,
          "floating_reference": "top",
          "custom_id": "bTPRh",
          "order": 1,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "safe_area_behavior": "outer",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
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
                "name": "IsOffline"
              },
              "type": "PageData",
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
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "properties": {
                "name": "IsOffline"
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
        "type": "CustomElement",
        "id": "bTPRi",
        "default_name": "offline_banner"
      },
      "bTHEX": {
        "properties": {
          "title": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "background_style": "bgcolor",
          "back_label": {
            "entries": {
              "0": "Back"
            },
            "type": "TextExpression"
          },
          "show_back_button": true,
          "show_bottom_border": true,
          "override_back_label": true
        },
        "type": "AppBar",
        "id": "bTPRj",
        "default_name": "AppBar A",
        "soft_deleted": true
      },
      "bTHGf": {
        "properties": {
          "height": 0,
          "left": 26,
          "top": 105,
          "width": 0,
          "zindex": 10,
          "vertical_centering": true,
          "order": 10,
          "row_gap": 16,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 24,
          "single_width": false,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPRn",
        "current_parent": "bTHEF",
        "default_name": "Group F",
        "elements": {
          "bTHFY": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Reset password"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": -16,
              "top": -95,
              "width": 150,
              "zindex": 6,
              "icon": "material outlined star_border",
              "vertical_centering": true,
              "order": 4,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "44px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTPRo",
            "default_name": "Button C",
            "style": "Button_filled_light_primary_"
          },
          "bTHFZ": {
            "properties": {
              "height": 0,
              "left": -16,
              "top": -95,
              "width": 0,
              "zindex": 8,
              "vertical_centering": true,
              "order": 2,
              "row_gap": 4,
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
            "id": "bTPRp",
            "default_name": "Group F",
            "elements": {
              "bTHFF": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Password"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -206.171875,
                  "width": 100,
                  "zindex": 7,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTPRt",
                "default_name": "Text E",
                "style": "Text_body_16_"
              },
              "bTHFG": {
                "properties": {
                  "height": 48,
                  "left": 0,
                  "top": -206.171875,
                  "width": 250,
                  "zindex": 5,
                  "content_format": "password",
                  "placeholder": {
                    "entries": {
                      "0": "Enter a password"
                    },
                    "type": "TextExpression"
                  },
                  "vertical_centering": true,
                  "order": 2,
                  "fit_height": false,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "44px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Input",
                "id": "bTPRu",
                "default_name": "Input B",
                "style": "Input_standard_input_"
              }
            },
            "style": "Group_transparent_"
          },
          "bTHFd": {
            "properties": {
              "height": 0,
              "left": -16,
              "top": -95,
              "width": 0,
              "zindex": 9,
              "vertical_centering": true,
              "order": 1,
              "row_gap": 4,
              "use_gap": true,
              "fit_width": false,
              "fit_height": true,
              "margin_top": 0,
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "min_height_css": "40px",
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTPRv",
            "default_name": "Group F",
            "elements": {
              "bTHFN": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Your new password must be different from previously used passwords."
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -95,
                  "width": 100,
                  "zindex": 4,
                  "font_color": "var(--color_bTHBb_default)",
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTPRz",
                "default_name": "Text E",
                "style": "Text_body_16_"
              },
              "bTHFR": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Create new password"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -95,
                  "width": 100,
                  "zindex": 3,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTPSA",
                "default_name": "Text E",
                "style": "Text_heading_5_"
              }
            },
            "style": "Group_transparent_"
          },
          "bTHGn": {
            "properties": {
              "height": 0,
              "left": -6,
              "top": -85,
              "width": 0,
              "zindex": 8,
              "vertical_centering": true,
              "order": 3,
              "row_gap": 4,
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
            "id": "bTPSB",
            "current_parent": "bTHGN",
            "default_name": "Group G",
            "elements": {
              "bTHFF": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Confirm password"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": -206.171875,
                  "width": 100,
                  "zindex": 7,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTPSF",
                "default_name": "Text F",
                "style": "Text_body_16_"
              },
              "bTHFG": {
                "properties": {
                  "height": 48,
                  "left": 0,
                  "top": -206.171875,
                  "width": 250,
                  "zindex": 5,
                  "content_format": "password",
                  "placeholder": {
                    "entries": {
                      "0": "Confirm the password"
                    },
                    "type": "TextExpression"
                  },
                  "vertical_centering": true,
                  "order": 2,
                  "fit_height": false,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "44px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Input",
                "id": "bTPSG",
                "default_name": "Input C",
                "style": "Input_standard_input_"
              }
            },
            "style": "Group_transparent_"
          }
        },
        "name": "create_password",
        "style": "Group_transparent_"
      }
    },
    "workflows": {
      "bTHLr": {
        "properties": {
          "element_id": "bTPRo"
        },
        "type": "ButtonClicked",
        "id": "bTPSL",
        "actions": {
          "0": {
            "properties": {
              "new_password": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTPRu"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "new_password_again": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTPSG"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "ResetPassword",
            "id": "bTPSM"
          },
          "1": {
            "properties": {
              "element_id": "bTHDZ",
              "reset_stack": true
            },
            "type": "MobileNavigate",
            "id": "bTPSN"
          }
        }
      }
    },
    "properties": {
      "height": 852,
      "width": 393,
      "title": {
        "entries": {
          "0": "reset_password"
        },
        "type": "TextExpression"
      },
      "row_gap": 16,
      "use_gap": true,
      "view_type": "not_scrollable",
      "fixed_width": true,
      "min_width_px": 0,
      "padding_left": 16,
      "default_width": 390,
      "min_height_px": 844,
      "padding_right": 16,
      "new_responsive": true,
      "element_version": 5,
      "container_layout": "column",
      "default_view_size": "iphone_13_14",
      "responsive_version": 1
    },
    "type": "Page",
    "id": "bTPRh",
    "default_name": "Reset Password",
    "name": "reset_password",
    "is_mobile_view": true
  }
};
