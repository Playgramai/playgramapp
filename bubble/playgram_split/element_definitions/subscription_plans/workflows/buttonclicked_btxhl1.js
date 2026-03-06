export const ButtonClicked_bTxhl1 = {
  "properties": {
    "element_id": "bTxgw1"
  },
  "type": "ButtonClicked",
  "id": "bTxhg1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTxgM1"
      },
      "type": "HideElement",
      "id": "bTxiD1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "subscription_plan_option_subscription_plan",
            "value": {
              "properties": {
                "option_set": "option.subscription_plan",
                "option_value": "free"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "active_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "grace_period_start_date",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "param_bTxcd",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTxAn1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxhm1"
    }
  }
};
