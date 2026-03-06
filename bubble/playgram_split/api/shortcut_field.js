export const shortcut_field = {
  "properties": {
    "expose": false,
    "wf_name": "shortcut_field",
    "parameters": {
      "0": {
        "key": "user",
        "value": "user",
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
  "id": "bTvUr1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "shortcuts_on__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTvUr1",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTvVn1"
    }
  }
};
