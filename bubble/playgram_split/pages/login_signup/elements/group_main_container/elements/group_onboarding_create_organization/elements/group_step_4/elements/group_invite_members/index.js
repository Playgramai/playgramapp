export const group_invite_members = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 22,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 10,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(var(--color_primary_contrast_default_rgb), 0.05)",
    "border_style": "none",
    "order": 2,
    "row_gap": 20,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTPaK",
  "current_parent": "bTPVZ",
  "default_name": "Group W",
  "elements": {
    "bTJPH": {
      "properties": {
        "height": 0,
        "left": 10,
        "top": 10,
        "width": 0,
        "zindex": 21,
        "vertical_centering": true,
        "order": 3,
        "row_gap": 15,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 15,
        "fit_height": true,
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
                          "args": 2,
                          "type": "Message",
                          "name": "greater_or_equal_than",
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
                      "element_id": "bTPaW"
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
              "type": "Message",
              "name": "custom.selected_subscription_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTxTP"
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
      "id": "bTPaP",
      "default_name": "Group W",
      "elements": {
        "bTJPM": {
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
            "zindex": 20,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-end",
            "collapse_when_hidden": true
          },
          "type": "Button",
          "id": "bTPaQ",
          "default_name": "Button I",
          "style": "Button_secondary_new_"
        },
        "bTJQD": {
          "properties": {
            "height": 87,
            "left": -318,
            "top": 0,
            "width": 518,
            "zindex": 22,
            "vertical_centering": true,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTPaR",
          "default_name": "Group W",
          "elements": {
            "bTJQH": {
              "properties": {
                "height": 48,
                "left": 0,
                "top": 0,
                "width": 250,
                "zindex": 2,
                "mandatory": true,
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
                "fit_height": false,
                "single_width": false,
                "single_height": true,
                "min_height_css": "36px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "cb",
                "collapse_when_hidden": true
              },
              "states": {
                "bTGme0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered"
                    },
                    "type": "ThisElement"
                  },
                  "type": "State"
                },
                "bTGmf0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_focused"
                    },
                    "type": "ThisElement"
                  },
                  "type": "State"
                },
                "bTGmo0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_valid"
                    },
                    "type": "ThisElement"
                  },
                  "type": "State"
                }
              },
              "type": "Input",
              "id": "bTPaV",
              "default_name": "Input H",
              "name": "Input Invite Member Email",
              "style": "Input_standart_new_input_"
            }
          },
          "name": "Group Parent Input/Dropdown",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Input Invitation Email",
      "style": "Group_transparent_"
    },
    "bTPcZ": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 44,
        "width": 0,
        "zindex": 23,
        "is_visible": false,
        "vertical_centering": true,
        "order": 6,
        "row_gap": 8,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 24,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
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
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.invited_users_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTKPI"
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
      "id": "bTPcU",
      "default_name": "Group Y",
      "elements": {
        "bTPca": {
          "properties": {
            "height": 350,
            "left": 0,
            "top": -44,
            "width": 280,
            "zindex": 17,
            "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
            "border_roundness": 10,
            "data_source": {
              "next": {
                "type": "Message",
                "name": "custom.invited_users_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKPI"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "group_type": "text",
            "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
            "separator_style": "none",
            "border_style": "none",
            "order": 2,
            "fit_width": false,
            "fit_height": true,
            "fixed_rows": false,
            "margin_top": 5,
            "single_width": false,
            "single_height": false,
            "max_height_css": "400px",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "cell_min_height_css": "100%",
            "collapse_when_hidden": true
          },
          "type": "RepeatingGroup",
          "id": "bTPaW",
          "current_parent": "bTJOL",
          "default_name": "RepeatingGroup B",
          "elements": {
            "bTJHg": {
              "properties": {
                "height": 280,
                "left": 0,
                "top": 0,
                "width": 280,
                "zindex": 3,
                "border_roundness": 0,
                "data_source": {
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "group_type": "text",
                "vertical_centering": true,
                "background_style": "none",
                "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.5)",
                "order": 1,
                "use_gap": true,
                "fit_width": false,
                "column_gap": 10,
                "fit_height": true,
                "padding_top": 8,
                "single_width": false,
                "single_height": false,
                "min_height_css": "52px",
                "padding_bottom": 8,
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTPaX",
              "current_parent": "bTJFz",
              "default_name": "Group W",
              "elements": {
                "bTJHh": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": {
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "1": ""
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": -48,
                    "top": -8,
                    "width": 100,
                    "zindex": 3,
                    "font_color": "var(--color_bTkRL4_default)",
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
                  "id": "bTPab",
                  "default_name": "Text U",
                  "style": "Text_inter___400___14px___white_"
                },
                "bTJIn": {
                  "properties": {
                    "height": 0,
                    "left": -8,
                    "top": -8,
                    "width": 0,
                    "zindex": 3,
                    "border_color": "rgba(247,248,249,0.3)",
                    "border_roundness": 20,
                    "data_source": {
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "group_type": "text",
                    "vertical_centering": true,
                    "background_style": "bgcolor",
                    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.3)",
                    "border_style": "solid",
                    "order": 1,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "36px",
                    "single_height": true,
                    "min_height_css": "36px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "container_layout": "column",
                    "collapse_when_hidden": true,
                    "container_vert_alignment": "center"
                  },
                  "type": "Group",
                  "id": "bTPac",
                  "default_name": "Group W",
                  "elements": {
                    "bTnvp": {
                      "properties": {
                        "text": {
                          "entries": {
                            "0": {
                              "next": {
                                "args": 1,
                                "next": {
                                  "type": "Message",
                                  "name": "to_uppercase",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "truncated",
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
                        "left": 10,
                        "top": 15,
                        "width": 100,
                        "zindex": 3,
                        "font_alignment": "center",
                        "font_color": "var(--color_bTkRL4_default)",
                        "line_height": 1,
                        "order": 2,
                        "fit_width": false,
                        "fit_height": true,
                        "single_width": true,
                        "min_width_css": "16px",
                        "single_height": true,
                        "min_height_css": "16px",
                        "vert_alignment": "center",
                        "horiz_alignment": "center",
                        "editor_preview_text": "A",
                        "collapse_when_hidden": true
                      },
                      "type": "Text",
                      "id": "bTnvj",
                      "current_parent": "bTPaX",
                      "default_name": "Text NZ",
                      "style": "Text_inter___400___14px___white_"
                    }
                  },
                  "name": "Group Avatar"
                },
                "bTnvi": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Remove"
                      },
                      "type": "TextExpression"
                    },
                    "height": 44,
                    "left": 0,
                    "top": 0,
                    "width": 150,
                    "zindex": 4,
                    "icon": "feather star",
                    "order": 9,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "60px",
                    "single_height": false,
                    "min_height_css": "36px",
                    "horiz_alignment": "flex-start",
                    "collapse_when_hidden": true
                  },
                  "type": "Button",
                  "id": "bTnvd",
                  "default_name": "Button Q",
                  "style": "Button_subtle_new_copy_copy_"
                }
              },
              "name": "Group User Name",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "RG Pending Invitations",
          "style": "RepeatingGroup_transparent_"
        },
        "bTPcb": {
          "properties": {
            "text": {
              "entries": {
                "0": "Members list"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": -44,
            "width": 100,
            "zindex": 22,
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 14,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTPaj",
          "default_name": "Text U",
          "style": "Text_inter___400___16px___white_"
        }
      },
      "name": "Group Invitations",
      "style": "Group_transparent_"
    },
    "bTwjL": {
      "properties": {
        "height": 0,
        "left": 20,
        "top": 20,
        "width": 0,
        "zindex": 21,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_roundness": 12,
        "is_visible": false,
        "background_style": "bgcolor",
        "bgcolor": "rgba(42,42,45,1)",
        "order": 4,
        "row_gap": 0,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 0,
        "padding_left": 16,
        "single_width": false,
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
                          "args": 2,
                          "type": "Message",
                          "name": "greater_or_equal_than",
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
                      "element_id": "bTPaW"
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
              "type": "Message",
              "name": "custom.selected_subscription_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTxTP"
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
      "id": "bTwjD",
      "current_parent": "bTPaK",
      "default_name": "Group EZZ",
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
          "id": "bTwjJ",
          "default_name": "Group EZZ",
          "name": "Group Parent Input/Dropdown",
          "style": "Group_transparent_"
        },
        "bTwjX": {
          "properties": {
            "text": {
              "entries": {
                "0": "You\u2019ve reached your free plan invite limit. Upgrade to invite more."
              },
              "type": "TextExpression"
            },
            "height": 8,
            "left": 48,
            "top": 14.4453125,
            "width": 35,
            "zindex": 23,
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
          "type": "Text",
          "id": "bTwjV",
          "default_name": "Text MZ",
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
          "id": "bTwjh",
          "current_parent": "bTwjD",
          "default_name": "Icon G",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group invite limit alert",
      "style": "Group_border_"
    }
  },
  "name": "Group Invite Members ",
  "style": "Group_transparent_",
};
