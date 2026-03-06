export const group_avatar = {
  "properties": {
    "height": 0,
    "left": -10,
    "top": -6,
    "width": 0,
    "zindex": 3,
    "border_color": "rgba(247,248,249,0.3)",
    "border_roundness": 20,
    "data_source": {
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.3)",
    "border_style": "solid",
    "order": 2,
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
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "to_lowercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "trimmed",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
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
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "min_width_css": "28px",
    "single_height": true,
    "min_height_css": "28px",
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
  "id": "bTfQW0",
  "default_name": "Group X",
  "elements": {
    "bTIeb": {
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
                "name": "name_text",
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
        "font_color": "rgba(247,248,249,0.5)",
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
      "id": "bTfQX0",
      "default_name": "Text L"
    },
    "bTqXv0": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
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
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTqXt0",
      "current_parent": "bTfQW0",
      "default_name": "Image I",
      "name": "Image User Workspace",
      "style": "Image_standard_image_"
    },
    "bTqYH0": {
      "properties": {
        "height": 1,
        "left": 0,
        "top": 0,
        "width": 1,
        "zindex": 3,
        "AAD": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "to_lowercase",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "trimmed",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AAG": "right top",
        "AAH": "left bottom",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "to_lowercase",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "trimmed",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "rgba(37,38,39,1)",
        "ABU": "rgba(37,38,39,1)",
        "ABV": "var(--color_bTkRL4_default)",
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
        "ABc": 350,
        "ABd": 0,
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
            "0": "10"
          },
          "type": "TextExpression"
        },
        "ABp": {
          "entries": {
            "0": "0"
          },
          "type": "TextExpression"
        },
        "order": 3,
        "min_width": 25,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": true,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bc",
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
              "name": "invitation_accepted__boolean",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "properties": {
            "AAD": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            },
            "AAN": {
              "entries": {
                "0": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "1498171554228x105618760361836540-AAC",
      "id": "bTqYF0",
      "current_parent": "bTfQW0",
      "default_name": "Airtooltip B",
      "name": "Airtooltip UserName"
    }
  },
  "name": "Group Avatar",
};
