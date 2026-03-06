export const upload_file_to_another_llm = {
  "properties": {
    "event_name": "upload_file_to_another_llm",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTtBP",
        "param_name": "streaming_model"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": false,
        "param_id": "bTtBT",
        "param_name": "file"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtBU",
        "param_name": "signed_url"
      },
      "3": {
        "is_list": false,
        "btype_id": "custom.upload_job",
        "optional": false,
        "param_id": "bTtFc",
        "param_name": "upload_job"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTtMv0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_providers__os_",
                  "option_value": "claude"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTtMv0",
                        "optional": false,
                        "param_id": "bTtBU",
                        "param_name": "signed_url"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTPLQ",
      "id": "bTtMx0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_providers__os_",
                  "option_value": "open_ai"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
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
                                "0": "csv,xls,xlsx"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "type": "Message",
                        "name": "is_contained_by_list",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "last_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "separator": {
                        "entries": {
                          "0": "."
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
                    "event_id": "bTtMv0",
                    "optional": false,
                    "param_id": "bTtBU",
                    "param_name": "signed_url"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTtKV",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTtMv0",
                "optional": false,
                "param_id": "bTtBU",
                "param_name": "signed_url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTtKZ",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTtMv0",
                "optional": false,
                "param_id": "bTtBU",
                "param_name": "signed_url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTtKP"
      },
      "type": "TriggerCustomEvent",
      "id": "bTtPX0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_providers__os_",
                  "option_value": "open_ai"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "bTtLu",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTtPX0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTtMv0",
                              "optional": false,
                              "param_id": "bTtBU",
                              "param_name": "signed_url"
                            },
                            "type": "CurrentWorkflowItem",
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "bTtLu",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtPX0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPPL",
      "id": "bTtNB0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_providers__os_",
                  "option_value": "open_ai"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "body_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtNB0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPQr",
      "id": "bTtNC0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_providers__os_",
                  "option_value": "gemini"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTjCP",
            "arg_value": {
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTtMv0",
                "optional": false,
                "param_id": "bTtBT",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTjCg",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTtMv0",
                "optional": false,
                "param_id": "bTtBU",
                "param_name": "signed_url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTtNN0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTtND0"
    },
    "5": {
      "properties": {
        "changes": {
          "0": {
            "key": "claude_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTtMx0"
                                },
                                "type": "PreviousStep",
                                "is_slidable": false
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
                                  "type": "Message",
                                  "name": "claude_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTtMv0",
                                  "optional": false,
                                  "param_id": "bTtBT",
                                  "param_name": "file"
                                },
                                "type": "CurrentWorkflowItem",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtMx0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "openai_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTtNB0"
                                },
                                "type": "PreviousStep",
                                "is_slidable": false
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
                                  "type": "Message",
                                  "name": "openai_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTtMv0",
                                  "optional": false,
                                  "param_id": "bTtBT",
                                  "param_name": "file"
                                },
                                "type": "CurrentWorkflowItem",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtNB0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "openai_vector_store_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTtNC0"
                                },
                                "type": "PreviousStep",
                                "is_slidable": false
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
                                  "type": "Message",
                                  "name": "openai_vector_store_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTtMv0",
                                  "optional": false,
                                  "param_id": "bTtBT",
                                  "param_name": "file"
                                },
                                "type": "CurrentWorkflowItem",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtNC0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "upload_job_custom_upload_job",
            "value": {
              "properties": {
                "btype_id": "custom.upload_job",
                "event_id": "bTtMv0",
                "optional": false,
                "param_id": "bTtFc",
                "param_name": "upload_job"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "4": {
            "key": "gemini_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "bTjCr",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtND0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "5": {
            "key": "gemini_file_name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "bTjCt",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtND0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBT",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtNH0"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtNH0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTKJ",
        "_wf_param_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBT",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "_wf_param_provider": {
          "next": {
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTtMv0",
            "optional": false,
            "param_id": "bTtBP",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTtNI0"
    }
  }
};
