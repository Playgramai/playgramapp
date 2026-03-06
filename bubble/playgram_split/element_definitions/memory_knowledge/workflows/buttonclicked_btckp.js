export const ButtonClicked_bTckP = {
  "properties": {
    "element_id": "bTchN"
  },
  "type": "ButtonClicked",
  "id": "bTckI",
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
      "id": "bTckN"
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
            "name": "custom.file_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTMGw",
        "custom_state": "custom.file_"
      },
      "type": "SetCustomState",
      "id": "bTckO"
    }
  }
};
