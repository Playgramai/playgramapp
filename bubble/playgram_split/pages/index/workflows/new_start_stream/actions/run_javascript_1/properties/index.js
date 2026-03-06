import { AAh } from './aah/index.js';

export const properties = {
  "AAh": AAh,
  "condition": {
    "next": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "claude"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "type": "Message",
      "name": "provider",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "option.llm_models__os_",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTPyv",
      "param_name": "streaming_model"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "breakpoint": true,
};
