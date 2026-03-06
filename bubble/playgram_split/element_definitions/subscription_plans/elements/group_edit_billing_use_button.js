export const group_edit_billing_use_button = {
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
};
