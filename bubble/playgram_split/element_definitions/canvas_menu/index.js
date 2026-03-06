export const Canvas_Menu = {
  "elements": {
    "bTNfi": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 14,
        "vertical_centering": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTNct",
      "default_name": "Group B",
      "name": "Group Main",
      "style": "Group_transparent_"
    },
    "bTNfo": {
      "properties": {
        "height": 4,
        "left": 67,
        "top": 13,
        "width": 4,
        "zindex": 15,
        "order": 1,
        "collapse_when_hidden": true
      },
      "type": "1543086664409x454646894723334140-AVv",
      "id": "bTNfj",
      "default_name": "PDFModel A"
    },
    "bTNgf": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 16,
        "html": {
          "entries": {
            "0": "<style>\n#gfMenuCanvas {\n  transform: translateX(-160px) !important;\n  width: 250px !important;\n}\n</style>"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 3,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTNgd",
      "current_parent": "bTNcF",
      "default_name": "HTML A",
      "name": "HTML Move GF",
      "style": "HTML_default_"
    },
    "bTInP0": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 13,
        "boxshadow_horizontal": 0,
        "border_roundness": 10,
        "boxshadow_style": "none",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_bTGzr_default)",
        "boxshadow_blur": 2,
        "boxshadow_color": "var(--color_bTHBQ_default)",
        "order": 2,
        "reference": "bTNct",
        "unique_id": {
          "entries": {
            "0": "gfMenuCanvas"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "offset_left": -8,
        "single_width": false,
        "max_width_css": "200px",
        "min_width_css": "60px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "GroupFocus",
      "id": "bTNcK",
      "current_parent": "bTIml0",
      "default_name": "GroupFocus A",
      "elements": {
        "bTHrd": {
          "properties": {
            "height": 280,
            "left": 101,
            "top": 39,
            "width": 280,
            "zindex": 2,
            "boxshadow_horizontal": 0,
            "border_roundness": 10,
            "boxshadow_style": "outset",
            "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "var(--color_bTGzr_default)",
            "boxshadow_blur": 10,
            "boxshadow_color": "rgba(0,0,0,0.2)",
            "boxshadow_spread": 0,
            "order": 1,
            "row_gap": 8,
            "use_gap": true,
            "fit_width": false,
            "fit_height": true,
            "margin_top": 6,
            "margin_left": 6,
            "padding_top": 8,
            "margin_right": 6,
            "padding_left": 8,
            "single_width": false,
            "margin_bottom": 6,
            "padding_right": 8,
            "single_height": false,
            "padding_bottom": 8,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
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
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "var(--color_bTsrr2_default)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTNcL",
          "default_name": "Group A",
          "elements": {
            "bTIhc": {
              "properties": {
                "height": 0,
                "left": 10,
                "top": 10,
                "width": 0,
                "zindex": 4,
                "border_roundness": 10,
                "vertical_centering": true,
                "order": 4,
                "use_gap": true,
                "fit_width": false,
                "unique_id": {
                  "entries": {
                    "0": ""
                  },
                  "type": "TextExpression"
                },
                "column_gap": 8,
                "fit_height": true,
                "padding_top": 8,
                "padding_left": 8,
                "single_width": false,
                "padding_right": 8,
                "single_height": false,
                "min_height_css": "36px",
                "padding_bottom": 8,
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true,
                "container_horiz_alignment": "flex-start"
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "background_style": "bgcolor",
                    "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bTNcP",
              "current_parent": "bTIgr",
              "default_name": "Group A",
              "elements": {
                "bTHpX": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Download (.pdf)"
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": 0,
                    "top": 0,
                    "width": 100,
                    "zindex": 2,
                    "order": 4,
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
                  "type": "Text",
                  "id": "bTNcQ",
                  "default_name": "Text A",
                  "style": "Text_inter___400___14px___white_"
                },
                "bTIhL": {
                  "properties": {
                    "height": 30,
                    "left": 170,
                    "top": 22,
                    "width": 30,
                    "zindex": 4,
                    "icon": "feather download",
                    "icon_color": "var(--color_primary_contrast_default)",
                    "vertical_centering": true,
                    "order": 1,
                    "fit_height": false,
                    "padding_top": 0,
                    "padding_left": 0,
                    "single_width": true,
                    "min_width_css": "18px",
                    "padding_right": 0,
                    "single_height": true,
                    "min_height_css": "18px",
                    "padding_bottom": 0,
                    "horiz_alignment": "flex-start",
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
                        "is_slidable": false
                      },
                      "properties": {
                        "icon_color": "var(--color_bTsrq2_default)"
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bTNcR",
                  "default_name": "Icon A"
                }
              },
              "name": "Group Download pdf",
              "style": "Group_transparent_",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "Group Canvas Menu Content"
        }
      },
      "name": "GF Canvas Menu"
    }
  },
  "workflows": {
    "bTInc0": {
      "properties": {
        "event_name": "toggle_menu"
      },
      "type": "CustomEvent",
      "id": "bTNeZ",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTNcK"
          },
          "type": "ToggleElement",
          "id": "bTNea"
        }
      }
    },
    "bTIqt0": {
      "properties": {
        "element_id": "bTNcP",
        "breakpoint": false
      },
      "type": "ButtonClicked",
      "id": "bTNel",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTNcK"
          },
          "type": "ToggleElement",
          "id": "bTNem"
        },
        "1": {
          "properties": {
            "element_id": "bTNfj",
            "ARJ": 50,
            "ARL": 50,
            "ARM": 50,
            "ARN": 50,
            "ARO": true
          },
          "type": "1543086664409x454646894723334140-ARG",
          "id": "bTNfp"
        },
        "2": {
          "properties": {
            "element_id": "bTNfj",
            "AQu": {
              "entries": {
                "0": "body"
              },
              "type": "TextExpression"
            },
            "AQv": 12,
            "AQy": "left",
            "ARA": {
              "entries": {
                "0": "Roboto"
              },
              "type": "TextExpression"
            },
            "ARB": 1.2
          },
          "type": "1543086664409x454646894723334140-AQt",
          "id": "bTNfu"
        },
        "3": {
          "properties": {
            "element_id": "bTNfj",
            "AQS": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTNgB",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTNcF"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "AQT": {
              "entries": {
                "0": "body"
              },
              "type": "TextExpression"
            },
            "AQk": true
          },
          "type": "1543086664409x454646894723334140-AQR",
          "id": "bTNfz"
        },
        "4": {
          "properties": {
            "element_id": "bTNfj",
            "AQn": {
              "entries": {
                "0": "frala"
              },
              "type": "TextExpression"
            }
          },
          "type": "1543086664409x454646894723334140-AQm",
          "id": "bTNgF"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTNgB",
        "param_name": "text",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTNcF",
  "name": "Canvas Menu",
  "custom_states": {
    "mode_": {
      "display": "rename",
      "value": "boolean",
      "make_static": true
    },
    "visible__": {
      "display": "visible?",
      "value": "boolean",
      "make_static": true
    }
  },
};
