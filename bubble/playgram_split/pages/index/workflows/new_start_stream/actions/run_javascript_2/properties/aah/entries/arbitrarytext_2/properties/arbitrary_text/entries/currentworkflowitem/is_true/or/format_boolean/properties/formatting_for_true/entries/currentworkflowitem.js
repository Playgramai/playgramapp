export const currentworkflowitem = {
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
      "properties": {
        "formatting_for_true": {
          "entries": {
            "0": "tools: [{google_search: {}}],"
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
    "name": "contains",
    "is_slidable": false
  },
  "properties": {
    "btype_id": "list.option.llm_tool__os_",
    "event_id": "bTlOF0",
    "optional": true,
    "param_id": "bTPGl0",
    "param_name": "enabled_tools"
  },
  "type": "CurrentWorkflowItem",
  "said": "a2Vsdm8tMzE4ODQ=",
  "is_slidable": false
};
