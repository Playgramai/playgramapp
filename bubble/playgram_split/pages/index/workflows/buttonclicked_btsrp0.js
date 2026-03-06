export const ButtonClicked_bTSrP0 = {
  "properties": {
    "element_id": "bTpWM4"
  },
  "type": "ButtonClicked",
  "id": "bTUwR0",
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
        "api_event": "bTSsV0",
        "_wf_param_file": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTUwV0"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.new_files_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUkv0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUkv0",
        "custom_state": "custom.new_files_"
      },
      "type": "SetCustomState",
      "id": "bTUwW0"
    }
  }
};
