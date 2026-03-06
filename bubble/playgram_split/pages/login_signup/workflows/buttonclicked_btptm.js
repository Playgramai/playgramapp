export const ButtonClicked_bTPtM = {
  "properties": {
    "element_id": "bTPtB"
  },
  "type": "ButtonClicked",
  "id": "bTPtH",
  "actions": {
    "0": {
      "properties": {
        "url_to_delete": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTPXb"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTPtN"
    },
    "1": {
      "properties": {
        "element_id": "bTKPI",
        "custom_state": "custom.logo_"
      },
      "type": "SetCustomState",
      "id": "bTPtX"
    },
    "2": {
      "type": "ResetInputs",
      "id": "bTPtS"
    }
  }
};
