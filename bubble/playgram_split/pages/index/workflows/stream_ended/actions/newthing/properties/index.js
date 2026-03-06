import { initial_values } from './initial_values/index.js';

export const properties = {
  "initial_values": initial_values,
  "condition": {
    "next": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "type": "Message",
      "name": "_api_c2_body.response.file_url",
      "is_slidable": false
    },
    "properties": {
      "action_id": "bTthe0"
    },
    "type": "PreviousStep",
    "is_slidable": false
  },
  "thing_type": "custom.file",
};
