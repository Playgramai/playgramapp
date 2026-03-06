export const group_organization = {
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
  "style": "Group_transparent_",
};
