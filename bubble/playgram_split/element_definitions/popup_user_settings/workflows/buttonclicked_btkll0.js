export const ButtonClicked_bTKlL0 = {
  "properties": {
    "element_id": "bTKkr0"
  },
  "type": "ButtonClicked",
  "id": "bTKlJ0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKhP0"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "image_image",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTYZs"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQCj"
    },
    "1": {
      "properties": {
        "element_id": "bTbCb",
        "duration": 500,
        "animation": "transition.slideRightIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTbCt"
    },
    "2": {
      "properties": {
        "length": 2000
      },
      "type": "PauseWFClient",
      "id": "bTbCv"
    },
    "3": {
      "properties": {
        "element_id": "bTbCb",
        "duration": 300,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTbDA"
    }
  }
};
