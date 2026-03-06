export const ButtonClicked_bTdZY1 = {
  "properties": {
    "element_id": "bTdYR1",
    "wf_folder": "bTdbD1",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTdZL1",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "Created By",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "user_user",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              },
              "1": {
                "key": "type_option_chat_type__os_",
                "value": {
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "personal"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTIyT",
        "type_of_list": "custom.chat",
        "_wf_param_chat": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "ignore_privacy_rules": false,
        "_wf_param_delete_memory": true,
        "_wf_param_organization_workspace": {
          "next": {
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTdZN1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "workspaces_list_custom_workspace",
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": "remove"
          },
          "1": {
            "key": "current_organization_custom_organization",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "organization_workspace_custom_organization",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "workspaces_list_custom_workspace",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "current_workspace_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "workspaces_list_custom_workspace",
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
            "name": "user_user",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTdZR1"
    },
    "2": {
      "properties": {
        "to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTdZS1"
    },
    "3": {
      "properties": {
        "element_id": "bTdYE1"
      },
      "type": "HideElement",
      "id": "bTdZT1"
    },
    "4": {
      "properties": {
        "element_id": "bTdYE1"
      },
      "type": "ResetGroup",
      "id": "bTdZX1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 1,
                        "next": {
                          "args": 10,
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "type": "Message",
                                  "name": "page_number",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTdVj1"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "less_than",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "ceil",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "divide",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "minus",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
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
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": 1,
                        "type": "Message",
                        "name": "not_equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "page_number",
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
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_last_page",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTdVj1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTdVj1",
        "page": {
          "next": {
            "next": {
              "type": "Message",
              "name": "last_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAD",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTgku0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ListGoToPage",
      "id": "bTjxk"
    }
  }
};
