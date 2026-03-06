export const arbitrarytext = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_models__os_",
                "option_value": "kimi_k2_5"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "\ntemperature: 0.6,"
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTnWy0",
            "optional": false,
            "param_id": "bTPyv",
            "param_name": "streaming_model"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "ArbitraryText"
};
