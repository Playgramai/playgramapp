import { data_source } from './data_source/index.js';

export const properties = {
  "data_source": data_source,
  "condition": {
    "next": {
      "type": "Message",
      "name": "is_false",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "boolean",
      "event_id": "bTtgP0",
      "optional": true,
      "param_id": "bTtwT",
      "param_name": "regenerate"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "element_id": "bTtcm0",
};
