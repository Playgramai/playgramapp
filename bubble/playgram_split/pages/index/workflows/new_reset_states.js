export const new_reset_states = {
  "properties": {
    "event_name": "new_reset_states",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTVEO0",
        "param_name": "chat"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTnWa0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0",
        "custom_state": "custom.regenerate_chat_id_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.chat",
                      "event_id": "bTnWa0",
                      "optional": false,
                      "param_id": "bTVEO0",
                      "param_name": "chat"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "minus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.new_image_in_chat_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.new_image_in_chat_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTnWf0"
    },
    "1": {
      "properties": {
        "element_id": "bTiXM0"
      },
      "type": "ResetGroup",
      "id": "bTnWg0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "need_reset_boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnWa0",
            "optional": false,
            "param_id": "bTVEO0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTspZ0"
    }
  }
};
