export const state_1 = {
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": "Qwen3 235B A22B Thinking",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 47,
                    "next": {
                      "args": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "{session_id: \"",
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
                              "2": "\""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
                          }
                        },
                        "type": "ArbitraryText"
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "truncated",
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
              "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "type": "Message",
      "name": "get_group_data",
      "is_slidable": false
    },
    "properties": {
      "element_id": "bTiXM0"
    },
    "type": "GetElement",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "properties": {
    "html": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "properties": {
                                            "find": {
                                              "entries": {
                                                "0": "(?<!\")\\)'>Copy"
                                              },
                                              "type": "TextExpression"
                                            },
                                            "replace": {
                                              "entries": {
                                                "0": "\")'>Copy"
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
                                          "find": {
                                            "entries": {
                                              "0": "\"\")'>Copy"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "replace": {
                                            "entries": {
                                              "0": "\")'>Copy"
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
                                            "0": "')'>Copy"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "replace": {
                                          "entries": {
                                            "0": "\")'>Copy"
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
                                          "0": "copyCanvasText('"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "replace": {
                                        "entries": {
                                          "0": "copyCanvasText(\""
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
                                        "0": "copyCanvasText(canvas"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "replace": {
                                      "entries": {
                                        "0": "copyCanvasText(\"canvas"
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
                                      "0": "()"
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
                                    "0": "\\[[^\\]]+\\]\\(https?:\\/\\/[^\\)]+\\)"
                                  },
                                  "type": "TextExpression"
                                },
                                "replace": {
                                  "entries": {
                                    "0": "<a href=\"",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "first_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "regex": {
                                            "entries": {
                                              "0": "(?<=\\()https?:\\/\\/[^)]+(?=\\))"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "extract_regex",
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
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "regex": {
                                                      "entries": {
                                                        "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
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
                                            "2": ""
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "ArbitraryText",
                                      "said": "a2Vsdm8tMzE4ODQ="
                                    },
                                    "2": "\" target=\"_blank\">",
                                    "3": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "properties": {
                                              "regex": {
                                                "entries": {
                                                  "0": "(?<=\\[)[^\\]]+(?=\\])"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "extract_regex",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "first_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "regex": {
                                            "entries": {
                                              "0": "\\[[^\\]]+\\]\\((https?:\\/\\/[^)\\]]+)\\)"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "extract_regex",
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
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "regex": {
                                                      "entries": {
                                                        "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "get_group_data",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "element_id": "bTiXM0"
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
                                      "type": "ArbitraryText",
                                      "said": "a2Vsdm8tMzE4ODQ="
                                    },
                                    "4": "</a>"
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
                              "find": {
                                "entries": {
                                  "0": "overflow-x: auto;"
                                },
                                "type": "TextExpression"
                              },
                              "replace": {
                                "entries": {
                                  "0": "overflow-x: hidden;"
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
                                "0": "</script"
                              },
                              "type": "TextExpression"
                            },
                            "replace": {
                              "entries": {
                                "0": "&lt;/script"
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
                              "0": "<script"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": "&lt;script"
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
                            "0": "code_interpreter_required"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "last_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "</think>"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "split_by",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "State",
};
