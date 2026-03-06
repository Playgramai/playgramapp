export const group_current_llm_model_use_data = {
  "properties": {
    "height": 20,
    "left": 54.5,
    "top": 393,
    "width": 31,
    "zindex": 9,
    "data_source": {
      "next": {
        "next": {
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
                  "next": {
                    "args": {
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
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "",
                                            "1": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "display",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "llm_model_option_llm_models__os_",
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
                                                  "next": {
                                                    "properties": {
                                                      "formatting_for_true": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "display",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "custom.default_model_",
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
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "display",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "default_model_option_llm_models__os_",
                                                              "is_slidable": false
                                                            },
                                                            "type": "CurrentUser",
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
                                                "name": "custom.default_model_",
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
                                  "name": "llm_model_option_llm_models__os_",
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "display",
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
        "option_set": "option.llm_models__os_",
        "option_value": "all values"
      },
      "type": "OptionValue"
    },
    "group_type": "option.llm_models__os_",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHAa_default)",
    "order": 25,
    "fit_width": false,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "30px",
    "single_height": false,
    "min_height_css": "30px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTcdF",
  "current_parent": "bTUiS0",
  "default_name": "Group RZZZ",
  "name": "Group current llm model (use data)",
  "style": "Group_transparent_"
};
