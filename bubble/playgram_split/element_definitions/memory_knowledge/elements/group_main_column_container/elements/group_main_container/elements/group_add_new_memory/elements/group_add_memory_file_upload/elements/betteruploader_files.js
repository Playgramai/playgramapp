export const betteruploader_files = {
  "properties": {
    "height": 200,
    "left": 0,
    "top": 0,
    "width": 400,
    "zindex": 3,
    "font_color": "rgba(37,37,37,0)",
    "AAJ": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "AAZ": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": ".",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "2": ""
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
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_advanced_search_constraint",
                          "value": {
                            "next": {
                              "next": {
                                "args": "image",
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "mime_type",
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
                  "type": "OptionValue"
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        }
      },
      "type": "TextExpression"
    },
    "AAj": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": ".",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "2": ""
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
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_advanced_search_constraint",
                          "value": {
                            "next": {
                              "next": {
                                "args": "image",
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "mime_type",
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
                  "type": "OptionValue"
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    },
    "AAl": 5,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "max_height_css": "100%",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true,
    "file_upload_condition": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTcid"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "1648049058728x629621556620034000-AAC",
  "id": "bTchx",
  "current_parent": "bTORB0",
  "default_name": "BetterUploader B",
  "name": "BetterUploader Files"
};
