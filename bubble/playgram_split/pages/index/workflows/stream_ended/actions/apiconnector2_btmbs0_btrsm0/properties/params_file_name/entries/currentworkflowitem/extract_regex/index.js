import { first_element } from './first_element/index.js';

export const extract_regex = {
  "next": first_element,
  "properties": {
    "regex": {
      "entries": {
        "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "extract_regex",
  "is_slidable": true,
};
