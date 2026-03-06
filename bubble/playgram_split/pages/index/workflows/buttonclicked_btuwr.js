export const ButtonClicked_bTUWr = {
  "properties": {
    "element_id": "bTUjr0"
  },
  "type": "ButtonClicked",
  "id": "bTUvn0",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "custom.file_ids_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUjN0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_list",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_instruction_files_list_custom_project_instruction_file",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTSug0",
        "type_of_list": "custom.project_instruction_file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "document_id_text",
                "is_slidable": false
              },
              "type": "InjectedValue",
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
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
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
                "name": "file_bunny_url_text",
                "is_slidable": false
              },
              "type": "InjectedValue",
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
        "_wf_param_project_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_delete_only_chunks_from_weaviate": false
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTUvr0"
    },
    "1": {
      "properties": {
        "element_id": "bTUjN0"
      },
      "type": "HideElement",
      "id": "bTUvs0"
    },
    "2": {
      "properties": {
        "element_id": "bTUjN0"
      },
      "type": "ResetGroup",
      "id": "bTUvt0"
    },
    "3": {
      "properties": {
        "element_id": "bTUjN0",
        "custom_state": "custom.file_ids_"
      },
      "type": "SetCustomState",
      "id": "bTUvx0"
    }
  }
};
