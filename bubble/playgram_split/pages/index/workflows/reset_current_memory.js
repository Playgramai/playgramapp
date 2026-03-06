export const reset_current_memory = {
  "properties": {
    "event_name": "reset_current_memory",
    "wf_folder": "CustomEvent",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTQQD0",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUuG0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0",
        "custom_state": "custom.saving_removing_processing_"
      },
      "type": "SetCustomState",
      "id": "bTUuH0"
    }
  }
};
