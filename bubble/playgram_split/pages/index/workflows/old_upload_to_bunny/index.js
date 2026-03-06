import { actions } from './actions/index.js';

export const OLD_upload_to_bunny = {
  "actions": actions,
  "properties": {
    "event_name": "OLD upload_to_bunny",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTQRX0",
        "param_name": "organization"
      },
      "1": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTQRY0",
        "param_name": "file"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTQRj0",
        "param_name": "chat"
      },
      "3": {
        "is_list": false,
        "btype_id": "option.llm_providers__os_",
        "optional": false,
        "param_id": "bTQTz0",
        "param_name": "provider"
      },
      "4": {
        "is_list": false,
        "btype_id": "user",
        "optional": true,
        "param_id": "bTTCp",
        "param_name": "user"
      }
    },
    "event_color": "red",
    "return_types": {
      "0": {
        "display": "file",
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "return_id": "bTQSO0"
      },
      "1": {
        "display": "user_image",
        "is_list": false,
        "btype_id": "image",
        "optional": true,
        "return_id": "bTcNn"
      }
    },
    "workflow_disabled": true
  },
  "type": "CustomEvent",
  "id": "bTcKR",
  "name": "OLD upload_to_bunny",
};
