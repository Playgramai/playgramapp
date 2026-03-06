import { limit_to } from './limit_to/index.js';

export const list_from = {
  "next": limit_to,
  "args": {
    "next": {
      "next": {
        "next": {
          "args": 10,
          "type": "Message",
          "name": "minus",
          "is_slidable": false
        },
        "type": "Message",
        "name": "count",
        "is_slidable": false
      },
      "type": "Message",
      "name": "get_list_data",
      "is_slidable": false
    },
    "properties": {
      "element_id": "bTUhL0"
    },
    "type": "GetElement",
    "is_slidable": false
  },
  "type": "Message",
  "name": "list_from",
  "is_slidable": false,
};
