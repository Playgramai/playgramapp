export const ButtonClicked_bTvTd0 = {
  "properties": {
    "element_id": "bTvTF0"
  },
  "type": "ButtonClicked",
  "id": "bTvTY0",
  "actions": {
    "0": {
      "properties": {
        "url_params_version": {
          "entries": {
            "0": "/version-",
            "1": {
              "properties": {
                "name": "AppVersion"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTMBs0.bTrIG1",
      "id": "bTvTe0"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "_api_c2_response.signed_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvTe0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTqKZ0",
        "custom_state": "custom.test_"
      },
      "type": "SetCustomState",
      "id": "bTvSp0"
    }
  }
};
