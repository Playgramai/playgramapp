export const apiconnector2_btmbs0_btmbt0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTVAf0",
                              "optional": false,
                              "param_id": "bTVBJ0",
                              "param_name": "custom_instructions"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "plus",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "length",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTVAf0",
                        "optional": true,
                        "param_id": "bTVBI0",
                        "param_name": "last_messages"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "next": {
                      "args": 2.7,
                      "type": "Message",
                      "name": "times",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "plus",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "length",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTVAf0",
                  "optional": false,
                  "param_id": "bTVBH0",
                  "param_name": "message"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "context_window__tokens_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "llm_model_option_llm_models__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTVAf0",
                    "optional": false,
                    "param_id": "bTVBD0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_token_count.sum",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.data.Aggregate.Messages_v3",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTVAl0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "params_query": {
      "entries": {
        "0": "\\",
        "1": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<='normalized'\\s*:\\s*')[^']+"
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
                "2": "\\"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "params_target": {
      "entries": {
        "0": {
          "next": {
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<='normalized'\\s*:\\s*')[^']+"
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
        }
      },
      "type": "TextExpression"
    },
    "params_user_id": {
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
    "params_tenant_id": {
      "entries": {
        "0": {
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
        }
      },
      "type": "TextExpression"
    },
    "params_project_id": {
      "entries": {
        "0": {
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
        }
      },
      "type": "TextExpression"
    },
    "url_params_version": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "/version-",
                    "1": {
                      "properties": {
                        "name": "AppVersion"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": ""
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
    "params_memory_level": {
      "entries": {
        "0": {
          "next": {
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
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "params_object_count": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_api_c2_meta.count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.data.Aggregate.Messages_v3",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTVAl0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "url_params_app version": {
      "entries": {
        "0": {
          "properties": {
            "name": "AppVersion"
          },
          "type": "PageData",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "params_for_context_window": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": 2.7,
                      "type": "Message",
                      "name": "divide",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "length",
                    "is_slidable": false
                  },
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTVAf0",
                            "optional": false,
                            "param_id": "bTVBH0",
                            "param_name": "message"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTVAf0",
                            "optional": true,
                            "param_id": "bTVBI0",
                            "param_name": "last_messages"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "4": "",
                        "5": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTVAf0",
                            "optional": false,
                            "param_id": "bTVBJ0",
                            "param_name": "custom_instructions"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "6": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "type": "Message",
                "name": "minus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "context_window__tokens_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "llm_model_option_llm_models__os_",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTVAf0",
            "optional": false,
            "param_id": "bTVBD0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTMBs0.bTMBt0",
  "id": "bTVBB0"
};
