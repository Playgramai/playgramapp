import { limit_to } from './limit_to/index.js';

export const list_from = {
  "next": limit_to,
  "args": {
    "next": {
      "args": 10,
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
  "name": "list_from",
  "is_slidable": false,
};
