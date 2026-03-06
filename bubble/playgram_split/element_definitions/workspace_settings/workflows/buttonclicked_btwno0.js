export const ButtonClicked_bTwNO0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "user_email_for_search_text",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "to_lowercase",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTgle0"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "constraint_type": "text contains string"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTdVj1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTdWL1",
    "wf_folder": "bTdbL1"
  },
  "type": "ButtonClicked",
  "id": "bTwNH0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTiin2",
        "duration": 100,
        "animation": "transition.fadeIn",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTwNP0"
    },
    "1": {
      "properties": {
        "length": 3000
      },
      "type": "PauseWFClient",
      "id": "bTwNU0"
    },
    "2": {
      "properties": {
        "element_id": "bTiin2",
        "duration": 400,
        "animation": "transition.fadeOut",
        "customize_duration": true
      },
      "type": "AnimateElement",
      "id": "bTwNZ0"
    }
  }
};
