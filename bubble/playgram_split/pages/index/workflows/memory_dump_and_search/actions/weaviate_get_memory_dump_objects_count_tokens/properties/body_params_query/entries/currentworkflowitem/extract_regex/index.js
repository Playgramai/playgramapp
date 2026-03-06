import { first_element } from './first_element/index.js';

export const extract_regex = {
  "next": first_element,
  "properties": {
    "regex": {
      "entries": {
        "0": "(?<='memory_level'\\s*:\\s*')[^']+"
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "extract_regex",
  "is_slidable": true,
};
