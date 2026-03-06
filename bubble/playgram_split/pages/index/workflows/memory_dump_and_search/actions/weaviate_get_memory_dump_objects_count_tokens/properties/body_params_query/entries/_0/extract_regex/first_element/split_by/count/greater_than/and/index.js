import { format_boolean } from './format_boolean/index.js';

export const and = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
        "next": {
          "args": "full",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "regex": {
          "entries": {
            "0": "(?<='dump_mode'\\s*:\\s*')[^']+"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "extract_regex",
      "is_slidable": true
    },
    "properties": {
      "btype_id": "text",
      "event_id": "bTVAf0",
      "optional": false,
      "param_id": "bTVAq0",
      "param_name": "normalization"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "and_",
  "is_slidable": false,
};
