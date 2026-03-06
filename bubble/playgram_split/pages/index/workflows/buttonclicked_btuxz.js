export const ButtonClicked_bTUXZ = {
  "properties": {
    "element_id": "bTUda0"
  },
  "type": "ButtonClicked",
  "id": "bTUwD0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "plus_hours",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTVPN"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "less_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "signed_url_token_date_date",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "delay": 0,
        "arguments": {
          "0": {
            "param_id": "bTcXv",
            "arg_value": {
              "type": "ElementParent",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTcXp"
      },
      "type": "ScheduleCustom",
      "id": "bTcYJ0"
    },
    "1": {
      "properties": {
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTUjN0"
      },
      "type": "DisplayGroupData",
      "id": "bTUwE0"
    },
    "2": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "project_instruction_files_list_custom_project_instruction_file",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTUjN0",
        "custom_state": "custom.file_ids_"
      },
      "type": "SetCustomState",
      "id": "bTUwF0"
    },
    "3": {
      "properties": {
        "element_id": "bTUjN0"
      },
      "type": "ShowElement",
      "id": "bTUwJ0"
    }
  }
};
