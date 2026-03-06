import { Group_subscription_plans_cards_container } from './group_subscription_plans_cards_container/index.js';
import { Group_plan_type_toggle_sca_element_container } from './group_plan_type_toggle_sca_element_container.js';

export const elements = {
  "bTxCG1": Group_subscription_plans_cards_container,
  "bTxfX": Group_plan_type_toggle_sca_element_container,
  "bTxmN": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 6,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "order": 5,
      "use_gap": false,
      "fit_width": true,
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "min_height_css": "20px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "border_color_top": "rgba(107,107,107,0)",
      "border_style_top": "solid",
      "container_layout": "row",
      "four_border_style": false,
      "border_color_bottom": "rgba(107,107,107,0)",
      "border_style_bottom": "solid",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": "onboarding",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "active_boolean",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTxcd",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxAn1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
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
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "subscription_plan_option_subscription_plan",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "param_bTxcd",
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
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTxfj",
    "default_name": "Group F",
    "elements": {
      "bTxfp": {
        "properties": {
          "text": {
            "entries": {
              "0": "Change billing details"
            },
            "type": "TextExpression"
          },
          "height": 16,
          "left": 0,
          "top": 0,
          "width": 63,
          "zindex": 5,
          "font_color": "rgba(175,175,175,1)",
          "font_size": 14,
          "line_height": 1.2,
          "vertical_centering": true,
          "order": 7,
          "fit_width": true,
          "fit_height": true,
          "font_weight": "300",
          "margin_left": 8,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "editor_preview_text": "Best way to try multi-model magic",
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
                "element_id": "bTxfj"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "font_color": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#245662"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#80BDCB"
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
        "type": "Text",
        "id": "bTxfP",
        "current_parent": "bTxAn1",
        "default_name": "Text E",
        "transitions": {
          "font_color": {
            "fn": "ease",
            "duration": 200
          }
        }
      },
      "bTxmq": {
        "properties": {
          "height": 20,
          "left": -38,
          "top": -20,
          "width": 38,
          "zindex": 10,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "text",
          "vertical_centering": true,
          "order": 5,
          "fit_width": true,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "20px",
          "single_height": false,
          "min_height_css": "20px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTxml",
        "default_name": "Group H",
        "elements": {
          "bTxmr": {
            "properties": {
              "height": 200,
              "left": 0,
              "top": 0,
              "width": 200,
              "zindex": 2,
              "floating_reference": "top",
              "custom_id": "bTLgB",
              "is_visible": false,
              "order": 6,
              "max_width": 100,
              "min_width": 0,
              "fit_height": true,
              "margin_top": -4,
              "param_bTUaI": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "next": {
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "#245662"
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "#80BDCB"
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
                  },
                  "2": ""
                },
                "type": "TextExpression"
              },
              "single_width": true,
              "min_width_css": "18px",
              "single_height": true,
              "min_height_css": "18px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "bb",
              "collapse_when_hidden": true,
              "floating_reference_horizontal": "none",
              "floating_reference_horizontal_resp": "left"
            },
            "type": "CustomElement",
            "id": "bTxlv",
            "default_name": "Circle Loader A",
            "name": "Circle Loader Edit billing"
          },
          "bTxmv": {
            "properties": {
              "height": 240,
              "left": 0,
              "top": 0,
              "width": 320,
              "zindex": 1,
              "src": {
                "entries": {
                  "0": "https://95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1771403175713x309352695307843600/Type%3DSubscription%2C%20State%3DActive.svg?_gl=1*1fz4mi7*_gcl_aw*R0NMLjE3NzEyNDA3MzIuQ2p3S0NBaUFuY3ZNQmhCRUVpd0E5R1VfZm1ROVphN3JEV2RSaElrNi1pTWFGaWIxV21qZGR4TU5RQ3UyeW9icG5VQ2hCZ3JWNG9CeGFCb0NGQk1RQXZEX0J3RQ..*_gcl_au*MTkyNzkyNTIyLjE3NzE1OTQyMjA.*_ga*OTgyMDUyMzUxLjE3MjA3MTgzNTM.*_ga_BFPVR2DEE2*czE3NzE1Njc3ODMkbzIzOSRnMSR0MTc3MTU5OTcxNCRqMzEkbDAkaDA."
                },
                "type": "TextExpression"
              },
              "order": 2,
              "fit_height": true,
              "single_width": true,
              "min_width_css": "20px",
              "single_height": false,
              "min_height_css": "240px",
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "ab",
              "use_aspect_ratio": true,
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxfj"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "src": {
                    "entries": {
                      "0": "https://95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1771403171871x128326826828351280/Type%3DSubscription%2C%20State%3DDefault.svg?_gl=1*vmh5db*_gcl_aw*R0NMLjE3NzEyNDA3MzIuQ2p3S0NBaUFuY3ZNQmhCRUVpd0E5R1VfZm1ROVphN3JEV2RSaElrNi1pTWFGaWIxV21qZGR4TU5RQ3UyeW9icG5VQ2hCZ3JWNG9CeGFCb0NGQk1RQXZEX0J3RQ..*_gcl_au*MTkyNzkyNTIyLjE3NzE1OTQyMjA.*_ga*OTgyMDUyMzUxLjE3MjA3MTgzNTM.*_ga_BFPVR2DEE2*czE3NzE1Njc3ODMkbzIzOSRnMSR0MTc3MTU5OTY1NSRqNiRsMCRoMA.."
                    },
                    "type": "TextExpression"
                  }
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
                    "element_id": "bTxlv"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": false
                },
                "type": "State"
              }
            },
            "type": "Image",
            "id": "bTxmf",
            "default_name": "Image A",
            "name": "Image edit billing",
            "style": "Image_standard_image_"
          }
        },
        "name": "Group parent icon manage billing/loader",
        "style": "Group_transparent_"
      }
    },
    "name": "Group edit billing (use button)",
    "style": "Group_transparent_",
    "transitions": {
      "border_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTylx0": {
    "properties": {
      "height": 0,
      "left": 10,
      "top": 10,
      "width": 0,
      "zindex": 6,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "is_visible": false,
      "vertical_centering": true,
      "order": 6,
      "use_gap": false,
      "fit_width": true,
      "column_gap": 12,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "min_height_css": "20px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "border_color_top": "rgba(107,107,107,0)",
      "border_style_top": "solid",
      "container_layout": "row",
      "four_border_style": false,
      "border_color_bottom": "rgba(107,107,107,0)",
      "border_style_bottom": "solid",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "next": {
              "args": "onboarding",
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "active_boolean",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "param_bTxcd",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxAn1"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
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
                          "type": "Message",
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "subscription_plan_option_subscription_plan",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "param_bTxcd",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTxAn1"
                    },
                    "type": "GetElement",
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
                            "name": "current_period_end_date",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "subscription_custom_subscription",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "param_bTxcd",
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
                "name": "and_",
                "is_slidable": false
              },
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
        "properties": {
          "is_visible": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTylS0",
    "current_parent": "bTxAn1",
    "default_name": "Group M",
    "elements": {
      "bTymB0": {
        "properties": {
          "text": {
            "entries": {
              "0": "Renews on ",
              "1": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_type": "mmm d, yyyy"
                        },
                        "type": "Message",
                        "name": "format_date",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "current_period_end_date",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "subscription_custom_subscription",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "param_bTxcd",
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
          "height": 16,
          "left": 0,
          "top": 0,
          "width": 63,
          "zindex": 5,
          "font_color": "rgba(175,175,175,1)",
          "font_size": 14,
          "line_height": 1.2,
          "vertical_centering": true,
          "order": 7,
          "fit_width": true,
          "fit_height": true,
          "font_weight": "300",
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTylX0",
        "current_parent": "bTxAn1",
        "default_name": "Text J",
        "transitions": {
          "font_color": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Paid by",
    "style": "Group_transparent_",
    "transitions": {
      "border_color": {
        "fn": "ease",
        "duration": 200
      }
    }
  },
  "bTxoP": {
    "properties": {
      "height": 53,
      "left": -125,
      "top": -43,
      "width": 135,
      "zindex": 32,
      "border_color": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#245662"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#80BDCB"
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
      "is_visible": false,
      "bgcolor": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#80BDCB29"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#80bdcb2a"
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
      "order": 12,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 12,
      "single_width": false,
      "max_width_css": "920px",
      "min_width_css": "40px",
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTxoF",
    "current_parent": "bTxAn1",
    "default_name": "Group I",
    "elements": {
      "bTxLl": {
        "properties": {
          "text": {
            "entries": {
              "0": "Your subscription was updated successfully"
            },
            "type": "TextExpression"
          },
          "height": 15,
          "left": -99,
          "top": -15,
          "width": 99,
          "zindex": 2,
          "font_color": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#245662"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#80BDCB"
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
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 1,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxoK",
        "default_name": "Text G",
        "style": "Text_body_14__error__"
      },
      "bTxLr": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled checkmark-circle",
          "icon_color": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#245662"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#80BDCB"
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
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTxoL",
        "current_parent": "bTxLd",
        "default_name": "Icon D",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group subscription success alert",
    "style": "Group_error_"
  },
  "bTyEM": {
    "properties": {
      "height": 53,
      "left": -125,
      "top": -43,
      "width": 135,
      "zindex": 32,
      "is_visible": false,
      "order": 10,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 12,
      "single_width": false,
      "max_width_css": "920px",
      "min_width_css": "40px",
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": "onboarding",
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
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "isnt_visible",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTxLd"
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
            "name": "not_equals",
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
    "type": "Group",
    "id": "bTyEF",
    "current_parent": "bTxAn1",
    "default_name": "Group L",
    "elements": {
      "bTxLl": {
        "properties": {
          "text": {
            "entries": {
              "0": "Your last payment was not successful - we\u2019ll retry over the next 2 weeks. Please check your available balance to avoid expiration after the grace period."
            },
            "type": "TextExpression"
          },
          "height": 15,
          "left": -99,
          "top": -15,
          "width": 99,
          "zindex": 2,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 1,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTyEH",
        "default_name": "Text I",
        "name": "Text We couldn\u2019t process ",
        "style": "Text_body_14__error__"
      },
      "bTxLr": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled alert-circle",
          "icon_color": "var(--color_bTGzw_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTyEL",
        "current_parent": "bTxLd",
        "default_name": "Icon F",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group grace period alert",
    "style": "Group_error_"
  },
  "bTxgp1": {
    "properties": {
      "height": 145,
      "left": -213,
      "top": -145,
      "width": 213,
      "zindex": 34,
      "row_gap": 32,
      "use_gap": true,
      "fit_width": true,
      "fit_height": true,
      "single_width": true,
      "min_width_css": "380px",
      "single_height": false,
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true,
      "container_vert_alignment": "flex-start"
    },
    "type": "Popup",
    "id": "bTxgM1",
    "default_name": "Popup A",
    "elements": {
      "bTxgv1": {
        "properties": {
          "text": {
            "entries": {
              "0": "Are you sure you want to switch your workspace to a Free plan?"
            },
            "type": "TextExpression"
          },
          "height": 29,
          "left": -101,
          "top": -29,
          "width": 101,
          "zindex": 2,
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "margin_top": 16,
          "margin_left": 16,
          "margin_right": 16,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxgq1",
        "default_name": "Text F",
        "style": "Text_inter___400___18px___white_"
      },
      "bTxhN1": {
        "properties": {
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "zindex": 5,
          "vertical_centering": true,
          "order": 3,
          "use_gap": true,
          "fit_width": false,
          "column_gap": 8,
          "fit_height": true,
          "margin_left": 16,
          "margin_right": 16,
          "single_width": false,
          "margin_bottom": 16,
          "min_width_css": "40px",
          "single_height": false,
          "min_height_css": "40px",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTxhI1",
        "default_name": "Group G",
        "elements": {
          "bTxhO1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Cancel"
                },
                "type": "TextExpression"
              },
              "height": 43,
              "left": -16,
              "top": -16,
              "width": 86,
              "zindex": 4,
              "icon": "ionic outline star",
              "vertical_centering": true,
              "order": 2,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "42px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTxhC1",
            "default_name": "Button C",
            "style": "Button_primary_new_"
          },
          "bTxhP1": {
            "properties": {
              "text": {
                "entries": {
                  "0": "Switch to Free"
                },
                "type": "TextExpression"
              },
              "height": 23,
              "left": -16,
              "top": -16,
              "width": 100,
              "zindex": 3,
              "icon": "ionic outline star",
              "order": 1,
              "fit_width": false,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "42px",
              "horiz_alignment": "flex-start",
              "collapse_when_hidden": true
            },
            "type": "Button",
            "id": "bTxgw1",
            "default_name": "Button B",
            "style": "Button_secondary_new_"
          }
        },
        "name": "Group buttons container",
        "style": "Group_transparent_"
      }
    },
    "name": "Popup switch to free confirmation",
    "style": "Popup_new_popup_"
  },
  "bTxLf": {
    "properties": {
      "height": 53,
      "left": -135,
      "top": -53,
      "width": 135,
      "zindex": 32,
      "is_visible": false,
      "order": 9,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 12,
      "single_width": false,
      "max_width_css": "920px",
      "min_width_css": "40px",
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": "onboarding",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_false",
                        "is_slidable": false
                      },
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_equals",
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
    "type": "Group",
    "id": "bTxLd",
    "default_name": "Group C",
    "elements": {
      "bTxLl": {
        "properties": {
          "text": {
            "entries": {
              "0": "Your subscription wasn\u2019t renewed and is now on hold. Please resubscribe to your subscription or switch to Free plan to continue using Playgram. "
            },
            "type": "TextExpression"
          },
          "height": 15,
          "left": -99,
          "top": -15,
          "width": 99,
          "zindex": 2,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 1,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxLj",
        "default_name": "Text C",
        "style": "Text_body_14__error__"
      },
      "bTxLr": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled alert-circle",
          "icon_color": "var(--color_bTGzw_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTxLp",
        "current_parent": "bTxLd",
        "default_name": "Icon B",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group subscription error alert",
    "style": "Group_error_"
  },
  "bTxMU": {
    "properties": {
      "height": 53,
      "left": -125,
      "top": -43,
      "width": 135,
      "zindex": 32,
      "border_roundness": 12,
      "is_visible": false,
      "background_style": "bgcolor",
      "bgcolor": "var(--color_bTkRJ4_default)",
      "order": 8,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 12,
      "padding_left": 16,
      "single_width": false,
      "max_width_css": "900px",
      "min_width_css": "40px",
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
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
            "name": "custom.show_user_count_alert_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTxAn1"
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
    "id": "bTxMN",
    "current_parent": "bTxAn1",
    "default_name": "Group D",
    "elements": {
      "bTxLl": {
        "properties": {
          "text": {
            "entries": {
              "0": "Only 3 users (including you) are available on the Free plan. Please adjust the list of users on the [u]Members tab[/u] before switching."
            },
            "type": "TextExpression"
          },
          "height": 15,
          "left": -99,
          "top": -15,
          "width": 99,
          "zindex": 2,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "link_color": "var(--color_bTkRR4_default)",
          "margin_top": 1,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "recognize_links": false,
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxMP",
        "default_name": "Text D",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTxLr": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled information-circle",
          "icon_color": "var(--color_bTGzv_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTxMT",
        "current_parent": "bTxLd",
        "default_name": "Icon C",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group Users count alert",
    "style": "Group_border_"
  },
  "bTxrb": {
    "properties": {
      "height": 53,
      "left": -125,
      "top": -43,
      "width": 135,
      "zindex": 32,
      "is_visible": false,
      "order": 11,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "padding_top": 12,
      "single_width": false,
      "max_width_css": "920px",
      "min_width_css": "40px",
      "padding_right": 12,
      "single_height": false,
      "padding_bottom": 12,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "type": "Group",
    "id": "bTxrR",
    "current_parent": "bTxAn1",
    "default_name": "Group K",
    "elements": {
      "bTxLl": {
        "properties": {
          "text": {
            "entries": {
              "0": "Something went wrong while upgrading your subscription. Please check your card balance or payment details and try again."
            },
            "type": "TextExpression"
          },
          "height": 15,
          "left": -99,
          "top": -15,
          "width": 99,
          "zindex": 2,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "margin_top": 1,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTxrW",
        "default_name": "Text H",
        "style": "Text_body_14__error__"
      },
      "bTxLr": {
        "properties": {
          "height": 12,
          "left": 0,
          "top": 0,
          "width": 12,
          "zindex": 2,
          "icon": "ionic filled alert-circle",
          "icon_color": "var(--color_bTGzw_default)",
          "vertical_centering": true,
          "order": 1,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "20px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "20px",
          "padding_bottom": 0,
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Icon",
        "id": "bTxrX",
        "current_parent": "bTxLd",
        "default_name": "Icon E",
        "style": "Icon_standard_icon_"
      }
    },
    "name": "Group failed payment",
    "style": "Group_error_"
  },
};
