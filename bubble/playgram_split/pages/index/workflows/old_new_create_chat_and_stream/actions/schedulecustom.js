export const schedulecustom = {
  "properties": {
    "delay": 0,
    "arguments": {
      "0": {
        "param_id": "bTPGF",
        "arg_value": {
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTPGH",
        "arg_value": {
          "properties": {
            "action_id": "bTnZh0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "2": {
        "param_id": "bTPHh0"
      },
      "3": {
        "param_id": "bTPHl0"
      },
      "4": {
        "param_id": "bTPHm0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhb0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "5": {
        "param_id": "bTPxH0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "6": {
        "param_id": "bTQFp0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "llm_model_option_llm_models__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "7": {
        "param_id": "bTQFq0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "enabled_tools_list_option_llm_tool__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "8": {
        "param_id": "bTQSU0",
        "arg_value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "find": {
                      "entries": {
                        "0": ";"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_advanced_search_constraint",
                    "value": {
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
                          "separator": {
                            "entries": {
                              "0": ";"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "split_by",
                        "is_slidable": true
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
            "type": "Message",
            "name": "custom.attached_files_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "9": {
        "param_id": "bTYTb",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTVPN"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "10": {
        "param_id": "bTaeV0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "11": {
        "param_id": "bTaet0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "12": {
        "param_id": "bTagJ0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "13": {
        "param_id": "bTagT0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "14": {
        "param_id": "bTcZD",
        "arg_value": {
          "type": "Empty"
        }
      }
    },
    "custom_event": "bTnZH0"
  },
  "type": "ScheduleCustom",
  "id": "bTnZl0"
};
