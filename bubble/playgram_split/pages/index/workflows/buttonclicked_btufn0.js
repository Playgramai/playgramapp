export const ButtonClicked_bTuFN0 = {
  "properties": {
    "element_id": "bTtjQ0"
  },
  "type": "ButtonClicked",
  "id": "bTuFL0",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
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
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "4": "/",
                          "5": {
                            "next": {
                              "next": {
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
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                              "element_id": "bTtbe0"
                            },
                            "type": "GetElement",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "6": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "data:image/png;base64,",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUir0"
                            },
                            "type": "GetElement",
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
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
            "element_id": "bTtbe0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTuEb0"
      },
      "type": "DisplayGroupData",
      "id": "bTuFR0"
    },
    "1": {
      "properties": {
        "element_id": "bTuEb0"
      },
      "type": "ShowElement",
      "id": "bTuFT0"
    },
    "2": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-generated-image-preview\");\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwQB5"
    }
  }
};
