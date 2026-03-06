import { Group_Collapsible_Projects } from './group_collapsible_projects/index.js';

export const elements = {
  "bTIaa": Group_Collapsible_Projects,
  "bTIaP": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 9,
      "border_roundness": 16,
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 4,
      "fit_height": true,
      "padding_top": 10,
      "padding_left": 10,
      "single_width": false,
      "padding_right": 10,
      "single_height": false,
      "min_height_css": "36px",
      "padding_bottom": 10,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
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
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
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
            "element_id": "bTIaV"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
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
            "element_id": "bTIaV"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTsrr2_default)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTIaN",
    "default_name": "Group P",
    "elements": {
      "bTIpn0": {
        "properties": {
          "height": 0,
          "left": 6,
          "top": 0,
          "width": 0,
          "zindex": 9,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 8,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTIpl0",
        "default_name": "Group JZ",
        "elements": {
          "bTIpr0": {
            "properties": {
              "height": 30,
              "left": -6,
              "top": 0,
              "width": 30,
              "zindex": 2,
              "icon": "phosphor bold caret-down",
              "icon_color": "var(--color_bTkRL4_default)",
              "is_visible": true,
              "vertical_centering": true,
              "order": 5,
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
                  "icon_color": "rgba(112,112,114,1)"
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
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon": "phosphor bold caret-up",
                  "icon_color": "var(--color_bTkRP4_default)"
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
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon": "phosphor bold caret-up",
                  "icon_color": "rgba(112,112,114,1)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTIaH",
            "current_parent": "bTIJb0",
            "default_name": "Icon D"
          },
          "bTIps0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Projects"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -6,
              "top": 0,
              "width": 100,
              "zindex": 6,
              "is_visible": true,
              "order": 3,
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
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTkRP4_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTIXz",
            "current_parent": "bTIJb0",
            "default_name": "Text H",
            "style": "Text_inter___400___16px___neutral_copy_"
          },
          "bTkXX2": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002676315x576779624670113400/Frame%2013.svg"
                },
                "type": "TextExpression"
              },
              "order": 1,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "20px",
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
                  "is_slidable": false
                },
                "properties": {
                  "min_width_css": "16px"
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
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921638521x707251596777176400/Frame%2013.svg"
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
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002669440x188025659141715780/Frame%2012.svg"
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
                    "element_id": "bTIaV"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921665064x806028011653855600/Frame%2012.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTkXV2",
            "current_parent": "bTIpl0",
            "default_name": "Image H",
            "name": "Image Icon",
            "style": "Image_standard_image_"
          },
          "bTkih2": {
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
              "order": 4,
              "fit_width": true,
              "unique_id": {
                "entries": {
                  "0": "createProject"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "var(--color_bTkRW4_default)"
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
                  "bgcolor": "rgba(247,248,249,1)"
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
                  "bgcolor": "rgba(128,189,203,0.16)"
                },
                "type": "State"
              },
              "3": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIJb0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              },
              "4": {
                "condition": {
                  "next": {
                    "args": 768,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
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
            "id": "bTIpU0",
            "current_parent": "bTIaN",
            "default_name": "Group IZ",
            "elements": {
              "bTkig2": {
                "properties": {
                  "height": 240,
                  "left": 0,
                  "top": 0,
                  "width": 240,
                  "zindex": 3,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765367089505x357517563970318800/Add--large%20%281%29.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 2,
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
                        "element_id": "bTIpU0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765211123130x668250056311104300/Add--large.svg"
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769003274963x411774542491547500/Add--large%20%283%29%202.svg"
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
                        "element_id": "bTIpU0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "src": {
                        "entries": {
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769003280661x778119724450402600/Add--large%20%283%29%203.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTkib2",
                "current_parent": "bTIpU0",
                "default_name": "Image O",
                "name": "Image add project",
                "style": "Image_standard_image_"
              },
              "bTnoh2": {
                "properties": {
                  "height": 1,
                  "left": 0,
                  "top": 0,
                  "width": 1,
                  "zindex": 4,
                  "AAD": {
                    "entries": {
                      "0": "createProject"
                    },
                    "type": "TextExpression"
                  },
                  "AAE": {
                    "entries": {
                      "0": "Create project"
                    },
                    "type": "TextExpression"
                  },
                  "AAG": "left top",
                  "AAH": "right bottom",
                  "AAI": "dark",
                  "AAK": true,
                  "AAN": {
                    "entries": {
                      "0": "createProject"
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
                "id": "bTnof2",
                "current_parent": "bTIpU0",
                "default_name": "Airtooltip A",
                "name": "Airtooltip Create Project"
              }
            },
            "name": "Group Create Project"
          }
        },
        "name": "Group Project Heading/Chevron 768",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Projects Toggle",
    "style": "Group_transparent_"
  },
};
