export const ConditionTrue_bTuqB1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTulJ1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time",
    "wf_folder": "bTupd1"
  },
  "type": "ConditionTrue",
  "id": "bTupv1",
  "actions": {
    "0": {
      "properties": {
        "value": 1,
        "element_id": "bTUdV0",
        "custom_state": "custom.shortcut_rg_index_"
      },
      "type": "SetCustomState",
      "id": "bTupx1"
    }
  }
};
