export const save_chunks_to_weaviate = {
  "properties": {
    "expose": false,
    "wf_name": "save_chunks_to_weaviate",
    "wf_folder": "bTwVe1",
    "parameters": {
      "0": {
        "key": "chunk_content",
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
      "4": {
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
      "5": {
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
      "6": {
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
      "7": {
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
      "8": {
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
      },
      "9": {
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
      "10": {
        "key": "current_file",
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
      "11": {
        "key": "upload_manually",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    }
  },
  "type": "APIEvent",
  "id": "bTwUd1",
  "name": "save_chunks_to_weaviate",
  "actions": {
    "0": {
      "properties": {
        "body_params_class": {
          "type": "TextExpression"
        },
        "body_params_vector": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "[",
                    "1": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTwUd1",
                        "param_id": "vector",
                        "param_name": "vector"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": "]"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "1": ""
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
                "event_id": "bTwUd1",
                "param_id": "chunk_content",
                "param_name": "chunk_content"
              },
              "type": "APIEventParameter",
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
                            "event_id": "bTwUd1",
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
                "event_id": "bTwUd1",
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
                            "event_id": "bTwUd1",
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
                "event_id": "bTwUd1",
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
                "event_id": "bTwUd1",
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
                "event_id": "bTwUd1",
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
                            "event_id": "bTwUd1",
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
                "event_id": "bTwUd1",
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
      "id": "bTwVk1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTwUd1",
                      "param_id": "chunk_content",
                      "param_name": "chunk_content"
                    },
                    "type": "APIEventParameter",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTwUd1",
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
                        "btype_id": "text",
                        "event_id": "bTwUd1",
                        "param_id": "current_file",
                        "param_name": "current_file"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTwUd1",
                    "param_id": "last_file",
                    "param_name": "last_file"
                  },
                  "type": "APIEventParameter",
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTwUd1",
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
            "event_id": "bTwUd1",
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwVl1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwUd1",
                "param_id": "chunk_content",
                "param_name": "chunk_content"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTwUd1",
                  "optional": true,
                  "param_id": "upload_manually",
                  "param_name": "upload_manually"
                },
                "type": "APIEventParameter",
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
            "event_id": "bTwUd1",
            "param_id": "last_chunk",
            "param_name": "last_chunk"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
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
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTwUd1",
            "param_id": "current_user",
            "param_name": "current_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwVq1"
    }
  },
};
