export const create_user_image_chat_file = {
  "properties": {
    "event_name": "create_user_image_chat_file",
    "wf_folder": "CustomEvent",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtUz0",
        "param_name": "url"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTtVA0",
        "param_name": "chat"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwDj0",
        "param_name": "file_path"
      }
    },
    "return_types": {
      "0": {
        "display": "chat_file",
        "is_list": false,
        "btype_id": "custom.file",
        "optional": false,
        "return_id": "bTtUo0"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTttd0",
  "name": "create_user_image_chat_file",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": "svg",
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
            "event_id": "bTttd0",
            "optional": false,
            "param_id": "bTtUz0",
            "param_name": "url"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "params_svg_url": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtUz0",
                "param_name": "url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
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
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTMBs0.bTtRv0",
      "id": "bTttf0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.response.png",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "params_path": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTttd0",
                "optional": true,
                "param_id": "bTwDj0",
                "param_name": "path"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_base64": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.png",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTttf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_file_name": {
          "entries": {
            "0": {
              "next": {
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
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtUz0",
                "param_name": "url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "1": ".png"
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
        }
      },
      "type": "apiconnector2-bTMBs0.bTrSm0",
      "id": "bTttj0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
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
                                "0": "Personal,Temporary"
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
                      "name": "display",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTttd0",
                    "optional": false,
                    "param_id": "bTtVA0",
                    "param_name": "chat"
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
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttj0"
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
        "api_event": "bTvNL0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
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
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.file_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTttj0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwFV0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "project"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTttd0",
                    "optional": false,
                    "param_id": "bTtVA0",
                    "param_name": "chat"
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
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttj0"
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
        "api_event": "bTvLt0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
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
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_project": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTttd0",
            "optional": false,
            "param_id": "bTtVA0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.file_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTttj0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwFX0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "team"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "type_option_chat_type__os_",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTttd0",
                    "optional": false,
                    "param_id": "bTtVA0",
                    "param_name": "chat"
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
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTttj0"
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
        "api_event": "bTvMj0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
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
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_project": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTttd0",
            "optional": false,
            "param_id": "bTtVA0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.file_url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTttj0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_organization": {
          "next": {
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTttd0",
            "optional": false,
            "param_id": "bTtVA0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwFc0"
    },
    "5": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "bunny_url_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTttd0",
                    "optional": false,
                    "param_id": "bTtUz0",
                    "param_name": "bunny_url"
                  },
                  "type": "CurrentWorkflowItem",
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
                                    "event_id": "bTttd0",
                                    "optional": false,
                                    "param_id": "bTtUz0",
                                    "param_name": "bunny_url"
                                  },
                                  "type": "CurrentWorkflowItem",
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
          },
          "2": {
            "key": "chat_custom_chat",
            "value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtVA0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
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
                "btype_id": "custom.chat",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtVA0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
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
                "btype_id": "custom.chat",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtVA0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
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
                "btype_id": "custom.chat",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtVA0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
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
                "btype_id": "custom.chat",
                "event_id": "bTttd0",
                "optional": false,
                "param_id": "bTtVA0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "7": {
            "key": "png_image_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.response.file_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTttj0"
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
        "thing_type": "custom.file"
      },
      "type": "NewThing",
      "id": "bTttk0"
    },
    "6": {
      "properties": {
        "changes": {
          "0": {
            "key": "files_list_custom_file",
            "value": {
              "properties": {
                "action_id": "bTttk0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTttd0",
            "optional": false,
            "param_id": "bTtVA0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTttl0"
    },
    "7": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTtUo0",
            "return_value": {
              "properties": {
                "action_id": "bTttk0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTttp0"
    }
  },
};
