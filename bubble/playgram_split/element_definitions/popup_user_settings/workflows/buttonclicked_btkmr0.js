export const ButtonClicked_bTKmR0 = {
  "properties": {
    "element_id": "bTKiK0"
  },
  "type": "ButtonClicked",
  "id": "bTKmM0",
  "actions": {
    "0": {
      "properties": {
        "password2": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKhl0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "password": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKha0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "require_confirm": true,
        "old_password": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKht0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "change_password": true,
        "do_not_show_success_alert": true
      },
      "type": "UpdateCredentials",
      "id": "bTKmS0"
    },
    "1": {
      "properties": {
        "value": false,
        "element_id": "bTKdM0",
        "custom_state": "custom.change_password__"
      },
      "type": "SetCustomState",
      "id": "bTKmX0"
    },
    "2": {
      "type": "ResetInputs",
      "id": "bTKmZ0"
    }
  }
};
