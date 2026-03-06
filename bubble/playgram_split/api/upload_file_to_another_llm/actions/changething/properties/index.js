export const properties = {
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
                            "action_id": "bTQUT0"
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
                            "event_id": "bTQUL0",
                            "param_id": "file",
                            "param_name": "file"
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
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTQUT0"
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
      "key": "gemini_id_text",
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
                            "name": "_api_c2_body.file.uri",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTSxl0"
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
                            "name": "gemini_id_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTQUL0",
                            "param_id": "file",
                            "param_name": "file"
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
              "type": "Message",
              "name": "_api_c2_body.file.uri",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTSxl0"
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
    "2": {
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
                            "action_id": "bTQUY0"
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
                            "event_id": "bTQUL0",
                            "param_id": "file",
                            "param_name": "file"
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
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTQUY0"
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
                            "action_id": "bTQUd0"
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
                            "event_id": "bTQUL0",
                            "param_id": "file",
                            "param_name": "file"
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
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTQUd0"
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
    "4": {
      "key": "gemini_file_name_text",
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
                            "name": "_api_c2_body.file.name",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTSxl0"
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
                            "name": "gemini_file_name_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTQUL0",
                            "param_id": "file",
                            "param_name": "file"
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
              "type": "Message",
              "name": "_api_c2_body.file.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTSxl0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
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
      "key": "upload_job_custom_upload_job",
      "value": {
        "properties": {
          "btype_id": "custom.upload_job",
          "event_id": "bTQUL0",
          "param_id": "upload_job",
          "param_name": "upload_job"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    }
  },
  "to_change": {
    "properties": {
      "btype_id": "custom.file",
      "event_id": "bTQUL0",
      "param_id": "file",
      "param_name": "file"
    },
    "type": "APIEventParameter",
    "is_slidable": false
  },
};
