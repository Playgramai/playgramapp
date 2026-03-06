export const triggercustomevent_3 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "rg",
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "escape",
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTpet"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_contains",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.last_shortcut_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "arguments": {
      "0": {
        "param_id": "bTpiw",
        "arg_value": {
          "next": {
            "next": {
              "args": "sidebarState",
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "sidebarClose"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "sidebarOpen"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "format_boolean",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.open__",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUjC0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAV",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTpet"
                        },
                        "type": "ThisElement",
                        "is_slidable": false
                      },
                      "2": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTpet"
          },
          "type": "ThisElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTuxD1"
  },
  "type": "TriggerCustomEvent",
  "id": "bTvDb1"
};
