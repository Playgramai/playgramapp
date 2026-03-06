import { elements } from './elements/index.js';

export const rg_memory = {
  "elements": elements,
  "properties": {
    "height": 350,
    "width": 280,
    "zindex": 17,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "data_source": {
      "next": {
        "next": {
          "properties": {
            "separator": {
              "entries": {
                "0": "<#NANI?#>"
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
        "element_id": "bTiJm2"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "text",
    "is_visible": true,
    "rows": 20,
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "separator_style": "solid",
    "border_style": "solid",
    "order": 1,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rgMemory"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": true,
    "margin_right": 5,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "stable_pagination": true,
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
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
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.memory_type__os_",
                "option_value": "auto_saved"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.memory_type__os_",
                        "option_value": "manual"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTOUC0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 3,
                        "type": "Message",
                        "name": "less_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "length",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNnb"
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
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTOUC0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "properties": {
              "separator": {
                "entries": {
                  "0": "<#NANI?#>"
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
                "0": "",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "find": {
                              "entries": {
                                "0": "\\](?!.*\\])"
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
                          "find": {
                            "entries": {
                              "0": "^\\["
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": ""
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
                        "find": {
                          "entries": {
                            "0": ",{\"_additional\":"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "<#NANI?#>{\"_additional\":"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiIw2"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": 3,
              "type": "Message",
              "name": "greater_or_equal_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "length",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNnb"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "separator": {
                  "entries": {
                    "0": "<#NANI?#>"
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
            "element_id": "bTiZj2"
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
        "border_color": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTNkt",
  "current_parent": "bTNkb",
  "default_name": "RepeatingGroup D",
  "name": "RG Memory",
  "style": "RepeatingGroup_transparent_",
};
