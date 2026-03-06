export const elements = {
  "bTmTH1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": -76,
      "width": 0,
      "zindex": 13,
      "border_color": "rgba(42,42,45,1)",
      "border_roundness": 12,
      "data_source": {
        "next": {
          "next": {
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "group_type": "custom.organization",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
      "border_style": "none",
      "order": 1,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 6,
      "fit_height": true,
      "padding_top": 8,
      "padding_left": 8,
      "single_width": false,
      "padding_right": 8,
      "single_height": false,
      "min_height_css": "44px",
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
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "rgba(128,189,203,0.06)"
        },
        "type": "State"
      },
      "1": {
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
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTPuN"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "rgba(128,189,203,0.06)"
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
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTsrr2_default)"
        },
        "type": "State"
      },
      "3": {
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
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTPuN"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTsrr2_default)"
        },
        "type": "State"
      },
      "4": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.open__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTHoP"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      },
      "5": {
        "condition": {
          "next": {
            "args": 768,
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.expand_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTHoP"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
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
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTPuB",
    "current_parent": "bTHon",
    "default_name": "Group L",
    "elements": {
      "bTHrR": {
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
              }
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -441.5546875,
          "top": -12,
          "width": 100,
          "zindex": 11,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "max_width_css": "110px",
          "single_height": false,
          "max_height_css": "25px",
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTPuH",
        "default_name": "Text D",
        "name": "Text LLM Model",
        "style": "Text_inter___400___14px___white_"
      },
      "bTPvv": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 14,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.organization",
          "vertical_centering": true,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPvt",
        "default_name": "Group TZ",
        "elements": {
          "bTPvz": {
            "properties": {
              "height": 240,
              "left": -48,
              "top": -8,
              "width": 320,
              "zindex": 13,
              "stretch_or_rescale": "zoom",
              "border_roundness": 20,
              "is_visible": true,
              "src": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "28px",
              "single_height": false,
              "min_height_css": "240px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "use_aspect_ratio": true,
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
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764946152433x519895553614016640/Avatar.svg"
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
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769003645100x768350042999043700/Avatar%20%283%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTPvQ",
            "default_name": "Image B",
            "name": "Image B",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group Organization Logos",
        "style": "Group_transparent_"
      },
      "bTQVH0": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 15,
          "border_roundness": 10,
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "var(--color_destructive_default)",
          "order": 5,
          "fit_width": true,
          "fit_height": true,
          "margin_left": 8,
          "padding_top": 2,
          "margin_right": 4,
          "padding_left": 2,
          "single_width": false,
          "min_width_css": "18px",
          "padding_right": 2,
          "single_height": false,
          "min_height_css": "18px",
          "padding_bottom": 2,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true,
          "container_vert_alignment": "center"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
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
                            "name": "seen_notifications__boolean",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
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
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTQVC0",
        "default_name": "Group VZ",
        "elements": {
          "bTQVN0": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "count",
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
                  "1": ""
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 48,
              "top": 24,
              "width": 100,
              "zindex": 2,
              "font_color": "var(--color_primary_contrast_default)",
              "font_size": 12,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "20px",
              "min_width_css": "0px",
              "single_height": false,
              "max_height_css": "20px",
              "min_height_css": "0px",
              "horiz_alignment": "center",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTQVI0",
            "default_name": "Text X"
          }
        },
        "name": "Group Invitations Indicator"
      },
      "bTgwF0": {
        "properties": {
          "height": 30,
          "left": 170,
          "top": 12,
          "width": 30,
          "zindex": 16,
          "icon": "ionic outline chevron-down",
          "border_color": "var(--color_bTGzp_default)",
          "border_roundness": 20,
          "icon_color": "var(--color_primary_contrast_default)",
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTGzr_default)",
          "border_style": "solid",
          "order": 7,
          "fit_height": false,
          "margin_top": -12,
          "margin_left": 20,
          "padding_top": 2,
          "margin_right": 0,
          "padding_left": 2,
          "single_width": true,
          "margin_bottom": 0,
          "min_width_css": "14px",
          "padding_right": 2,
          "single_height": true,
          "min_height_css": "14px",
          "padding_bottom": 2,
          "vert_alignment": "flex-end",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTgwD0",
        "default_name": "Icon AZ",
        "name": "Icon ionic outline chevro",
        "style": "Icon_standard_icon_"
      },
      "bTkZD2": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 30,
          "zindex": 2,
          "icon": "phosphor bold caret-down",
          "icon_color": "var(--color_bTkRR4_default)",
          "is_visible": true,
          "vertical_centering": true,
          "order": 8,
          "fit_height": false,
          "padding_top": 3,
          "padding_left": 3,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 3,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 3,
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
                "element_id": "bTPuN"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "icon": "phosphor bold caret-up"
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "icon_color": "var(--color_bTsrp2_default)"
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTkZB2",
        "current_parent": "bTPuB",
        "default_name": "Icon O"
      }
    },
    "name": "Group Organization",
    "style": "Group_transparent_"
  },
  "bTmTL1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": -76,
      "width": 0,
      "zindex": 3,
      "border_roundness": 10,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(255,255,255,0)",
      "order": 2,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": "collapseExpand"
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
            "args": 768,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTHoP",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "unique_id": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTHpr",
    "default_name": "Group C",
    "elements": {
      "bToNF": {
        "properties": {
          "height": 2,
          "left": 0,
          "top": 0,
          "width": 2,
          "zindex": 7,
          "AAD": {
            "entries": {
              "0": "collapseExpand"
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
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "Collapse sidebar"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "Expand sidebar"
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
                  "name": "custom.open__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTHoP"
                },
                "type": "GetElement",
                "is_slidable": false,
                "moved_to_top": true
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "AAG": "top left",
          "AAH": "bottom right",
          "AAI": "dark",
          "AAK": true,
          "AAN": {
            "entries": {
              "0": "collapseExpand"
            },
            "type": "TextExpression"
          },
          "AAe": false,
          "ABS": true,
          "ABT": {
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
          "ABU": "var(--color_primary_contrast_default)",
          "ABV": {
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
          "ABZ": {
            "entries": {
              "0": "14"
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
          "order": 2,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "5px",
          "single_height": true,
          "min_height_css": "3px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
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
                "element_id": "bTHoP",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          }
        },
        "type": "1498171554228x105618760361836540-AAC",
        "id": "bToND",
        "current_parent": "bTHpr",
        "default_name": "Airtooltip D",
        "name": "Airtooltip Expand/Collapse Sidebar"
      },
      "bTtMj2": {
        "properties": {
          "height": 28,
          "left": 0,
          "top": 0,
          "width": 28,
          "zindex": 6,
          "vertical_centering": true,
          "fit_width": false,
          "fit_height": false,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTtMe2",
        "default_name": "Group MZZ",
        "elements": {
          "bTtMk2": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 2,
              "is_visible": false,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387796835x613954137136434000/Frame%201%20%281%29%201.svg"
                },
                "type": "TextExpression"
              },
              "order": 1,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "28px",
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
                      "name": "is_false",
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
                          "next": {
                            "type": "Message",
                            "name": "isnt_hovered",
                            "is_slidable": false
                          },
                          "type": "ThisElement",
                          "is_slidable": false
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
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387812852x834432874195267600/Icon%20Wrap%201%20%281%29%201.svg"
                    },
                    "type": "TextExpression"
                  },
                  "margin_left": 4
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
                          "type": "ThisElement",
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
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387822062x742616714135989400/Frame%201%207%201.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              },
              "3": {
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
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387830786x342125153110829400/Icon%20Wrap%201%201%201.svg"
                    },
                    "type": "TextExpression"
                  },
                  "margin_left": 4
                },
                "type": "State"
              },
              "4": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "args": 768,
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
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.expand_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387812852x834432874195267600/Icon%20Wrap%201%20%281%29%201.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTkgD2",
            "default_name": "Image L",
            "name": "Image wrap",
            "style": "Image_standard_image_"
          },
          "bTtMl2": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 1,
              "is_visible": false,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769005445366x684615108651710500/Frame%201%20%281%29%201.svg"
                },
                "type": "TextExpression"
              },
              "order": 1,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "28px",
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
                  "said": "a2Vsdm8tMzE4ODQ=",
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
                          "next": {
                            "type": "Message",
                            "name": "isnt_hovered",
                            "is_slidable": false
                          },
                          "type": "ThisElement",
                          "is_slidable": false
                        },
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
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004827920x661032460336928900/Icon%20Wrap%201%20%281%29%201.svg"
                    },
                    "type": "TextExpression"
                  },
                  "margin_left": 4
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
                          "type": "ThisElement",
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
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004855581x597205822309974100/Frame%201%207%201.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              },
              "3": {
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
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.open__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004872383x606393955801750700/Icon%20Wrap%201%201%201.svg"
                    },
                    "type": "TextExpression"
                  },
                  "margin_left": 4
                },
                "type": "State"
              },
              "4": {
                "condition": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "args": 768,
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
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.expand_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004952006x505898945741580800/Icon%20Wrap%201%20%281%29%201.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTtMY2",
            "current_parent": "bTHpr",
            "default_name": "Image AZ",
            "name": "Image wrap light mode",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group wrap image",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Show/Hide",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  }
};
