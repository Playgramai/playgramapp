export const ButtonClicked_bTOuY0 = {
  "properties": {
    "element_id": "bTOtj0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTOuN0",
  "actions": {
    "0": {
      "properties": {
        "to_change": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
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
                "constraint_type": "equals"
              },
              "1": {
                "key": "_id",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "param_bTPCD1",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTOpg0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "constraint_type": {
                  "type": "Empty"
                }
              }
            },
            "type_to_find": "custom.chat"
          },
          "type": "Search"
        }
      },
      "type": "ChangeThing",
      "id": "bTjrp0"
    },
    "1": {
      "properties": {
        "element_id": "bTOtn0"
      },
      "type": "ShowElement",
      "id": "bTOuS0"
    },
    "2": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTLzi",
        "_wf_param_chat": {
          "properties": {
            "action_id": "bTjrp0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
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
        "_wf_param_chat_file": {
          "properties": {
            "action_id": "bTjrp0"
          },
          "type": "PreviousStep",
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
        "_wf_param_custom_memory?": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "param_bTOxY0",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTOpg0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTQRA0"
    },
    "3": {
      "properties": {
        "field": "for_memory_update_number",
        "custom_event": "bTQQb0",
        "workflow_thing": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "TriggerCustomOnChange",
      "id": "bTQQv0"
    }
  }
};
