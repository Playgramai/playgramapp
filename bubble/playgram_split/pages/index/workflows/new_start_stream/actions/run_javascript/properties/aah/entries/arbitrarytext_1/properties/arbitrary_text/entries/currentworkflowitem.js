export const currentworkflowitem = {
  "next": {
    "args": {
      "properties": {
        "option_set": "option.llm_models__os_",
        "option_value": "grok_4_fast"
      },
      "type": "OneOptionValue",
      "is_slidable": false
    },
    "next": {
      "properties": {
        "formatting_for_true": {
          "entries": {
            "0": "",
            "1": {
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
                        "0": "grok-4-fast-reasoning"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "grok-4-fast-non-reasoning"
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
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "formatting_for_false": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "id0",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "2": ""
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
};
