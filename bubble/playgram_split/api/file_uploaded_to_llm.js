export const file_uploaded_to_llm = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "upload_job_custom_upload_job",
                "is_slidable": false
              },
              "type": "CurrentDataItem",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "upload_job_custom_upload_job",
        "is_slidable": false
      },
      "type": "OldDataItem",
      "is_slidable": false
    },
    "event_name": "file_uploaded_to_llm",
    "data_trigger_type": "custom.file"
  },
  "type": "DatabaseTriggerEvent",
  "id": "bTTHP",
  "actions": {
    "0": {
      "properties": {
        "to_change": {
          "properties": {
            "constraints": {
              "0": {
                "key": "upload_job_custom_upload_job",
                "value": {
                  "next": {
                    "type": "Message",
                    "name": "upload_job_custom_upload_job",
                    "is_slidable": false
                  },
                  "type": "CurrentDataItem",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.file"
          },
          "type": "Search"
        },
        "type_to_change": "custom.file"
      },
      "type": "ChangeListOfThings",
      "id": "bTTHV",
      "name": "Search for files from this job"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "count_number",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "upload_job_custom_upload_job",
                  "is_slidable": false
                },
                "type": "CurrentDataItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTTHV"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTTHX"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "count_number",
            "value": 0,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "upload_job_custom_upload_job",
            "is_slidable": false
          },
          "type": "CurrentDataItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTTHc"
    }
  }
};
