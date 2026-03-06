export const speech_to_text = {
  "properties": {
    "event_name": "speech to text",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTLMR0",
        "param_name": "audio_file"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUsJ0",
  "actions": {
    "0": {
      "properties": {
        "params_file": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTUsJ0",
                "optional": false,
                "param_id": "bTLMR0",
                "param_name": "audio_file"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTLKX0",
      "id": "bTUsN0"
    },
    "1": {
      "properties": {
        "AAD": {
          "entries": {
            "0": "main-input"
          },
          "type": "TextExpression"
        },
        "AAG": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
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
                    },
                    "2": " ",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.text",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTUsN0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1622299806680x572142632265580540-AAC",
      "id": "bTUsO0"
    },
    "2": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_inputValue(\"",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
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
                    },
                    "2": " ",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.text",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTUsN0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": "\");\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTcbZ",
      "name": "Run javascript"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_headers.date",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUsN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "value": false,
        "element_id": "bTUdV0",
        "custom_state": "custom.speech_to_text_loading_"
      },
      "type": "SetCustomState",
      "id": "bTcbg"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_headers.date",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUsN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "url_to_delete": {
          "next": {
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTUsJ0",
            "optional": false,
            "param_id": "bTLMR0",
            "param_name": "audio_file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTUsP0"
    },
    "5": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTPLV0",
        "ignore_privacy_rules": true,
        "_wf_param_speech_to_text_seconds": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.seconds",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTUsN0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTUsT0"
    }
  }
};
