export const triggercustomevent = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "gemini"
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
    "arguments": {
      "0": {
        "param_id": "bTjCP",
        "arg_value": {
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
      }
    },
    "custom_event": "bTjCH"
  },
  "type": "TriggerCustomEvent",
  "id": "bTjCT"
};
