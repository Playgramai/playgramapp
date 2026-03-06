export const ButtonClicked_bTdas1 = {
  "properties": {
    "element_id": "bTdZp1",
    "wf_folder": "bTdat1"
  },
  "type": "ButtonClicked",
  "id": "bTdag1",
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
        "api_event": "bTqXP0",
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTqXd0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "greater_or_equal_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "workspaces_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "to_delete": {
          "next": {
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTdam1"
    },
    "2": {
      "properties": {
        "to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTdal1"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "members_list_user",
            "value": {
              "next": {
                "type": "Message",
                "name": "user_user",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "next": {
            "next": {
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTydJ"
    },
    "4": {
      "properties": {
        "element_id": "bTdZZ1"
      },
      "type": "HideElement",
      "id": "bTdan1"
    },
    "5": {
      "properties": {
        "element_id": "bTdZZ1"
      },
      "type": "ResetGroup",
      "id": "bTdar1"
    },
    "6": {
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
      "id": "bTjxf"
    }
  }
};
