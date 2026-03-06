import { currentworkflowitem } from './currentworkflowitem/index.js';

export const entries = {
  "0": {
    "next": {
      "properties": {
        "tz_type": "browser",
        "component_to_extract": "UNIX"
      },
      "type": "Message",
      "name": "extract_from_date",
      "is_slidable": true
    },
    "properties": {
      "name": "Current Date/Time"
    },
    "type": "PageData",
    "is_slidable": false
  },
  "1": "",
  "2": currentworkflowitem,
  "3": "",
};
