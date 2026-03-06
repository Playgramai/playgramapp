export const states = {
  "0": {
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
                    "name": "greater_than",
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
                    "0": "}}}"
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
                  "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIzK"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_team_memory_pagination_number",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": ", where: { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                      "7": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "8": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"team\\\"] } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false }, ",
                      "9": {
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.memory_type__os_",
                                "option_value": "all_types"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
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
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: NotEqual, valueText: \\\"true\\\" }"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: Equal, valueText: \\\"true\\\" }"
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
                                        "name": "get_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTOUC0"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOUC0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "10": " { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "11": {
                        "next": {
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
                      "12": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "13": {
                        "next": {
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
                      "14": "*\\\" } ] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { saved_manually sort saved_by_user_id user_message user_id llm_reply chat_id _additional { id creationTimeUnix} } } }\"}"
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
          "body_params_user_id": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
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
          "body_params_tenant_name": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "headers_string_for_update": {
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
      },
      "is_visible": true
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
                    "name": "greater_than",
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
                    "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIzK"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_team_memory_pagination_number",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": ", where: { operator: And, operands: [ { operator: Or, operands: [ { operator: And, operands: [ { path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                      "7": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "8": "\\\" }, { path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true  } ] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "9": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "10": "\\\", \\\"personal\\\"] } ] }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "11": {
                        "next": {
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
                      "12": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "13": {
                        "next": {
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
                      "14": "*\\\" } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ",
                      "15": {
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.memory_type__os_",
                                "option_value": "all_types"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
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
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: NotEqual, valueText: \\\"true\\\" }"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: Equal, valueText: \\\"true\\\" }"
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
                                        "name": "get_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTOUC0"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOUC0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "16": "] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { saved_manually  sort user_message saved_by_user_id user_id llm_reply chat_id _additional { id creationTimeUnix} } } }\"}"
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
          "body_params_user_id": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
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
          "body_params_tenant_name": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "headers_string_for_update": {
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
      },
      "is_visible": true
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
                    "name": "greater_than",
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
                    "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIzK"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_team_memory_pagination_number",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": ", where: { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                      "7": {
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
                      "8": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"project\\\"] } ] }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "9": {
                        "next": {
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
                      "10": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "11": {
                        "next": {
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
                      "12": "*\\\" } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false }",
                      "13": {
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.memory_type__os_",
                                "option_value": "all_types"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
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
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: NotEqual, valueText: \\\"true\\\" }"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: Equal, valueText: \\\"true\\\" }"
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
                                        "name": "get_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTOUC0"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOUC0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "14": " ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { saved_manually saved_by_user_id sort user_message user_id llm_reply chat_id _additional { id creationTimeUnix} } } }\"}"
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
          "body_params_user_id": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
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
          "body_params_tenant_name": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "headers_string_for_update": {
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
      },
      "is_visible": true
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
                    "name": "greater_than",
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
                    "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTIzK"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "for_team_memory_pagination_number",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": ", where: { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"project_id\\\"], operator: ContainsAny, valueString: [",
                      "7": {
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
                      "8": "] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [",
                      "9": {
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
                      "10": "] } ] }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "11": {
                        "next": {
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
                      "12": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "13": {
                        "next": {
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
                      "14": "*\\\" } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ",
                      "15": {
                        "next": {
                          "next": {
                            "args": {
                              "properties": {
                                "option_set": "option.memory_type__os_",
                                "option_value": "all_types"
                              },
                              "type": "OneOptionValue",
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "",
                                    "1": {
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
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: NotEqual, valueText: \\\"true\\\" }"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": ", { path: [\\\"saved_manually\\\"], operator: Equal, valueText: \\\"true\\\" }"
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
                                        "name": "get_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTOUC0"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOUC0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "16": "] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { saved_manually sort saved_by_user_id user_message user_id llm_reply chat_id _additional { id creationTimeUnix} } } }\"}"
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
          "body_params_user_id": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
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
          "body_params_tenant_name": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_custom_organization",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "headers_string_for_update": {
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
      },
      "is_visible": true
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
              "option_value": "all_types"
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
                    "name": "greater_than",
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
                    "args": {
                      "properties": {
                        "option_set": "option.memory_type__os_",
                        "option_value": "all_types"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "not_equals",
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
                    "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
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
                      "6": ", where: { operator: And, operands: [ ",
                      "7": {
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
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "{ path: [\\\"saved_manually\\\"], operator: NotEqual, valueText: \\\"true\\\" },"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "{ path: [\\\"saved_manually\\\"], operator: Equal, valueText: \\\"true\\\" },"
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
                          "name": "get_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTOUC0"
                        },
                        "type": "GetElement",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "8": "{ path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "9": {
                        "next": {
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
                      "10": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "11": {
                        "next": {
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
                      "12": "*\\\" } ] }, { operator: Or, operands: [ { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"team\\\"] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "13": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "14": "\\\", \\\"personal\\\"] }",
                      "15": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": ", { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"project_id\\\"], operator: ContainsAny, valueString: [",
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
                                      "2": "] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAny, valueString: [",
                                      "3": {
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
                                      "4": "] } ] } ] }"
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
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "16": " ] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ]) { saved_manually sort saved_by_user_id user_message user_id llm_reply chat_id _additional { id creationTimeUnix } } } }\"}"
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
          },
          "headers_string_for_update": {
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
      },
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
              "option_set": "option.memory_management_tabs__os_0",
              "option_value": "all_types"
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
                    "name": "greater_than",
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
                    "args": {
                      "properties": {
                        "option_set": "option.memory_type__os_",
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
                    "0": "{\"data\":{\"Get\":{\"Messages_v3\":"
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
          "provider": "apiconnector2.bTHIF0.bTiZV2",
          "body_params_query": {
            "entries": {
              "0": "",
              "1": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "{\"query\": \"{ Get { ",
                      "2": "Messages_v3(tenant: \\\"",
                      "3": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
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
                      "4": "\\\", limit: 10, offset: ",
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
                      "6": ", where: { operator: And, operands: [ { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false }, { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*",
                      "7": {
                        "next": {
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
                      "8": "*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*",
                      "9": {
                        "next": {
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
                      "10": "*\\\" } ] }, { operator: Or, operands: [ { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"team\\\"] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "11": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "12": "\\\", \\\"personal\\\"] }",
                      "13": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": ", { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"project_id\\\"], operator: ContainsAny, valueString: [",
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
                                      "2": "] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAny, valueString: [",
                                      "3": {
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
                                      "4": "] } ] } ] }"
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
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "14": " ] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ]) { saved_manually sort saved_by_user_id user_message user_id llm_reply chat_id _additional { id creationTimeUnix } } } }\"}"
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
          },
          "headers_string_for_update": {
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
      },
      "is_visible": true
    },
    "type": "State"
  }
};
