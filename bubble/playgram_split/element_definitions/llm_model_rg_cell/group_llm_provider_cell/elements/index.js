import { Group_Container_Hover } from './group_container_hover/index.js';

export const elements = {
  "bTHuK": Group_Container_Hover,
  "bTicP": {
    "properties": {
      "height": 36,
      "left": 0,
      "top": 0,
      "width": 69,
      "zindex": 14,
      "group_type": "option.llm_models__os_",
      "is_visible": false,
      "order": 1,
      "fit_width": false,
      "fit_height": true,
      "margin_top": 0,
      "margin_right": 0,
      "single_width": false,
      "min_width_css": "220px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "alibaba_cloud"
              },
              "type": "OneOptionValue",
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
          "min_width_css": "300px"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTiby",
    "current_parent": "bTbDr0",
    "default_name": "Group J",
    "elements": {
      "bTibZ": {
        "properties": {
          "height": 16,
          "left": 92,
          "top": 17,
          "width": 58,
          "zindex": 2,
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_advanced_search_constraint",
                        "value": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_true",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "visible",
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
                "type": "Message",
                "name": "models",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbDr0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "group_type": "option.llm_models__os_",
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": false,
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "cell_min_height_css": "40px",
          "collapse_when_hidden": true
        },
        "type": "RepeatingGroup",
        "id": "bTicD",
        "default_name": "RepeatingGroup D",
        "elements": {
          "bTiba": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 10.203125,
              "width": 0,
              "zindex": 3,
              "border_roundness": 10,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "option.llm_models__os_",
              "background_style": "bgcolor",
              "bgcolor": "rgba(74,74,74,0)",
              "order": 1,
              "row_gap": 0,
              "use_gap": false,
              "fit_width": false,
              "column_gap": 0,
              "fit_height": true,
              "margin_top": 2,
              "fixed_width": false,
              "margin_left": 0,
              "padding_top": 8,
              "margin_right": 0,
              "padding_left": 8,
              "single_width": false,
              "margin_bottom": 2,
              "min_width_css": "0px",
              "padding_right": 8,
              "single_height": false,
              "min_height_css": "0px",
              "padding_bottom": 8,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "overflow_scroll": false,
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_vert_alignment": "flex-start",
              "container_horiz_alignment": "space-between"
            },
            "states": {
              "4": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "param_bTPAS0",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTbDp0"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_group_data",
                          "is_slidable": false
                        },
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "llm_model_option_llm_models__os_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "param_bTIIn0",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTbDp0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "type": "ThisElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
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
                  "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.15)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTicE",
            "default_name": "Group J",
            "elements": {
              "bTibf": {
                "properties": {
                  "height": 14,
                  "left": 181.9921875,
                  "top": 10.796875,
                  "width": 14,
                  "zindex": 14,
                  "data_source": {
                    "type": "ElementParent"
                  },
                  "group_type": "option.llm_models__os_",
                  "vertical_centering": true,
                  "order": 3,
                  "fit_width": true,
                  "unique_id": {
                    "entries": {
                      "0": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": " "
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTbDp0"
                                },
                                "type": "GetElement",
                                "is_slidable": false,
                                "moved_to_top": true
                              },
                              "2": "",
                              "3": {
                                "type": "CurrentCellsIndex",
                                "is_slidable": false
                              },
                              "4": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "ArbitraryText",
                        "said": "a2Vsdm8tMzE4ODQ="
                      }
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "14px",
                  "single_height": true,
                  "min_height_css": "14px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "container_layout": "relative",
                  "collapse_when_hidden": true
                },
                "type": "Group",
                "id": "bTicF",
                "default_name": "Group J",
                "elements": {
                  "bTibg": {
                    "properties": {
                      "height": 14,
                      "left": -77.9921875,
                      "top": -8,
                      "width": 14,
                      "zindex": 1,
                      "icon": "bootstrap star",
                      "icon_color": "var(--color_primary_contrast_default)",
                      "is_visible": true,
                      "vertical_centering": true,
                      "order": 4,
                      "unique_id": {
                        "entries": {
                          "0": "",
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "padding_top": 0,
                      "padding_left": 0,
                      "single_width": true,
                      "min_width_css": "14px",
                      "padding_right": 0,
                      "single_height": true,
                      "min_height_css": "14px",
                      "padding_bottom": 0,
                      "vert_alignment": "center",
                      "horiz_alignment": "flex-start",
                      "title_attribute": {
                        "type": "TextExpression"
                      },
                      "nonant_alignment": "bb",
                      "collapse_when_hidden": true
                    },
                    "states": {
                      "0": {
                        "condition": {
                          "next": {
                            "next": {
                              "args": {
                                "type": "ElementParent",
                                "is_slidable": false
                              },
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
                                "type": "Message",
                                "name": "or_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "default_model_option_llm_models__os_",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "properties": {
                          "icon": "bootstrap star-fill"
                        },
                        "type": "State"
                      },
                      "1": {
                        "condition": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "type": "Message",
                                      "name": "default_model_option_llm_models__os_",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "not_equals",
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
                            "name": "isnt_hovered",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTicE"
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
                    "type": "Icon",
                    "id": "bTicJ",
                    "current_parent": "bTbdu0",
                    "default_name": "Icon E",
                    "name": "Icon bootstrap star make default",
                    "style": "Icon_standard_icon_"
                  }
                },
                "style": "Group_transparent_"
              },
              "bTibl": {
                "properties": {
                  "height": 2,
                  "left": 0,
                  "top": 0,
                  "width": 2,
                  "zindex": 13,
                  "AAD": {
                    "entries": {
                      "0": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": " "
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTbDp0"
                                },
                                "type": "GetElement",
                                "is_slidable": false,
                                "moved_to_top": true
                              },
                              "2": "",
                              "3": {
                                "type": "CurrentCellsIndex",
                                "is_slidable": false
                              },
                              "4": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "ArbitraryText",
                        "said": "a2Vsdm8tMzE4ODQ="
                      }
                    },
                    "type": "TextExpression"
                  },
                  "AAE": {
                    "entries": {
                      "0": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "default_model_option_llm_models__os_",
                              "is_slidable": false
                            },
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "Default Model"
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "Make Default"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "format_boolean",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "AAG": "bottom left",
                  "AAH": "right top",
                  "AAI": "dark",
                  "AAK": true,
                  "AAN": {
                    "entries": {
                      "0": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": " "
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTbDp0"
                                },
                                "type": "GetElement",
                                "is_slidable": false,
                                "moved_to_top": true
                              },
                              "2": "",
                              "3": {
                                "type": "CurrentCellsIndex",
                                "is_slidable": false
                              },
                              "4": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "ArbitraryText"
                      }
                    },
                    "type": "TextExpression"
                  },
                  "AAe": false,
                  "ABS": true,
                  "ABT": "rgba(48,48,48,1)",
                  "ABU": "var(--color_bTGzv_default)",
                  "ABV": "var(--color_primary_contrast_default)",
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
                "type": "1498171554228x105618760361836540-AAC",
                "id": "bTicK",
                "current_parent": "bTbdu0",
                "default_name": "Airtooltip E",
                "name": "Airtooltip make default"
              },
              "bTibm": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "height": 10,
                  "left": 0,
                  "top": 0,
                  "width": 37,
                  "zindex": 2,
                  "font_color": "var(--color_primary_contrast_default)",
                  "font_size": 14,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "editor_preview_text": "DeepSeek",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTicL",
                "default_name": "Text E",
                "style": "Text_body_16_"
              }
            },
            "name": "Group LLM Model (use button)",
            "style": "Group_transparent_"
          }
        },
        "name": "RepeatingGroup LLM Model (OS)",
        "style": "RepeatingGroup_transparent_"
      }
    },
    "name": "Group llm model bg 1024",
    "style": "Group_dark_gf___shadow_"
  },
  "bTizt1": {
    "properties": {
      "height": 150,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 16,
      "html": {
        "entries": {
          "0": "<style>\n  /* X = -132px, Y = -20px (\u043c\u043e\u0436\u0435\u0448\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0442\u043e\u0440\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435) */\n  #gfModels {\n    transform: translate(-132px, -20px) !important;\n    width: 250px !important;\n  }\n</style>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 3,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "ac",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTizr1",
    "current_parent": "bTbDr0",
    "default_name": "HTML A",
    "name": "HTML Move GF models",
    "style": "HTML_default_"
  },
  "bTizz1": {
    "properties": {
      "height": 150,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 16,
      "html": {
        "entries": {
          "0": "<style>\n  /* X = -132px, Y = -30px (\u043c\u043e\u0436\u0435\u0448\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0442\u043e\u0440\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435) */\n  #gfModels2 {\n    transform: translate(-82px, 60px) !important;\n    width: 250px !important;\n  }\n</style>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 4,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "ac",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTizx1",
    "current_parent": "bTbDr0",
    "default_name": "HTML B",
    "name": "HTML Move GF models 2",
    "style": "HTML_default_"
  },
  "bTjAj1": {
    "properties": {
      "height": 150,
      "left": 20,
      "top": 20,
      "width": 280,
      "zindex": 16,
      "html": {
        "entries": {
          "0": "<style>\n  /* X = -132px, Y = -10px (\u043c\u043e\u0436\u0435\u0448\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0442\u043e\u0440\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435) */\n  #gfmoveProviders {\n    transform: translate(-44px, 0px) !important;\n    width: 250px !important;\n  }\n</style>\n"
        },
        "type": "TextExpression"
      },
      "vertical_centering": true,
      "order": 5,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "ac",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTjAh1",
    "current_parent": "bTbDr0",
    "default_name": "HTML C",
    "name": "HTML Move GF Providers",
    "style": "HTML_default_"
  },
};
