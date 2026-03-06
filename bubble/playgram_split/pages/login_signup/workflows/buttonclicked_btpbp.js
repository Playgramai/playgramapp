export const ButtonClicked_bTPbp = {
  "properties": {
    "element_id": "bTPaQ"
  },
  "type": "ButtonClicked",
  "id": "bTPbk",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTPaV"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.invited_users_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.invited_users_"
      },
      "type": "SetCustomState",
      "id": "bTPbq"
    },
    "1": {
      "type": "ResetInputs",
      "id": "bTPbv"
    }
  }
};
