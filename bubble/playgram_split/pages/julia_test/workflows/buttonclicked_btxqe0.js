export const ButtonClicked_bTxQE0 = {
  "properties": {
    "element_id": "bTxPt0"
  },
  "type": "ButtonClicked",
  "id": "bTxPz0",
  "actions": {
    "0": {
      "properties": {
        "ALj": {
          "entries": {
            "0": "Pro"
          },
          "type": "TextExpression"
        },
        "ALn": 1,
        "ALo": {
          "entries": {
            "0": "https://app.playgram.ai/version-433a8/julia-test?debug_mode=true"
          },
          "type": "TextExpression"
        },
        "ALp": {
          "entries": {
            "0": "https://app.playgram.ai/version-433a8/julia-test?debug_mode=true"
          },
          "type": "TextExpression"
        },
        "AME": {
          "entries": {
            "0": "test_user@gmail.com"
          },
          "type": "TextExpression"
        },
        "AMF": {
          "entries": {
            "0": "subscription"
          },
          "type": "TextExpression"
        },
        "AOW": {
          "entries": {
            "0": "price_1T0MQ453ewXi1nuC9aO37EI2"
          },
          "type": "TextExpression"
        },
        "AYt": {
          "entries": {
            "0": "\"card\""
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALh",
      "id": "bTxQL0"
    },
    "1": {
      "properties": {
        "element_id": "bTxQF0",
        "ALg": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxQL0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALf",
      "id": "bTxQQ0"
    },
    "2": {
      "properties": {
        "value": {
          "next": {
            "type": "Message",
            "name": "_p_cancel_url",
            "is_slidable": false
          },
          "properties": {
            "provider": "1568986136566x208317327136522240.ANf",
            "url_params_Session ID": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxQL0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "type": "GetDataFromAPI"
        },
        "element_id": "bTqKZ0",
        "custom_state": "custom.test_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "type": "Message",
                "name": "error",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxQL0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "custom_state": "custom.test2_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTxRL0"
    }
  }
};
