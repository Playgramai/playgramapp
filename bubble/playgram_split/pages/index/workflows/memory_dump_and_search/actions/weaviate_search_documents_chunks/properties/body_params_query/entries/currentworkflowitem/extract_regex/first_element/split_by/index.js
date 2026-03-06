import { count } from './count/index.js';

export const split_by = {
  "next": count,
  "properties": {
    "separator": {
      "entries": {
        "0": ", "
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "split_by",
  "is_slidable": true,
};
