import { elements } from './elements.js';

export const Library = {
  "elements": elements,
  "workflows": {
    "bTkAf": {
      "properties": {
        "element_id": "bTjpN1",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkAd",
      "actions": {
        "0": {
          "properties": {
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTwQT0"
          },
          "type": "DisplayGroupData",
          "id": "bTwQz0"
        },
        "1": {
          "properties": {
            "element_id": "bTwQT0"
          },
          "type": "ShowElement",
          "id": "bTwRE0"
        }
      }
    },
    "bTjjT1": {
      "properties": {
        "element_id": "bTjGJ1",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTjMu1",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "element_id": "bTjGV1",
            "custom_state": "custom.memory_input_type_"
          },
          "type": "SetCustomState",
          "id": "bTjMv1"
        }
      }
    },
    "bTkHs3": {
      "properties": {
        "element_id": "bTkHI3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkHn3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_images_library_pagination_number",
                "value": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkHy3"
        }
      }
    },
    "bTkIF3": {
      "properties": {
        "element_id": "bTkHD3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkID3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_images_library_pagination_number",
                "value": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkIL3"
        }
      }
    },
    "bTkMH3": {
      "properties": {
        "element_id": "bTkHB3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkMF3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_images_library_pagination_number",
                "value": {
                  "next": {
                    "args": 1,
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "times",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "minus",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkML3"
        }
      }
    },
    "bTkNC3": {
      "properties": {
        "element_id": "bTkMT3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkMw3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_files_library_pagination_number",
                "value": {
                  "next": {
                    "args": 1,
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "times",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "minus",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkNB3"
        }
      }
    },
    "bTkNJ3": {
      "properties": {
        "element_id": "bTkMY3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkND3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_files_library_pagination_number",
                "value": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkNI3"
        }
      }
    },
    "bTkNT3": {
      "properties": {
        "element_id": "bTkMd3",
        "wf_folder": "bTkIQ3"
      },
      "type": "ButtonClicked",
      "id": "bTkNN3",
      "actions": {
        "0": {
          "properties": {
            "changes": {
              "0": {
                "key": "for_files_library_pagination_number",
                "value": {
                  "next": {
                    "next": {
                      "args": 20,
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "for_images_library_pagination_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTkNP3"
        }
      }
    },
    "bTkNZ3": {
      "properties": {
        "element_id": "bTkIX3"
      },
      "type": "ButtonClicked",
      "id": "bTkNU3",
      "actions": {
        "0": {
          "properties": {
            "open_in_new_tab": true,
            "url": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "args": 24,
                      "type": "Message",
                      "name": "truncated",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_file_url",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": "",
                "3": {
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
                                      "next": {
                                        "type": "Message",
                                        "name": "signed_url_token_text",
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
                                              "name": "_api_c2_project_id",
                                              "is_slidable": false
                                            },
                                            "type": "ElementParent",
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
                                  "element_id": "bTjyZ"
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
                                            "2": ""
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
                                  "name": "_api_c2_organization_id",
                                  "is_slidable": false
                                },
                                "type": "ElementParent",
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
                    "name": "_api_c2_project_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "4": "/",
                "5": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": {
                              "next": {
                                "next": {
                                  "args": 24,
                                  "type": "Message",
                                  "name": "truncated",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_file_url",
                                "is_slidable": false
                              },
                              "type": "ElementParent",
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
                    "name": "_api_c2_file_url",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "6": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "OpenURL",
          "id": "bTkNa3"
        }
      }
    },
    "bTpYE3": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "library0"
              },
              "type": "OptionValue"
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_image",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpYn3"
                },
                "type": "GetElement",
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
                              "next": {
                                "args": -1,
                                "next": {
                                  "properties": {
                                    "component_to_extract": "UNIX"
                                  },
                                  "type": "Message",
                                  "name": "extract_from_date",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "plus_hours",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTpYF3"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "less_than",
                          "is_slidable": false
                        },
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
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "run_when": "every_time",
        "breakpoint": false
      },
      "type": "ConditionTrue",
      "id": "bTpXz3",
      "name": "Every time - org sign token",
      "actions": {
        "0": {
          "properties": {
            "params_url": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_api_c2_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTpYn3"
                  },
                  "type": "GetElement",
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
                      "type": "Message",
                      "name": "bunny_folder_text",
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
            }
          },
          "type": "apiconnector2-bTMBs0.bTrIG1",
          "id": "bTrKt1"
        },
        "1": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_response.signed_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTrKt1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "changes": {
              "0": {
                "key": "signed_url_token_text",
                "value": {
                  "entries": {
                    "0": {
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
                        "name": "_api_c2_response.signed_url",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTrKt1"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "action": {
                  "type": "Empty"
                }
              },
              "1": {
                "key": "signed_url_token_date_date",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTpYF3"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            },
            "to_change": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "organization_workspace_custom_organization",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "ChangeThing",
          "id": "bTpZL2"
        }
      }
    },
    "bTpYQ3": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "library0"
              },
              "type": "OptionValue"
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        }
      },
      "type": "PageLoaded",
      "id": "bTpYL3",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "\nbubble_fn_now_library(new Date().toISOString());\n\nsetInterval(() => {\n  bubble_fn_now_library(new Date().toISOString());\n}, 500);"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTpYR3"
        },
        "1": {
          "properties": {
            "changes": {
              "0": {
                "key": "string_for_library_update_number",
                "value": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "convert_to_number",
                          "is_slidable": false
                        },
                        "properties": {
                          "length": 5,
                          "numbers": true,
                          "formula_type": "RandomString"
                        },
                        "type": "Formulas"
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
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
                },
                "action": {
                  "type": "Empty"
                }
              }
            },
            "to_change": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "ChangeThing",
          "id": "bTpbR2"
        }
      }
    },
    "bTpZe2": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "library0"
              },
              "type": "OptionValue"
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_image",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpYt3"
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
                          "next": {
                            "next": {
                              "args": -1,
                              "next": {
                                "properties": {
                                  "component_to_extract": "UNIX"
                                },
                                "type": "Message",
                                "name": "extract_from_date",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "plus_hours",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTpYF3"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "less_than",
                        "is_slidable": false
                      },
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
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "run_when": "every_time",
        "breakpoint": false
      },
      "type": "ConditionTrue",
      "id": "bTpZX2",
      "name": "Every time - user sign token",
      "actions": {
        "0": {
          "properties": {
            "params_url": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_api_c2_image",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTpYt3"
                  },
                  "type": "GetElement",
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
                    "type": "Message",
                    "name": "bunny_folder_text",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            }
          },
          "type": "apiconnector2-bTMBs0.bTrIG1",
          "id": "bTrKv1"
        },
        "1": {
          "properties": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_response.signed_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTrKv1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "changes": {
              "0": {
                "key": "signed_url_token_text",
                "value": {
                  "entries": {
                    "0": {
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
                        "name": "_api_c2_response.signed_url",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTrKv1"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "action": {
                  "type": "Empty"
                }
              },
              "1": {
                "key": "signed_url_token_date_date",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTpYF3"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "action": {
                  "type": "Empty"
                }
              }
            }
          },
          "type": "MakeChangeCurrentUser",
          "id": "bTpZf2"
        }
      }
    },
    "bTpZr2": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "url_formatted",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.sidebar_menu__os_",
                "option_value": "library0"
              },
              "type": "OptionValue"
            },
            "next": {
              "args": {
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
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpah2"
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
          "properties": {
            "value": "text",
            "parameter_name": {
              "entries": {
                "0": "tab"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "run_when": "every_time",
        "wf_folder": "ConditionTrue",
        "breakpoint": false
      },
      "type": "ConditionTrue",
      "id": "bTpZk2",
      "name": "Every time - project sign token",
      "actions": {
        "0": {
          "properties": {
            "data_source": {
              "next": {
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpah2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "date": {
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "api_event": "bTpaD2",
            "breakpoint": false,
            "type_of_list": "custom.project",
            "_wf_param_url": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "bunny_url_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "files_list_custom_file",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "chats_list_custom_chat",
                    "is_slidable": false
                  },
                  "type": "InjectedValue",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "_wf_param_project": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "ScheduleAPIEventOnList",
          "id": "bTpaT2"
        }
      }
    },
    "bTwQr0": {
      "properties": {
        "element_id": "bTwQT0",
        "wf_folder": "bTupd1"
      },
      "type": "PopupClosed",
      "id": "bTwQl0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "window.popupStackClose(\"popup-generated-image-preview\");"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTwQn0"
        }
      }
    },
    "bTwQy0": {
      "properties": {
        "element_id": "bTwQV0"
      },
      "type": "ButtonClicked",
      "id": "bTwQs0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTwQT0"
          },
          "type": "HideElement",
          "id": "bTwQx0"
        }
      }
    },
    "bTwRX0": {
      "properties": {
        "element_id": "bTwRJ0"
      },
      "type": "ButtonClicked",
      "id": "bTwRV0",
      "actions": {
        "0": {
          "properties": {
            "AAh": {
              "entries": {
                "0": "(function () {\n  const url = \"",
                "1": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": {
                          "type": "ElementParent",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "2": "\";\n  const filename = \"image.png\";\n\n  const xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", url, true);\n  xhr.responseType = \"blob\";\n\n  xhr.onload = function () {\n    if (this.status === 200) {\n      const blob = this.response;\n      const link = document.createElement(\"a\");\n      link.href = window.URL.createObjectURL(blob);\n      link.download = filename;\n      document.body.appendChild(link);\n      link.click();\n      link.remove();\n    } else {\n      console.log(\"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u0430\u0447\u0430\u0442\u044c, \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0434\u0430\u0451\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\");\n      window.open(url, \"_blank\"); // fallback\n    }\n  };\n\n  xhr.onerror = function () {\n    console.log(\"CORS \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\");\n    window.open(url, \"_blank\");\n  };\n\n  xhr.send();\n})();\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "1488796042609x768734193128308700-AAg",
          "id": "bTwRb0"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTkRQ4_default)",
    "padding_top": 50,
    "max_width_px": 900,
    "min_width_px": 0,
    "padding_left": 50,
    "default_width": 700,
    "min_height_px": 700,
    "padding_right": 50,
    "padding_bottom": 50,
    "wf_folder_list": {
      "bTkIQ3": "Images"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
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
        "padding_top": 50,
        "padding_left": 8,
        "padding_right": 8,
        "padding_bottom": 8
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTjEp1",
  "name": "Library",
  "custom_states": {
    "tab_": {
      "display": "tab",
      "value": "option.memory_management_tabs__os_0",
      "default_val": "all_types",
      "make_static": true
    },
    "file_": {
      "display": "file",
      "value": "list.file",
      "make_static": true
    },
    "file_is_loading_": {
      "display": "file_is_loading",
      "value": "boolean",
      "make_static": true
    },
    "memory_records_tab_": {
      "display": "memory_records_tab",
      "value": "option.memory_records_tabs__os_",
      "default_val": "messages",
      "make_static": true
    }
  },
};
