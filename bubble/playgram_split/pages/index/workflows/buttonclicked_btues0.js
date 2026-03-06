export const ButtonClicked_bTUES0 = {
  "properties": {
    "element_id": "bTUeh0",
    "event_color": "red",
    "workflow_disabled": true
  },
  "type": "ButtonClicked",
  "id": "bTUyC0",
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
        "api_event": "bTcSN0",
        "_wf_param_file": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTtiy"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtiy"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_text",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
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
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtlZ"
    },
    "2": {
      "properties": {
        "element_id": "bTUed0"
      },
      "type": "ResetGroup",
      "id": "bTUyI0"
    }
  }
};
