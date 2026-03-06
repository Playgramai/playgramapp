export const triggercustomevent_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "-delete-memory",
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "-delete-memory-file",
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpet"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_AAV",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTpet"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "arguments": {
      "0": {
        "param_id": "bTvvb2",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTuQJ1"
          },
          "type": "ThisElement",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTvvV2"
  },
  "type": "TriggerCustomEvent",
  "id": "bTvvm2"
};
