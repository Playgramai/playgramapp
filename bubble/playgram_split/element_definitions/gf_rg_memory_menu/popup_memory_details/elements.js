export const elements = {
  "bTOhv0": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 16,
      "width": 0,
      "zindex": 21,
      "vertical_centering": true,
      "order": 10,
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
    "id": "bTOux0",
    "default_name": "Group G",
    "elements": {
      "bTOiA0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -16,
          "width": 0,
          "zindex": 13,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 20,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTOvC0",
        "default_name": "Group G",
        "elements": {
          "bTINS": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Memory Details"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 11,
              "order": 1,
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
            "id": "bTOvD0",
            "current_parent": "bTIMu",
            "default_name": "Text D",
            "style": "Text_inter___400___18px___white_"
          },
          "bTvlp1": {
            "properties": {
              "height": 28,
              "left": 0,
              "top": 0,
              "width": 28,
              "zindex": 13,
              "border_color": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#eaecf0"
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
              "border_roundness": 12,
              "vertical_centering": true,
              "border_style": "solid",
              "order": 3,
              "fit_width": true,
              "unique_id": {
                "entries": {
                  "0": "btn-close-memory-details"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": true,
              "min_width_css": "32px",
              "single_height": true,
              "min_height_css": "32px",
              "vert_alignment": "flex-start",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
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
                  "border_color": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "#707072"
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
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTvlj1",
            "current_parent": "bTOvC0",
            "default_name": "Group H",
            "elements": {
              "bTnqB": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 1,
                  "icon": "feather x",
                  "icon_color": "var(--color_bTkRL4_default)",
                  "vertical_centering": true,
                  "order": 3,
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "26px",
                  "single_height": true,
                  "min_height_css": "26px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 560,
                        "type": "Message",
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKdH0",
                        "name": "Current Page Width"
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
                      "icon_color": "var(--color_bTkRX4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTvll1",
                "default_name": "Icon G",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group Close Dtails Project",
            "style": "Group_transparent_",
            "transitions": {
              "border_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Header",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Header/Chat name",
    "style": "Group_transparent_"
  },
  "bTOll0": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 80.796875,
      "width": 0,
      "zindex": 25,
      "vertical_centering": true,
      "order": 12,
      "row_gap": 8,
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
    "id": "bTOvI0",
    "default_name": "Group G",
    "elements": {
      "bTOlp0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -80.796875,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTOvJ0",
        "default_name": "Group G",
        "elements": {
          "bTOlY0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "User message"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -80.796875,
              "width": 100,
              "zindex": 22,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOvN0",
            "default_name": "Text D",
            "style": "Text_inter___400___14px___white_"
          },
          "bTOlZ0": {
            "properties": {
              "height": 30,
              "left": -16,
              "top": -80.796875,
              "width": 30,
              "zindex": 23,
              "icon": "feather user",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "15px",
              "single_height": true,
              "min_height_css": "15px",
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
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "icon_color": "var(--color_bTsrq2_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTOvO0",
            "default_name": "Icon D"
          }
        },
        "name": "Group Label",
        "style": "Group_transparent_"
      },
      "bTOmJ0": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 25,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_roundness": 8,
          "vertical_centering": true,
          "border_style": "solid",
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "padding_top": 16,
          "padding_left": 16,
          "single_width": false,
          "padding_right": 16,
          "single_height": false,
          "max_height_css": "150px",
          "padding_bottom": 16,
          "horiz_alignment": "flex-start",
          "overflow_scroll": true,
          "container_layout": "column",
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
              "border_color": "var(--color_bTspn2_default)",
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTspn2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTOvP0",
        "default_name": "Group G",
        "elements": {
          "bTOmP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "param_bTOxX0",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOpg0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 52.5,
              "top": 21.203125,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOvT0",
            "default_name": "Text D",
            "style": "Text_inter___400___14px___white_"
          }
        },
        "name": "Group User Message",
        "style": "Group_transparent_"
      }
    },
    "name": "Group User Message",
    "style": "Group_transparent_"
  },
  "bTOmD0": {
    "properties": {
      "height": 0,
      "left": 26,
      "top": 90.796875,
      "width": 0,
      "zindex": 25,
      "is_visible": false,
      "vertical_centering": true,
      "order": 13,
      "row_gap": 8,
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
            "name": "param_bTOxY0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpg0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTOvU0",
    "current_parent": "bTOej0",
    "default_name": "Group G",
    "elements": {
      "bTOlp0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -80.796875,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTOvV0",
        "default_name": "Group G",
        "elements": {
          "bTOlY0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Assistant reply"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -80.796875,
              "width": 100,
              "zindex": 22,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOvZ0",
            "default_name": "Text D",
            "style": "Text_inter___400___14px___white_"
          },
          "bTOlZ0": {
            "properties": {
              "height": 30,
              "left": -16,
              "top": -80.796875,
              "width": 30,
              "zindex": 23,
              "icon": "feather settings",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "15px",
              "single_height": true,
              "min_height_css": "15px",
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
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "icon_color": "var(--color_bTsrq2_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTOva0",
            "default_name": "Icon D"
          }
        },
        "name": "Group Label",
        "style": "Group_transparent_"
      },
      "bTOmZ0": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 25,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_roundness": 8,
          "vertical_centering": true,
          "border_style": "solid",
          "order": 3,
          "fit_width": false,
          "fit_height": true,
          "padding_top": 16,
          "padding_left": 16,
          "single_width": false,
          "padding_right": 16,
          "single_height": false,
          "max_height_css": "150px",
          "padding_bottom": 16,
          "horiz_alignment": "flex-start",
          "overflow_scroll": true,
          "container_layout": "column",
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
              "border_color": "var(--color_bTspn2_default)",
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTspn2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTOvb0",
        "current_parent": "bTOlr0",
        "default_name": "Group G",
        "elements": {
          "bTOmP0": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "next": {
                                                        "next": {
                                                          "next": {
                                                            "next": {
                                                              "next": {
                                                                "next": {
                                                                  "next": {
                                                                    "next": {
                                                                      "properties": {
                                                                        "find": {
                                                                          "entries": {
                                                                            "0": "</h3>"
                                                                          },
                                                                          "type": "TextExpression"
                                                                        }
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "find_replace",
                                                                      "is_slidable": true
                                                                    },
                                                                    "properties": {
                                                                      "find": {
                                                                        "entries": {
                                                                          "0": "<h3>"
                                                                        },
                                                                        "type": "TextExpression"
                                                                      }
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "find_replace",
                                                                    "is_slidable": true
                                                                  },
                                                                  "properties": {
                                                                    "find": {
                                                                      "entries": {
                                                                        "0": "</p>"
                                                                      },
                                                                      "type": "TextExpression"
                                                                    }
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "find_replace",
                                                                  "is_slidable": true
                                                                },
                                                                "properties": {
                                                                  "find": {
                                                                    "entries": {
                                                                      "0": "<p>"
                                                                    },
                                                                    "type": "TextExpression"
                                                                  }
                                                                },
                                                                "type": "Message",
                                                                "name": "find_replace",
                                                                "is_slidable": true
                                                              },
                                                              "properties": {
                                                                "find": {
                                                                  "entries": {
                                                                    "0": "<li>"
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "find_replace",
                                                              "is_slidable": true
                                                            },
                                                            "properties": {
                                                              "find": {
                                                                "entries": {
                                                                  "0": "</li>"
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "properties": {
                                                            "find": {
                                                              "entries": {
                                                                "0": "</ul>"
                                                              },
                                                              "type": "TextExpression"
                                                            }
                                                          },
                                                          "type": "Message",
                                                          "name": "find_replace",
                                                          "is_slidable": true
                                                        },
                                                        "properties": {
                                                          "find": {
                                                            "entries": {
                                                              "0": "<ul>"
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "Message",
                                                        "name": "find_replace",
                                                        "is_slidable": true
                                                      },
                                                      "properties": {
                                                        "find": {
                                                          "entries": {
                                                            "0": "</ol></ml>"
                                                          },
                                                          "type": "TextExpression"
                                                        }
                                                      },
                                                      "type": "Message",
                                                      "name": "find_replace",
                                                      "is_slidable": true
                                                    },
                                                    "properties": {
                                                      "find": {
                                                        "entries": {
                                                          "0": "</li>"
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "find_replace",
                                                    "is_slidable": true
                                                  },
                                                  "properties": {
                                                    "find": {
                                                      "entries": {
                                                        "0": "<li indent=0 align=left>"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "find_replace",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "find": {
                                                    "entries": {
                                                      "0": "<ml><ol>"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "find_replace",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "find": {
                                                  "entries": {
                                                    "0": "</a>"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "find_replace",
                                              "is_slidable": true
                                            },
                                            "properties": {
                                              "find": {
                                                "entries": {
                                                  "0": "<a\\s+href=\"[^\"]+\">"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "use_regex": true
                                            },
                                            "type": "Message",
                                            "name": "find_replace",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "find": {
                                              "entries": {
                                                "0": "</b>"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "find_replace",
                                          "is_slidable": true
                                        },
                                        "properties": {
                                          "find": {
                                            "entries": {
                                              "0": "<b>"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "find_replace",
                                        "is_slidable": true
                                      },
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": "</i>"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "find": {
                                        "entries": {
                                          "0": "<i>"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "find_replace",
                                    "is_slidable": true
                                  },
                                  "properties": {
                                    "find": {
                                      "entries": {
                                        "0": "</h1>"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "find_replace",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "find": {
                                    "entries": {
                                      "0": "<h1>"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "find_replace",
                                "is_slidable": true
                              },
                              "properties": {
                                "find": {
                                  "entries": {
                                    "0": "</div>"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
                            },
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": "<div id=\"canvas\">"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "&gt;"
                              },
                              "type": "TextExpression"
                            },
                            "replace": {
                              "entries": {
                                "0": ">"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "&lt;"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": "<"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "param_bTOxY0",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTOpg0"
                    },
                    "type": "GetElement",
                    "is_slidable": false,
                    "moved_to_top": true
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 52.5,
              "top": 21.203125,
              "width": 100,
              "zindex": 2,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTOvf0",
            "default_name": "Text D",
            "style": "Text_inter___400___14px___white_"
          }
        },
        "name": "Group Assistant Reply",
        "style": "Group_transparent_"
      }
    },
    "name": "Group LLM Message",
    "style": "Group_transparent_"
  },
  "bTjvf0": {
    "properties": {
      "height": 0,
      "left": 26,
      "top": 90.796875,
      "width": 0,
      "zindex": 25,
      "is_visible": false,
      "vertical_centering": true,
      "order": 15,
      "row_gap": 8,
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
            "name": "param_bTjsb0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpg0"
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
    "id": "bTjvP0",
    "current_parent": "bTOuv0",
    "default_name": "Group E",
    "elements": {
      "bTOlp0": {
        "properties": {
          "height": 0,
          "left": -16,
          "top": -80.796875,
          "width": 0,
          "zindex": 24,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTjvU0",
        "default_name": "Group E",
        "elements": {
          "bTOlY0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Attached file"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -80.796875,
              "width": 100,
              "zindex": 22,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTjvV0",
            "default_name": "Text E",
            "style": "Text_inter___400___14px___white_"
          },
          "bTOlZ0": {
            "properties": {
              "height": 30,
              "left": -16,
              "top": -80.796875,
              "width": 30,
              "zindex": 23,
              "icon": "feather paperclip",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "15px",
              "single_height": true,
              "min_height_css": "15px",
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
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "properties": {
                  "icon_color": "var(--color_bTsrq2_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTjvZ0",
            "default_name": "Icon C"
          }
        },
        "name": "Group Label",
        "style": "Group_transparent_"
      },
      "bTjvr0": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 2,
          "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
          "border_roundness": 14,
          "data_source": {
            "next": {
              "type": "Message",
              "name": "param_bTjsb0",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTOpg0"
            },
            "type": "GetElement",
            "is_slidable": false,
            "moved_to_top": true
          },
          "group_type": "text",
          "is_visible": true,
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_style": "solid",
          "order": 3,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 10,
          "fit_height": true,
          "padding_top": 10,
          "padding_left": 15,
          "single_width": false,
          "padding_right": 15,
          "single_height": false,
          "min_height_css": "40px",
          "padding_bottom": 10,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "nonant_alignment": "aa",
          "collapse_animation": true,
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
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
              "border_color": "var(--color_bTspn2_default)",
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTspn2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTjrx0",
        "current_parent": "bTOuv0",
        "default_name": "Group D",
        "elements": {
          "bTPMp": {
            "properties": {
              "height": 0,
              "left": 8,
              "top": 38,
              "width": 0,
              "zindex": 4,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "text",
              "vertical_centering": true,
              "order": 3,
              "row_gap": 4,
              "use_gap": true,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTjsC0",
            "default_name": "Group D",
            "elements": {
              "bTPMq": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "find": {
                                  "entries": {
                                    "0": "_(\\d+)(?=\\.[^.]+$)"
                                  },
                                  "type": "TextExpression"
                                },
                                "use_regex": true
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "last_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
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
                  "top": -38,
                  "width": 100,
                  "zindex": 2,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTjsD0",
                "default_name": "Text C",
                "style": "Text_inter___400___14px___white_"
              },
              "bTPMr": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": {
                        "next": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "to_uppercase",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "last_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "."
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -8,
                  "top": -38,
                  "width": 100,
                  "zindex": 2,
                  "order": 2,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTjsH0",
                "current_parent": "bTPMB",
                "default_name": "Text C",
                "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
              }
            },
            "style": "Group_transparent_"
          },
          "bTUJR0": {
            "properties": {
              "height": 240,
              "left": 41.09375,
              "top": 32.203125,
              "width": 320,
              "zindex": 5,
              "src": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "icon",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "last_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "."
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "split_by",
                                      "is_slidable": true
                                    },
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "constraint_type": {
                              "type": "Empty"
                            }
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "properties": {
                      "option_set": "option.file_types__os_",
                      "option_value": "all values"
                    },
                    "type": "OptionValue"
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "28px",
              "single_height": true,
              "min_height_css": "32px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "use_aspect_ratio": false,
              "collapse_when_hidden": true
            },
            "type": "Image",
            "id": "bTjsI0",
            "default_name": "Image A",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group Attached File User Message"
      }
    },
    "name": "Group Attached File",
    "style": "Group_transparent_"
  }
};
