export const group_loader = {
  "properties": {
    "height": 280,
    "left": 50.5,
    "top": 34,
    "width": 280,
    "zindex": 33,
    "is_visible": false,
    "vertical_centering": true,
    "order": 13,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 6,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "100%",
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center",
    "container_horiz_alignment": "center"
  },
  "type": "Group",
  "id": "bTUcw0",
  "default_name": "Group EZ",
  "elements": {
    "bTUdU0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Creating your workspace..."
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 561.5,
        "top": 93,
        "width": 100,
        "zindex": 35,
        "order": 3,
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
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
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
                                "type": "Message",
                                "name": "not_equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "custom.selected_subscription_",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTxTP"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "subscription_custom_subscription",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTwjp"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "properties": {
              "parameter_name": {
                "entries": {
                  "0": "checkout"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Redirecting to payment\u2026"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTUdP0",
      "default_name": "Text W",
      "style": "Text_inter___400___14px____afafaf_"
    },
    "bTqYk0": {
      "properties": {
        "height": 200,
        "left": 440,
        "top": 81,
        "width": 200,
        "zindex": 36,
        "floating_reference": "top",
        "custom_id": "bTqYR0",
        "order": 2,
        "fit_width": true,
        "max_width": 100,
        "min_width": 0,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "30px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "floating_reference_horizontal": "none",
        "floating_reference_horizontal_resp": "left"
      },
      "type": "CustomElement",
      "id": "bTqYf0",
      "default_name": "[Element] Dot Loader HTML A"
    }
  },
  "name": "Group Loader",
  "style": "Group_transparent_"
};
