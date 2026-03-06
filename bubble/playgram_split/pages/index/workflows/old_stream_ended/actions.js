export const actions = {
  "0": {
    "properties": {
      "changes": {
        "0": {
          "key": "file_name_temp_text",
          "value": {
            "entries": {
              "0": {
                "next": {
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
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "extract_regex",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTkbH0",
                                  "optional": false,
                                  "param_id": "bTkdL0",
                                  "param_name": "data"
                                },
                                "type": "CurrentWorkflowItem",
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
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=user_image_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "extract_regex",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTkbH0",
                                  "optional": false,
                                  "param_id": "bTkdL0",
                                  "param_name": "data"
                                },
                                "type": "CurrentWorkflowItem",
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
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTkbH0",
                  "optional": false,
                  "param_id": "bTkdL0",
                  "param_name": "data"
                },
                "type": "CurrentWorkflowItem",
                "said": "a2Vsdm8tMzE4ODQ=",
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
        "next": {
          "next": {
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
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTrVg0",
    "name": "Make changes to Chat... (find chat)"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": "stream_ended",
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "last_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "separator": {
                        "entries": {
                          "0": "<#NANI?>"
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
                    "event_id": "bTnYF0",
                    "optional": false,
                    "param_id": "bTkdL0",
                    "param_name": "data"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTnYF0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "params_path": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=image_path: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "params_base64": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "params_file_name": {
        "entries": {
          "0": {
            "next": {
              "properties": {
                "tz_type": "browser",
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
          "1": ".webp"
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
    "id": "bTrSy0"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTnYF0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "openai_last_container_id_text",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTnYF0",
                  "optional": false,
                  "param_id": "bTkdL0",
                  "param_name": "data"
                },
                "type": "CurrentWorkflowItem",
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
        "1": {
          "key": "openai_last_container_date_date",
          "value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTVPN"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "next": {
          "next": {
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
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTnYH0"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=claude_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "properties": {
          "btype_id": "text",
          "event_id": "bTnYF0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "claude_last_container_id_text",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=claude_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTnYF0",
                  "optional": false,
                  "param_id": "bTkdL0",
                  "param_name": "data"
                },
                "type": "CurrentWorkflowItem",
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
        "1": {
          "key": "claude_last_container_date_date",
          "value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTVPN"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "next": {
          "next": {
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
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTnYL0"
  },
  "4": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.response.file_url",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTrSy0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "initial_values": {
        "0": {
          "key": "bunny_url_text",
          "value": {
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
                          "action_id": "bTrSy0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      }
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
          "action": {
            "type": "Empty"
          }
        },
        "1": {
          "key": "mime_type_text",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "mime_type",
                  "is_slidable": false
                },
                "properties": {
                  "option_set": "option.file_types__os_",
                  "option_value": "webp"
                },
                "type": "OptionValue"
              }
            },
            "type": "TextExpression"
          },
          "action": {
            "type": "Empty"
          }
        },
        "2": {
          "key": "chat_custom_chat",
          "value": {
            "properties": {
              "action_id": "bTrVg0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "3": {
          "key": "chat_type_option_chat_type__os_",
          "value": {
            "next": {
              "type": "Message",
              "name": "type_option_chat_type__os_",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTrVg0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "4": {
          "key": "organization_custom_organization",
          "value": {
            "next": {
              "type": "Message",
              "name": "organization_custom_organization",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTrVg0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "5": {
          "key": "project_custom_project",
          "value": {
            "next": {
              "type": "Message",
              "name": "project_custom_project",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTrVg0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "6": {
          "key": "shared_access_chat__boolean",
          "value": {
            "next": {
              "type": "Message",
              "name": "share_access_boolean",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTrVg0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "thing_type": "custom.file"
    },
    "type": "NewThing",
    "id": "bTnYM0"
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
          "action_id": "bTnYM0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "files_list_custom_file",
          "value": {
            "properties": {
              "action_id": "bTnYM0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": "add"
        }
      },
      "to_change": {
        "next": {
          "next": {
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
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTnYN0"
  },
  "6": {
    "properties": {
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTsnh0",
      "_wf_param_chat": {
        "properties": {
          "action_id": "bTrVg0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_image": {
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
                            "name": "_api_c2_body.response.file_url",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTrSy0"
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
              "name": "_api_c2_body.response.file_url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTrSy0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_context": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=context: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_file_id": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
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
                                "regex": {
                                  "entries": {
                                    "0": "(?<=file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTnYF0",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
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
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_id": {
        "entries": {
          "0": {
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
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_file_url": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
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
                                "regex": {
                                  "entries": {
                                    "0": "(?<=file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTnYF0",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
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
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_chat_file": {
        "properties": {
          "action_id": "bTnYM0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_llm_model": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_llm_reply": {
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
                          "name": "format_json_encode",
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
                                      "args": "Qwen3 235B A22B Thinking",
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "regex": {
                                                      "entries": {
                                                        "0": "(?<=</think>)[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "btype_id": "text",
                                                  "event_id": "bTnYF0",
                                                  "optional": false,
                                                  "param_id": "bTkdL0",
                                                  "param_name": "data"
                                                },
                                                "type": "CurrentWorkflowItem",
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
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "regex": {
                                                      "entries": {
                                                        "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "btype_id": "text",
                                                  "event_id": "bTnYF0",
                                                  "optional": false,
                                                  "param_id": "bTkdL0",
                                                  "param_name": "data"
                                                },
                                                "type": "CurrentWorkflowItem",
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
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "extract_regex",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTnYF0",
                                  "optional": false,
                                  "param_id": "bTkdL0",
                                  "param_name": "data"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": ""
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
                            "next": {
                              "args": "error",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "\"error_returned\""
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
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "last_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "separator": {
                              "entries": {
                                "0": "<#NANI?>"
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
                          "event_id": "bTnYF0",
                          "optional": false,
                          "param_id": "bTkdL0",
                          "param_name": "data"
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
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "args": "Qwen3 235B A22B Thinking",
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "first_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "regex": {
                                          "entries": {
                                            "0": "(?<=</think>)[\\s\\S]*?(?=\"<#NANI\\?>)"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "extract_regex",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTnYF0",
                                      "optional": false,
                                      "param_id": "bTkdL0",
                                      "param_name": "data"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                                        "type": "Message",
                                        "name": "first_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "regex": {
                                          "entries": {
                                            "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "extract_regex",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "btype_id": "text",
                                      "event_id": "bTnYF0",
                                      "optional": false,
                                      "param_id": "bTkdL0",
                                      "param_name": "data"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": ""
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
      "_wf_param_user_name": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=user_name: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_project_id": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
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
                                "regex": {
                                  "entries": {
                                    "0": "(?<=project_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTnYF0",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
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
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=project_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_image": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
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
                                "regex": {
                                  "entries": {
                                    "0": "(?<=user_image_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTnYF0",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
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
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=user_image_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_sort_number": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=sort: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_tenant_name": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=tenant_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_message": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_workspace_id": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=workspace_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_profile_photo": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=profile_photo: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_organization_id": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "args": "team",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
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
                                "regex": {
                                  "entries": {
                                    "0": "(?<=tenant_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTnYF0",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
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
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=chat_type: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_message_created_date": {
        "entries": {
          "0": {
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
                "regex": {
                  "entries": {
                    "0": "(?<=user_message_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTsnK0"
  },
  "7": {
    "properties": {
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTndV0",
      "_wf_param_model": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYF0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_workspace_user": {
        "next": {
          "next": {
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
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=workspace_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYF0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "constraint_type": "equals"
                }
              }
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "workspaces_list_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTndd0"
  },
  "8": {
    "properties": {
      "value": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
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
                            "next": {
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "regex": {
                                "entries": {
                                  "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTnYF0",
                            "optional": false,
                            "param_id": "bTkdL0",
                            "param_name": "data"
                          },
                          "type": "CurrentWorkflowItem",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "custom.streaming_chats_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "breakpoint": true,
      "custom_state": "custom.streaming_chats_"
    },
    "type": "SetCustomState",
    "id": "bTndD0"
  }
};
