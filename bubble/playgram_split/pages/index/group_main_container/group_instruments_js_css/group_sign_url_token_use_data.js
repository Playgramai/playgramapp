export const Group_sign_url_token_use_data = {
  "properties": {
    "height": 20,
    "left": 44.5,
    "top": 383,
    "width": 31,
    "zindex": 9,
    "data_source": {
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
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "signed_url_token_text",
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
                    "2": ";",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "component_to_extract": "UNIX"
                              },
                              "type": "Message",
                              "name": "extract_from_date",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "signed_url_token_date_date",
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
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "4": ""
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
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "signed_url_token_text",
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
                                      "2": ";",
                                      "3": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "properties": {
                                                  "component_to_extract": "UNIX"
                                                },
                                                "type": "Message",
                                                "name": "extract_from_date",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "signed_url_token_date_date",
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
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "4": ""
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
                                              "type": "Message",
                                              "name": "signed_url_token_text",
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
                                      "2": ";",
                                      "3": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "properties": {
                                                  "component_to_extract": "UNIX"
                                                },
                                                "type": "Message",
                                                "name": "extract_from_date",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "signed_url_token_date_date",
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
                                      "4": ""
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_boolean",
                                "is_slidable": true
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
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHAa_default)",
    "order": 21,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": false,
    "min_height_css": "30px",
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
            "name": "is_empty",
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
            "args": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "team"
              },
              "type": "OptionValue"
            },
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "signed_url_token_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "2": ";",
                    "3": {
                      "next": {
                        "next": {
                          "next": {
                            "properties": {
                              "component_to_extract": "UNIX"
                            },
                            "type": "Message",
                            "name": "extract_from_date",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "signed_url_token_date_date",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_organization_custom_organization",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "4": ""
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
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "signed_url_token_text",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTUif0"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "2": ";",
                                  "3": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "properties": {
                                            "component_to_extract": "UNIX"
                                          },
                                          "type": "Message",
                                          "name": "extract_from_date",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "signed_url_token_date_date",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTUif0"
                                    },
                                    "type": "GetElement",
                                    "said": "a2Vsdm8tMzE4ODQ=",
                                    "is_slidable": false
                                  },
                                  "4": ""
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "type": "Message",
                                      "name": "signed_url_token_text",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
                                    "is_slidable": false
                                  },
                                  "2": ";",
                                  "3": {
                                    "next": {
                                      "next": {
                                        "properties": {
                                          "component_to_extract": "UNIX"
                                        },
                                        "type": "Message",
                                        "name": "extract_from_date",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "signed_url_token_date_date",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
                                    "is_slidable": false
                                  },
                                  "4": ""
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
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUif0"
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "parameter_name": {
              "entries": {
                "0": "type"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUiv0",
  "current_parent": "bTMYF0",
  "default_name": "Group PZZ",
  "name": "Group sign_url_token (use data)",
  "style": "Group_transparent_"
};
