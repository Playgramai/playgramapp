export const scheduleapievent = {
  "properties": {
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTPLV0",
    "ignore_privacy_rules": true,
    "_wf_param_embedding_for_pair_tokens": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTNaj0",
        "param_id": "embedding_tokens",
        "param_name": "embedding_tokens"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_remove_duplicates_input_tokens": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTSzL"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_pair_normalization_input_tokens": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTNaj0",
        "optional": true,
        "param_id": "normalization_input_tokens",
        "param_name": "normalization_input_tokens"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_remove_duplicates_output_tokens": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.completion_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTSzL"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_pair_normalization_output_tokens": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTNaj0",
        "optional": true,
        "param_id": "normalization_output_tokens",
        "param_name": "normalization_output_tokens"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTQOl"
};
