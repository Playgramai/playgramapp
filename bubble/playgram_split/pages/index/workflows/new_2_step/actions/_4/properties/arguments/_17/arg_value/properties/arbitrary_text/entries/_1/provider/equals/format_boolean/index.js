import { properties } from './properties.js';

export const format_boolean = {
  "properties": properties,
  "next": {
    "next": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "<model_name>"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "option.llm_models__os_",
                              "event_id": "bTnYl0",
                              "optional": false,
                              "param_id": "bTQFB0",
                              "param_name": "streaming_model"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          }
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
                        "0": "<memories>"
                      },
                      "type": "TextExpression"
                    },
                    "replace": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "find": {
                                        "entries": {
                                          "0": "\"$"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "use_regex": true
                                    },
                                    "type": "Message",
                                    "name": "find_replace",
                                    "is_slidable": true
                                  },
                                  "properties": {
                                    "find": {
                                      "entries": {
                                        "0": "^\""
                                      },
                                      "type": "TextExpression"
                                    },
                                    "use_regex": true
                                  },
                                  "type": "Message",
                                  "name": "find_replace",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
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
                                                  "type": "Message",
                                                  "name": "bTVBa0",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "action_id": "bTnYq0"
                                                },
                                                "type": "PreviousStep",
                                                "is_slidable": false
                                              },
                                              "2": ";",
                                              "3": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "bTVBb0",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "action_id": "bTnYq0"
                                                },
                                                "type": "PreviousStep",
                                                "is_slidable": false
                                              },
                                              "4": ""
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
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "format_json_encode",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "bTVBZ0",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "action_id": "bTnYq0"
                                        },
                                        "type": "PreviousStep",
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
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "bTVBZ0",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTnYq0"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        }
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
                      "0": "<user_instructions>"
                    },
                    "type": "TextExpression"
                  },
                  "replace": {
                    "entries": {
                      "0": {
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTnYl0",
                          "optional": true,
                          "param_id": "bTMET0",
                          "param_name": "user_instructions"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      }
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
                    "0": "<project_instructions>"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTnYl0",
                        "optional": true,
                        "param_id": "bTeBI",
                        "param_name": "project_instructions"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    }
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
                  "0": "<team_instructions>"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYl0",
                      "optional": true,
                      "param_id": "bTeBJ",
                      "param_name": "team_instructions"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  }
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
                "0": "<long_term_context>"
              },
              "type": "TextExpression"
            },
            "replace": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTnYl0",
                    "optional": true,
                    "param_id": "bTeBN",
                    "param_name": "long_term_context"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                }
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
              "0": "<project_context>"
            },
            "type": "TextExpression"
          },
          "replace": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTnYl0",
                  "optional": true,
                  "param_id": "bTfHc0",
                  "param_name": "project_context"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              }
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
            "0": "<project_name>"
          },
          "type": "TextExpression"
        },
        "replace": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "name_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "project_custom_project",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTnYl0",
                "optional": false,
                "param_id": "bTPGG",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
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
          "0": "<chat_type>"
        },
        "type": "TextExpression"
      },
      "replace": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "Message",
              "name": "type_option_chat_type__os_",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPGG",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "Message",
    "name": "find_replace",
    "is_slidable": true
  },
  "type": "Message",
  "name": "format_boolean",
  "is_slidable": true,
};
