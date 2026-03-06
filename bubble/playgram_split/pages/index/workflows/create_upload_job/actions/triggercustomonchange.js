export const triggercustomonchange = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": 0,
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_empty",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "count_number",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTtNt0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "field": "count_number",
    "custom_event": "bTnXL0",
    "workflow_thing": {
      "properties": {
        "action_id": "bTtNt0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "TriggerCustomOnChange",
  "id": "bTtNz0",
  "name": "Trigger new_upload_job_finished when a Upload Job's count changes"
};
