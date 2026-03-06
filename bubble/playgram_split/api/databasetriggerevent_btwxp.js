export const DatabaseTriggerEvent_bTwXp = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "active_boolean",
                "is_slidable": false
              },
              "type": "OldDataItem",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "active_boolean",
                  "is_slidable": false
                },
                "type": "CurrentDataItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_id",
        "is_slidable": false
      },
      "type": "OldDataItem",
      "is_slidable": false
    },
    "event_color": "cyan",
    "data_trigger_type": "custom.organization"
  },
  "type": "DatabaseTriggerEvent",
  "id": "bTwXj",
  "actions": {
    "0": {
      "properties": {
        "body_params_team_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "CurrentDataItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_max_budget": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTnmE0.bTwXV",
      "id": "bTwXo"
    }
  }
};
