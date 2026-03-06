// Original path: pages/index/workflows/new_start_stream/actions/run_javascript/properties/aah/entries/arbitrarytext_1/properties/arbitrary_text/entries/arbitrarytext_4/properties/arbitrary_text/entries/currentworkflowitem/is_not_empty/format_boolean/properties/formatting_for_true/entries/currentworkflowitem/url/contains
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
