export const PopupClosed_bTYUb0 = {
  "properties": {
    "element_id": "bTUkv0"
  },
  "type": "PopupClosed",
  "id": "bTYUW0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
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
        "data_source": {
          "next": {
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
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTSsV0",
        "type_of_list": "file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTYUc0"
    },
    "1": {
      "properties": {
        "element_id": "bTUkv0",
        "custom_state": "custom.new_files_"
      },
      "type": "SetCustomState",
      "id": "bTYUh0"
    },
    "2": {
      "properties": {
        "element_id": "bTUkv0"
      },
      "type": "ResetGroup",
      "id": "bTYUj0"
    }
  }
};
