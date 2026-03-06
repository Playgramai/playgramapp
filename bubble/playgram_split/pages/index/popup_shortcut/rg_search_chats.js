export const RG_Search_Chats = {
  "properties": {
    "height": 350,
    "left": -12,
    "top": -60,
    "width": 280,
    "zindex": 5,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.1)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.data.Get.Messages_v3",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTukr1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
    "is_visible": false,
    "separator_color": "rgba(var(--color_bTkRL4_default_rgb), 0)",
    "separator_style": "solid",
    "separator_width": 8,
    "border_style": "none",
    "order": 18,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg-sc-chats"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": false,
    "single_width": false,
    "single_height": false,
    "max_height_css": "400px",
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "40px",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
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
                      "name": "get_loading_status",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2__additional.id",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "type": "ThisElement",
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
            "args": "popup_ChatSearch",
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
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTulc1",
  "current_parent": "bTIyz",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bTIGK": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 4,
        "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_bTkRL4_default)",
        "border_style": "none",
        "order": 3,
        "use_gap": true,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "c-cell-",
            "1": {
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "column_gap": 4,
        "fit_height": true,
        "padding_top": 8,
        "margin_right": 4,
        "padding_left": 8,
        "single_width": false,
        "padding_right": 8,
        "single_height": false,
        "min_height_css": "40px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
      },
      "states": {
        "2": {
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
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.16)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTuld1",
      "current_parent": "bTIFr",
      "default_name": "Group P",
      "elements": {
        "bTJCL": {
          "properties": {
            "height": 0,
            "left": 46,
            "top": 15.796875,
            "width": 0,
            "zindex": 4,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
            "is_visible": true,
            "vertical_centering": true,
            "order": 3,
            "row_gap": 4,
            "use_gap": true,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "40px",
            "single_height": false,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTulh1",
          "default_name": "Group P",
          "elements": {
            "bTJCQ": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "<###>"
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
                            "constraints": {
                              "0": {
                                "key": "_advanced_search_constraint",
                                "value": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "_api_c2_chat_id",
                                        "is_slidable": false
                                      },
                                      "type": "ElementParent",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "contains",
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
                        "type": "Message",
                        "name": "get_list_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTuks1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -46,
                "top": -12,
                "width": 100,
                "zindex": 2,
                "font_color": "var(--color_bTkRL4_default)",
                "order": 2,
                "fit_width": false,
                "fit_height": false,
                "font_weight": "500",
                "single_width": false,
                "min_width_css": "0px",
                "single_height": true,
                "max_height_css": "25px",
                "min_height_css": "20px",
                "vert_alignment": "center",
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
                            "properties": {
                              "element_id": "bTuld1"
                            },
                            "type": "GetElement",
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
                    "properties": {
                      "element_id": "bTuld1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "var(--color_bTkRP4_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTuli1",
              "current_parent": "bTJAS",
              "default_name": "Text D",
              "style": "Text_inter___400___14px___white_"
            },
            "bTrDV2": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
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
                          "next": {
                            "next": {
                              "next": {
                                "args": 72,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "args": {
                                                "next": {
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
                                              "next": {
                                                "next": {
                                                  "args": 72,
                                                  "type": "Message",
                                                  "name": "truncated",
                                                  "is_slidable": false
                                                },
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
                                                                  "0": "\n"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "replace": {
                                                                "entries": {
                                                                  "0": " "
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "_api_c2_user_message",
                                                          "is_slidable": false
                                                        },
                                                        "type": "ElementParent",
                                                        "said": "a2Vsdm8tMzE4ODQ=",
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
                                                          "next": {
                                                            "properties": {
                                                              "find": {
                                                                "entries": {
                                                                  "0": "\n"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "replace": {
                                                                "entries": {
                                                                  "0": " "
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "_api_c2_llm_reply",
                                                          "is_slidable": false
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
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "contains",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "_api_c2_user_message",
                                            "is_slidable": false
                                          },
                                          "type": "ElementParent",
                                          "is_slidable": false
                                        },
                                        "2": "..."
                                      },
                                      "type": "TextExpression",
                                      "said": "a2Vsdm8tMzE4ODQ="
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
                                                  "name": "get_data",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "element_id": "bTulJ1"
                                                },
                                                "type": "GetElement",
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
                                                                  "0": "\n"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "replace": {
                                                                "entries": {
                                                                  "0": " "
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "_api_c2_user_message",
                                                          "is_slidable": false
                                                        },
                                                        "type": "ElementParent",
                                                        "said": "a2Vsdm8tMzE4ODQ=",
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
                                                          "next": {
                                                            "properties": {
                                                              "find": {
                                                                "entries": {
                                                                  "0": "\n"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "replace": {
                                                                "entries": {
                                                                  "0": " "
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "type": "Message",
                                                          "name": "_api_c2_llm_reply",
                                                          "is_slidable": false
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
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "type": "Message",
                                              "name": "contains",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "_api_c2_user_message",
                                            "is_slidable": false
                                          },
                                          "type": "ElementParent",
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
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
                                              "0": "\n"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "replace": {
                                            "entries": {
                                              "0": " "
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "find_replace",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "_api_c2_user_message",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "said": "a2Vsdm8tMzE4ODQ=",
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
                                      "next": {
                                        "properties": {
                                          "find": {
                                            "entries": {
                                              "0": "\n"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "replace": {
                                            "entries": {
                                              "0": " "
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "find_replace",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "_api_c2_llm_reply",
                                      "is_slidable": false
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
                            "type": "Message",
                            "name": "format_boolean",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_user_message",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": 0,
                "top": 0,
                "width": 100,
                "zindex": 2,
                "font_color": "var(--color_bTkRL4_default)",
                "is_visible": true,
                "order": 3,
                "fit_width": false,
                "fit_height": false,
                "single_width": false,
                "min_width_css": "0px",
                "single_height": true,
                "max_height_css": "25px",
                "min_height_css": "20px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true
              },
              "states": {
                "1": {
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
                            "properties": {
                              "element_id": "bTuld1"
                            },
                            "type": "GetElement",
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
                    "properties": {
                      "element_id": "bTuld1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "font_color": "var(--color_bTkRP4_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTulj1",
              "current_parent": "bTpqP",
              "default_name": "Text D",
              "name": "Text Group Search Chat (u",
              "style": "Text_inter___400___12px____afafaf_"
            }
          },
          "style": "Group_transparent_"
        }
      },
      "name": "Group Chat Cell",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Search Chats",
  "style": "RepeatingGroup_transparent_"
};
