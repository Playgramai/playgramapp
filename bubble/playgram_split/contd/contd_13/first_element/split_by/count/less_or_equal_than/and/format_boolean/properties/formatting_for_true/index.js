// Original path: pages/index/workflows/memory_dump_and_search/actions/weaviate_get_memory_dump_objects_count_tokens/properties/body_params_query/entries/currentworkflowitem/extract_regex/first_element/split_by/count/greater_than/and/format_boolean/properties/formatting_for_false/entries/currentworkflowitem/extract_regex
export const formatting_for_true = {
  "entries": {
    "0": "{\"query\": \"{ Aggregate { Messages_v3(tenant: \\\"",
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
    "2": "\\\", where: ",
    "3": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": "team",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "{ operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
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
                      "2": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "3": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
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
    "4": "",
    "5": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": "personal",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "{operator: Or, operands:[{ operator: Or, operands:[{ operator: And, operands:[{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "2": "\\\"}, {path:[\\\"organization_id\\\"], operator: IsNull, valueBoolean:true},{path:[\\\"workspace_id\\\"], operator: Equal, valueText: \\\"",
                      "3": {
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
                      "4": "\\\"}, {path: [\\\"project_id\\\"], operator: IsNull, valueBoolean:true }]}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "5": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "6": "\\\",\\\"personal\\\"]}]},{operator: Or, operands :[{ path:[\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                      "7": {
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
                      "8": "\\\"}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "9": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "10": "\\\",\\\"team\\\"]}]}]},"
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
                                        "0": "{operator: Or, operands:[{ operator: Or, operands:[{ operator: And, operands:[{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                        "1": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "2": "\\\"}, {path:[\\\"organization_id\\\"], operator: IsNull, valueBoolean:true},{path:[\\\"workspace_id\\\"], operator: Equal, valueText: \\\"",
                                        "3": {
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
                                        "4": "\\\"}, {path: [\\\"project_id\\\"], operator: IsNull, valueBoolean:true }]}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                        "5": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "6": "\\\",\\\"personal\\\"]}]},{operator: Or, operands :[{ path:[\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                                        "7": {
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
                                        "8": "\\\"}, {path:[\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                                        "9": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "10": "\\\",\\\"team\\\"]}]}]},"
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
    "6": "",
    "7": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": "project",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "{operator: Or, operands: [{operator: Or, operands: [{path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
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
                      "2": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "3": {
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
                      "4": "\\\", \\\"project\\\"]}]}, {operator: Or, operands: [{path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                      "5": {
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
                      "6": "\\\"}, {path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                      "7": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "8": "\\\", \\\"team\\\"]}]}]}"
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
    "8": " { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ] }) { token_count { sum } meta { count } } } }\"}"
  },
  "type": "TextExpression",
};
