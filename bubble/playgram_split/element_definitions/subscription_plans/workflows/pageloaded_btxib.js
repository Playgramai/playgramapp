export const PageLoaded_bTxib = {
  "properties": {
    "condition": {
      "next": {
        "args": "success",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "setup"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "wf_folder": "PageLoaded"
  },
  "type": "PageLoaded",
  "id": "bTxiW",
  "actions": {
    "0": {
      "properties": {
        "params_customer": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "customer_id_text",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "subscription_custom_subscription",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "organization_workspace_custom_organization",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_Payment method ID": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_p_payment_method",
                "is_slidable": false
              },
              "properties": {
                "provider": "1568986136566x208317327136522240.AMb",
                "url_params_SetupIntent ID": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "stripe_setup_intent_id_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetDataFromAPI",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-AMY",
      "id": "bTxij"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "stripe_payment_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_p_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxij"
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
            "next": {
              "next": {
                "type": "Message",
                "name": "subscription_custom_subscription",
                "is_slidable": false
              },
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxlo"
    },
    "2": {
      "properties": {
        "url_params_subscription_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "subscription_id_text",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxlo"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_default_payment_method": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "stripe_payment_id_text",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxlo"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTxdH.bTxkn",
      "id": "bTxlt"
    },
    "3": {
      "properties": {
        "element_id": "bTxlv"
      },
      "type": "HideElement",
      "id": "bTxmL"
    }
  }
};
