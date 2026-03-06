export const group_step_1 = {
  "properties": {
    "height": 0,
    "left": 10,
    "top": 207.9921875,
    "width": 0,
    "zindex": 29,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.onboarding_steps__os_",
    "is_visible": false,
    "vertical_centering": true,
    "order": 8,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.onboarding_steps__os_",
              "option_value": "step_4"
            },
            "type": "OneOptionValue",
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
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTwfI",
  "current_parent": "bTPVZ",
  "default_name": "Group AZZ",
  "elements": {
    "bTPYr": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 259.59375,
        "width": 0,
        "zindex": 30,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.onboarding_steps__os_",
        "vertical_centering": true,
        "order": 9,
        "fit_width": false,
        "fit_height": true,
        "margin_top": 16,
        "single_width": false,
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
              "type": "Message",
              "name": "isnt_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTwfm"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "container_horiz_alignment": "flex-end"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTwfh",
      "default_name": "Group AZZ",
      "elements": {
        "bTQFT": {
          "properties": {
            "text": {
              "entries": {
                "0": "Back"
              },
              "type": "TextExpression"
            },
            "height": 44,
            "left": 0,
            "top": 0,
            "width": 150,
            "zindex": 24,
            "icon": "ionic outline arrow-back",
            "is_visible": false,
            "order": 2,
            "fit_width": true,
            "icon_size": 16,
            "fit_height": true,
            "button_type": "label_icon",
            "single_width": false,
            "max_width_css": "350px",
            "min_width_css": "120px",
            "single_height": false,
            "min_height_css": "36px",
            "horiz_alignment": "flex-start",
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
                  "name": "onboarding_finished__boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            }
          },
          "type": "Button",
          "id": "bTwfm",
          "current_parent": "bTPYp",
          "default_name": "Button R",
          "name": "Button Go Index Page",
          "style": "Button_subtle_new_"
        }
      },
      "name": "Group Buttons",
      "style": "Group_transparent_"
    },
    "bTxAh1": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 32,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.onboarding_steps__os_",
        "vertical_centering": true,
        "order": 6,
        "row_gap": 16,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "40px",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTxAf1",
      "default_name": "Group HZZ",
      "elements": {
        "bTxTR": {
          "properties": {
            "height": 0,
            "left": 276,
            "top": 22.8359375,
            "width": 0,
            "zindex": 32,
            "floating_reference": "top",
            "custom_id": "bTxAn1",
            "data_source": "onboarding",
            "order": 1,
            "max_width": 100,
            "min_width": 0,
            "fit_height": true,
            "param_bTxcd": {
              "next": {
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
            "single_width": false,
            "min_width_css": "40px",
            "single_height": false,
            "min_height_css": "40px",
            "horiz_alignment": "flex-start",
            "floating_reference_horizontal": "none",
            "floating_reference_horizontal_resp": "left"
          },
          "type": "CustomElement",
          "id": "bTxTP",
          "default_name": "Subscription plans A"
        }
      },
      "name": "Group subscription plans",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Step 1 ",
  "style": "Group_transparent_"
};
