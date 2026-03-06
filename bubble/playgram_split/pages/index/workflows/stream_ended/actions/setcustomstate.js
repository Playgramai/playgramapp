export const setcustomstate = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthZ0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "value": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "constraints": {
                    "0": {
                      "key": "_id",
                      "value": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTthZ0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "constraint_type": "equals"
                    }
                  }
                },
                "type": "Message",
                "name": "filtered",
                "is_slidable": true
              },
              "type": "Message",
              "name": "custom.streaming_chats_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "minus_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.streaming_chats_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "breakpoint": false,
    "custom_state": "custom.streaming_chats_"
  },
  "type": "SetCustomState",
  "id": "bTthd0"
};
