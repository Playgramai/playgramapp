export const ButtonClicked_bTgmU = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "email",
          "type": "Message",
          "name": "equals",
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
    "element_id": "bTgmH",
    "wf_folder": "bTgik"
  },
  "type": "ButtonClicked",
  "id": "bTgmP",
  "actions": {
    "0": {
      "properties": {
        "value": "email",
        "element_id": "bTfQP0",
        "custom_state": "custom.sort_by_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.descending_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTfQP0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.descending_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTgmV"
    },
    "1": {
      "properties": {
        "AAL": {
          "entries": {
            "0": "member_email"
          },
          "type": "TextExpression"
        },
        "AAM": {
          "entries": {
            "0": "rg_members_analytics"
          },
          "type": "TextExpression"
        },
        "AAN": {
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
      "type": "1685525155901x838124401560125400-AAO",
      "id": "bTgnt"
    }
  }
};
