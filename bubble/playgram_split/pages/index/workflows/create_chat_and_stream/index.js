import { actions } from './actions/index.js';

export const create_chat_and_stream = {
  "actions": actions,
  "properties": {
    "event_name": "create_chat_and_stream",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTssP1",
        "param_name": "sort"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwEH0",
        "param_name": "file_path"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTtgt0",
};
