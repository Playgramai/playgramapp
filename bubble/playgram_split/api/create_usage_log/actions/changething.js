export const changething = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_true",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "boolean",
        "event_id": "bTPLV0",
        "param_id": "gemini_web_search_use",
        "param_name": "gemini_web_search_use"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "gemimini_flash_web_search_counter_number",
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.llm_models__os_",
                      "option_value": "gemini_2_5_flash"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.llm_models__os_",
                            "option_value": "gemini_2_5_flash_light"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "option.llm_models__os_",
                        "event_id": "bTPLV0",
                        "optional": true,
                        "param_id": "streaming_model",
                        "param_name": "streaming_model"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "next": {
                      "type": "Message",
                      "name": "format_boolean_number",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "option.llm_models__os_",
                  "event_id": "bTPLV0",
                  "optional": true,
                  "param_id": "streaming_model",
                  "param_name": "streaming_model"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "gemimini_flash_web_search_counter_number",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "gemimini_pro_web_search_counter_number",
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.llm_models__os_",
                      "option_value": "gemini_2_5_pro"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "format_boolean_number",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "option.llm_models__os_",
                  "event_id": "bTPLV0",
                  "optional": true,
                  "param_id": "streaming_model",
                  "param_name": "streaming_model"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "gemimini_pro_web_search_counter_number",
            "is_slidable": false
          },
          "type": "InjectedValue",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "to_change": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "type_to_find": "custom.variables"
      },
      "type": "Search"
    }
  },
  "type": "ChangeThing",
  "id": "bTUIg"
};
