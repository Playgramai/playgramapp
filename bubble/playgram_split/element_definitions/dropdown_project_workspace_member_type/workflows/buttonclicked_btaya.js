export const ButtonClicked_bTaya = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.user_type__os_",
              "option_value": "user"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTavN",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTauk"
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
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTawF"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "element_id": "bTawF",
    "wf_folder": "bTqIt0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTayV",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "unsaved_admins_list_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTauk"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "param_bTavN",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTauk"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "breakpoint": false
      },
      "type": "ChangeThing",
      "id": "bTayb"
    },
    "1": {
      "properties": {
        "element_id": "bTavf"
      },
      "type": "HideElement",
      "id": "bTayg"
    }
  }
};
