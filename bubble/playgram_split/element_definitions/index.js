import { Sidebar } from './sidebar/index.js';
import { Popup_Create_Project_Settings } from './popup_create_project_settings/index.js';
import { Memory_Knowledge } from './memory_knowledge/index.js';
import { GF_Chat_Menu } from './gf_chat_menu/index.js';
import { Element_Copy_Simple_Text } from './element_copy_simple_text/index.js';
import { Popup_User_Settings } from './popup_user_settings/index.js';
import { GF_RG_Memory_Menu } from './gf_rg_memory_menu/index.js';
import { LLM_Model_RG_Cell } from './llm_model_rg_cell/index.js';
import { Workspace_Settings } from './workspace_settings/index.js';
import { Library } from './library/index.js';
import { Subscription_plans } from './subscription_plans/index.js';
import { GF_User_Menu } from './gf_user_menu.js';
import { Dropdown_subscription_credits } from './dropdown_subscription_credits.js';
import { Popup_Delete_Memory } from './popup_delete_memory.js';
import { Dropdown_Project_Workspace_Member_Type } from './dropdown_project_workspace_member_type.js';
import { Element_Save_Custom_Instruction } from './element_save_custom_instruction.js';
import { Dropdown_admin_analytics } from './dropdown_admin_analytics.js';
import { Element_Copy_LLM_Message } from './element_copy_llm_message.js';
import { Chat_User_Icon } from './chat_user_icon.js';
import { Date } from './date.js';
import { Element_Regenerate } from './element_regenerate.js';

export const element_definitions = {
  "bTHoQ": Sidebar,
  "bTJjW": Popup_Create_Project_Settings,
  "bTMNU": Memory_Knowledge,
  "bTImm0": GF_Chat_Menu,
  "bTKXA0": Element_Copy_Simple_Text,
  "bTKhI0": Popup_User_Settings,
  "bTOtF0": GF_RG_Memory_Menu,
  "bTbEn0": LLM_Model_RG_Cell,
  "bTdLl1": Workspace_Settings,
  "bTjPp1": Library,
  "bTxAr1": Subscription_plans,
  "bTJKn": GF_User_Menu,
  "bTwmR": Dropdown_subscription_credits,
  "bTOHY0": Popup_Delete_Memory,
  "bTaul": Dropdown_Project_Workspace_Member_Type,
  "bTliP2": Element_Save_Custom_Instruction,
  "bTrCT1": Dropdown_admin_analytics,
  "bTZAm": Element_Copy_LLM_Message,
  "bTYWx": Chat_User_Icon,
  "bTYSM": Date,
  "bTnSM1": Element_Regenerate,
  "bTNfh": {
    "elements": {
      "bTNfi": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 14,
          "vertical_centering": true,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTNct",
        "default_name": "Group B",
        "name": "Group Main",
        "style": "Group_transparent_"
      },
      "bTNfo": {
        "properties": {
          "height": 4,
          "left": 67,
          "top": 13,
          "width": 4,
          "zindex": 15,
          "order": 1,
          "collapse_when_hidden": true
        },
        "type": "1543086664409x454646894723334140-AVv",
        "id": "bTNfj",
        "default_name": "PDFModel A"
      },
      "bTNgf": {
        "properties": {
          "height": 150,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 16,
          "html": {
            "entries": {
              "0": "<style>\n#gfMenuCanvas {\n  transform: translateX(-160px) !important;\n  width: 250px !important;\n}\n</style>"
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
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTNgd",
        "current_parent": "bTNcF",
        "default_name": "HTML A",
        "name": "HTML Move GF",
        "style": "HTML_default_"
      },
      "bTInP0": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 13,
          "boxshadow_horizontal": 0,
          "border_roundness": 10,
          "boxshadow_style": "none",
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "var(--color_bTGzr_default)",
          "boxshadow_blur": 2,
          "boxshadow_color": "var(--color_bTHBQ_default)",
          "order": 2,
          "reference": "bTNct",
          "unique_id": {
            "entries": {
              "0": "gfMenuCanvas"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "offset_left": -8,
          "single_width": false,
          "max_width_css": "200px",
          "min_width_css": "60px",
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "GroupFocus",
        "id": "bTNcK",
        "current_parent": "bTIml0",
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
              "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
              "vertical_centering": true,
              "background_style": "bgcolor",
              "bgcolor": "var(--color_bTGzr_default)",
              "boxshadow_blur": 10,
              "boxshadow_color": "rgba(0,0,0,0.2)",
              "boxshadow_spread": 0,
              "order": 1,
              "row_gap": 8,
              "use_gap": true,
              "fit_width": false,
              "fit_height": true,
              "margin_top": 6,
              "margin_left": 6,
              "padding_top": 8,
              "margin_right": 6,
              "padding_left": 8,
              "single_width": false,
              "margin_bottom": 6,
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
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "var(--color_bTsrr2_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTNcL",
            "default_name": "Group A",
            "elements": {
              "bTIhc": {
                "properties": {
                  "height": 0,
                  "left": 10,
                  "top": 10,
                  "width": 0,
                  "zindex": 4,
                  "border_roundness": 10,
                  "vertical_centering": true,
                  "order": 4,
                  "use_gap": true,
                  "fit_width": false,
                  "unique_id": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "column_gap": 8,
                  "fit_height": true,
                  "padding_top": 8,
                  "padding_left": 8,
                  "single_width": false,
                  "padding_right": 8,
                  "single_height": false,
                  "min_height_css": "36px",
                  "padding_bottom": 8,
                  "horiz_alignment": "flex-start",
                  "container_layout": "row",
                  "collapse_when_hidden": true,
                  "container_horiz_alignment": "flex-start"
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
                      "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
                    },
                    "type": "State"
                  }
                },
                "type": "Group",
                "id": "bTNcP",
                "current_parent": "bTIgr",
                "default_name": "Group A",
                "elements": {
                  "bTHpX": {
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Download (.pdf)"
                        },
                        "type": "TextExpression"
                      },
                      "height": 36,
                      "left": 0,
                      "top": 0,
                      "width": 100,
                      "zindex": 2,
                      "order": 4,
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
                    "type": "Text",
                    "id": "bTNcQ",
                    "default_name": "Text A",
                    "style": "Text_inter___400___14px___white_"
                  },
                  "bTIhL": {
                    "properties": {
                      "height": 30,
                      "left": 170,
                      "top": 22,
                      "width": 30,
                      "zindex": 4,
                      "icon": "feather download",
                      "icon_color": "var(--color_primary_contrast_default)",
                      "vertical_centering": true,
                      "order": 1,
                      "fit_height": false,
                      "padding_top": 0,
                      "padding_left": 0,
                      "single_width": true,
                      "min_width_css": "18px",
                      "padding_right": 0,
                      "single_height": true,
                      "min_height_css": "18px",
                      "padding_bottom": 0,
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
                    "id": "bTNcR",
                    "default_name": "Icon A"
                  }
                },
                "name": "Group Download pdf",
                "style": "Group_transparent_",
                "transitions": {
                  "background_style": {
                    "fn": "ease",
                    "duration": 200
                  }
                }
              }
            },
            "name": "Group Canvas Menu Content"
          }
        },
        "name": "GF Canvas Menu"
      }
    },
    "workflows": {
      "bTInc0": {
        "properties": {
          "event_name": "toggle_menu"
        },
        "type": "CustomEvent",
        "id": "bTNeZ",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTNcK"
            },
            "type": "ToggleElement",
            "id": "bTNea"
          }
        }
      },
      "bTIqt0": {
        "properties": {
          "element_id": "bTNcP",
          "breakpoint": false
        },
        "type": "ButtonClicked",
        "id": "bTNel",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTNcK"
            },
            "type": "ToggleElement",
            "id": "bTNem"
          },
          "1": {
            "properties": {
              "element_id": "bTNfj",
              "ARJ": 50,
              "ARL": 50,
              "ARM": 50,
              "ARN": 50,
              "ARO": true
            },
            "type": "1543086664409x454646894723334140-ARG",
            "id": "bTNfp"
          },
          "2": {
            "properties": {
              "element_id": "bTNfj",
              "AQu": {
                "entries": {
                  "0": "body"
                },
                "type": "TextExpression"
              },
              "AQv": 12,
              "AQy": "left",
              "ARA": {
                "entries": {
                  "0": "Roboto"
                },
                "type": "TextExpression"
              },
              "ARB": 1.2
            },
            "type": "1543086664409x454646894723334140-AQt",
            "id": "bTNfu"
          },
          "3": {
            "properties": {
              "element_id": "bTNfj",
              "AQS": {
                "entries": {
                  "0": {
                    "next": {
                      "type": "Message",
                      "name": "param_bTNgB",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTNcF"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "AQT": {
                "entries": {
                  "0": "body"
                },
                "type": "TextExpression"
              },
              "AQk": true
            },
            "type": "1543086664409x454646894723334140-AQR",
            "id": "bTNfz"
          },
          "4": {
            "properties": {
              "element_id": "bTNfj",
              "AQn": {
                "entries": {
                  "0": "frala"
                },
                "type": "TextExpression"
              }
            },
            "type": "1543086664409x454646894723334140-AQm",
            "id": "bTNgF"
          }
        }
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
      "background_style": "none",
      "parameters": {
        "0": {
          "is_list": false,
          "btype_id": "text",
          "optional": true,
          "param_id": "bTNgB",
          "param_name": "text",
          "editor_type": "DynamicValue"
        }
      },
      "min_width_px": 0,
      "default_width": 200,
      "min_height_px": 1,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTNcF",
    "name": "Canvas Menu",
    "custom_states": {
      "mode_": {
        "display": "rename",
        "value": "boolean",
        "make_static": true
      },
      "visible__": {
        "display": "visible?",
        "value": "boolean",
        "make_static": true
      }
    }
  },
  "bTqqf": {
    "elements": {
      "bTqrV": {
        "properties": {
          "height": 0,
          "left": 2,
          "top": 2.796875,
          "width": 0,
          "zindex": 4,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "order": 2,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 4,
          "fit_height": true,
          "padding_top": 2,
          "padding_left": 2,
          "single_width": false,
          "padding_right": 2,
          "single_height": false,
          "padding_bottom": 2,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
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
                "name": "custom.resended_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTqqe"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": true
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTqrT",
        "default_name": "Group A",
        "elements": {
          "bTqrZ": {
            "properties": {
              "height": 8,
              "left": -2,
              "top": 0,
              "width": 11,
              "zindex": 3,
              "icon": "feather check-circle",
              "icon_color": "var(--color_bTkRR4_default)",
              "is_visible": false,
              "vertical_centering": true,
              "order": 2,
              "fit_height": false,
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
                    "name": "custom.resended_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTqqe"
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
            "type": "Icon",
            "id": "bTqrB",
            "current_parent": "bTqqe",
            "default_name": "Icon A",
            "style": "Icon_standard_icon_"
          },
          "bTqra": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Resend invite"
                },
                "type": "TextExpression"
              },
              "height": 6,
              "left": -2,
              "top": 0,
              "width": 14,
              "zindex": 2,
              "order": 1,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "ab",
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
                          "name": "custom.resended_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTqqe"
                        },
                        "type": "GetElement",
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
                    "element_id": "bTqrT"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "underline": true,
                  "font_color": "var(--color_surface_default)"
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
                    "name": "custom.resended_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTqqe"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Invite resent"
                    },
                    "type": "TextExpression"
                  },
                  "font_color": "var(--color_bTkRR4_default)"
                },
                "type": "State"
              }
            },
            "type": "Text",
            "id": "bTqqj",
            "current_parent": "bTqqe",
            "default_name": "Text A",
            "style": "Text_inter___400___12px____afafaf_"
          }
        },
        "name": "Group resend invite (use button)",
        "style": "Group_transparent_"
      }
    },
    "workflows": {
      "bTqqv": {
        "properties": {
          "element_id": "bTqrT"
        },
        "type": "ButtonClicked",
        "id": "bTqqp",
        "actions": {
          "0": {
            "properties": {
              "value": true,
              "element_id": "bTqqe",
              "custom_state": "custom.resended_"
            },
            "type": "SetCustomState",
            "id": "bTqrH"
          },
          "1": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTPtl",
              "_wf_param_email": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "user_email_for_search_text",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTqqe"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "_wf_param_resend": true,
              "_wf_param_user_type": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "user_type_option_user_type__os_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTqqe"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "ignore_privacy_rules": true,
              "_wf_param_organization": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTqqe"
                },
                "type": "ThisElement",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTqqr"
          },
          "2": {
            "properties": {
              "length": 5000,
              "hide_status_bar": true
            },
            "type": "PauseWFClient",
            "id": "bTqrO"
          },
          "3": {
            "properties": {
              "value": false,
              "element_id": "bTqqe",
              "custom_state": "custom.resended_"
            },
            "type": "SetCustomState",
            "id": "bTqrJ"
          }
        }
      }
    },
    "properties": {
      "height": 20,
      "width": 20,
      "zindex": 6,
      "element_type": "Group",
      "group_type": "custom.workspace",
      "order": 3,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 0,
      "fit_height": true,
      "min_width_px": 0,
      "default_width": 200,
      "min_height_px": 20,
      "vert_alignment": "center",
      "element_version": 5,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "responsive_version": 1,
      "collapse_when_hidden": false,
      "custom_element_platform": "web"
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
            "name": "custom.resended_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTqqe"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "type": "State"
      }
    },
    "type": "CustomDefinition",
    "id": "bTqqe",
    "name": "[Element] Resend invite",
    "style": "Group_transparent_",
    "custom_states": {
      "resended_": {
        "display": "resended",
        "value": "boolean",
        "rank": 0,
        "default_val": false,
        "make_static": true
      }
    }
  },
  "bTkEa1": {
    "elements": {
      "bTsaH": {
        "properties": {
          "height": 150,
          "left": 10,
          "top": 10,
          "width": 280,
          "zindex": 11,
          "html": {
            "entries": {
              "0": "<script>\n  window.FRALA_WORKSPACE_ID    = \"",
              "1": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "2": "\";\n  window.FRALA_SESSION_ID      = \"",
              "3": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_api_c2_date",
                          "value": {
                            "next": {
                              "properties": {
                                "component_to_extract": "date"
                              },
                              "type": "Message",
                              "name": "rounded_down",
                              "is_slidable": true
                            },
                            "properties": {
                              "name": "Current Date/Time"
                            },
                            "type": "PageData",
                            "is_slidable": false
                          },
                          "constraint_type": "equals"
                        },
                        "1": {
                          "key": "_api_c2_workspace_id",
                          "value": {
                            "entries": {
                              "0": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "current_workspace_custom_workspace",
                                  "is_slidable": false
                                },
                                "type": "CurrentUser",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
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
                  "name": "get_AAx",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTkFR1"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "4": "\";\n\n  if (!window.FRALA_TIME_TRACKER_INITIALIZED) {\n    window.FRALA_TIME_TRACKER_INITIALIZED = true;\n\n    (function() {\n      const API_URL = \"",
              "5": {
                "properties": {
                  "name": "Website Home"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "6": "api/1.1/wf/time_spent_counter\";\n      const INACTIVITY_THRESHOLD_MS = 5000;\n      let lastActivity = Date.now();\n      let activeSeconds = 0;\n      let hasSentForThisPage = false;\n\n      function onActivity() {\n        lastActivity = Date.now();\n      }\n\n      [\"mousemove\",\"mousedown\",\"keydown\",\"scroll\",\"touchstart\"].forEach(function(name) {\n        window.addEventListener(name, onActivity, { passive: true });\n      });\n\n      setInterval(function() {\n        const now = Date.now();\n        if (!document.hidden && now - lastActivity <= INACTIVITY_THRESHOLD_MS) {\n          activeSeconds += 1;\n        }\n      }, 1000);\n\n      function sendTime() {\n        if (hasSentForThisPage) return;\n        if (activeSeconds <= 0) return;\n\n        hasSentForThisPage = true;\n\n        const d = new Date();\n        d.setHours(0, 0, 0, 0);\n        const midnightISO = d.toISOString();\n\n        const payload = {\n          workspace_user:    window.FRALA_WORKSPACE_ID    || \"\",\n          session_id:      window.FRALA_SESSION_ID      || \"\",\n          seconds:         activeSeconds\n        };\n\n        fetch(API_URL, {\n          method: \"POST\",\n          headers: { \"Content-Type\": \"application/json\" },\n          body: JSON.stringify(payload)\n        });\n\n        activeSeconds = 0;\n      }\n\n      window.addEventListener(\"beforeunload\", sendTime);\n      window.addEventListener(\"pagehide\", sendTime);\n    })();\n  }\n</script>\n"
            },
            "type": "TextExpression"
          },
          "is_visible": true,
          "vertical_centering": true,
          "order": 6,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTsaC",
        "current_parent": "bTkEZ1",
        "default_name": "HTML B",
        "name": "HTML Time Tracking",
        "style": "HTML_default_"
      },
      "bTkEg1": {
        "properties": {
          "height": 20,
          "left": 34,
          "top": 24,
          "width": 20,
          "zindex": 65,
          "AXk": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "supabase_jwt_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "AXt": 10,
          "order": 9,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "1px",
          "single_height": true,
          "min_height_css": "1px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "1687446439843x865924681433350100-AXj",
        "id": "bTkEb1",
        "current_parent": "bTkEZ1",
        "default_name": "SupabaseCustomauth A",
        "name": "SupabaseCustomauth A"
      },
      "bTkFW1": {
        "properties": {
          "height": 20,
          "left": 10,
          "top": 10,
          "width": 20,
          "zindex": 67,
          "AAw": "api.apiconnector2.bTkBH.bTkFX1",
          "ABE": "session_time_logs",
          "ABk": true,
          "AJx": true,
          "Aeu": false,
          "Agg": false,
          "order": 12,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "1px",
          "single_height": true,
          "min_height_css": "1px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "1687446439843x865924681433350100-AAv",
        "id": "bTkFR1",
        "current_parent": "bTkEZ1",
        "default_name": "SupabaseDatabase B",
        "name": "db. Session Time Logs"
      }
    },
    "workflows": {
      "bTkZT": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "logged_in",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "element_id": "bTkEb1",
          "workflow_disabled": true
        },
        "type": "1687446439843x865924681433350100-AXs",
        "id": "bTkZN",
        "actions": {
          "0": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTkDq",
              "_wf_param_workspace_user": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTkZP"
          }
        }
      },
      "bTkEs1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "logged_in",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "element_id": "bTkEb1",
          "workflow_disabled": true
        },
        "type": "1687446439843x865924681433350100-AXn",
        "id": "bTkEn1",
        "actions": {
          "0": {
            "properties": {
              "date": {
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "api_event": "bTkDq",
              "_wf_param_workspace_user": {
                "next": {
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "ScheduleAPIEvent",
            "id": "bTkEt1"
          }
        }
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 0,
      "default_width": 50,
      "min_height_px": 10,
      "element_version": 5,
      "container_layout": "row",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTkEZ1",
    "name": "[Data Source] Supabase"
  },
  "bTmRm1": {
    "elements": {
      "bTmRy1": {
        "properties": {
          "height": 280,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 45,
          "border_roundness": 0,
          "boxshadow_style": "none",
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "order": 1,
          "reference": "bTmSF1",
          "fit_height": true,
          "offset_left": 0,
          "padding_left": 10,
          "single_width": false,
          "max_width_css": "350px",
          "min_width_css": "350px",
          "padding_right": 10,
          "single_height": false,
          "padding_bottom": 10,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "GroupFocus",
        "id": "bTmRn1",
        "current_parent": "bTmRl1",
        "default_name": "GroupFocus A",
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
              "bgcolor": "rgba(37,38,39,1)",
              "border_style": "none",
              "boxshadow_blur": 10,
              "boxshadow_color": "rgba(var(--color_bTkRR4_default_rgb), 0.12)",
              "order": 3,
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
            "id": "bTmRt1",
            "default_name": "Group A",
            "elements": {
              "bTlkl2": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "We automatically save the required information\nbut you can manually force save anything else."
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -10,
                  "top": -26,
                  "width": 100,
                  "zindex": 1,
                  "font_color": "var(--color_bTkRL4_default)",
                  "font_size": 14,
                  "is_visible": true,
                  "line_height": 1.3,
                  "order": 4,
                  "opacity": 100,
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
                "id": "bTmRx1",
                "current_parent": "bTliW2",
                "default_name": "Text A",
                "style": "Text_inter___400___14px____afafaf_",
                "transitions": {
                  "font_color": {
                    "fn": "ease",
                    "duration": 200
                  },
                  "opacity": {
                    "fn": "ease",
                    "duration": 300
                  }
                }
              }
            },
            "style": "Group_transparent_"
          }
        },
        "name": "GF Tooltip info",
        "style": "GroupFocus_shadow_"
      },
      "bTmSK1": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 46,
          "vertical_centering": true,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "26px",
          "single_height": false,
          "min_height_css": "26px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTmSF1",
        "default_name": "Group B",
        "name": "Group save to memory",
        "style": "Group_transparent_"
      }
    },
    "workflows": {
      "bTmSc1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTmRl1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "run_when": "every_time"
        },
        "type": "ConditionTrue",
        "id": "bTmSL1",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTmRn1"
            },
            "type": "ToggleElement",
            "id": "bTmSd1"
          }
        }
      },
      "bTmSo1": {
        "properties": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "isnt_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTmRl1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "run_when": "every_time"
        },
        "type": "ConditionTrue",
        "id": "bTmSi1",
        "actions": {
          "0": {
            "properties": {
              "element_id": "bTmRn1"
            },
            "type": "HideElement",
            "id": "bTmSp1"
          }
        }
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 26,
      "default_width": 200,
      "min_height_px": 26,
      "element_version": 5,
      "container_layout": "row",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTmRl1",
    "name": "GF Save to Memory"
  },
  "bTPBy": {
    "elements": {
      "bTHEc": {
        "properties": {
          "text": {
            "entries": {
              "0": "Offline - you are using cached data."
            },
            "type": "TextExpression"
          },
          "bold": false,
          "font_face": "var(--font_default):::regular",
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 3,
          "font_color": "rgba(255,255,255,1)",
          "font_size": 12,
          "line_height": 1.4,
          "vertical_centering": true,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "font_family": "var(--font_default)",
          "font_weight": "400",
          "padding_top": 0,
          "padding_left": 0,
          "single_width": false,
          "min_width_css": "0px",
          "padding_right": 0,
          "single_height": false,
          "min_height_css": "0px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start"
        },
        "type": "Text",
        "id": "bTPBs",
        "current_parent": "bTHDt",
        "default_name": "Text B"
      },
      "bTHEi": {
        "properties": {
          "height": 30,
          "left": 25,
          "top": 0,
          "width": 30,
          "zindex": 2,
          "icon": "phosphor outline cloud-slash",
          "icon_color": "rgba(255,255,255,1)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 5,
          "padding_left": 5,
          "single_width": true,
          "min_width_css": "30px",
          "padding_right": 5,
          "single_height": true,
          "min_height_css": "30px",
          "padding_bottom": 5,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start"
        },
        "type": "Icon",
        "id": "bTPBt",
        "current_parent": "bTHDt",
        "default_name": "Icon B"
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "FloatingGroup",
      "background_style": "bgcolor",
      "bgcolor": "rgba(82,82,82,1)",
      "fit_width": true,
      "padding_top": 8,
      "padding_left": 16,
      "single_width": false,
      "default_width": 393,
      "min_height_px": 0,
      "padding_right": 16,
      "padding_bottom": 8,
      "element_version": 5,
      "container_layout": "row",
      "responsive_version": 1,
      "custom_element_platform": "mobile",
      "container_vert_alignment": "center",
      "container_horiz_alignment": "center"
    },
    "type": "CustomDefinition",
    "id": "bTPBr",
    "default_name": "offline_banner",
    "name": "offline_banner"
  },
  "bTqYX0": {
    "elements": {
      "bTqYe0": {
        "properties": {
          "height": 150,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 68,
          "html": {
            "entries": {
              "0": "<style>\n  .container1 {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  /* \u041a\u0440\u0443\u0436\u043e\u043a \u0441 \u043c\u044f\u0433\u043a\u043e\u0439 \u0442\u0435\u043d\u044c\u044e \u0438 \u043f\u0443\u043b\u044c\u0441\u0430\u0446\u0438\u0435\u0439 */\n  .loader1 {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: #68b0c1; /* \u043d\u043e\u0432\u044b\u0439 \u0446\u0432\u0435\u0442 */\n    box-shadow: 0 0 4px rgba(104, 176, 193, 0.6); /* \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u0430\u044f \u0442\u0435\u043d\u044c */\n    animation: pulse1 2.2s ease-in-out infinite;\n  }\n\n  @keyframes pulse1 {\n    0% { transform: scale(0.75); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(0.75); }\n  }\n</style>\n\n<div class=\"container1\">\n  <div class=\"loader1\"></div>\n</div>\n"
            },
            "type": "TextExpression"
          },
          "vertical_centering": true,
          "order": 2,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "30px",
          "single_height": true,
          "min_height_css": "30px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTqYZ0",
        "current_parent": "bTqYR0",
        "default_name": "HTML A",
        "name": "HTML Loader",
        "style": "HTML_default_"
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 0,
      "default_width": 30,
      "min_height_px": 30,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTqYR0",
    "name": "Dot Loader HTML"
  },
  "bTLgC": {
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "parameters": {
        "0": {
          "is_list": false,
          "btype_id": "text",
          "optional": true,
          "param_id": "bTUaI",
          "param_name": "color",
          "editor_type": "DynamicValue"
        }
      },
      "min_width_px": 0,
      "default_width": 20,
      "min_height_px": 20,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bTLgB",
    "elements": {
      "bTLgI": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 31,
          "zindex": 3,
          "icon": "phosphor regular circle-notch",
          "border_roundness": 0,
          "icon_color": {
            "next": {
              "type": "Message",
              "name": "param_bTUaI",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTLgB"
            },
            "type": "GetElement",
            "is_slidable": false,
            "moved_to_top": true
          },
          "is_visible": true,
          "vertical_centering": true,
          "order": 1,
          "spin_icon": true,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "margin_bottom": 0,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "horiz_alignment": "center",
          "nonant_alignment": "cc",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTLgD",
        "current_parent": "bTLgB",
        "default_name": "Icon A"
      }
    },
    "name": "Circle Loader"
  },
  "bToHL": {
    "elements": {
      "bToHR": {
        "properties": {
          "height": 240,
          "left": -120,
          "top": -40,
          "width": 887.5247524752475,
          "zindex": 2,
          "src": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770291829648x833100387575216300/Group%2051.png",
          "order": 1,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "200px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 747,
          "aspect_ratio_height": 202,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bToHP",
        "default_name": "Image A",
        "style": "Image_standard_image_"
      }
    },
    "properties": {
      "height": 200,
      "width": 200,
      "element_type": "Group",
      "background_style": "none",
      "min_width_px": 0,
      "default_width": 200,
      "min_height_px": 0,
      "element_version": 5,
      "container_layout": "column",
      "custom_element_platform": "web"
    },
    "type": "CustomDefinition",
    "id": "bToHK",
    "name": "Logo"
  },
  "bTHsk": null,
  "bTJYH": null,
  "bTJZU": null,
  "bTJtq": null,
  "bTNuR": null,
  "bTapm": null,
  "bTwlm": null,
  "bTeDA1": null,
  "length": 3,
};
