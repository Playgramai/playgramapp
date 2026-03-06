export const schedule_add_org_members = {
  "properties": {
    "expose": false,
    "wf_name": "schedule_add_org_members",
    "parameters": {
      "0": {
        "key": "organization",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTqgz0",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "properties": {
            "constraints": {
              "0": {
                "key": "organization_workspace_custom_organization",
                "value": {
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTqgz0",
                    "param_id": "organization",
                    "param_name": "organization"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.workspace"
          },
          "type": "Search"
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "interval": 7,
        "api_event": "bTqgP0",
        "type_of_list": "custom.workspace",
        "_wf_param_organization": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTqgz0",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_workspace_user": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTqhF0"
    }
  }
};
