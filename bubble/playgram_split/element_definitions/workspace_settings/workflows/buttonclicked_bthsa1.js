export const ButtonClicked_bThSA1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "time",
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
    "element_id": "bThRR1",
    "wf_folder": "bTgik"
  },
  "type": "ButtonClicked",
  "id": "bThRt1",
  "actions": {
    "0": {
      "properties": {
        "value": "time",
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
      "id": "bThRv1"
    },
    "1": {
      "properties": {
        "AAD": {
          "entries": {
            "0": "member_seconds"
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
      "id": "bThSS1"
    }
  }
};
