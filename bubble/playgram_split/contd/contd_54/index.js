// Original path: element_definitions/memory_knowledge/elements/group_main_column_container/elements/group_main_container/elements/group_memory_records/elements/group_rg/elements/rg_memory/elements/group_cell_memory_use_button/elements/group_actions_js_elements/elements/group_action_hidden_html/elements/group_parent_element
export const group_parent_element = {
  "properties": {
    "height": 20,
    "left": 39,
    "top": 0,
    "width": 31,
    "zindex": 4,
    "border_roundness": 6,
    "vertical_centering": true,
    "order": 7,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "34px",
    "single_height": false,
    "min_height_css": "34px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTOpP0",
  "default_name": "Group O",
  "elements": {
    "bTOwd0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 2,
        "floating_reference": "top",
        "custom_id": "bTOpg0",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "order": 2,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTZBz": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "project"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "next": {
                  "args": "yes",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "args": {
                                              "next": {
                                                "type": "Message",
                                                "name": "current_workspace_custom_workspace",
                                                "is_slidable": false
                                              },
                                              "type": "CurrentUser",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "contains",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "admins_list_custom_workspace",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "get_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTOWT0"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "args": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "current_workspace_custom_workspace",
                                                    "is_slidable": false
                                                  },
                                                  "type": "CurrentUser",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "contains",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "admins_list_custom_workspace",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "constraints": {
                                              "0": {
                                                "key": "_id",
                                                "value": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "get_AAI",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTifn2"
                                                  },
                                                  "type": "GetElement",
                                                  "is_slidable": false
                                                },
                                                "constraint_type": "equals"
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
                                        "element_id": "bTOQj0"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
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
                          "element_id": "bTOWT0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "no"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.tab_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "param_bTaEp": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifh2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTOxT0": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifJ2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTOxX0": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiKz2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTOxY0": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifP2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTPCD1": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifb2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTjsb0": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiLT2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "param_bTvuv2": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "custom.shortcut_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            }
          },
          "type": "TextExpression"
        },
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTOtJ0",
      "default_name": "[Element] RG Memory Menu A"
    },
    "bTOwh0": {
      "properties": {
        "height": 30,
        "left": 43.5,
        "top": 24.3203125,
        "width": 30,
        "zindex": 1,
        "icon": "feather more-horizontal",
        "icon_color": "var(--color_bTkRL4_default)",
        "vertical_centering": true,
        "order": 4,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "14px",
        "single_height": true,
        "min_height_css": "14px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
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
            "icon_color": "var(--color_bTsrp2_default)"
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
      "id": "bTOpa0",
      "current_parent": "bTOVo0",
      "default_name": "Icon E",
      "name": "Icon Menu",
      "transitions": {
        "icon_color": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group Parent Element",
  "style": "Group_transparent_",
};
