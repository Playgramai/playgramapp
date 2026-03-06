export const scheduleapieventonlist = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_retrievedContext.text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_groundingMetadata.groundingChunks",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.candidates",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTgiS0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "data_source": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "_api_c2_retrievedContext.text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_groundingMetadata.groundingChunks",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.candidates",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTgiS0"
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
    "api_event": "bTStp0",
    "type_of_list": "text",
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
            "event_id": "bTghb0",
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
    "_wf_param_project": {
      "next": {
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.project_instruction_file",
        "event_id": "bTghb0",
        "optional": true,
        "param_id": "project_file",
        "param_name": "project_file"
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
                        "event_id": "bTghb0",
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
                                    "event_id": "bTghb0",
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
                                    "event_id": "bTghb0",
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
                        "event_id": "bTghb0",
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
            "event_id": "bTghb0",
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
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTghb0",
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
                "next": {
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_retrievedContext.text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_groundingMetadata.groundingChunks",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.candidates",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTgiS0"
          },
          "type": "PreviousStep",
          "said": "a2Vsdm8tMzE4ODQ=",
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
            "event_id": "bTghb0",
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
            "event_id": "bTghb0",
            "param_id": "tenant_name",
            "param_name": "tenant_name"
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
        "event_id": "bTghb0",
        "param_id": "user",
        "param_name": "user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_organization": {
      "properties": {
        "btype_id": "custom.organization",
        "event_id": "bTghb0",
        "param_id": "organization",
        "param_name": "organization"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_workspace_id": {
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTghb0",
        "param_id": "workspace_id",
        "param_name": "workspace_id"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_workspace_user": {
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTghb0",
        "param_id": "workspace_user",
        "param_name": "workspace_user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEventOnList",
  "id": "bTgiX0",
  "name": "Schedule API Workflow save_chunks_to_weaviate on a list"
};
