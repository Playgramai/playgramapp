export const ButtonClicked_bTqJF0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.user_type__os_",
              "option_value": "admin"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
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
    "wf_folder": "bTqIu0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTqIv0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "user_type_option_user_type__os_",
            "value": {
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "admin"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
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
        }
      },
      "type": "ChangeThing",
      "id": "bTqJA0"
    },
    "1": {
      "properties": {
        "element_id": "bTavf"
      },
      "type": "HideElement",
      "id": "bTqJB0"
    }
  }
};
