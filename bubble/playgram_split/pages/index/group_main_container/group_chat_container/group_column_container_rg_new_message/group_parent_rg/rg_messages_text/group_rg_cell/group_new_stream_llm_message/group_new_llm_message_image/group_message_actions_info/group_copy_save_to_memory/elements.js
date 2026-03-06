export const elements = {
  "bTMFJ": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 13,
      "border_roundness": 6,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "order": 7,
      "use_gap": true,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": "saveButton",
          "1": {
            "type": "CurrentCellsIndex",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "column_gap": 4,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "26px",
      "single_height": true,
      "min_height_css": "26px",
      "vert_alignment": "center",
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
                        "0": "#acacad1a"
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
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "extract_regex",
                          "is_slidable": true
                        },
                        "type": "ElementParent",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.current_saved_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
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
                        "0": "#e5e7eb"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#acacad1a"
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
          },
          "padding_top": 5,
          "padding_left": 8,
          "padding_right": 8,
          "padding_bottom": 5
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
                  "name": "is_empty",
                  "is_slidable": false
                },
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "extract_regex",
                          "is_slidable": true
                        },
                        "type": "ElementParent",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "properties": {
          "is_visible": false
        },
        "type": "State"
      },
      "3": {
        "condition": {
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
                "name": "equals",
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
        "properties": {
          "is_visible": false
        },
        "type": "State"
      },
      "4": {
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
                  "next": {
                    "args": {
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
                          "name": "project_custom_project",
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
                          "next": {
                            "next": {
                              "args": {
                                "properties": {
                                  "option_set": "option.chat_type__os_",
                                  "option_value": "personal"
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
                      "type": "Message",
                      "name": "or_",
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
      "5": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=creator_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "extract_regex",
                          "is_slidable": true
                        },
                        "type": "ElementParent",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_id",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtau0",
    "default_name": "Group A",
    "elements": {
      "bTMFK": {
        "properties": {
          "text": {
            "entries": {
              "0": "Save to memory"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -107.5546875,
          "top": 0,
          "width": 100,
          "zindex": 5,
          "is_visible": false,
          "order": 4,
          "fit_width": true,
          "fit_height": true,
          "margin_left": 26,
          "margin_right": 6,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "cb",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
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
                      "name": "isnt_clickable",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTtau0"
                    },
                    "type": "GetElement",
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
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "font_color": {
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "is_visible": true,
              "opacity": 100
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "first_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "regex": {
                                  "entries": {
                                    "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "type": "ElementParent",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "args": "true",
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
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
                "name": "custom.current_saved_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Saving..."
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
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Remove from memory"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "first_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "regex": {
                                  "entries": {
                                    "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "type": "ElementParent",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "args": "true",
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
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
                "name": "custom.current_saved_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Removing..."
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          },
          "4": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "args": "true",
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "isnt_hovered",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTtau0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "first_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "regex": {
                                              "entries": {
                                                "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "extract_regex",
                                          "is_slidable": true
                                        },
                                        "type": "ElementParent",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "ArbitraryText"
                              },
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.current_saved_message_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUdV0"
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "Saved to memory"
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTtav0",
        "default_name": "Text OZ",
        "name": "Text Save to memory",
        "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
      },
      "bTMFL": {
        "properties": {
          "height": 30,
          "left": -107.5546875,
          "top": 0,
          "width": 30,
          "zindex": 6,
          "icon": "feather bookmark",
          "icon_color": "var(--color_bTkRL4_default)",
          "is_visible": false,
          "vertical_centering": true,
          "order": 3,
          "fit_height": false,
          "single_width": true,
          "min_width_css": "16px",
          "single_height": true,
          "min_height_css": "16px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "aa",
          "collapse_when_hidden": true
        },
        "states": {
          "1": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.current_saved_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "icon": "phosphor regular circle-notch",
              "is_visible": true,
              "spin_icon": true
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTtaz0",
        "default_name": "Icon I",
        "name": "Icon feather bookmark",
        "transitions": {
          "icon_color": {
            "fn": "ease",
            "duration": 200
          }
        }
      },
      "bTlfh2": {
        "properties": {
          "height": 240,
          "left": 6,
          "top": 0,
          "width": 240,
          "zindex": 2,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765464287355x386265884483869100/Bookmark--add.svg"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": true,
          "margin_left": 6,
          "margin_right": 6,
          "single_width": true,
          "min_width_css": "14px",
          "single_height": false,
          "min_height_css": "240px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "ab",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
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
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765464304898x651998843556944560/Bookmark--add-1.svg"
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
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766608069006x107633227516634510/Bookmark--add-1%201%201.svg"
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
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.current_saved_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "isnt_clickable",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "opacity": 50
            },
            "type": "State"
          },
          "4": {
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
              "is_visible": false
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTtbA0",
        "current_parent": "bTVDB0",
        "default_name": "Image AZ",
        "style": "Image_standard_image_"
      },
      "bTwJF2": {
        "properties": {
          "height": 240,
          "left": 16,
          "top": 10,
          "width": 240,
          "zindex": 3,
          "src": {
            "entries": {
              "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770211985867x584874362480628700/Bookmark--add.svg"
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": true,
          "margin_left": 6,
          "margin_right": 6,
          "single_width": true,
          "min_width_css": "14px",
          "single_height": false,
          "min_height_css": "240px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "ab",
          "use_aspect_ratio": true,
          "aspect_ratio_width": 1,
          "aspect_ratio_height": 1,
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
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212001896x314810626478663200/Bookmark--add-1.svg"
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
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "properties": {
              "src": {
                "entries": {
                  "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212204031x673414608965298200/Bookmark--add-1%201%201%201.svg"
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
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.current_saved_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          },
          "3": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "isnt_clickable",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "opacity": 50
            },
            "type": "State"
          },
          "4": {
            "condition": {
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
            "properties": {
              "is_visible": false
            },
            "type": "State"
          }
        },
        "type": "Image",
        "id": "bTwJA2",
        "current_parent": "bTtau0",
        "default_name": "Image G",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group Save to Memory (use button)",
    "style": "Group_transparent_",
    "custom_states": {
      "loading__": {
        "display": "loading?",
        "value": "boolean",
        "make_static": true
      }
    }
  },
  "bTYSq": {
    "properties": {
      "height": 200,
      "left": 0,
      "top": -76.796875,
      "width": 200,
      "zindex": 11,
      "floating_reference": "top",
      "custom_id": "bTYRt",
      "data_source": {
        "next": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "is_visible": false,
      "order": 6,
      "fit_width": true,
      "max_width": 100,
      "min_width": 0,
      "fit_height": true,
      "param_bTYST": true,
      "param_bTYSv": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": "",
                  "3": {
                    "properties": {
                      "length": 6,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "4": ""
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText"
          }
        },
        "type": "TextExpression"
      },
      "single_width": true,
      "max_width_css": "16px",
      "min_width_css": "26px",
      "single_height": true,
      "min_height_css": "26px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
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
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "CustomElement",
    "id": "bTtbB0",
    "current_parent": "bTVCz0",
    "default_name": "Clock A",
    "custom_definition_name": "Clock"
  },
  "bTYTP": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 44,
      "data_source": {
        "type": "ElementParent",
        "is_slidable": false
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "none",
      "order": 9,
      "unique_id": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "single_width": true,
      "min_width_css": "18px",
      "single_height": true,
      "min_height_css": "18px",
      "vert_alignment": "center",
      "horiz_alignment": "center",
      "container_layout": "relative",
      "collapse_when_hidden": true,
      "container_vert_alignment": "center"
    },
    "type": "Group",
    "id": "bTtbF0",
    "current_parent": "bTVCz0",
    "default_name": "Group A",
    "elements": {
      "bUHTe1": {
        "properties": {
          "height": 30,
          "left": 0,
          "top": 0,
          "width": 30,
          "zindex": 4,
          "icon": "feather clock",
          "icon_color": "var(--color_bTGzv_default)",
          "vertical_centering": true,
          "order": 1,
          "single_width": true,
          "min_width_css": "16px",
          "single_height": true,
          "min_height_css": "16px",
          "nonant_alignment": "bb",
          "collapse_when_hidden": true
        },
        "states": {
          "1": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_hovered",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtbF0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "icon_color": "var(--color_primary_contrast_default)"
            },
            "type": "State"
          }
        },
        "type": "Icon",
        "id": "bTtbG0",
        "current_parent": "bUHTW1",
        "default_name": "Icon I",
        "transitions": {
          "icon_color": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Clock"
  },
  "bTZAx": {
    "properties": {
      "height": 200,
      "left": 54,
      "top": 30.703125,
      "width": 200,
      "zindex": 45,
      "floating_reference": "top",
      "custom_id": "bTZAT",
      "data_source": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "get_AAF",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTwFD0"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      },
      "order": 1,
      "fit_width": true,
      "max_width": 100,
      "min_width": 0,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "26px",
      "single_height": true,
      "min_height_css": "26px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "collapse_when_hidden": true,
      "floating_reference_horizontal": "none",
      "floating_reference_horizontal_resp": "left"
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
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
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
    "type": "CustomElement",
    "id": "bTtbH0",
    "default_name": "[Element] Copy LLM Message D",
    "name": "[Element] Copy LLM Message",
    "custom_definition_name": "[Element] Copy LLM Message"
  },
  "bTXFT0": {
    "properties": {
      "height": 0,
      "left": 191.5546875,
      "top": 0,
      "width": 0,
      "zindex": 14,
      "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
      "border_roundness": 10,
      "boxshadow_style": "none",
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "border_style": "none",
      "boxshadow_blur": 12,
      "boxshadow_color": "rgba(0,0,0,0.2)",
      "boxshadow_spread": 0,
      "order": 8,
      "opacity": 0,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 8,
      "padding_left": 10,
      "single_width": false,
      "padding_right": 10,
      "single_height": false,
      "min_height_css": "55px",
      "padding_bottom": 8,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": false
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": "true",
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "ElementParent",
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
          "properties": {
            "element_id": "bTtau0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true,
          "opacity": 100
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
          "bgcolor": "var(--color_bTsrr2_default)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtbL0",
    "default_name": "Group A",
    "elements": {
      "bTXFU0": {
        "properties": {
          "height": 30,
          "left": -191.5546875,
          "top": 0,
          "width": 30,
          "zindex": 12,
          "icon": "feather info",
          "icon_color": "var(--color_bTkRL4_default)",
          "is_visible": false,
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
        "id": "bTtbM0",
        "current_parent": "bTVCz0",
        "default_name": "Icon I",
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
              "0": "We auto-save required info but you can force save anything else."
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -191.5546875,
          "top": 0,
          "width": 100,
          "zindex": 11,
          "is_visible": true,
          "order": 2,
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
                "name": "isnt_clickable",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "text": {
                "entries": {
                  "0": "You don\u2019t have permission to remove this message from memory. \nIt was saved by admin."
                },
                "type": "TextExpression"
              }
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTtbN0",
        "current_parent": "bTVDB0",
        "default_name": "Text OZ",
        "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
      }
    },
    "name": "Group Tooltip Save to Memory",
    "style": "Group_transparent_",
    "transitions": {
      "opacity": {
        "fn": "ease-in-out",
        "duration": 500
      }
    }
  },
  "bTlfL2": {
    "properties": {
      "height": 22,
      "left": 30,
      "top": 12.5,
      "width": 22,
      "zindex": 46,
      "border_roundness": 6,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "vertical_centering": true,
      "order": 5,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": ""
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "single_width": true,
      "min_width_css": "26px",
      "single_height": true,
      "min_height_css": "26px",
      "vert_alignment": "center",
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
          "background_style": "bgcolor",
          "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "custom.regenerate_chat_id_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "button_disabled": true
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.regenerate_chat_id_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "button_disabled": true
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "personal"
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
                            "type": "CurrentUser",
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
                  "type": "Message",
                  "name": "and_",
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
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "4": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "project"
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
                          "name": "members_list_custom_workspace",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "project_custom_project",
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
                  "type": "Message",
                  "name": "and_",
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
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "5": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "team"
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
                            "type": "Message",
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "constraints": {
                            "0": {
                              "key": "organization_workspace_custom_organization",
                              "value": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "organization_custom_organization",
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
                              "constraint_type": "equals"
                            }
                          }
                        },
                        "type": "Message",
                        "name": "filtered",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "workspaces_list_custom_workspace",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtbR0",
    "default_name": "Group A",
    "elements": {
      "bTnSd1": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 1,
          "floating_reference": "top",
          "custom_id": "bTnQI1",
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "param_bTYSv": {
            "entries": {
              "0": {
                "type": "Empty"
              }
            },
            "type": "TextExpression"
          },
          "param_bTnSZ1": {
            "next": {
              "next": {
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
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
          "param_bTnSj1": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "custom.regenerate_chat_id_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "single_width": false,
          "max_width_css": "26px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "16px",
          "horiz_alignment": "flex-start",
          "nonant_alignment": "bb",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTtbS0",
        "default_name": "[Element] Regenerate B",
        "name": "[Element] Regenerate",
        "custom_definition_name": "[Element] Regenerate"
      }
    },
    "name": "Group Regenerate Container (use button)",
    "style": "Group_transparent_"
  }
};
