export const ConditionTrue_bTvaa = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "not_contains",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "members_list_custom_workspace",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUif0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUif0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time",
    "wf_folder": "ConditionTrue"
  },
  "type": "ConditionTrue",
  "id": "bTvaP",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTvab"
    }
  }
};
