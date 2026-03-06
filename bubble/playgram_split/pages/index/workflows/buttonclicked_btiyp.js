export const ButtonClicked_bTIyP = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.chat_type__os_",
            "option_value": "temporary"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "value": "option.chat_type__os_",
        "parameter_name": {
          "entries": {
            "0": "type"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "element_id": "bTkfr2"
  },
  "type": "ButtonClicked",
  "id": "bTUqL0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": false
      },
      "type": "ChangePage",
      "id": "bTUqP0"
    }
  }
};
