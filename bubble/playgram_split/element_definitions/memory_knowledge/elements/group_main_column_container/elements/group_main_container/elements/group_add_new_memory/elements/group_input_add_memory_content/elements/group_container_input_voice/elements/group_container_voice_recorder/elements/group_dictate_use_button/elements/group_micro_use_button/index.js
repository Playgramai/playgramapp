export const group_micro_use_button = {
  "properties": {
    "height": 24,
    "left": 0,
    "top": 0,
    "width": 24,
    "zindex": 3,
    "border_roundness": 50,
    "vertical_centering": true,
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "padding_top": 5,
    "padding_left": 5,
    "single_width": false,
    "min_width_css": "30px",
    "padding_right": 5,
    "single_height": false,
    "min_height_css": "30px",
    "padding_bottom": 4,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "bc",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "type": "Group",
  "id": "bTwSL3",
  "current_parent": "bTchf",
  "default_name": "Group TZ",
  "elements": {
    "bTkfn2": {
      "properties": {
        "height": 240,
        "left": 18.5,
        "top": 0,
        "width": 240,
        "zindex": 6,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950146821x244952508787714900/Microphone%20%281%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
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
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAE",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTckm"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950574605x400075364480590140/Close_MD.svg"
              },
              "type": "TextExpression"
            },
            "opacity": 60
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
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAE",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTckm"
                  },
                  "type": "GetElement",
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
              "element_id": "bTwSL3"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766490398084x972828281526264000/Microphone.svg"
              },
              "type": "TextExpression"
            }
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
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTwSL3"
                    },
                    "type": "GetElement",
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
              "name": "get_AAE",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTckm"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1764950574605x400075364480590140/Close_MD.svg"
              },
              "type": "TextExpression"
            },
            "opacity": 100
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTwSN3",
      "default_name": "Image C",
      "name": "Image mic",
      "style": "Image_standard_image_",
      "transitions": {
        "opacity": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTtTZ3": {
      "properties": {
        "height": 240,
        "left": 28.5,
        "top": 10,
        "width": 240,
        "zindex": 6,
        "is_visible": false,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769077163636x524426294362925000/Microphone%20%282%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
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
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_AAE",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTckm"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770642705804x691198049118189300/Close_MD%201.svg"
              },
              "type": "TextExpression"
            },
            "opacity": 60
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
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAE",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTckm"
                  },
                  "type": "GetElement",
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
              "element_id": "bTwSL3"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769077176214x138742019624571440/Microphone%20%283%29%201.svg"
              },
              "type": "TextExpression"
            }
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
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTwSL3"
                    },
                    "type": "GetElement",
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
              "name": "get_AAE",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTckm"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770642713778x481082971498362000/Close_MD%201.svg"
              },
              "type": "TextExpression"
            },
            "opacity": 100
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTwSR3",
      "current_parent": "bTUeo0",
      "default_name": "Image C",
      "name": "Image mic light",
      "style": "Image_standard_image_",
      "transitions": {
        "opacity": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "Group micro (use button)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
