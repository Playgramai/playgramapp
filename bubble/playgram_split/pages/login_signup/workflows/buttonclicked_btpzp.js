export const ButtonClicked_bTPZP = {
  "properties": {
    "element_id": "bTPYT"
  },
  "type": "ButtonClicked",
  "id": "bTPZN",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.onboarding_steps__os_",
            "option_value": "step_2"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.onboarding_step_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTPXb"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.logo_"
          },
          "1": {
            "value": {
              "next": {
                "type": "Message",
                "name": "get_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTPWC"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.organization_name_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTPZT"
    }
  }
};
