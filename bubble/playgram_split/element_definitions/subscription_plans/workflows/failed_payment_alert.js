export const failed_payment_alert = {
  "properties": {
    "event_name": "failed_payment_alert"
  },
  "type": "CustomEvent",
  "id": "bTxrj",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTxrR",
        "duration": 500,
        "animation": "transition.fadeIn",
        "customize_duration": false
      },
      "type": "AnimateElement",
      "id": "bTxrp"
    },
    "1": {
      "properties": {
        "length": 4000,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTxru"
    },
    "2": {
      "properties": {
        "element_id": "bTxrR",
        "duration": 500,
        "animation": "transition.fadeOut",
        "customize_duration": false
      },
      "type": "AnimateElement",
      "id": "bTxrz"
    },
    "3": {
      "properties": {
        "element_id": "bTxqO"
      },
      "type": "HideElement",
      "id": "bTxsL"
    }
  }
};
