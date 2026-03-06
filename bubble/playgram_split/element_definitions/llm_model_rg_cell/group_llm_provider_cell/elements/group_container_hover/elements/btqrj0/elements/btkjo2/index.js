export const bTkjo2 = {
  "properties": {
    "height": 240,
    "left": -120,
    "top": -40,
    "width": 240,
    "zindex": 14,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765270340432x552650421859642900/chevron-right.svg"
      },
      "type": "TextExpression"
    },
    "order": 4,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "16px",
    "single_height": false,
    "min_height_css": "240px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "use_aspect_ratio": true,
    "aspect_ratio_width": 1,
    "aspect_ratio_height": 1,
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDv0"
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
                "type": "Message",
                "name": "models",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_empty",
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_contained_by_list",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTPAS0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765276826518x512710618705769300/Checkmark%20%281%29.svg"
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
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "models",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_contained_by_list",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "default_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
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
                  "type": "Message",
                  "name": "and_",
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
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTPAS0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbDp0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765276831649x669915518376686300/chevron-right%20%281%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "provider",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
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
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765271054637x661581050630262160/Checkmark%20%281%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "provider",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
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
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "models",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_contained_by_list",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTPAS0",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTbDp0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
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
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765271095642x876054981084439300/Checkmark%20%281%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTkiz2",
  "default_name": "Image A",
  "style": "Image_standard_image_",
};
