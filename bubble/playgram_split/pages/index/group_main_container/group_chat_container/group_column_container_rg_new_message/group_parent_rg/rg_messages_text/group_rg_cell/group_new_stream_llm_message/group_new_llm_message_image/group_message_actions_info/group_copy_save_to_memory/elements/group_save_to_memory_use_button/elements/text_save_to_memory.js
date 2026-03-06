export const Text_Save_to_memory = {
  "properties": {
    "text": {
      "entries": {
        "0": "Save to memory"
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": -107.5546875,
    "top": 0,
    "width": 100,
    "zindex": 5,
    "is_visible": false,
    "order": 4,
    "fit_width": true,
    "fit_height": true,
    "margin_left": 26,
    "margin_right": 6,
    "single_width": false,
    "min_width_css": "0px",
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "cb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "isnt_clickable",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtau0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtau0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "font_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#555557"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "#acacad"
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
            "name": "dark_mode_boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "is_visible": true,
        "opacity": 100
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
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
                              "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": "true",
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "ElementParent",
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
          "name": "custom.current_saved_message_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "Saving..."
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": "true",
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
                "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "Remove from memory"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
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
                              "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "ElementParent",
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
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": "true",
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
                        "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "ElementParent",
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
          "name": "custom.current_saved_message_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "Removing..."
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": "true",
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTtau0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "",
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
                                          "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "extract_regex",
                                    "is_slidable": true
                                  },
                                  "type": "ElementParent",
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
                        "type": "Message",
                        "name": "not_contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.current_saved_message_",
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
                "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": "Saved to memory"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTtav0",
  "default_name": "Text OZ",
  "name": "Text Save to memory",
  "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
};
