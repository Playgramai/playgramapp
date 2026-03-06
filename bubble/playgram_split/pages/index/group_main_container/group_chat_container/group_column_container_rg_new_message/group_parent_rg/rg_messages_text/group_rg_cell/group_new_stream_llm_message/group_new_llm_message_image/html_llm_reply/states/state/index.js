import { properties } from './properties/index.js';

export const state = {
  "properties": properties,
  "condition": {
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
          "element_id": "bTtcm0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "next": {
        "args": {
          "next": {
            "next": {
              "args": 47,
              "next": {
                "args": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "{session_id: \"",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUiZ0"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "2": "\""
                      },
                      "type": "TextExpression",
                      "said": "a2Vsdm8tMzE4ODQ="
                    }
                  },
                  "type": "ArbitraryText"
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "truncated",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiXM0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "type": "Message",
        "name": "and_",
        "is_slidable": false
      },
      "type": "Message",
      "name": "equals",
      "is_slidable": false
    },
    "type": "CurrentCellsIndex",
    "is_slidable": false
  },
  "type": "State",
};
