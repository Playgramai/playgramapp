export const scheduleapievent_3 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(?<='normalized'\\s*:\\s*')[^']+"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "},"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_message.content",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.choices",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUQY0"
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
    "api_event": "bTPLV0",
    "ignore_privacy_rules": true,
    "_wf_param_pair_normalization_input_tokens": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUQY0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_pair_normalization_output_tokens": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.completion_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTUQY0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTQRG"
};
