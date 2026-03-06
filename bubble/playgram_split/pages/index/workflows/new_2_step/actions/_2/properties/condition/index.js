import { properties } from './properties/index.js';

export const condition = {
  "properties": properties,
  "next": {
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
      "type": "Message",
      "name": "unique",
      "is_slidable": false
    },
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
  "type": "ArbitraryText",
};
