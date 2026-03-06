import { RG_Workspace_Members } from './rg_workspace_members/index.js';

export const elements = {
  "bTJNb": RG_Workspace_Members,
  "bTJNa": {
    "properties": {
      "height": 0,
      "width": 0,
      "zindex": 19,
      "is_visible": false,
      "vertical_centering": true,
      "order": 9,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 4,
      "fit_height": true,
      "padding_left": 7,
      "single_width": false,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
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
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTdVj1"
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
    "id": "bTdVh1",
    "default_name": "Group C",
    "elements": {
      "bTJIX": {
        "properties": {
          "text": {
            "entries": {
              "0": "No users found"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -16,
          "top": -112,
          "width": 100,
          "zindex": 16,
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
        "id": "bTdVi1",
        "default_name": "Text D",
        "name": "Text No users found",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "name": "Group No users found",
    "style": "Group_transparent_"
  },
  "bTZCA": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 258,
      "width": 0,
      "zindex": 21,
      "vertical_centering": true,
      "order": 2,
      "row_gap": 15,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 15,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 32,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 3,
                                "type": "Message",
                                "name": "greater_or_equal_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "count",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "members_list_user",
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
    "type": "Group",
    "id": "bTdWH1",
    "default_name": "Group C",
    "elements": {
      "bTgiv0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Invite"
            },
            "type": "TextExpression"
          },
          "height": 44,
          "left": -10,
          "top": -10,
          "width": 150,
          "zindex": 1,
          "order": 3,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "100px",
          "single_height": false,
          "min_height_css": "36px",
          "button_disabled": false,
          "horiz_alignment": "flex-end",
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
                        "name": "is_valid",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTgle0"
                      },
                      "type": "GetElement",
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
                                  "key": "user_email_for_search_text",
                                  "value": {
                                    "entries": {
                                      "0": {
                                        "next": {
                                          "type": "Message",
                                          "name": "get_data",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTgle0"
                                        },
                                        "type": "GetElement",
                                        "is_slidable": false
                                      }
                                    },
                                    "type": "TextExpression"
                                  },
                                  "constraint_type": "text contains string"
                                }
                              }
                            },
                            "type": "Message",
                            "name": "filtered",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "get_list_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTdVj1"
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTgle0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "button_disabled": false
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "args": 440,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdDD1",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "min_width_css": "64px"
            },
            "type": "State"
          }
        },
        "type": "Button",
        "id": "bTdWL1",
        "default_name": "Button B",
        "style": "Button_primary_new_"
      },
      "bTgll0": {
        "properties": {
          "height": 48,
          "left": 0,
          "top": 0,
          "width": 250,
          "zindex": 2,
          "mandatory": false,
          "content": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "content_format": "email",
          "placeholder": {
            "entries": {
              "0": "michaelsmith@gmail.com"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "unique_id": {
            "entries": {
              "0": "workspaceSetInviteUserInput"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "single_width": false,
          "max_width_css": "355px",
          "single_height": true,
          "min_height_css": "36px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
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
                "element_id": "bTiin2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "border_color": "var(--color_bTGzw_default)"
            },
            "type": "State"
          }
        },
        "type": "Input",
        "id": "bTgle0",
        "current_parent": "bTdHZ1",
        "default_name": "Input D",
        "name": "Input Invite User",
        "style": "Input_standart_new_input_"
      },
      "bTiiu2": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 14,
          "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
          "border_roundness": 20,
          "boxshadow_style": "outset",
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "var(--color_bTGzq_default)",
          "border_style": "solid",
          "boxshadow_blur": 12,
          "boxshadow_color": "rgba(0,0,0,0.2)",
          "boxshadow_spread": 0,
          "order": 4,
          "opacity": 100,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 8,
          "fit_height": true,
          "padding_top": 8,
          "padding_left": 10,
          "single_width": false,
          "padding_right": 12,
          "single_height": false,
          "min_height_css": "36px",
          "padding_bottom": 8,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTiin2",
        "current_parent": "bTdWH1",
        "default_name": "Group JZ",
        "elements": {
          "bTXFU0": {
            "properties": {
              "height": 30,
              "left": -191.5546875,
              "top": 0,
              "width": 30,
              "zindex": 12,
              "icon": "feather info",
              "icon_color": "var(--color_bTGzv_default)",
              "vertical_centering": true,
              "order": 1,
              "fit_height": false,
              "single_width": true,
              "min_width_css": "16px",
              "single_height": true,
              "min_height_css": "16px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Icon",
            "id": "bTiip2",
            "current_parent": "bTVCz0",
            "default_name": "Icon L",
            "transitions": {
              "icon_color": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTXFV0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "This member has already been invited"
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -191.5546875,
              "top": 0,
              "width": 100,
              "zindex": 11,
              "font_size": 12,
              "is_visible": true,
              "order": 2,
              "opacity": 100,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "max_width_css": "320px",
              "min_width_css": "0px",
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Text",
            "id": "bTiit2",
            "current_parent": "bTVDB0",
            "default_name": "Text P",
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
        "name": "Group Tooltip Member is already invited",
        "style": "Group_transparent_",
        "transitions": {
          "opacity": {
            "fn": "ease-in-out",
            "duration": 500
          }
        }
      }
    },
    "name": "Group Input Invitate/Search",
    "style": "Group_transparent_"
  },
  "bTgjz0": {
    "properties": {
      "height": 30,
      "left": 0,
      "top": 0,
      "width": 250,
      "zindex": 3,
      "is_visible": false,
      "background_style": "none",
      "order": 11,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 10,
      "fit_height": true,
      "margin_top": 15,
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "1": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": 10,
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTdVj1"
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
    "id": "bTgjh0",
    "current_parent": "bTdVc1",
    "default_name": "Group Q",
    "elements": {
      "cmmYR6": {
        "properties": {
          "height": 29,
          "left": 0,
          "top": 0,
          "width": 20,
          "zindex": 2,
          "data_source": {
            "next": {
              "type": "Message",
              "name": "get_AAD",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTgku0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "group_type": "number",
          "rows": 1,
          "separator_color": "rgba(150,150,150,0)",
          "separator_style": "solid",
          "separator_width": 4,
          "order": 6,
          "fit_width": true,
          "fixed_columns": false,
          "min_width_css": "150px",
          "min_height_css": "30px",
          "container_layout": "row",
          "cell_min_width_css": "30px"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_visible"
              },
              "properties": {
                "element_id": "bTgjm0"
              },
              "type": "ThisElement"
            },
            "properties": {
              "min_width_css": "0px"
            },
            "type": "State"
          }
        },
        "type": "RepeatingGroup",
        "id": "bTgjm0",
        "default_name": "RepeatingGroup C",
        "elements": {
          "cmNQp": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 2,
              "border_roundness": 5,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "number",
              "background_style": "bgcolor",
              "bgcolor": "rgba(255,255,255,0)",
              "order": 1,
              "single_width": true,
              "min_width_css": "30px",
              "single_height": true,
              "min_height_css": "30px",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "center"
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_hovered"
                  },
                  "properties": {
                    "element_id": "bTgjn0"
                  },
                  "type": "ThisElement"
                },
                "properties": {
                  "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)"
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "type": "ElementParent",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "page_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTdVj1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "bgcolor": "var(--color_bTGzr_default)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTgjn0",
            "default_name": "Group Q",
            "elements": {
              "cmNQs": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "0"
                    },
                    "type": "TextExpression"
                  },
                  "height": 45,
                  "left": 0,
                  "top": 0,
                  "width": 200,
                  "zindex": 17,
                  "order": 1,
                  "fit_width": true,
                  "vert_alignment": "center"
                },
                "states": {
                  "0": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty"
                      },
                      "type": "ElementParent"
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "type": "ElementParent"
                          },
                          "2": ""
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
                          "args": {
                            "type": "ElementParent",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "page_number",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTfQP0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "font_color": "rgba(255, 255, 255, 1)"
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTgjr0",
                "current_parent": "cmNQn.elements",
                "default_name": "Text J",
                "name": "Text 0 Users List",
                "style": "Text_inter___400___12px____afafaf_",
                "order": 1
              }
            },
            "name": "Select Page (useButton) [th] Users List"
          }
        },
        "name": "RG Pagination (useState) [th] Users List",
        "custom_states": {
          "items_until_": {
            "display": "last_page",
            "value": "number",
            "default_val": 12,
            "make_static": true
          },
          "next_page__1__": {
            "display": "items_from",
            "value": "number",
            "default_val": 1,
            "make_static": true
          },
          "max_pagination_": {
            "display": "items_until",
            "value": "number",
            "default_val": 12,
            "make_static": true
          }
        }
      },
      "cmonl0": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 30,
          "zindex": 4,
          "border_roundness": 5,
          "is_visible": false,
          "background_style": "bgcolor",
          "bgcolor": "rgba(255,255,255,0)",
          "order": 2,
          "single_width": true,
          "min_width_css": "30px",
          "single_height": true,
          "min_height_css": "30px",
          "container_layout": "row",
          "collapse_when_hidden": false,
          "container_horiz_alignment": "center"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_hovered"
              },
              "properties": {
                "element_id": "bTgjs0"
              },
              "type": "ThisElement"
            },
            "properties": {
              "bgcolor": "var(--color_bTGzr_default)"
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
                "name": "is_first_page",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdVj1"
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
        "id": "bTgjs0",
        "current_parent": "cmNQh.elements",
        "default_name": "Group Q",
        "elements": {
          "bUIgi2": {
            "properties": {
              "height": 30,
              "left": 22,
              "top": 13.8125,
              "width": 30,
              "zindex": 2,
              "icon": "material regular chevron_left",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 2,
              "single_width": true,
              "min_width_css": "18px",
              "single_height": true,
              "min_height_css": "18px",
              "vert_alignment": "center",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_first_page",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQP0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon_color": "var(--color_bTGzv_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTgjt0",
            "default_name": "Icon F"
          }
        },
        "name": "Previous Page (useButton) Memory List",
        "order": 3,
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      },
      "cmonm0": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 30,
          "zindex": 3,
          "border_roundness": 5,
          "is_visible": false,
          "background_style": "bgcolor",
          "bgcolor": "rgba(255,255,255,0)",
          "order": 8,
          "single_width": true,
          "min_width_css": "30px",
          "single_height": true,
          "min_height_css": "30px",
          "container_layout": "row",
          "collapse_when_hidden": false,
          "container_horiz_alignment": "center"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_hovered"
              },
              "properties": {
                "element_id": "bTgjx0"
              },
              "type": "ThisElement"
            },
            "properties": {
              "bgcolor": "var(--color_bTGzr_default)"
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
                "name": "is_last_page",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdVj1"
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
        "id": "bTgjx0",
        "current_parent": "cmNQh.elements",
        "default_name": "Group Q",
        "elements": {
          "bUIgo2": {
            "properties": {
              "height": 30,
              "left": 0,
              "top": 0,
              "width": 30,
              "zindex": 2,
              "icon": "material outlined chevron_right",
              "icon_color": "var(--color_primary_contrast_default)",
              "vertical_centering": true,
              "order": 2,
              "single_width": true,
              "min_width_css": "18px",
              "single_height": true,
              "min_height_css": "18px",
              "vert_alignment": "center",
              "collapse_when_hidden": true
            },
            "states": {
              "1": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_last_page",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTfQP0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "icon_color": "var(--color_bTGzv_default)"
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTgjy0",
            "current_parent": "bTcjp3",
            "default_name": "Icon F"
          }
        },
        "name": "Next Page (useButton) [th] Memory List",
        "order": 2,
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Members Pagination"
  },
  "bTgkz0": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 0,
      "width": 1,
      "zindex": 34,
      "AAE": 1,
      "AAF": {
        "next": {
          "next": {
            "next": {
              "args": 10,
              "type": "Message",
              "name": "divide",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdVj1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "AAG": 1,
      "order": 12,
      "margin_top": -16,
      "collapse_when_hidden": true
    },
    "type": "1488796042609x768734193128308700-AAC",
    "id": "bTgku0",
    "current_parent": "bTdVc1",
    "default_name": "ListofNumbers B",
    "name": "ListofNumbers Pages (Members)"
  },
  "bTglk0": {
    "properties": {
      "height": 36,
      "left": -246,
      "top": 0,
      "width": 446,
      "zindex": 20,
      "vertical_centering": true,
      "order": 6,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "margin_bottom": 24,
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "relative",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTdWB1",
    "default_name": "Group C",
    "elements": {
      "bTJNl": {
        "properties": {
          "height": 48,
          "left": 0,
          "top": 0,
          "width": 250,
          "zindex": 2,
          "mandatory": false,
          "content": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "placeholder": {
            "entries": {
              "0": "Search by email..."
            },
            "type": "TextExpression"
          },
          "order": 3,
          "unique_id": {
            "entries": {
              "0": "searchMember"
            },
            "type": "TextExpression"
          },
          "fit_height": false,
          "padding_left": 42,
          "single_width": false,
          "single_height": true,
          "min_height_css": "36px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "type": "Input",
        "id": "bTdWF1",
        "default_name": "Input B",
        "name": "Input Search Member",
        "style": "Input_standart_new_input_"
      },
      "bTpXI4": {
        "properties": {
          "height": 240,
          "left": 14,
          "top": 0,
          "width": 240,
          "zindex": 4,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766692358781x503502162722679400/Search%20%281%29.svg"
            },
            "type": "TextExpression"
          },
          "fit_height": true,
          "margin_left": 14,
          "single_width": true,
          "min_width_css": "20px",
          "single_height": false,
          "min_height_css": "240px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "ab",
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
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770132284327x994665709256047400/Search%20%282%29.svg"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTpXD4",
        "default_name": "Image E",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Parent Input Search Member",
    "style": "Group_transparent_"
  },
  "bTxvZ2": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 21,
      "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_roundness": 12,
      "is_visible": false,
      "background_style": "bgcolor",
      "bgcolor": "rgba(42,42,45,1)",
      "order": 1,
      "row_gap": 0,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 0,
      "padding_left": 16,
      "single_width": false,
      "margin_bottom": 32,
      "padding_right": 8,
      "single_height": true,
      "min_height_css": "36px",
      "padding_bottom": 0,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 3,
                                "type": "Message",
                                "name": "greater_or_equal_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "count",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "members_list_user",
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
    "id": "bTxvR2",
    "current_parent": "bTdVc1",
    "default_name": "Group D",
    "elements": {
      "bTJQD": {
        "properties": {
          "height": 87,
          "left": -318,
          "top": 0,
          "width": 518,
          "zindex": 22,
          "vertical_centering": true,
          "order": 4,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTxvT2",
        "default_name": "Group D",
        "name": "Group Parent Input/Dropdown",
        "style": "Group_transparent_"
      },
      "bTwjX": {
        "properties": {
          "text": {
            "entries": {
              "0": "You\u2019ve reached your free plan invite limit. [u]Upgrade[/u] to invite more."
            },
            "type": "TextExpression"
          },
          "height": 8,
          "left": 48,
          "top": 14.4453125,
          "width": 35,
          "zindex": 23,
          "order": 3,
          "nofollow": true,
          "fit_width": true,
          "fit_height": true,
          "link_color": "var(--color_bToSr_default)",
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "recognize_links": false,
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxvX2",
        "default_name": "Text E",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTwjj": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 9,
          "zindex": 2,
          "icon": "ionic filled information-circle",
          "icon_color": "var(--color_bTGzv_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "margin_bottom": 0,
          "min_width_css": "18px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "18px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTxvY2",
        "current_parent": "bTwjD",
        "default_name": "Icon B",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group invite limit alert",
    "style": "Group_border_"
  },
};
