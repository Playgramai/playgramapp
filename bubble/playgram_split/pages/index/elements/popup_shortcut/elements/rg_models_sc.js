export const rg_models_sc = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 2,
    "data_source": {
      "next": {
        "properties": {
          "constraints": {
            "0": {
              "key": "_advanced_search_constraint",
              "value": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "visible",
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
        "option_set": "option.llm_models__os_"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.llm_models__os_",
    "is_visible": false,
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "separator_style": "none",
    "order": 28,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg-sc-models"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": true,
    "single_width": false,
    "min_width_css": "272px",
    "single_height": false,
    "max_height_css": "400px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "30px",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_models",
            "type": "Message",
            "name": "contains",
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
      "properties": {
        "is_visible": true
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 0,
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAa",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulQ1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulQ1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulJ1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulQ1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 0,
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 0,
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAa",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulQ1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAa",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulL1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "_advanced_search_constraint",
                  "value": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_true",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "visible",
                      "is_slidable": false
                    },
                    "type": "InjectedValue",
                    "is_slidable": false
                  },
                  "constraint_type": {
                    "type": "Empty"
                  }
                },
                "1": {
                  "key": "_advanced_search_constraint",
                  "value": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "get_AAa",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTulL1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_contained_by_list",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "provider",
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
            "option_set": "option.llm_models__os_"
          },
          "type": "AllOptionValue",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTukh1",
  "current_parent": "bTpjO",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bTpnQ": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "provider",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "1": " : ",
            "2": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "3": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 17,
        "border_roundness": 6,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 14,
        "order": 1,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "m-cell-",
            "1": {
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "font_weight": "500",
        "padding_top": 8,
        "margin_right": 4,
        "padding_left": 8,
        "single_width": false,
        "margin_bottom": 8,
        "min_width_css": "0px",
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "0px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTulp1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "convert_to_number",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "hover"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "get_AAV",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTuQJ1"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "args": "arrowIndex",
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
                          "type": "CurrentCellsIndex",
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
              "name": "isnt_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTkRP4_default)",
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.16)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTukl1",
      "default_name": "Text D",
      "name": "Text Current cell's LLM shortcuts",
      "style": "Text_body_16_"
    }
  },
  "name": "RG Models SC",
  "style": "RepeatingGroup_transparent_"
};
