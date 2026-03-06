export const changething = {
  "properties": {
    "changes": {
      "0": {
        "key": "credits_count_number",
        "value": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "convert_to_number",
                "is_slidable": false
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": " "
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "custom.selected_credits_option_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTxBh1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "annualy_boolean",
        "value": {
          "next": {
            "next": {
              "args": "Annually",
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.plan_type_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTxAn1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "subscription_item_id_text",
        "value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "si",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxon"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "to_change": {
      "next": {
        "type": "Message",
        "name": "subscription_custom_subscription",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.organization",
        "event_id": "bTxoh",
        "optional": false,
        "param_id": "bTxop",
        "param_name": "organization"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTxpL"
};
