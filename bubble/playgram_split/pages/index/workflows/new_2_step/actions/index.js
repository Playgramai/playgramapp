import { _2 } from './_2/index.js';
import { _4 } from './_4/index.js';

export const actions = {
  "2": _2,
  "4": _4,
  "0": {
    "properties": {
      "body_params_context": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\\\\"
                    },
                    "type": "TextExpression"
                  },
                  "replace": {
                    "entries": {
                      "0": "\\"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "Message",
              "name": "format_json_encode",
              "is_slidable": false
            },
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYl0",
                      "optional": false,
                      "param_id": "bTHVN0",
                      "param_name": "message"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "2": "\\"
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
      "body_params_chat_type": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "to_lowercase",
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
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPGG",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_current_message": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\\\\"
                    },
                    "type": "TextExpression"
                  },
                  "replace": {
                    "entries": {
                      "0": "\\"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "Message",
              "name": "format_json_encode",
              "is_slidable": false
            },
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTnYl0",
                      "optional": false,
                      "param_id": "bTHVN0",
                      "param_name": "message"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "2": "\\"
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
      }
    },
    "type": "apiconnector2-bTPLJ.bTSwd",
    "id": "bTnYp0"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "args": "true",
                      "next": {
                        "args": {
                          "next": {
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
                              "type": "Message",
                              "name": "project_instruction_files_list_custom_project_instruction_file",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "project_custom_project",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.chat",
                            "event_id": "bTnYl0",
                            "optional": false,
                            "param_id": "bTPGG",
                            "param_name": "chat"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
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
                        "0": "(?<='need_memory'\\s*:\\s*')[^']+"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\""
                    },
                    "type": "TextExpression"
                  },
                  "replace": {
                    "entries": {
                      "0": "'"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "type": "Message",
              "name": "_api_c2_message.content",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.choices",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYp0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTVAq0",
          "arg_value": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "\""
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": "'"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "_api_c2_message.content",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.choices",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYp0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTVAr0",
          "arg_value": {
            "properties": {
              "btype_id": "custom.workspace",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPxP0",
              "param_name": "workspace_user"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "2": {
          "param_id": "bTVAv0",
          "arg_value": {
            "properties": {
              "btype_id": "custom.project",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPGR",
              "param_name": "project"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "3": {
          "param_id": "bTVAx0",
          "arg_value": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<='normalized'\\s*:\\s*')[^']+"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "_api_c2_message.content",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.choices",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYp0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "4": {
          "param_id": "bTVBD0",
          "arg_value": {
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTPGG",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "5": {
          "param_id": "bTVBH0",
          "arg_value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYl0",
              "optional": false,
              "param_id": "bTHVN0",
              "param_name": "message"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "6": {
          "param_id": "bTVBI0",
          "arg_value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTMEJ0",
              "param_name": "last_messages"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "7": {
          "param_id": "bTVBJ0",
          "arg_value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTMET0",
              "param_name": "custom_instructions"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTVAf0"
    },
    "type": "TriggerCustomEvent",
    "id": "bTnYq0"
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
          "name": "bTVCJ0",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYr0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "return_values": {
        "0": {
          "return_id": "bTPzF",
          "return_value": 0
        },
        "1": {
          "return_id": "bTPzG",
          "return_value": 0
        },
        "2": {
          "return_id": "bTQFv0",
          "return_value": {
            "type": "Empty"
          }
        },
        "3": {
          "return_id": "bTQFw0",
          "return_value": {
            "type": "Empty"
          }
        },
        "4": {
          "return_id": "bTQLf",
          "return_value": {
            "type": "Empty"
          }
        },
        "5": {
          "return_id": "bTQNP",
          "return_value": {
            "type": "Empty"
          }
        },
        "6": {
          "return_id": "bTQNQ",
          "return_value": {
            "type": "Empty"
          }
        }
      }
    },
    "type": "TerminateWorkflow",
    "id": "bTnYv0"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                "btype_id": "list.custom.file",
                "event_id": "bTnYl0",
                "optional": true,
                "param_id": "bTQSa0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "delete_file_wf_id_text",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.chat",
                  "event_id": "bTnYl0",
                  "optional": false,
                  "param_id": "bTPGG",
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
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "image",
          "event_id": "bTnYl0",
          "optional": true,
          "param_id": "bTcNo",
          "param_name": "user_image"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "scheduled_id": {
        "next": {
          "type": "Message",
          "name": "delete_file_wf_id_text",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTnYl0",
          "optional": false,
          "param_id": "bTPGG",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "CancelScheduledAPIEvent",
    "id": "bTwDA1"
  },
  "6": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                "btype_id": "list.custom.file",
                "event_id": "bTnYl0",
                "optional": true,
                "param_id": "bTQSa0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "delete_file_wf_id_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
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
        "properties": {
          "btype_id": "image",
          "event_id": "bTnYl0",
          "optional": true,
          "param_id": "bTcNo",
          "param_name": "user_image"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "scheduled_id": {
        "next": {
          "next": {
            "type": "Message",
            "name": "delete_file_wf_id_text",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "CancelScheduledAPIEvent",
    "id": "bTwEJ0"
  },
  "7": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
                "btype_id": "list.custom.file",
                "event_id": "bTnYl0",
                "optional": true,
                "param_id": "bTQSa0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
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
        "properties": {
          "btype_id": "image",
          "event_id": "bTnYl0",
          "optional": true,
          "param_id": "bTcNo",
          "param_name": "user_image"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "date": {
        "next": {
          "args": 1,
          "type": "Message",
          "name": "plus_hours",
          "is_slidable": false
        },
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTwCP1",
      "_wf_param_chat": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTnYl0",
          "optional": false,
          "param_id": "bTPGG",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_path": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTwEB0",
              "param_name": "path"
            },
            "type": "CurrentWorkflowItem",
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
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "properties": {
                          "btype_id": "image",
                          "event_id": "bTnYl0",
                          "optional": true,
                          "param_id": "bTcNo",
                          "param_name": "user_image"
                        },
                        "type": "CurrentWorkflowItem",
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
                            "name": "bunny_url_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "list.custom.file",
                          "event_id": "bTnYl0",
                          "optional": true,
                          "param_id": "bTQSa0",
                          "param_name": "file"
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
              "btype_id": "image",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTcNo",
              "param_name": "user_image"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_chat_file": {
        "next": {
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "list.custom.file",
          "event_id": "bTnYl0",
          "optional": true,
          "param_id": "bTQSa0",
          "param_name": "file"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_file_path": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTwEB0",
              "param_name": "file_path"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_workspace&user": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTwDR1"
  },
  "8": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "temporary"
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
          "event_id": "bTUnd0",
          "optional": false,
          "param_id": "bTPGG",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTIwD0",
      "_wf_param_chat": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTUnd0",
          "optional": false,
          "param_id": "bTPGG",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_organization_workspace": {
        "next": {
          "type": "Message",
          "name": "organization_workspace_custom_organization",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTUnd0",
          "optional": false,
          "param_id": "bTPxP0",
          "param_name": "workspace_user"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTniT0"
  },
  "9": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "New chat",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "title_text",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTUnd0",
          "optional": false,
          "param_id": "bTPGG",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "arguments": {
        "0": {
          "param_id": "bTIWB",
          "arg_value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTUnd0",
              "optional": false,
              "param_id": "bTHVN0",
              "param_name": "message"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTIWF",
          "arg_value": {
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTUnd0",
              "optional": false,
              "param_id": "bTPGG",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        }
      },
      "breakpoint": false,
      "custom_event": "bTIVo"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTnYx0",
    "name": "Trigger stream_title from [Element] Sidebar A"
  },
  "10": {
    "properties": {
      "element_id": "bTUdV0",
      "custom_state": "custom.first_message_content_"
    },
    "type": "SetCustomState",
    "id": "bTqCu0"
  },
  "11": {
    "properties": {
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTPLV0",
      "breakpoint": true,
      "ignore_privacy_rules": true,
      "_wf_param_streaming_model": {
        "properties": {
          "btype_id": "option.llm_models__os_",
          "event_id": "bTnYl0",
          "optional": false,
          "param_id": "bTQFB0",
          "param_name": "streaming_model"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_chat_title_input": {
        "next": {
          "type": "Message",
          "name": "bTQNV",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYx0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_chat_title_output": {
        "next": {
          "type": "Message",
          "name": "bTQNW",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYx0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_ chat_title_output": {
        "next": {
          "type": "Message",
          "name": "bTQNQ",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTUzK0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_summarization_input": {
        "next": {
          "type": "Message",
          "name": "bTVBh0",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYq0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_embedding_for_search": {
        "next": {
          "type": "Message",
          "name": "bTQLf",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTUzK0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_summarization_output": {
        "next": {
          "type": "Message",
          "name": "bTVBl0",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYq0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_claude_web_sources_count": {
        "next": {
          "type": "Message",
          "name": "bTUHX",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTUzK0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_first_normalization_input": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.usage.prompt_tokens",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYp0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_embedding_for_first_search": {
        "next": {
          "type": "Message",
          "name": "bTVCF0",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYq0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_first_normalization_output": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.usage.completion_tokens",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTnYp0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTnfI0"
  },
  "12": {
    "properties": {
      "return_values": {
        "0": {
          "return_id": "bTPzF",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.usage.prompt_tokens",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYp0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "1": {
          "return_id": "bTPzG",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.usage.completion_tokens",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYp0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "2": {
          "return_id": "bTQFv0",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "bTVBh0",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYq0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "3": {
          "return_id": "bTQFw0",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "bTVBl0",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYq0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "4": {
          "return_id": "bTQLf",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "bTVCF0",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYq0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "5": {
          "return_id": "bTQNP",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "bTQNV",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYx0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "6": {
          "return_id": "bTQNQ",
          "return_value": {
            "next": {
              "type": "Message",
              "name": "bTQNW",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTnYx0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      }
    },
    "type": "TerminateWorkflow",
    "id": "bTnZB0"
  },
};
