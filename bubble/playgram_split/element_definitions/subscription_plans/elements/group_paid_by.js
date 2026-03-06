export const group_paid_by = {
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
};
