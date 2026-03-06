export const delete_shortcut = {
  "properties": {
    "event_name": "delete-shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTptE",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuwV1",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIml0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTIsO0"
      },
      "type": "DisplayGroupData",
      "id": "bTuwa1"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTuwV1",
            "optional": false,
            "param_id": "bTptE",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTIsO0",
        "custom_state": "custom.project_"
      },
      "type": "SetCustomState",
      "id": "bTuwb1"
    },
    "2": {
      "properties": {
        "element_id": "bTIsO0"
      },
      "type": "ShowElement",
      "id": "bTuwf1"
    }
  }
};
