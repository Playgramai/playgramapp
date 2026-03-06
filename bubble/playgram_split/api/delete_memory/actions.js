export const actions = {
  "0": {
    "properties": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTLzi",
          "optional": true,
          "param_id": "custom_memory?",
          "param_name": "custom_memory?"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "url_params_uuid": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTLzi",
              "param_id": "uuid",
              "param_name": "uuid"
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
      "url_params_tenant_id": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.organization",
              "event_id": "bTLzi",
              "param_id": "organization",
              "param_name": "organization"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "url_params_collection": {
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHIF0.bTJUb0",
    "id": "bTNyH"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTLzi",
          "optional": true,
          "param_id": "custom_memory?",
          "param_name": "custom_memory?"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "body_params_class": {
        "type": "TextExpression"
      },
      "body_params_image": {
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
                            "name": "_api_c2_body.properties.image",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.image",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_vector": {
        "type": "TextExpression"
      },
      "body_params_chat_id": {
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
                            "name": "_api_c2_body.properties.chat_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.chat_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_content": {
        "type": "TextExpression"
      },
      "body_params_file_id": {
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
                            "name": "_api_c2_body.properties.file_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.file_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
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
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.user_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
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
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "\"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_body.properties.file_url",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "2": "\""
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
              "name": "_api_c2_body.properties.file_url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_llm_model": {
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
                            "name": "_api_c2_body.properties.llm_model",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.llm_model",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_llm_reply": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.llm_reply",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_user_name": {
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
                                    "name": "_api_c2_body.properties.user_name",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "action_id": "bTNyH"
                                  },
                                  "type": "PreviousStep",
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
                      "type": "Message",
                      "name": "_api_c2_body.properties.user_name",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTNyH"
                    },
                    "type": "PreviousStep",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": ""
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText"
          }
        },
        "type": "TextExpression"
      },
      "body_params_project_id": {
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
                            "name": "_api_c2_body.properties.project_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.project_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_used_tools": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "[",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "format_json_encode",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "content": {
                                    "entries": {
                                      "0": "\"",
                                      "1": {
                                        "type": "InjectedValue",
                                        "is_slidable": false
                                      },
                                      "2": "\""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "delimiter": {
                                    "entries": {
                                      "0": ","
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "format_as_text",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "_api_c2_body.properties.used_tools",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTNyH"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": "]"
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
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.used_tools",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_user_image": {
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
                            "name": "_api_c2_body.properties.user_image",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.user_image",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_sort_number": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.properties.sort",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "body_params_tenant_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.tenant",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_created_date": {
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
              "name": "_api_c2_body.properties.created_date_text",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "body_params_user_message": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.user_message",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_workspace_id": {
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
                            "name": "_api_c2_body.properties.workspace_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.workspace_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_profile_photo": {
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
                            "name": "_api_c2_body.properties.profile_photo",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.properties.profile_photo",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
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
                            "name": "_api_c2_body.properties.organization_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.organization_id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_workspace_model": {
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
                            "name": "_api_c2_body.properties.workspace_model",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
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
              "name": "_api_c2_body.properties.workspace_model",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_llm_created_date": {
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
                            "name": "_api_c2_body.properties.created_date_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
                          },
                          "type": "PreviousStep",
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
              "type": "Message",
              "name": "_api_c2_body.properties.created_date_text",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_memory_level_with_id": {
        "entries": {
          "0": {
            "type": "Empty"
          }
        },
        "type": "TextExpression"
      },
      "body_params_user_message_created_date": {
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
                            "name": "_api_c2_body.properties.user_message_created_date",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTNyH"
                          },
                          "type": "PreviousStep",
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
              "type": "Message",
              "name": "_api_c2_body.properties.user_message_created_date",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTNyH"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHIF0.bTHIv0",
    "id": "bTNyF"
  },
  "2": {
    "properties": {
      "to_change": {
        "next": {
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "constraints": {
            "0": {
              "key": "_id",
              "value": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_body.properties.file_id",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTNyH"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "constraint_type": {
                "type": "Empty"
              }
            }
          },
          "type_to_find": "custom.file"
        },
        "type": "Search"
      }
    },
    "type": "ChangeThing",
    "id": "bTjrv0"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "boolean",
                  "event_id": "bTLzi",
                  "optional": true,
                  "param_id": "custom_memory?",
                  "param_name": "custom_memory?"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
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
          "action_id": "bTNyF"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "params_tenant": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.organization",
              "event_id": "bTLzi",
              "param_id": "organization",
              "param_name": "organization"
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
              "event_id": "bTLzi",
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
          "0": "Messages_v3"
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
    "id": "bTNyM"
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.chat",
                  "event_id": "bTLzi",
                  "optional": true,
                  "param_id": "chat",
                  "param_name": "chat"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_returned_an_error",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTNyM"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "string_for_update_number",
          "value": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "length": 2,
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
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTLzi",
          "param_id": "chat",
          "param_name": "chat"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTQQK0"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTjrv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "params_tenant": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.organization",
              "event_id": "bTLzi",
              "param_id": "organization",
              "param_name": "organization"
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
            "next": {
              "type": "Message",
              "name": "weaviate_document_id_text",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTjrv0"
            },
            "type": "PreviousStep",
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
    "id": "bTiyL"
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
          "action_id": "bTjrv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "body_params_class": {
        "type": "TextExpression"
      },
      "url_params_tenant": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.organization",
              "event_id": "bTLzi",
              "param_id": "organization",
              "param_name": "organization"
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
          },
          "1": ""
        },
        "type": "TextExpression"
      },
      "body_params_document_id": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "weaviate_document_id_text",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTjrv0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHIF0.bTYNs",
    "id": "bTiyN"
  },
  "7": {
    "properties": {
      "changes": {
        "0": {
          "key": "for_memory_update_number",
          "value": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "length": 2,
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "properties": {
          "btype_id": "user",
          "event_id": "bTLzi",
          "param_id": "user",
          "param_name": "user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTQQW0"
  }
};
