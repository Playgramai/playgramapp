export const arbitrarytext = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "image_generation"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "boolean",
                  "event_id": "bTnWy0",
                  "optional": false,
                  "param_id": "bTpbc1",
                  "param_name": "image_gen_needed"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "image_gen_model",
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
              "name": "or_",
              "is_slidable": false
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
    }
  },
  "type": "ArbitraryText",
  "said": "a2Vsdm8tMzE4ODQ="
};
