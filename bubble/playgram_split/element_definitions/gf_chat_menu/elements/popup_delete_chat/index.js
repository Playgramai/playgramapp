export const popup_delete_chat = {
  "properties": {
    "height": 320,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 14,
    "group_type": "custom.chat",
    "order": 4,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "gf-chat popup-delete-chat"
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
  "id": "bTIsO0",
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
      "id": "bTIsT0",
      "default_name": "Group C",
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
          "id": "bTIsU0",
          "current_parent": "bTIMu",
          "default_name": "Text B",
          "style": "Text_inter___400___18px___white_"
        },
        "bToOf1": {
          "properties": {
            "height": 28,
            "left": 0,
            "top": 0,
            "width": 28,
            "zindex": 13,
            "border_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#eaecf0"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#2a2a2d"
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
            "border_roundness": 12,
            "vertical_centering": true,
            "border_style": "solid",
            "order": 3,
            "fit_width": true,
            "unique_id": {
              "entries": {
                "0": "gf-chat btn-close-del-chat"
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
                "border_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#707072"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#acacad"
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
          "id": "bToOZ1",
          "current_parent": "bTIsT0",
          "default_name": "Group O",
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
                    "is_slidable": false
                  },
                  "properties": {
                    "icon_color": "var(--color_bTkRX4_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Icon",
              "id": "bToOe1",
              "default_name": "Icon A",
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
      "id": "bTIsa0",
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
            "unique_id": {
              "entries": {
                "0": "gf-chat btn-cancel-del-chat"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": false,
            "min_width_css": "60px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": "gf-chat btn-cancel-del-chat",
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
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.shortcut_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIml0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "font_color": "rgba(209,209,209,1)",
                "bgcolor": "rgba(38,38,41,1)"
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTIsb0",
          "default_name": "Button A",
          "style": "Button_subtle_new_"
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
                "0": "gf-chat btn-delete-del-chat"
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
                          "args": "gf-chat btn-delete-del-chat",
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.shortcut_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTIml0"
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
          "id": "bTIsf0",
          "current_parent": "bTIMu",
          "default_name": "Button A",
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
      "id": "bTIuZ0",
      "default_name": "Group F",
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
          "states": {
            "0": {
              "condition": {
                "next": {
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
                  "type": "Message",
                  "name": "type_option_chat_type__os_",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTItt0",
          "default_name": "Group E",
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
              "id": "bTItn0",
              "current_parent": "bTIsO0",
              "default_name": "Text C",
              "style": "Text_inter___400___16px___neutral_copy_"
            },
            "bTIuA0": {
              "properties": {
                "height": 280,
                "left": -16,
                "top": -98.3984375,
                "width": 280,
                "zindex": 16,
                "border_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#555557"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#707072"
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
              "id": "bTItd0",
              "default_name": "Group D",
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
                    "icon_color": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "#555557"
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "#1a1a1a"
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
                          "element_id": "bTIsO0"
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
                        "background_style": "none"
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bTIuB0",
                  "default_name": "Icon C"
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
          "id": "bTIsn0",
          "current_parent": "bTIOD",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___neutral_copy_"
        }
      },
      "name": "Group Column Container",
      "style": "Group_transparent_"
    }
  },
  "name": "Popup Delete Chat",
  "style": "Popup_standard_popup_",
  "custom_states": {
    "project_": {
      "display": "project",
      "value": "custom.project",
      "make_static": true
    },
    "delete_memories__": {
      "display": "delete_memories?",
      "value": "boolean",
      "default_val": true,
      "make_static": true
    }
  },
};
