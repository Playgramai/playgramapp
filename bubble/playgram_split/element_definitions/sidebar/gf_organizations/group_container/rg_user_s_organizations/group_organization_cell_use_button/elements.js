export const elements = {
  "bTHuK": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 13,
      "border_roundness": 6,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "custom.organization",
      "vertical_centering": true,
      "order": 2,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 12,
      "fit_height": true,
      "padding_top": 12,
      "padding_left": 8,
      "single_width": false,
      "margin_bottom": 4,
      "padding_right": 8,
      "single_height": false,
      "padding_bottom": 12,
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
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
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
            "name": "is_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTPuZ"
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
                        "0": "#F2F3F5"
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
            "is_slidable": false
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTPub",
    "default_name": "Group RZ",
    "elements": {
      "bTHuL": {
        "properties": {
          "height": 30,
          "width": 30,
          "zindex": 12,
          "icon": "feather check",
          "icon_color": "var(--color_bTkRR4_default)",
          "is_visible": false,
          "vertical_centering": true,
          "order": 3,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "16px",
          "single_height": true,
          "min_height_css": "16px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
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
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTPuf",
        "current_parent": "bTHrb",
        "default_name": "Icon V"
      },
      "bTHuP": {
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
          "left": -8,
          "top": -8,
          "width": 100,
          "zindex": 11,
          "order": 2,
          "fit_width": false,
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
                  "next": {
                    "args": 20,
                    "type": "Message",
                    "name": "greater_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "length",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "args": 20,
                        "type": "Message",
                        "name": "truncated",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "1": "..."
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTPug",
        "current_parent": "bTHrb",
        "default_name": "Text I",
        "style": "Text_inter___400___14px___white_"
      },
      "bTmTY1": {
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
        "id": "bTmTM1",
        "current_parent": "bTPub",
        "default_name": "Group AZZ",
        "elements": {
          "bTPvz": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 320,
              "zindex": 13,
              "stretch_or_rescale": "zoom",
              "border_roundness": 20,
              "is_visible": false,
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
                      "type": "Message",
                      "name": "is_not_empty",
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
                  "is_visible": true
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTmTR1",
            "default_name": "Image P",
            "name": "Image B",
            "style": "Image_standard_image_"
          },
          "bTPwA": {
            "properties": {
              "height": 0,
              "width": 0,
              "zindex": 3,
              "border_roundness": 20,
              "is_visible": false,
              "vertical_centering": true,
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTGzp_default)",
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "28px",
              "single_height": true,
              "min_height_css": "28px",
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
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_organization_custom_organization",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTmTS1",
            "current_parent": "bTPuB",
            "default_name": "Group AZZ",
            "elements": {
              "bTIeb": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "[center]",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "args": 1,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "name_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "current_organization_custom_organization",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "2": "[/center]"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 2,
                  "font_color": "var(--color_primary_contrast_default)",
                  "font_size": 13,
                  "line_height": 1.4,
                  "vertical_centering": true,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "max_width_css": "22px",
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "22px",
                  "horiz_alignment": "center",
                  "collapse_when_hidden": true
                },
                "states": {
                  "bTHqa": {
                    "condition": {
                      "next": {
                        "args": {
                          "properties": {
                            "breakpoint_id": "built-in-mobile"
                          },
                          "type": "Breakpoint",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "less_than",
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
                "id": "bTmTT1",
                "default_name": "Text AZ",
                "name": "Text [center]Current User"
              }
            },
            "name": "Group Avatar"
          },
          "bTkdd2": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 2,
              "width": 240,
              "zindex": 13,
              "stretch_or_rescale": "zoom",
              "border_roundness": 20,
              "is_visible": false,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764946152433x519895553614016640/Avatar.svg"
                },
                "type": "TextExpression"
              },
              "order": 3,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "28px",
              "single_height": false,
              "min_height_css": "240px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
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
                  "is_visible": true
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
            "id": "bTmTX1",
            "current_parent": "bTPvt",
            "default_name": "Image P",
            "name": "Image Avatar",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group Organization Logos",
        "style": "Group_transparent_"
      },
      "bTmTl1": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 15,
          "border_roundness": 12,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.organization",
          "vertical_centering": true,
          "order": 5,
          "fit_width": false,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": true,
          "min_height_css": "32px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
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
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
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
                  "next": {
                    "type": "Message",
                    "name": "owner_user",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
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
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "user_type_option_user_type__os_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "organization_workspace_custom_organization",
                              "value": {
                                "type": "ElementParent",
                                "is_slidable": false
                              },
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
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTPuZ"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
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
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#F7F8F9"
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
              "button_disabled": false
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "owner_user",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
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
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "user_type_option_user_type__os_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "organization_workspace_custom_organization",
                              "value": {
                                "type": "ElementParent",
                                "is_slidable": false
                              },
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
                  "next": {
                    "args": {
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
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
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
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true,
              "background_style": "bgcolor",
              "bgcolor": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#F7F8F9"
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "button_disabled": false
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTmTj1",
        "default_name": "Group BZZ",
        "elements": {
          "bTmTr1": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 1,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765887616859x462944251720718100/Icon%20R%20%281%29.svg"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": true,
              "min_width_css": "16px",
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
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "owner_user",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "user_type_option_user_type__os_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "constraints": {
                                "0": {
                                  "key": "organization_workspace_custom_organization",
                                  "value": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
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
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "is_hovered",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPuZ"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
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
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765887797195x697854564417559200/Icon%20R.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "owner_user",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "user_type_option_user_type__os_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "constraints": {
                                "0": {
                                  "key": "organization_workspace_custom_organization",
                                  "value": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
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
                      "next": {
                        "args": {
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
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
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
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765887817943x502569105800888770/Icon%20R.svg"
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
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTmTp1",
            "default_name": "Image Q",
            "style": "Image_standard_image_"
          },
          "bTtUP3": {
            "properties": {
              "height": 240,
              "left": 10,
              "top": 10,
              "width": 240,
              "zindex": 2,
              "is_visible": false,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769082858533x120946545258681760/Icon%20R%20%288%29.svg"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": true,
              "min_width_css": "16px",
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
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "owner_user",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "user_type_option_user_type__os_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "constraints": {
                                "0": {
                                  "key": "organization_workspace_custom_organization",
                                  "value": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
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
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "is_hovered",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPuZ"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
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
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769082866009x426325470603933440/Icon%20R%20%289%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "owner_user",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
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
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "user_type_option_user_type__os_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "constraints": {
                                "0": {
                                  "key": "organization_workspace_custom_organization",
                                  "value": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
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
                      "next": {
                        "args": {
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
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
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
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769082870322x466654682172545500/Icon%20R%20%289%29.svg"
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
              }
            },
            "type": "Image",
            "id": "bTtUE3",
            "current_parent": "bTmTj1",
            "default_name": "Image BZ",
            "name": "Image light mode",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group choose/settings Workspace (use button)",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Container (Hover)",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  }
};
