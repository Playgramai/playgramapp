// Original path: pages/index/workflows/new_start_stream/actions/run_javascript_2/properties/aah/entries/arbitrarytext_2/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_true/entries/arbitrarytext_1/properties/arbitrary_text/entries/currentworkflowitem/not_contains
import { and } from './and/index.js';

export const not_contains = {
  "next": and,
  "args": {
    "properties": {
      "option_set": "option.llm_tool__os_",
      "option_value": "image_generation"
    },
    "type": "OneOptionValue",
    "is_slidable": false
  },
  "type": "Message",
  "name": "not_contains",
  "is_slidable": false,
};
