import { properties } from './properties.js';

export const state_3 = {
  "properties": properties,
  "condition": {
    "next": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "regex": {
          "entries": {
            "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "extract_regex",
      "is_slidable": true
    },
    "type": "ElementParent",
    "is_slidable": false
  },
  "type": "State",
};
