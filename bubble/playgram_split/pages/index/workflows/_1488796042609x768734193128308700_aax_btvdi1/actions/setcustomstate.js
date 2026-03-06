export const setcustomstate = {
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
};
