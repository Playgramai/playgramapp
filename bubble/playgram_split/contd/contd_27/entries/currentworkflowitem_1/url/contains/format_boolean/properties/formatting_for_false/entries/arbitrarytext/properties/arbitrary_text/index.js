// Original path: pages/index/workflows/new_start_stream/actions/run_javascript_2/properties/aah/entries/arbitrarytext_2/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_true/entries/currentworkflowitem_2/contains/and/format_boolean/properties/formatting_for_true
export const arbitrary_text = {
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
          "args": {
            "properties": {
              "option_set": "option.chat_type__os_",
              "option_value": "team"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "signed_url_token_text",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "organization_custom_organization",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.chat",
                      "event_id": "bTnWy0",
                      "optional": false,
                      "param_id": "bTPGd",
                      "param_name": "chat"
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
                        "args": {
                          "properties": {
                            "option_set": "option.chat_type__os_",
                            "option_value": "personal"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
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
                              "event_id": "bTnWy0",
                              "optional": false,
                              "param_id": "bTPGd",
                              "param_name": "chat"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "type": "Message",
                                      "name": "signed_url_token_text",
                                      "is_slidable": false
                                    },
                                    "type": "CurrentUser",
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
                                        "name": "signed_url_token_text",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "project_custom_project",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "custom.chat",
                                      "event_id": "bTnWy0",
                                      "optional": false,
                                      "param_id": "bTPGd",
                                      "param_name": "chat"
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
                          "name": "or_",
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
                      "event_id": "bTnWy0",
                      "optional": false,
                      "param_id": "bTPGd",
                      "param_name": "chat"
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnWy0",
        "optional": false,
        "param_id": "bTPGd",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "4": "/",
    "5": {
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
                        "properties": {
                          "find": {
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
                              "2": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "png_image_text",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.file",
                      "event_id": "bTnWy0",
                      "optional": true,
                      "param_id": "bTQSV0",
                      "param_name": "file"
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
                      "btype_id": "image",
                      "event_id": "bTnWy0",
                      "optional": true,
                      "param_id": "bTcNt",
                      "param_name": "user_image"
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
        "type": "Message",
        "name": "png_image_text",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.file",
        "event_id": "bTnWy0",
        "optional": true,
        "param_id": "bTQSV0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "6": ""
  },
  "type": "TextExpression",
};
