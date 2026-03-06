export const ButtonClicked_bTcQF = {
  "properties": {
    "element_id": "bTcPl"
  },
  "type": "ButtonClicked",
  "id": "bTcPt",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "personal_instructions_list_text",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "get_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTKkZ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "plus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.empty_list_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKdH0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": "set_list"
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
      "id": "bTcPy"
    },
    "1": {
      "properties": {
        "element_id": "bTcPm",
        "duration": 500,
        "animation": "transition.slideRightIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTcPz"
    },
    "2": {
      "properties": {
        "length": 2000
      },
      "type": "PauseWFClient",
      "id": "bTcQD"
    },
    "3": {
      "properties": {
        "element_id": "bTcPm",
        "duration": 300,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTcQE"
    }
  }
};
