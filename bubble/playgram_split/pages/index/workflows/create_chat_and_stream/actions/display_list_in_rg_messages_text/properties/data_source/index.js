import { properties } from './properties/index.js';

export const data_source = {
  "properties": properties,
  "next": {
    "properties": {
      "separator": {
        "entries": {
          "0": "<#NANI?!>"
        },
        "type": "TextExpression"
      }
    },
    "type": "Message",
    "name": "split_by",
    "is_slidable": true
  },
  "type": "ArbitraryText",
};
