export const apiconnector2_btmbs0_btilq = {
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
                      "0": "csv,pptx,docx,doc,xls,xlsx"
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
                            "action_id": "bTtNP0"
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
                            "action_id": "bTtNP0"
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
                            "action_id": "bTtTT0"
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
                "4": "",
                "5": {
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
                    "action_id": "bTtNT0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "6": "",
                "7": {
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
                    "action_id": "bTtNU0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "8": ""
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
  "id": "bTtNV0"
};
