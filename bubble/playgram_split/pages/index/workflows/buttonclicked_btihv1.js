export const ButtonClicked_bTiHv1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "share_access_boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTiHD1"
  },
  "type": "ButtonClicked",
  "id": "bTiHt1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "share_access_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTiUA1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "shared_access_chat__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "files_list_custom_file",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTiUA1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "type_to_change": "custom.file"
      },
      "type": "ChangeListOfThings",
      "id": "bTsyB0"
    },
    "2": {
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
      "id": "bTiHz1"
    },
    "3": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTiRe1"
    },
    "4": {
      "properties": {
        "length": 1500,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTiRj1"
    },
    "5": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTiRl1"
    }
  }
};
