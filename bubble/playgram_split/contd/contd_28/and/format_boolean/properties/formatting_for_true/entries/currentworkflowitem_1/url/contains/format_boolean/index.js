// Original path: pages/index/workflows/new_start_stream/actions/run_javascript_2/properties/aah/entries/arbitrarytext_2/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_true/entries/arbitrarytext_1/properties/arbitrary_text/entries/currentworkflowitem/not_contains
import { properties } from './properties/index.js';

export const format_boolean = {
  "properties": properties,
  "next": {
    "properties": {
      "find": {
        "entries": {
          "0": "https:https:"
        },
        "type": "TextExpression"
      },
      "replace": {
        "entries": {
          "0": "https:"
        },
        "type": "TextExpression"
      }
    },
    "type": "Message",
    "name": "find_replace",
    "is_slidable": true
  },
  "type": "Message",
  "name": "format_boolean",
  "is_slidable": true,
};
