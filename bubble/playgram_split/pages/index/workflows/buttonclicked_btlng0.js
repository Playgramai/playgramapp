export const ButtonClicked_bTLNG0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_AAE",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUik0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bToMH",
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTUsa0",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "visualizer_index.stop();"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTUsb0"
    },
    "1": {
      "properties": {
        "element_id": "bTUik0",
        "AAT": true
      },
      "type": "1631898919530x371869522674581500-AAG",
      "id": "bTUsf0"
    },
    "2": {
      "properties": {
        "value": true,
        "element_id": "bTUdV0",
        "custom_state": "custom.speech_to_text_loading_"
      },
      "type": "SetCustomState",
      "id": "bTcbb"
    }
  }
};
