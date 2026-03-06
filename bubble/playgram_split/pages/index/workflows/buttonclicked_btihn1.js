export const ButtonClicked_bTiHn1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "share_access_boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTiGx1",
    "workflow_disabled": true
  },
  "type": "ButtonClicked",
  "id": "bTiHi1",
  "actions": {
    "0": {
      "properties": {
        "AAg": {
          "entries": {
            "0": {
              "properties": {
                "name": "Website Home"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": "?chat=",
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
      "type": "1497473108162x748255442121523200-AAU",
      "id": "bTiHo1"
    },
    "1": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTiRq1"
    },
    "2": {
      "properties": {
        "length": 1500,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTiSD1"
    },
    "3": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTiSB1"
    }
  }
};
