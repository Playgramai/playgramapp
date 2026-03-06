export const g_popup_shortcut_project = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 56,
    "width": 0,
    "zindex": 15,
    "is_visible": false,
    "vertical_centering": true,
    "order": 24,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "max_height_css": "400px",
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_NewProjectChat",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "popup_AddProjectChat",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.last_shortcut_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
  "id": "bTuka1",
  "default_name": "Group P",
  "elements": {
    "bTplr": {
      "properties": {
        "height": 350,
        "left": -16,
        "top": -72,
        "width": 280,
        "zindex": 8,
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "descending": true,
                  "sort_field": "Created Date"
                },
                "type": "Message",
                "name": "sorted",
                "is_slidable": true
              },
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
        "is_visible": true,
        "separator_color": "rgba(150,150,150,0)",
        "separator_width": 0,
        "order": 1,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "rg-sc-projects"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "fixed_rows": false,
        "single_width": false,
        "single_height": false,
        "max_height_css": "400px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "nonant_alignment": "bb",
        "cell_min_height_css": "100%",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "show_all_projects__boolean",
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
                "name": "owner_user",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_organization_custom_organization",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
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
                  }
                },
                "descending": true,
                "sort_field": "Created Date",
                "type_to_find": "custom.project"
              },
              "type": "Search",
              "said": "a2Vsdm8tMzE4ODQ="
            }
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
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "show_all_projects__boolean",
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
                "name": "user_type_option_user_type__os_",
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
                  }
                },
                "descending": true,
                "sort_field": "Created Date",
                "type_to_find": "custom.project"
              },
              "type": "Search",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": 0,
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAa",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTulR1"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_AAa",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTulR1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTulJ1"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_AAa",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTulR1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "State"
        }
      },
      "type": "RepeatingGroup",
      "id": "bTukb1",
      "current_parent": "bTpjO",
      "default_name": "RepeatingGroup A",
      "elements": {
        "bTpnh": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
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
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "border_roundness": 6,
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 14,
            "is_visible": true,
            "order": 2,
            "fit_width": false,
            "unique_id": {
              "entries": {
                "0": "p-cell-",
                "1": {
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "font_family": "Inter",
            "font_weight": "500",
            "padding_top": 8,
            "margin_right": 4,
            "padding_left": 8,
            "single_width": false,
            "min_width_css": "0px",
            "padding_right": 8,
            "single_height": false,
            "min_height_css": "17px",
            "padding_bottom": 8,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "1": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTulp1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "convert_to_number",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "last_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "hover"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "split_by",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "get_AAV",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTuQJ1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": "arrowIndex",
                                        "type": "Message",
                                        "name": "not_contains",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAV",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTuQJ1"
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
                              "type": "CurrentCellsIndex",
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
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTkRP4_default)",
                "background_style": "bgcolor",
                "bgcolor": "rgba(128,189,203,0.16)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTukf1",
          "default_name": "Text D",
          "style": "Text_inter___400___14px____d4d4d4_"
        }
      },
      "name": "RG Projects popup",
      "style": "RepeatingGroup_transparent_"
    },
    "bTplv": {
      "properties": {
        "text": {
          "entries": {
            "0": "No projects"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -16,
        "top": -72,
        "width": 100,
        "zindex": 14,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "is_visible": false,
        "line_height": 1.2,
        "vertical_centering": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "margin_top": 0,
        "margin_left": 14,
        "single_width": false,
        "margin_bottom": 0,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "aa",
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
              "element_id": "bTukb1"
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
      "type": "Text",
      "id": "bTukg1",
      "current_parent": "bTpjO",
      "default_name": "Text D",
      "name": "Text No projects"
    }
  },
  "name": "G - popup shortcut Project ",
  "style": "Group_transparent_",
};
