import { bTkjo2 } from './btkjo2/index.js';

export const elements = {
  "bTkjo2": bTkjo2,
  "bTUJn0": {
    "properties": {
      "height": 1,
      "left": 0,
      "top": 0,
      "width": 1,
      "zindex": 3,
      "is_visible": false,
      "AAD": {
        "entries": {
          "0": "model",
          "1": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
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
                "name": "to_lowercase",
                "is_slidable": false
              },
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "AAE": {
        "entries": {
          "0": "This model can\u2019t be used with uploaded files in chat"
        },
        "type": "TextExpression"
      },
      "AAG": "top left",
      "AAH": "right top",
      "AAI": "dark",
      "AAK": true,
      "AAN": {
        "entries": {
          "0": "model",
          "1": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
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
                "name": "to_lowercase",
                "is_slidable": false
              },
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      },
      "AAe": false,
      "ABS": true,
      "ABT": "var(--color_bTGzr_default)",
      "ABU": "var(--color_bTGzr_default)",
      "ABV": "var(--color_bTGzv_default)",
      "ABW": "var(--color_bTGzr_default)",
      "ABX": "var(--color_primary_contrast_default)",
      "ABY": true,
      "ABZ": {
        "entries": {
          "0": "12"
        },
        "type": "TextExpression"
      },
      "ABa": {
        "entries": {
          "0": "\"Inter\""
        },
        "type": "TextExpression"
      },
      "ABc": 200,
      "ABk": {
        "entries": {
          "0": "4"
        },
        "type": "TextExpression"
      },
      "ABl": {
        "entries": {
          "0": "4"
        },
        "type": "TextExpression"
      },
      "ABm": {
        "entries": {
          "0": "4"
        },
        "type": "TextExpression"
      },
      "ABn": {
        "entries": {
          "0": "4"
        },
        "type": "TextExpression"
      },
      "ABo": {
        "entries": {
          "0": "8"
        },
        "type": "TextExpression"
      },
      "ABp": {
        "entries": {
          "0": "0"
        },
        "type": "TextExpression"
      },
      "order": 6,
      "max_width": 1,
      "min_width": 1,
      "fit_height": false,
      "single_width": true,
      "min_width_css": "20px",
      "single_height": true,
      "use_max_width": true,
      "min_height_css": "20px",
      "horiz_alignment": "flex-start",
      "nonant_alignment": "bc",
      "collapse_when_hidden": true
    },
    "states": {
      "1": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "deepseek"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.llm_providers__os_",
                      "option_value": "alibaba_cloud"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "is_not_empty",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "param_bTYPA0",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTbDp0"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "files_list_custom_file",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTIIn0",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTbDp0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "grok"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "args": {
                                          "next": {
                                            "properties": {
                                              "separator": {
                                                "entries": {
                                                  "0": ","
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "split_by",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "arbitrary_text": {
                                              "entries": {
                                                "0": "png,jpeg,jpg,webp"
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
                                                "type": "Message",
                                                "name": "is_not_empty",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "param_bTYPA0",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "element_id": "bTbDp0"
                                            },
                                            "type": "GetElement",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "and_",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "is_not_contained_by_list",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "last_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": "."
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "file_name",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "param_bTYPA0",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTbDp0"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
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
                        "constraints": {
                          "0": {
                            "key": "mime_type_text",
                            "value": {
                              "next": {
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": ","
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "properties": {
                                "arbitrary_text": {
                                  "entries": {
                                    "0": "png,jpeg,jpg,webp"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "ArbitraryText",
                              "said": "a2Vsdm8tMzE4ODQ="
                            },
                            "constraint_type": "not in"
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "files_list_custom_file",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "param_bTIIn0",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTbDp0"
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
          "type": "ElementParent",
          "is_slidable": false
        },
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "1498171554228x105618760361836540-AAC",
    "id": "bTbEC0",
    "current_parent": "bTQrh0",
    "default_name": "Airtooltip A",
    "name": "Airtooltip Can't use this model"
  },
  "bTkit2": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 1.3984375,
      "width": 0,
      "zindex": 13,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "option.llm_providers__os_",
      "vertical_centering": true,
      "order": 3,
      "row_gap": 2,
      "use_gap": true,
      "fit_width": false,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTkir2",
    "default_name": "Group I",
    "elements": {
      "bTkix2": {
        "properties": {
          "text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "description",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -147.328125,
          "top": 0,
          "width": 100,
          "zindex": 11,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "18px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "editor_preview_text": "DeepSeek",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbEC0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "font_color": "var(--color_bTGzv_default)"
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTkil2",
        "current_parent": "bTbDw0",
        "default_name": "Text D",
        "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
      },
      "bTkiy2": {
        "properties": {
          "text": {
            "entries": {
              "0": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -147.328125,
          "top": 0,
          "width": 100,
          "zindex": 11,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "24px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "editor_preview_text": "DeepSeek",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbEC0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "font_color": "var(--color_bTGzv_default)"
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTbDx0",
        "current_parent": "bTHrb",
        "default_name": "Text A",
        "style": "Text_inter___400___14px___white_"
      }
    },
    "style": "Group_transparent_"
  },
};
