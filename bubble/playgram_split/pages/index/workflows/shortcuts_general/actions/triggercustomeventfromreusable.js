export const triggercustomeventfromreusable = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "display",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.shortcuts",
            "option_value": "team_chat"
          },
          "type": "OptionValue"
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTuxD1",
        "optional": false,
        "param_id": "bTpiw",
        "param_name": "name"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "element_id": "bTUjC0",
    "custom_event": "bTutV1"
  },
  "type": "TriggerCustomEventFromReusable",
  "id": "bTuxF1"
};
