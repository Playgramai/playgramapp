import { arguments } from './arguments/index.js';

export const properties = {
  "arguments": arguments,
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_advanced_search_constraint",
                      "value": {
                        "next": {
                          "next": {
                            "args": "image",
                            "type": "Message",
                            "name": "not_contains",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "mime_type",
                          "is_slidable": false
                        },
                        "type": "InjectedValue",
                        "is_slidable": false
                      },
                      "constraint_type": {
                        "type": "Empty"
                      }
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "properties": {
                "option_set": "option.file_types__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "type": "Message",
            "name": "is_contained_by_list",
            "is_slidable": false
          },
          "type": "Message",
          "name": "last_element",
          "is_slidable": false
        },
        "properties": {
          "separator": {
            "entries": {
              "0": "."
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "split_by",
        "is_slidable": true
      },
      "type": "Message",
      "name": "url",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "file",
      "event_id": "bTcKR",
      "optional": false,
      "param_id": "bTQRY0",
      "param_name": "file"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "custom_event": "bTcLF",
};
