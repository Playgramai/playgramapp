export const elements = {
  "bTYYq": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 5,
      "border_roundness": 20,
      "data_source": {
        "type": "ElementParent",
        "is_slidable": false
      },
      "group_type": "text",
      "is_visible": true,
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
      "order": 1,
      "fit_width": true,
      "unique_id": {
        "entries": {
          "0": ""
        },
        "type": "TextExpression"
      },
      "fit_height": true,
      "padding_top": 16,
      "padding_left": 24,
      "single_width": false,
      "max_width_css": "540px",
      "padding_right": 24,
      "single_height": false,
      "min_height_css": "52px",
      "padding_bottom": 16,
      "horiz_alignment": "flex-end",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
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
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "310px"
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
          "bgcolor": "rgba(var(--color_bTtSL3_default_rgb), 0.18)"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtcH0",
    "current_parent": "bTHTu0",
    "default_name": "Group A",
    "elements": {
      "bUaKG": {
        "properties": {
          "text": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
              "1": ""
            },
            "type": "TextExpression"
          },
          "height": 59,
          "left": 0,
          "top": -126,
          "width": 216,
          "zindex": 2,
          "order": 3,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "max_width_css": "508px",
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTtcI0",
        "default_name": "Text OZ",
        "name": "Text Parent group's text ",
        "style": "Text_inter___400___16px___neutral_"
      }
    },
    "name": "Group User Message Text"
  },
  "bTYYr": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 2,
      "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
      "border_roundness": 14,
      "data_source": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "next": {
                      "args": "cdn.bubble.io",
                      "next": {
                        "properties": {
                          "formatting_for_true": {
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
                                        "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "https://playgram-version-test.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "https://frala.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "name": "AppIsTest"
                                },
                                "type": "PageData",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": "",
                              "3": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "first_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ";"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTUiv0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "4": "/",
                              "5": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": {
                                              "next": {
                                                "properties": {
                                                  "formatting_for_true": {
                                                    "entries": {
                                                      "0": "https://playgram-version-test.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "formatting_for_false": {
                                                    "entries": {
                                                      "0": "https://frala.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "name": "AppIsTest"
                                              },
                                              "type": "PageData",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            }
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                              "6": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "background_style": "none",
      "bgcolor": "rgba(255,255,255,0.15)",
      "border_style": "solid",
      "order": 2,
      "use_gap": true,
      "fit_width": true,
      "column_gap": 10,
      "fit_height": true,
      "padding_top": 10,
      "padding_left": 15,
      "single_width": false,
      "padding_right": 15,
      "single_height": false,
      "min_height_css": "40px",
      "padding_bottom": 10,
      "horiz_alignment": "flex-end",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_animation": false,
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
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "is_visible": true
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "next": {
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
                          "name": "not_equals",
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "cdn.bubble.io",
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
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
                            "name": "not_contains",
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
                  "next": {
                    "args": {
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "cdn.bubble.io",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "members_list_user",
                          "is_slidable": false
                        },
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
                  "next": {
                    "args": {
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "cdn.bubble.io",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtcJ0",
    "current_parent": "bTMXP0",
    "default_name": "Group A",
    "elements": {
      "bTPMp": {
        "properties": {
          "height": 0,
          "left": 8,
          "top": 38,
          "width": 0,
          "zindex": 4,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "text",
          "vertical_centering": true,
          "order": 3,
          "row_gap": 4,
          "use_gap": true,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "horiz_alignment": "flex-start",
          "container_layout": "column",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTtcN0",
        "default_name": "Group A",
        "elements": {
          "bTPMq": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "_(\\d+)(?=\\.[^.]+$)"
                              },
                              "type": "TextExpression"
                            },
                            "use_regex": true
                          },
                          "type": "Message",
                          "name": "find_replace",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "last_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "/"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -8,
              "top": -38,
              "width": 100,
              "zindex": 2,
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
            "id": "bTtcO0",
            "default_name": "Text OZ",
            "style": "Text_inter___400___14px___white_"
          },
          "bTPMr": {
            "properties": {
              "text": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "to_uppercase",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "last_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "."
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "ElementParent",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "height": 36,
              "left": -8,
              "top": -38,
              "width": 100,
              "zindex": 2,
              "order": 2,
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
            "id": "bTtcP0",
            "current_parent": "bTPMB",
            "default_name": "Text OZ",
            "style": "Text_inter___400___12px____afafaf_"
          }
        },
        "style": "Group_transparent_"
      },
      "bTUJX0": {
        "properties": {
          "height": 240,
          "left": 0,
          "top": 0,
          "width": 320,
          "zindex": 5,
          "src": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "icon",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_advanced_search_constraint",
                        "value": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "."
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "ElementParent",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "display",
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
                  "option_set": "option.file_types__os_",
                  "option_value": "all values"
                },
                "type": "OptionValue",
                "said": "a2Vsdm8tMzE4ODQ="
              }
            },
            "type": "TextExpression"
          },
          "order": 2,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "28px",
          "single_height": true,
          "min_height_css": "32px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": false,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bTtcT0",
        "current_parent": "bTUHd0",
        "default_name": "Image AZ",
        "name": "Image File Extension",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group User Attached File (use button)",
    "style": "Group_transparent_"
  },
  "bTYYv": {
    "properties": {
      "height": 280,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 2,
      "border_roundness": 14,
      "data_source": {
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "next": {
                      "args": "cdn.bubble.io",
                      "next": {
                        "properties": {
                          "formatting_for_true": {
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
                                        "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "https://playgram-version-test.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "https://frala.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "name": "AppIsTest"
                                },
                                "type": "PageData",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": "",
                              "3": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "first_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ";"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTUiv0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "4": "/",
                              "5": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": {
                                              "next": {
                                                "properties": {
                                                  "formatting_for_true": {
                                                    "entries": {
                                                      "0": "https://playgram-version-test.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "formatting_for_false": {
                                                    "entries": {
                                                      "0": "https://frala.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "name": "AppIsTest"
                                              },
                                              "type": "PageData",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            }
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                              "6": ""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
      "group_type": "image",
      "is_visible": false,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "single_width": false,
      "max_width_css": "250px",
      "single_height": false,
      "horiz_alignment": "flex-end",
      "container_layout": "row",
      "nonant_alignment": "aa",
      "collapse_animation": false,
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
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "is_visible": true
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "next": {
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
                          "name": "not_equals",
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "cdn.bubble.io",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
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
                            "name": "not_contains",
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
                  "next": {
                    "args": {
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "cdn.bubble.io",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      },
      "3": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "members_list_user",
                          "is_slidable": false
                        },
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
                  "next": {
                    "args": {
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
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "cdn.bubble.io",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "name": "and_",
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
              "name": "share_access_boolean",
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
          "data_source": {
            "next": {
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTMBs0.bTrHv1",
              "params_url": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  }
                },
                "type": "TextExpression"
              },
              "params_path": {
                "entries": {
                  "0": "/",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 4,
                            "type": "Message",
                            "name": "specific_item",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "/"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                  "2": "/"
                },
                "type": "TextExpression"
              },
              "url_params_version": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "/version-",
                              "1": {
                                "properties": {
                                  "name": "AppVersion"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": ""
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
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
                    "properties": {
                      "name": "AppIsTest"
                    },
                    "type": "PageData",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "url_params_app version": {
                "entries": {
                  "0": {
                    "properties": {
                      "name": "AppVersion"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "headers_string_for_update": {
                "entries": {
                  "0": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTtcU0",
    "current_parent": "bTMXP0",
    "default_name": "Group A",
    "elements": {
      "bTSpu0": {
        "properties": {
          "height": 240,
          "left": 140.5,
          "top": 115.6015625,
          "width": 320,
          "zindex": 2,
          "stretch_or_rescale": "zoom",
          "border_roundness": 14,
          "src": {
            "entries": {
              "0": {
                "type": "ElementParent",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "order": 1,
          "fit_height": true,
          "single_width": true,
          "max_width_css": "250px",
          "min_width_css": "250px",
          "single_height": false,
          "horiz_alignment": "flex-start",
          "use_aspect_ratio": false,
          "collapse_when_hidden": true
        },
        "type": "Image",
        "id": "bTtcV0",
        "default_name": "Image AZ",
        "style": "Image_standard_image_"
      }
    },
    "name": "Group User Message Image use (button)",
    "style": "Group_new_image_"
  },
  "bTszJ1": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 12,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 4,
      "fit_height": false,
      "margin_top": 0,
      "single_width": false,
      "single_height": true,
      "min_height_css": "28px",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": false,
      "container_horiz_alignment": "flex-end"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 1024,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0",
                  "name": "Current Page Width"
                },
                "type": "PageData",
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
          "properties": {
            "element_id": "bTtbx0"
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
    "id": "bTtcZ0",
    "current_parent": "bTYYk",
    "default_name": "Group A",
    "elements": {
      "bTYSk": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": -76.796875,
          "width": 200,
          "zindex": 9,
          "floating_reference": "top",
          "custom_id": "bTKWz0",
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
                    "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "is_visible": true,
          "order": 8,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "param_bTcgY0": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "18px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-end",
          "collapse_when_hidden": false,
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTtca0",
        "current_parent": "bTKYC0",
        "default_name": "[Element] Copy Simple Text A",
        "name": "[Element] Copy",
        "custom_definition_name": "[Element] Copy Simple Text"
      },
      "bTYTm": {
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
                    "0": "(?<=user_message_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "is_visible": true,
          "order": 7,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "param_bTYST": false,
          "param_bTYSv": {
            "entries": {
              "0": {
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
              },
              "1": ""
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
        "type": "CustomElement",
        "id": "bTtcb0",
        "current_parent": "bTYSd",
        "default_name": "Clock A",
        "custom_definition_name": "Clock"
      },
      "bTlhn2": {
        "properties": {
          "height": 22,
          "left": 452,
          "top": 5.5,
          "width": 22,
          "zindex": 15,
          "border_roundness": 6,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "text",
          "is_visible": false,
          "vertical_centering": true,
          "order": 4,
          "fit_width": true,
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
          "2": {
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
          },
          "3": {
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
          "4": {
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
          }
        },
        "type": "Group",
        "id": "bTtcf0",
        "default_name": "Group A",
        "elements": {
          "bTlih2": {
            "properties": {
              "height": 200,
              "left": 0,
              "top": 0,
              "width": 200,
              "zindex": 1,
              "floating_reference": "top",
              "custom_id": "bTliE2",
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
                        "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
              "is_visible": true,
              "order": 5,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "param_bTYST": false,
              "param_bTYSv": {
                "entries": {
                  "0": {
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
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
                  }
                },
                "type": "TextExpression"
              },
              "single_width": true,
              "min_width_css": "26px",
              "single_height": true,
              "min_height_css": "26px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true,
              "floating_reference_horizontal": "none",
              "floating_reference_horizontal_resp": "left"
            },
            "type": "CustomElement",
            "id": "bTtcg0",
            "default_name": "[Element] Document B",
            "name": "[Element] Save Custom Instruction",
            "custom_definition_name": "[Element] Document"
          }
        },
        "name": "Group Get Messages (Data) - Pagination body data Get Messages",
        "style": "Group_transparent_"
      }
    },
    "name": "Group User Message Actions",
    "style": "Group_transparent_"
  }
};
