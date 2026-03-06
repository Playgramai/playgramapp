// Original path: pages/index/workflows/memory_dump_and_search/actions/weaviate_get_memory_dump_objects_count_tokens/properties/body_params_query/entries/currentworkflowitem/extract_regex/first_element/split_by/count/greater_than/and/format_boolean/properties/formatting_for_false/entries/currentworkflowitem/extract_regex
import { count } from './count/index.js';

export const split_by = {
  "next": count,
  "properties": {
    "separator": {
      "entries": {
        "0": ", "
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "split_by",
  "is_slidable": true,
};
