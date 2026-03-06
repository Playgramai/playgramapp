export const triggercustomevent = {
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
};
