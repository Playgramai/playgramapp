export const add_org_members = {
  "properties": {
    "expose": false,
    "wf_name": "add_org_members",
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
      },
      "1": {
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
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTqgP0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "members_list_user",
            "value": {
              "next": {
                "type": "Message",
                "name": "user_user",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTqgP0",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTqgP0",
            "param_id": "organization",
            "param_name": "organization"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTqgV0"
    }
  }
};
