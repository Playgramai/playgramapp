export const ButtonClicked_bTKrd0 = {
  "properties": {
    "element_id": "bTUlY0"
  },
  "type": "ButtonClicked",
  "id": "bTUrZ0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
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
            "type": "Message",
            "name": "custom.new_files_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUkv0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "custom.new_files_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUkv0"
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
        "api_event": "bTSsn0",
        "type_of_list": "file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_project": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_last_file": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "url",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "last_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.new_files_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUkv0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "1": ""
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
      "type": "ScheduleAPIEventOnList",
      "id": "bTUrd0"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "uploading_files__boolean",
            "value": {
              "next": {
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
                "type": "Message",
                "name": "custom.new_files_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUkv0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "relevant_context_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "trimmed",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTeGN0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTUre0"
    },
    "2": {
      "properties": {
        "element_id": "bTUkv0"
      },
      "type": "HideElement",
      "id": "bTUrf0"
    },
    "3": {
      "properties": {
        "element_id": "bTUkv0"
      },
      "type": "ResetGroup",
      "id": "bTUrj0"
    },
    "4": {
      "properties": {
        "element_id": "bTUkv0",
        "custom_state": "custom.new_files_"
      },
      "type": "SetCustomState",
      "id": "bTUrk0"
    }
  }
};
