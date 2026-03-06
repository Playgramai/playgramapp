export const ButtonClicked_bTxQi = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "completed_boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTPuZ",
    "breakpoint": true
  },
  "type": "ButtonClicked",
  "id": "bTxQV",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "HideElement",
      "id": "bTxQX"
    },
    "1": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.hide_members_"
      },
      "type": "SetCustomState",
      "id": "bTxQb"
    },
    "2": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTxQd"
    },
    "3": {
      "properties": {
        "url": {
          "entries": {
            "0": {
              "properties": {
                "name": "Website Home"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": "login-signup?mode=onboarding&workspace=",
            "2": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "3": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTxQh"
    }
  }
};
