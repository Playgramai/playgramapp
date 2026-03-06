export const Date = {
  "elements": {
    "bTKXH0": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 44,
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "none",
        "order": 1,
        "unique_id": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "param_bTYSv",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTYRt"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "horiz_alignment": "center",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
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
                          "0": "#acacad1a"
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
        }
      },
      "type": "Group",
      "id": "bTYRv",
      "current_parent": "bTKWz0",
      "default_name": "Group A",
      "elements": {
        "bTYSS": {
          "properties": {
            "height": 2,
            "left": 0,
            "top": 0,
            "width": 2,
            "zindex": 6,
            "is_visible": false,
            "AAD": {
              "type": "TextExpression"
            },
            "AAE": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "AAG": "right top",
            "AAH": "bottom left",
            "AAI": "dark",
            "AAK": true,
            "AAN": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTYSv",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTYRt"
                  },
                  "type": "GetElement",
                  "is_slidable": false,
                  "moved_to_top": true
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "AAe": false,
            "ABS": true,
            "ABT": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
            "ABU": "rgba(var(--color_primary_contrast_default_rgb), 0)",
            "ABV": "var(--color_bTkRL4_default)",
            "ABZ": {
              "entries": {
                "0": "12"
              },
              "type": "TextExpression"
            },
            "ABa": {
              "entries": {
                "0": "Inter"
              },
              "type": "TextExpression"
            },
            "ABk": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "ABl": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "ABm": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "ABn": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "ABo": {
              "entries": {
                "0": "6"
              },
              "type": "TextExpression"
            },
            "ABp": {
              "entries": {
                "0": "0"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "5px",
            "single_height": true,
            "min_height_css": "3px",
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
                  "name": "param_bTYST",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTYRt"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "AAG": "left top",
                "AAH": "bottom right"
              },
              "type": "State"
            }
          },
          "type": "1498171554228x105618760361836540-AAC",
          "id": "bTYSN",
          "current_parent": "bTYRv",
          "default_name": "Airtooltip A",
          "name": "Airtooltip Message Date"
        },
        "bTlfv2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 240,
            "zindex": 4,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765465823414x171586135809550720/Event--schedule.svg"
              },
              "type": "TextExpression"
            },
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
                  "element_id": "bTYRt"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765465840192x765189022280035700/Event--schedule-1.svg"
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
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212391554x138157141392935220/Event--schedule.svg"
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
                  "element_id": "bTYRt"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212403618x167354401594107300/Event--schedule-1.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTlft2",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Main"
    },
    "bTmRI3": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 45,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "reference": "bTYRv",
        "fit_height": true,
        "offset_top": 10,
        "offset_left": -90,
        "padding_left": 10,
        "single_width": false,
        "max_width_css": "210px",
        "min_width_css": "60px",
        "padding_right": 10,
        "single_height": false,
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "GroupFocus",
      "id": "bTmQx3",
      "current_parent": "bTYRv",
      "default_name": "GroupFocus A",
      "elements": {
        "bTlkh2": {
          "properties": {
            "height": 14.398400000000002,
            "left": -96.41399999999999,
            "top": 26,
            "width": 296.414,
            "zindex": 2,
            "border_color": "rgba(var(--color_bTkRR4_default_rgb), 0.16)",
            "boxshadow_horizontal": 0,
            "border_roundness": 10,
            "boxshadow_style": "none",
            "boxshadow_vertical": 1,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "text",
            "vertical_centering": true,
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
                          "0": "#252627"
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
            "boxshadow_blur": 10,
            "boxshadow_color": "rgba(var(--color_bTkRR4_default_rgb), 0.12)",
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "padding_top": 6,
            "padding_left": 10,
            "single_width": false,
            "min_width_css": "40px",
            "padding_right": 10,
            "single_height": false,
            "min_height_css": "32px",
            "padding_bottom": 6,
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTmRD3",
          "default_name": "Group B",
          "elements": {
            "bTlkl2": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -10,
                "top": -26,
                "width": 100,
                "zindex": 1,
                "is_visible": true,
                "order": 4,
                "fit_width": true,
                "fit_height": true,
                "margin_top": 0,
                "single_width": false,
                "max_width_css": "400px",
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "type": "Text",
              "id": "bTmRH3",
              "current_parent": "bTliW2",
              "default_name": "Text A",
              "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "GF Tooltip date",
      "style": "GroupFocus_shadow_"
    }
  },
  "workflows": {
    "bTmRV3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTYRt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTmRP3",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTmQx3"
          },
          "type": "ShowElement",
          "id": "bTvKd0"
        }
      }
    },
    "bTmRf3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTYRt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTmRZ3",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTmQx3"
          },
          "type": "HideElement",
          "id": "bTmRb3"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "text",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTYST",
        "param_name": "right-aligned",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTYSv",
        "param_name": "id",
        "editor_type": "DynamicValue"
      }
    },
    "max_width_px": 16,
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 16,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTYRt",
  "name": "Date"
};
