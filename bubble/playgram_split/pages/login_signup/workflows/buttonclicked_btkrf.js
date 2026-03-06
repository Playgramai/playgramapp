export const ButtonClicked_bTKRf = {
  "properties": {
    "element_id": "bTKQc"
  },
  "type": "ButtonClicked",
  "id": "bTKRd",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bToYt3"
      },
      "type": "ShowElement",
      "id": "bToYz3"
    },
    "1": {
      "properties": {
        "email": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPT"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "password": {
          "next": {
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPZ"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "remember_email": false
      },
      "type": "LogIn",
      "id": "bTKRj"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bToYf3"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTUcA0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bToYf3"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "invitations"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTQHX0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bToYf3"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "value": {
          "properties": {
            "option_set": "option.onboarding_steps__os_",
            "option_value": "step_1"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.onboarding_step_"
      },
      "type": "SetCustomState",
      "id": "bTPsz"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bToYf3"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "onboarding_finished__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "mode",
            "value": {
              "entries": {
                "0": "onboarding"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTQFM"
    }
  }
};
