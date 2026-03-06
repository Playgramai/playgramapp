import { and } from './and/index.js';

export const not_equals = {
  "next": and,
  "args": {
    "properties": {
      "option_set": "option.llm_providers__os_",
      "option_value": "gemini"
    },
    "type": "OneOptionValue",
    "is_slidable": false
  },
  "type": "Message",
  "name": "not_equals",
  "is_slidable": false,
};
