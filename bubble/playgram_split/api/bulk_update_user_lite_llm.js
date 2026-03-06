export const bulk_update_user_lite_llm = {
  "properties": {
    "expose": false,
    "wf_name": "bulk_update_user_lite_llm",
    "parameters": {
      "0": {
        "key": "workspace&user",
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
  "id": "bTqMS",
  "actions": {
    "0": {
      "properties": {
        "body_params_user_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTqMS",
                "param_id": "workspace&user",
                "param_name": "workspace&user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bTqMR",
      "id": "bTqMY"
    }
  }
};
