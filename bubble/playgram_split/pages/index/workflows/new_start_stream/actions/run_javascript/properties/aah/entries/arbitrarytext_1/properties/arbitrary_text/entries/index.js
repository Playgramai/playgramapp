import { arbitrarytext } from './arbitrarytext.js';
import { arbitrarytext_1 } from './arbitrarytext_1/index.js';
import { arbitrarytext_2 } from './arbitrarytext_2/index.js';

export const entries = {
  "0": "      model: \"",
  "1": {
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
  },
  "2": "\",        \n      stream: true,",
  "3": {
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
  },
  "4": "\n      stream_options: {include_obfuscation: false},\n      tools: [",
  "5": arbitrarytext,
  "6": "\n            ],",
  "7": arbitrarytext_1,
  "8": "\n      input: [\n              {\n                role: \"system\",\n                content: ",
  "9": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTkFz2",
      "param_name": "system_prompt"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "10": "\n              },",
  "11": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTVNV0",
                          "optional": true,
                          "param_id": "bTHfj",
                          "param_name": "last_messages"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "2": ","
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": " "
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
            "properties": {
              "btype_id": "text",
              "event_id": "bTVNV0",
              "optional": true,
              "param_id": "bTHfj",
              "param_name": "last_messages"
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
    "type": "ArbitraryText"
  },
  "12": "\n              { \n              role: \"user\", \n              content: [\n                        {\n                        type: \"input_text\",\n                        text: ",
  "13": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTHfh",
      "param_name": "input"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "14": "\n                        }",
  "15": arbitrarytext_2,
  "16": "\n                      ] \n              }\n            ]    ",
};
