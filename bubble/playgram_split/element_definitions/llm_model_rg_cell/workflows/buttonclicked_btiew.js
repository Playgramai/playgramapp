export const ButtonClicked_bTiEW = {
  "properties": {
    "condition": {
      "next": {
        "args": 1024,
        "next": {
          "args": {
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
              "name": "custom.llm_provider_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTbDp0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "less_or_equal_than",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTbDp0",
        "name": "Current Page Width"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "element_id": "bTbDr0",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTiEP",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTiDP"
      },
      "type": "ToggleElement",
      "id": "bTiEX"
    },
    "1": {
      "properties": {
        "value": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTbDp0",
        "custom_state": "custom.llm_provider_"
      },
      "type": "SetCustomState",
      "id": "bTiEc"
    }
  }
};
