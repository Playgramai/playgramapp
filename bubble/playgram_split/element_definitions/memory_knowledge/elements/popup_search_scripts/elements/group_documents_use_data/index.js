export const group_documents_use_data = {
  "properties": {
    "height": 280,
    "left": -50,
    "top": -50,
    "width": 280,
    "zindex": 16,
    "border_color": "var(--color_alert_default)",
    "border_width": 2,
    "group_type": "text",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_primary_default)",
    "border_style": "solid",
    "order": 15,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 3,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.memory_management_tabs__os_0",
                          "option_value": "all_types"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "length",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNnb"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Documents\":"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "}}}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTiEh1",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\":\"{ Get { ",
                        "2": "Documents(tenant:\\\"",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
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
                        "4": "\\\", limit: 100, offset:",
                        "5": {
                          "next": {
                            "type": "Message",
                            "name": "for_team_memory_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "6": " ,where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                        "7": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
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
                        "8": "\\\" }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                        "9": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "current_workspace_custom_workspace",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "10": "\\\" }",
                        "11": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": " ,{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "properties": {
                                                  "content": {
                                                    "entries": {
                                                      "0": "\\\"",
                                                      "1": {
                                                        "type": "InjectedValue",
                                                        "is_slidable": false
                                                      },
                                                      "2": "\\\""
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "delimiter": {
                                                    "entries": {
                                                      "0": ","
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "format_as_text",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "_id",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "get_list_data",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "element_id": "bTOQj0"
                                          },
                                          "type": "GetElement",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "2": "] }"
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
                            "element_id": "bTOQj0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "12": " ] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ]) { file_url organization_id project_id user_id sort _additional { id creationTimeUnix } } } }\"}\n"
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
            "url_params_endpoint": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
            "headers_String_for_update": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "for_memory_update_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.memory_management_tabs__os_0",
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
                      "args": 3,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNnb"
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
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Documents\":"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "}}}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTiEh1",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\":\"{ Get { ",
                        "2": "Documents(tenant:\\\"",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
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
                        "4": "\\\",limit: 100, offset:",
                        "5": {
                          "next": {
                            "type": "Message",
                            "name": "for_team_memory_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "6": "  ,where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                        "7": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
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
                        "8": "\\\" } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ]) { file_url organization_id project_id user_id sort _additional { id creationTimeUnix } } } }\"}\n"
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
            "url_params_endpoint": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
            "headers_String_for_update": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "for_memory_update_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            "args": {
              "properties": {
                "option_set": "option.memory_management_tabs__os_0",
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
                      "args": 3,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNnb"
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
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Documents\":"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "}}}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTiEh1",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\":\"{ Get { ",
                        "2": "Documents(tenant:\\\"",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "organization_workspace_custom_organization",
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
                        "4": "\\\", limit:100, offset:",
                        "5": {
                          "next": {
                            "type": "Message",
                            "name": "for_team_memory_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "6": ", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                        "7": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
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
                        "8": "\\\" } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ]) { file_url organization_id project_id user_id sort _additional { id creationTimeUnix } } } }\"}\n"
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
            "url_params_endpoint": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
            "headers_String_for_update": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "for_memory_update_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            "args": {
              "properties": {
                "option_set": "option.memory_management_tabs__os_0",
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
                      "args": 3,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
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
                      "element_id": "bTOQj0"
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
              "name": "and_",
              "is_slidable": false
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
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Documents\":"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "}}}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTiEh1",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\":\"{ Get { ",
                        "2": "Documents(tenant:\\\"",
                        "3": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
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
                        "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
                        "5": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "content": {
                                    "entries": {
                                      "0": "\\\"",
                                      "1": {
                                        "type": "InjectedValue",
                                        "is_slidable": false
                                      },
                                      "2": "\\\""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "delimiter": {
                                    "entries": {
                                      "0": ","
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_as_text",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_list_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTOQj0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "6": "] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ], limit:100, offset:",
                        "7": {
                          "next": {
                            "type": "Message",
                            "name": "for_team_memory_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "8": ") { file_url organization_id project_id user_id sort _additional { id creationTimeUnix } } } }\"}\n"
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
            "url_params_endpoint": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
            "headers_String_for_update": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "for_memory_update_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
    "4": {
      "condition": {
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
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": 3,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTNnb"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
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
                    "element_id": "bTOWT0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
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
                      "element_id": "bTOQj0"
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
              "name": "and_",
              "is_slidable": false
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "{\"data\":{\"Get\":{\"Documents\":"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "}}}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body",
            "is_slidable": false
          },
          "properties": {
            "provider": "apiconnector2.bTHIF0.bTiEh1",
            "body_params_query": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{\"query\":\"{ Get { ",
                        "2": "Documents(tenant:\\\"",
                        "3": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
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
                        "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"project_id\\\"], operator:Equal, valueText:\\\"",
                        "5": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
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
                        "6": "\\\" } ] }, limit:100, offset:",
                        "7": {
                          "next": {
                            "type": "Message",
                            "name": "for_team_memory_pagination_number",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "8": ", sort: [ { path: [\\\"sort\\\"], order: desc } ]) { file_url organization_id project_id user_id sort _additional { id creationTimeUnix } } } }\"}\n"
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
            "url_params_endpoint": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
            "headers_String_for_update": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "for_memory_update_number",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
    "5": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.memory_type__os_",
                "option_value": "auto_saved"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.memory_type__os_",
                        "option_value": "manual"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTOUC0"
                },
                "type": "GetElement",
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
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTOUC0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "type": "Empty"
        }
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiIq2",
  "current_parent": "bTNqg",
  "default_name": "Group DZ",
  "name": "Group Documents (use data)",
  "style": "Group_transparent_",
};
