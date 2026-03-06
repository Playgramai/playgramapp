export const ConditionTrue_bTtqM1 = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_empty",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "chat"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTtqH1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTsRZ0"
      },
      "type": "HideElement",
      "id": "bTtqN1"
    }
  }
};
