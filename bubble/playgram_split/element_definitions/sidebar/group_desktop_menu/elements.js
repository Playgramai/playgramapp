import { Group_Upper_Part_Container } from './group_upper_part_container/index.js';

export const elements = {
  "bThZr": Group_Upper_Part_Container,
  "bThZs": {
    "properties": {
      "height": 150,
      "left": 0,
      "top": -12,
      "width": 280,
      "zindex": 16,
      "html": {
        "entries": {
          "0": "<style>\n#gfMenuProfile {\n  transform: translateX(0px) !important;\n transform: translateY(40px) !important;\n bottom: 110px !important;\n top: unset !important;\n}\n\n\n\n/* Firefox */\n#overflowID,\n#overflowID * {\n  scrollbar-width: none !important;\n  -ms-overflow-style: none !important;\n}\n\n/* Chrome, Edge, Safari */\n#overflowID::-webkit-scrollbar,\n#overflowID *::-webkit-scrollbar {\n  width: 0px !important;\n  height: 0px !important;\n}\n\n\n</style>\n\n<script>\n(function () {\n  // 1. \u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 HTML \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n  const ORIGINAL_HTML = document.documentElement.innerHTML;\n\n  // 2. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \"\u043c\u044f\u0433\u043a\u043e\u0433\u043e\" refresh\n  window.softRefresh = function () {\n    // \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0435\u0440\u0435\u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c DOM\n    document.open();\n    document.write(ORIGINAL_HTML);\n    document.close();\n\n    // \u0421\u043e\u043e\u0431\u0449\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e soft reload\n    window.dispatchEvent(new Event(\"soft:reload\"));\n  };\n\n  // 3. \u041f\u0440\u0438\u043c\u0435\u0440 \u0445\u0443\u043a\u0430 \u043f\u043e\u0441\u043b\u0435 \"\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438\"\n  window.addEventListener(\"soft:reload\", () => {\n    console.log(\"Soft refresh done\");\n  });\n})();\n</script>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 4,
      "unique_id": {
        "entries": {
          "0": ""
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
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
    "type": "HTML",
    "id": "bTQCT0",
    "current_parent": "bTHoP",
    "default_name": "HTML B",
    "name": "HTML Styles",
    "style": "HTML_default_"
  },
  "bThZt": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": -12,
      "width": 0,
      "zindex": 16,
      "border_roundness": 12,
      "vertical_centering": true,
      "order": 9,
      "fit_width": false,
      "fit_height": true,
      "padding_top": 4,
      "padding_left": 8,
      "single_width": false,
      "padding_right": 8,
      "single_height": false,
      "padding_bottom": 4,
      "horiz_alignment": "flex-start",
      "border_color_top": "rgba(42,42,45,1)",
      "border_style_top": "solid",
      "container_layout": "column",
      "four_border_style": false,
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
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
      },
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
          "max_width_css": "36px"
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
        "type": "State"
      },
      "3": {
        "condition": {
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
              "type": "Message",
              "name": "or_",
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
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTIfA",
    "default_name": "Group Y",
    "elements": {
      "bTIfG": {
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
        }
      }
    },
    "name": "Group Profile (use button)",
    "style": "Group_transparent_"
  },
  "bTvOm0": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 0,
      "width": 1,
      "zindex": 6,
      "AAQ": {
        "entries": {
          "0": "now_sidebar"
        },
        "type": "TextExpression"
      },
      "AAR": false,
      "AAS": true,
      "AAT": "date",
      "ABy": false,
      "order": 5,
      "nonant_alignment": "bb",
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAP",
    "id": "bTvOh0",
    "current_parent": "bThZl",
    "default_name": "JavascripttoBubble A",
    "name": "JS Sidebar Current Time"
  },
  "bTxAN1": {
    "properties": {
      "text": {
        "entries": {
          "0": "Upgrade"
        },
        "type": "TextExpression"
      },
      "height": 8,
      "left": 39,
      "top": 5.7890625,
      "width": 31,
      "zindex": 4,
      "icon": "ionic sharp rocket",
      "is_visible": false,
      "vertical_centering": true,
      "order": 8,
      "fit_width": false,
      "icon_size": 16,
      "fit_height": true,
      "button_type": "label",
      "single_width": false,
      "margin_bottom": 16,
      "min_width_css": "60px",
      "single_height": true,
      "icon_placement": "right",
      "min_height_css": "38px",
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
          "font_color": "var(--color_bTkRR4_default)"
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
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.16)"
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
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "isnt_clickable",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "opacity": 50
        },
        "type": "State",
        "said": "a2Vsdm8tMzE4ODQ="
      },
      "bTnVR1": {
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
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.subscription_plan",
                                "option_value": "free"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
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
                  "type": "Message",
                  "name": "and_",
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
        }
      }
    },
    "type": "Button",
    "id": "bTxAH1",
    "default_name": "Button A",
    "style": "Button_primary_new_",
    "transitions": {
      "font_color": {
        "fn": "ease",
        "duration": 200
      },
      "icon_color": {
        "fn": "ease",
        "duration": 200
      },
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
};
