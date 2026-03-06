export const elements = {
  "bTgpU2": {
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
    "style": "Group_transparent_"
  },
  "bTgpV2": {
    "properties": {
      "height": 16,
      "left": -475.890625,
      "top": -12,
      "width": 11,
      "zindex": 20,
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "24px",
      "single_height": true,
      "min_height_css": "24px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "states": {
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
                    "element_id": "bTUiZ0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTYDk1",
    "default_name": "Group EZZZ",
    "elements": {
      "bTnom": {
        "properties": {
          "height": 240,
          "left": 0,
          "top": 0,
          "width": 240,
          "zindex": 3,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766486636648x813188102711222900/Settings%20%281%29.svg"
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "20px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "center",
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
                "element_id": "bTYDk1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766490481102x986559141567848100/Settings%20%282%29.svg"
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
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770219461376x801994373593269100/Settings%20%281%29%201.svg"
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
                "element_id": "bTYDk1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770219476273x522651761685832800/Settings%20%281%29%202.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTnob",
        "default_name": "Image B",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group open project settings (use button)",
    "style": "Group_transparent_"
  },
  "bTgpZ2": {
    "properties": {
      "height": 34,
      "left": -475.890625,
      "top": -12,
      "width": 205.9453125,
      "zindex": 16,
      "is_visible": false,
      "vertical_centering": true,
      "order": 7,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": ""
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
              "next": {
                "args": {
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
                        "name": "not_equals",
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
                "next": {
                  "args": {
                    "next": {
                      "args": "yes",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "type": "CurrentUser",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "type": "Message",
                                              "name": "current_workspace_custom_workspace",
                                              "is_slidable": false
                                            },
                                            "type": "CurrentUser",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "contains",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "admins_list_custom_workspace",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "project_custom_project",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "type": "Message",
                                              "name": "current_organization_custom_organization",
                                              "is_slidable": false
                                            },
                                            "type": "CurrentUser",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "args": {
                                                      "properties": {
                                                        "option_set": "option.user_type__os_",
                                                        "option_value": "admin"
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
                                                                "properties": {
                                                                  "option_set": "option.user_type__os_",
                                                                  "option_value": "owner"
                                                                },
                                                                "type": "OneOptionValue",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "equals",
                                                              "is_slidable": false
                                                            },
                                                            "type": "Message",
                                                            "name": "user_type_option_user_type__os_",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "current_workspace_custom_workspace",
                                                          "is_slidable": false
                                                        },
                                                        "type": "CurrentUser",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "or_",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "equals",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "user_type_option_user_type__os_",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "current_workspace_custom_workspace",
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
                                          "name": "equals",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "organization_custom_organization",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
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
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "Created By",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression",
                        "said": "a2Vsdm8tMzE4ODQ="
                      }
                    },
                    "type": "ArbitraryText"
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
              "name": "is_not_empty",
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
    "id": "bTUhp0",
    "current_parent": "bTHqO",
    "default_name": "Group U",
    "elements": {
      "bTJrz": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 2,
          "floating_reference": "top",
          "custom_id": "bTIml0",
          "data_source": {
            "next": {
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
          "is_visible": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "param_bTJsF": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "cc",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTUhv0",
        "default_name": "[Element] GF Chat Menu A"
      },
      "bTmPF3": {
        "properties": {
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 36,
          "zindex": 5,
          "border_roundness": 12,
          "vertical_centering": true,
          "fit_width": true,
          "fit_height": true,
          "padding_top": 4,
          "padding_left": 4,
          "single_width": true,
          "min_width_css": "40px",
          "padding_right": 4,
          "single_height": true,
          "min_height_css": "40px",
          "padding_bottom": 4,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "nonant_alignment": "bb",
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
                "name": "custom.visible__",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUhv0"
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
                            "0": "#e5e7eb14"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#acacad14"
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "border_roundness": 8,
              "min_width_css": "28px",
              "min_height_css": "28px"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTmPD3",
        "default_name": "Group IZZZZ",
        "elements": {
          "bTmPJ3": {
            "properties": {
              "height": 24,
              "left": 0,
              "top": 0,
              "width": 24,
              "zindex": 1,
              "border_roundness": 12,
              "vertical_centering": true,
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
              "border_style": "none",
              "fit_width": true,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "36px",
              "single_height": true,
              "min_height_css": "36px",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "nonant_alignment": "bb",
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
                                "0": "#262629"
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
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.visible__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUhv0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
                                "0": "#e5e7eb"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "#262629"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "border_roundness": 8,
                  "min_width_css": "28px",
                  "min_height_css": "28px"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTlot",
            "default_name": "Group HZZZZ",
            "elements": {
              "bTloz": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 1,
                  "icon": "phosphor regular dots-three",
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
                                "0": "#acacad"
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
                  "vertical_centering": true,
                  "order": 9,
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": true,
                  "min_height_css": "20px",
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
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.visible__",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUhv0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": "rgba(255,255,255,1)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTUht0",
                "default_name": "Icon D"
              }
            },
            "name": "Group menu chat",
            "style": "Group_transparent_"
          }
        },
        "name": "Group menu active",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Project/Chat Settings (use button)",
    "style": "Group_transparent_"
  },
  "bTiHF1": {
    "properties": {
      "height": 0,
      "left": 100.875,
      "top": 0,
      "width": 0,
      "zindex": 22,
      "border_roundness": 12,
      "data_source": {
        "type": "ElementParent",
        "is_slidable": false
      },
      "group_type": "custom.chat",
      "is_visible": false,
      "vertical_centering": true,
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
      "order": 4,
      "use_gap": true,
      "fit_width": true,
      "fit_height": true,
      "padding_top": 8,
      "padding_left": 8,
      "single_width": false,
      "padding_right": 8,
      "single_height": true,
      "min_height_css": "36px",
      "padding_bottom": 8,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
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
                        "name": "not_equals",
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
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
                        "0": "#e5e7eb"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#262629"
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
      "2": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "share_access_boolean",
            "is_slidable": false
          },
          "type": "ElementParent",
          "said": "a2Vsdm8tMzE4ODQ=",
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
                        "0": "#e5e7eb"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#262629"
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
      "3": {
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "border_roundness": 8,
          "padding_top": 0,
          "min_height_css": "28px",
          "padding_bottom": 0
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTiHD1",
    "default_name": "Group AZZZZ",
    "elements": {
      "bTiHL1": {
        "properties": {
          "text": {
            "entries": {
              "0": "Share"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -248.234375,
          "top": 0,
          "width": 100,
          "zindex": 3,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "margin_right": 8,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTiGx1",
        "current_parent": "bTgpN2",
        "default_name": "Text NZ",
        "style": "Text_inter___400___16px___neutral_copy_"
      },
      "bTiHh1": {
        "properties": {
          "height": 40,
          "left": 0,
          "top": 0,
          "width": 40,
          "zindex": 4,
          "AAd": {
            "entries": {
              "0": "copy_share_link"
            },
            "type": "TextExpression"
          },
          "AAo": {
            "entries": {
              "0": {
                "type": "Empty"
              }
            },
            "type": "TextExpression"
          },
          "order": 7,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "1497473108162x748255442121523200-AAC",
        "id": "bTgsJ2",
        "default_name": "Aircopytoclipboard A",
        "name": "Aircopytoclipboard Share Link"
      },
      "bTiTo1": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 7,
          "border_roundness": 20,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.chat",
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
          "order": 1,
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
                "name": "share_access_boolean",
                "is_slidable": false
              },
              "type": "ElementParent",
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
        "id": "bTiTF1",
        "default_name": "Group XZZZ",
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
                            "0": "#acacad"
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
                    "name": "share_access_boolean",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "rgba(255,255,255,1)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTiTp1",
            "default_name": "Group YZZZ",
            "name": "Group Share toggle",
            "style": "Group_transparent_",
            "transitions": {
              "margin_left": {
                "fn": "ease",
                "duration": 300
              }
            }
          }
        },
        "name": "G Share Button",
        "style": "Group_transparent_",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 300
          }
        }
      }
    },
    "name": "Group Share",
    "style": "Group_transparent_"
  }
};
