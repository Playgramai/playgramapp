export const group_project_chat_settings_use_button = {
  "properties": {
    "height": 34,
    "left": -475.890625,
    "top": -12,
    "width": 205.9453125,
    "zindex": 16,
    "is_visible": false,
    "vertical_centering": true,
    "order": 7,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
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
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUiZ0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "args": "yes",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
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
                                    "name": "project_custom_project",
                                    "is_slidable": false
                                  },
                                  "type": "ElementParent",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": {
                                          "next": {
                                            "type": "Message",
                                            "name": "current_organization_custom_organization",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
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
                                                  "next": {
                                                    "args": {
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
                                          "type": "Message",
                                          "name": "and_",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "equals",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "organization_custom_organization",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
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
                            "name": "Created By",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression",
                      "said": "a2Vsdm8tMzE4ODQ="
                    }
                  },
                  "type": "ArbitraryText"
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
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
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
  "id": "bTUhp0",
  "current_parent": "bTHqO",
  "default_name": "Group U",
  "elements": {
    "bTJrz": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 2,
        "floating_reference": "top",
        "custom_id": "bTIml0",
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "is_visible": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTJsF": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "cc",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTUhv0",
      "default_name": "[Element] GF Chat Menu A"
    },
    "bTmPF3": {
      "properties": {
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 36,
        "zindex": 5,
        "border_roundness": 12,
        "vertical_centering": true,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 4,
        "padding_left": 4,
        "single_width": true,
        "min_width_css": "40px",
        "padding_right": 4,
        "single_height": true,
        "min_height_css": "40px",
        "padding_bottom": 4,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
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
              "name": "custom.visible__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUhv0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#e5e7eb14"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#acacad14"
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
        },
        "1": {
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
            "border_roundness": 8,
            "min_width_css": "28px",
            "min_height_css": "28px"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTmPD3",
      "default_name": "Group IZZZZ",
      "elements": {
        "bTmPJ3": {
          "properties": {
            "height": 24,
            "left": 0,
            "top": 0,
            "width": 24,
            "zindex": 1,
            "border_roundness": 12,
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#f2f3f5"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#1b1b1d"
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
            "border_style": "none",
            "fit_width": true,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "36px",
            "single_height": true,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "nonant_alignment": "bb",
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
                "background_style": "bgcolor",
                "bgcolor": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#e5e7eb"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#262629"
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
                  "name": "custom.visible__",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUhv0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "background_style": "bgcolor",
                "bgcolor": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#e5e7eb"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#262629"
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
            },
            "2": {
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
                "border_roundness": 8,
                "min_width_css": "28px",
                "min_height_css": "28px"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTlot",
          "default_name": "Group HZZZZ",
          "elements": {
            "bTloz": {
              "properties": {
                "height": 30,
                "left": 0,
                "top": 0,
                "width": 30,
                "zindex": 1,
                "icon": "phosphor regular dots-three",
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
                  "is_slidable": false
                },
                "vertical_centering": true,
                "order": 9,
                "fit_height": false,
                "single_width": true,
                "min_width_css": "20px",
                "single_height": true,
                "min_height_css": "20px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
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
                        "name": "is_true",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.visible__",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUhv0"
                    },
                    "type": "GetElement",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "properties": {
                    "icon_color": "rgba(255,255,255,1)"
                  },
                  "type": "State"
                }
              },
              "type": "Icon",
              "id": "bTUht0",
              "default_name": "Icon D"
            }
          },
          "name": "Group menu chat",
          "style": "Group_transparent_"
        }
      },
      "name": "Group menu active",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Project/Chat Settings (use button)",
  "style": "Group_transparent_",
};
