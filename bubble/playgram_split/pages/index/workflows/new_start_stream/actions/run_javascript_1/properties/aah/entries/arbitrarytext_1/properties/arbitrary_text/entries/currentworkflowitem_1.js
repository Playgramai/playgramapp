export const currentworkflowitem_1 = {
  "next": {
    "args": {
      "properties": {
        "option_set": "option.llm_tool__os_",
        "option_value": "reasoning"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "next": {
      "properties": {
        "formatting_for_true": {
          "entries": {
            "0": "thinking: { type: \"enabled\", budget_tokens: 10000 },"
          },
          "type": "TextExpression"
        },
        "formatting_for_false": {
          "entries": {
            "0": " "
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "format_boolean",
      "is_slidable": true
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
