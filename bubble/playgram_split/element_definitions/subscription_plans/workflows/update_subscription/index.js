import { actions } from './actions/index.js';

export const update_subscription = {
  "actions": actions,
  "properties": {
    "event_name": "update_subscription",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTxop",
        "param_name": "organization"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxoh",
};
