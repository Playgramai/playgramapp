import { properties } from './properties/index.js';

export const arg_value = {
  "properties": properties,
  "next": {
    "next": {
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
  "said": "a2Vsdm8tMzE4ODQ=",
};
