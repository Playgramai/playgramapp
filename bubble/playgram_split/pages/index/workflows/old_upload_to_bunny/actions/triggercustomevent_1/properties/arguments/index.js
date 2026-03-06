import { entry_0 } from './entry_0/index.js';

export const arguments = {
  "0": entry_0,
  "1": {
    "param_id": "bTcLM",
    "arg_value": {
      "properties": {
        "btype_id": "option.llm_providers__os_",
        "event_id": "bTcKR",
        "optional": false,
        "param_id": "bTQTz0",
        "param_name": "provider"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "2": {
    "param_id": "bTcLf",
    "arg_value": {
      "properties": {
        "btype_id": "file",
        "event_id": "bTcKR",
        "optional": false,
        "param_id": "bTQRY0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "3": {
    "param_id": "bTcNc",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.response.file_url",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTrTt0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "4": {
    "param_id": "bTcNd",
    "arg_value": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTcKR",
        "optional": false,
        "param_id": "bTQRj0",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
};
