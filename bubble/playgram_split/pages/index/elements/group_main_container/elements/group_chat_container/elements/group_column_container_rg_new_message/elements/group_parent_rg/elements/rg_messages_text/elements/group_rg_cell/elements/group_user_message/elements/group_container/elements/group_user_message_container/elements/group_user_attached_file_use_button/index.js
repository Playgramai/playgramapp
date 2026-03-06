export const group_user_attached_file_use_button = {
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
  "style": "Group_transparent_",
};
