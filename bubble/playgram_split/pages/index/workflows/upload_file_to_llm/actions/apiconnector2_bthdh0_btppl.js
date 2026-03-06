export const apiconnector2_bthdh0_btppl = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_providers__os_",
            "option_value": "open_ai"
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
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "bTtLu",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTtKN"
                        },
                        "type": "PreviousStep",
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
                          "name": "url",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "file",
                          "event_id": "bTcLF",
                          "optional": false,
                          "param_id": "bTcLf",
                          "param_name": "file"
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "bTtLu",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtKN"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHDh0.bTPPL",
  "id": "bTcLS"
};
