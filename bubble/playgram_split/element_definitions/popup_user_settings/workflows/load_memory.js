export const load_memory = {
  "properties": {
    "event_name": "load_memory"
  },
  "type": "CustomEvent",
  "id": "bTLuq",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "for_team_memory_pagination_number",
            "value": {
              "next": {
                "next": {
                  "args": 20,
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "for_team_memory_pagination_number",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTLuv"
    }
  }
};
