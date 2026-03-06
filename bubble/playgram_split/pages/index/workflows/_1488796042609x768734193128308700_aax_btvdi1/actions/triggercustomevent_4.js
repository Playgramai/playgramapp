export const triggercustomevent_4 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "popup_AddProjectChat rg_Enter",
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "Created By",
                  "is_slidable": false
                },
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
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
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
    "arguments": {
      "0": {
        "param_id": "bTqFF2",
        "arg_value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "custom.shortcut_rg_index_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "specific_item",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTukb1"
          },
          "type": "GetElement",
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
  "id": "bTvDh1"
};
