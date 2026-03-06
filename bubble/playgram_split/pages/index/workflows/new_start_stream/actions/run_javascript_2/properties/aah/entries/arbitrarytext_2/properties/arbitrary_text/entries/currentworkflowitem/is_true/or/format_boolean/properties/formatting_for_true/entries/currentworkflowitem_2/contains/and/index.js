import { format_boolean } from './format_boolean/index.js';

export const and = {
  "next": format_boolean,
  "args": {
    "next": {
      "next": {
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
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTpbc1",
            "param_name": "image_gen_needed"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "type": "Message",
        "name": "or_",
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
