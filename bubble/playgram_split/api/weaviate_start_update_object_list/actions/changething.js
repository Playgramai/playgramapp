export const changething = {
  "properties": {
    "changes": {
      "0": {
        "key": "log_text",
        "value": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_message.content",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.choices",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTUQY0"
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
      "properties": {
        "btype_id": "user",
        "event_id": "bTJTB0",
        "param_id": "user",
        "param_name": "user"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTKBX0"
};
