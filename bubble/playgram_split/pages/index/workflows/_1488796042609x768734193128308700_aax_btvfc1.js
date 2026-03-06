export const _1488796042609x768734193128308700_AAX_bTvFC1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "escape",
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "close",
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.text_for_rte_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
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
    "element_id": "bTuQJ1",
    "wf_folder": "bTupd1",
    "breakpoint": false,
    "event_color": "brown",
    "workflow_disabled": false
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTvEd1",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-generated-image-preview",
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
        "element_id": "bTuEb0"
      },
      "type": "HideElement",
      "id": "bTwPw5"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-shortcut",
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
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvEf1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-delete-member",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-member\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwMS"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-delete-invitation",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-invitation\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwMX"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-delete-memory-file",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-memory-file\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvvJ2"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-memory-details",
              "type": "Message",
              "name": "equals",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-memory-details\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvqu"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-delete-memory",
              "type": "Message",
              "name": "equals",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-memory\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvvO2"
    },
    "7": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-shortcut",
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
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTvEj1"
    },
    "8": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
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
              },
              "type": "Message",
              "name": "contains",
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
        "AAh": {
          "entries": {
            "0": "window.stream = \"no\";"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEk1"
    },
    "9": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
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
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "inputReset",
                      "type": "Message",
                      "name": "not_contains",
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "contains",
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
        "AAh": {
          "entries": {
            "0": "window.liteMux.stop(\"",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
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
            "2": "\", { silentIfMissing: true });"
          },
          "type": "TextExpression"
        },
        "AAi": true,
        "breakpoint": true
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEl1"
    },
    "10": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "name": "Website Home"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "name": "This Url"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTwQO5"
    },
    "11": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
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
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "inputReset",
                      "type": "Message",
                      "name": "not_contains",
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "contains",
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
        "AAh": {
          "entries": {
            "0": "window.liteMux.stop(\"",
            "1": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
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
            "2": "\", { silentIfMissing: true });"
          },
          "type": "TextExpression"
        },
        "AAi": true
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEp1"
    },
    "12": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "inputReset",
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
            "0": "document.activeElement.blur();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEq1"
    },
    "13": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
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
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
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
                              },
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "is_not_empty",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "get_group_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTiXM0"
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
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiXM0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "next": {
                    "args": "no",
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "inputReset",
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "args": "close",
                                    "next": {
                                      "args": {
                                        "next": {
                                          "next": {
                                            "args": "stop-response",
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
                                            "args": {
                                              "properties": {
                                                "name": "Website Home"
                                              },
                                              "type": "PageData",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "not_equals",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "name": "This Url"
                                          },
                                          "type": "PageData",
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "yes"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "no"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
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
            "name": "custom.streaming_chats_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTvEr1"
    },
    "14": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "close_popup-user-settings",
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
                        "args": "gf-chat",
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
            "param_id": "bTqev1",
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
        "custom_event": "bTuuJ1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTvEv1"
    },
    "15": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-user-settings-del-archivedChat",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-delete-archiveChat\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvEw1"
    },
    "16": {
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
      "id": "bTvEx1"
    },
    "17": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "close_popup-user-settings",
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
        "AAh": {
          "entries": {
            "0": "(() => {\n  const btn = document.getElementById(\"btn-close-user-settings\");\n  if (btn) btn.click();\n})();\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvFB1"
    }
  }
};
