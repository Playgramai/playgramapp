export const Every_time_project_sign_token = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "type": "Message",
            "name": "url_formatted",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.sidebar_menu__os_",
            "option_value": "library0"
          },
          "type": "OptionValue"
        },
        "next": {
          "args": {
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
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTpah2"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "value": "text",
        "parameter_name": {
          "entries": {
            "0": "tab"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "run_when": "every_time",
    "wf_folder": "ConditionTrue",
    "breakpoint": false
  },
  "type": "ConditionTrue",
  "id": "bTpZk2",
  "name": "Every time - project sign token",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTpah2"
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
        "api_event": "bTpaD2",
        "breakpoint": false,
        "type_of_list": "custom.project",
        "_wf_param_url": {
          "entries": {
            "0": {
              "next": {
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
                "type": "Message",
                "name": "chats_list_custom_chat",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_project": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTpaT2"
    }
  }
};
