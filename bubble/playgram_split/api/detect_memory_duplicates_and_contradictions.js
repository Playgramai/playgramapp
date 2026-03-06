export const detect_memory_duplicates_and_contradictions = {
  "properties": {
    "expose": false,
    "wf_name": "detect_memory_duplicates_and_contradictions",
    "parameters": {
      "0": {
        "key": "vector",
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
        "key": "normalized_content",
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
      "2": {
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
      "3": {
        "key": "user",
        "value": "user",
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
        "key": "project",
        "value": "custom.project",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "5": {
        "key": "workspace_user",
        "value": "custom.workspace",
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
        "key": "normalization_input_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "7": {
        "key": "normalization_output_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "8": {
        "key": "embedding_tokens",
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
      }
    }
  },
  "type": "APIEvent",
  "id": "bTNaj0",
  "actions": {
    "0": {
      "properties": {
        "body_params_query": {
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
      "id": "bTNgl0"
    },
    "1": {
      "properties": {
        "body_params_memories": {
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
                    "0": "[",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": "{\nid: ",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2__additional.id",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "2": ",\ncontent: ",
                                "3": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_vectorized_content",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "4": ",\ncreated_at: ",
                                "5": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_sort",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "6": ",\nalways_keep: ",
                                "7": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_api_c2_saved_manually",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "8": "\n}"
                              },
                              "type": "TextExpression"
                            },
                            "delimiter": {
                              "entries": {
                                "0": ",\n"
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
                        "action_id": "bTNgl0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "2": "]"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTPLJ.bTSyi",
      "id": "bTSzL"
    },
    "2": {
      "properties": {
        "data_source": {
          "next": {
            "properties": {
              "separator": {
                "entries": {
                  "0": ","
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "split_by",
            "is_slidable": true
          },
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
                            "properties": {
                              "content": {
                                "entries": {
                                  "0": {
                                    "type": "InjectedValue",
                                    "is_slidable": false
                                  }
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
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<='id'\\s*:\\s*')[^']+"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "extract_regex",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "_api_c2_message.content",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.choices",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTSzL"
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
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTLzi",
        "type_of_list": "text",
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_organization": {
          "next": {
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
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTNgj0"
    },
    "3": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTPLV0",
        "ignore_privacy_rules": true,
        "_wf_param_embedding_for_pair_tokens": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTNaj0",
            "param_id": "embedding_tokens",
            "param_name": "embedding_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_remove_duplicates_input_tokens": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.prompt_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTSzL"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_pair_normalization_input_tokens": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTNaj0",
            "optional": true,
            "param_id": "normalization_input_tokens",
            "param_name": "normalization_input_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_remove_duplicates_output_tokens": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.completion_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTSzL"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_pair_normalization_output_tokens": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTNaj0",
            "optional": true,
            "param_id": "normalization_output_tokens",
            "param_name": "normalization_output_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTQOl"
    }
  }
};
