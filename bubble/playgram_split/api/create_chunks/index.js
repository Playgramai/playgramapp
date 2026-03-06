export const create_chunks = {
  "properties": {
    "expose": false,
    "wf_name": "create_chunks",
    "wf_folder": "bTwVe1",
    "parameters": {
      "0": {
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
      "1": {
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
      "2": {
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
      "3": {
        "key": "uploaded_manually",
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
        "key": "file",
        "value": "file",
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
        "key": "project",
        "value": "custom.project",
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
  "id": "bTwVF1",
  "name": "create_chunks",
  "actions": {
    "0": {
      "properties": {
        "params_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTwVF1",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTwUD1.bTwUE1",
      "id": "bTwVv1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_chunkId",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.chunks",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTwVv1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "url_to_delete": {
          "properties": {
            "btype_id": "file",
            "event_id": "bTwVF1",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTwWC1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_chunkId",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.chunks",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTwVv1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.chunks",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTwVv1"
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
        "api_event": "bTwUd1",
        "type_of_list": "api.apiconnector2.bTwUD1.bTwUE1.body.chunks",
        "_wf_param_file": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTwVF1",
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_text": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_vector": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_embedding",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_project": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTwVF1",
            "optional": true,
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_file_url": {
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
                            "type": "Message",
                            "name": "bunny_url_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTwVF1",
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
                                        "type": "Message",
                                        "name": "file_bunny_url_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.project_instruction_file",
                                        "event_id": "bTwVF1",
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
                                      "properties": {
                                        "btype_id": "text",
                                        "event_id": "bTwVF1",
                                        "optional": true,
                                        "param_id": "file_from_memory_knowledge",
                                        "param_name": "file_from_memory_knowledge"
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
                            "event_id": "bTwVF1",
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
                "event_id": "bTwVF1",
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_last_file": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwVF1",
                "param_id": "last_file",
                "param_name": "last_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_last_chunk": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.chunks",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTwVv1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_document_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwVF1",
                "param_id": "document_id",
                "param_name": "document_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_tenant_name": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwVF1",
                "param_id": "tenant_name",
                "param_name": "tenant_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_current_file": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTwVF1",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_current_user": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTwVF1",
            "param_id": "current_user",
            "param_name": "current_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_organization": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTwVF1",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_workspace_id": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTwVF1",
            "param_id": "workspace_id",
            "param_name": "workspace_id"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_chunk_content": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_content",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace_user": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTwVF1",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_upload_manually": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTwVF1",
            "param_id": "uploaded_manually",
            "param_name": "uploaded_manually"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTwVT1",
      "name": "Schedule API Workflow save_chunks_to_weaviate on a list"
    }
  },
};
