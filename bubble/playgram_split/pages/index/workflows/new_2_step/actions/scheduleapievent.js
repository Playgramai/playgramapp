export const scheduleapievent = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "list.custom.file",
              "event_id": "bTnYl0",
              "optional": true,
              "param_id": "bTQSa0",
              "param_name": "file"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "type": "Message",
          "name": "or_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "image",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "date": {
      "next": {
        "args": 1,
        "type": "Message",
        "name": "plus_hours",
        "is_slidable": false
      },
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTwCP1",
    "_wf_param_chat": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "_wf_param_path": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTnYl0",
            "optional": true,
            "param_id": "bTwEB0",
            "param_name": "path"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_file_url": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "btype_id": "image",
                        "event_id": "bTnYl0",
                        "optional": true,
                        "param_id": "bTcNo",
                        "param_name": "user_image"
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
                        "next": {
                          "type": "Message",
                          "name": "bunny_url_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "list.custom.file",
                        "event_id": "bTnYl0",
                        "optional": true,
                        "param_id": "bTQSa0",
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
          "properties": {
            "btype_id": "image",
            "event_id": "bTnYl0",
            "optional": true,
            "param_id": "bTcNo",
            "param_name": "user_image"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_chat_file": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "list.custom.file",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "_wf_param_file_path": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTnYl0",
            "optional": true,
            "param_id": "bTwEB0",
            "param_name": "file_path"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_workspace&user": {
      "next": {
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTwDR1"
};
