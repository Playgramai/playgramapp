export const group_m = {
  "properties": {
    "height": 0,
    "left": 8,
    "top": 13,
    "width": 0,
    "zindex": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "0px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJjV",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "max_width_css": "170px",
        "max_height_css": "34px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTiYg",
  "default_name": "Group M",
  "elements": {
    "bTiYm": {
      "properties": {
        "height": 0,
        "left": -345,
        "top": -8,
        "width": 0,
        "zindex": 3,
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
        "border_roundness": 20,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "custom.workspace",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(32,33,35,1)",
        "border_style": "solid",
        "order": 1,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": false,
        "min_width_css": "22px",
        "single_height": true,
        "min_height_css": "22px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
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
            "border_color": "rgba(18,18,19,0.3)",
            "bgcolor": "rgba(var(--color_bTsrp2_default_rgb), 0.3)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTJkG",
      "default_name": "Group A",
      "elements": {
        "bTYVr": {
          "properties": {
            "height": 2,
            "left": 0,
            "top": 0,
            "width": 2,
            "zindex": 13,
            "AAD": {
              "type": "TextExpression"
            },
            "AAE": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "AAG": "top left",
            "AAH": "right bottom",
            "AAI": "dark",
            "AAK": true,
            "AAN": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "name_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "type": "CurrentCellsIndex",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "TextExpression"
            },
            "AAe": false,
            "ABS": true,
            "ABT": "rgba(60,60,60,1)",
            "ABU": "var(--color_bTGzv_default)",
            "ABV": "var(--color_primary_contrast_default)",
            "ABZ": {
              "entries": {
                "0": "12"
              },
              "type": "TextExpression"
            },
            "ABa": {
              "entries": {
                "0": "Inter"
              },
              "type": "TextExpression"
            },
            "ABd": 0,
            "ABo": {
              "entries": {
                "0": "6"
              },
              "type": "TextExpression"
            },
            "ABp": {
              "entries": {
                "0": "0"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "5px",
            "single_height": true,
            "min_height_css": "3px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ac",
            "collapse_when_hidden": true
          },
          "type": "1498171554228x105618760361836540-AAC",
          "id": "bTYVp",
          "current_parent": "bTJkG",
          "default_name": "Airtooltip A",
          "name": "Airtooltip User Name"
        },
        "bTiYf": {
          "properties": {
            "text": {
              "entries": {
                "0": "[center]",
                "1": {
                  "next": {
                    "next": {
                      "args": 1,
                      "next": {
                        "type": "Message",
                        "name": "to_uppercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "truncated",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "user_email_for_search_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": "[/center]"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "font_color": "rgba(65,157,178,1)",
            "font_size": 12,
            "line_height": 1.4,
            "vertical_centering": true,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "max_width_css": "23px",
            "min_width_css": "0px",
            "single_height": true,
            "min_height_css": "23px",
            "horiz_alignment": "center",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": {
                    "properties": {
                      "breakpoint_id": "built-in-mobile"
                    },
                    "type": "Breakpoint",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "font_size": 14
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
                  "element_id": "bToJP2"
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
                "font_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTJkH",
          "default_name": "Text A"
        },
        "bToJU2": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 320,
            "zindex": 2,
            "stretch_or_rescale": "zoom",
            "border_roundness": 20,
            "is_visible": false,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "240px",
            "horiz_alignment": "flex-start",
            "use_aspect_ratio": true,
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "image_image",
                  "is_slidable": false
                },
                "type": "ElementParent",
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
          "id": "bToJP2",
          "current_parent": "bTJkG",
          "default_name": "Image D",
          "name": "Image User Workspace",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Avatar"
    },
    "bTiYn": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "user_email_for_search_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -345,
        "top": -8,
        "width": 100,
        "zindex": 3,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
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
              "args": 768,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTJjV",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "max_width_css": "150px",
            "max_height_css": "34px"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTJkF",
      "default_name": "Text A",
      "style": "Text_inter___400___16px___neutral_copy_"
    }
  },
  "style": "Group_transparent_",
};
