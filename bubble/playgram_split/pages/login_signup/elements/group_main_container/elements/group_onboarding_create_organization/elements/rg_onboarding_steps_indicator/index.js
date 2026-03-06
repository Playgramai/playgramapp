export const rg_onboarding_steps_indicator = {
  "properties": {
    "height": 350,
    "left": 196.5,
    "top": 31.1484375,
    "width": 280,
    "zindex": 32,
    "columns": 4,
    "data_source": {
      "properties": {
        "option_set": "option.onboarding_steps__os_"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.onboarding_steps__os_",
    "separator_color": "rgba(150,150,150,0)",
    "separator_style": "solid",
    "separator_width": 12,
    "order": 1,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "margin_bottom": 38,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTPap",
  "default_name": "RepeatingGroup C",
  "elements": {
    "bTPso": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 34,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.onboarding_steps__os_",
        "vertical_centering": true,
        "order": 1,
        "row_gap": 4,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 12,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "flex-start"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.onboarding_steps__os_",
                  "option_value": "step_2"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.organization_name_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTKPI"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPWC"
                  },
                  "type": "GetElement",
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
            "button_disabled": true
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.onboarding_steps__os_",
                  "option_value": "step_3"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTPWI"
                          },
                          "type": "GetElement",
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
                              "name": "custom.organization_name_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTKPI"
                            },
                            "type": "GetElement",
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
                                "name": "custom.user_name_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTKPI"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "or_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPWC"
                  },
                  "type": "GetElement",
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
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTPsj",
      "default_name": "Group L",
      "elements": {
        "bTPsp": {
          "properties": {
            "height": 0,
            "left": 0,
            "top": 0,
            "width": 0,
            "zindex": 4,
            "border_roundness": 20,
            "data_source": {
              "type": "ElementParent"
            },
            "group_type": "option.onboarding_steps__os_",
            "vertical_centering": true,
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.12)",
            "order": 1,
            "opacity": 60,
            "fit_width": true,
            "fit_height": true,
            "padding_top": 2,
            "padding_left": 2,
            "single_width": false,
            "min_width_css": "100%",
            "padding_right": 2,
            "single_height": false,
            "min_height_css": "4px",
            "padding_bottom": 2,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true,
            "container_vert_alignment": "center"
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "type": "CurrentCellsIndex",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "greater_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.onboarding_step_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKPI"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "bgcolor": "rgba(128,189,203,1)"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTPsR",
          "default_name": "Group K",
          "name": "Group Cell Number",
          "style": "Group_transparent_",
          "transitions": {
            "background_style": {
              "fn": "ease",
              "duration": 200
            }
          }
        },
        "bTnvE": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 3,
            "font_alignment": "left",
            "font_color": "var(--color_bTkRX4_default)",
            "line_height": 1,
            "order": 2,
            "opacity": 100,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "25px",
            "single_height": false,
            "max_height_css": "25px",
            "min_height_css": "25px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "type": "CurrentCellsIndex",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "greater_or_equal_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.onboarding_step_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTKPI"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTkRL4_default)",
                "opacity": 100
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
                        "name": "isnt_clickable",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTPsj"
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
                  "element_id": "bTPsj"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bToSr_default)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTPsF",
          "default_name": "Text M",
          "style": "Text_inter___400___14px___white_",
          "transitions": {
            "font_color": {
              "fn": "ease",
              "duration": 200
            }
          }
        }
      },
      "name": "Group Cell Container (use button)",
      "style": "Group_transparent_"
    }
  },
  "name": "RG Onboarding Steps Indicator",
  "style": "RepeatingGroup_transparent_",
};
