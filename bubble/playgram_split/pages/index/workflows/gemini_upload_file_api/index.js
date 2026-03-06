import { actions } from './actions.js';

export const gemini_upload_file_api = {
  "actions": actions,
  "properties": {
    "event_name": "gemini_upload_file_api",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTjCP",
        "param_name": "file"
      }
    },
    "return_types": {
      "0": {
        "display": "file_uri",
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "return_id": "bTjCr"
      },
      "1": {
        "display": "file_size",
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "return_id": "bTjCs"
      },
      "2": {
        "display": "gemini_file_name",
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "return_id": "bTjCt"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTjCH",
};
