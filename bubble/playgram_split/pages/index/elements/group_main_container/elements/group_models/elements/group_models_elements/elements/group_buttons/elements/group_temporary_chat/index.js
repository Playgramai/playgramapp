export const group_temporary_chat = {
  "properties": {
    "height": 34,
    "left": -475.890625,
    "top": -12,
    "width": 205.9453125,
    "zindex": 16,
    "is_visible": false,
    "vertical_centering": true,
    "order": 5,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "tempchat"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
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
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUif0"
        },
        "type": "GetElement",
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
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "temporary"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
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
  "id": "bTUiA0",
  "default_name": "Group T",
  "elements": {
    "bTImB0": {
      "properties": {
        "height": 1,
        "left": -448.109375,
        "top": -12,
        "width": 1,
        "zindex": 4,
        "AAD": {
          "entries": {
            "0": "tempchat"
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.chat_type__os_",
                        "option_value": "temporary"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "Temporary chat is turned on"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "Turn on temporary chat"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_boolean",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "type_option_chat_type__os_",
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
            "2": ""
          },
          "type": "TextExpression"
        },
        "AAG": "right top",
        "AAH": "bottom left",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": "tempchat"
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "rgba(34,34,35,1)",
        "ABU": "rgba(var(--color_bTGzr_default_rgb), 0)",
        "ABV": "var(--color_bTkRL4_default)",
        "ABW": "var(--color_bTGzr_default)",
        "ABX": "var(--color_primary_contrast_default)",
        "ABY": true,
        "ABZ": {
          "entries": {
            "0": "14"
          },
          "type": "TextExpression"
        },
        "ABa": {
          "entries": {
            "0": "\"Inter\""
          },
          "type": "TextExpression"
        },
        "ABk": {
          "entries": {
            "0": "4"
          },
          "type": "TextExpression"
        },
        "ABl": {
          "entries": {
            "0": "4"
          },
          "type": "TextExpression"
        },
        "ABm": {
          "entries": {
            "0": "4"
          },
          "type": "TextExpression"
        },
        "ABn": {
          "entries": {
            "0": "4"
          },
          "type": "TextExpression"
        },
        "ABo": {
          "entries": {
            "0": "8"
          },
          "type": "TextExpression"
        },
        "ABp": {
          "entries": {
            "0": "0"
          },
          "type": "TextExpression"
        },
        "order": 7,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": true,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bc",
        "collapse_when_hidden": true
      },
      "type": "1498171554228x105618760361836540-AAC",
      "id": "bTUiF0",
      "default_name": "Airtooltip A",
      "name": "Airtooltip Temporary Chat"
    },
    "bTkkv3": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 1,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764951028254x654402485492693200/Wrap%20Temporary%20Chat.svg"
          },
          "type": "TextExpression"
        },
        "order": 3,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
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
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.chat_type__os_",
                      "option_value": "temporary"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "type_option_chat_type__os_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765986739295x362072382316775740/Wrap%20Temporary%20Chat%20%282%29.svg"
              },
              "type": "TextExpression"
            },
            "button_disabled": true
          },
          "type": "State"
        },
        "2": {
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
            "min_width_css": "28px"
          },
          "type": "State"
        },
        "3": {
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769080897636x649876938161876100/Wrap%20Temporary%20Chat%20%283%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTkfr2",
      "default_name": "Image O",
      "name": "Image temp chat",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Temporary Chat",
  "style": "Group_transparent_",
};
