export const ButtonClicked_bTdXm1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_valid",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTgle0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
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
                      "constraints": {
                        "0": {
                          "key": "user_email_for_search_text",
                          "value": {
                            "entries": {
                              "0": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "to_lowercase",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTgle0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "constraint_type": "text contains string"
                        }
                      }
                    },
                    "type": "Message",
                    "name": "filtered",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdVj1"
                },
                "type": "GetElement",
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
        "name": "get_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTgle0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTdWL1",
    "wf_folder": "bTdbL1"
  },
  "type": "ButtonClicked",
  "id": "bTdXf1",
  "actions": {
    "0": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTPtl",
        "_wf_param_email": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTgle0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_resend": false,
        "_wf_param_user_type": {
          "properties": {
            "option_set": "option.user_type__os_",
            "option_value": "user"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "_wf_param_organization": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTdXh1"
    },
    "1": {
      "type": "ResetInputs",
      "id": "bTdXl1"
    }
  }
};
