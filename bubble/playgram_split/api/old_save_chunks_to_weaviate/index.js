export const OLD_save_chunks_to_weaviate = {
  "properties": {
    "expose": false,
    "wf_name": "old_save_chunks_to_weaviate",
    "wf_folder": "bTwVe1",
    "parameters": {
      "0": {
        "key": "text",
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
      "2": {
        "key": "workspace_id",
        "value": "custom.workspace",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "3": {
        "key": "file_url",
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
        "key": "document_id",
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
      "5": {
        "key": "organization",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "6": {
        "key": "last_chunk",
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
        "key": "last_file",
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
      "8": {
        "key": "current_user",
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
      "9": {
        "key": "tenant_name",
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
    }
  },
  "type": "APIEvent",
  "id": "bTStp0",
  "name": "[OLD] save_chunks_to_weaviate",
  "actions": {
    "0": {
      "properties": {
        "body_params_text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTStp0",
                "param_id": "text",
                "param_name": "text"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTHDr0",
      "id": "bTwWx"
    },
    "1": {
      "properties": {
        "body_params_class": {
          "type": "TextExpression"
        },
        "body_params_vector": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": ""
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "[",
                                "1": {
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
                                    "action_id": "bTwWx"
                                  },
                                  "type": "PreviousStep",
                                  "is_slidable": false
                                },
                                "2": "]"
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
                      "name": "first_element",
                      "is_slidable": false
                    },
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
                "action_id": "bTwWx"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_content": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTStp0",
                "param_id": "text",
                "param_name": "text"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_id": {
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
                              "type": "Message",
                              "name": "format_json_encode",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.workspace",
                            "event_id": "bTStp0",
                            "optional": true,
                            "param_id": "workspace_id",
                            "param_name": "workspace_id"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTStp0",
                "optional": true,
                "param_id": "workspace_id",
                "param_name": "workspace_id"
              },
              "type": "APIEventParameter",
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
                  "properties": {
                    "formatting_for_true": {
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
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project",
                            "event_id": "bTStp0",
                            "param_id": "project",
                            "param_name": "project"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTStp0",
                "optional": true,
                "param_id": "project",
                "param_name": "project"
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
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTStp0",
                "param_id": "document_id",
                "param_name": "document_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_tenant_name": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTStp0",
                "param_id": "tenant_name",
                "param_name": "tenant_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "body_params_is_instruction": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "body_params_organization_id": {
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
                              "type": "Message",
                              "name": "format_json_encode",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.organization",
                            "event_id": "bTStp0",
                            "optional": true,
                            "param_id": "organization",
                            "param_name": "organization"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTStp0",
                "optional": true,
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_vectorized_content": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTSqx0",
      "id": "bTSuO0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTStp0",
                "param_id": "last_chunk",
                "param_name": "last_chunk"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
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
                              "event_id": "bTStp0",
                              "param_id": "last_file",
                              "param_name": "last_file"
                            },
                            "type": "APIEventParameter",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "find": {
                                  "entries": {
                                    "0": "_(\\d+)(?=\\.[^.]+$)"
                                  },
                                  "type": "TextExpression"
                                },
                                "use_regex": true
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
                            },
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
                          "event_id": "bTStp0",
                          "param_id": "file_url",
                          "param_name": "file_url"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
                      "2": "",
                      "3": {
                        "type": "Empty"
                      },
                      "4": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.project",
                    "event_id": "bTStp0",
                    "optional": true,
                    "param_id": "project",
                    "param_name": "project"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
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
          "properties": {
            "btype_id": "text",
            "event_id": "bTStp0",
            "param_id": "text",
            "param_name": "text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploading_files__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTStp0",
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTUXz"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "uploading_files__boolean",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTStp0",
            "optional": true,
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploading_files__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTStp0",
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTpdC2"
    },
    "4": {
      "properties": {
        "changes": {
          "0": {
            "key": "custom_memory_added__text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "convert_to_number",
                          "is_slidable": false
                        },
                        "properties": {
                          "length": 5,
                          "numbers": true,
                          "formula_type": "RandomString"
                        },
                        "type": "Formulas"
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "properties": {
                      "component_to_extract": "UNIX"
                    },
                    "type": "Message",
                    "name": "extract_from_date",
                    "is_slidable": true
                  },
                  "properties": {
                    "name": "Current Date/Time"
                  },
                  "type": "PageData",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "log_test_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "project: ",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project",
                            "event_id": "bTStp0",
                            "optional": true,
                            "param_id": "project",
                            "param_name": "project"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "2": "\n",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "uploading_files__boolean",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project",
                            "event_id": "bTStp0",
                            "optional": true,
                            "param_id": "project",
                            "param_name": "project"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "4": "\n\n\nfile_url_name : ",
                        "5": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "find": {
                                    "entries": {
                                      "0": "_(\\d+)(?=\\.[^.]+$)"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "use_regex": true
                                },
                                "type": "Message",
                                "name": "find_replace",
                                "is_slidable": true
                              },
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
                            "event_id": "bTStp0",
                            "param_id": "file_url",
                            "param_name": "file_url"
                          },
                          "type": "APIEventParameter",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "6": "\nlast_file_url_name: ",
                        "7": {
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
                            "event_id": "bTStp0",
                            "param_id": "last_file",
                            "param_name": "last_file"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "8": "\n\ntext: ",
                        "9": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTStp0",
                            "param_id": "text",
                            "param_name": "text"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "10": "\nlast chunk: ",
                        "11": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTStp0",
                            "param_id": "last_chunk",
                            "param_name": "last_chunk"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "12": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
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
            "btype_id": "user",
            "event_id": "bTStp0",
            "param_id": "current_user",
            "param_name": "current_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTatv0"
    }
  },
};
