export const share_chat = {
  "properties": {
    "event_name": "share_chat ",
    "wf_folder": "bTupd1"
  },
  "type": "CustomEvent",
  "id": "bTvCZ1",
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
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiHD1"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTvCb1"
    },
    "1": {
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
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiHD1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "3": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "1497473108162x748255442121523200-AAU",
      "id": "bTvCf1"
    },
    "2": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTvCg1"
    },
    "3": {
      "properties": {
        "length": 1500,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTvCh1"
    },
    "4": {
      "properties": {
        "element_id": "bTiRL1",
        "duration": 400,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTvCl1"
    }
  }
};
