import { Group_Input_Scroll } from './group_input_scroll/index.js';
import { Group_Add_Files_Instructions_to_Project } from './group_add_files_instructions_to_project.js';

export const elements = {
  "bTuJt0": Group_Input_Scroll,
  "bTuJx0": Group_Add_Files_Instructions_to_Project,
  "bTuJr0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 10,
      "border_roundness": 10,
      "data_source": {
        "next": {
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUif0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "custom.project",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "none",
      "order": 1,
      "row_gap": 12,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "projectName"
        },
        "type": "TextExpression"
      },
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 56,
      "max_width_css": "780px",
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "space-between"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUif0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
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
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": "true",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "parameter_name": {
              "entries": {
                "0": "new_chat"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "properties": {
          "container_horiz_alignment": "center"
        },
        "type": "State"
      },
      "2": {
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
          "is_slidable": false
        },
        "properties": {
          "padding_left": 8,
          "margin_bottom": 24,
          "padding_right": 8
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTUdZ0",
    "current_parent": "bTHTj0",
    "default_name": "Group Q",
    "elements": {
      "bTUUV": {
        "properties": {
          "height": 280,
          "left": 463,
          "top": 23.1796875,
          "width": 280,
          "zindex": 4,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.3)",
          "border_roundness": 12,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.project",
          "is_visible": false,
          "vertical_centering": true,
          "border_style": "solid",
          "order": 4,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 6,
          "fit_height": true,
          "padding_left": 15,
          "single_width": false,
          "padding_right": 15,
          "single_height": false,
          "min_height_css": "36px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_vert_alignment": "center"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
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
                            "name": "uploading_files__boolean",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "deleted__boolean",
                        "value": false,
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "project_instruction_files_list_custom_project_instruction_file",
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
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "isnt_clickable",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
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
              "bgcolor": "var(--color_bTGzr_default)"
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
                "name": "uploading_files__boolean",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTUda0",
        "default_name": "Group YZZ",
        "elements": {
          "bTUUm": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 1,
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "count",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "project_instruction_files_list_custom_project_instruction_file",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "said": "a2Vsdm8tMzE4ODQ=",
                                    "is_slidable": false
                                  },
                                  "2": " files"
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
                                        "name": "count",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "project_instruction_files_list_custom_project_instruction_file",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "said": "a2Vsdm8tMzE4ODQ=",
                                    "is_slidable": false
                                  },
                                  "2": " file"
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
                        "name": "count",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "project_instruction_files_list_custom_project_instruction_file",
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
              "left": 58,
              "top": 27.375,
              "width": 100,
              "zindex": 2,
              "order": 3,
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
                    "name": "uploading_files__boolean",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Uploading files..."
                    },
                    "type": "TextExpression"
                  },
                  "font_color": "var(--color_bTGzv_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTUdb0",
            "default_name": "Text JZ",
            "style": "Text_inter___400___14px___white_"
          },
          "bTUUs": {
            "properties": {
              "height": 30,
              "left": 35.09375,
              "top": 19.1796875,
              "width": 30,
              "zindex": 3,
              "icon": "feather file",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 2,
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
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdg0"
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
            "id": "bTUdf0",
            "default_name": "Icon U"
          },
          "bTUYL": {
            "properties": {
              "height": 200,
              "left": 447,
              "top": 355,
              "width": 200,
              "zindex": 4,
              "floating_reference": "top",
              "custom_id": "bTLgB",
              "is_visible": false,
              "order": 1,
              "fit_width": true,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "param_bTUZM": true,
              "param_bTUaI": {
                "entries": {
                  "0": "#afafaf"
                },
                "type": "TextExpression"
              },
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "lock_in_editor": false,
              "min_height_css": "20px",
              "vert_alignment": "center",
              "horiz_alignment": "center",
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
                    "name": "uploading_files__boolean",
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
            "type": "CustomElement",
            "id": "bTUdg0",
            "current_parent": "bTUUT",
            "default_name": "[Element] Loader C",
            "name": "[Element] Loader Uploading Files",
            "custom_definition_name": "[Element] Loader"
          }
        },
        "name": "Group View Project Files",
        "style": "Group_transparent_"
      },
      "bTUUb": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 5,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.project",
          "vertical_centering": true,
          "order": 2,
          "use_gap": true,
          "fit_width": true,
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
        "id": "bTUdh0",
        "default_name": "Group ZZZ",
        "elements": {
          "bTUUf": {
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
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": 0,
              "top": 0,
              "width": 100,
              "zindex": 2,
              "order": 2,
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
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "parameter_name": {
                      "entries": {
                        "0": "new_chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl"
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Write to start a new chat in ",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "name_text",
                          "is_slidable": false
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      },
                      "2": "."
                    },
                    "type": "TextExpression"
                  },
                  "font_alignment": "center"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTUdl0",
            "default_name": "Text F",
            "style": "Text_inter___400___24px___white_copy_"
          },
          "bTUUg": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 240,
              "zindex": 3,
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765891538106x440246617549433100/Folder%20Chart%20Column.svg"
                },
                "type": "TextExpression"
              },
              "order": 1,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "32px",
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
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "parameter_name": {
                      "entries": {
                        "0": "new_chat"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "GetParamFromUrl",
                  "said": "a2Vsdm8tMzE4ODQ="
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              },
              "1": {
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
                  "is_slidable": false
                },
                "properties": {
                  "min_width_css": "22px"
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
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508709350x885901124746142600/Folder%20Chart%20Column%20%281%29.svg"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTUdm0",
            "default_name": "Image A",
            "name": "Image Icon",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group Project Name/Icon",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Project Name/Files",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTuJs0": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 17,
      "vertical_centering": true,
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "horiz_alignment": "center",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTqlB3",
    "default_name": "Group WZZZZ",
    "elements": {
      "bTqlH3": {
        "properties": {
          "text": {
            "entries": {
              "0": "[center]This chat won't appear in history and will be deleted after 6 hours of inactivity.[/center]"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 12,
          "is_visible": false,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "margin_top": 0,
          "single_width": false,
          "margin_bottom": 40,
          "max_width_css": "350px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "nonant_alignment": "aa",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "temporary"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTtcm0"
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
              "properties": {
                "value": "option.chat_type__os_",
                "parameter_name": {
                  "entries": {
                    "0": "type"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTUeD0",
        "current_parent": "bTHTi0",
        "default_name": "Text I",
        "name": "Text Type to begin your p copy",
        "style": "Text_inter___400___16px___neutral_copy_copy_"
      },
      "bTqlI3": {
        "properties": {
          "text": {
            "entries": {
              "0": "Type to begin your personal chat."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 13,
          "font_alignment": "center",
          "font_color": "var(--color_bTkRP4_default)",
          "font_size": 24,
          "is_visible": false,
          "order": 1,
          "fit_width": true,
          "unique_id": {
            "entries": {
              "0": "newChatTitle"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "margin_top": 0,
          "single_width": false,
          "margin_bottom": 36,
          "max_width_css": "780px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "nonant_alignment": "aa",
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
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUif0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "isnt_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTtcm0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.first_message_content_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUdV0"
                          },
                          "type": "GetElement",
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
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
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
            "properties": {
              "is_visible": true
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "team"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "option.chat_type__os_",
                "parameter_name": {
                  "entries": {
                    "0": "type"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Write to start a team chat."
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "2": {
            "condition": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "temporary"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "value": "option.chat_type__os_",
                "parameter_name": {
                  "entries": {
                    "0": "type"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Write to start a temporary chat."
                },
                "type": "TextExpression"
              },
              "margin_bottom": 10
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
                      "element_id": "bTdQv1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUhQ0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
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
              "is_slidable": false
            },
            "properties": {
              "font_size": 18
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTUeE0",
        "default_name": "Text H",
        "name": "Text Type to begin your p",
        "style": "Text_inter___400___24px___white_"
      }
    },
    "name": "Group head texts",
    "style": "Group_transparent_"
  },
};
