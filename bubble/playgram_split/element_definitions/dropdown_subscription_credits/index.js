import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const Dropdown_subscription_credits = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "text",
    "background_style": "none",
    "bgcolor": "rgba(47, 47, 47, 1)",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.subscription_plan",
        "optional": true,
        "param_id": "bTwmn",
        "param_name": "Subscription_plan",
        "editor_type": "DynamicValue",
        "default_value": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "pro"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        }
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": true,
        "param_id": "bTxdB",
        "param_name": "organization",
        "editor_type": "DynamicValue"
      }
    },
    "max_width_px": 80,
    "min_width_px": 0,
    "default_width": 260,
    "max_height_px": 42,
    "min_height_px": 42,
    "wf_folder_list": {
      "bTqIt0": "Project",
      "bTqIu0": "User Settings"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTwln",
  "name": "Dropdown subscription credits",
  "custom_states": {
    "selected_credits_option_": {
      "display": "selected_credits_option",
      "value": "text",
      "rank": 0,
      "default_val": "10 000",
      "make_static": true
    }
  },
};
