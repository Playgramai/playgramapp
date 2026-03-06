export const body_params_query = {
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
  "type": "TextExpression",
};
