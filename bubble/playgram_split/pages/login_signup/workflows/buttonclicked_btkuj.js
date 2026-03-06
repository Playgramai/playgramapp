export const ButtonClicked_bTKUj = {
  "properties": {
    "element_id": "bTKTn"
  },
  "type": "ButtonClicked",
  "id": "bTKUX",
  "actions": {
    "0": {
      "properties": {
        "to": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKVH"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "body": {
          "entries": {
            "0": "Hello,\n\nSomeone (hopefully you!) submitted a request to reset your password. If it wasn't you, please ignore this message. If it was you, you can reset your password at the below link.\n\nThe Playgram Team\n\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "SendPasswordResetEmail",
      "id": "bTKVl0"
    },
    "1": {
      "properties": {
        "element_id": "bTKVa0"
      },
      "type": "ShowElement",
      "id": "bTKVP"
    }
  }
};
