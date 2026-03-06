import { actions } from './actions/index.js';

export const create_stripe_session = {
  "actions": actions,
  "properties": {
    "event_name": "create_stripe_session",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTxaR0",
        "param_name": "organization"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxaG0",
};
