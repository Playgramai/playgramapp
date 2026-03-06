import { format_boolean } from './format_boolean/index.js';

export const or = {
  "next": format_boolean,
  "args": {
    "next": {
      "args": {
        "properties": {
          "option_set": "option.llm_tool__os_",
          "option_value": "image_generation"
        },
        "type": "OneOptionValue",
        "is_slidable": false
      },
      "type": "Message",
      "name": "contains",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "list.option.llm_tool__os_",
      "event_id": "bTnWy0",
      "optional": true,
      "param_id": "bTPGl0",
      "param_name": "enabled_tools"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "or_",
  "is_slidable": false,
};
