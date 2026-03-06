import { properties } from './properties/index.js';

export const format_boolean = {
  "properties": properties,
  "next": {
    "properties": {
      "separator": {
        "entries": {
          "0": ","
        },
        "type": "TextExpression"
      }
    },
    "type": "Message",
    "name": "split_by",
    "is_slidable": true
  },
  "type": "Message",
  "name": "format_boolean",
  "is_slidable": true,
};
