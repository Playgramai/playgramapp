// Original path: pages/index/workflows/new_start_stream/actions/makechangecurrentuser/properties/changes/entry_0/value/entries/arbitrarytext/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_true/entries/currentworkflowitem_2/contains/and/format_boolean/properties
export const currentworkflowitem = {
  "next": {
    "next": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "find": {
                "entries": {
                  "0": "svg"
                },
                "type": "TextExpression"
              },
              "replace": {
                "entries": {
                  "0": "png"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "find_replace",
            "is_slidable": true
          },
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
    "name": "url",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "image",
    "event_id": "bTlOF0",
    "optional": true,
    "param_id": "bTcNt",
    "param_name": "user_image"
  },
  "type": "CurrentWorkflowItem",
  "said": "a2Vsdm8tMzE4ODQ=",
  "is_slidable": false
};
