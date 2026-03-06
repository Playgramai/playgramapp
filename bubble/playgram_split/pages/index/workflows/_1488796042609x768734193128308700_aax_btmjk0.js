export const _1488796042609x768734193128308700_AAX_bTMjK0 = {
  "properties": {
    "element_id": "bTUhc0"
  },
  "type": "1488796042609x768734193128308700-AAX",
  "id": "bTUti0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "_api_c2__additional.id",
                    "value": {
                      "entries": {
                        "0": {
                          "next": {
                            "type": "Message",
                            "name": "get_ACJ",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUhc0"
                          },
                          "type": "ThisElement",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTtan0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.message_for_rte_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "</b>"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": " [/b]"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "<b>"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "[b]"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "</i>"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": " [/i]"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "find_replace",
                    "is_slidable": true
                  },
                  "properties": {
                    "find": {
                      "entries": {
                        "0": "<i>"
                      },
                      "type": "TextExpression"
                    },
                    "replace": {
                      "entries": {
                        "0": "[i]"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_ACI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTLeh"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "custom_state": "custom.text_for_rte_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTUtj0",
      "name": "Set state message_for_rte of index"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "const fgCanvas = document.getElementById('fgCanvas');\n\n// \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c, \u0447\u0442\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442\nif (fgCanvas) {\n    fgCanvas.style.visibility = 'visible';\n}"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTUtn0"
    }
  }
};
