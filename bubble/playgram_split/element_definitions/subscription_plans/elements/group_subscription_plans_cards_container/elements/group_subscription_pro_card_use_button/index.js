import { elements } from './elements/index.js';

export const group_subscription_pro_card_use_button = {
  "elements": elements,
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
        "option_value": "pro"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "group_type": "option.subscription_plan",
    "bgcolor": "var(--color_bTkRJ4_default)",
    "border_style": "solid",
    "order": 2,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 16,
    "margin_right": 0,
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
        "is_slidable": false
      },
      "properties": {
        "border_color": "var(--color_bTkRV4_default)",
        "button_disabled": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTxBK1",
  "current_parent": "bTwfI",
  "default_name": "Group B",
  "name": "Group Subscription Pro card (use button)",
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
