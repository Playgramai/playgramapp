export const button_a = {
  "properties": {
    "text": {
      "entries": {
        "0": "Upgrade"
      },
      "type": "TextExpression"
    },
    "height": 8,
    "left": 39,
    "top": 5.7890625,
    "width": 31,
    "zindex": 4,
    "icon": "ionic sharp rocket",
    "is_visible": false,
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "icon_size": 16,
    "fit_height": true,
    "button_type": "label",
    "single_width": false,
    "margin_bottom": 16,
    "min_width_css": "60px",
    "single_height": true,
    "icon_placement": "right",
    "min_height_css": "38px",
    "horiz_alignment": "flex-start",
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
        "font_color": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
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
                  "name": "dark_mode_boolean",
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
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.16)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "opacity": 50
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "bTnVR1": {
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
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      }
    }
  },
  "type": "Button",
  "id": "bTxAH1",
  "default_name": "Button A",
  "style": "Button_primary_new_",
  "transitions": {
    "font_color": {
      "fn": "ease",
      "duration": 200
    },
    "icon_color": {
      "fn": "ease",
      "duration": 200
    },
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
