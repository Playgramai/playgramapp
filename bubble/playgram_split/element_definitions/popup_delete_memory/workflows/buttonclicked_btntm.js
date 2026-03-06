export const ButtonClicked_bTNtm = {
  "properties": {
    "element_id": "bTOEw0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTOGK0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTOEx0"
      },
      "type": "ShowElement",
      "id": "bTOGL0"
    },
    "1": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTLzi",
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "type": "ElementParent",
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
        "_wf_param_custom_memory?": {
          "next": {
            "type": "Message",
            "name": "custom.delete_memories__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOEj0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTOGP0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTOGP0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "delay": 3,
        "custom_event": "bTOGo0"
      },
      "type": "ScheduleCustom",
      "id": "bTOGQ0"
    }
  }
};
