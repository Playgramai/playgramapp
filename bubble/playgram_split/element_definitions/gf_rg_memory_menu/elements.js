import { Popup_Memory_Details } from './popup_memory_details/index.js';

export const elements = {
  "bTOvg0": Popup_Memory_Details,
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
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "var(--color_bTGzr_default)",
      "boxshadow_blur": 2,
      "boxshadow_color": "var(--color_bTHBQ_default)",
      "order": 2,
      "reference": "bTOqR0",
      "unique_id": {
        "entries": {
          "0": "gfMenuChat"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "offset_left": -8,
      "single_width": false,
      "max_width_css": "200px",
      "min_width_css": "200px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "GroupFocus",
    "id": "bTOpl0",
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
              "bgcolor": "var(--color_surface_default)"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTOpm0",
        "default_name": "Group A",
        "elements": {
          "bTIhn": {
            "properties": {
              "height": 0,
              "left": 20,
              "top": 20,
              "width": 0,
              "zindex": 4,
              "border_roundness": 10,
              "is_visible": false,
              "vertical_centering": true,
              "order": 8,
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
              },
              "1": {
                "condition": {
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
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "is_true",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "param_bTZBz",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOpg0"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
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
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              },
              "2": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTaEp",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
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
            "id": "bTOpt0",
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
                "id": "bTOpx0",
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
                "id": "bTOpy0",
                "default_name": "Icon A"
              }
            },
            "name": "Group Delete Memory",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTKxi": {
            "properties": {
              "height": 0,
              "left": 30,
              "top": 30,
              "width": 0,
              "zindex": 4,
              "border_roundness": 10,
              "is_visible": true,
              "vertical_centering": true,
              "order": 6,
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
            "id": "bTOpz0",
            "current_parent": "bTImt0",
            "default_name": "Group I",
            "elements": {
              "bTHpX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "View details"
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
                  "max_height_css": "17px",
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTOqD0",
                "default_name": "Text F",
                "style": "Text_inter___400___14px___white_"
              },
              "bTIhL": {
                "properties": {
                  "height": 30,
                  "left": 170,
                  "top": 22,
                  "width": 30,
                  "zindex": 4,
                  "icon": "feather eye",
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
                "id": "bTOqE0",
                "default_name": "Icon F"
              }
            },
            "name": "Group View Details",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          },
          "bTOwJ0": {
            "properties": {
              "height": 0,
              "left": 40,
              "top": 40,
              "width": 0,
              "zindex": 4,
              "border_roundness": 10,
              "is_visible": false,
              "vertical_centering": true,
              "order": 7,
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
              },
              "1": {
                "condition": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTOxY0",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
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
            "id": "bTOvz0",
            "current_parent": "bTOpm0",
            "default_name": "Group C",
            "elements": {
              "bTHpX": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Open chat"
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
                  "max_height_css": "17px",
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "type": "Text",
                "id": "bTOwE0",
                "default_name": "Text B",
                "style": "Text_inter___400___14px___white_"
              },
              "bTIhL": {
                "properties": {
                  "height": 30,
                  "left": 170,
                  "top": 22,
                  "width": 30,
                  "zindex": 4,
                  "icon": "feather external-link",
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
                "id": "bTOwF0",
                "default_name": "Icon B"
              }
            },
            "name": "Group Open Chat",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "Group Profile Menu Content"
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
    "id": "bTOqR0",
    "default_name": "Group B",
    "elements": {
      "bTJsL": {
        "properties": {
          "height": 150,
          "left": 0,
          "top": 0,
          "width": 280,
          "zindex": 16,
          "html": {
            "entries": {
              "0": "<style>\n#gfMenuChat {\n  transform: translateX(-190px) !important;\n  width: 200px !important;\n}\n</style>"
            },
            "type": "TextExpression"
          },
          "vertical_centering": true,
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "0px",
          "single_height": true,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTOqV0",
        "current_parent": "bTInQ0",
        "default_name": "HTML A",
        "name": "HTML Move GF",
        "style": "HTML_default_"
      }
    },
    "name": "Group Edit/Delete",
    "style": "Group_transparent_"
  },
  "bTOtt0": {
    "properties": {
      "height": 320,
      "left": 0,
      "top": 0,
      "width": 320,
      "zindex": 14,
      "group_type": "text",
      "order": 5,
      "row_gap": 16,
      "use_gap": true,
      "fit_width": false,
      "unique_id": {
        "entries": {
          "0": "popup-delete-memory"
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": false,
      "max_width_css": "450px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "prevent_user_from_closing_through_esc": false
    },
    "type": "Popup",
    "id": "bTOtV0",
    "current_parent": "bTOpn0",
    "default_name": "Popup B",
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
        "id": "bTOtX0",
        "default_name": "Group K",
        "elements": {
          "bTINS": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Delete memory?"
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
            "id": "bTOtb0",
            "current_parent": "bTIMu",
            "default_name": "Text H",
            "style": "Text_inter___400___18px___white_"
          },
          "bToQV1": {
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
                  "0": "btn-close-delete-memory"
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
            "id": "bToQP1",
            "current_parent": "bTOtX0",
            "default_name": "Group F",
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
                "id": "bToQR1",
                "default_name": "Icon E",
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
          "group_type": "text",
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
        "id": "bTOtd0",
        "default_name": "Group K",
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
              "order": 3,
              "fit_width": true,
              "icon_size": 20,
              "unique_id": {
                "entries": {
                  "0": "btn-cancel-delete-memory"
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
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "is_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOtn0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "button_disabled": true
                },
                "type": "State"
              },
              "bTnVY1": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "hover btn-cancel-delete-memory",
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "param_bTvuv2",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOpg0"
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
            "id": "bTOth0",
            "default_name": "Button B",
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
          "bTNzf": {
            "properties": {
              "height": 36,
              "left": 64.10900000000004,
              "top": 0,
              "width": 135.89099999999996,
              "zindex": 16,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "text",
              "vertical_centering": true,
              "order": 4,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "vert_alignment": "flex-start",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTOti0",
            "default_name": "Group K",
            "elements": {
              "bTNzg": {
                "properties": {
                  "text": {
                    "entries": {
                      "0": "Delete memory"
                    },
                    "type": "TextExpression"
                  },
                  "bold": false,
                  "font_face": "var(--font_default):::600",
                  "height": 44,
                  "left": 0,
                  "top": 0,
                  "width": 150,
                  "zindex": 1,
                  "border_roundness": 12,
                  "font_color": "var(--color_bTGzw_default)",
                  "font_size": 14,
                  "icon_color": "var(--color_bTGzw_default)",
                  "line_height": 1.2,
                  "letter_spacing": 0,
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(180,35,24,0.12)",
                  "order": 4,
                  "fit_width": true,
                  "icon_size": 20,
                  "unique_id": {
                    "entries": {
                      "0": "btn-delete-delete-memory"
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
                  "min_width_css": "135px",
                  "padding_right": 10,
                  "single_height": false,
                  "min_height_css": "36px",
                  "padding_bottom": 8,
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "cb",
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
                        "element_id": "bTOtn0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "text": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      },
                      "button_disabled": true
                    },
                    "type": "State"
                  },
                  "bTnVY1": {
                    "condition": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "hover btn-delete-delete-memory",
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "param_bTvuv2",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTOpg0"
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
                "id": "bTOtj0",
                "current_parent": "bTIMu",
                "default_name": "Button B",
                "name": "Button Delete Memory",
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
              "bTNzm": {
                "properties": {
                  "height": 200,
                  "left": 0,
                  "top": 0,
                  "width": 200,
                  "zindex": 2,
                  "floating_reference": "top",
                  "custom_id": "bTLgB",
                  "is_visible": false,
                  "max_width": 100,
                  "min_width": 0,
                  "fit_height": true,
                  "param_bTUaI": {
                    "entries": {
                      "0": "#ffffff"
                    },
                    "type": "TextExpression"
                  },
                  "single_width": false,
                  "min_width_css": "0px",
                  "single_height": false,
                  "min_height_css": "20px",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true,
                  "floating_reference_horizontal": "none",
                  "floating_reference_horizontal_resp": "left"
                },
                "type": "CustomElement",
                "id": "bTOtn0",
                "default_name": "[Element] Loader A",
                "name": "[Element] Loader Delete memory",
                "custom_definition_name": "[Element] Loader"
              }
            },
            "name": "Group Parent Button/Loader",
            "style": "Group_transparent_"
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
        "id": "bTOto0",
        "default_name": "Group K",
        "elements": {
          "bTIuj0": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Are you sure you want to delete this memory from the team?"
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
            "id": "bTOtp0",
            "current_parent": "bTIOD",
            "default_name": "Text H",
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group Column Container",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup Delete Memory",
    "style": "Popup_standard_popup_"
  },
};
