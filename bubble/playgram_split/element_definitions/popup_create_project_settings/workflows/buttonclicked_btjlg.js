export const ButtonClicked_bTJlg = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
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
  "id": "bTJlV",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTJjX",
        "custom_state": "custom.saved_changes_"
      },
      "type": "SetCustomState",
      "id": "bTMAf"
    },
    "1": {
      "properties": {
        "delay": 1.25,
        "custom_event": "bTMAk"
      },
      "type": "ScheduleCustom",
      "id": "bTMAr"
    },
    "2": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "args": {
                "next": {
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
              "type": "Message",
              "name": "minus_list",
              "is_slidable": false
            },
            "type": "Message",
            "name": "members_list_custom_workspace",
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
        "api_event": "bTqNf0",
        "type_of_list": "custom.workspace",
        "_wf_param_project": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqNm0"
    },
    "3": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "members_list_custom_workspace",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_list",
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
          "type": "ElementParent",
          "is_slidable": false
        },
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqNz0"
    },
    "4": {
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
            "key": "members_list_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "unsaved_admins_list_custom_workspace",
                      "is_slidable": false
                    },
                    "type": "InjectedValue",
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
          "2": {
            "key": "admins_list_custom_workspace",
            "value": {
              "next": {
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
      "id": "bTJla"
    }
  }
};
