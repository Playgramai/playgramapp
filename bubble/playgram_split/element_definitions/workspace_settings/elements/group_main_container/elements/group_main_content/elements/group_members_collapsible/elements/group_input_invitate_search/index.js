export const group_input_invitate_search = {
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
  "style": "Group_transparent_",
};
