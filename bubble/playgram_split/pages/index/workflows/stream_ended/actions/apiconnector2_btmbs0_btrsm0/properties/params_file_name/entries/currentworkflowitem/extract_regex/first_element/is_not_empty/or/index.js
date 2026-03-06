import { format_boolean } from './format_boolean/index.js';

export const or = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "bTvku1",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvlN1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "regex": {
          "entries": {
            "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "extract_regex",
      "is_slidable": true
    },
    "properties": {
      "btype_id": "text",
      "event_id": "bTshP",
      "optional": false,
      "param_id": "bTkdL0",
      "param_name": "data"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "or_",
  "is_slidable": false,
};
