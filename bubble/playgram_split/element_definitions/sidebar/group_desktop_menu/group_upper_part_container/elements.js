import { Group_Projects_Personal_Chats } from './group_projects_personal_chats/index.js';
import { Group_workspace } from './group_workspace/index.js';

export const elements = {
  "bTIev": Group_Projects_Personal_Chats,
  "bTmTG1": Group_workspace,
  "bTIet": {
    "properties": {
      "height": 350,
      "left": -8,
      "top": -12,
      "width": 280,
      "zindex": 4,
      "data_source": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "analytics"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "minus_element",
          "is_slidable": false
        },
        "properties": {
          "option_set": "option.sidebar_menu__os_"
        },
        "type": "AllOptionValue",
        "is_slidable": false
      },
      "group_type": "option.sidebar_menu__os_",
      "separator_color": "rgba(150,150,150,0)",
      "separator_style": "solid",
      "separator_width": 8,
      "order": 10,
      "fit_width": false,
      "fit_height": true,
      "fixed_rows": false,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "cell_min_height_css": "100%",
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
        "properties": {
          "is_visible": false
        },
        "type": "State"
      }
    },
    "type": "RepeatingGroup",
    "id": "bTHov",
    "default_name": "RepeatingGroup A",
    "elements": {
      "bTIez": {
        "properties": {
          "height": 0,
          "left": -8,
          "top": -12,
          "width": 0,
          "zindex": 4,
          "border_roundness": 16,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "option.sidebar_menu__os_",
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 8,
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
              "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
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
              "border_roundness": 6,
              "max_width_css": "36px",
              "min_width_css": "36px",
              "container_horiz_alignment": "center"
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.sidebar_menu__os_",
                          "option_value": "memory_management"
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "text",
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTGzr_default)"
            },
            "type": "State"
          },
          "3": {
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
              "container_horiz_alignment": "center"
            },
            "type": "State"
          },
          "4": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "new_chat"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "margin_bottom": 20,
              "min_height_css": "40px"
            },
            "type": "State"
          },
          "5": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "margin_bottom": 20
            },
            "type": "State"
          },
          "6": {
            "condition": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
                  },
                  "type": "OptionValue"
                },
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.sidebar_menu__os_",
                          "option_value": "library0"
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "text",
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTGzr_default)"
            },
            "type": "State"
          },
          "7": {
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
          "8": {
            "condition": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.sidebar_menu__os_",
                          "option_value": "memory_management"
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "text",
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          },
          "9": {
            "condition": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "url_formatted",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
                  },
                  "type": "OptionValue"
                },
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.sidebar_menu__os_",
                          "option_value": "library0"
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "text",
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTHpR",
        "default_name": "Group B",
        "elements": {
          "bTHpX": {
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
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 3,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "editor_preview_text": "Memory & Knowledge",
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
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTHpR"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTkRP4_default)"
                },
                "type": "State"
              },
              "2": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.screen_mode__os_",
                          "option_value": "light"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "screen_mode_option_screen_mode__os_",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "var(--color_bTsrq2_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTHpB",
            "default_name": "Text A",
            "style": "Text_inter___400___16px___neutral_copy_"
          },
          "bTHpY": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 320,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "icon",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  }
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
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "icon_light_mode",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTHpL",
            "default_name": "Image A",
            "name": "Image Icon",
            "style": "Image_standard_image_"
          },
          "bTkWb2": {
            "properties": {
              "height": 280,
              "left": -80,
              "top": -80,
              "width": 280,
              "zindex": 4,
              "data_source": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "group_type": "option.sidebar_menu__os_",
              "is_visible": false,
              "vertical_centering": true,
              "order": 4,
              "use_gap": true,
              "fit_width": true,
              "column_gap": 2,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.sidebar_menu__os_",
                        "option_value": "new_chat"
                      },
                      "type": "OneOptionValue",
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
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "shortcuts_on__boolean",
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
                          "element_id": "bTHpR"
                        },
                        "type": "GetElement",
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
            "id": "bTkWZ2",
            "default_name": "Group YZ",
            "elements": {
              "bTvJo1": {
                "properties": {
                  "height": 240,
                  "left": -110,
                  "top": -30,
                  "width": 240,
                  "zindex": 2,
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769411699167x832991432764760700/letter_n_icon.svg"
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "20px",
                  "single_height": true,
                  "min_height_css": "20px",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769877981669x961492759903585200/letter_n_icon%201%20%281%29.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTvJj1",
                "current_parent": "bTkWZ2",
                "default_name": "Image D",
                "style": "Image_standard_image_"
              }
            },
            "style": "Group_transparent_"
          }
        },
        "name": "Group Sidebar Menu (OS)",
        "style": "Group_transparent_",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "RG Menu",
    "style": "RepeatingGroup_transparent_"
  },
  "bTIyI": {
    "properties": {
      "height": 150,
      "left": -80,
      "top": 47,
      "width": 280,
      "zindex": 11,
      "html": {
        "entries": {
          "0": "<style>\n[id^=\"input\"] {\ndisplay:none;\n}\n\n</style>\n\n\n<script>\ndocument.addEventListener('keydown', function(e) {\n  const el = e.target;\n  if (el.tagName === 'INPUT' && el.id.startsWith('input')) {\n    if (e.key === 'Enter') {\n      e.preventDefault(); // \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n      el.blur();          // \u0441\u043d\u0438\u043c\u0430\u0435\u043c \u0444\u043e\u043a\u0443\u0441\n      el.style.display = 'none'; // \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0438\u043d\u043f\u0443\u0442\n      console.log('Enter pressed, input blurred and hidden:', el.id);\n    }\n  }\n});\n\n\n</script>\n"
        },
        "type": "TextExpression"
      },
      "is_visible": true,
      "vertical_centering": true,
      "order": 8,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "0px",
      "single_height": true,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true
    },
    "type": "HTML",
    "id": "bTIxk",
    "default_name": "HTML A",
    "name": "HTML Hide Input",
    "style": "HTML_default_"
  },
  "bTJrn": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 10,
      "floating_reference": "top",
      "custom_id": "bTJjV",
      "is_visible": true,
      "order": 9,
      "max_width": 100,
      "min_width": 0,
      "fit_height": true,
      "param_bTkbY1": {
        "entries": {
          "0": "sidebar"
        },
        "type": "TextExpression"
      },
      "param_bTkbj1": {
        "entries": {
          "0": "sidebar"
        },
        "type": "TextExpression"
      },
      "single_width": true,
      "min_width_css": "0px",
      "single_height": false,
      "min_height_css": "0px",
      "horiz_alignment": "flex-start",
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "type": "CustomElement",
    "id": "bTJrh",
    "default_name": "[Element] Popup Project Settings A"
  },
  "bTxLL": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 5,
      "group_type": "api.apiconnector2.text_stream",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTHAr_default)",
      "order": 1,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "30px",
      "single_height": true,
      "min_height_css": "30px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTIWL",
    "current_parent": "bTHon",
    "default_name": "Group M",
    "name": "Group chat title stream (use data)"
  },
  "bTmVn1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 14,
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "fit_width": true,
      "fit_height": true,
      "margin_left": 4,
      "single_width": false,
      "margin_bottom": 40,
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "center"
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
          "is_visible": true,
          "max_width_css": "28px",
          "min_width_css": "28px"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTmVb1",
    "current_parent": "bTIej",
    "default_name": "Group CZZ",
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
                  "next": {
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "order": 1,
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
                    "type": "Message",
                    "name": "is_not_empty",
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
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTmVd1",
        "default_name": "Image T",
        "name": "Image B",
        "style": "Image_standard_image_"
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
          "order": 2,
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
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTmVj1",
        "current_parent": "bTPvt",
        "default_name": "Image T",
        "name": "Image Avatar",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Organization Logos",
    "style": "Group_transparent_"
  },
};
