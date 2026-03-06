export const Element_Copy_Simple_Text = {
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
        "param_id": "bTMSM0",
        "param_name": "from_canvas?",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTcgY0",
        "param_name": "user_message?",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 16,
    "min_height_px": 16,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTKWz0",
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
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
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
      "id": "bTKXB0",
      "current_parent": "bTKWz0",
      "default_name": "Group A",
      "elements": {
        "bTlgB2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 240,
            "zindex": 4,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765467132485x312024839742882600/Copy.svg"
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
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765467166996x845714072305457900/Copy-1.svg"
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
                  "name": "param_bTMSM0",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765467184801x755001476510852600/Copy-1.svg"
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
                  "name": "custom.copied__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765467211185x587274583729739500/Checkmark%20%282%29.svg"
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
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTlfz2",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        },
        "bTwJT2": {
          "properties": {
            "height": 240,
            "left": -110,
            "top": -30,
            "width": 240,
            "zindex": 5,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212907691x122465505636181860/Copy.svg"
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
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212913987x559414418243952450/Copy-1.svg"
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
                  "name": "param_bTMSM0",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212918274x807877208219218700/Copy-1.svg"
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
                  "name": "custom.copied__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKWz0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212924231x443488801079501500/Checkmark%20%282%29%20%281%29%201.svg"
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
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTwJR2",
          "current_parent": "bTKXB0",
          "default_name": "Image B",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Copy"
    },
    "bTnRK1": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 15,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "rgba(var(--color_surface_default_rgb), 0)",
        "order": 18,
        "reference": "bTKXB0",
        "fit_height": true,
        "offset_top": 8,
        "offset_left": -20,
        "padding_left": 10,
        "single_width": false,
        "max_width_css": "74px",
        "min_width_css": "74px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 580,
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
            "unique_id": {
              "entries": {
                "0": "gfShare"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "GroupFocus",
      "id": "bTnQz1",
      "current_parent": "bTKXB0",
      "default_name": "GroupFocus A",
      "elements": {
        "bTkGZ": {
          "properties": {
            "height": 150,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 16,
            "html": {
              "entries": {
                "0": "<style>\n#gfShare {\n  transform: translateX(100px) translateY(36px) !important;\n}\n</style>\n"
              },
              "type": "TextExpression"
            },
            "vertical_centering": true,
            "order": 2,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ab",
            "collapse_when_hidden": true
          },
          "type": "HTML",
          "id": "bTnRE1",
          "current_parent": "bTiRL1",
          "default_name": "HTML A",
          "name": "HTML Move Share Alert",
          "style": "HTML_default_"
        },
        "bTmQv3": {
          "properties": {
            "height": 14.398400000000002,
            "left": 23.586000000000013,
            "top": 66,
            "width": 296.414,
            "zindex": 2,
            "border_color": "rgba(var(--color_bTkRR4_default_rgb), 0.16)",
            "boxshadow_horizontal": 0,
            "border_roundness": 10,
            "boxshadow_style": "none",
            "boxshadow_vertical": 1,
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
            "order": 4,
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
          "id": "bTnRF1",
          "current_parent": "bTiRL1",
          "default_name": "Group B",
          "elements": {
            "bTlkl2": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Copy"
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
              "id": "bTnRJ1",
              "current_parent": "bTliW2",
              "default_name": "Text A",
              "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "GF Alert copy",
      "style": "GroupFocus_shadow_"
    }
  },
  "name": "[Element] Copy Simple Text",
  "workflows": {
    "bTMFX": {
      "properties": {
        "event_name": "set_state_copied"
      },
      "type": "CustomEvent",
      "id": "bTMFV",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTKWz0",
            "custom_state": "custom.copied__"
          },
          "type": "SetCustomState",
          "id": "bTMFb"
        }
      }
    },
    "bTKXX0": {
      "properties": {
        "element_id": "bTKXB0"
      },
      "type": "ButtonClicked",
      "id": "bTKXL0",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTKWz0",
            "custom_state": "custom.copied__"
          },
          "type": "SetCustomState",
          "id": "bTKXN0"
        },
        "1": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTcgY0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKWz0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "AAg": {
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
                                                              "0": "<h3>"
                                                            },
                                                            "type": "TextExpression"
                                                          },
                                                          "replace": {
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
                                                            "0": "[/h1]"
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
                                                          "0": "[/h2]"
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
                                                        "0": "[h2]"
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
                                                      "0": "[h1]"
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
                                            "0": "<br>"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "replace": {
                                          "entries": {
                                            "0": "\n"
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
                                "properties": {
                                  "find": {
                                    "entries": {
                                      "0": "\\[url=[^\\]]+\\]"
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
                                    "0": "[/url]"
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
                                  "0": "[/ol][/ml]"
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
                                "0": "[/li]"
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
                              "0": "[ml][ol]"
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
                            "0": "[/h1]"
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
                          "0": "[h1]"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "1497473108162x748255442121523200-AAU",
          "id": "bTKXR0"
        },
        "2": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTcgY0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKWz0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "AAg": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "1497473108162x748255442121523200-AAU",
          "id": "bTcgZ0"
        },
        "3": {
          "properties": {
            "delay": 1,
            "custom_event": "bTMFV"
          },
          "type": "ScheduleCustom",
          "id": "bTMFd"
        }
      }
    },
    "bTnRW1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKWz0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnRR1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnQz1"
          },
          "type": "ToggleElement",
          "id": "bTnRX1"
        }
      }
    },
    "bTnRi1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKWz0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnRc1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnQz1"
          },
          "type": "HideElement",
          "id": "bTnRj1"
        }
      }
    }
  },
  "custom_states": {
    "copied__": {
      "display": "copied?",
      "value": "boolean",
      "make_static": true
    }
  }
};
