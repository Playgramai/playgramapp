export const remove_project_workspace_user = {
  "properties": {
    "expose": false,
    "wf_name": "remove_project_workspace_user",
    "parameters": {
      "0": {
        "key": "workspace_user",
        "value": "custom.workspace",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "project",
        "value": "custom.project",
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
  "id": "bTqNf0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "projects_list_custom_project",
            "value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTqNf0",
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqNf0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTqNh0"
    }
  }
};
