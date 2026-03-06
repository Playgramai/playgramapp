export const group_subscription_free_card_use_button = {
  "properties": {
    "height": 79,
    "left": 0,
    "top": -86,
    "width": 70,
    "zindex": 2,
    "border_color": "var(--color_bTkRK4_default)",
    "border_roundness": 12,
    "data_source": {
      "properties": {
        "option_set": "option.subscription_plan",
        "option_value": "free"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "group_type": "option.subscription_plan",
    "border_style": "solid",
    "order": 1,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 16,
    "margin_right": 16,
    "padding_left": 16,
    "single_width": false,
    "max_width_css": "290px",
    "min_width_css": "280px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "320px",
    "padding_bottom": 16,
    "button_disabled": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
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
                "name": "get_group_data",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": "onboarding",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxAn1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.selected_subscription_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTxAn1"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_color": "var(--color_bTkRV4_default)",
        "button_disabled": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.subscription_plan",
                    "option_value": "pro"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "active_boolean",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "organization_workspace_custom_organization",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": "onboarding",
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTxAn1"
                      },
                      "type": "GetElement",
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
              "type": "Message",
              "name": "subscription_plan_option_subscription_plan",
              "is_slidable": false
            },
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxBi1",
  "current_parent": "bTwfI",
  "default_name": "Group B",
  "elements": {
    "bTwhG": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 16,
        "width": 0,
        "zindex": 4,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.subscription_plan",
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTxBj1",
      "default_name": "Group B",
      "elements": {
        "bTwhH": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 22,
            "left": -16,
            "top": -16,
            "width": 90,
            "zindex": 2,
            "border_roundness": 8,
            "font_size": 14,
            "background_style": "bgcolor",
            "bgcolor": "var(--color_bTGzr_default)",
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "padding_top": 4,
            "padding_left": 8,
            "single_width": false,
            "min_width_css": "0px",
            "padding_right": 8,
            "single_height": false,
            "min_height_css": "0px",
            "padding_bottom": 4,
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Free",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTxBn1",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___white_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTwhS": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "description",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 16,
        "left": 92,
        "top": 106.8359375,
        "width": 63,
        "zindex": 5,
        "font_color": "rgba(175,175,175,1)",
        "font_size": 14,
        "line_height": 1.2,
        "vertical_centering": true,
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "font_weight": "300",
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "Best way to try multi-model magic",
        "collapse_when_hidden": true
      },
      "type": "Text",
      "id": "bTxBo1",
      "default_name": "Text B"
    },
    "bTwhY": {
      "properties": {
        "height": 65,
        "left": 63,
        "top": 119.3359375,
        "width": 35,
        "zindex": 6,
        "data_source": {
          "next": {
            "type": "Message",
            "name": "features",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "text",
        "rows": 3,
        "order": 8,
        "fit_width": false,
        "fit_height": true,
        "fixed_rows": true,
        "single_width": false,
        "margin_bottom": 8,
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "cell_min_height_css": "0px",
        "collapse_when_hidden": true
      },
      "type": "RepeatingGroup",
      "id": "bTxBp1",
      "default_name": "RepeatingGroup B",
      "elements": {
        "bTwhk": {
          "properties": {
            "height": 12,
            "left": 22,
            "top": 21.9453125,
            "width": 9,
            "zindex": 2,
            "icon": "ionic filled checkmark-circle",
            "icon_color": "var(--color_bTGzv_default)",
            "vertical_centering": true,
            "order": 1,
            "fit_height": false,
            "margin_top": 8,
            "padding_top": 0,
            "padding_left": 0,
            "single_width": true,
            "margin_bottom": 8,
            "min_width_css": "18px",
            "padding_right": 0,
            "single_height": true,
            "min_height_css": "18px",
            "padding_bottom": 0,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Icon",
          "id": "bTxBt1",
          "default_name": "Icon A",
          "style": "Icon_standard_icon_"
        },
        "bTwhq": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 5,
            "left": 84,
            "top": 18.9453125,
            "width": 35,
            "zindex": 3,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "margin_left": 8,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTxBu1",
          "default_name": "Text B",
          "style": "Text_inter___400___14px___white_copy_"
        }
      },
      "style": "RepeatingGroup_transparent_"
    },
    "bTwhe": {
      "properties": {
        "text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": "onboarding",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "Choose Free"
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
                                    "args": {
                                      "properties": {
                                        "option_set": "option.subscription_plan",
                                        "option_value": "free"
                                      },
                                      "type": "OneOptionValue",
                                      "is_slidable": false
                                    },
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "Current plan"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "Switch to Free"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "subscription_plan_option_subscription_plan",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "organization_workspace_custom_organization",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
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
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "is_slidable": false,
              "moved_to_top": true
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "height": 4,
        "left": 29,
        "top": 311.3359375,
        "width": 96,
        "zindex": 7,
        "icon": "feather star",
        "is_visible": true,
        "order": 9,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": true,
        "min_height_css": "42px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true,
        "editor_preview_button": "Current plan"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.subscription_plan",
                        "option_value": "free"
                      },
                      "type": "OneOptionValue",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "onboarding",
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "get_group_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTxAn1"
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
                  "type": "Message",
                  "name": "subscription_plan_option_subscription_plan",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "button_disabled": true
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTxBv1",
      "default_name": "Button A",
      "name": "Button Free plan",
      "style": "Button_secondary_new_",
      "transitions": {
        "font_color": {
          "fn": "ease",
          "duration": 200
        },
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    },
    "bTwiC": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 63.1953125,
        "width": 0,
        "zindex": 9,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.subscription_plan",
        "vertical_centering": true,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 8,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTxBz1",
      "default_name": "Group B",
      "elements": {
        "bTwiD": {
          "properties": {
            "text": {
              "entries": {
                "0": "$0/"
              },
              "type": "TextExpression"
            },
            "height": 20,
            "left": -16,
            "top": -63.1953125,
            "width": 29,
            "zindex": 3,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "$0/",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTxCA1",
          "default_name": "Text B",
          "style": "Text_inter___400___24px___white_"
        },
        "bTwiH": {
          "properties": {
            "text": {
              "entries": {
                "0": "per month"
              },
              "type": "TextExpression"
            },
            "height": 9,
            "left": -16,
            "top": -63.1953125,
            "width": 63,
            "zindex": 8,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "margin_bottom": 4,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "flex-end",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTxCB1",
          "default_name": "Text B",
          "style": "Text_inter___400___16px___neutral_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTwmv": {
      "properties": {
        "height": 200,
        "left": 51,
        "top": 79.3359375,
        "width": 200,
        "zindex": 11,
        "floating_reference": "top",
        "custom_id": "bTwln",
        "data_source": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "credits_options",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "order": 4,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "param_bTwmn": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "free"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "single_width": false,
        "margin_bottom": 8,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "42px",
        "horiz_alignment": "flex-start",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTxCF1",
      "default_name": "Dropdown subscription credits A",
      "custom_definition_name": "Dropdown subscription credits"
    }
  },
  "name": "Group Subscription Free card (use button)",
  "style": "Group_dark_gf___shadow_",
  "transitions": {
    "border_color": {
      "fn": "ease",
      "duration": 200
    },
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
