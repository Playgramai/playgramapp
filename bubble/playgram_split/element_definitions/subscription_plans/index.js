import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const Subscription_plans = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 32,
    "element_type": "Group",
    "group_type": "text",
    "order": 6,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": true,
        "param_id": "bTxcd",
        "param_name": "organization",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 40,
    "default_width": 596,
    "min_height_px": 40,
    "element_version": 5,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "responsive_version": 1,
    "collapse_when_hidden": true,
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTxAn1",
  "name": "Subscription plans",
  "style": "Group_transparent_",
  "custom_states": {
    "plan_type_": {
      "display": "plan_type",
      "value": "text",
      "rank": 1,
      "default_val": "Annually",
      "make_static": true
    },
    "go_to_next_step_": {
      "display": "go_to_next_step",
      "value": "boolean",
      "rank": 2,
      "default_val": false,
      "make_static": true
    },
    "selected_subscription_": {
      "display": "selected_subscription",
      "value": "option.subscription_plan",
      "rank": 0,
      "default_val": "pro",
      "make_static": true
    },
    "show_user_count_alert_": {
      "display": "show_user_count_alert",
      "value": "boolean",
      "rank": 3,
      "make_static": true
    },
    "selected_credits_option_": {
      "display": "selected_credits_option",
      "value": "text",
      "rank": 4,
      "default_val": "10 000",
      "make_static": true
    }
  },
};
