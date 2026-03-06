import { actions } from './actions.js';

export const stream_existing_chat = {
  "actions": actions,
  "properties": {
    "event_name": "stream_existing_chat",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTsqL1",
        "param_name": "sort"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtwk",
        "param_name": "user_message"
      },
      "2": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTtwT",
        "param_name": "regenerate"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtxz0",
        "param_name": "context"
      },
      "4": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtyD0",
        "param_name": "last_messages"
      },
      "5": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTtyE0",
        "param_name": "chat_file_regenerate"
      },
      "6": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTtyJ",
        "param_name": "user_message_date"
      },
      "7": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwED0",
        "param_name": "file_path"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTtgP0",
};
