import { properties } from './properties/index.js';

export const arbitrarytext_1 = {
  "properties": properties,
  "next": {
    "next": {
      "properties": {
        "constraints": {
          "0": {
            "key": "_advanced_search_constraint",
            "value": {
              "next": {
                "args": "{",
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "constraint_type": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "Message",
      "name": "filtered",
      "is_slidable": true
    },
    "properties": {
      "separator": {
        "entries": {
          "0": "<#NANI?>"
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
