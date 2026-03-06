// Original path: pages/index/workflows/memory_dump_and_search/actions/weaviate_get_memory_dump_objects_count_tokens/properties/body_params_query/entries/currentworkflowitem/extract_regex/first_element/split_by/count/greater_than/and/format_boolean/properties/formatting_for_false/entries/currentworkflowitem/extract_regex
import { first_element } from './first_element/index.js';

export const extract_regex = {
  "next": first_element,
  "properties": {
    "regex": {
      "entries": {
        "0": "(?<='memory_level'\\s*:\\s*')[^']+"
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "extract_regex",
  "is_slidable": true,
};
