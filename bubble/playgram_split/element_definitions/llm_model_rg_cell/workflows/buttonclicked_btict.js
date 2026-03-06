export const ButtonClicked_bTict = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "default_model_option_llm_models__os_",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "element_id": "bTicJ"
  },
  "type": "ButtonClicked",
  "id": "bTicn",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "default_model_option_llm_models__os_",
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTicp"
    },
    "1": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bToZn0",
            "arg_value": {
              "type": "ElementParent",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bToZc0"
      },
      "type": "TriggerCustomEvent",
      "id": "bToaF0"
    }
  }
};
