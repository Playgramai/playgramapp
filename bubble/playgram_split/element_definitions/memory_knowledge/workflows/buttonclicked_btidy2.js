export const ButtonClicked_bTidY2 = {
  "properties": {
    "element_id": "bTiaY2"
  },
  "type": "ButtonClicked",
  "id": "bTidS2",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-delete-memory-file\");"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvuX2"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "get_AAI",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTiLT2"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTdrj2",
        "custom_state": "custom.file_url_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTifJ2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.uuid_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTidr2"
    },
    "2": {
      "properties": {
        "element_id": "bTdrj2"
      },
      "type": "ShowElement",
      "id": "bTidX2"
    }
  }
};
