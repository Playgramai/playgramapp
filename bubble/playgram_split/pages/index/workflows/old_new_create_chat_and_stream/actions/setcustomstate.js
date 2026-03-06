export const setcustomstate = {
  "properties": {
    "value": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "action_id": "bTnZf0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "type": "Message",
          "name": "plus_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.streaming_chats_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTUdV0",
    "custom_state": "custom.streaming_chats_",
    "custom_states_values": {
      "0": {
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTnZf0"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "2": "<#NANI?>",
                      "3": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAV",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUhb0"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "4": "",
                      "5": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "<#NANI?>",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "last_element",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "separator": {
                                                  "entries": {
                                                    "0": ";"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "split_by",
                                              "is_slidable": true
                                            },
                                            "type": "Message",
                                            "name": "get_group_data",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "element_id": "bTVNO"
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
                                        "0": ""
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "is_not_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "last_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "separator": {
                                "entries": {
                                  "0": ";"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "split_by",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "get_group_data",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTVNO"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      },
                      "6": ""
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "ArbitraryText"
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.new_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "custom_state": "custom.new_message_"
      }
    }
  },
  "type": "SetCustomState",
  "id": "bTnZg0"
};
