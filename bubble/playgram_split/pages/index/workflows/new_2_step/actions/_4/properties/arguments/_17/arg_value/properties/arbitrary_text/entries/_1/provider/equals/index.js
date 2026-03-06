import { format_boolean } from './format_boolean/index.js';

export const equals = {
  "next": format_boolean,
  "args": {
    "properties": {
      "option_set": "option.llm_providers__os_",
      "option_value": "gemini"
    },
    "type": "OneOptionValue",
    "is_slidable": false
  },
  "type": "Message",
  "name": "equals",
  "is_slidable": false,
};
