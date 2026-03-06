export const FG_Canvas = {
  "properties": {
    "height": 603,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 6,
    "boxshadow_style": "none",
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(0,0,0,0.5)",
    "boxshadow_blur": 4,
    "boxshadow_color": "rgba(0,0,0,0.1)",
    "boxshadow_spread": 8,
    "order": 15,
    "row_gap": 20,
    "use_gap": false,
    "unique_id": {
      "entries": {
        "0": "fgCanvas"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "100%",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-end",
    "floating_reference_horizontal_resp": "right"
  },
  "type": "FloatingGroup",
  "id": "bTUlk0",
  "current_parent": "bTMYj0",
  "default_name": "FloatingGroup A",
  "elements": {
    "bTMRu0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 14,
        "boxshadow_horizontal": 0,
        "boxshadow_style": "outset",
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzr_default)",
        "boxshadow_color": "rgba(0,0,0,0.1)",
        "boxshadow_spread": 8,
        "order": 2,
        "row_gap": 20,
        "use_gap": true,
        "fit_width": false,
        "fit_height": false,
        "padding_top": 20,
        "padding_left": 20,
        "single_width": false,
        "max_width_css": "50%",
        "padding_right": 20,
        "single_height": false,
        "padding_bottom": 20,
        "vert_alignment": "stretch",
        "horiz_alignment": "flex-end",
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
            "bgcolor": "var(--color_bTspn2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTUll0",
      "default_name": "Group QZ",
      "elements": {
        "bTMRv0": {
          "properties": {
            "height": 0,
            "left": -20,
            "top": -20,
            "width": 0,
            "zindex": 13,
            "vertical_centering": true,
            "order": 1,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 20,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTUlp0",
          "current_parent": "bTLeL",
          "default_name": "Group QZ",
          "elements": {
            "bTMRV0": {
              "properties": {
                "height": 0,
                "left": 0,
                "top": 0,
                "width": 0,
                "zindex": 13,
                "vertical_centering": true,
                "order": 3,
                "use_gap": true,
                "fit_width": false,
                "column_gap": 8,
                "fit_height": true,
                "single_width": false,
                "single_height": false,
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTUlq0",
              "default_name": "Group QZ",
              "elements": {
                "bTMRW0": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Canvas"
                      },
                      "type": "TextExpression"
                    },
                    "height": 36,
                    "left": 0,
                    "top": 0,
                    "width": 100,
                    "zindex": 11,
                    "order": 2,
                    "fit_width": true,
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
                  "id": "bTUlr0",
                  "current_parent": "bTIMu",
                  "default_name": "Text S",
                  "name": "Text Instructions",
                  "style": "Text_inter___400___18px___white_"
                },
                "bTMRX0": {
                  "properties": {
                    "height": 30,
                    "left": 0,
                    "top": 0,
                    "width": 30,
                    "zindex": 12,
                    "icon": "feather x",
                    "icon_color": "var(--color_primary_contrast_default)",
                    "vertical_centering": true,
                    "order": 1,
                    "unique_id": {
                      "entries": {
                        "0": "closeFgCanvas"
                      },
                      "type": "TextExpression"
                    },
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "28px",
                    "single_height": true,
                    "min_height_css": "28px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "collapse_when_hidden": true
                  },
                  "states": {
                    "0": {
                      "condition": {
                        "next": {
                          "type": "Message",
                          "name": "is_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUmO0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "properties": {
                        "button_disabled": true
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
                        "icon_color": "var(--color_bTsrq2_default)"
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bTUlv0",
                  "default_name": "Icon C",
                  "style": "Icon_standard_icon_"
                }
              },
              "name": "Group Close/Canvas name",
              "style": "Group_transparent_"
            },
            "bTMRj0": {
              "properties": {
                "height": 0,
                "left": 484,
                "top": 0,
                "width": 0,
                "zindex": 14,
                "vertical_centering": true,
                "order": 5,
                "use_gap": true,
                "fit_width": true,
                "column_gap": 7,
                "fit_height": true,
                "single_width": false,
                "single_height": false,
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "container_layout": "row",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTUlw0",
              "default_name": "Group QZ",
              "elements": {
                "bTNgR": {
                  "properties": {
                    "height": 200,
                    "left": 19.5,
                    "top": 19,
                    "width": 200,
                    "zindex": 16,
                    "floating_reference": "top",
                    "custom_id": "bTNcF",
                    "data_source": {
                      "next": {
                        "type": "Message",
                        "name": "custom.message_for_rte_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "order": 3,
                    "max_width": 100,
                    "min_width": 0,
                    "fit_height": true,
                    "param_bTNgB": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_AAE",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUmD0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "single_width": false,
                    "min_width_css": "0px",
                    "single_height": false,
                    "min_height_css": "1px",
                    "vert_alignment": "flex-end",
                    "horiz_alignment": "flex-start",
                    "floating_reference_horizontal": "none",
                    "floating_reference_horizontal_resp": "left"
                  },
                  "type": "CustomElement",
                  "id": "bTUlx0",
                  "default_name": "[Element] Canvas Menu A"
                },
                "bTMRo0": {
                  "properties": {
                    "height": 30,
                    "left": -222,
                    "top": 0,
                    "width": 30,
                    "zindex": 12,
                    "icon": "feather more-horizontal",
                    "icon_color": "var(--color_primary_contrast_default)",
                    "vertical_centering": true,
                    "order": 4,
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "28px",
                    "single_height": true,
                    "min_height_css": "28px",
                    "vert_alignment": "center",
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
                        "icon_color": "var(--color_bTsrp2_default)"
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bTUmB0",
                  "current_parent": "bTLiv0",
                  "default_name": "Icon C",
                  "style": "Icon_standard_icon_"
                },
                "bTMSX0": {
                  "properties": {
                    "height": 200,
                    "left": 645.5,
                    "top": 11,
                    "width": 200,
                    "zindex": 15,
                    "floating_reference": "top",
                    "custom_id": "bTKWz0",
                    "data_source": {
                      "next": {
                        "type": "Message",
                        "name": "get_AAE",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUmD0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "order": 2,
                    "fit_width": true,
                    "max_width": 100,
                    "min_width": 0,
                    "fit_height": true,
                    "param_bTMSM0": true,
                    "single_width": false,
                    "min_width_css": "0px",
                    "single_height": false,
                    "min_height_css": "18px",
                    "vert_alignment": "center",
                    "horiz_alignment": "flex-start",
                    "floating_reference_horizontal": "none",
                    "floating_reference_horizontal_resp": "left"
                  },
                  "type": "CustomElement",
                  "id": "bTUmC0",
                  "default_name": "[Element] Copy D",
                  "name": "[Element] Copy Simple Text",
                  "custom_definition_name": "[Element] Copy"
                }
              },
              "name": "Group Copy/Menu",
              "style": "Group_transparent_"
            }
          },
          "name": "Group Header",
          "style": "Group_transparent_"
        },
        "bTMRz0": {
          "properties": {
            "height": 200,
            "left": -20,
            "top": -20,
            "width": 400,
            "zindex": 3,
            "AAD": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.text_for_rte_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "AAZ": "Tooltip",
            "AAa": "Basic",
            "AAc": {
              "entries": {
                "0": "Write something..."
              },
              "type": "TextExpression"
            },
            "background_style": "none",
            "order": 2,
            "unique_id": {
              "entries": {
                "0": "rteEditor"
              },
              "type": "TextExpression"
            },
            "fit_height": false,
            "single_width": false,
            "single_height": false,
            "max_height_css": "100%",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUmO0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "AAe": true
              },
              "type": "State"
            }
          },
          "type": "1580238841425x582072028873097200-AAC",
          "id": "bTUmD0",
          "default_name": "RichTextInput A",
          "name": "RichTextInput A"
        },
        "bTMSA0": {
          "properties": {
            "height": 0,
            "left": -20,
            "top": -20,
            "width": 0,
            "zindex": 5,
            "vertical_centering": true,
            "order": 5,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 15,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-end",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "flex-end"
          },
          "type": "Group",
          "id": "bTUmH0",
          "default_name": "Group QZ",
          "elements": {
            "bTLiZ0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Close"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": -20,
                "top": -520,
                "width": 150,
                "zindex": 4,
                "order": 1,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "100px",
                "single_height": false,
                "min_height_css": "44px",
                "horiz_alignment": "flex-end",
                "collapse_when_hidden": true
              },
              "states": {
                "0": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "is_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUmO0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "button_disabled": true
                  },
                  "type": "State"
                }
              },
              "type": "Button",
              "id": "bTUmI0",
              "current_parent": "bTLeL",
              "default_name": "Button E",
              "style": "Button_subtle_new_"
            },
            "bTNNK0": {
              "properties": {
                "height": 44,
                "left": 616,
                "top": 0,
                "width": 100,
                "zindex": 5,
                "vertical_centering": true,
                "order": 2,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "100px",
                "single_height": false,
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
                "container_layout": "relative",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTUmJ0",
              "default_name": "Group RZ",
              "elements": {
                "bTNNL0": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Save"
                      },
                      "type": "TextExpression"
                    },
                    "height": 44,
                    "left": -115,
                    "top": 0,
                    "width": 150,
                    "zindex": 1,
                    "order": 3,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "100px",
                    "single_height": false,
                    "min_height_css": "44px",
                    "horiz_alignment": "flex-end",
                    "nonant_alignment": "bb",
                    "collapse_when_hidden": true
                  },
                  "states": {
                    "0": {
                      "condition": {
                        "next": {
                          "type": "Message",
                          "name": "is_visible",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUmO0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "properties": {
                        "text": {
                          "entries": {
                            "0": ""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "State"
                    }
                  },
                  "type": "Button",
                  "id": "bTUmN0",
                  "default_name": "Button E",
                  "style": "Button_primary_new_"
                },
                "bTNNX0": {
                  "properties": {
                    "height": 30,
                    "left": 51.5,
                    "top": 23,
                    "width": 30,
                    "zindex": 2,
                    "icon": "phosphor regular circle-notch",
                    "icon_color": "var(--color_bTGzq_default)",
                    "is_visible": false,
                    "vertical_centering": true,
                    "spin_icon": true,
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "30px",
                    "single_height": true,
                    "min_height_css": "30px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "bb",
                    "collapse_when_hidden": true
                  },
                  "type": "Icon",
                  "id": "bTUmO0",
                  "default_name": "Icon L",
                  "name": "Icon Save Loader",
                  "style": "Icon_standard_icon_"
                }
              },
              "name": "Group Parent Loader/Save",
              "style": "Group_transparent_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Canvas ",
      "style": "Group_transparent_"
    },
    "bTMSd0": {
      "properties": {
        "height": 280,
        "left": 180.5,
        "top": 224,
        "width": 280,
        "zindex": 15,
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "stretch",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTUmP0",
      "default_name": "Group QZ",
      "name": "Group Close FG",
      "style": "Group_transparent_"
    }
  },
  "name": "FG Canvas",
  "style": "FloatingGroup_shadow_"
};
