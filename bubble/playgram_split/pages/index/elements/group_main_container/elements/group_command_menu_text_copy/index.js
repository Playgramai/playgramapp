export const group_command_menu_text_copy = {
  "properties": {
    "height": 280,
    "left": 116.5,
    "top": 148.984375,
    "width": 280,
    "zindex": 2,
    "is_visible": false,
    "vertical_centering": true,
    "order": 15,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "cmd-text"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 24,
    "min_width_css": "40px",
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "center"
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUif0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTtcm0"
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
                      "name": "custom.first_message_content_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUdV0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "is_visible",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUec0"
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
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
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
  "id": "bTuRX1",
  "current_parent": "bTUjB0",
  "default_name": "Group N",
  "elements": {
    "bTqPj1": {
      "properties": {
        "text": {
          "entries": {
            "0": "Press"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 260.5,
        "top": 129.1875,
        "width": 100,
        "zindex": 8,
        "font_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#A0A0A4"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#707072"
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
        "font_size": 14,
        "order": 4,
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
      "id": "bTuRZ1",
      "default_name": "Text C",
      "style": "Text_inter___400___14px____d4d4d4_"
    },
    "bTqQB1": {
      "properties": {
        "text": {
          "entries": {
            "0": "K "
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 270.5,
        "top": 139.1875,
        "width": 100,
        "zindex": 8,
        "border_roundness": 2,
        "font_alignment": "center",
        "font_color": {
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
                      "0": "#707072"
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
        "font_size": 14,
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
                      "0": "#1b1b1d"
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
        "order": 7,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 2,
        "margin_right": 8,
        "padding_left": 2,
        "single_width": false,
        "min_width_css": "0px",
        "padding_right": 2,
        "single_height": false,
        "min_height_css": "0px",
        "padding_bottom": 2,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTuRd1",
      "current_parent": "bTqPd1",
      "default_name": "Text C",
      "style": "Text_inter___400___14px____d4d4d4_"
    },
    "bTqQH1": {
      "properties": {
        "text": {
          "entries": {
            "0": "to open Command Menu"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 270.5,
        "top": 139.1875,
        "width": 100,
        "zindex": 8,
        "font_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#A0A0A4"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#707072"
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
        "font_size": 14,
        "order": 8,
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
      "id": "bTuRe1",
      "current_parent": "bTqPd1",
      "default_name": "Text C",
      "style": "Text_inter___400___14px____d4d4d4_"
    },
    "bTqQT1": {
      "properties": {
        "height": 20,
        "left": 1.09375,
        "top": 24,
        "width": 20,
        "zindex": 10,
        "is_visible": true,
        "order": 2,
        "collapse_when_hidden": true
      },
      "type": "1645192423070x296607087026765800-AAC",
      "id": "bTuRf1",
      "default_name": "undefined A",
      "name": "Device Detect"
    },
    "bTqQZ1": {
      "properties": {
        "text": {
          "entries": {
            "0": "\u2318"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 280.5,
        "top": 149.1875,
        "width": 100,
        "zindex": 8,
        "border_roundness": 2,
        "font_alignment": "center",
        "font_color": {
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
                      "0": "#707072"
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
        "font_size": 14,
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
                      "0": "#1b1b1d"
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
        "order": 6,
        "fit_width": true,
        "fit_height": true,
        "margin_left": 8,
        "padding_top": 2,
        "margin_right": 2,
        "padding_left": 2,
        "single_width": false,
        "min_width_css": "0px",
        "padding_right": 2,
        "single_height": false,
        "min_height_css": "0px",
        "padding_bottom": 2,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": "Mac OS",
                "type": "Message",
                "name": "not_equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAE",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuRf1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Ctrl"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTuRj1",
      "current_parent": "bTqPd1",
      "default_name": "Text C",
      "style": "Text_inter___400___14px____d4d4d4_"
    }
  },
  "name": "Group Command Menu Text copy",
  "style": "Group_transparent_",
};
