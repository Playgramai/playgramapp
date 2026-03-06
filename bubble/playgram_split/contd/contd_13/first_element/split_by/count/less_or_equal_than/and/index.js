// Original path: pages/index/workflows/memory_dump_and_search/actions/weaviate_get_memory_dump_objects_count_tokens/properties/body_params_query/entries/currentworkflowitem/extract_regex/first_element/split_by/count/greater_than/and/format_boolean/properties/formatting_for_false/entries/currentworkflowitem/extract_regex
import { format_boolean } from './format_boolean/index.js';

export const and = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
        "next": {
          "args": "full",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "regex": {
          "entries": {
            "0": "(?<='dump_mode'\\s*:\\s*')[^']+"
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
      "event_id": "bTVAf0",
      "optional": false,
      "param_id": "bTVAq0",
      "param_name": "normalization"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "and_",
  "is_slidable": false,
};
