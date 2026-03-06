export const update_workspaces_for_billing = {
  "properties": {
    "expose": false,
    "wf_name": "update_workspaces_for_billing",
    "parameters": {
      "0": {
        "key": "workspace",
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
    }
  },
  "type": "APIEvent",
  "id": "bTxwZ2",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "active_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "completed_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "subscription_plan_option_subscription_plan",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTxwZ2",
            "param_id": "workspace",
            "param_name": "workspace"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxwf2"
    }
  }
};
