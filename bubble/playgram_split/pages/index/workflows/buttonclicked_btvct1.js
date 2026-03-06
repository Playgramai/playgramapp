export const ButtonClicked_bTvCt1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "popup_AddProjectChat",
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.last_shortcut_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTukf1",
    "wf_folder": "bTupd1"
  },
  "type": "ButtonClicked",
  "id": "bTvCn1",
  "actions": {
    "0": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTqFF2",
            "arg_value": {
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTqFJ2",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTvAJ1"
      },
      "type": "TriggerCustomEvent",
      "id": "bTvCs1"
    }
  }
};
