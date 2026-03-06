export const reset_rg_messages = {
  "properties": {
    "event_name": "reset_rg_messages",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTsyN1",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTthR0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": {
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
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTthR0",
            "optional": false,
            "param_id": "bTsyN1",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTtat0"
      },
      "type": "ResetGroup",
      "id": "bTthT0",
      "name": "Reset Group Parent RG"
    }
  }
};
