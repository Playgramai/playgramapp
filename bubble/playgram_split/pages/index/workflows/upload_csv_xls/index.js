export const upload_csv_xls = {
  "properties": {
    "event_name": "upload_csv_xls",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTtKV",
        "param_name": "file"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTtKZ",
        "param_name": "signed_url"
      }
    },
    "return_types": {
      "0": {
        "display": "file",
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "return_id": "bTtLu"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTtKP",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
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
                          "0": "xls,xlsx"
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
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTtKP",
            "optional": false,
            "param_id": "bTtKV",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAx": "api.1740490319760x532465200450502660.plugin_api.ABA",
        "AAy": {
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
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTtKP",
                            "optional": false,
                            "param_id": "bTtKZ",
                            "param_name": "signed_url"
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
                          "properties": {
                            "btype_id": "file",
                            "event_id": "bTtKP",
                            "optional": false,
                            "param_id": "bTtKV",
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
                "btype_id": "text",
                "event_id": "bTtKP",
                "optional": false,
                "param_id": "bTtKZ",
                "param_name": "signed_url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "1740490319760x532465200450502660-AAw",
      "id": "bTtKa",
      "name": "Excel to JSON"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "csv",
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
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTtKP",
            "optional": false,
            "param_id": "bTtKV",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAt": {
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
                            "btype_id": "text",
                            "event_id": "bTtKP",
                            "optional": false,
                            "param_id": "bTtKZ",
                            "param_name": "signed_url"
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
                          "properties": {
                            "btype_id": "file",
                            "event_id": "bTtKP",
                            "optional": false,
                            "param_id": "bTtKV",
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
                "btype_id": "text",
                "event_id": "bTtKP",
                "optional": false,
                "param_id": "bTtKZ",
                "param_name": "signed_url"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AAv": "api.1740490319760x532465200450502660.plugin_api.AAu"
      },
      "type": "1740490319760x532465200450502660-AAo",
      "id": "bTtKf"
    },
    "2": {
      "properties": {
        "breakpoint": true,
        "params_text": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "content": {
                                        "entries": {
                                          "0": {
                                            "type": "InjectedValue",
                                            "is_slidable": false
                                          }
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
                                  "name": "_p_data.columns",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "json",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTtKf"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "2": "\n",
                            "3": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "content": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "_p_value",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "_p_columns",
                                              "is_slidable": false
                                            },
                                            "type": "InjectedValue",
                                            "is_slidable": false
                                          }
                                        },
                                        "type": "TextExpression"
                                      },
                                      "delimiter": {
                                        "entries": {
                                          "0": "\n"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "format_as_text",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "_p_data.rows",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "json",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTtKf"
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
                    },
                    "2": "",
                    "3": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "_p_value",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "json",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTtKa"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "2": "\n"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText",
                      "said": "a2Vsdm8tMzE4ODQ="
                    },
                    "4": ""
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
        "params_file_name": {
          "entries": {
            "0": {
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
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTtKP",
                "optional": false,
                "param_id": "bTtKV",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_file_type": {
          "entries": {
            "0": {
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
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTtKP",
                "optional": false,
                "param_id": "bTtKV",
                "param_name": "file"
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
      "type": "apiconnector2-bTMBs0.bTilQ",
      "id": "bTtLn"
    },
    "3": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTtLu",
            "return_value": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.response.txt_file",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtLn"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTtLv"
    }
  },
};
