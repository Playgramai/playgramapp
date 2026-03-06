export const GF_User_Menu = {
  "elements": {
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
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_bTGzr_default)",
        "boxshadow_blur": 2,
        "boxshadow_color": "var(--color_bTHBQ_default)",
        "order": 2,
        "reference": "bTJJH",
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
      "id": "bTJIt",
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
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "custom.workspace",
            "order": 1,
            "row_gap": 8,
            "use_gap": true,
            "fit_width": false,
            "fit_height": true,
            "margin_top": 6,
            "margin_left": 6,
            "margin_right": 6,
            "single_width": false,
            "margin_bottom": 6,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTJIu",
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
                "is_visible": false,
                "vertical_centering": true,
                "order": 3,
                "use_gap": true,
                "fit_width": false,
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
                },
                "1": {
                  "condition": {
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
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
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
              "type": "Group",
              "id": "bTJIv",
              "current_parent": "bTIgr",
              "default_name": "Group A",
              "elements": {
                "bTHpX": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Upgrade to Admin"
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
                  "id": "bTJIz",
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
                    "icon": "feather shield",
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
                  "type": "Icon",
                  "id": "bTJJA",
                  "default_name": "Icon A"
                }
              },
              "name": "Group Upgrade to Admin",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            },
            "bTIhn": {
              "properties": {
                "height": 0,
                "left": 20,
                "top": 20,
                "width": 0,
                "zindex": 4,
                "border_roundness": 10,
                "is_visible": true,
                "vertical_centering": true,
                "order": 5,
                "use_gap": true,
                "fit_width": false,
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
                    "bgcolor": "rgba(238,107,107,0.15)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bTJJB",
              "current_parent": "bTIgr",
              "default_name": "Group A",
              "elements": {
                "bTHpX": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Delete"
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
                  "id": "bTJJF",
                  "default_name": "Text A",
                  "style": "Text_inter___400___14px____ee6b6b_"
                },
                "bTIhL": {
                  "properties": {
                    "height": 30,
                    "left": 170,
                    "top": 22,
                    "width": 30,
                    "zindex": 4,
                    "icon": "feather trash-2",
                    "icon_color": "var(--color_bTGzw_default)",
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
                  "type": "Icon",
                  "id": "bTJJG",
                  "default_name": "Icon A"
                }
              },
              "name": "Group Delete User",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            },
            "bTJKy": {
              "properties": {
                "height": 0,
                "left": 20,
                "top": 20,
                "width": 0,
                "zindex": 4,
                "border_roundness": 10,
                "is_visible": false,
                "vertical_centering": true,
                "order": 4,
                "use_gap": true,
                "fit_width": false,
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
                },
                "1": {
                  "condition": {
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
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
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
              "type": "Group",
              "id": "bTJKr",
              "current_parent": "bTJIu",
              "default_name": "Group G",
              "elements": {
                "bTHpX": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Downgrade to User"
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
                  "id": "bTJKt",
                  "default_name": "Text D",
                  "style": "Text_inter___400___14px___white_"
                },
                "bTIhL": {
                  "properties": {
                    "height": 30,
                    "left": 170,
                    "top": 22,
                    "width": 30,
                    "zindex": 4,
                    "icon": "feather user",
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
                  "type": "Icon",
                  "id": "bTJKx",
                  "default_name": "Icon D"
                }
              },
              "name": "Group Downgrade to User",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "Group Profile Menu Content",
          "style": "Group_dark_gf___shadow_"
        }
      },
      "name": "GF Menu"
    },
    "bTInV0": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 14,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTJJH",
      "default_name": "Group B",
      "name": "Group Edit/Delete",
      "style": "Group_transparent_"
    },
    "bTIsr0": {
      "properties": {
        "height": 320,
        "left": 0,
        "top": 0,
        "width": 320,
        "zindex": 14,
        "group_type": "custom.workspace",
        "order": 3,
        "row_gap": 16,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "450px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Popup",
      "id": "bTJJL",
      "current_parent": "bTIml0",
      "default_name": "Popup A",
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
          "id": "bTJJM",
          "default_name": "Group C",
          "elements": {
            "bTINS": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Upgrade to Admin"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -16,
                "top": -16,
                "width": 100,
                "zindex": 11,
                "font_color": "var(--color_bTkRP4_default)",
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
              "id": "bTJJN",
              "current_parent": "bTIMu",
              "default_name": "Text B",
              "style": "Text_inter___400___18px___white_"
            },
            "bToPV1": {
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
              "id": "bToPP1",
              "current_parent": "bTJJM",
              "default_name": "Group D",
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
                  "id": "bToPU1",
                  "default_name": "Icon C",
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
            "group_type": "custom.workspace",
            "vertical_centering": true,
            "order": 10,
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
          "id": "bTJJS",
          "default_name": "Group C",
          "elements": {
            "bTIOB": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Cancel"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": -16,
                "top": -112,
                "width": 150,
                "zindex": 15,
                "order": 2,
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
              "id": "bTJJT",
              "default_name": "Button A",
              "style": "Button_subtle_new_"
            },
            "bTIOC": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Upgrade to ",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "display",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.delete_memories__",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTJJL"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": -16,
                "top": -112,
                "width": 150,
                "zindex": 15,
                "order": 3,
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
              "id": "bTJJX",
              "current_parent": "bTIMu",
              "default_name": "Button A",
              "name": "Button Change Role",
              "style": "Button_primary_new_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        },
        "bTJLo": {
          "properties": {
            "text": {
              "entries": {
                "0": "Are you sure you want to upgrade ",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": " to ",
                "3": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.delete_memories__",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJJL"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "4": " role?"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -16,
            "top": -60,
            "width": 100,
            "zindex": 11,
            "font_color": "var(--color_bTkRP4_default)",
            "font_size": 14,
            "order": 4,
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
                    "args": {
                      "properties": {
                        "option_set": "option.user_type__os_",
                        "option_value": "user"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.delete_memories__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTJJL"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "Are you sure you want to downgrade ",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": " to User role?"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTJJj",
          "current_parent": "bTIOD",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___white_"
        }
      },
      "name": "Popup Change Role",
      "style": "Popup_new_popup_",
      "custom_states": {
        "delete_memories__": {
          "display": "mode",
          "value": "option.user_type__os_",
          "make_static": true
        }
      }
    }
  },
  "workflows": {
    "bTJMN": {
      "properties": {
        "element_id": "bTJKr",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTJMB",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJMG"
        },
        "1": {
          "properties": {
            "value": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "owner"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus_element",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "element_id": "bTJJL",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTJMH"
        },
        "2": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJML"
        },
        "3": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJMM"
        }
      }
    },
    "bTInc0": {
      "properties": {
        "event_name": "toggle_menu"
      },
      "type": "CustomEvent",
      "id": "bTJJk",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJJl"
        }
      }
    },
    "bTIqV0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTJJp",
      "actions": {
        "0": {
          "properties": {
            "value": false,
            "element_id": "bTJIo",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTJJq"
        }
      }
    },
    "bTIqh0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_visible",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTJJr",
      "actions": {
        "0": {
          "properties": {
            "value": true,
            "element_id": "bTJIo",
            "custom_state": "custom.visible__"
          },
          "type": "SetCustomState",
          "id": "bTJJv"
        }
      }
    },
    "bTIqt0": {
      "properties": {
        "element_id": "bTJIv",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTJJw",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJJx"
        },
        "1": {
          "properties": {
            "value": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.user_type__os_",
                    "option_value": "owner"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "user_type_option_user_type__os_",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "minus_element",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "element_id": "bTJJL",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTJLz"
        },
        "2": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJLu"
        },
        "3": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJLp"
        }
      }
    },
    "bTIsz0": {
      "properties": {
        "element_id": "bToPP1"
      },
      "type": "ButtonClicked",
      "id": "bTJKC",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKD"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKH"
        }
      }
    },
    "bTItK0": {
      "properties": {
        "element_id": "bTJJT"
      },
      "type": "ButtonClicked",
      "id": "bTJKI",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKJ"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKN"
        }
      }
    },
    "bTItX0": {
      "properties": {
        "element_id": "bTJJX"
      },
      "type": "ButtonClicked",
      "id": "bTJKO",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "HideElement",
          "id": "bTJKT"
        },
        "1": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ResetGroup",
          "id": "bTJKU"
        },
        "2": {
          "properties": {
            "element_id": "Current page",
            "add_parameters": false,
            "url_parameters": {
              "0": {
                "key": "project",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTItQ0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              }
            }
          },
          "type": "ChangePage",
          "id": "bTJKV"
        }
      }
    },
    "bTIur0": {
      "properties": {
        "element_id": "bTJJB"
      },
      "type": "ButtonClicked",
      "id": "bTJKg",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTJIt"
          },
          "type": "ToggleElement",
          "id": "bTJKh"
        },
        "1": {
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJIo"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTJJL"
          },
          "type": "DisplayGroupData",
          "id": "bTJKl"
        },
        "2": {
          "properties": {
            "element_id": "bTJJL"
          },
          "type": "ShowElement",
          "id": "bTJKm"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "custom.workspace",
    "background_style": "none",
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTJIo",
  "name": "GF User Menu",
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
};
