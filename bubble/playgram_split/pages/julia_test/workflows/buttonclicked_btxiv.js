export const ButtonClicked_bTxiv = {
  "properties": {
    "element_id": "bTxin"
  },
  "type": "ButtonClicked",
  "id": "bTxit",
  "actions": {
    "0": {
      "properties": {
        "ALj": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "ALo": {
          "entries": {
            "0": "https://app.playgram.ai/version-433a8/julia-test?debug_mode=true&setup=success"
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
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "email",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AMF": {
          "entries": {
            "0": "setup"
          },
          "type": "TextExpression"
        },
        "AML": {
          "entries": {
            "0": "off_session"
          },
          "type": "TextExpression"
        },
        "AOS": {
          "type": "TextExpression"
        },
        "AOW": {
          "entries": {
            "0": "",
            "2": ""
          },
          "type": "TextExpression"
        },
        "AYt": {
          "entries": {
            "0": "\"card\",\"link\""
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALh",
      "id": "bTxiz"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "stripe_setup_intent_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "intent_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxiz"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
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
      "id": "bTxjG"
    },
    "2": {
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
                "action_id": "bTxiz"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALf",
      "id": "bTxjT"
    }
  }
};
