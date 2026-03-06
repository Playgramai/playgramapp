export const html_image_generation_skeleton = {
  "properties": {
    "height": 150,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 56,
    "html": {
      "entries": {
        "0": "<style>\n  .skeleton {\n    position: relative;\n    overflow: hidden;\n    border-radius: 10px;\n    background-color: #303030;\n    width: 100%;\n    height: 100%; /* \u0437\u0430\u0434\u0430\u0451\u0448\u044c \u0441\u0430\u043c \u043f\u043e\u0434 \u043d\u0443\u0436\u043d\u044b\u0439 \u0431\u043b\u043e\u043a */\n  }\n\n  .skeleton::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.15) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n    transform: translateX(-120%);\n    animation: shimmer 1.6s linear infinite;\n    pointer-events: none;\n  }\n\n  @keyframes shimmer {\n    0%   { transform: translateX(-120%); }\n    100% { transform: translateX(120%); }\n  }\n</style>\n\n<!-- \u0421\u0430\u043c \u0431\u043b\u043e\u043a \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d\u0430 -->\n<div class=\"skeleton\"></div>\n"
      },
      "type": "TextExpression"
    },
    "is_visible": false,
    "vertical_centering": true,
    "order": 4,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "400px",
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": "true",
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "args": "gemini",
                              "type": "Message",
                              "name": "not_equals",
                              "is_slidable": false
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
                                            "next": {
                                              "args": 6,
                                              "type": "Message",
                                              "name": "truncated",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "to_lowercase",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "first_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "regex": {
                                            "entries": {
                                              "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                                  "2": ""
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "ArbitraryText"
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
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
                  "next": {
                    "args": {
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
                  "0": "(?<=image_gen_triggered: \")[\\s\\S]*?(?=\"})"
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
          "element_id": "bTiXM0"
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
  "type": "HTML",
  "id": "bTtbj0",
  "current_parent": "bTSpP0",
  "default_name": "HTML O",
  "name": "HTML Image Generation Skeleton",
  "style": "HTML_default_"
};
