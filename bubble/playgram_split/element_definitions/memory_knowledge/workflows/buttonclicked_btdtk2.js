export const ButtonClicked_bTdtK2 = {
  "properties": {
    "element_id": "bTdrx2",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTdsz2",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTdsB2"
      },
      "type": "ShowElement",
      "id": "bTdtE2"
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
        "api_event": "bTSug0",
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "custom.uuid_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdrj2"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_class": {
          "entries": {
            "0": "Documents"
          },
          "type": "TextExpression"
        },
        "_wf_param_tenant": {
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
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "custom.file_url_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTdrj2"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
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
        },
        "_wf_param_delete_only_chunks_from_weaviate": false
      },
      "type": "ScheduleAPIEvent",
      "id": "bTeFD2"
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
            "action_id": "bTeFD2"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "delay": 2,
        "custom_event": "bTdtL2"
      },
      "type": "ScheduleCustom",
      "id": "bTdtJ2"
    }
  }
};
