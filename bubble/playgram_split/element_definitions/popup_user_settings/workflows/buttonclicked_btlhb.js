export const ButtonClicked_bTLHB = {
  "properties": {
    "element_id": "bTLGF"
  },
  "type": "ButtonClicked",
  "id": "bTLGp",
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
        "api_event": "bTIyT",
        "_wf_param_chat": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "_wf_param_delete_memory": {
          "next": {
            "type": "Message",
            "name": "custom.delete_memories__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTLFs"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "next": {
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTLGu"
    },
    "1": {
      "properties": {
        "element_id": "bTLFs"
      },
      "type": "HideElement",
      "id": "bTLGv"
    },
    "2": {
      "properties": {
        "element_id": "bTLFs"
      },
      "type": "ResetGroup",
      "id": "bTLGz"
    },
    "3": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": false,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTItQ0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTLHA"
    }
  }
};
