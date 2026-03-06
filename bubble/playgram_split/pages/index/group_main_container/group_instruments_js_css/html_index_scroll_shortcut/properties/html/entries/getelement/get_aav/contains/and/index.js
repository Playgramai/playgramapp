import { format_boolean } from './format_boolean/index.js';

export const and = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "count",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_list_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTulV1"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "convert_to_number",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "separator": {
                "entries": {
                  "0": "hoverIndex"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "split_by",
            "is_slidable": true
          },
          "type": "Message",
          "name": "last_element",
          "is_slidable": false
        },
        "properties": {
          "separator": {
            "entries": {
              "0": "arrowIndex="
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "split_by",
        "is_slidable": true
      },
      "type": "Message",
      "name": "get_AAV",
      "is_slidable": false
    },
    "properties": {
      "element_id": "bTuQJ1"
    },
    "type": "GetElement",
    "is_slidable": false
  },
  "type": "Message",
  "name": "and_",
  "is_slidable": false,
};
