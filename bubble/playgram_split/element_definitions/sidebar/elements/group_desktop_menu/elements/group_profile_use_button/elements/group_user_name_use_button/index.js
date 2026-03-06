export const group_user_name_use_button = {
  "properties": {
    "height": 280,
    "left": -8,
    "top": -12,
    "width": 280,
    "zindex": 3,
    "border_roundness": 10,
    "vertical_centering": true,
    "order": 2,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "1": {
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
        "padding_left": 4,
        "padding_right": 4,
        "horiz_alignment": "center",
        "container_horiz_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTIdy",
  "default_name": "Group V",
  "elements": {
    "bTIeX": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 3,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "border_roundness": 40,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(32,33,35,1)",
        "border_style": "solid",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "32px",
        "single_height": true,
        "min_height_css": "32px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
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
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "border_color": "rgba(174,174,200,0.08)",
            "bgcolor": "rgba(174,174,200,0.18)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTIeV",
      "default_name": "Group W",
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
                        "next": {
                          "type": "Message",
                          "name": "to_uppercase",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "truncated",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
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
            "zindex": 3,
            "font_color": "var(--color_bToSr_default)",
            "font_size": 14,
            "line_height": 1.4,
            "vertical_centering": true,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "23px",
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "23px",
            "horiz_alignment": "center",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
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
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTIeP",
          "default_name": "Text B",
          "name": "Text [center]Current User"
        },
        "bTnvR2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 320,
            "zindex": 2,
            "stretch_or_rescale": "zoom",
            "border_roundness": 20,
            "is_visible": false,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "image_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "240px",
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
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
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
          "type": "Image",
          "id": "bTnvJ2",
          "default_name": "Image X",
          "name": "Image User Workspace",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Avatar"
    },
    "bTIfS": {
      "properties": {
        "height": 0,
        "left": 48,
        "top": 8,
        "width": 0,
        "zindex": 4,
        "vertical_centering": true,
        "order": 4,
        "row_gap": 2,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
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
        }
      },
      "type": "Group",
      "id": "bTIfN",
      "default_name": "Group Z",
      "elements": {
        "bTIfT": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "name_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "current_workspace_custom_workspace",
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
            "left": -48,
            "top": -8,
            "width": 100,
            "zindex": 3,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Levon",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": "index-color-test",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "name": "Current Page Name"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "font_color": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "font",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTcEP",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHoP"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTIec",
          "default_name": "Text M",
          "style": "Text_inter___400___16px___neutral_copy_"
        },
        "bTIfX": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "subscription_plan_option_subscription_plan",
                        "is_slidable": false
                      },
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
                "2": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -48,
            "top": -8,
            "width": 100,
            "zindex": 3,
            "font_color": "var(--color_bTkRX4_default)",
            "font_size": 12,
            "line_height": 1.2,
            "vertical_centering": true,
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Free",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
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
          "id": "bTIfH",
          "current_parent": "bTIdy",
          "default_name": "Text N"
        }
      },
      "name": "Group Name/Tier",
      "style": "Group_transparent_"
    },
    "bTkYf2": {
      "properties": {
        "height": 240,
        "left": -120,
        "top": -40,
        "width": 240,
        "zindex": 5,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764869078151x824457626423263000/Settings.svg"
          },
          "type": "TextExpression"
        },
        "order": 5,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "22px",
        "single_height": true,
        "min_height_css": "22px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
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
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIgg"
                    },
                    "type": "GetElement",
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
                                "name": "is_hovered",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTIfA"
                              },
                              "type": "GetElement",
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
                    "type": "Message",
                    "name": "or_",
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766490109641x340954241503739460/Settings%20%282%29.svg"
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766490109641x340954241503739460/Settings%20%282%29.svg"
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
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIgg"
                    },
                    "type": "GetElement",
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
                                "name": "is_hovered",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTIfA"
                              },
                              "type": "GetElement",
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
                        "name": "dark_mode_boolean",
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
                  "name": "and_",
                  "is_slidable": false
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
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769006223459x733270458468230400/Settings%20%282%29%20%281%29%201.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTkYd2",
      "default_name": "Image J",
      "name": "Image profile settings",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group User Name (use button)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
