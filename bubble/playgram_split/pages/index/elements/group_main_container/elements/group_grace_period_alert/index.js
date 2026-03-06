export const group_grace_period_alert = {
  "properties": {
    "height": 3,
    "left": 261,
    "top": 0,
    "width": 109,
    "zindex": 7,
    "is_visible": false,
    "order": 11,
    "use_gap": true,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "column_gap": 12,
    "fit_height": true,
    "margin_top": 8,
    "margin_left": 24,
    "margin_right": 24,
    "single_width": false,
    "margin_bottom": -16,
    "single_height": false,
    "min_height_css": "68px",
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_type__os_",
                  "option_value": "owner"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "grace_period_start_date"
                      },
                      "type": "Message",
                      "name": "organization_workspace_custom_organization",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUip0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_visible",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTukz1"
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
            "name": "user_type_option_user_type__os_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUip0"
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
  "type": "Group",
  "id": "bTyPh0",
  "default_name": "Group AZZ",
  "elements": {
    "bTyQL0": {
      "properties": {
        "height": 0,
        "left": 16,
        "top": 16,
        "width": 0,
        "zindex": 3,
        "vertical_centering": true,
        "order": 2,
        "row_gap": 6,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTyQG0",
      "default_name": "Group OZ",
      "elements": {
        "bTyQM0": {
          "properties": {
            "text": {
              "entries": {
                "0": "We couldn't process your payment."
              },
              "type": "TextExpression"
            },
            "height": 16,
            "left": -16,
            "top": -16,
            "width": 48,
            "zindex": 2,
            "line_height": 1,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "font_weight": "500",
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTyPu0",
          "default_name": "Text AZ",
          "style": "Text_inter___400___16px___white_"
        },
        "bTyQN0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Update your billing details within ",
                "1": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "grace_period_start_date",
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
                            "type": "Message",
                            "name": "to_days",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "minus",
                          "is_slidable": false
                        },
                        "properties": {
                          "name": "Current Date/Time"
                        },
                        "type": "PageData",
                        "is_slidable": false
                      },
                      "next": {
                        "args": 0,
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "0"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "grace_period_start_date",
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
                                            "type": "Message",
                                            "name": "to_days",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "minus",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "name": "Current Date/Time"
                                        },
                                        "type": "PageData",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "minus",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "convert_to_number",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "arbitrary_text": {
                                      "entries": {
                                        "0": "14"
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
                            }
                          },
                          "type": "Message",
                          "name": "format_boolean",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "less_than",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "14"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "2": " days to keep your workspace active."
              },
              "type": "TextExpression"
            },
            "height": 16,
            "left": -16,
            "top": -16,
            "width": 48,
            "zindex": 2,
            "line_height": 1,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTyQA0",
          "current_parent": "bTyPh0",
          "default_name": "Text CZ",
          "style": "Text_inter___400___14px____afafaf_"
        }
      },
      "style": "Group_transparent_"
    },
    "bTyQT0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Update Billing"
          },
          "type": "TextExpression"
        },
        "height": 26,
        "left": 623,
        "top": 30,
        "width": 49,
        "zindex": 4,
        "icon": "ionic outline chevron-forward",
        "vertical_centering": true,
        "order": 3,
        "fit_width": true,
        "icon_size": 14,
        "button_gap": 2,
        "fit_height": true,
        "button_type": "label_icon",
        "single_width": false,
        "min_width_css": "60px",
        "single_height": true,
        "icon_placement": "right",
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "Button",
      "id": "bTyQR0",
      "default_name": "Button H",
      "style": "Button_primary_new_"
    },
    "bTyQZ0": {
      "properties": {
        "height": 11,
        "left": 80,
        "top": 10,
        "width": 21,
        "zindex": 5,
        "border_color": "var(--color_bTyQk0_default)",
        "border_roundness": 8,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTyQj0_default)",
        "border_style": "solid",
        "order": 1,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "32px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "32px",
        "padding_bottom": 0,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
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
            "border_color": "var(--color_bTyRN0_default)",
            "bgcolor": "var(--color_bTyRU0_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTyQX0",
      "default_name": "Group PZ",
      "elements": {
        "bTyQf0": {
          "properties": {
            "height": 13,
            "left": 90,
            "top": 17,
            "width": 15,
            "zindex": 2,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1772438102815x651707971431319200/Group.svg"
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "margin_left": 1,
            "single_width": true,
            "min_width_css": "18px",
            "single_height": false,
            "min_height_css": "13px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "use_aspect_ratio": true,
            "aspect_ratio_width": 19,
            "aspect_ratio_height": 16,
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1772442279421x962054613401264200/Group%20201.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTyQd0",
          "default_name": "Image I",
          "name": "Image grace period alert icon",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group grace period alert icon holder"
    }
  },
  "name": "Group Grace period alert",
  "style": "Group_grace_period_alert_",
};
