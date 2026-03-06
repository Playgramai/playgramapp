import { Group_Project_Chats_Collapsible } from './group_project_chats_collapsible/index.js';

export const elements = {
  "bTNLr0": Group_Project_Chats_Collapsible,
  "bTIJX0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 4,
      "border_roundness": 0,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "custom.project",
      "vertical_centering": true,
      "order": 2,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 4,
      "fit_height": true,
      "margin_left": 16,
      "padding_left": 16,
      "single_width": false,
      "padding_right": 6,
      "single_height": false,
      "max_height_css": "36px",
      "min_height_css": "36px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "border_color_left": {
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
                    "0": "#2a2a2d"
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
      "border_style_left": "solid",
      "four_border_style": true,
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
    },
    "states": {
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
          "border_color_left": "var(--color_bTkRR4_default)"
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "properties": {
                  "value": "custom.chat",
                  "parameter_name": {
                    "entries": {
                      "0": "chat"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl"
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "custom.project",
            "type": "parameter",
            "parameter_name": {
              "entries": {
                "0": "project"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "properties": {
          "border_color_left": "var(--color_bTkRR4_default)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTIJR0",
    "current_parent": "bTIJL0",
    "default_name": "Group H",
    "elements": {
      "bTJVk": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 4,
          "border_roundness": 10,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.project",
          "vertical_centering": true,
          "order": 5,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 8,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "20px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
        },
        "type": "Group",
        "id": "bTJVY",
        "current_parent": "bTIJR0",
        "default_name": "Group HZZ",
        "elements": {
          "bTHpX": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "name_text",
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
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "is_visible": true,
              "order": 5,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": true,
              "max_height_css": "17px",
              "min_height_css": "18px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_focused",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJVj"
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
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "properties": {
                          "value": "custom.chat",
                          "parameter_name": {
                            "entries": {
                              "0": "chat"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "GetParamFromUrl"
                      },
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
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "value": "custom.project",
                    "parameter_name": {
                      "entries": {
                        "0": "project"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl"
                },
                "properties": {
                  "font_color": "var(--color_bTkRP4_default)"
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
                            "type": "Message",
                            "name": "is_hovered",
                            "is_slidable": false
                          },
                          "type": "ThisElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
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
                "properties": {
                  "font_color": "var(--color_bTkRP4_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTJVd",
            "default_name": "Text GZ",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          },
          "bTIqp0": {
            "properties": {
              "font_face": "var(--font_default):::400",
              "height": 48,
              "left": -50,
              "top": 12.8125,
              "width": 250,
              "zindex": 18,
              "mandatory": true,
              "border_color": "var(--color_bTHBV_default)",
              "border_roundness": 0,
              "border_width": 2,
              "content": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "text_so_far",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIWL"
                    },
                    "type": "GetElement",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "font_color": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#121213"
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
              "font_size": 14,
              "is_visible": true,
              "letter_spacing": 0,
              "vertical_centering": true,
              "background_style": "none",
              "border_style": "none",
              "order": 4,
              "disabled": false,
              "unique_id": {
                "entries": {
                  "0": "input",
                  "1": {
                    "next": {
                      "next": {
                        "args": 5,
                        "type": "Message",
                        "name": "truncated_right",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "bind_field": "name_text",
              "fit_height": false,
              "font_family": "var(--font_default)",
              "font_weight": "400",
              "padding_top": 0,
              "auto_binding": true,
              "single_width": false,
              "single_height": true,
              "min_height_css": "18px",
              "padding_bottom": 0,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "placeholder_color": "rgba(var(--color_bTHBW_default_rgb), 0)",
              "not_submit_on_enter": true,
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_focused",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              }
            },
            "type": "Input",
            "id": "bTJVj",
            "default_name": "Input G",
            "name": "Input Project Name",
            "transitions": {
              "border_color": {
                "fn": "ease",
                "duration": 200
              },
              "font_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Project Cell",
        "style": "Group_transparent_",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      },
      "bToPB": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 8,
          "border_roundness": 4,
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(217,217,217,0.2)",
          "order": 7,
          "fit_width": true,
          "unique_id": {
            "entries": {
              "0": "createTeamChat"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "single_width": false,
          "min_width_css": "20px",
          "single_height": false,
          "min_height_css": "20px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": false
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
              "bgcolor": "rgba(247,248,249,1)"
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
              "bgcolor": "var(--color_bTkRW4_default)"
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_hovered",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIJR0"
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
        "id": "bToON",
        "current_parent": "bTIJR0",
        "default_name": "Group FZZ",
        "elements": {
          "bTkiP2": {
            "properties": {
              "height": 240,
              "left": -120,
              "top": -40,
              "width": 240,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765210427344x985400163541736800/Pencil%20%281%29.svg"
                },
                "type": "TextExpression"
              },
              "order": 1,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "14px",
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
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769874294698x287912115901699520/Folder%20List%202%20%281%29.svg"
                    },
                    "type": "TextExpression"
                  }
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
                  "properties": {
                    "element_id": "bToON"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765366903630x723559948150347600/Pencil%20%282%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bToOw",
            "default_name": "Image Y",
            "name": "Image add team chat",
            "style": "Image_standard_image_"
          },
          "bTnoz2": {
            "properties": {
              "height": 1,
              "left": 0,
              "top": 0,
              "width": 1,
              "zindex": 4,
              "AAD": {
                "entries": {
                  "0": "createProjectChat"
                },
                "type": "TextExpression"
              },
              "AAE": {
                "entries": {
                  "0": "Create team chat"
                },
                "type": "TextExpression"
              },
              "AAG": "left top",
              "AAH": "right bottom",
              "AAI": "dark",
              "AAK": true,
              "AAN": {
                "entries": {
                  "0": "createProjectChat"
                },
                "type": "TextExpression"
              },
              "AAe": false,
              "ABS": true,
              "ABT": "rgba(37,38,39,1)",
              "ABU": "rgba(37,38,39,1)",
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
              "ABd": 0,
              "ABk": {
                "entries": {
                  "0": "8"
                },
                "type": "TextExpression"
              },
              "ABl": {
                "entries": {
                  "0": "8"
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
                  "0": "10"
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
            "id": "bToOx",
            "current_parent": "bTIfw",
            "default_name": "Airtooltip E",
            "name": "Airtooltip Create Project"
          }
        },
        "name": "Group Create Project Chat"
      },
      "bTNLX0": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 30,
          "zindex": 2,
          "icon": "feather chevron-down",
          "icon_color": "var(--color_bTGzv_default)",
          "is_visible": false,
          "vertical_centering": true,
          "order": 4,
          "fit_height": false,
          "padding_top": 5,
          "padding_left": 5,
          "single_width": true,
          "min_width_css": "24px",
          "padding_right": 5,
          "single_height": true,
          "min_height_css": "24px",
          "padding_bottom": 5,
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
                "element_id": "bTIKM0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "icon": "feather chevron-up"
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTNLS0",
        "current_parent": "bTIJR0",
        "default_name": "Icon U"
      },
      "bTYRb0": {
        "properties": {
          "height": 30,
          "left": 212,
          "top": 9,
          "width": 30,
          "zindex": 3,
          "icon": "feather edit",
          "border_roundness": 20,
          "icon_color": "var(--color_bTGzv_default)",
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(255,255,255,0)",
          "order": 6,
          "fit_height": false,
          "padding_top": 6,
          "padding_left": 6,
          "single_width": true,
          "min_width_css": "26px",
          "padding_right": 6,
          "single_height": true,
          "min_height_css": "26px",
          "padding_bottom": 6,
          "vert_alignment": "center",
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
              "icon_color": "var(--color_primary_contrast_default)",
              "bgcolor": "var(--color_bTGzr_default)"
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": 1024,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTHoP",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_hovered",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIJR0"
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
        "type": "Icon",
        "id": "bTJVe",
        "default_name": "Icon Z",
        "name": "Icon Edit Project"
      }
    },
    "name": "Group Project Cell Container",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
};
