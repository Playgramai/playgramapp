export const ButtonClicked_bTPaE = {
  "properties": {
    "element_id": "bTPZa"
  },
  "type": "ButtonClicked",
  "id": "bTPZz",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.onboarding_steps__os_",
            "option_value": "step_3"
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
                "element_id": "bTPWI"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.user_name_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTPaF"
    }
  }
};
