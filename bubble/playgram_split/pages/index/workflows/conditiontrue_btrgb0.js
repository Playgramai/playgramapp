export const ConditionTrue_bTrGb0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
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
                "name": "sup_jwt_exp_date",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUip0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "logged_in",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTrGZ0",
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
        "api_event": "bTkDq",
        "_wf_param_workspace_user": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTrLj0"
    }
  }
};
