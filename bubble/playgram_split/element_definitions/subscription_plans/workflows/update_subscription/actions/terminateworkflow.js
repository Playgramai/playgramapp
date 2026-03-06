export const terminateworkflow = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "error",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTxon"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "TerminateWorkflow",
  "id": "bTxsG"
};
