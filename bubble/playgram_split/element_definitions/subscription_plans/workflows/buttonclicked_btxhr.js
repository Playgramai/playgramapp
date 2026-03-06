export const ButtonClicked_bTxhr = {
  "properties": {
    "element_id": "bTxfj"
  },
  "type": "ButtonClicked",
  "id": "bTxgY",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTxlv"
      },
      "type": "ShowElement",
      "id": "bTxmG"
    },
    "1": {
      "properties": {
        "ALj": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "ALo": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "name": "Website Home"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": "?tab=workspace_settings&sub_tab=subscription&setup=success"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "ALp": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": {
                      "properties": {
                        "name": "Website Home"
                      },
                      "type": "PageData",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "1": "?tab=workspace_settings&sub_tab=subscription"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": ""
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
      "id": "bTxhz"
    },
    "2": {
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
                    "action_id": "bTxhz"
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
      "id": "bTxiR"
    },
    "3": {
      "properties": {
        "element_id": "bTxiE",
        "ALg": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxhz"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALf",
      "id": "bTxiK"
    }
  }
};
