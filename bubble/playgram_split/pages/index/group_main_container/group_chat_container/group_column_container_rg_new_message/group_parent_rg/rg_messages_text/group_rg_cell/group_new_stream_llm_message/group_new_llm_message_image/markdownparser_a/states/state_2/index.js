import { properties } from './properties/index.js';

export const state_2 = {
  "properties": properties,
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": "error_returned",
                    "type": "Message",
                    "name": "not_equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
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
            "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "extract_regex",
      "is_slidable": true
    },
    "type": "ElementParent",
    "is_slidable": false
  },
  "type": "State",
};
