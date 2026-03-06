export const OnPageError_bTngn2 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "USED_EMAIL",
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
  "id": "bTngi2",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTngV2",
        "duration": 500,
        "animation": "transition.fadeIn"
      },
      "type": "AnimateElement",
      "id": "bTngo2"
    },
    "1": {
      "properties": {
        "element_id": "bTKSD"
      },
      "type": "SetFocusToElement",
      "id": "bTnhF2"
    },
    "2": {
      "properties": {
        "length": 3000
      },
      "type": "PauseWFClient",
      "id": "bTngt2"
    },
    "3": {
      "properties": {
        "element_id": "bTngV2",
        "duration": 500,
        "animation": "transition.fadeOut"
      },
      "type": "AnimateElement",
      "id": "bTnhA2"
    }
  }
};
