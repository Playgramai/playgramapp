export const OLD_STEP_1_create_chunks_upload_file = {
  "properties": {
    "expose": false,
    "wf_name": "create_chunks_upload_file",
    "wf_folder": "bTwVe1",
    "parameters": {
      "0": {
        "key": "file",
        "value": "file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "1": {
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
      "2": {
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
      "3": {
        "key": "user_id",
        "value": "user",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
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
      "5": {
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
      "6": {
        "key": "uploaded_manually",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "7": {
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
      "8": {
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
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTSsn0",
  "name": "[OLD STEP 1] create_chunks_upload_file",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "params_path": {
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
                            "name": "bunny_folder_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project",
                            "event_id": "bTSsn0",
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
                                          "properties": {
                                            "formatting_type": "url_encode",
                                            "replace_space": false
                                          },
                                          "type": "Message",
                                          "name": "format_text",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "bunny_folder_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "user",
                                        "event_id": "bTSsn0",
                                        "optional": true,
                                        "param_id": "user_id",
                                        "param_name": "user_id"
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
                                        "type": "Message",
                                        "name": "bunny_folder_text",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.organization",
                                        "event_id": "bTSsn0",
                                        "optional": true,
                                        "param_id": "organization",
                                        "param_name": "organization"
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
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "user",
                            "event_id": "bTSsn0",
                            "optional": true,
                            "param_id": "user_id",
                            "param_name": "user_id"
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
                "btype_id": "custom.project",
                "event_id": "bTSsn0",
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_base64": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "params_file_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": "https:",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "https:",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "url",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "file",
                              "event_id": "bTSsn0",
                              "param_id": "file",
                              "param_name": "file"
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
                              "type": "Message",
                              "name": "url",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "file",
                              "event_id": "bTSsn0",
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
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTSsn0",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_file_name": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
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
                        "type": "Message",
                        "name": "file_name",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "file",
                        "event_id": "bTSsn0",
                        "param_id": "file",
                        "param_name": "file"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "_",
                    "3": {
                      "next": {
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
                    },
                    "4": ".",
                    "5": {
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
                                "0": "."
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "split_by",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "file_name",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "file",
                        "event_id": "bTSsn0",
                        "param_id": "file",
                        "param_name": "file"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "6": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
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
        }
      },
      "type": "apiconnector2-bTMBs0.bTrSm0",
      "id": "bTrTE0"
    },
    "1": {
      "properties": {
        "body_params_name": {
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
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
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
                            "name": "_api_c2_body.response.file_url",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTrTE0"
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
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
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
                            "event_id": "bTSsn0",
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
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_sort": {
          "entries": {
            "0": {
              "next": {
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
        "body_params_class": {
          "type": "TextExpression"
        },
        "body_params_user_id": {
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
                              "event_id": "bTSsn0",
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
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "workspace_id",
                "param_name": "workspace_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
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
        "body_params_file_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "\"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "bunny_url_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTSsn0",
                            "optional": true,
                            "param_id": "chat_file",
                            "param_name": "chat_file"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "2": "\""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "\"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_body.response.file_url",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTrTE0"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "2": "\""
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
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
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
                "param_id": "project",
                "param_name": "project"
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
                "event_id": "bTSsn0",
                "param_id": "tenant_name",
                "param_name": "tenant_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
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
                            "param_id": "organization",
                            "param_name": "organization"
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
                "btype_id": "custom.organization",
                "event_id": "bTStp0",
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_uploaded_manually": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "\"true\""
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
                "btype_id": "boolean",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "uploaded_manually",
                "param_name": "uploaded_manually"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTSqr0",
      "id": "bTSuJ0"
    },
    "2": {
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
                  "event_id": "bTSsn0",
                  "optional": true,
                  "param_id": "uploaded_manually",
                  "param_name": "uploaded_manually"
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
                    "btype_id": "custom.file",
                    "event_id": "bTSsn0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
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
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "initial_values": {
          "0": {
            "key": "document_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTSuJ0"
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
          "1": {
            "key": "project_custom_project",
            "value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTSsn0",
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "file_bunny_url_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.response.file_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTrTE0"
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
            "key": "organization_custom_organization",
            "value": {
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "organization",
                "param_name": "organization"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "4": {
            "key": "mime_type_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "mime_type",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_advanced_search_constraint",
                          "value": {
                            "next": {
                              "next": {
                                "args": {
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
                                            "0": "."
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "split_by",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "_api_c2_body.response.file_url",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "action_id": "bTrTE0"
                                  },
                                  "type": "PreviousStep",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
                            "type": "InjectedValue",
                            "is_slidable": false
                          },
                          "constraint_type": {
                            "type": "Empty"
                          }
                        }
                      }
                    },
                    "type": "Message",
                    "name": "filtered",
                    "is_slidable": true
                  },
                  "properties": {
                    "option_set": "option.file_types__os_",
                    "option_value": "all values"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.project_instruction_file"
      },
      "type": "NewThing",
      "id": "bTSzq"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTSzq"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "project_instruction_files_list_custom_project_instruction_file",
            "value": {
              "properties": {
                "action_id": "bTSzq"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTSsn0",
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTSzf"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "weaviate_document_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTSuJ0"
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
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTiyA"
    },
    "5": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTghb0",
        "_wf_param_chat": {
          "next": {
            "type": "Message",
            "name": "chat_custom_chat",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_user": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTSsn0",
            "param_id": "current_user",
            "param_name": "current_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_chat_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_last_file": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_document_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTSuJ0"
              },
              "type": "PreviousStep",
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
                "event_id": "bTSsn0",
                "param_id": "tenant_name",
                "param_name": "tenant_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_organization": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_project_file": {
          "properties": {
            "action_id": "bTSzq"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_workspace_id": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTSsn0",
            "optional": true,
            "param_id": "workspace_id",
            "param_name": "workspace_id"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_uploaded_manually": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "boolean",
                "event_id": "bTSsn0",
                "optional": true,
                "param_id": "uploaded_manually",
                "param_name": "uploaded_manually"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_file_from_memory_knowledge": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.response.file_url",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTrTE0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bThBr3",
      "name": "Schedule API Workflow [STEP 2] create_chunks_for_uploaded_file"
    }
  },
};
