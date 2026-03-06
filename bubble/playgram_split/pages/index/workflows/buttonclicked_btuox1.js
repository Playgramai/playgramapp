export const ButtonClicked_bTuoX1 = {
  "properties": {
    "element_id": "bTukl1",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTuoL1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "llm_model_option_llm_models__os_",
            "value": {
              "type": "ElementParent",
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
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTuoQ1"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_setModel('",
            "1": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "2": "');\nbubble_fn_resetTools();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTuoR1"
    },
    "2": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "HideElement",
      "id": "bTuoV1"
    },
    "3": {
      "properties": {
        "element_id": "bTukZ1"
      },
      "type": "ResetGroup",
      "id": "bTuoW1"
    }
  }
};
