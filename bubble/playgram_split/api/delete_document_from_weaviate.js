export const delete_document_from_weaviate = {
  "properties": {
    "expose": false,
    "wf_name": "delete_document_from_weaviate",
    "parameters": {
      "0": {
        "key": "uuid",
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
        "key": "tenant",
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
        "key": "project_file",
        "value": "custom.project_instruction_file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "3": {
        "key": "chat_file",
        "value": "custom.file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
        "key": "delete_only_chunks_from_weaviate",
        "value": "boolean",
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
        "key": "file_url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTSug0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.project_instruction_file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "project_file",
            "param_name": "project_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "deleted__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.project_instruction_file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "project_file",
            "param_name": "project_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTjBd"
    },
    "1": {
      "properties": {
        "body_params_class": {
          "type": "TextExpression"
        },
        "url_params_tenant": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTSug0",
                "param_id": "tenant",
                "param_name": "tenant"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
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
        },
        "body_params_project_id": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "project_custom_project",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.project_instruction_file",
                "event_id": "bTSug0",
                "param_id": "project_file",
                "param_name": "project_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_document_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTSug0",
                "param_id": "uuid",
                "param_name": "uuid"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTYNs",
      "id": "bTYOX",
      "name": "Weaviate - Delete Object Chunks"
    },
    "2": {
      "properties": {
        "params_tenant": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTSug0",
                "param_id": "tenant",
                "param_name": "tenant"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_uuid": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTSug0",
                "param_id": "uuid",
                "param_name": "uuid"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_class": {
          "entries": {
            "0": "Documents"
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
      "type": "apiconnector2-bTHIF0.bTHJP0",
      "id": "bTSus0",
      "name": "Weaviate - Delete Object with UUID"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTSug0",
            "param_id": "delete_only_chunks_from_weaviate",
            "param_name": "delete_only_chunks_from_weaviate"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_path": {
          "entries": {
            "0": {
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
                                "args": 4,
                                "type": "Message",
                                "name": "specific_item",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "/"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "file_bunny_url_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project_instruction_file",
                            "event_id": "bTSug0",
                            "optional": true,
                            "param_id": "project_file",
                            "param_name": "project_file"
                          },
                          "type": "APIEventParameter",
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
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "args": 4,
                                            "type": "Message",
                                            "name": "specific_item",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "separator": {
                                              "entries": {
                                                "0": "/"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "split_by",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTSug0",
                                        "optional": true,
                                        "param_id": "chat_file",
                                        "param_name": "chat_file"
                                      },
                                      "type": "APIEventParameter",
                                      "said": "a2Vsdm8tMzE4ODQ=",
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
                                        "next": {
                                          "args": 4,
                                          "type": "Message",
                                          "name": "specific_item",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "separator": {
                                            "entries": {
                                              "0": "/"
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
                                        "event_id": "bTSug0",
                                        "optional": true,
                                        "param_id": "file_url",
                                        "param_name": "file_url"
                                      },
                                      "type": "APIEventParameter",
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
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTSug0",
                            "optional": true,
                            "param_id": "chat_file",
                            "param_name": "chat_file"
                          },
                          "type": "APIEventParameter",
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
              "properties": {
                "btype_id": "custom.project_instruction_file",
                "event_id": "bTSug0",
                "optional": true,
                "param_id": "project_file",
                "param_name": "project_file"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_file_name": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "/",
                        "1": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "/"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "file_bunny_url_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project_instruction_file",
                            "event_id": "bTSug0",
                            "optional": true,
                            "param_id": "project_file",
                            "param_name": "project_file"
                          },
                          "type": "APIEventParameter",
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
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "/",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "last_element",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "separator": {
                                              "entries": {
                                                "0": "/"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "split_by",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.file",
                                        "event_id": "bTSug0",
                                        "optional": true,
                                        "param_id": "chat_file",
                                        "param_name": "chat_file"
                                      },
                                      "type": "APIEventParameter",
                                      "said": "a2Vsdm8tMzE4ODQ=",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "/",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "last_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "separator": {
                                            "entries": {
                                              "0": "/"
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
                                        "event_id": "bTSug0",
                                        "optional": true,
                                        "param_id": "file_url",
                                        "param_name": "file_url"
                                      },
                                      "type": "APIEventParameter",
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
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTSug0",
                            "optional": true,
                            "param_id": "chat_file",
                            "param_name": "chat_file"
                          },
                          "type": "APIEventParameter",
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
              "properties": {
                "btype_id": "custom.project_instruction_file",
                "event_id": "bTSug0",
                "optional": true,
                "param_id": "project_file",
                "param_name": "project_file"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_storage_zone_name": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "playgram-version-test"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "frala"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "properties": {
                "name": "AppIsTest"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTQOF0.bTrNP1",
      "id": "bTrNb1"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTSug0",
                    "param_id": "delete_only_chunks_from_weaviate",
                    "param_name": "delete_only_chunks_from_weaviate"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "claude_id_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "claude_id_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTSug0",
                "optional": true,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTPRP",
      "id": "bTjrL0"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTSug0",
                    "param_id": "delete_only_chunks_from_weaviate",
                    "param_name": "delete_only_chunks_from_weaviate"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "openai_id_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "openai_id_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTSug0",
                "optional": true,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPRD",
      "id": "bTjrN0"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTSug0",
                    "param_id": "delete_only_chunks_from_weaviate",
                    "param_name": "delete_only_chunks_from_weaviate"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "gemini_file_name_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "gemini_file_name_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTSug0",
                "optional": true,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTPRV",
      "id": "bTjrS0"
    },
    "7": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.project_instruction_file",
                    "event_id": "bTSug0",
                    "optional": true,
                    "param_id": "project_file",
                    "param_name": "project_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_Message",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrNb1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "to_delete": {
          "properties": {
            "btype_id": "custom.project_instruction_file",
            "event_id": "bTSug0",
            "param_id": "project_file",
            "param_name": "project_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTUYR"
    },
    "8": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "boolean",
                  "event_id": "bTSug0",
                  "param_id": "delete_only_chunks_from_weaviate",
                  "param_name": "delete_only_chunks_from_weaviate"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "to_delete": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSug0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTjWp0"
    }
  }
};
