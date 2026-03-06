export const actions = {
  "0": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "-delete-member",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "-delete-invitation",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTuQJ1"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "-remove-member",
                      "type": "Message",
                      "name": "contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTuQJ1"
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTuQJ1"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTdQv1",
      "arguments": {
        "0": {
          "param_id": "bTwLj",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTwLd"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTwMN"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "popup",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "close",
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "rg",
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "args": "escape",
                                    "type": "Message",
                                    "name": "not_contains",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_AAV",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTpet"
                                },
                                "type": "ThisElement",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "and_",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_AAV",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTpet"
                        },
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "not_contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "popup_AddProjectChat",
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "next": {
                                "args": {
                                  "type": "CurrentUser",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": "popup_AddProjectChat",
                                        "type": "Message",
                                        "name": "equals",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAV",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTpet"
                                    },
                                    "type": "ThisElement",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "and_",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "Created By",
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
                                  "properties": {
                                    "parameter_name": {
                                      "entries": {
                                        "0": "project"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "GetParamFromUrl"
                                },
                                "constraint_type": {
                                  "type": "Empty"
                                }
                              }
                            },
                            "type_to_find": "custom.project"
                          },
                          "type": "Search"
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAV",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTpet"
                  },
                  "type": "ThisElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "popup_AddProjectChat",
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "type": "CurrentUser",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "Created By",
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
                                    "properties": {
                                      "parameter_name": {
                                        "entries": {
                                          "0": "project"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "GetParamFromUrl"
                                  },
                                  "constraint_type": {
                                    "type": "Empty"
                                  }
                                }
                              },
                              "type_to_find": "custom.project"
                            },
                            "type": "Search"
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTpet"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": "popup_AddProjectChat",
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "type": "CurrentUser",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "Created By",
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
                                      "properties": {
                                        "parameter_name": {
                                          "entries": {
                                            "0": "chat"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "GetParamFromUrl"
                                    },
                                    "constraint_type": {
                                      "type": "Empty"
                                    }
                                  }
                                },
                                "type_to_find": "custom.chat"
                              },
                              "type": "Search"
                            },
                            "type": "Message",
                            "name": "and_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_AAV",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTpet"
                      },
                      "type": "ThisElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTtXQ1",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvAX1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvDL1"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "-delete-memory-file",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTUhQ0",
      "arguments": {
        "0": {
          "param_id": "bTvuk2",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvue2"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTvvT2"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "-delete-memory",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "-delete-memory-file",
                    "type": "Message",
                    "name": "not_contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTvvb2",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvvV2"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvvm2"
  },
  "4": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "popup",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "AAh": {
        "entries": {
          "0": "window.setPopupSource(\"",
          "1": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpet"
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "2": "\");\n"
        },
        "type": "TextExpression"
      },
      "AAi": true
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTvDP1"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "hover btn-",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "project",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.empty_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTYHy1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "run btn-",
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "project",
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "is_false",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "custom.empty_",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTYHy1"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "and_",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTpet"
                            },
                            "type": "ThisElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTpet"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTYHy1",
      "arguments": {
        "0": {
          "param_id": "bTqwX",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuuc1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTvDQ1"
  },
  "6": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "hover btn-",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "project",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "custom.empty_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTYHy1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": "run btn-",
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": "project",
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "is_true",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "custom.empty_",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTYHy1"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "and_",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTpet"
                            },
                            "type": "ThisElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_AAV",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTpet"
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "arguments": {
        "0": {
          "param_id": "bTrEd2",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuvA1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTvDR1"
  },
  "7": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "hover btn-us",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "run btn-us",
                    "type": "Message",
                    "name": "contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTUjC0",
      "arguments": {
        "0": {
          "param_id": "bTqxb",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvDj1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTvDV1"
  },
  "8": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "gf-chat",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "element_id": "bTUhv0",
      "arguments": {
        "0": {
          "param_id": "bTqyD",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuwI1"
    },
    "type": "TriggerCustomEventFromReusable",
    "id": "bTvDW1"
  },
  "9": {
    "properties": {
      "value": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpet"
              },
              "type": "ThisElement",
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
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "; ",
                                "1": {
                                  "next": {
                                    "type": "Message",
                                    "name": "get_AAV",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTpet"
                                  },
                                  "type": "ThisElement",
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
                        "name": "custom.shortcut_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
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
                        "name": "custom.shortcut_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "2": "; ",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "get_AAV",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTpet"
                      },
                      "type": "ThisElement",
                      "is_slidable": false
                    },
                    "4": ""
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
          "name": "custom.shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "custom_state": "custom.shortcut_",
      "custom_states_values": {
        "0": {
          "value": {
            "next": {
              "next": {
                "args": "rg",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "properties": {
                              "find": {
                                "entries": {
                                  "0": "\\s+"
                                },
                                "type": "TextExpression"
                              },
                              "use_regex": true
                            },
                            "type": "Message",
                            "name": "find_replace",
                            "is_slidable": true
                          },
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "properties": {
                                            "find": {
                                              "entries": {
                                                "0": "rg_Enter"
                                              },
                                              "type": "TextExpression"
                                            },
                                            "replace": {
                                              "entries": {
                                                "0": ""
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "find_replace",
                                          "is_slidable": true
                                        },
                                        "properties": {
                                          "find": {
                                            "entries": {
                                              "0": "rg_Prev"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "replace": {
                                            "entries": {
                                              "0": ""
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "find_replace",
                                        "is_slidable": true
                                      },
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": "rg_Next"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "replace": {
                                          "entries": {
                                            "0": ""
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "custom.last_shortcut_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTUdV0"
                                  },
                                  "type": "GetElement",
                                  "said": "a2Vsdm8tMzE4ODQ=",
                                  "is_slidable": false
                                },
                                "2": ""
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "2": " ",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTpet"
                          },
                          "type": "ThisElement",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTpet"
                          },
                          "type": "ThisElement",
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
                "name": "contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpet"
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "custom_state": "custom.last_shortcut_"
        }
      }
    },
    "type": "SetCustomState",
    "id": "bTvDX1"
  },
  "10": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "_message",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAV",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTpet"
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTpzW",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTuQJ1"
            },
            "type": "ThisElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuyN1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvDc1"
  },
  "11": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "rg",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": "escape",
                    "type": "Message",
                    "name": "not_contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTpet"
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTpiw",
          "arg_value": {
            "next": {
              "next": {
                "args": "sidebarState",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "sidebarClose"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "sidebarOpen"
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
                            "type": "Message",
                            "name": "custom.open__",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUjC0"
                          },
                          "type": "GetElement",
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
                            "name": "get_AAV",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTpet"
                          },
                          "type": "ThisElement",
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
              "name": "get_AAV",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpet"
            },
            "type": "ThisElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTuxD1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvDb1"
  },
  "12": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_AddProjectChat rg_Enter",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "type": "CurrentUser",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "Created By",
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
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTqFF2",
          "arg_value": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "custom.shortcut_rg_index_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "specific_item",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTukb1"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTqFJ2",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiZ0"
            },
            "type": "GetElement",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTvAJ1"
    },
    "type": "TriggerCustomEvent",
    "id": "bTvDh1"
  }
};
