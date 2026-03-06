export const Group_Header = {
  "properties": {
    "height": 0,
    "left": 16,
    "top": 16,
    "width": 0,
    "zindex": 13,
    "vertical_centering": true,
    "order": 14,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTulE1",
  "default_name": "Group P",
  "elements": {
    "bTINT": {
      "properties": {
        "height": 30,
        "left": -16,
        "top": -16,
        "width": 30,
        "zindex": 4,
        "icon": "feather x",
        "icon_color": "var(--color_bTkRL4_default)",
        "vertical_centering": true,
        "order": 4,
        "fit_height": false,
        "margin_right": 10,
        "single_width": true,
        "min_width_css": "24px",
        "single_height": true,
        "min_height_css": "24px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "cb",
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
            "icon_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#121213"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#f7f8f9"
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
      "type": "Icon",
      "id": "bTulF1",
      "default_name": "Icon J",
      "style": "Icon_standard_icon_"
    },
    "bTJAM": {
      "properties": {
        "height": 48,
        "left": 59,
        "top": 142,
        "width": 250,
        "zindex": 3,
        "mandatory": false,
        "border_roundness": 16,
        "content": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "font_color": "var(--color_bTkRP4_default)",
        "placeholder": {
          "entries": {
            "0": "Search chats..."
          },
          "type": "TextExpression"
        },
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
        "order": 2,
        "unique_id": {
          "entries": {
            "0": "pp-inputSearch"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "single_width": false,
        "padding_right": 34,
        "single_height": false,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
        "placeholder_color": "var(--color_bTkRL4_default)",
        "not_submit_on_enter": true,
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
            "placeholder": {
              "entries": {
                "0": "Search projects..."
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
                "args": "popup_models",
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
            "placeholder": {
              "entries": {
                "0": "Search models..."
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": "popup_palette",
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
            "placeholder": {
              "entries": {
                "0": "Search commands..."
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Input",
      "id": "bTulJ1",
      "default_name": "Input C",
      "name": "Input Search Chats",
      "style": "Input_standart_new_input_"
    },
    "bTtis1": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 51,
        "width": 0,
        "zindex": 2,
        "is_visible": true,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTulK1",
      "default_name": "Group P",
      "elements": {
        "bTtaV1": {
          "properties": {
            "height": 1,
            "left": -12,
            "top": -63,
            "width": 1,
            "zindex": 19,
            "is_visible": true,
            "AAD": "option.llm_providers__os_",
            "AAE": {
              "next": {
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "visible",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.llm_providers__os_"
              },
              "type": "AllOptionValue",
              "is_slidable": false
            },
            "AAF": "display",
            "AAL": true,
            "AAN": {
              "entries": {
                "0": "pp-inputSearch"
              },
              "type": "TextExpression"
            },
            "AAP": 0.4,
            "AAX": 100,
            "order": 4,
            "fit_height": false,
            "fixed_width": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "1553006094610x835866904531566600-AAC",
          "id": "bTulL1",
          "current_parent": "bTpjO",
          "default_name": "Fuzzysearch&Autocomplete A",
          "name": "Fuzzysearch Models Provide"
        },
        "bTtaW1": {
          "properties": {
            "height": 1,
            "left": 0,
            "top": 0,
            "width": 1,
            "zindex": 18,
            "AAD": "option.shortcuts",
            "AAE": {
              "next": {
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "visible0",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.shortcuts"
              },
              "type": "AllOptionValue",
              "is_slidable": false
            },
            "AAF": "description",
            "AAL": true,
            "AAN": {
              "entries": {
                "0": "pp-inputSearch"
              },
              "type": "TextExpression"
            },
            "AAP": 0.4,
            "AAR": false,
            "AAW": 0,
            "AAX": 50,
            "order": 3,
            "min_width": 1,
            "unique_id": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "fixed_width": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "1553006094610x835866904531566600-AAC",
          "id": "bTulP1",
          "default_name": "Fuzzysearch&Autocomplete A",
          "name": "Fuzzysearch Shortcuts"
        },
        "bTtaX1": {
          "properties": {
            "height": 1,
            "left": 0,
            "top": 0,
            "width": 1,
            "zindex": 19,
            "AAD": "option.llm_models__os_",
            "AAE": {
              "next": {
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "visible",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.llm_models__os_"
              },
              "type": "AllOptionValue",
              "is_slidable": false
            },
            "AAF": "display",
            "AAL": true,
            "AAN": {
              "entries": {
                "0": "pp-inputSearch"
              },
              "type": "TextExpression"
            },
            "AAP": 0.3,
            "AAW": 0,
            "AAX": 90,
            "AAZ": 1,
            "order": 2,
            "fit_height": false,
            "fixed_width": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "1553006094610x835866904531566600-AAC",
          "id": "bTulQ1",
          "default_name": "Fuzzysearch&Autocomplete A",
          "name": "Fuzzysearch Models"
        },
        "bTtad1": {
          "properties": {
            "height": 1,
            "left": 10,
            "top": 10,
            "width": 1,
            "zindex": 18,
            "AAD": "custom.project",
            "AAE": {
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
            "AAF": "name_text",
            "AAL": true,
            "AAN": {
              "entries": {
                "0": "pp-inputSearch"
              },
              "type": "TextExpression"
            },
            "AAP": 0.4,
            "AAR": false,
            "AAW": 0,
            "AAX": 50,
            "order": 1,
            "min_width": 1,
            "unique_id": {
              "entries": {
                "0": ""
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "fixed_width": true,
            "single_width": true,
            "min_width_css": "32px",
            "single_height": true,
            "min_height_css": "32px",
            "horiz_alignment": "flex-start",
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
                "is_slidable": false
              },
              "properties": {
                "AAE": {
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
                "is_slidable": false
              },
              "properties": {
                "AAE": {
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
            }
          },
          "type": "1553006094610x835866904531566600-AAC",
          "id": "bTulR1",
          "current_parent": "bTpjO",
          "default_name": "Fuzzysearch&Autocomplete A",
          "name": "Fuzzysearch projects"
        }
      },
      "name": "Group Fuzzy searches",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Header",
  "style": "Group_transparent_"
};
