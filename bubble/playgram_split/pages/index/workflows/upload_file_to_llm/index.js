import { actions } from './actions/index.js';

export const upload_file_to_llm = {
  "actions": actions,
  "properties": {
    "event_name": "upload_file_to_llm",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTcLL",
        "param_name": "signed_url"
      },
      "1": {
        "is_list": false,
        "btype_id": "option.llm_providers__os_",
        "optional": false,
        "param_id": "bTcLM",
        "param_name": "provider"
      },
      "2": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTcLf",
        "param_name": "file"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTcNc",
        "param_name": "url"
      },
      "4": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTcNd",
        "param_name": "chat"
      }
    },
    "return_types": {
      "0": {
        "display": "chat_file",
        "is_list": false,
        "btype_id": "custom.file",
        "optional": false,
        "return_id": "bTcNj"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTcLF",
};
