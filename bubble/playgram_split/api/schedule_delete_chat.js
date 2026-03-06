export const schedule_delete_chat = {
  "properties": {
    "expose": false,
    "wf_name": "schedule_delete_chat",
    "parameters": {
      "0": {
        "key": "chat",
        "value": "custom.chat",
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
        "key": "organization_workspace",
        "value": "custom.organization",
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
  "id": "bTIwD0",
  "actions": {
    "0": {
      "properties": {
        "scheduled_id": {
          "next": {
            "type": "Message",
            "name": "scheduled_delete_api_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIwD0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "CancelScheduledAPIEvent",
      "id": "bTIwJ0"
    },
    "1": {
      "properties": {
        "date": {
          "next": {
            "args": 6,
            "type": "Message",
            "name": "plus_hours",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTIvg0",
        "_wf_param_chat": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIwD0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTIwD0",
            "param_id": "organization_workspace",
            "param_name": "organization_workspace"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTIwL0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "scheduled_delete_api_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "action_id": "bTIwL0"
                  },
                  "type": "PreviousStep",
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
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIwD0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTIwQ0"
    }
  }
};
