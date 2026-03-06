export const ButtonClicked_bTnad0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
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
          },
          "type": "Message",
          "name": "contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.streaming_chats_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bToMH",
    "event_color": "green",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTnaX0",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.liteMux.stop(\"",
            "1": {
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
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": "\");"
          },
          "type": "TextExpression"
        },
        "AAi": true
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTnac0"
    }
  }
};
