export const scheduleapieventonlist = {
  "properties": {
    "data_source": {
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
            "0": "",
            "1": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "content": {
                            "entries": {
                              "0": {
                                "type": "InjectedValue",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "delimiter": {
                            "entries": {
                              "0": ","
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_as_text",
                        "is_slidable": true
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<='id'\\s*:\\s*')[^']+"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
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
                "action_id": "bTSzL"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTLzi",
    "type_of_list": "text",
    "_wf_param_user": {
      "type": "CurrentUser",
      "is_slidable": false
    },
    "_wf_param_uuid": {
      "entries": {
        "0": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_organization": {
      "next": {
        "type": "Message",
        "name": "organization_workspace_custom_organization",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTNaj0",
        "param_id": "workspace_user",
        "param_name": "workspace_user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEventOnList",
  "id": "bTNgj0"
};
