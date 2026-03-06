import { Group_Desktop_Menu } from './group_desktop_menu/index.js';
import { GF_Organizations } from './gf_organizations/index.js';

export const elements = {
  "bTiPr": Group_Desktop_Menu,
  "bTPuV": GF_Organizations,
  "bTIgx": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 13,
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_bTGzr_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)",
      "order": 13,
      "reference": "bTIfA",
      "unique_id": {
        "entries": {
          "0": "gfMenuProfile"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "offset_top": -236,
      "offset_left": -8,
      "single_width": false,
      "max_width_css": "246px",
      "min_width_css": "60px",
      "single_height": false,
      "padding_bottom": 0,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTIgg",
    "current_parent": "bTIKk0",
    "default_name": "GroupFocus A",
    "elements": {
      "bTHrd": {
        "properties": {
          "height": 280,
          "left": 101,
          "top": 39,
          "width": 280,
          "zindex": 2,
          "boxshadow_horizontal": 0,
          "border_roundness": 10,
          "boxshadow_style": "outset",
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(42,42,45,1)",
          "boxshadow_blur": 10,
          "boxshadow_color": "rgba(0,0,0,0.2)",
          "boxshadow_spread": 0,
          "order": 1,
          "row_gap": 8,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 8,
          "margin_left": 8,
          "padding_top": 8,
          "margin_right": 8,
          "padding_left": 8,
          "single_width": false,
          "margin_bottom": 8,
          "padding_right": 8,
          "single_height": false,
          "padding_bottom": 8,
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
              "bgcolor": "rgba(255,255,255,1)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTIgr",
        "default_name": "Group CZ",
        "elements": {
          "bTIhF": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 4,
              "border_roundness": 8,
              "vertical_centering": true,
              "order": 1,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 6,
              "single_width": false,
              "padding_right": 6,
              "single_height": false,
              "min_height_css": "32px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-start"
            },
            "type": "Group",
            "id": "bTIgy",
            "current_parent": "bTIgr",
            "default_name": "Group DZ",
            "elements": {
              "bTnpE": {
                "properties": {
                  "height": 240,
                  "left": -120,
                  "top": -40,
                  "width": 240,
                  "zindex": 5,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766489069689x220645536843851800/User.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769006534999x266860271054930800/User%20%283%29.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTnon",
                "default_name": "Image U",
                "name": "Image User",
                "style": "Image_standard_image_"
              },
              "bTxTF": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "args": 17,
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "args": 3,
                                                "next": {
                                                  "type": "Message",
                                                  "name": "to_lowercase",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "truncated",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "separator": {
                                                "entries": {
                                                  "0": "@"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "split_by",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "email",
                                          "is_slidable": false
                                        },
                                        "type": "CurrentUser",
                                        "is_slidable": false
                                      },
                                      "2": "...@",
                                      "3": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "to_lowercase",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "last_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "separator": {
                                                "entries": {
                                                  "0": "@"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "split_by",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "email",
                                          "is_slidable": false
                                        },
                                        "type": "CurrentUser",
                                        "is_slidable": false
                                      },
                                      "4": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "to_lowercase",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "email",
                                          "is_slidable": false
                                        },
                                        "type": "CurrentUser",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_boolean",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "greater_than",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "length",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "email",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "height": 8,
                  "left": 110,
                  "top": 19,
                  "width": 24,
                  "zindex": 6,
                  "font_color": "rgba(168,210,220,1)",
                  "font_size": 12,
                  "line_height": 1.4,
                  "vertical_centering": true,
                  "order": 6,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": false,
                  "max_width_css": "174px",
                  "min_width_css": "0px",
                  "single_height": false,
                  "max_height_css": "20px",
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "editor_preview_text": "www...@rapiddevelopers.com",
                  "collapse_when_hidden": true
                },
                "states": {
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
                      "font_color": "rgba(128,189,203,1)"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTxTD",
                "default_name": "Text R"
              }
            },
            "name": "Group User Email",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTIhc": {
            "properties": {
              "height": 0,
              "left": 10,
              "top": 10,
              "width": 0,
              "zindex": 4,
              "border_roundness": 8,
              "vertical_centering": true,
              "order": 3,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 6,
              "single_width": false,
              "padding_right": 6,
              "single_height": false,
              "min_height_css": "32px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-start"
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
                  "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
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
                  "bgcolor": "var(--color_bTspn2_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTIhV",
            "current_parent": "bTIgr",
            "default_name": "Group EZ",
            "elements": {
              "bTHpX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Personal settings"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 2,
                  "order": 5,
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
                        "element_id": "bTIhV"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "font_color": "var(--color_bTkRP4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTIhX",
                "default_name": "Text Q",
                "style": "Text_inter___400___16px___neutral_copy_"
              },
              "bTnpK": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 5,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766489246906x390569946293302800/Settings%20Adjust%20hr-al.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769006546047x799292418610807000/Settings%20Adjust%20hr-al%20%281%29.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTnpF",
                "current_parent": "bTIhV",
                "default_name": "Image V",
                "name": "Image customize",
                "style": "Image_standard_image_"
              },
              "bTKlt0": {
                "properties": {
                  "height": 200,
                  "left": 0,
                  "top": 0,
                  "width": 200,
                  "zindex": 5,
                  "floating_reference": "top",
                  "custom_id": "bTKdH0",
                  "order": 6,
                  "max_width": 100,
                  "min_width": 0,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "floating_reference_horizontal": "none",
                  "floating_reference_horizontal_resp": "left"
                },
                "type": "CustomElement",
                "id": "bTKlo0",
                "default_name": "[Element] Popup User Settings A",
                "name": "[Element] Popup User Settings A"
              }
            },
            "name": "Group Personal settings",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTIhn": {
            "properties": {
              "height": 0,
              "left": 20,
              "top": 20,
              "width": 0,
              "zindex": 4,
              "border_roundness": 8,
              "vertical_centering": true,
              "order": 7,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 6,
              "single_width": false,
              "padding_right": 6,
              "single_height": false,
              "min_height_css": "32px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-start"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "bgcolor",
                  "bgcolor": "var(--color_bTspn2_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTIhd",
            "current_parent": "bTIgr",
            "default_name": "Group FZ",
            "elements": {
              "bTHpX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Log out"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 2,
                  "order": 5,
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
                        "element_id": "bTIhd"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "font_color": "var(--color_bTkRP4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTIhi",
                "default_name": "Text P",
                "style": "Text_inter___400___16px___neutral_copy_"
              },
              "bTnpQ": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 5,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766489313427x128310158761871570/Logout.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769006556821x595425792671130600/Logout%20%281%29.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTnpL",
                "current_parent": "bTIhd",
                "default_name": "Image W",
                "name": "Image log out",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Log Out",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTqon": {
            "properties": {
              "height": 0,
              "left": 20,
              "top": 20,
              "width": 0,
              "zindex": 4,
              "border_roundness": 8,
              "is_visible": false,
              "vertical_centering": true,
              "order": 4,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 8,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 6,
              "single_width": false,
              "padding_right": 6,
              "single_height": false,
              "min_height_css": "32px",
              "padding_bottom": 6,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-start"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
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
                  "bgcolor": "var(--color_bTspn2_default)"
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
                            "option_set": "option.user_type__os_",
                            "option_value": "owner"
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
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTqof",
            "current_parent": "bTIgr",
            "default_name": "Group QZ",
            "elements": {
              "bTHpX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Workspace settings"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": 0,
                  "top": 0,
                  "width": 100,
                  "zindex": 2,
                  "order": 5,
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
                        "element_id": "bTqof"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "font_color": "var(--color_bTkRP4_default)"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTqoh",
                "default_name": "Text U",
                "style": "Text_inter___400___16px___neutral_copy_"
              },
              "bTnpK": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 5,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766689012527x190009328880616830/Settings%20%283%29.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": false,
                  "min_height_css": "240px",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769083219024x558251598657511800/Icon%20R%20%289%29%201.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTqol",
                "current_parent": "bTIhV",
                "default_name": "Image Z",
                "name": "Image customize",
                "style": "Image_standard_image_"
              },
              "bTKlt0": {
                "properties": {
                  "height": 200,
                  "left": 0,
                  "top": 0,
                  "width": 200,
                  "zindex": 5,
                  "floating_reference": "top",
                  "custom_id": "bTKdH0",
                  "order": 6,
                  "max_width": 100,
                  "min_width": 0,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "floating_reference_horizontal": "none",
                  "floating_reference_horizontal_resp": "left"
                },
                "type": "CustomElement",
                "id": "bTqom",
                "default_name": "[Element] Popup User Settings D",
                "custom_definition_name": "[Element] Popup User Settings"
              }
            },
            "name": "Group Workspace settings",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Profile Menu Content"
      }
    },
    "name": "GF Profile Menu"
  },
};
