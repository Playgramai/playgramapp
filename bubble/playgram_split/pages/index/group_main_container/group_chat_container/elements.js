import { Group_Input_Project_name_Project_Chats } from './group_input_project_name_project_chats/index.js';
import { Group_Column_Container_RG_New_Message } from './group_column_container_rg_new_message/index.js';

export const elements = {
  "bTKbZ0": Group_Input_Project_name_Project_Chats,
  "bTWFT0": Group_Column_Container_RG_New_Message,
  "bTNml": {
    "properties": {
      "height": 200,
      "left": 64.5,
      "top": 78,
      "width": 200,
      "zindex": 6,
      "floating_reference": "top",
      "custom_id": "bTMGw",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "unique_id": {
        "entries": {
          "0": "memory-knowledge"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "bb",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "1": {
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTUhQ0",
    "default_name": "[Element] Memory Management A",
    "name": "[Element] Memory & Knowledge A"
  },
  "bTVIE": {
    "properties": {
      "order": 1
    }
  },
  "bTIMD0": {
    "properties": {
      "height": 0,
      "left": 380,
      "top": 538,
      "width": 0,
      "zindex": 4,
      "center_background": true,
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "image",
      "bgcolor": "var(--color_bTGzq_default)",
      "background_image": {
        "entries": {
          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766565289865x745777914183070500/Unavailable.svg"
        },
        "type": "TextExpression"
      },
      "order": 11,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "chatUnavaliable"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "lock_in_editor": false,
      "crop_responsive": true,
      "horiz_alignment": "center",
      "container_layout": "column",
      "nonant_alignment": "bb",
      "collapse_when_hidden": true,
      "background_size_cover": false,
      "container_vert_alignment": "center"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "personal"
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
                            "type": "CurrentUser",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "Created By",
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "share_access_boolean",
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
              "type": "Message",
              "name": "type_option_chat_type__os_",
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
          "said": "a2Vsdm8tMzE4ODQ=",
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
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "team"
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
                            "type": "Message",
                            "name": "is_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "organization_workspace_custom_organization",
                              "value": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "organization_custom_organization",
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
                              "constraint_type": "equals"
                            }
                          }
                        },
                        "type": "Message",
                        "name": "filtered",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "workspaces_list_custom_workspace",
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
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "share_access_boolean",
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
              "type": "Message",
              "name": "type_option_chat_type__os_",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
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
                    "option_set": "option.chat_type__os_",
                    "option_value": "project"
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
                              "next": {
                                "type": "Message",
                                "name": "current_workspace_custom_workspace",
                                "is_slidable": false
                              },
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "members_list_custom_workspace",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "project_custom_project",
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_false",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "share_access_boolean",
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
                    "next": {
                      "args": {
                        "next": {
                          "args": "no",
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "next": {
                                          "type": "Message",
                                          "name": "current_organization_custom_organization",
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
                                                    "option_value": "admin"
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
                                                              "option_value": "owner"
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
                                        "type": "Message",
                                        "name": "and_",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "organization_custom_organization",
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
                              "2": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "ArbitraryText"
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "type_option_chat_type__os_",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "Created Date",
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_id",
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
      }
    },
    "type": "Group",
    "id": "bTUhR0",
    "default_name": "Group O",
    "elements": {
      "bTimS1": {
        "properties": {
          "text": {
            "entries": {
              "0": "This chat is unavailable"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "width": 100,
          "zindex": 13,
          "font_color": "var(--color_bTkRL4_default)",
          "font_size": 20,
          "is_visible": true,
          "order": 12,
          "fit_width": true,
          "fit_height": true,
          "margin_top": 0,
          "single_width": false,
          "margin_bottom": 24,
          "max_width_css": "780px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTiZb1",
        "current_parent": "bTWBi0",
        "default_name": "Text HZ",
        "name": "Text No Shared",
        "style": "Text_inter___400___16px___white_"
      },
      "bToMt1": {
        "properties": {
          "text": {
            "entries": {
              "0": "This shared link may have been removed, expired, or turned private."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 10,
          "top": 10,
          "width": 100,
          "zindex": 13,
          "font_alignment": "center",
          "font_color": "rgba(112,112,114,1)",
          "font_size": 16,
          "is_visible": true,
          "order": 8,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 0,
          "margin_left": 20,
          "margin_right": 20,
          "single_width": false,
          "margin_bottom": 10,
          "max_width_css": "780px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "center",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bToMr1",
        "current_parent": "bTUhR0",
        "default_name": "Text RZ",
        "name": "Text No Shared copy",
        "style": "Text_inter___400___16px___white_"
      },
      "bToMz1": {
        "properties": {
          "height": 240,
          "left": 379,
          "top": 349,
          "width": 240,
          "zindex": 62,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766565432759x666113244066908800/Icon%20R%20%287%29.svg"
            },
            "type": "TextExpression"
          },
          "order": 5,
          "fit_height": true,
          "single_width": true,
          "margin_bottom": 24,
          "min_width_css": "44px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "center",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bToMx1",
        "default_name": "Image U",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group unavaliable chat ",
    "style": "Group_transparent_"
  },
  "bTdQx1": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 5,
      "floating_reference": "top",
      "custom_id": "bTdDD1",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "fit_height": false,
      "param_bTtAw0": {
        "next": {
          "type": "Message",
          "name": "custom.hide_members_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUjC0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "aa",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "analytics"
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
                          "option_value": "user"
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "option.sidebar_menu__os_",
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTdQv1",
    "default_name": "[Element] Analytics A",
    "name": "[Element] Workspace Settings"
  },
  "bTjWd1": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": 0,
      "width": 200,
      "zindex": 7,
      "floating_reference": "top",
      "custom_id": "bTjEp1",
      "is_visible": false,
      "max_width": 100,
      "min_width": 0,
      "fit_height": false,
      "single_width": false,
      "min_width_css": "0px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "overflow_scroll": true,
      "nonant_alignment": "ba",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
    },
    "states": {
      "0": {
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
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTjWY1",
    "default_name": "[Element] Library A"
  },
  "bTsSb0": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 8,
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#ffffff"
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
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "coverGroup"
        },
        "type": "TextExpression"
      },
      "fit_height": false,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "nonant_alignment": "bb",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "type": "Group",
    "id": "bTsRZ0",
    "default_name": "Group XZZZZ",
    "elements": {
      "bTsSt0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 2,
          "floating_reference": "top",
          "custom_id": "bTqYR0",
          "order": 1,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": true,
          "margin_bottom": 160,
          "min_width_css": "30px",
          "single_height": false,
          "min_height_css": "30px",
          "horiz_alignment": "center",
          "nonant_alignment": "aa",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTsSn0",
        "default_name": "Dot Loader HTML A"
      }
    },
    "name": "Group loader chat",
    "style": "Group_transparent_"
  },
};
