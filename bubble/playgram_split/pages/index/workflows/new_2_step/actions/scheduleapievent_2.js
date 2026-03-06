export const scheduleapievent_2 = {
  "properties": {
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTPLV0",
    "breakpoint": true,
    "ignore_privacy_rules": true,
    "_wf_param_streaming_model": {
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "_wf_param_chat_title_input": {
      "next": {
        "type": "Message",
        "name": "bTQNV",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYx0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_chat_title_output": {
      "next": {
        "type": "Message",
        "name": "bTQNW",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYx0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_ chat_title_output": {
      "next": {
        "type": "Message",
        "name": "bTQNQ",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUzK0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_summarization_input": {
      "next": {
        "type": "Message",
        "name": "bTVBh0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_embedding_for_search": {
      "next": {
        "type": "Message",
        "name": "bTQLf",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUzK0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_summarization_output": {
      "next": {
        "type": "Message",
        "name": "bTVBl0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_claude_web_sources_count": {
      "next": {
        "type": "Message",
        "name": "bTUHX",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUzK0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_first_normalization_input": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_embedding_for_first_search": {
      "next": {
        "type": "Message",
        "name": "bTVCF0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_first_normalization_output": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.completion_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTnfI0"
};
