export const ButtonClicked_bTJlU = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "name_text",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTJjn"
  },
  "type": "ButtonClicked",
  "id": "bTJlI",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTJkf"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "organization_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "bunny_folder_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "project_",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "members_list_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "custom.admins_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTJjX"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "plus_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "merged_with",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.members_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTJjX"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": "set_list"
          },
          "4": {
            "key": "admins_list_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "current_workspace_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "CurrentUser",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "plus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "unsaved_admins_list_custom_workspace",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": "set_list"
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTaxd"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "members_list_custom_workspace",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTaxd"
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
        "api_event": "bTqNU0",
        "type_of_list": "custom.workspace",
        "_wf_param_project": {
          "properties": {
            "action_id": "bTaxd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqMx0"
    },
    "2": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "HideElement",
      "id": "bTJlO"
    },
    "3": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ResetGroup",
      "id": "bTJlP"
    },
    "4": {
      "properties": {
        "element_id": "bTJjV"
      },
      "type": "ResetGroup",
      "id": "bTkCz"
    },
    "5": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTaxd"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTJlT"
    }
  }
};
