export const user_settings_shortcut_btns = {
  "properties": {
    "event_name": "user-settings-shortcut-btns",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTqxb",
        "param_name": "shortcut"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvDj1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTKlo0",
        "arguments": {
          "0": {
            "param_id": "bTqwx",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvDj1",
                "optional": false,
                "param_id": "bTqxb",
                "param_name": "shortcut"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTvDt1"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTvDo1"
    }
  }
};
