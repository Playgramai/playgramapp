export const show_custom_instructions = {
  "properties": {
    "event_name": "show_custom_instructions"
  },
  "type": "CustomEvent",
  "id": "bTcPI",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTKdM0"
      },
      "type": "ShowElement",
      "id": "bTcPO"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "image_image",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTKdM0",
        "custom_state": "custom.user_image_"
      },
      "type": "SetCustomState",
      "id": "bTcPT"
    },
    "2": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.user_settings__os_",
            "option_value": "personalization"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTKdM0",
        "custom_state": "custom.tab_"
      },
      "type": "SetCustomState",
      "id": "bTcPV"
    }
  }
};
