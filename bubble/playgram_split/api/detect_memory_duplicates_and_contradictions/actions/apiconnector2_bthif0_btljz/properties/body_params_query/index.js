export const body_params_query = {
  "entries": {
    "0": "",
    "1": {
      "next": {
        "args": "personal",
        "next": {
          "properties": {
            "formatting_for_true": {
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
                    "name": "organization_workspace_custom_organization",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.workspace",
                    "event_id": "bTNaj0",
                    "param_id": "workspace_user",
                    "param_name": "workspace_user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "4": "\\\", hybrid: { query: \\\"",
                "5": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTNaj0",
                            "param_id": "normalized_content",
                            "param_name": "normalized_content"
                          },
                          "type": "APIEventParameter",
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
                "6": "\\\", vector: ",
                "7": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTNaj0",
                    "param_id": "vector",
                    "param_name": "vector"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "8": ", alpha: 0.5, properties: [\\\"user_message^3\\\"], fusionType: relativeScoreFusion }, autocut: 1, where: { operator: Or, operands: [ { operator: And, operands: [ { path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"",
                "9": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "user",
                    "event_id": "bTNaj0",
                    "param_id": "user",
                    "param_name": "user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "10": "\\\" }, { path: [\\\"workspace_id\\\"], operator: Equal, valueText: \\\"",
                "11": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.workspace",
                    "event_id": "bTNaj0",
                    "param_id": "workspace_user",
                    "param_name": "workspace_user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "12": "\\\" }, { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true } ] }, { operator: And, operands: [ { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                "13": {
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
                    "event_id": "bTNaj0",
                    "param_id": "workspace_user",
                    "param_name": "workspace_user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "14": "\\\" } ] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                "15": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "user",
                    "event_id": "bTNaj0",
                    "param_id": "user",
                    "param_name": "user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "16": "\\\", \\\"personal\\\"] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                "17": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "user",
                    "event_id": "bTNaj0",
                    "param_id": "user",
                    "param_name": "user"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "18": "\\\", \\\"team\\\"] } ] }, limit: 10) { vectorized_content saved_manually sort _additional { id distance} } } }\"}\n"
              },
              "type": "TextExpression"
            },
            "formatting_for_false": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "args": "team",
                    "next": {
                      "properties": {
                        "formatting_for_true": {
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
                                "name": "organization_workspace_custom_organization",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.workspace",
                                "event_id": "bTNaj0",
                                "param_id": "workspace_user",
                                "param_name": "workspace_user"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "4": "\\\", hybrid: { query: \\\"",
                            "5": {
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTNaj0",
                                        "param_id": "normalized_content",
                                        "param_name": "normalized_content"
                                      },
                                      "type": "APIEventParameter",
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
                            "6": "\\\", vector: ",
                            "7": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTNaj0",
                                "param_id": "vector",
                                "param_name": "vector"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "8": ", alpha: 0.5, properties: [\\\"user_message^3\\\"], fusionType: relativeScoreFusion }, autocut: 1, where: { operator: And, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"",
                            "9": {
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
                                "event_id": "bTNaj0",
                                "param_id": "workspace_user",
                                "param_name": "workspace_user"
                              },
                              "type": "APIEventParameter",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"",
                            "11": {
                              "next": {
                                "type": "Message",
                                "name": "_id",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "user",
                                "event_id": "bTNaj0",
                                "param_id": "user",
                                "param_name": "user"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "12": "\\\", \\\"team\\\"] } ] }, limit: 10 ) { vectorized_content saved_manually sort _additional { id distance } } } }\"}\n"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "args": "project",
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
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
                                            "name": "organization_workspace_custom_organization",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.workspace",
                                            "event_id": "bTNaj0",
                                            "param_id": "workspace_user",
                                            "param_name": "workspace_user"
                                          },
                                          "type": "APIEventParameter",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "4": "\\\", hybrid: { query: \\\"",
                                        "5": {
                                          "properties": {
                                            "arbitrary_text": {
                                              "entries": {
                                                "0": "",
                                                "1": {
                                                  "properties": {
                                                    "btype_id": "text",
                                                    "event_id": "bTNaj0",
                                                    "param_id": "normalized_content",
                                                    "param_name": "normalized_content"
                                                  },
                                                  "type": "APIEventParameter",
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
                                        "6": "\\\", vector: ",
                                        "7": {
                                          "properties": {
                                            "btype_id": "text",
                                            "event_id": "bTNaj0",
                                            "param_id": "vector",
                                            "param_name": "vector"
                                          },
                                          "type": "APIEventParameter",
                                          "is_slidable": false
                                        },
                                        "8": ", alpha: 0.5, properties: [\\\"user_message^3\\\"], fusionType: relativeScoreFusion }, autocut: 1, where: { operator: And, operands: [ { path: [\\\"project_id\\\"], operator: Equal, valueText: \\\"",
                                        "9": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.project",
                                            "event_id": "bTNaj0",
                                            "optional": true,
                                            "param_id": "project",
                                            "param_name": "project"
                                          },
                                          "type": "APIEventParameter",
                                          "is_slidable": false
                                        },
                                        "10": "\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"project\\\", \\\"",
                                        "11": {
                                          "next": {
                                            "type": "Message",
                                            "name": "_id",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.project",
                                            "event_id": "bTNaj0",
                                            "optional": true,
                                            "param_id": "project",
                                            "param_name": "project"
                                          },
                                          "type": "APIEventParameter",
                                          "said": "a2Vsdm8tMzE4ODQ=",
                                          "is_slidable": false
                                        },
                                        "12": "\\\"] } ] }, limit: 10 ) { vectorized_content saved_manually sort _additional { id distance } } } }\"}\n"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "",
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
                                "btype_id": "text",
                                "event_id": "bTNaj0",
                                "param_id": "memory_level",
                                "param_name": "memory_level"
                              },
                              "type": "APIEventParameter",
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTNaj0",
                    "param_id": "memory_level",
                    "param_name": "memory_level"
                  },
                  "type": "APIEventParameter",
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
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTNaj0",
        "param_id": "memory_level",
        "param_name": "memory_level"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "2": ""
  },
  "type": "TextExpression",
};
