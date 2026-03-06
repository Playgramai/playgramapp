export const update_rpm_limits = {
  "properties": {
    "expose": false,
    "wf_name": "update_rpm_limits",
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
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTtLb",
  "actions": {
    "0": {
      "properties": {
        "body_params_key": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "litellm_key_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTtLb",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bTtLQ",
      "id": "bTtLh"
    }
  }
};
