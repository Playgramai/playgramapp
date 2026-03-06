export const ButtonClicked_bTgoS = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "messages",
          "type": "Message",
          "name": "not_equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.sort_by_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTfQP0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTgmy",
    "wf_folder": "bTgik"
  },
  "type": "ButtonClicked",
  "id": "bTgoL",
  "actions": {
    "0": {
      "properties": {
        "value": "messages",
        "element_id": "bTfQP0",
        "custom_state": "custom.sort_by_",
        "custom_states_values": {
          "0": {
            "value": true,
            "custom_state": "custom.descending_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTgoN"
    },
    "1": {
      "properties": {
        "AAD": {
          "entries": {
            "0": "member_messages"
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "rg_members_analytics"
          },
          "type": "TextExpression"
        },
        "AAF": {
          "next": {
            "type": "Message",
            "name": "custom.descending_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTfQP0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "1685525155901x838124401560125400-AAC",
      "id": "bTimN1"
    }
  }
};
