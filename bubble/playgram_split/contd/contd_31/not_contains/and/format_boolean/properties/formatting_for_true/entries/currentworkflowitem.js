// Original path: pages/index/workflows/new_start_stream/actions/makechangecurrentuser/properties/changes/entry_0/value/entries/arbitrarytext/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_false/entries/arbitrarytext_1/properties/arbitrary_text/entries/currentworkflowitem
export const currentworkflowitem = {
  "next": {
    "next": {
      "next": {
        "properties": {
          "formatting_for_true": {
            "entries": {
              "0": "png"
            },
            "type": "TextExpression"
          },
          "formatting_for_false": {
            "entries": {
              "0": "",
              "1": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "jpg"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": "jpeg"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
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
                  "name": "bunny_url_text",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.file",
                  "event_id": "bTnWy0",
                  "optional": true,
                  "param_id": "bTQSV0",
                  "param_name": "file"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "format_boolean",
        "is_slidable": true
      },
      "type": "Message",
      "name": "is_not_empty",
      "is_slidable": false
    },
    "type": "Message",
    "name": "png_image_text",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "custom.file",
    "event_id": "bTnWy0",
    "optional": true,
    "param_id": "bTQSV0",
    "param_name": "file"
  },
  "type": "CurrentWorkflowItem",
  "is_slidable": false
};
