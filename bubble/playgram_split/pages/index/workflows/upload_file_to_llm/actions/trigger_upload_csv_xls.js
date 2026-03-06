export const trigger_upload_csv_xls = {
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
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "properties": {
                          "separator": {
                            "entries": {
                              "0": ","
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "split_by",
                        "is_slidable": true
                      },
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "csv,xls,xlsx"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText"
                    },
                    "type": "Message",
                    "name": "is_contained_by_list",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "."
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
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
          "type": "Message",
          "name": "and_",
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
        "param_id": "bTtKV",
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
      },
      "1": {
        "param_id": "bTtKZ"
      }
    },
    "custom_event": "bTtKP"
  },
  "type": "TriggerCustomEvent",
  "id": "bTtKN",
  "name": "Trigger upload_csv_xls"
};
