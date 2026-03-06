export const weaviate_search_documents_chunks = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": "true",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_error.status_code",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTVBB0"
                },
                "type": "PreviousStep",
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
              "0": "(?<='need_memory'\\s*:\\s*')[^']+"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTVAf0",
        "optional": false,
        "param_id": "bTVAq0",
        "param_name": "normalization"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "body_params_query": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": 1,
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "{\"query\": \"{ Get { Chunks (tenant:\\\"",
                            "1": {
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
                              "properties": {
                                "btype_id": "custom.workspace",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAr0",
                                "param_name": "workspace_user"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "2": "\\\",hybrid:{query:\\\"",
                            "3": {
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTVAf0",
                                        "optional": false,
                                        "param_id": "bTVAx0",
                                        "param_name": "query"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "ArbitraryText",
                              "said": "a2Vsdm8tMzE4ODQ="
                            },
                            "4": "\\\",vector:[",
                            "5": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_embedding",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_body.data",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTVBU0"
                              },
                              "type": "PreviousStep",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "6": "],alpha:0.5,properties:[\\\"vectorized_content\\\"],fusionType:relativeScoreFusion},autocut:1,where:{operator: Or, operands: [",
                            "7": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "team",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
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
                                                "properties": {
                                                  "btype_id": "custom.workspace",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAr0",
                                                  "param_name": "workspace_user"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" },"
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "8": "",
                            "9": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "personal",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "_id",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.workspace",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAr0",
                                                  "param_name": "workspace_user"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" },"
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
                                                        "args": "temporary",
                                                        "next": {
                                                          "properties": {
                                                            "formatting_for_true": {
                                                              "entries": {
                                                                "0": "{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                                                "1": {
                                                                  "next": {
                                                                    "type": "Message",
                                                                    "name": "_id",
                                                                    "is_slidable": false
                                                                  },
                                                                  "properties": {
                                                                    "btype_id": "custom.workspace",
                                                                    "event_id": "bTVAf0",
                                                                    "optional": false,
                                                                    "param_id": "bTVAr0",
                                                                    "param_name": "workspace_user"
                                                                  },
                                                                  "type": "CurrentWorkflowItem",
                                                                  "is_slidable": false
                                                                },
                                                                "2": "\\\" },"
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
                                                        "name": "contains",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "separator": {
                                                          "entries": {
                                                            "0": ", "
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
                                                        "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "btype_id": "text",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAq0",
                                                  "param_name": "normalization"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "said": "a2Vsdm8tMzE4ODQ=",
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": "",
                            "11": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "project",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "_id",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.project",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAv0",
                                                  "param_name": "project"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" }"
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "12": "]}, limit: 5  ) {  vectorized_content  content        _additional { id   distance  }}}}\"}"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "{\"query\": \"{ Get { Chunks (tenant:\\\"",
                            "1": {
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
                              "properties": {
                                "btype_id": "custom.workspace",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAr0",
                                "param_name": "workspace_user"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "2": "\\\",hybrid:{query:\\\"",
                            "3": {
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTVAf0",
                                        "optional": false,
                                        "param_id": "bTVAx0",
                                        "param_name": "query"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "ArbitraryText",
                              "said": "a2Vsdm8tMzE4ODQ="
                            },
                            "4": "\\\",vector:[",
                            "5": {
                              "next": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_embedding",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_body.data",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTVBU0"
                              },
                              "type": "PreviousStep",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "6": "],alpha:0.5,properties:[\\\"vectorized_content\\\"],fusionType:relativeScoreFusion},autocut:1,where:",
                            "7": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "team",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
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
                                                "properties": {
                                                  "btype_id": "custom.workspace",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAr0",
                                                  "param_name": "workspace_user"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" }"
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "8": "",
                            "9": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "personal",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "_id",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.workspace",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAr0",
                                                  "param_name": "workspace_user"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" }"
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
                                                        "args": "temporary",
                                                        "next": {
                                                          "properties": {
                                                            "formatting_for_true": {
                                                              "entries": {
                                                                "0": "{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                                                "1": {
                                                                  "next": {
                                                                    "type": "Message",
                                                                    "name": "_id",
                                                                    "is_slidable": false
                                                                  },
                                                                  "properties": {
                                                                    "btype_id": "custom.workspace",
                                                                    "event_id": "bTVAf0",
                                                                    "optional": false,
                                                                    "param_id": "bTVAr0",
                                                                    "param_name": "workspace_user"
                                                                  },
                                                                  "type": "CurrentWorkflowItem",
                                                                  "is_slidable": false
                                                                },
                                                                "2": "\\\" }"
                                                              },
                                                              "type": "TextExpression",
                                                              "said": "a2Vsdm8tMzE4ODQ="
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
                                                        "name": "contains",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "separator": {
                                                          "entries": {
                                                            "0": ", "
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
                                                        "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "btype_id": "text",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAq0",
                                                  "param_name": "normalization"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "said": "a2Vsdm8tMzE4ODQ=",
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": "",
                            "11": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "project",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "{ path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                                              "1": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "_id",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.project",
                                                  "event_id": "bTVAf0",
                                                  "optional": false,
                                                  "param_id": "bTVAv0",
                                                  "param_name": "project"
                                                },
                                                "type": "CurrentWorkflowItem",
                                                "is_slidable": false
                                              },
                                              "2": "\\\" }"
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
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ", "
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
                                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTVAf0",
                                "optional": false,
                                "param_id": "bTVAq0",
                                "param_name": "normalization"
                              },
                              "type": "CurrentWorkflowItem",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "12": ",limit:5){vectorized_content content _additional{id distance}} }}\"}"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_boolean",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "greater_than",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "count",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": ", "
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
                  "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTVAf0",
            "optional": false,
            "param_id": "bTVAq0",
            "param_name": "normalization"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
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
  "type": "apiconnector2-bTHIF0.bTUbR0",
  "id": "bTjxB",
  "name": "Weaviate - Search Documents (Chunks)"
};
