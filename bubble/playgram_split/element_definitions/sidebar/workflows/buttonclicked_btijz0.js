export const ButtonClicked_bTIJz0 = {
  "properties": {
    "condition": {
      "next": {
        "args": 768,
        "type": "Message",
        "name": "greater_than",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTHoP",
        "name": "Current Page Width"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "element_id": "bTIGD"
  },
  "type": "ButtonClicked",
  "id": "bTIJu0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": -1,
                                "type": "Message",
                                "name": "plus_hours",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTvOh0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "less_than",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "signed_url_token_date_date",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
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
                "constraints": {
                  "0": {
                    "key": "bunny_url_text",
                    "value": {
                      "entries": {
                        "0": "cdn.bubble.i"
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "not text contains string"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "files_list_custom_file",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTvNL0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "_wf_param_user": {
          "next": {
            "type": "Message",
            "name": "Created By",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "next": {
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
                "type": "Message",
                "name": "files_list_custom_file",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTvNk0"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTcJD"
    },
    "2": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTIMn"
    }
  }
};
