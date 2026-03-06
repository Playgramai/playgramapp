import { and } from './and/index.js';

export const contains = {
  "next": and,
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
  "is_slidable": false,
};
