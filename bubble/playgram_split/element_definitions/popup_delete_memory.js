export const Popup_Delete_Memory = {
  "elements": {
    "bTNtH": {
      "properties": {
        "height": 320,
        "left": 20,
        "top": 20,
        "width": 320,
        "zindex": 14,
        "group_type": "text",
        "order": 11,
        "row_gap": 16,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "max_width_css": "450px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true,
        "prevent_user_from_closing_through_esc": false
      },
      "type": "Popup",
      "id": "bTOEj0",
      "current_parent": "bTMGw",
      "default_name": "Popup E",
      "elements": {
        "bTINR": {
          "properties": {
            "height": 0,
            "left": 16,
            "top": 16,
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
          "id": "bTOEk0",
          "default_name": "Group X",
          "elements": {
            "bTINS": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Delete memory?"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -16,
                "top": -16,
                "width": 100,
                "zindex": 11,
                "font_color": "var(--color_bTkRP4_default)",
                "order": 1,
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
              "id": "bTOEl0",
              "current_parent": "bTIMu",
              "default_name": "Text P",
              "style": "Text_inter___400___18px___white_"
            },
            "bToOX1": {
              "properties": {
                "height": 28,
                "left": 0,
                "top": 0,
                "width": 28,
                "zindex": 13,
                "border_color": "rgba(42,42,45,1)",
                "border_roundness": 12,
                "vertical_centering": true,
                "border_style": "solid",
                "order": 3,
                "fit_width": true,
                "fit_height": true,
                "single_width": true,
                "min_width_css": "32px",
                "single_height": true,
                "min_height_css": "32px",
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
                "container_layout": "relative",
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
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "border_color": "var(--color_bTkRL4_default)"
                  },
                  "type": "State"
                }
              },
              "type": "Group",
              "id": "bToOR1",
              "current_parent": "bTOEk0",
              "default_name": "Group A",
              "elements": {
                "bTnqB": {
                  "properties": {
                    "height": 30,
                    "left": 0,
                    "top": 0,
                    "width": 30,
                    "zindex": 1,
                    "icon": "feather x",
                    "icon_color": "var(--color_bTkRL4_default)",
                    "vertical_centering": true,
                    "order": 3,
                    "fit_height": false,
                    "single_width": true,
                    "min_width_css": "26px",
                    "single_height": true,
                    "min_height_css": "26px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "bb",
                    "collapse_when_hidden": true
                  },
                  "states": {
                    "0": {
                      "condition": {
                        "next": {
                          "args": 560,
                          "type": "Message",
                          "name": "less_or_equal_than",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTKdH0",
                          "name": "Current Page Width"
                        },
                        "type": "PageData",
                        "is_slidable": false
                      },
                      "properties": {
                        "is_visible": false
                      },
                      "type": "State"
                    }
                  },
                  "type": "Icon",
                  "id": "bToOT1",
                  "default_name": "Icon A",
                  "style": "Icon_standard_icon_"
                }
              },
              "name": "Group Close Delete Project",
              "style": "Group_transparent_",
              "transitions": {
                "border_color": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "Group Header",
          "style": "Group_transparent_"
        },
        "bTINx": {
          "properties": {
            "height": 0,
            "left": 16,
            "top": 112,
            "width": 0,
            "zindex": 16,
            "data_source": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "group_type": "text",
            "vertical_centering": true,
            "order": 9,
            "use_gap": true,
            "fit_width": false,
            "column_gap": 16,
            "fit_height": true,
            "margin_top": 8,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "center",
            "container_layout": "row",
            "collapse_when_hidden": true,
            "container_horiz_alignment": "space-between"
          },
          "type": "Group",
          "id": "bTOEq0",
          "default_name": "Group X",
          "elements": {
            "bTIOB": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Cancel"
                  },
                  "type": "TextExpression"
                },
                "height": 44,
                "left": -16,
                "top": -112,
                "width": 150,
                "zindex": 15,
                "order": 3,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "min_width_css": "60px",
                "single_height": false,
                "min_height_css": "36px",
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
                      "element_id": "bTOEx0"
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
              "id": "bTOEr0",
              "default_name": "Button F",
              "style": "Button_subtle_new_"
            },
            "bTNzf": {
              "properties": {
                "height": 36,
                "left": 64.10900000000004,
                "top": 0,
                "width": 135.89099999999996,
                "zindex": 16,
                "data_source": {
                  "type": "ElementParent"
                },
                "group_type": "text",
                "vertical_centering": true,
                "order": 4,
                "fit_width": true,
                "fit_height": true,
                "single_width": false,
                "single_height": false,
                "vert_alignment": "flex-start",
                "horiz_alignment": "flex-start",
                "container_layout": "relative",
                "collapse_when_hidden": true
              },
              "type": "Group",
              "id": "bTOEv0",
              "default_name": "Group K",
              "elements": {
                "bTNzg": {
                  "properties": {
                    "text": {
                      "entries": {
                        "0": "Delete memory"
                      },
                      "type": "TextExpression"
                    },
                    "height": 44,
                    "left": 0,
                    "top": 0,
                    "width": 150,
                    "zindex": 1,
                    "order": 4,
                    "fit_width": true,
                    "fit_height": true,
                    "single_width": false,
                    "min_width_css": "135px",
                    "single_height": false,
                    "min_height_css": "36px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "cb",
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
                          "element_id": "bTOEx0"
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
                        },
                        "button_disabled": false
                      },
                      "type": "State"
                    }
                  },
                  "type": "Button",
                  "id": "bTOEw0",
                  "current_parent": "bTIMu",
                  "default_name": "Button F",
                  "name": "Button Delete Memory",
                  "style": "Button_subtle_new_copy_copy_"
                },
                "bTNzm": {
                  "properties": {
                    "height": 200,
                    "left": 0,
                    "top": 0,
                    "width": 200,
                    "zindex": 2,
                    "floating_reference": "top",
                    "custom_id": "bTLgB",
                    "is_visible": false,
                    "max_width": 100,
                    "min_width": 0,
                    "fit_height": true,
                    "param_bTUaI": {
                      "entries": {
                        "0": "#ffffff"
                      },
                      "type": "TextExpression"
                    },
                    "single_width": false,
                    "min_width_css": "0px",
                    "single_height": false,
                    "min_height_css": "20px",
                    "horiz_alignment": "flex-start",
                    "nonant_alignment": "bb",
                    "collapse_when_hidden": true,
                    "floating_reference_horizontal": "none",
                    "floating_reference_horizontal_resp": "left"
                  },
                  "type": "CustomElement",
                  "id": "bTOEx0",
                  "default_name": "[Element] Loader B",
                  "name": "[Element] Loader Delete memory"
                }
              },
              "name": "Group Parent Button/Loader",
              "style": "Group_transparent_"
            }
          },
          "name": "Group Buttons",
          "style": "Group_transparent_"
        },
        "bTIue0": {
          "properties": {
            "height": 0,
            "left": 16,
            "top": 60,
            "width": 0,
            "zindex": 18,
            "vertical_centering": true,
            "order": 4,
            "row_gap": 10,
            "use_gap": true,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "single_height": false,
            "horiz_alignment": "flex-start",
            "container_layout": "column",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTOFB0",
          "default_name": "Group X",
          "elements": {
            "bTIuj0": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Are you sure you want to delete this memory from the team?"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -16,
                "top": -60,
                "width": 100,
                "zindex": 11,
                "font_color": "var(--color_bTkRP4_default)",
                "order": 1,
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
              "id": "bTOFC0",
              "current_parent": "bTIOD",
              "default_name": "Text P",
              "style": "Text_inter___400___16px___white_"
            }
          },
          "name": "Group Column Container",
          "style": "Group_transparent_"
        }
      },
      "name": "Popup Delete Memory",
      "style": "Popup_new_popup_",
      "custom_states": {
        "delete_memories__": {
          "display": "custom_memory?",
          "value": "boolean"
        }
      }
    }
  },
  "workflows": {
    "bTNtP": {
      "properties": {
        "element_id": "bToOR1"
      },
      "type": "ButtonClicked",
      "id": "bTOFy0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOFz0"
        }
      }
    },
    "bTNta": {
      "properties": {
        "element_id": "bTOEr0"
      },
      "type": "ButtonClicked",
      "id": "bTOGE0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOGF0"
        }
      }
    },
    "bTNtm": {
      "properties": {
        "element_id": "bTOEw0",
        "workflow_disabled": false
      },
      "type": "ButtonClicked",
      "id": "bTOGK0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEx0"
          },
          "type": "ShowElement",
          "id": "bTOGL0"
        },
        "1": {
          "properties": {
            "date": {
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "api_event": "bTLzi",
            "_wf_param_user": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "_wf_param_uuid": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "_wf_param_organization": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "_wf_param_custom_memory?": {
              "next": {
                "type": "Message",
                "name": "custom.delete_memories__",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOEj0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "ScheduleAPIEvent",
          "id": "bTOGP0"
        },
        "2": {
          "properties": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTOGP0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "delay": 3,
            "custom_event": "bTOGo0"
          },
          "type": "ScheduleCustom",
          "id": "bTOGQ0"
        }
      }
    },
    "bTNyx": {
      "properties": {
        "event_name": "reset_delete_memory_popup"
      },
      "type": "CustomEvent",
      "id": "bTOGo0",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "length": 2,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "next": {
                    "properties": {
                      "decimal_place": 0
                    },
                    "type": "Message",
                    "name": "format_number",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "element_id": "bTOCH0",
            "custom_state": "custom.string_for_update_"
          },
          "type": "SetCustomState",
          "id": "bTOGp0"
        },
        "1": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "HideElement",
          "id": "bTOGu0"
        },
        "2": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ResetGroup",
          "id": "bTOGv0"
        },
        "3": {
          "properties": {
            "element_id": "bTOEx0"
          },
          "type": "HideElement",
          "id": "bTOGz0"
        }
      }
    },
    "bTOBj": {
      "properties": {
        "event_name": "reset_add_memory_popup"
      },
      "type": "CustomEvent",
      "id": "bTOHH0",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "length": 2,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "next": {
                    "properties": {
                      "decimal_place": 0
                    },
                    "type": "Message",
                    "name": "format_number",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "element_id": "bTOCH0",
            "custom_state": "custom.string_for_update_"
          },
          "type": "SetCustomState",
          "id": "bTOHL0"
        }
      }
    },
    "bTOIJ0": {
      "properties": {
        "event_name": "show_popup",
        "wf_folder": "CustomEvent",
        "workflow_disabled": false
      },
      "type": "CustomEvent",
      "id": "bTOIH0",
      "actions": {
        "0": {
          "properties": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": "yes",
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "yes"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "no"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "is_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_llm_reply",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.searched_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
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
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "yes"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "no"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "is_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_llm_reply",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.simple_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                  "name": "_api_c2_user_message",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.searched_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOCH0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTOEj0",
            "custom_state": "custom.delete_memories__"
          },
          "type": "SetCustomState",
          "id": "bTOIP0"
        },
        "1": {
          "properties": {
            "data_source": {
              "next": {
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
                                  "name": "_api_c2__additional.id",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.searched_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
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
                                  "type": "Message",
                                  "name": "_api_c2__additional.id",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.simple_message_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTOCH0"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                  "name": "_api_c2_user_message",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.searched_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTOCH0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "element_id": "bTOEj0"
          },
          "type": "DisplayGroupData",
          "id": "bTOIU0"
        },
        "2": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ShowElement",
          "id": "bTOIZ0"
        }
      }
    },
    "bTYUv0": {
      "properties": {
        "element_id": "bTOEj0"
      },
      "type": "PopupClosed",
      "id": "bTYUt0",
      "actions": {
        "0": {
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "ResetGroup",
          "id": "bTYUz0"
        }
      }
    }
  },
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzp_default)",
    "min_width_px": 0,
    "default_width": 20,
    "min_height_px": 20,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTOCH0",
  "name": "Popup Delete Memory",
  "custom_states": {
    "simple_message_": {
      "display": "simple_message",
      "value": "api.apiconnector2.bTHIF0.bTvwp0.body.data.Get.Messages_v3",
      "rank": 1,
      "make_static": true
    },
    "searched_message_": {
      "display": "searched_message",
      "value": "api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3",
      "rank": 0,
      "make_static": true
    },
    "string_for_update_": {
      "display": "string_for_update",
      "value": "text",
      "rank": 2,
      "make_static": true
    }
  }
};
