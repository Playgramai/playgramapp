export const elements = {
  "bTjyP": {
    "properties": {
      "height": 280,
      "left": -80,
      "top": -80,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "properties": {
          "provider": "apiconnector2.bTHIF0.bTjyT",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\":\"{ Get { ",
                      "2": "Messages_v3(tenant:\\\"",
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
                        "is_slidable": false
                      },
                      "4": "\\\", offset:",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_images_library_pagination_number",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": ", limit:  20, where:{ operator:And, operands:[ { path:[\\\"image\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\" ",
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
                      "8": "\\\" }, ",
                      "9": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
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
                                          "element_id": "bTjyZ"
                                        },
                                        "type": "GetElement",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": "] },"
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
                          "element_id": "bTjyZ"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "10": " { operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                      "11": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "12": "\\\" } ] } ] } ] }, sort:[{ path:[\\\"sort\\\"], order:desc }] ) { image organization_id project_id user_id _additional { id creationTimeUnix } } } }\"}"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "2": ""
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
          "headers_string_for_update": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "string_for_library_update_number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "GetDataFromAPI"
      },
      "group_type": "api.apiconnector2.bTHIF0.bTjyT",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_alert_default)",
      "order": 2,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTjyN",
    "default_name": "Group C",
    "name": "Group Library Search Images (use data)",
    "style": "Group_transparent_"
  },
  "bTjyb": {
    "properties": {
      "height": 350,
      "left": 0,
      "top": 0,
      "width": 280,
      "zindex": 15,
      "data_source": {
        "next": {
          "next": {
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
      "background_style": "bgcolor",
      "bgcolor": "var(--color_alert_default)",
      "order": 1,
      "fit_width": true,
      "fit_height": true,
      "fixed_rows": false,
      "single_width": true,
      "fixed_columns": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "cell_min_height_css": "0px",
      "collapse_when_hidden": true
    },
    "type": "RepeatingGroup",
    "id": "bTjyZ",
    "current_parent": "bTjyH",
    "default_name": "RepeatingGroup B",
    "name": "RG User Projects (use data)",
    "style": "RepeatingGroup_transparent_"
  },
  "bTjyh": {
    "properties": {
      "height": 280,
      "left": -70,
      "top": -70,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "properties": {
          "provider": "apiconnector2.bTHIF0.bTjyl",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\":\"{ Get { ",
                      "1": {
                        "next": {
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "Messages_version_test"
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "Messages_v3"
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
                      },
                      "2": "(tenant:\\\"",
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
                        "is_slidable": false
                      },
                      "4": "\\\", offset:",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_files_library_pagination_number"
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": " , limit:20, where:{ operator:And, operands:[ { path:[\\\"file_url\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
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
                      "8": "\\\" }, ",
                      "9": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
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
                                          "element_id": "bTjyZ"
                                        },
                                        "type": "GetElement",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": "] },"
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
                          "element_id": "bTjyZ"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "10": " { operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                      "11": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "12": "\\\" } ] } ] } ] }, sort:[{ path:[\\\"sort\\\"], order:desc }] ) { file_url organization_id project_id user_id _additional { id creationTimeUnix } } } }\"}"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "2": ""
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
          "headers_string_for_update": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "string_for_library_update_number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "type": "GetDataFromAPI"
      },
      "group_type": "api.apiconnector2.bTHIF0.bTjyl",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_alert_default)",
      "order": 3,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTjyf",
    "current_parent": "bTjyH",
    "default_name": "Group D",
    "name": "Group Library Search Files (use data)",
    "style": "Group_transparent_"
  },
  "bTkLj1": {
    "properties": {
      "height": 280,
      "left": -60,
      "top": -60,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "properties": {
          "provider": "apiconnector2.bTHIF0.bTNvv",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\":\"{ Aggregate { ",
                      "2": "Messages_v3(tenant:\\\"",
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
                        "is_slidable": false
                      },
                      "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"file_url\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                      "5": {
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
                        "is_slidable": false
                      },
                      "6": "\\\" }, ",
                      "7": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
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
                                          "element_id": "bTjyZ"
                                        },
                                        "type": "GetElement",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": "] },"
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
                          "element_id": "bTjyZ"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "8": "{ operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                      "9": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "10": "\\\" } ] } ] } ] }) { meta { count } } } }\"}\n"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "2": ""
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
          }
        },
        "type": "GetDataFromAPI"
      },
      "group_type": "api.apiconnector2.bTHIF0.bTNvv",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTGzw_default)",
      "order": 4,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTkLh1",
    "current_parent": "bTjyH",
    "default_name": "Group J",
    "name": "Group Count Library Search Files (use data) ",
    "style": "Group_transparent_"
  },
  "bTkLp1": {
    "properties": {
      "height": 280,
      "left": -50,
      "top": -50,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "properties": {
          "provider": "apiconnector2.bTHIF0.bTNvv",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\":\"{ Aggregate { ",
                      "1": {
                        "next": {
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "Messages_version_test"
                                },
                                "type": "TextExpression"
                              },
                              "formatting_for_false": {
                                "entries": {
                                  "0": "Messages_v3"
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
                      },
                      "2": "(tenant:\\\"",
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
                        "is_slidable": false
                      },
                      "4": "\\\", where:{ operator:And, operands:[ { path:[\\\"image\\\"], operator:IsNull, valueBoolean:false }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"",
                      "5": {
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
                        "is_slidable": false
                      },
                      "6": "\\\" }, ",
                      "7": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "{ path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[",
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
                                          "element_id": "bTjyZ"
                                        },
                                        "type": "GetElement",
                                        "said": "a2Vsdm8tMzE4ODQ=",
                                        "is_slidable": false
                                      },
                                      "2": "] },"
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
                          "element_id": "bTjyZ"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "8": "{ operator:And, operands:[ { path:[\\\"project_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"organization_id\\\"], operator:IsNull, valueBoolean:true }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"",
                      "9": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "10": "\\\" } ] } ] } ] }) { meta { count } } } }\"}\n"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "2": ""
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
          }
        },
        "type": "GetDataFromAPI"
      },
      "group_type": "api.apiconnector2.bTHIF0.bTNvv",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTGzw_default)",
      "order": 5,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTkLn1",
    "current_parent": "bTjyH",
    "default_name": "Group K",
    "name": "Group Count Library Search Images (use data)",
    "style": "Group_transparent_"
  },
  "bTpYp3": {
    "properties": {
      "height": 280,
      "left": -40,
      "top": -40,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2_organization_id",
                    "constraint_type": "is_not_empty"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body.data.Get.Messages_v3",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjyN"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "api.apiconnector2.bTHIF0.bTjyT.body.data.Get.Messages_v3",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTGzw_default)",
      "order": 6,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTpYn3",
    "current_parent": "bTjyH",
    "default_name": "Group M",
    "name": "Group Organization Image (use data)",
    "style": "Group_transparent_"
  },
  "bTpYv3": {
    "properties": {
      "height": 280,
      "left": -30,
      "top": -30,
      "width": 280,
      "zindex": 2,
      "data_source": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2_organization_id",
                    "constraint_type": "is_empty"
                  },
                  "1": {
                    "key": "_api_c2_project_id",
                    "constraint_type": "is_empty"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_body.data.Get.Messages_v3",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjyN"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "group_type": "api.apiconnector2.bTHIF0.bTjyT.body.data.Get.Messages_v3",
      "vertical_centering": true,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTGzw_default)",
      "order": 7,
      "fit_width": false,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTpYt3",
    "current_parent": "bTjyH",
    "default_name": "Group N",
    "name": "Group Personal Image (use data) ",
    "style": "Group_transparent_"
  },
  "bTpam2": {
    "properties": {
      "height": 350,
      "left": 10,
      "top": 10,
      "width": 280,
      "zindex": 15,
      "data_source": {
        "next": {
          "next": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "_id",
                  "value": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_project_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data.Get.Messages_v3",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTjyN"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "constraint_type": "in"
                },
                "1": {
                  "key": "_advanced_search_constraint",
                  "value": {
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
      "group_type": "custom.project",
      "background_style": "bgcolor",
      "bgcolor": "var(--color_alert_default)",
      "order": 8,
      "fit_width": true,
      "fit_height": true,
      "fixed_rows": false,
      "single_width": true,
      "fixed_columns": true,
      "min_width_css": "40px",
      "single_height": true,
      "min_height_css": "40px",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "cell_min_height_css": "0px",
      "collapse_when_hidden": true
    },
    "type": "RepeatingGroup",
    "id": "bTpah2",
    "current_parent": "bTjyH",
    "default_name": "RepeatingGroup F",
    "name": "RG Projects Expired Token  (use data)",
    "style": "RepeatingGroup_transparent_"
  }
};
