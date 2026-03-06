export const ButtonClicked_bTJMN = {
  "properties": {
    "element_id": "bTJKr",
    "breakpoint": false
  },
  "type": "ButtonClicked",
  "id": "bTJMB",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTJIt"
      },
      "type": "ToggleElement",
      "id": "bTJMG"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "owner"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "user_type_option_user_type__os_",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus_element",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.user_type__os_",
            "option_value": "all values"
          },
          "type": "OptionValue"
        },
        "element_id": "bTJJL",
        "custom_state": "custom.delete_memories__"
      },
      "type": "SetCustomState",
      "id": "bTJMH"
    },
    "2": {
      "properties": {
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTJJL"
      },
      "type": "DisplayGroupData",
      "id": "bTJML"
    },
    "3": {
      "properties": {
        "element_id": "bTJJL"
      },
      "type": "ShowElement",
      "id": "bTJMM"
    }
  }
};
