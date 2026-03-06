import { sorted } from './sorted/index.js';

export const limit_to = {
  "next": sorted,
  "args": {
    "next": {
      "args": 1,
      "type": "Message",
      "name": "minus",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "number",
      "event_id": "bTacv0",
      "optional": false,
      "param_id": "bTtxt0",
      "param_name": "current_cell_index"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "limit_to",
  "is_slidable": false,
};
