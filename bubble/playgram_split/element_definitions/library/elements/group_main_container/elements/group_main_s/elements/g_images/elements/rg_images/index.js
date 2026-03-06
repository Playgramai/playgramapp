export const rg_images = {
  "properties": {
    "height": 350,
    "left": -24,
    "top": -82,
    "width": 280,
    "zindex": 28,
    "columns": 4,
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
        "element_id": "bTjyN"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "api.apiconnector2.bTHIF0.bTjyT.body.data.Get.Messages_v3",
    "rows": 3,
    "separator_color": "rgba(150,150,150,0)",
    "separator_style": "solid",
    "separator_width": 16,
    "order": 1,
    "masonry": true,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": true,
    "auto_fit_row": false,
    "row_cell_gap": 5,
    "single_width": true,
    "fixed_columns": true,
    "min_width_css": "100%",
    "single_height": false,
    "auto_fit_column": false,
    "column_cell_gap": 5,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "cell_min_width_css": "100px",
    "cell_min_height_css": "100px",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 1630,
          "type": "Message",
          "name": "less_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjEp1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "columns": 5
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 1420,
          "type": "Message",
          "name": "less_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjEp1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "columns": 4
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 1220,
          "type": "Message",
          "name": "less_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjEp1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "columns": 3
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "args": 1015,
          "type": "Message",
          "name": "less_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTjEp1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "columns": 2
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTjpB1",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bTjpJ1": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 2,
        "data_source": {
          "properties": {
            "arbitrary_text": {
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "",
                "3": {
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
                                      "next": {
                                        "type": "Message",
                                        "name": "signed_url_token_text",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "first_element",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "constraints": {
                                        "0": {
                                          "key": "_id",
                                          "value": {
                                            "next": {
                                              "type": "Message",
                                              "name": "_api_c2_project_id",
                                              "is_slidable": false
                                            },
                                            "type": "ElementParent",
                                            "is_slidable": false
                                          },
                                          "constraint_type": "equals"
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
                                  "element_id": "bTjyZ"
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
                                                  "name": "signed_url_token_text",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "current_organization_custom_organization",
                                                "is_slidable": false
                                              },
                                              "type": "CurrentUser",
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
                                                "type": "Message",
                                                "name": "signed_url_token_text",
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
                                  "name": "_api_c2_organization_id",
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
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_project_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "4": "/",
                "5": {
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
                    "name": "_api_c2_image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "6": ""
              },
              "type": "TextExpression",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "ArbitraryText"
        },
        "group_type": "text",
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "100%",
        "single_height": false,
        "min_height_css": "140px",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTjpH1",
      "default_name": "Group A",
      "elements": {
        "bTjqc1": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 320,
            "zindex": 3,
            "stretch_or_rescale": "zoom",
            "src": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "100%",
            "single_height": false,
            "min_height_css": "140px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "use_aspect_ratio": true,
            "collapse_when_hidden": true
          },
          "type": "Image",
          "id": "bTjpN1",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        },
        "bTpaa2": {
          "properties": {
            "height": 150,
            "left": 0,
            "top": 0,
            "width": 280,
            "zindex": 2,
            "html": {
              "entries": {
                "0": "<style>\n  .skeleton {\n    position: relative;\n    overflow: hidden;\n    border-radius: 10px;\n    background-color: ",
                "1": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#e5e7eb"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#303030"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
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
                "2": " !important;\n    width: 100%;\n    height: 100%; \n  }\n\n  .skeleton::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.15) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n    transform: translateX(-120%);\n    animation: shimmer 1.6s linear infinite;\n    pointer-events: none;\n  }\n\n  @keyframes shimmer {\n    0%   { transform: translateX(-120%); }\n    100% { transform: translateX(120%); }\n  }\n</style>\n\n<!-- \u0421\u0430\u043c \u0431\u043b\u043e\u043a \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d\u0430 -->\n<div class=\"skeleton\"></div>\n"
              },
              "type": "TextExpression"
            },
            "is_visible": true,
            "vertical_centering": true,
            "order": 2,
            "fit_height": false,
            "single_width": false,
            "single_height": false,
            "vert_alignment": "stretch",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "HTML",
          "id": "bTpaV2",
          "current_parent": "bTjpH1",
          "default_name": "HTML A",
          "name": "HTML Image Generation Skeleton",
          "style": "HTML_default_"
        },
        "bTwRL0": {
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
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTjpH1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTwRJ0",
          "current_parent": "bTjpH1",
          "default_name": "Icon F",
          "name": "Icon feather download",
          "style": "Icon_standard_icon_"
        }
      },
      "name": "Group temp_images",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Images",
  "style": "RepeatingGroup_transparent_",
};
