export const start_sign_folder = {
  "properties": {
    "expose": false,
    "wf_name": "start_sign_folder",
    "parameters": {
      "0": {
        "key": "user",
        "value": "user",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "project",
        "value": "custom.project",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "type",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "input_url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "date",
        "value": "date",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIEvent",
  "id": "bTvPz0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": "Team",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvPz0",
            "param_id": "type",
            "param_name": "type"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTvMj0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
          "properties": {
            "btype_id": "date",
            "event_id": "bTvPz0",
            "param_id": "date",
            "param_name": "date"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_user": {
          "next": {
            "next": {
              "type": "Message",
              "name": "Created By",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvPz0",
                "param_id": "input_url",
                "param_name": "input_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_organization": {
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
          "properties": {
            "btype_id": "user",
            "event_id": "bTvPz0",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTvQF0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "Project",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvPz0",
            "param_id": "type",
            "param_name": "type"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTvLt0",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_date": {
          "properties": {
            "btype_id": "date",
            "event_id": "bTvPz0",
            "param_id": "date",
            "param_name": "date"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_user": {
          "next": {
            "next": {
              "type": "Message",
              "name": "Created By",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "_wf_param_project": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTvPz0",
            "param_id": "project",
            "param_name": "project"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvPz0",
                "param_id": "input_url",
                "param_name": "input_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_organization": {
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
      "type": "ScheduleAPIEvent",
      "id": "bTvQH0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": "Personal",
            "next": {
              "args": {
                "next": {
                  "args": "Temporary",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTvPz0",
                  "param_id": "type",
                  "param_name": "type"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTvPz0",
            "param_id": "type",
            "param_name": "type"
          },
          "type": "APIEventParameter",
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
            "btype_id": "date",
            "event_id": "bTvPz0",
            "param_id": "date",
            "param_name": "date"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_user": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTvPz0",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_input_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvPz0",
                "param_id": "input_url",
                "param_name": "input_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTvQM0"
    }
  }
};
