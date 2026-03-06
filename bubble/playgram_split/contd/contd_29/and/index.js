// Original path: pages/index/workflows/new_start_stream/actions/run_javascript_2/properties/aah/entries/arbitrarytext_2/properties/arbitrary_text/entries/currentworkflowitem/is_true/or/format_boolean/properties/formatting_for_false/entries/arbitrarytext_1/properties/arbitrary_text/entries/currentworkflowitem/not_contains
import { format_boolean } from './format_boolean/index.js';

export const and = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
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
        "type": "Message",
        "name": "and_",
        "is_slidable": false
      },
      "type": "Message",
      "name": "is_not_empty",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "image",
      "event_id": "bTnWy0",
      "optional": true,
      "param_id": "bTcNt",
      "param_name": "user_image"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "type": "Message",
  "name": "and_",
  "is_slidable": false,
};
