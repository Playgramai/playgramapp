export const actions = {
  "0": {
    "properties": {
      "condition": {
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
        "properties": {
          "btype_id": "text",
          "event_id": "bTtNN0",
          "optional": false,
          "param_id": "bTjCg",
          "param_name": "signed_url"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "AAx": "api.1740490319760x532465200450502660.plugin_api.ABA",
      "AAy": {
        "entries": {
          "0": "",
          "1": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNN0",
              "optional": false,
              "param_id": "bTjCg",
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
    "id": "bTtTT0"
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
      "AAt": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNN0",
              "optional": false,
              "param_id": "bTjCg",
              "param_name": "signed_url"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "1": ""
        },
        "type": "TextExpression"
      },
      "AAv": "api.1740490319760x532465200450502660.plugin_api.AAu"
    },
    "type": "1740490319760x532465200450502660-AAo",
    "id": "bTtNP0"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": "pptx",
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
      "ABC": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNN0",
              "optional": false,
              "param_id": "bTjCg",
              "param_name": "signed_url"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "ABE": "api.1740490319760x532465200450502660.plugin_api.ABG"
    },
    "type": "1740490319760x532465200450502660-ABF",
    "id": "bTtNT0"
  },
  "3": {
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
                        "0": "docx,doc"
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
      "AAc": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNN0",
              "optional": false,
              "param_id": "bTjCg",
              "param_name": "signed_url"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "AAf": "api.1740490319760x532465200450502660.plugin_api.AAe"
    },
    "type": "1740490319760x532465200450502660-AAZ",
    "id": "bTtNU0"
  },
  "4": {
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
  },
  "5": {
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
                        "0": "json,ts"
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
              "provider": "apiconnector2.bTqjJ0.bTqjK0",
              "url_params_file_url": {
                "entries": {
                  "0": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTtNN0",
                      "optional": false,
                      "param_id": "bTjCg",
                      "param_name": "signed_url"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI"
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
            "said": "a2Vsdm8tMzE4ODQ=",
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
            "said": "a2Vsdm8tMzE4ODQ=",
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
            "said": "a2Vsdm8tMzE4ODQ=",
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
    "id": "bTtNZ0"
  },
  "6": {
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
  },
  "7": {
    "properties": {
      "params_file": {
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
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTtNN0",
                                          "optional": false,
                                          "param_id": "bTjCg",
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
      "url_params_upload_url": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_headers.x-goog-upload-url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTtNa0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTSAY",
    "id": "bTtNb0"
  },
  "8": {
    "properties": {
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "headers_X-Goog-Upload-Header-Content-Length": {
        "entries": {
          "0": {
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
                      "0": "(?<=Current size is )\\d+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "Message",
              "name": "_api_c2_error.body",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTtNb0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTPPd",
    "id": "bTtNf0"
  },
  "9": {
    "properties": {
      "params_file": {
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
                                        "properties": {
                                          "btype_id": "text",
                                          "event_id": "bTtNN0",
                                          "optional": false,
                                          "param_id": "bTjCg",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "url_params_upload_url": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_headers.x-goog-upload-url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTtNf0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTSAY",
    "id": "bTtNg0"
  },
  "10": {
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
                          "next": {
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
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.file.name",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTtNg0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "url_to_delete": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
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
    "type": "DeleteUploadedFile",
    "id": "bTtNh0"
  },
  "11": {
    "properties": {
      "return_values": {
        "0": {
          "return_id": "bTjCr",
          "return_value": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_body.file.uri",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTtNg0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        },
        "1": {
          "return_id": "bTjCs",
          "return_value": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=Current size is )\\d+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "Message",
              "name": "_api_c2_error.body",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTtNb0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "2": {
          "return_id": "bTjCt",
          "return_value": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_body.file.name",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTtNg0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          }
        }
      }
    },
    "type": "TerminateWorkflow",
    "id": "bTtNl0"
  }
};
