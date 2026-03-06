export const setcustomstate = {
  "properties": {
    "value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTacv0",
        "optional": false,
        "param_id": "bTadB0",
        "param_name": "message_id"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "custom_state": "custom.regenerate_chat_id_",
    "custom_states_values": {
      "0": {
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "btype_id": "custom.chat",
                  "event_id": "bTacv0",
                  "optional": false,
                  "param_id": "bTadD0",
                  "param_name": "chat"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
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
        "custom_state": "custom.streaming_chats_"
      }
    }
  },
  "type": "SetCustomState",
  "id": "bTatb",
  "name": "Set states regenerate_message_id... of index"
};
