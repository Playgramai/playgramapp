export const show_popup = {
  "properties": {
    "event_name": "show_popup"
  },
  "type": "CustomEvent",
  "id": "bTKgN0",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-user-settings\");"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvJK1"
    },
    "1": {
      "properties": {
        "element_id": "bTKdM0"
      },
      "type": "ShowElement",
      "id": "bTKgR0"
    },
    "2": {
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
      "id": "bTayt"
    }
  }
};
