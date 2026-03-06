export const scheduleapievent = {
  "properties": {
    "condition": {
      "next": {
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
          "properties": {
            "constraints": {
              "0": {
                "key": "Created Date",
                "value": {
                  "properties": {
                    "btype_id": "date",
                    "event_id": "bTacv0",
                    "optional": false,
                    "param_id": "bTadU0",
                    "param_name": "message_date"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "constraint_type": "less than"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "files_list_custom_file",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTacv0",
        "optional": false,
        "param_id": "bTadD0",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTtvJ0",
    "_wf_param_chat": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTacv0",
        "optional": false,
        "param_id": "bTadD0",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "_wf_param_message_date": {
      "properties": {
        "btype_id": "date",
        "event_id": "bTacv0",
        "optional": false,
        "param_id": "bTadU0",
        "param_name": "message_date"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTtuz0"
};
