export const group_chat_type_container = {
  "properties": {
    "height": 0,
    "left": 200,
    "top": 16,
    "width": 0,
    "zindex": 7,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 962,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_left": 0,
        "max_width_css": "108px"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 540,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_left": 0,
        "min_width_css": "30%"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 400,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_left": 0,
        "min_width_css": "108px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTOYW0",
  "default_name": "Group W",
  "elements": {
    "bTkFn": {
      "properties": {
        "text": {
          "entries": {
            "0": "Type"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_size": 12,
        "is_visible": false,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "margin_bottom": 4,
        "min_width_css": "100%",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 540,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTMGw",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTkEO",
      "current_parent": "bTOYW0",
      "default_name": "Text D",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTOYc0": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
                            "properties": {
                              "option_set": "option.memory_type__os_",
                              "option_value": "uploaded0"
                            },
                            "type": "OptionValue",
                            "said": "a2Vsdm8tMzE4ODQ="
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
                                "args": "true",
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "type": "Message",
                                            "name": "display",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "option_set": "option.memory_type__os_",
                                            "option_value": "manual"
                                          },
                                          "type": "OptionValue"
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
                                            "name": "display",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "option_set": "option.memory_type__os_",
                                            "option_value": "auto_saved"
                                          },
                                          "type": "OptionValue",
                                          "said": "a2Vsdm8tMzE4ODQ="
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
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAI",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTiKt2"
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
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiKz2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -192.71875,
        "top": -16,
        "width": 100,
        "zindex": 5,
        "border_color": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "#3a3b3c"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": ""
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
            "name": "get_AAI",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiLT2"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "border_roundness": 16,
        "font_color": "var(--color_bTkRL4_default)",
        "font_size": 12,
        "line_height": 1.4,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(42,42,45,1)",
        "border_style": "none",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 2,
        "padding_left": 8,
        "single_width": false,
        "max_width_css": "150px",
        "min_width_css": "0px",
        "padding_right": 8,
        "single_height": false,
        "max_height_css": "28px",
        "min_height_css": "0px",
        "padding_bottom": 2,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTsrp2_default)",
            "bgcolor": "var(--color_bTsrr2_default)"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAI",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTiLT2"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "border_color": "var(--color_bTGzr_default)",
            "border_style": "solid"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTOVV0",
      "default_name": "Text Z"
    }
  },
  "name": "Group Chat Type Container",
  "style": "Group_transparent_"
};
