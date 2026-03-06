export const terminateworkflow = {
  "properties": {
    "return_values": {
      "0": {
        "return_id": "bTQSO0",
        "return_value": {
          "next": {
            "type": "Message",
            "name": "bTcNj",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcLA"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "1": {
        "return_id": "bTcNn",
        "return_value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "next": {
                                  "args": "image",
                                  "type": "Message",
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "mime_type",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "constraint_type": {
                              "type": "Empty"
                            }
                          }
                        }
                      },
                      "type": "Message",
                      "name": "filtered",
                      "is_slidable": true
                    },
                    "properties": {
                      "option_set": "option.file_types__os_",
                      "option_value": "all values"
                    },
                    "type": "OptionValue"
                  },
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "_api_c2_body.response.file_url",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTrTt0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          }
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
            "event_id": "bTcKR",
            "optional": false,
            "param_id": "bTQRY0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      }
    }
  },
  "type": "TerminateWorkflow",
  "id": "bTcKv"
};
