export const apiconnector2_bther0_btplq = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "claude"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_providers__os_",
        "event_id": "bTcLF",
        "optional": false,
        "param_id": "bTcLM",
        "param_name": "provider"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "params_file": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "file",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLf",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHER0.bTPLQ",
  "id": "bTcLN"
};
