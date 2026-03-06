export const terminateworkflow = {
  "properties": {
    "condition": {
      "next": {
        "next": {
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
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTxjx1",
                "optional": false,
                "param_id": "bTxaR0",
                "param_name": "organization"
              },
              "type": "CurrentWorkflowItem",
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
        "name": "subscription_custom_subscription",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.organization",
        "event_id": "bTxjx1",
        "optional": false,
        "param_id": "bTxaR0",
        "param_name": "organization"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "TerminateWorkflow",
  "id": "bTxny"
};
