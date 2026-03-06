export const apiconnector2_bthff0_btppd = {
  "properties": {
    "breakpoint": true,
    "body_params_name": {
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
                            "next": {
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
                          "name": "_api_c2_body.response.txt_file",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtNZ0"
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
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
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
                                        "name": "_api_c2_body.response.txt_file",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "action_id": "bTtNV0"
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
                                        "btype_id": "file",
                                        "event_id": "bTtNN0",
                                        "optional": false,
                                        "param_id": "bTjCP",
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
                          "type": "Message",
                          "name": "_api_c2_body.response.txt_file",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtNV0"
                        },
                        "type": "PreviousStep",
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
            "name": "_api_c2_body.response.txt_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtNZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Type": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "text/plain"
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
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "text/plain"
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
                                                        "name": "bunny_url_text",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "file",
                                                        "event_id": "bTtNN0",
                                                        "optional": false,
                                                        "param_id": "bTjCP",
                                                        "param_name": "file"
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
                                      "type": "OptionValue",
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
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "_api_c2_body.response.txt_file",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtNV0"
                        },
                        "type": "PreviousStep",
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
            "name": "_api_c2_body.response.txt_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtNZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "headers_X-Goog-Upload-Header-Content-Length": {
      "entries": {
        "0": "1"
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTPPd",
  "id": "bTtNa0"
};
