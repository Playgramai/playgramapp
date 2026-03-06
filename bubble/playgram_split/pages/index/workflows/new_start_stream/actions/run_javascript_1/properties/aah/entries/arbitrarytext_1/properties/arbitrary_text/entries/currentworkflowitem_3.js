export const currentworkflowitem_3 = {
  "next": {
    "args": {
      "properties": {
        "option_set": "option.llm_tool__os_",
        "option_value": "web_search"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "next": {
      "args": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "boolean",
          "event_id": "bTnWy0",
          "optional": false,
          "param_id": "bTkhT",
          "param_name": "web_search_needed"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "next": {
        "properties": {
          "formatting_for_true": {
            "entries": {
              "0": ", {type: \"web_search_20250305\",             name: \"web_search\", max_uses: 6}"
            },
            "type": "TextExpression"
          },
          "formatting_for_false": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "format_boolean",
        "is_slidable": true
      },
      "type": "Message",
      "name": "or_",
      "is_slidable": false
    },
    "type": "Message",
    "name": "contains",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "list.option.llm_tool__os_",
    "event_id": "bTnWy0",
    "optional": true,
    "param_id": "bTPGl0",
    "param_name": "enabled_tools"
  },
  "type": "CurrentWorkflowItem",
  "is_slidable": false
};
