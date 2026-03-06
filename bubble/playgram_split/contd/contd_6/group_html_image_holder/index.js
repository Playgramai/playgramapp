// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/group_generated_image/elements
import { states } from './states/index.js';

export const group_html_image_holder = {
  "states": states,
  "elements": {
    "bTtjX0": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 3,
        "html": {
          "entries": {
            "0": "<style>\n  .blur-on {\n    filter: blur(80px);\n    transition: filter 0.3s ease;\n\n  }\n  .blur-off {\n    filter: blur(0px);\n  }\n</style>\n\n<div class=\"container-img\" id=\"img-gen\">\n<img class=\"blur-on\" src=\"data:image/png;base64,",
            "1": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUir0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\"  width: \"100%\" height: \"100%\"/>\n</div>\n\n\n"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 2,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "stretch",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
        "collapse_when_hidden": false
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "count",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTtcm0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "CurrentCellsIndex",
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
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUir0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtbj0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=chat_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTtbe0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.new_image_in_chat_",
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
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "stream_ended",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "<#NANI?>"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTiXM0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "html": {
              "entries": {
                "0": "<style>\n  .blur-on {\n    filter: blur(80px);\n    transition: filter 0.3s ease;\n\n  }\n  .blur-off {\n    filter: blur(0px);\n  }\n</style>\n\n<div class=\"container-img\" id=\"img-gen\">\n<img class=\"blur-off\" src=\"data:image/webp;base64,",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUir0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "2": "",
                "3": {
                  "type": "Empty"
                },
                "4": "  \"  width: \"100%\" height: \"100%\"/>\n</div>\n\n"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "HTML",
      "id": "bTtbf0",
      "default_name": "HTML O",
      "name": "HTML LLM Image from stream",
      "style": "HTML_default_"
    },
    "bTuEW0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 4,
        "icon": "feather download",
        "border_roundness": 20,
        "icon_color": "var(--color_primary_contrast_default)",
        "is_visible": false,
        "vertical_centering": true,
        "order": 2,
        "unique_id": {
          "entries": {
            "0": "download-icon"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "padding_top": 5,
        "padding_left": 5,
        "single_width": true,
        "min_width_css": "30px",
        "padding_right": 5,
        "single_height": true,
        "min_height_css": "30px",
        "padding_bottom": 5,
        "horiz_alignment": "flex-end",
        "nonant_alignment": "ca",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTtbe0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTtjQ0"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUir0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTtzY0",
      "current_parent": "bTtjQ0",
      "default_name": "Icon B",
      "name": "Icon feather download",
      "style": "Icon_standard_icon_"
    },
    "bTuEX0": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 2,
        "html": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "<style>\n.container-img {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n#img-gen{\nbackground: #000000;\n}\n</style>\n\n\n<div class=\"container-img\" id=\"db-img\">\n<img src=\"",
                        "1": {
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "2": "\" onerror=\"this.style.display='none'\" width: \"100%\" height: \"100%\"/>\n</div>\n\n"
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
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "is_visible": true,
        "vertical_centering": true,
        "order": 3,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "stretch",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "cb",
        "collapse_when_hidden": false
      },
      "type": "HTML",
      "id": "bTtjK0",
      "current_parent": "bTtbe0",
      "default_name": "HTML B",
      "name": "HTML LLM Image from DB",
      "style": "HTML_default_"
    }
  },
  "properties": {
    "height": 400,
    "left": 0,
    "top": 0,
    "width": 361.3360625,
    "zindex": 57,
    "data_source": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": {
              "next": {
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
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "https://playgram-version-test.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "https://frala.b-cdn.net/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "properties": {
                                  "name": "AppIsTest"
                                },
                                "type": "PageData",
                                "is_slidable": false
                              },
                              "2": "",
                              "3": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "first_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "separator": {
                                        "entries": {
                                          "0": ";"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "split_by",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTUiv0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "4": "/",
                              "5": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": {
                                              "next": {
                                                "properties": {
                                                  "formatting_for_true": {
                                                    "entries": {
                                                      "0": "https://playgram-version-test.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "formatting_for_false": {
                                                    "entries": {
                                                      "0": "https://frala.b-cdn.net/"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "format_boolean",
                                                "is_slidable": true
                                              },
                                              "properties": {
                                                "name": "AppIsTest"
                                              },
                                              "type": "PageData",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            }
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "regex": {
                                      "entries": {
                                        "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                              "6": ""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
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
                    "properties": {
                      "find": {
                        "entries": {
                          "0": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "https://playgram-version-test.b-cdn.net/"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "https://frala.b-cdn.net/"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "properties": {
                              "name": "AppIsTest"
                            },
                            "type": "PageData",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=llm_reply_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "stretch",
    "button_disabled": true,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "name": "Group HTML Image holder",
  "style": "Group_transparent_",
  "default_name": "Group C",
  "id": "bTtjQ0",
  "type": "Group",
};
