export const speech_to_text = {
  "properties": {
    "event_name": "speech_to_text",
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
  "id": "bTcqU",
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
                "event_id": "bTcqU",
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
      "id": "bTcqZ"
    },
    "1": {
      "properties": {
        "AAD": {
          "entries": {
            "0": "addMemoryInput"
          },
          "type": "TextExpression"
        },
        "AAG": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.text",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTcqZ"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1622299806680x572142632265580540-AAC",
      "id": "bTcqa"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_error.status_code",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcqZ"
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
            "event_id": "bTcqU",
            "optional": false,
            "param_id": "bTLMR0",
            "param_name": "audio_file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTcqb"
    },
    "3": {
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
            "action_id": "bTcqZ"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTcqf"
    }
  }
};
