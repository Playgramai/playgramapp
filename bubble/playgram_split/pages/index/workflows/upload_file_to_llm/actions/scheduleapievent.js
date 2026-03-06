export const scheduleapievent = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTcNX"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTTKJ",
    "_wf_param_file": {
      "properties": {
        "action_id": "bTcNV"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_provider": {
      "properties": {
        "btype_id": "option.llm_providers__os_",
        "event_id": "bTcLF",
        "optional": false,
        "param_id": "bTcLM",
        "param_name": "provider"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTcNh"
};
