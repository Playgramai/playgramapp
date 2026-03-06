import { Group_Main_Container } from './group_main_container/index.js';
import { Popup_shortcut } from './popup_shortcut/index.js';
import { Popup_Add_Project_context } from './popup_add_project_context/index.js';
import { Popup_View_Project_Files } from './popup_view_project_files.js';
import { Group_JS_HTML_Elements_Visible } from './group_js_html_elements_visible.js';
import { FG_Canvas } from './fg_canvas.js';
import { Popup_Project_Instructions } from './popup_project_instructions.js';

export const elements = {
  "bTHqD": Group_Main_Container,
  "bTulu1": Popup_shortcut,
  "bTKqy0": Popup_Add_Project_context,
  "bTUWA": Popup_View_Project_Files,
  "bTwSl": Group_JS_HTML_Elements_Visible,
  "bTMgJ0": FG_Canvas,
  "bTKov0": Popup_Project_Instructions,
  "bTbfJ0": {
    "properties": {
      "height": 280,
      "left": 492,
      "top": 67,
      "width": 280,
      "zindex": 3,
      "boxshadow_horizontal": 0,
      "border_roundness": 10,
      "boxshadow_style": "none",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_bTGzr_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)",
      "order": 7,
      "reference": "bTUiH0",
      "unique_id": {
        "entries": {
          "0": "{addClass: \"allow-overflow\"}"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "offset_top": 8,
      "offset_left": 0,
      "single_width": false,
      "max_width_css": "316px",
      "min_width_css": "316px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 1024,
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
          "max_width_css": "148px"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": 474,
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
        "type": "State"
      }
    },
    "type": "GroupFocus",
    "id": "bTbfB0",
    "current_parent": "bTUdV0",
    "default_name": "GroupFocus B",
    "elements": {
      "bTHrd": {
        "properties": {
          "height": 280,
          "left": 101,
          "top": 39,
          "width": 280,
          "zindex": 2,
          "boxshadow_horizontal": 2,
          "border_roundness": 10,
          "boxshadow_style": "outset",
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(42,42,45,1)",
          "boxshadow_blur": 10,
          "boxshadow_color": "rgba(0,0,0,0.25)",
          "boxshadow_spread": 0,
          "order": 2,
          "fit_width": false,
          "unique_id": {
            "entries": {
              "0": "{addClass: \"allow-overflow\"}"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "padding_top": 12,
          "padding_left": 12,
          "single_width": false,
          "padding_right": 12,
          "single_height": false,
          "padding_bottom": 12,
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
              "is_slidable": false
            },
            "properties": {
              "boxshadow_style": "none",
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTbfD0",
        "default_name": "Group NZZZ",
        "elements": {
          "bTHrj": {
            "properties": {
              "height": 350,
              "left": 73,
              "top": 45,
              "width": 280,
              "zindex": 2,
              "data_source": {
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
                "properties": {
                  "option_set": "option.llm_providers__os_"
                },
                "type": "AllOptionValue",
                "is_slidable": false
              },
              "group_type": "option.llm_providers__os_",
              "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
              "separator_style": "solid",
              "order": 1,
              "fit_width": false,
              "unique_id": {
                "entries": {
                  "0": "{addClass: \"allow-overflow\"}"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "fixed_rows": false,
              "single_width": false,
              "min_width_css": "272px",
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "column",
              "cell_min_height_css": "100%",
              "collapse_when_hidden": true
            },
            "type": "RepeatingGroup",
            "id": "bTbfH0",
            "default_name": "RepeatingGroup D",
            "elements": {
              "bTbdi0": {
                "properties": {
                  "height": 200,
                  "left": 43,
                  "top": 14,
                  "width": 200,
                  "zindex": 4,
                  "floating_reference": "top",
                  "custom_id": "bTbDp0",
                  "data_source": {
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "order": 1,
                  "fit_width": false,
                  "max_width": 100,
                  "min_width": 0,
                  "unique_id": {
                    "entries": {
                      "0": "{addClass: \"allow-overflow\"}"
                    },
                    "type": "TextExpression"
                  },
                  "fit_height": true,
                  "margin_top": 2,
                  "param_bTIIn0": {
                    "next": {
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUiZ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "param_bTPAS0": {
                    "next": {
                      "next": {
                        "next": {
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
                                  "args": {
                                    "next": {
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTcdF"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "equals",
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
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "single_width": false,
                  "margin_bottom": 2,
                  "single_height": false,
                  "max_height_css": "54px",
                  "min_height_css": "54px",
                  "horiz_alignment": "flex-start",
                  "floating_reference_horizontal": "none",
                  "floating_reference_horizontal_resp": "left"
                },
                "type": "CustomElement",
                "id": "bTbfI0",
                "default_name": "test A",
                "custom_definition_name": "test"
              }
            },
            "name": "RG Providers",
            "style": "RepeatingGroup_transparent_"
          }
        },
        "name": "Group LLM Models List"
      }
    },
    "name": "GF LLM Models"
  },
  "bTvQw": {
    "properties": {
      "height": 61,
      "left": 274,
      "top": 1,
      "width": 57,
      "zindex": 12,
      "is_visible": true,
      "vertical_centering": true,
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
                    "0": "#121213"
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
      "order": 26,
      "unique_id": {
        "entries": {
          "0": "fg-loader"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "min_width_css": "57px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "FloatingGroup",
    "id": "bTvQr",
    "default_name": "FloatingGroup C",
    "elements": {
      "bTvSK": {
        "properties": {
          "height": 30,
          "left": 447.9296875,
          "top": 335,
          "width": 184.13300000000004,
          "zindex": 4,
          "vertical_centering": true,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTvRn",
        "default_name": "Group W",
        "elements": {
          "bTvSL": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Switching workspaces"
                },
                "type": "TextExpression"
              },
              "height": 116,
              "left": 0,
              "top": -330,
              "width": 249,
              "zindex": 3,
              "font_size": 18,
              "is_visible": true,
              "order": 2,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
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
                    "name": "custom.hide_members_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUjC0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Loading chats"
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
                  "font_color": "var(--color_bTsrp2_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTvRh",
            "default_name": "Text J",
            "style": "Text_inter___400___16px___neutral_"
          },
          "bTvSP": {
            "properties": {
              "height": 200,
              "left": 0,
              "top": -330,
              "width": 200,
              "zindex": 2,
              "floating_reference": "top",
              "custom_id": "bTqYR0",
              "order": 1,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "margin_top": 2,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": false,
              "min_height_css": "30px",
              "vert_alignment": "center",
              "horiz_alignment": "center",
              "nonant_alignment": "bb",
              "floating_reference_horizontal": "none",
              "floating_reference_horizontal_resp": "left"
            },
            "type": "CustomElement",
            "id": "bTvQx",
            "current_parent": "bTvQr",
            "default_name": "Dot Loader HTML C",
            "custom_definition_name": "Dot Loader HTML"
          }
        },
        "name": "Group switching worspaces",
        "style": "Group_transparent_"
      }
    },
    "name": "FloatingGroup loader",
    "style": "FloatingGroup_shadow_"
  },
  "bTiRN1": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 8,
      "border_roundness": 0,
      "boxshadow_style": "none",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(var(--color_surface_default_rgb), 0)",
      "order": 23,
      "reference": "bTiHD1",
      "fit_height": true,
      "offset_top": 8,
      "offset_left": -125,
      "padding_left": 10,
      "single_width": false,
      "max_width_css": "240px",
      "min_width_css": "240px",
      "padding_right": 10,
      "single_height": false,
      "min_height_css": "36px",
      "padding_bottom": 10,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTiRL1",
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
        "id": "bTkGX",
        "current_parent": "bTiRL1",
        "default_name": "HTML S",
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
        "id": "bTmQp3",
        "current_parent": "bTiRL1",
        "default_name": "Group JZZZZ",
        "elements": {
          "bTlkl2": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Link copied. Public access on."
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
            "id": "bTmQr3",
            "current_parent": "bTliW2",
            "default_name": "Text IZ",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
          }
        },
        "style": "Group_transparent_"
      }
    },
    "name": "GF Alert",
    "style": "GroupFocus_shadow_"
  },
  "bTuIH1": {
    "properties": {
      "height": 280,
      "width": 280,
      "zindex": 2,
      "floating_reference": "bottom",
      "border_color": "rgba(128,189,203,0.06)",
      "border_roundness": 0,
      "data_source": {
        "next": {
          "type": "Message",
          "name": "custom.chat_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUhv0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "custom.chat",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(27,27,29,1)",
      "border_style": "none",
      "order": 20,
      "use_gap": false,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": "undo-archive"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "padding_top": 0,
      "padding_left": 0,
      "single_width": false,
      "margin_bottom": 56,
      "padding_right": 0,
      "single_height": false,
      "padding_bottom": 0,
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "center",
      "floating_reference_horizontal_resp": "center"
    },
    "type": "FloatingGroup",
    "id": "bTuHz1",
    "current_parent": "bTuEb0",
    "default_name": "FloatingGroup B",
    "elements": {
      "bTtob1": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 16,
          "width": 0,
          "zindex": 5,
          "border_color": "rgba(128,189,203,0.06)",
          "border_roundness": 12,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.chat",
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(27,27,29,1)",
          "border_style": "solid",
          "order": 4,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 20,
          "fit_height": true,
          "padding_top": 6,
          "padding_left": 13,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 13,
          "single_height": false,
          "min_height_css": "40px",
          "padding_bottom": 6,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTuIB1",
        "default_name": "Group J",
        "elements": {
          "bTtog1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "The chat is archived"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 64,
              "top": 34,
              "width": 100,
              "zindex": 2,
              "font_color": "var(--color_bTkRP4_default)",
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
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTuIF1",
            "default_name": "Text B",
            "style": "Text_body_16_"
          },
          "bTtoh1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "UNDO"
                },
                "type": "TextExpression"
              },
              "height": 44,
              "left": 205.703125,
              "top": 43.3984375,
              "width": 150,
              "zindex": 3,
              "icon": "material outlined close",
              "border_roundness": 0,
              "font_color": "var(--color_bToSr_default)",
              "font_size": 14,
              "icon_color": "rgba(var(--color_bTkRP4_default_rgb), 0.5)",
              "vertical_centering": true,
              "background_style": "none",
              "order": 3,
              "opacity": 100,
              "fit_width": true,
              "icon_size": 20,
              "fit_height": true,
              "button_type": "label_icon",
              "padding_top": 0,
              "padding_left": 0,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 0,
              "single_height": false,
              "icon_placement": "right",
              "min_height_css": "44px",
              "padding_bottom": 0,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTuIG1",
            "default_name": "Button F",
            "name": "Button Undo",
            "style": "Button_primary_new_"
          }
        },
        "name": "Group Chat Archive - use button",
        "style": "Group_transparent_"
      }
    },
    "name": "FG Archive Chat"
  },
  "bTuEd0": {
    "properties": {
      "height": 320,
      "left": 134,
      "top": 103,
      "width": 320,
      "zindex": 11,
      "boxshadow_horizontal": 0,
      "border_roundness": 0,
      "boxshadow_style": "none",
      "boxshadow_vertical": 0,
      "group_type": "text",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_bTkRJ4_default)",
      "boxshadow_blur": 20,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "order": 1,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": "popup-generated-image-preview"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "padding_top": 0,
      "greyout_blur": 2,
      "padding_left": 0,
      "single_width": false,
      "greyout_color": "rgba(0,0,0,0.7)",
      "min_width_css": "300px",
      "padding_right": 0,
      "single_height": false,
      "padding_bottom": 0,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTuEb0",
    "default_name": "Popup C",
    "elements": {
      "bTuEn0": {
        "properties": {
          "height": 28,
          "left": 0,
          "top": 0,
          "width": 28,
          "zindex": 13,
          "border_color": "rgba(42,42,45,1)",
          "border_roundness": 8,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
          "border_style": "none",
          "order": 1,
          "fit_width": true,
          "unique_id": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "margin_top": 16,
          "margin_right": 16,
          "single_width": true,
          "min_width_css": "32px",
          "single_height": true,
          "min_height_css": "32px",
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "nonant_alignment": "ca",
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
              "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.8)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTuEh0",
        "current_parent": "bTuEb0",
        "default_name": "Group F",
        "elements": {
          "bTnqB": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 1,
              "icon": "feather x",
              "icon_color": "var(--color_surface_default)",
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
            "type": "Icon",
            "id": "bTuEj0",
            "default_name": "Icon H",
            "style": "Icon_standard_icon_"
          }
        },
        "name": "Group Close Image Preview Popup",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      },
      "bTuEu0": {
        "properties": {
          "height": 150,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 3,
          "html": {
            "entries": {
              "0": "<style>\n.container-img-preview {\n  height: 86vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-img-preview img {\n  height: 100%;\n  width: auto;\n  max-width: 100%;\n  object-fit: contain;\n}\n\n</style>\n<div class=\"container-img-preview\">\n<img src=\"",
              "1": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "2": "\"/>\n</div>"
            },
            "type": "TextExpression"
          },
          "vertical_centering": true,
          "order": 2,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "stretch",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTuEp0",
        "current_parent": "bTuEb0",
        "default_name": "HTML C",
        "name": "HTML Generated Image Preview",
        "style": "HTML_default_"
      }
    },
    "name": "Popup Generated Image Preview"
  },
  "bTHpx": {
    "properties": {
      "height": 200,
      "left": 49,
      "top": 139,
      "width": 200,
      "zindex": 3,
      "floating_reference": "top",
      "custom_id": "bTHoP",
      "is_visible": false,
      "order": 3,
      "max_width": 100,
      "min_width": 0,
      "unique_id": {
        "entries": {
          "0": ""
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "margin_top": 8,
      "margin_left": 8,
      "single_width": false,
      "margin_bottom": 8,
      "max_width_css": "272px",
      "min_width_css": "0px",
      "single_height": false,
      "vert_alignment": "stretch",
      "horiz_alignment": "flex-start",
      "overflow_scroll": false,
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
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
            "name": "custom.open__",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "253px"
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
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "60px"
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
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "margin_right": -53,
          "max_width_css": "44px",
          "max_height_css": "44px"
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
            "name": "custom.expand_",
            "is_slidable": false
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "properties": {
          "margin_right": -253,
          "max_width_css": "253px",
          "min_width_css": "253px"
        },
        "type": "State"
      },
      "5": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "logged_in",
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
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTvQr"
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
    "type": "CustomElement",
    "id": "bTUjC0",
    "default_name": "[Element] Sidebar A",
    "name": "[Element] Sidebar A"
  },
  "bTxOT": {
    "properties": {
      "height": 12,
      "left": 4,
      "top": 0,
      "width": 33,
      "zindex": 10,
      "is_visible": false,
      "vertical_centering": true,
      "order": 13,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "vert_alignment": "stretch",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "active_boolean",
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
              "next": {
                "args": {
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
                        "type": "Message",
                        "name": "not_equals",
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "logged_in",
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
    "type": "Group",
    "id": "bTxOM",
    "default_name": "Group NZ",
    "elements": {
      "bTxOZ": {
        "properties": {
          "text": {
            "entries": {
              "0": "Workspace temporarily unavailable"
            },
            "type": "TextExpression"
          },
          "height": 58,
          "left": 315,
          "top": 308,
          "width": 131,
          "zindex": 2,
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxOX",
        "default_name": "Text R",
        "style": "Text_inter___400___24px___white_copy_"
      },
      "bTxOl": {
        "properties": {
          "text": {
            "entries": {
              "0": "[center]Access to this workspace is temporarily restricted.\nPlease contact your organization owner to restore access.[/center]"
            },
            "type": "TextExpression"
          },
          "height": 50,
          "left": 251,
          "top": 418,
          "width": 112,
          "zindex": 3,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "center",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxOj",
        "default_name": "Text X",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "name": "Group workspace blocked container",
    "style": "Group_transparent_"
  },
  "bTqat1": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 10,
      "border_roundness": 0,
      "boxshadow_style": "none",
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "order": 5,
      "reference": "bTqaE1",
      "fit_height": true,
      "offset_top": -90,
      "offset_left": 90,
      "padding_left": 10,
      "single_width": false,
      "max_width_css": "300px",
      "min_width_css": "60px",
      "padding_right": 10,
      "single_height": false,
      "padding_bottom": 10,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTqaj1",
    "current_parent": "bTbfB0",
    "default_name": "GroupFocus D",
    "elements": {
      "bTlkh2": {
        "properties": {
          "height": 14.398400000000002,
          "left": -96.41399999999999,
          "top": 26,
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
          "order": 3,
          "fit_width": true,
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
        "id": "bTqao1",
        "default_name": "Group VZZZZ",
        "elements": {
          "bTlkl2": {
            "properties": {
              "text": {
                "entries": {
                  "0": "To generate images please switch \nto Gemini or OpenAI models"
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
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTqap1",
            "current_parent": "bTliW2",
            "default_name": "Text PZ",
            "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
          }
        },
        "style": "Group_transparent_"
      }
    },
    "name": "GF Tooltip Imaggen",
    "style": "GroupFocus_shadow_"
  },
};
