export const group_profile_menu_content = {
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
  "name": "Group Profile Menu Content",
};
