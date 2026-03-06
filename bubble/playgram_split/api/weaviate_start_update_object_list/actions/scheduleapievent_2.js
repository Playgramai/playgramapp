export const scheduleapievent_2 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "args": "project",
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "first_element",
                            "is_slidable": false
                          },
                          "properties": {
                            "regex": {
                              "entries": {
                                "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "extract_regex",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "separator": {
                          "entries": {
                            "0": "},"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "split_by",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "_api_c2_message.content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.choices",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTUQY0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "custom.file",
                  "event_id": "bTJTB0",
                  "optional": true,
                  "param_id": "chat_file",
                  "param_name": "chat_file"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTJTN0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTSsn0",
    "_wf_param_project": {
      "next": {
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTJTB0",
        "optional": true,
        "param_id": "chat",
        "param_name": "chat"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_chat_file": {
      "properties": {
        "btype_id": "custom.file",
        "event_id": "bTJTB0",
        "optional": true,
        "param_id": "chat_file",
        "param_name": "chat_file"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "_wf_param_last_file": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "bunny_url_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTJTB0",
            "optional": true,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_tenant_name": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_current_user": {
      "type": "CurrentUser",
      "is_slidable": false
    },
    "_wf_param_workspace_id": {
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
  "id": "bTjEM0"
};
