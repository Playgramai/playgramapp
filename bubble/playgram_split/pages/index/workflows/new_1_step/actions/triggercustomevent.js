export const triggercustomevent = {
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
              "event_id": "bTnZH0",
              "optional": true,
              "param_id": "bTaeV0",
              "param_name": "regenerate"
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
      "properties": {
        "btype_id": "file",
        "event_id": "bTnZH0",
        "optional": true,
        "param_id": "bTQSU0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "arguments": {
      "0": {
        "param_id": "bTQRX0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTQRY0",
        "arg_value": {
          "properties": {
            "btype_id": "file",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTQSU0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "2": {
        "param_id": "bTQRj0",
        "arg_value": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnZH0",
            "optional": false,
            "param_id": "bTPGF",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "3": {
        "param_id": "bTQTz0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "provider",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTnZH0",
            "optional": false,
            "param_id": "bTQFp0",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "4": {
        "param_id": "bTTCp",
        "arg_value": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "5": {
        "param_id": "bTtuJ0",
        "arg_value": {
          "next": {
            "next": {
              "args": "cdn.bubble.io",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "",
                      "1": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "https://playgram-version-test.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "https://frala.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "name": "AppIsTest"
                                },
                                "type": "PageData",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "2": "",
                              "3": {
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
                                          "0": ";"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTUiv0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "4": "/",
                              "5": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "find": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": "https://playgram-version-test.b-cdn.net/"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "formatting_for_false": {
                                                  "entries": {
                                                    "0": "https://frala.b-cdn.net/"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "format_boolean",
                                              "is_slidable": true
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
                                    "type": "Message",
                                    "name": "find_replace",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "file",
                                  "event_id": "bTnZH0",
                                  "optional": true,
                                  "param_id": "bTQSU0",
                                  "param_name": "file"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "6": ""
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
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTQSU0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "6": {
        "param_id": "bTwEI0",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTwEC0",
            "param_name": "file_path"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTttr0"
  },
  "type": "TriggerCustomEvent",
  "id": "bTnZP0"
};
