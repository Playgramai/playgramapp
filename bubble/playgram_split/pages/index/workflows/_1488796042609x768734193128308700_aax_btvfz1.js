export const _1488796042609x768734193128308700_AAX_bTvFZ1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "rg_Enter",
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTulV1"
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
    "element_id": "bTuQJ1",
    "wf_folder": "bTupd1"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTvFD1",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.setPopupSource(\"",
            "1": {
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
                  "next": {
                    "type": "Message",
                    "name": "display",
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
                "element_id": "bTulV1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\");\n\nwindow.bubble_fn_shortcut && window.bubble_fn_shortcut(\"",
            "3": {
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
                  "next": {
                    "type": "Message",
                    "name": "display",
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
                "element_id": "bTulV1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "4": "\");"
          },
          "type": "TextExpression"
        },
        "AAi": true
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvFI1"
    },
    "1": {
      "properties": {
        "condition": {
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
              "next": {
                "next": {
                  "args": "popup",
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "display",
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
            "element_id": "bTulV1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTvFJ1"
    },
    "2": {
      "properties": {
        "condition": {
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
              "next": {
                "next": {
                  "args": "popup",
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "display",
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
            "element_id": "bTulV1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTvFN1"
    },
    "3": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.__scActiveGroup = \"",
            "1": {
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
                  "next": {
                    "next": {
                      "args": "popup_palette",
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "rg-shortcuts"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "",
                              "1": {
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
                                    "next": {
                                      "next": {
                                        "args": "popup_models",
                                        "next": {
                                          "properties": {
                                            "formatting_for_true": {
                                              "entries": {
                                                "0": "rg-sc-models"
                                              },
                                              "type": "TextExpression"
                                            },
                                            "formatting_for_false": {
                                              "entries": {
                                                "0": "",
                                                "1": {
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
                                                      "next": {
                                                        "next": {
                                                          "args": "popup_models",
                                                          "next": {
                                                            "properties": {
                                                              "formatting_for_true": {
                                                                "entries": {
                                                                  "0": "rg-sc-chats"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "rg-sc-projects"
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
                                                        "name": "display",
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
                                                    "element_id": "bTulV1"
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
                                        "name": "contains",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "display",
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
                                  "element_id": "bTulV1"
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
                      "name": "contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "display",
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
                "element_id": "bTulV1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\";"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvFO1"
    },
    "4": {
      "properties": {
        "value": {
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
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_"
      },
      "type": "SetCustomState",
      "id": "bTvFP1"
    },
    "5": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "(function() {\n  const el = document.getElementById('pp-inputSearch');\n  if (!el) return;\n  el.value = '';\n  el.dispatchEvent(new Event('input', { bubbles: true }));\n  el.dispatchEvent(new Event('change', { bubbles: true }));\n})();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvFT1"
    },
    "6": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTvFU1"
    },
    "7": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTvFV1"
    }
  }
};
