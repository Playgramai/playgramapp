export const sumarize_search = {
  "properties": {
    "condition": {
      "next": {
        "args": "m2IxP1v9ErXRVfyvwmuKMa9b83X50Dta",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTMDX0",
        "param_id": "Authorization",
        "param_name": "Authorization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "sumarize_search",
    "parameters": {
      "0": {
        "key": "tenant_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "user_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "2": {
        "key": "project_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "3": {
        "key": "query",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "for_context_window",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "object_count",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "6": {
        "key": "memory_level",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "7": {
        "key": "target",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "8": {
        "key": "Authorization",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "parameter_def": "manual",
    "trigger_option": "post",
    "auth_unecessary": true,
    "waiting_for_data": false
  },
  "type": "APIEvent",
  "id": "bTMDX0",
  "actions": {
    "0": {
      "properties": {
        "body_params_query": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "args": 1,
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "{ \"query\": \"{ Get { ",
                            "2": "Messages_v3(tenant: \\\"",
                            "3": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "tenant_id",
                                "param_name": "tenant_id"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "4": "\\\", limit: ",
                            "5": {
                              "properties": {
                                "btype_id": "number",
                                "event_id": "bTMDX0",
                                "param_id": "object_count",
                                "param_name": "object_count"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "6": ", offset: 0, where: { operator: And, operands: [ { operator: Or, operands: [ ",
                            "7": {
                              "next": {
                                "next": {
                                  "args": "team",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{ operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\", \\\"team\\\"] } ] },"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "8": "",
                            "9": {
                              "next": {
                                "next": {
                                  "args": "personal",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{operator: Or, operands:[{ operator: Or, operands:[{ operator: And, operands:[{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\"}, {path:[\\\"organization_id\\\"], operator: IsNull, valueBoolean:true}, {path: [\\\"project_id\\\"], operator: IsNull, valueBoolean:true }]}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\",\\\"personal\\\"]}]},{operator: Or, operands :[{ path:[\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "5": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "6": "\\\"}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "7": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "8": "\\\",\\\"team\\\"]}]}]},"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": " ",
                            "11": {
                              "next": {
                                "next": {
                                  "args": "project",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{operator: Or, operands: [{operator: Or, operands: [{path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "project_id",
                                              "param_name": "project_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "project_id",
                                              "param_name": "project_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\", \\\"project\\\"]}]}, {operator: Or, operands: [{path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "5": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "6": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "7": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "8": "\\\", \\\"team\\\"]}]}]}\n"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "12": " ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { vectorized_content _additional { id } } } }\" }"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "{\"query\": \"{ Get { ",
                            "2": "Messages_v3(tenant: \\\"",
                            "3": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "tenant_id",
                                "param_name": "tenant_id"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "4": "\\\", limit: ",
                            "5": {
                              "properties": {
                                "btype_id": "number",
                                "event_id": "bTMDX0",
                                "param_id": "object_count",
                                "param_name": "object_count"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "6": ", offset: 0, where: { operator: And, operands: [",
                            "7": {
                              "next": {
                                "next": {
                                  "args": "team",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{ operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\", \\\"team\\\"] } ] },"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "8": " ",
                            "9": {
                              "next": {
                                "next": {
                                  "args": "personal",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{operator: Or, operands:[{ operator: Or, operands:[{ operator: And, operands:[{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\"}, {path:[\\\"organization_id\\\"], operator: IsNull, valueBoolean:true}, {path: [\\\"project_id\\\"], operator: IsNull, valueBoolean:true }]}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\",\\\"personal\\\"]}]},{operator: Or, operands :[{ path:[\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "5": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "6": "\\\"}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "7": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "8": "\\\",\\\"team\\\"]}]}]},\n"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": "",
                            "11": {
                              "next": {
                                "next": {
                                  "args": "project",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "{operator: Or, operands: [{operator: Or, operands: [{path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "project_id",
                                              "param_name": "project_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "project_id",
                                              "param_name": "project_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": "\\\", \\\"project\\\"]}]}, {operator: Or, operands: [{path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                          "5": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "param_id": "tenant_id",
                                              "param_name": "tenant_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "6": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                          "7": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTMDX0",
                                              "optional": true,
                                              "param_id": "user_id",
                                              "param_name": "user_id"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "8": "\\\", \\\"team\\\"]}]}]},"
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTMDX0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "12": "{ path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ] }, sort: [{ path: [\\\"sort\\\"], order: desc }] ) { vectorized_content _additional { id } } } }\"}"
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
              "properties": {
                "btype_id": "text",
                "event_id": "bTMDX0",
                "param_id": "memory_level",
                "param_name": "memory_level"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
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
      "type": "apiconnector2-bTHIF0.bTLJz",
      "id": "bTNxz0"
    },
    "1": {
      "properties": {
        "body_params_input": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "query: '",
                    "1": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTMDX0",
                        "param_id": "query",
                        "param_name": "query"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": "', limit_chars: '",
                    "3": {
                      "next": {
                        "args": 2.7,
                        "next": {
                          "type": "Message",
                          "name": "floor",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "times",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "number",
                        "event_id": "bTMDX0",
                        "param_id": "for_context_window",
                        "param_name": "for_context_window"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "4": "', memories: [",
                    "5": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": "{'",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_vectorized_content",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "2": "'}"
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": ", "
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_as_text",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data.Get.Messages_v3",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTNxz0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "6": "]"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTNxD0",
      "id": "bTNxp0"
    },
    "2": {
      "properties": {
        "parameters_actions": {
          "0": {
            "key": "sumarized_memories",
            "value": "text",
            "content": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
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
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "_api_c2_text",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "_api_c2_content.parts",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "first_element",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "_api_c2_body.candidates",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "action_id": "bTNxp0"
                                            },
                                            "type": "PreviousStep",
                                            "said": "a2Vsdm8tMzE4ODQ=",
                                            "is_slidable": false
                                          },
                                          "2": ""
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "placeholder_text"
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
                                "name": "_api_c2_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_api_c2_content.parts",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.candidates",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTNxp0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "list": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "usage_prompt_tokens",
            "value": "number",
            "content": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.usageMetadata.promptTokenCount",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTNxp0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "usage_output_tokens",
            "value": "number",
            "content": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.usageMetadata.thoughtsTokenCount",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTNxp0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "list": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "APIReturnData",
      "id": "bTMEB0"
    }
  }
};
