export const OnPageError_bTnej2 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "INVALID_LOGIN_CREDENTIALS",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "code",
        "is_slidable": false
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "type": "OnPageError",
  "id": "bTnee2",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTKPT"
      },
      "type": "SetFocusToElement",
      "id": "bTnew2"
    },
    "1": {
      "properties": {
        "element_id": "bTneR2",
        "duration": 500,
        "animation": "transition.fadeIn"
      },
      "type": "AnimateElement",
      "id": "bTnek2"
    },
    "2": {
      "properties": {
        "length": 3000,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTnep2"
    },
    "3": {
      "properties": {
        "element_id": "bTneR2",
        "duration": 500,
        "animation": "transition.fadeOut"
      },
      "type": "AnimateElement",
      "id": "bTner2"
    }
  }
};
