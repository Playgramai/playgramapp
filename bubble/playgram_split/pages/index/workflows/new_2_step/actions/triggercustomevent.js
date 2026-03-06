export const triggercustomevent = {
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
};
