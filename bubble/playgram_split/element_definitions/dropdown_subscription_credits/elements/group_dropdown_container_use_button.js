export const group_dropdown_container_use_button = {
  "properties": {
    "height": 14,
    "left": 40,
    "top": 28,
    "width": 70,
    "zindex": 2,
    "border_roundness": 12,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTwln"
      },
      "type": "GetElement",
      "is_slidable": false,
      "moved_to_top": true
    },
    "group_type": "text",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzr_default)",
    "order": 1,
    "fit_width": false,
    "fit_height": false,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "240px",
    "padding_right": 16,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwlx"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "rgba(var(--color_bTkRK4_default_rgb), 0.1)"
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
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
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTwmn",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTwln"
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
  "type": "Group",
  "id": "bTwlr",
  "default_name": "Group A",
  "elements": {
    "bTavT": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "custom.selected_credits_option_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwln"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "1": " credits/month"
          },
          "type": "TextExpression"
        },
        "height": 9,
        "left": 8,
        "top": 7,
        "width": 19,
        "zindex": 2,
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "10 000 credits/month",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
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
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTwmn",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTwln"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "2000 credits/month"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTwls",
      "default_name": "Text A",
      "style": "Text_inter___400___14px___white_"
    },
    "bTavb": {
      "properties": {
        "height": 7,
        "left": 65,
        "top": 16,
        "width": 7,
        "zindex": 3,
        "icon": "feather chevron-down",
        "icon_color": "rgba(112,112,114,1)",
        "vertical_centering": true,
        "order": 2,
        "fit_height": false,
        "padding_top": 0,
        "padding_left": 0,
        "single_width": true,
        "min_width_css": "12px",
        "padding_right": 0,
        "single_height": true,
        "min_height_css": "12px",
        "padding_bottom": 0,
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
                  "properties": {
                    "option_set": "option.subscription_plan",
                    "option_value": "free"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTwmn",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTwln"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTwlt",
      "default_name": "Icon A",
      "style": "Icon_standard_icon_"
    }
  },
  "name": "Group dropdown container (use button)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
