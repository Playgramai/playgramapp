export const formatting_for_false = {
  "entries": {
    "0": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"",
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
    "2": "\\\",hybrid: {query: \\\"",
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
    "4": "\\\",vector: [",
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
    "6": "],alpha: 0.5,properties: [\\\"user_message^3\\\"],fusionType: relativeScoreFusion},autocut: 1,where: ",
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
                      "0": "{operator: And,operands: [{ path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
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
                      "2": "\\\" },{path: [\\\"memory_level_with_id\\\"],operator: ContainsAll,valueString: [\\\"",
                      "3": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "4": "\\\", \\\"team\\\"]}]},"
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
                      "0": "{operator: Or,operands: [{operator: And,operands: [{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "2": "\\\" },{ path: [\\\"workspace_id\\\"], operator: Equal, valueText: \\\"",
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
                      "4": "\\\" },{ path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true },{ path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true }]},{operator: And,operands: [{ path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true },{ path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
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
                      "6": "\\\" }]},{path: [\\\"memory_level_with_id\\\"],operator: ContainsAll,valueString: [\\\"",
                      "7": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "8": "\\\", \\\"personal\\\"]},{path: [\\\"memory_level_with_id\\\"],operator: ContainsAll,valueString: [\\\"",
                      "9": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "10": "\\\", \\\"team\\\"]}]},"
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
                                        "0": "{operator: Or,operands: [{operator: And,operands: [{ path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                                        "1": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "2": "\\\" },{ path: [\\\"workspace_id\\\"], operator: Equal, valueText: \\\"",
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
                                        "4": "\\\" },{ path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true },{ path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true }]},{operator: And,operands: [{ path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true },{ path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
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
                                        "6": "\\\" }]},{path: [\\\"memory_level_with_id\\\"],operator: ContainsAll,valueString: [\\\"",
                                        "7": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "8": "\\\", \\\"personal\\\"]},{path: [\\\"memory_level_with_id\\\"],operator: ContainsAll,valueString: [\\\"",
                                        "9": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "type": "CurrentUser",
                                          "is_slidable": false
                                        },
                                        "10": "\\\", \\\"team\\\"]}]},"
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
                      "0": "{ operator: And, operands: [ { path: [\"project_id\"], operator: Equal, valueText: \\\"",
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
                      "2": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"project\\\", \\\"",
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
                      "4": "\\\"]}]},"
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
    "12": "limit: 10 ) { vectorized_content file_id saved_manually sort _additional { id distance } } } }\"}"
  },
  "type": "TextExpression",
};
