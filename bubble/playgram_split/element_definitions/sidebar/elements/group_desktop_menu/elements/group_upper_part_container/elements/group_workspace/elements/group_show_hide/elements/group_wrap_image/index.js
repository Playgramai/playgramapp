export const group_wrap_image = {
  "properties": {
    "height": 28,
    "left": 0,
    "top": 0,
    "width": 28,
    "zindex": 6,
    "vertical_centering": true,
    "fit_width": false,
    "fit_height": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTtMe2",
  "default_name": "Group MZZ",
  "elements": {
    "bTtMk2": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 2,
        "is_visible": false,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387796835x613954137136434000/Frame%201%20%281%29%201.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
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
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_false",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "dark_mode_boolean",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
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
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387812852x834432874195267600/Icon%20Wrap%201%20%281%29%201.svg"
              },
              "type": "TextExpression"
            },
            "margin_left": 4
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
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
                            "name": "dark_mode_boolean",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387822062x742616714135989400/Frame%201%207%201.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_false",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "dark_mode_boolean",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
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
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387830786x342125153110829400/Icon%20Wrap%201%201%201.svg"
              },
              "type": "TextExpression"
            },
            "margin_left": 4
          },
          "type": "State"
        },
        "4": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": 768,
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_false",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "dark_mode_boolean",
                            "is_slidable": false
                          },
                          "type": "CurrentUser",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTHoP",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.expand_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768387812852x834432874195267600/Icon%20Wrap%201%20%281%29%201.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTkgD2",
      "default_name": "Image L",
      "name": "Image wrap",
      "style": "Image_standard_image_"
    },
    "bTtMl2": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 1,
        "is_visible": false,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769005445366x684615108651710500/Frame%201%20%281%29%201.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
            "said": "a2Vsdm8tMzE4ODQ=",
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
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004827920x661032460336928900/Icon%20Wrap%201%20%281%29%201.svg"
              },
              "type": "TextExpression"
            },
            "margin_left": 4
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004855581x597205822309974100/Frame%201%207%201.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
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
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.open__",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004872383x606393955801750700/Icon%20Wrap%201%201%201.svg"
              },
              "type": "TextExpression"
            },
            "margin_left": 4
          },
          "type": "State"
        },
        "4": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": 768,
                      "next": {
                        "args": {
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
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTHoP",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.expand_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769004952006x505898945741580800/Icon%20Wrap%201%20%281%29%201.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTtMY2",
      "current_parent": "bTHpr",
      "default_name": "Image AZ",
      "name": "Image wrap light mode",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group wrap image",
  "style": "Group_transparent_",
};
