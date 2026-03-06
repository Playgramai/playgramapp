export const schedule_generate_chunks = {
  "properties": {
    "event_name": "schedule_generate_chunks"
  },
  "type": "CustomEvent",
  "id": "bTckT",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "team"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.memory_level_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "custom.file_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
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
                "name": "custom.file_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
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
        "_wf_param_memory_level": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTapt"
          },
          "type": "GetElement",
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
        },
        "_wf_param_uploaded_manually": true,
        "_wf_param_file_from_memory_knowledge": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTckV"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "project"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.memory_level_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "custom.file_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
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
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTchs"
          },
          "type": "GetElement",
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
                "name": "custom.file_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
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
        "_wf_param_memory_level": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTapt"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "_wf_param_uploaded_manually": true,
        "_wf_param_file_from_memory_knowledge": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTckZ"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.memory_management_tabs__os_0",
                  "option_value": "personal"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.memory_level_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "custom.file_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
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
        "_wf_param_user_id": {
          "type": "CurrentUser",
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
                "name": "custom.file_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw"
              },
              "type": "GetElement",
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
        "_wf_param_memory_level": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTapt"
          },
          "type": "GetElement",
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
        },
        "_wf_param_uploaded_manually": true,
        "_wf_param_file_from_memory_knowledge": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTcka"
    }
  }
};
