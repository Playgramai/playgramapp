export const Element_Regenerate = {
  "elements": {
    "bTKXH0": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 44,
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "none",
        "order": 1,
        "unique_id": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "param_bTYSv",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTnQI1"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "single_width": true,
        "min_width_css": "26px",
        "single_height": true,
        "min_height_css": "26px",
        "horiz_alignment": "center",
        "container_layout": "relative",
        "collapse_when_hidden": true,
        "container_vert_alignment": "center"
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
            "bgcolor": {
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
                          "0": "#acacad1a"
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTnQJ1",
      "current_parent": "bTKWz0",
      "default_name": "Group A",
      "elements": {
        "bTlfv2": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 240,
            "zindex": 4,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765462894338x893702423584552300/Renew.svg"
              },
              "type": "TextExpression"
            },
            "fit_height": true,
            "single_width": true,
            "min_width_css": "14px",
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
                "properties": {
                  "element_id": "bTnQI1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765462939831x783702903977438800/Renew-1.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            },
            "1": {
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
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212520867x797683285556206800/Renew.svg"
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
                "properties": {
                  "element_id": "bTnQI1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770212532819x629806299419262300/Renew-1.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTnRt1",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group regenerate"
    },
    "bTlin2": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 45,
        "border_roundness": 0,
        "boxshadow_style": "none",
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "reference": "bTnQJ1",
        "fit_height": true,
        "offset_top": 10,
        "offset_left": -50,
        "padding_left": 10,
        "single_width": false,
        "max_width_css": "316px",
        "min_width_css": "60px",
        "padding_right": 10,
        "single_height": false,
        "padding_bottom": 10,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTnSj1",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTnQI1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTnQI1"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "max_width_css": {
              "type": "Empty"
            }
          },
          "type": "State"
        }
      },
      "type": "GroupFocus",
      "id": "bTnRu1",
      "default_name": "GroupFocus A",
      "elements": {
        "bTlkh2": {
          "properties": {
            "height": 14.398400000000002,
            "left": -96.41399999999999,
            "top": 26,
            "width": 296.414,
            "zindex": 2,
            "border_color": "rgba(var(--color_bTkRR4_default_rgb), 0.16)",
            "boxshadow_horizontal": 0,
            "border_roundness": 10,
            "boxshadow_style": "none",
            "boxshadow_vertical": 1,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "text",
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": {
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
                          "0": "#252627"
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
            "border_style": "none",
            "boxshadow_blur": 10,
            "boxshadow_color": "rgba(var(--color_bTkRR4_default_rgb), 0.12)",
            "order": 3,
            "fit_width": false,
            "fit_height": true,
            "padding_top": 6,
            "padding_left": 10,
            "single_width": false,
            "min_width_css": "40px",
            "padding_right": 10,
            "single_height": false,
            "min_height_css": "32px",
            "padding_bottom": 6,
            "horiz_alignment": "flex-start",
            "container_layout": "relative",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTnRz1",
          "default_name": "Group B",
          "elements": {
            "bTlkl2": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Regenerate with currently selected model"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -10,
                "top": -26,
                "width": 100,
                "zindex": 1,
                "is_visible": true,
                "order": 4,
                "fit_width": true,
                "fit_height": true,
                "margin_top": 0,
                "single_width": false,
                "max_width_css": "400px",
                "min_width_css": "0px",
                "single_height": false,
                "min_height_css": "0px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "param_bTnSj1",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTnQI1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTnQI1"
                    },
                    "type": "GetElement",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Regenerate with ",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "display",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "param_bTnSZ1",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTnQI1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTnSA1",
              "current_parent": "bTliW2",
              "default_name": "Text A",
              "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
            }
          },
          "name": "Group Text Container",
          "style": "Group_transparent_"
        }
      },
      "name": "GF Tooltip regenerate",
      "style": "GroupFocus_shadow_"
    }
  },
  "workflows": {
    "bTljR2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTnQI1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnSF1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnRu1"
          },
          "type": "ToggleElement",
          "id": "bTnSG1"
        }
      }
    },
    "bTljp2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "isnt_hovered",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTnQI1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "run_when": "every_time"
      },
      "type": "ConditionTrue",
      "id": "bTnSH1",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTnRu1"
          },
          "type": "HideElement",
          "id": "bTnSL1"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "text",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTYST",
        "param_name": "right-aligned",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTYSv",
        "param_name": "id",
        "editor_type": "DynamicValue"
      },
      "2": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": true,
        "param_id": "bTnSZ1",
        "param_name": "chat_model",
        "editor_type": "DynamicValue"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTnSj1",
        "param_name": "index_regenerate_id",
        "editor_type": "DynamicValue"
      }
    },
    "max_width_px": 16,
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 16,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTnQI1",
  "name": "[Element] Regenerate",
};
