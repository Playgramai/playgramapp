import { Popup_User_Settings } from './popup_user_settings/index.js';

export const elements = {
  "bTJvb": Popup_User_Settings,
  "bTLDc": {
    "properties": {
      "height": 320,
      "left": -120,
      "top": -120,
      "width": 320,
      "zindex": 15,
      "vertical_centering": true,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "296px",
      "single_height": false,
      "min_height_css": "296px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTLDX",
    "default_name": "Popup B",
    "elements": {
      "bTLDi": {
        "properties": {
          "height": 350,
          "left": -80,
          "top": -150,
          "width": 280,
          "zindex": 2,
          "data_source": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "Created By",
                  "value": {
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "1": {
                  "key": "archived__boolean",
                  "value": true,
                  "constraint_type": "equals"
                },
                "2": {
                  "key": "type_option_chat_type__os_",
                  "value": {
                    "properties": {
                      "option_set": "option.chat_type__os_",
                      "option_value": "personal"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "3": {
                  "key": "organization_custom_organization",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              },
              "type_to_find": "custom.chat"
            },
            "type": "Search"
          },
          "group_type": "custom.chat",
          "background_style": "bgcolor",
          "bgcolor": "var(--color_alert_default)",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": true,
          "min_width_css": "40px",
          "single_height": true,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
        },
        "type": "RepeatingGroup",
        "id": "bTLDd",
        "default_name": "RepeatingGroup C",
        "name": "RG Archived Personal Chats",
        "style": "RepeatingGroup_transparent_"
      },
      "bTLDo": {
        "properties": {
          "height": 350,
          "left": -70,
          "top": -140,
          "width": 280,
          "zindex": 2,
          "data_source": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "organization_custom_organization",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "1": {
                  "key": "archived__boolean",
                  "value": true,
                  "constraint_type": "equals"
                },
                "2": {
                  "key": "type_option_chat_type__os_",
                  "value": {
                    "properties": {
                      "option_set": "option.chat_type__os_",
                      "option_value": "team"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              },
              "type_to_find": "custom.chat"
            },
            "type": "Search"
          },
          "group_type": "custom.chat",
          "background_style": "bgcolor",
          "bgcolor": "var(--color_alert_default)",
          "order": 3,
          "fit_width": true,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": true,
          "min_width_css": "40px",
          "single_height": true,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
        },
        "type": "RepeatingGroup",
        "id": "bTLDj",
        "current_parent": "bTLDX",
        "default_name": "RepeatingGroup D",
        "name": "RG Archived Team Chats",
        "style": "RepeatingGroup_transparent_"
      },
      "bTLDu": {
        "properties": {
          "height": 350,
          "left": -60,
          "top": -130,
          "width": 280,
          "zindex": 2,
          "data_source": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "organization_custom_organization",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "1": {
                  "key": "archived__boolean",
                  "value": true,
                  "constraint_type": "equals"
                },
                "2": {
                  "key": "type_option_chat_type__os_",
                  "value": {
                    "properties": {
                      "option_set": "option.chat_type__os_",
                      "option_value": "project"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "3": {
                  "key": "project_custom_project",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "get_list_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTLDv"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "constraint_type": "in"
                }
              },
              "type_to_find": "custom.chat"
            },
            "type": "Search"
          },
          "group_type": "custom.chat",
          "background_style": "bgcolor",
          "bgcolor": "var(--color_alert_default)",
          "order": 4,
          "fit_width": true,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": true,
          "min_width_css": "40px",
          "single_height": true,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
        },
        "type": "RepeatingGroup",
        "id": "bTLDp",
        "current_parent": "bTLDX",
        "default_name": "RepeatingGroup E",
        "name": "RG Archived Project Chats",
        "style": "RepeatingGroup_transparent_"
      },
      "bTLEA": {
        "properties": {
          "height": 350,
          "left": -50,
          "top": -120,
          "width": 280,
          "zindex": 2,
          "data_source": {
            "next": {
              "next": {
                "type": "Message",
                "name": "projects_list_custom_project",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "group_type": "custom.project",
          "background_style": "bgcolor",
          "bgcolor": "var(--color_alert_default)",
          "order": 5,
          "fit_width": true,
          "fit_height": true,
          "fixed_rows": false,
          "single_width": true,
          "min_width_css": "40px",
          "single_height": true,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true
        },
        "type": "RepeatingGroup",
        "id": "bTLDv",
        "current_parent": "bTLDX",
        "default_name": "RepeatingGroup F",
        "name": "RG User Projects",
        "style": "RepeatingGroup_transparent_"
      },
      "bTPxy0": {
        "properties": {
          "height": 280,
          "left": -80,
          "top": -80,
          "width": 280,
          "zindex": 3,
          "border_color": "var(--color_alert_default)",
          "border_width": 2,
          "data_source": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "constraints": {
                "0": {
                  "key": "user_user",
                  "value": {
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                },
                "1": {
                  "key": "organization_workspace_custom_organization",
                  "value": {
                    "next": {
                      "type": "Message",
                      "name": "current_organization_custom_organization",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              },
              "type_to_find": "custom.workspace"
            },
            "type": "Search"
          },
          "group_type": "custom.workspace",
          "vertical_centering": true,
          "border_style": "solid",
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "40px",
          "single_height": true,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTPxt0",
        "default_name": "Group U",
        "name": "Group Current Workspace User",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Search",
    "style": "Popup_standard_popup_"
  },
  "bTLGV": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
      "width": 320,
      "zindex": 14,
      "group_type": "custom.chat",
      "order": 2,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "popup-user-settings-del-archivedChat"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": false,
      "max_width_css": "450px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Popup",
    "id": "bTLFs",
    "current_parent": "bTKdH0",
    "default_name": "Popup C",
    "elements": {
      "bTINR": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 16,
          "width": 0,
          "zindex": 13,
          "vertical_centering": true,
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 20,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTLFx",
        "default_name": "Group T",
        "elements": {
          "bTINS": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Delete chat?"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 11,
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
            "id": "bTLFy",
            "current_parent": "bTIMu",
            "default_name": "Text O",
            "style": "Text_inter___400___18px___white_"
          },
          "bToQK1": {
            "properties": {
              "height": 28,
              "left": 0,
              "top": 0,
              "width": 28,
              "zindex": 13,
              "border_color": "rgba(42,42,45,1)",
              "border_roundness": 12,
              "vertical_centering": true,
              "border_style": "solid",
              "order": 3,
              "fit_width": true,
              "unique_id": {
                "entries": {
                  "0": "btn-close-delete-archiveChat"
                },
                "type": "TextExpression"
              },
              "fit_height": true,
              "single_width": true,
              "min_width_css": "32px",
              "single_height": true,
              "min_height_css": "32px",
              "vert_alignment": "flex-start",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
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
                  "border_color": "var(--color_bTkRL4_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bToQE1",
            "current_parent": "bTLFx",
            "default_name": "Group EZ",
            "elements": {
              "bTnqB": {
                "properties": {
                  "height": 30,
                  "left": 0,
                  "top": 0,
                  "width": 30,
                  "zindex": 1,
                  "icon": "feather x",
                  "icon_color": "var(--color_bTkRL4_default)",
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
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "args": 560,
                        "type": "Message",
                        "name": "less_or_equal_than",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTKdH0",
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
                "type": "Icon",
                "id": "bToQJ1",
                "default_name": "Icon D",
                "style": "Icon_standard_icon_"
              }
            },
            "name": "Group Close Delete Project",
            "style": "Group_transparent_",
            "transitions": {
              "border_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Header",
        "style": "Group_transparent_"
      },
      "bTINx": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 112,
          "width": 0,
          "zindex": 16,
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "group_type": "custom.chat",
          "vertical_centering": true,
          "order": 9,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "margin_top": 8,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "center",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "space-between"
        },
        "type": "Group",
        "id": "bTLGD",
        "default_name": "Group T",
        "elements": {
          "bTIOB": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Cancel"
                },
                "type": "TextExpression"
              },
              "bold": false,
              "font_face": "var(--font_default):::600",
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "border_roundness": 12,
              "font_color": "var(--color_bTkRL4_default)",
              "font_size": 14,
              "icon_color": "var(--color_bTkRL4_default)",
              "line_height": 1.2,
              "letter_spacing": 0,
              "background_style": "bgcolor",
              "bgcolor": "rgba(27,27,29,1)",
              "order": 2,
              "fit_width": true,
              "icon_size": 20,
              "unique_id": {
                "entries": {
                  "0": "btn-us-cancel-delete-archiveChat"
                },
                "type": "TextExpression"
              },
              "button_gap": 12,
              "fit_height": true,
              "font_family": "var(--font_default)",
              "font_weight": "500",
              "padding_top": 8,
              "padding_left": 10,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "bTnVY1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "btn-us-cancel-delete-archiveChat",
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.shortcut_"
                        },
                        "properties": {
                          "element_id": "bTKdH0"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(209,209,209,1)",
                  "bgcolor": "rgba(38,38,41,1)"
                },
                "type": "State"
              },
              "bTnVZ1": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_clickable",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(112,112,114,1)",
                  "bgcolor": "rgba(42,42,45,1)"
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTLGE",
            "default_name": "Button C",
            "transitions": {
              "font_color": {
                "fn": "ease",
                "duration": 200
              },
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTIOC": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Delete chat"
                },
                "type": "TextExpression"
              },
              "bold": false,
              "font_face": "var(--font_default):::600",
              "height": 44,
              "left": -16,
              "top": -112,
              "width": 150,
              "zindex": 15,
              "border_roundness": 12,
              "font_color": "var(--color_bTGzw_default)",
              "font_size": 14,
              "icon_color": "var(--color_bTGzw_default)",
              "line_height": 1.2,
              "letter_spacing": 0,
              "background_style": "bgcolor",
              "bgcolor": "rgba(180,35,24,0.12)",
              "order": 3,
              "fit_width": true,
              "icon_size": 20,
              "unique_id": {
                "entries": {
                  "0": "btn-us-delete-delete-archiveChat"
                },
                "type": "TextExpression"
              },
              "button_gap": 12,
              "fit_height": true,
              "font_family": "var(--font_default)",
              "font_weight": "500",
              "padding_top": 8,
              "padding_left": 10,
              "single_width": false,
              "min_width_css": "60px",
              "padding_right": 10,
              "single_height": false,
              "min_height_css": "36px",
              "padding_bottom": 8,
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "states": {
              "bTnVY1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "btn-us-delete-delete-archiveChat",
                            "type": "Message",
                            "name": "contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.shortcut_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKdH0"
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(253,162,155,1)",
                  "bgcolor": "rgba(180,35,24,0.24)"
                },
                "type": "State"
              },
              "bTnVZ1": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_clickable",
                    "is_slidable": false
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "properties": {
                  "font_color": "rgba(112,112,114,1)",
                  "bgcolor": "rgba(42,42,45,1)"
                },
                "type": "State"
              }
            },
            "type": "Button",
            "id": "bTLGF",
            "current_parent": "bTIMu",
            "default_name": "Button C",
            "name": "Button Delete Chat",
            "transitions": {
              "font_color": {
                "fn": "ease",
                "duration": 200
              },
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Buttons",
        "style": "Group_transparent_"
      },
      "bTIue0": {
        "properties": {
          "height": 0,
          "left": 16,
          "top": 60,
          "width": 0,
          "zindex": 18,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.chat",
          "vertical_centering": true,
          "order": 4,
          "row_gap": 10,
          "use_gap": true,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTLGJ",
        "default_name": "Group T",
        "elements": {
          "bTIuf0": {
            "properties": {
              "height": 0,
              "left": -16,
              "top": -60,
              "width": 0,
              "zindex": 17,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "custom.chat",
              "vertical_centering": true,
              "order": 2,
              "use_gap": true,
              "fit_width": true,
              "column_gap": 8,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTLGK",
            "default_name": "Group T",
            "elements": {
              "bTItz0": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Delete any memory saved during this chat"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -16,
                  "top": -98.3984375,
                  "width": 100,
                  "zindex": 11,
                  "font_color": "var(--color_bTkRL4_default)",
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
                "type": "Text",
                "id": "bTLGL",
                "current_parent": "bTIsO0",
                "default_name": "Text O",
                "style": "Text_inter___400___14px____afafaf_"
              },
              "bTIuA0": {
                "properties": {
                  "height": 280,
                  "left": -16,
                  "top": -98.3984375,
                  "width": 280,
                  "zindex": 16,
                  "border_color": "var(--color_bTkRL4_default)",
                  "border_roundness": 4,
                  "vertical_centering": true,
                  "background_style": "none",
                  "border_style": "solid",
                  "order": 1,
                  "fit_width": false,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "16px",
                  "single_height": true,
                  "min_height_css": "16px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "container_layout": "column",
                  "collapse_when_hidden": true,
                  "container_vert_alignment": "center"
                },
                "type": "Group",
                "id": "bTLGP",
                "default_name": "Group T",
                "elements": {
                  "bTIuG0": {
                    "properties": {
                      "height": 30,
                      "left": 0,
                      "top": 0,
                      "width": 30,
                      "zindex": 2,
                      "icon": "feather check",
                      "border_roundness": 2,
                      "icon_color": "var(--color_text_default)",
                      "is_visible": false,
                      "vertical_centering": true,
                      "background_style": "bgcolor",
                      "bgcolor": "var(--color_bTkRL4_default)",
                      "order": 1,
                      "fit_height": false,
                      "single_width": true,
                      "min_width_css": "14px",
                      "single_height": true,
                      "min_height_css": "14px",
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
                            "name": "custom.delete_memories__",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTLFs"
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
                    "type": "Icon",
                    "id": "bTLGQ",
                    "default_name": "Icon G"
                  }
                },
                "name": "Group Checkbox"
              }
            },
            "name": "Group Delete Memories",
            "style": "Group_transparent_"
          },
          "bTIuj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "This will delete [b]",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "title_text",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "2": "[/b]."
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -16,
              "top": -60,
              "width": 100,
              "zindex": 11,
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
            "id": "bTLGR",
            "current_parent": "bTIOD",
            "default_name": "Text O",
            "style": "Text_inter___400___16px___white_"
          }
        },
        "name": "Group Column Container",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Delete Archived Chat",
    "style": "Popup_new_popup_",
    "custom_states": {
      "delete_memories__": {
        "display": "delete_memories?",
        "value": "boolean",
        "default_val": true,
        "make_static": true
      }
    }
  },
  "bTLuN": {
    "properties": {
      "height": 1,
      "left": 80,
      "top": 80,
      "width": 1,
      "zindex": 7,
      "AAQ": {
        "entries": {
          "0": "scrolltopPersonalMemories"
        },
        "type": "TextExpression"
      },
      "AAR": true,
      "AAS": true,
      "AAT": "text",
      "order": 3,
      "nonant_alignment": "aa",
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAP",
    "id": "bTLuL",
    "current_parent": "bTKdH0",
    "default_name": "JavascripttoBubble A",
    "name": "JS Scroll Top Personal Memories"
  },
  "bTnqq": {
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
      "order": 8,
      "reference": "bTnqR",
      "fit_height": true,
      "offset_top": -66,
      "offset_left": 115,
      "padding_left": 10,
      "single_width": false,
      "max_width_css": "146px",
      "min_width_css": "60px",
      "padding_right": 10,
      "single_height": false,
      "padding_bottom": 10,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTnqf",
    "current_parent": "bTYZf",
    "default_name": "GroupFocus B",
    "elements": {
      "bTlkD2": {
        "properties": {
          "height": 240,
          "left": -120,
          "top": -40,
          "width": 303,
          "zindex": 3,
          "is_visible": false,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765534583646x530892665536057540/Group%201.svg"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": true,
          "margin_right": 20,
          "single_width": true,
          "min_width_css": "15px",
          "single_height": true,
          "min_height_css": "10px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "ca",
          "use_aspect_ratio": false,
          "aspect_ratio_width": 24,
          "aspect_ratio_height": 19,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bTnqk",
        "default_name": "Image E",
        "style": "Image_standard_image_"
      },
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
        "id": "bTnql",
        "default_name": "Group DZ",
        "elements": {
          "bTlkl2": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Drop or browse"
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
              "line_height": 1,
              "order": 4,
              "opacity": 100,
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
            "id": "bTnqp",
            "current_parent": "bTliW2",
            "default_name": "Text T",
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
    "name": "GF drop or browse",
    "style": "GroupFocus_shadow_"
  },
  "bTwKD2": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 46,
      "boxshadow_style": "none",
      "vertical_centering": true,
      "background_style": "none",
      "reference": "bTsrM2",
      "fit_height": true,
      "offset_left": -10,
      "padding_left": 10,
      "single_width": false,
      "max_width_css": "134px",
      "min_width_css": "134px",
      "padding_right": 10,
      "single_height": false,
      "max_height_css": "50px",
      "min_height_css": "50px",
      "padding_bottom": 10,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTwKB2",
    "default_name": "GroupFocus A",
    "elements": {
      "bTwKZ2": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 26,
          "border_roundness": 12,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTpVj3_default)",
          "order": 1,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 16,
          "fit_height": true,
          "padding_left": 10,
          "single_width": false,
          "min_width_css": "40px",
          "padding_right": 10,
          "single_height": false,
          "min_height_css": "40px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "four_border_style": true,
          "collapse_when_hidden": true,
          "border_roundness_left": 12,
          "border_roundness_bottom": 12
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
              "bgcolor": "var(--color_bTspn2_default)"
            },
            "type": "State"
          },
          "1": {
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
                            "0": "#555557"
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
        "id": "bTwKJ2",
        "current_parent": "bTwKB2",
        "default_name": "Group LZ",
        "elements": {
          "bTsrT2": {
            "properties": {
              "height": 0,
              "left": -80.53125,
              "top": 0,
              "width": 0,
              "zindex": 25,
              "vertical_centering": true,
              "order": 1,
              "use_gap": true,
              "fit_width": true,
              "column_gap": 8,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "40px",
              "single_height": false,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTwKT2",
            "default_name": "Group LZ",
            "elements": {
              "bTsrH2": {
                "properties": {
                  "height": 240,
                  "left": -80.53125,
                  "top": 0,
                  "width": 240,
                  "zindex": 24,
                  "src": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "order": 1,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "16px",
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
                          "type": "Message",
                          "name": "is_false",
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770223852157x974435985875143300/Sun%202.svg"
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
                          "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770223866268x312324403466596860/Moon%202.svg"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Image",
                "id": "bTwKU2",
                "default_name": "Image G",
                "style": "Image_standard_image_"
              },
              "bTsrL2": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Dark"
                    },
                    "type": "TextExpression"
                  },
                  "height": 36,
                  "left": -80.53125,
                  "top": 0,
                  "width": 100,
                  "zindex": 23,
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
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "Light"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTwKV2",
                "current_parent": "bTsqP2",
                "default_name": "Text X",
                "style": "Text_inter___400___16px___neutral_copy_"
              }
            },
            "name": "Group mode",
            "style": "Group_transparent_"
          }
        },
        "name": "Group choose mode GF",
        "style": "Group_transparent_"
      }
    },
    "name": "GF mode",
    "style": "GroupFocus_shadow_"
  },
};
