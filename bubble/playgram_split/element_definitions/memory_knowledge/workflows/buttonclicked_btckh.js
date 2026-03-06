export const ButtonClicked_bTckH = {
  "properties": {
    "element_id": "bTcic"
  },
  "type": "ButtonClicked",
  "id": "bTcjr",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTcid"
      },
      "type": "ShowElement",
      "id": "bTcjw"
    },
    "1": {
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
            "name": "custom.file_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "custom_event": "bTckT"
      },
      "type": "TriggerCustomEvent",
      "id": "bTcjx"
    },
    "2": {
      "properties": {
        "condition": {
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
        "api_event": "bTcrb",
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_message": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTcha"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
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
        "_wf_param_memory_level": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "to_lowercase",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "display",
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
            }
          },
          "type": "TextExpression"
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
        "_wf_param_user_workspace": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTdCx2"
    },
    "3": {
      "properties": {
        "field": "custom_memory_added__text",
        "custom_event": "bTOBT",
        "workflow_thing": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "TriggerCustomOnChange",
      "id": "bTckD"
    }
  }
};
