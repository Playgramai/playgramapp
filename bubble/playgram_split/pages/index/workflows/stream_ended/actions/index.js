import { _5 } from './_5.js';
import { _12 } from './_12.js';
import { _9 } from './_9.js';
import { _6 } from './_6.js';

export const actions = {
  "5": _5,
  "12": _12,
  "9": _9,
  "6": _6,
  "16": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
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
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "type_option_chat_type__os_",
                "is_slidable": false
              },
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
                      "event_id": "bTthY0",
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
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTJTB0",
      "_wf_param_chat": {
        "properties": {
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_user": {
        "type": "CurrentUser",
        "is_slidable": false
      },
      "_wf_param_context": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "[",
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
                      "event_id": "bTthY0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": "]"
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText"
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_chat_file": {
        "properties": {
          "action_id": "bTthk0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_llm_reply": {
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
                    "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
              "event_id": "bTthY0",
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
      "_wf_param_object_id": {
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
                          "name": "_api_c2__additional.id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_api_c2_body.data.Get.Messages_v3",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTthp0"
                    },
                    "type": "PreviousStep",
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
          "1": ""
        },
        "type": "TextExpression"
      },
      "_wf_param_user_message": {
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
              "event_id": "bTthY0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "1": ""
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
                      "event_id": "bTthY0",
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
      },
      "_wf_param_current_pair_id": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTUnd0",
              "optional": false,
              "param_id": "bTHdq",
              "param_name": "message uuid"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_current_pair_sort": {
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
      "_wf_param_for_api_organization_id": {
        "type": "TextExpression"
      },
      "_wf_param_normalized_user_message": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=[\u201c\"]normalized[\u201d\"]\\s*:\\s*[\u201c\"])([^\u201d\"]+)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "_api_c2_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_content",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.output",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTMZm0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTthw0"
  },
  "11": {
    "properties": {
      "body_params_query": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "{\"query\":\"{Get{Messages_v3(tenant:\\\"",
                  "1": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "organization_custom_organization",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTthZ0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "2": "\\\",where:{operator:And,operands:[{path:[\\\"chat_id\\\"],operator:Equal,valueText:\\\"",
                  "3": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTthZ0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "4": "\\\"},{path:[\\\"sort\\\"],operator:Equal,valueNumber:",
                  "5": {
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
                      "event_id": "bTthY0",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "6": "}]} ){_additional{id}}}}\"}\n"
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
    "type": "apiconnector2-bTHIF0.bTLJz",
    "id": "bTthp0"
  },
  "13": {
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
          "event_id": "bTthY0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "message_id_text",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_api_c2__additional.id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_body.data.Get.Messages_v3",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTthp0"
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
                      "event_id": "bTthY0",
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
          "name": "files_list_custom_file",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTwJd0"
  },
  "17": {
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
              "event_id": "bTthY0",
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
                      "event_id": "bTthY0",
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
    "id": "bTthx0"
  },
  "18": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_false",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_returned_an_error",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTthq0"
                },
                "type": "PreviousStep",
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
          "action_id": "bTthe0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "string_for_library_update_number",
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
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "next": {
          "type": "Message",
          "name": "organization_custom_organization",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTthr0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTtiC0"
  },
  "8": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "bTvku1",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTvlN1"
        },
        "type": "PreviousStep",
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
                  "event_id": "bTsfv0",
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
        "properties": {
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTthj0"
  },
  "7": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "bTvXP1",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTvXm1"
        },
        "type": "PreviousStep",
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
                  "event_id": "bTsfv0",
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
        "properties": {
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTthf0"
  },
  "0": {
    "properties": {
      "AAh": {
        "entries": {
          "0": "// Cleanup script: delete session from window.liteMux.sessions (no abort, no console logs)\nwindow.liteMux = window.liteMux || { sessions: {} };\n\n(function cleanupLiteMuxSession() {\n  const sessionId = \"",
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
              "event_id": "bTthY0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "2": "\";\n\n  const sessions = window.liteMux.sessions || {};\n  const s = sessions[sessionId];\n\n  if (!s) return;\n\n  // \u041e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u043e\u043b\u044f (\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 \u043a\u0442\u043e-\u0442\u043e \u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442 s)\n  try {\n    s.text = \"\";\n    s.thinking = \"\";\n    s.latestImageBase64 = null;\n    s.imageGenTriggered = false;\n    s.containerId = null;\n    s.finished = true;\n    s.payload = null;\n  } catch {}\n\n  // \u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0430\u043c \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0435\u0441\u0441\u0438\u0438 \u0438\u0437 \u0441\u043b\u043e\u0432\u0430\u0440\u044f\n  try {\n    delete sessions[sessionId];\n  } catch {}\n})();\n"
        },
        "type": "TextExpression"
      }
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTvoq0"
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
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
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
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTthZ0"
                          },
                          "type": "PreviousStep",
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
      "breakpoint": false,
      "custom_state": "custom.streaming_chats_"
    },
    "type": "SetCustomState",
    "id": "bTthd0"
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
                "0": "(?<=openAi_file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "event_id": "bTsfv0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTvXN1",
          "arg_value": {
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
              "event_id": "bTsfv0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTvXO1",
          "arg_value": {
            "properties": {
              "action_id": "bTthZ0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvXH1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvXm1"
  },
  "1": {
    "properties": {
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
                      "event_id": "bTthY0",
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
    "id": "bTthZ0",
    "name": "Make changes to Chat... (find chat)"
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
                "0": "(?<=claude_file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
          "event_id": "bTsfv0",
          "optional": false,
          "param_id": "bTkdL0",
          "param_name": "data"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTvkt1",
          "arg_value": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=claude_file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
              "event_id": "bTsfv0",
              "optional": false,
              "param_id": "bTkdL0",
              "param_name": "data"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvkn1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvlN1"
  },
  "14": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_returned_an_error",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTthq0"
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
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTthr0"
  },
  "15": {
    "properties": {
      "changes": {
        "0": {
          "key": "log_regex_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_error.body",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTthp0"
                        },
                        "type": "PreviousStep",
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      },
                      "2": "\n\n",
                      "3": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_error.body",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTthq0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "4": ""
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
      }
    },
    "type": "MakeChangeCurrentUser",
    "id": "bTthv0"
  },
  "19": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "action_id": "bTthr0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
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
          "action_id": "bTthr0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "delay": 1,
      "arguments": {
        "0": {
          "param_id": "bTsyN1",
          "arg_value": {
            "properties": {
              "action_id": "bTthr0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTthR0"
    },
    "type": "ScheduleCustom",
    "id": "bTtiD0"
  },
  "20": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "action_id": "bTthr0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUiZ0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "delay": 3,
      "arguments": {
        "0": {
          "param_id": "bTVEO0",
          "arg_value": {
            "properties": {
              "action_id": "bTthr0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      },
      "breakpoint": false,
      "custom_event": "bTnWa0"
    },
    "type": "ScheduleCustom",
    "id": "bTtiH0"
  },
  "10": {
    "properties": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTthk0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "files_list_custom_file",
          "value": {
            "properties": {
              "action_id": "bTthk0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "action": "add"
        }
      },
      "to_change": {
        "properties": {
          "action_id": "bTthZ0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTthl0"
  },
  "21": {
    "properties": {
      "AAh": {
        "entries": {
          "0": "window.striming=false;"
        },
        "type": "TextExpression"
      }
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTwWT2"
  },
};
